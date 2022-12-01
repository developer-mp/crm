import window, * as fromWindow from "./window.js";

export const getWindow = (windowId) => fromWindow.getWindow(window, windowId);

export const getWindowCount = (type) => fromWindow.getWindowCount(window, type);
