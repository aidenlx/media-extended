declare global {
  var MX_MESSAGE_PORT: Promise<MessagePort>;
}

import { getSubscribeFunc, initStateFromHost } from "mx-store";
import * as Selectors from "mx-store/src/selector";
import * as Slices from "mx-store/src/slice";
import type * as API from "mx-user-script";

import { createStore } from "../store/remote-store";
import { SendUserScriptID } from "./const";
import hookStoreToHTMLPlayer from "./hook-player";

const store = createStore("media-extended");

window.MX_MESSAGE_PORT.then((port) => {
  store.webviewMsg.port = port;
  port.addEventListener("message", ({ data: [type, code] }) => {
    if (type === SendUserScriptID) {
      executeScript(code);
    }
  });
  initStateFromHost(store);
});

const MODULES: {
  "mx-user-script": typeof API;
  [key: string]: any;
} = {
  "mx-user-script": {
    registerPlayer: (player) => hookStoreToHTMLPlayer(player, store),
    dispatch: store.dispatch,
    getState: store.getState,
    subscribe: getSubscribeFunc(store),
    handle: store.emitter.on.bind(store.emitter),
    Selectors,
    Slices,
  },
};

const require = (module: string) => {
  if (module in MODULES) {
    return MODULES[module];
  }
  throw new Error(`module ${module} not found`);
};

const executeScript = (script: string) => {
  console.log("execute user script");
  window.eval("(function anonymous(require,module,exports){" + script + "\n})")(
    require,
  );
};