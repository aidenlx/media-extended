import { PlayerStore } from "mx-store";
import React from "react";
import { Provider } from "react-redux";

import { IPlayerContext, PlayerContext } from "./context";
import Player from "./player";

const PlayerWarpper = ({
  store,
  inEditor = false,
  onFocus,
  onBlur,
  ...context
}: {
  store: PlayerStore;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
} & IPlayerContext) => {
  return (
    <React.StrictMode>
      <PlayerContext.Provider value={{ inEditor, ...context }}>
        <Provider store={store}>
          <Player onFocus={onFocus} onBlur={onBlur} />
        </Provider>
      </PlayerContext.Provider>
    </React.StrictMode>
  );
};

export type { IPlayerContext };
export type { IActions } from "./context";
export { PlayerContext };

export { PlayerWarpper as Player };

export { default as config } from "./config";
export {
  getBiliInjectCode,
  handleBiliInjectCodeReq,
} from "./get-code/bilibili";
export { moniterScreenshotMsg, sendScreenshot } from "./hook-player/screenshot";
export { moniterTimestampMsg, sendTimestamp } from "./hook-player/timestamp";
export * from "./store";
export * from "./thunk/fetch-meta";
export type { UserScriptMeta as UserscriptMeta } from "./user-script/parser";
export { parseMeta } from "./user-script/parser";
export { testScript } from "./user-script/tester";