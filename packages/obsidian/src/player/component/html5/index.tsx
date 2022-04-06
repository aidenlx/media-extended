import { useAppDispatch, useAppSelector } from "@player/hooks";
import { createPlayer, destroyPlayer } from "@player/slice/html5";
import { setRatio } from "@player/slice/interface";
import AspectRatio from "@player/utils/aspect-ratio";
import { useMemoizedFn } from "ahooks";
import React, { RefCallback, useCallback, useRef } from "react";

import { useApplyTimeFragment, useTimeFragmentEvents } from "../hooks/fragment";
import {
  useApplyPlaybackRate,
  useApplyVolume,
  useStateEventHanlders,
} from "../hooks/media-props";
import { useApplyUserSeek } from "../hooks/user-seek";
import { EventHandler, EventHandlers, useEventHandler } from "./event";
import {
  useApplyPaused,
  useError,
  useProgress,
  useSeeking,
  useUpdateBuffer,
  useUpdateSeekState,
} from "./media-props";
import { useLoadSources } from "./sources";
import { useSubscribe } from "./utils";
import { useWebmFixes } from "./webm-fix";

const useActions = (
  ref: React.MutableRefObject<HTMLMediaElement | null>,
): void => {
  useApplyTimeFragment(useSubscribe, ref);
  useApplyPlaybackRate(useSubscribe, ref);
  useApplyVolume(useSubscribe, ref);
  useApplyUserSeek(useSubscribe, ref);
  useApplyPaused(ref);
  useUpdateBuffer(ref);
  useUpdateSeekState(ref);
  useLoadSources(ref);
};

const useUpdateRatio = () => {
  const dispatch = useAppDispatch();
  return {
    onLoadedMetadata: useMemoizedFn<EventHandler>((event) => {
      const { videoWidth, videoHeight } = event.instance as HTMLVideoElement;
      if (videoHeight && videoWidth) {
        dispatch(setRatio(`${videoWidth}/${videoHeight}`));
      }
    }),
  };
};

const useEvents = (): EventHandlers<HTMLVideoElement | HTMLAudioElement> => {
  const { onPlay: restrictTimeOnPlay, onTimeUpdate: restrictTimeOnTimeUpdate } =
      useTimeFragmentEvents(),
    { onLoadedMetadata: webmFix } = useWebmFixes(),
    { onProgress, onCanPlay } = useProgress(),
    { onError } = useError(),
    { onSeeked, onSeeking } = useSeeking(),
    {
      onDurationChange,
      onEnded,
      onPause,
      onPlay: setPlayState,
      onRateChange,
      onTimeUpdate: setCurrentTimeState,
      onVolumeChange,
      onWaiting,
    } = useStateEventHanlders();

  const { onLoadedMetadata: setRatio } = useUpdateRatio();

  return {
    onRateChange: useEventHandler(onRateChange),
    onPlay: useEventHandler(setPlayState, restrictTimeOnPlay),
    onPause: useEventHandler(onPause),
    onTimeUpdate: useEventHandler(
      setCurrentTimeState,
      restrictTimeOnTimeUpdate,
    ),
    onCanPlay: useEventHandler(onCanPlay),
    onVolumeChange: useEventHandler(onVolumeChange),
    onDurationChange: useEventHandler(onDurationChange),
    onLoadedMetadata: useEventHandler(webmFix, setRatio),
    onSeeked: useEventHandler(onSeeked),
    onSeeking: useEventHandler(onSeeking),
    onWaiting: useEventHandler(onWaiting),
    onProgress: useEventHandler(onProgress),
    onEnded: useEventHandler(onEnded),
    onError: useEventHandler(onError),
  };
};

const useRefCallback = (
  ref: React.MutableRefObject<HTMLMediaElement | null>,
): RefCallback<HTMLMediaElement | null> => {
  const dispatch = useAppDispatch();
  return useCallback(
    (el) => {
      ref.current = el;
      if (el) {
        dispatch(createPlayer());
      } else {
        dispatch(destroyPlayer());
      }
    },
    [dispatch, ref],
  );
};

const HTMLPlayer = () => {
  const provider = useAppSelector((state) => state.provider);

  const autoPlay = useAppSelector((state) => state.controls.autoplay),
    loop = useAppSelector((state) => state.controls.loop),
    controls = useAppSelector((state) => state.interface.nativeControls);

  const refObj = useRef<HTMLMediaElement | null>(null),
    ref = useRefCallback(refObj);

  useActions(refObj);

  const props = {
    ref,
    loop,
    // preload: "auto",
    autoPlay,
    controls,
    ...useEvents(),
  };
  let player;
  if (provider) {
    const children = (
      <>
        {provider.sources.map((p) => (
          <source key={p.src} {...p} />
        ))}
        {provider.tracks.map((p) => (
          <track key={p.src} {...p} />
        ))}
      </>
    );
    if (provider.from === "video") {
      player = <video {...props}>{children}</video>;
    } else if (provider.from === "audio") {
      player = <audio {...props}>{children}</audio>;
    }
  }
  return <AspectRatio>{player}</AspectRatio>;
};
export default HTMLPlayer;