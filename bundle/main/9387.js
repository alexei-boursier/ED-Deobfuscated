require("26699");
require("32023");
import * as k from "86675";
export var nx = {
  ALT: 18,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  ARROW_UP: 38,
  AUDIO_DOWN: (0, k.vU)() ? 182 : 174,
  AUDIO_MUTE: (0, k.vU)() ? 181 : 173,
  AUDIO_UP: (0, k.vU)() ? 183 : 175,
  BACKSPACE: 8,
  CAPS_LOCK: 20,
  COMMA: 188,
  COMMAND_LEFT: 91,
  COMMAND_RIGHT: 93,
  COMMAND_FIREFOX: 224,
  CONTROL: 17,
  DELETE: 46,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  HOME: 36,
  INSERT: 45,
  MEDIA_NEXT: 176,
  MEDIA_PLAY_PAUSE: 179,
  MEDIA_PREV: 177,
  MEDIA_STOP: 178,
  NULL: 0,
  NUM_LOCK: 144,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PAUSE: 19,
  PERIOD: 190,
  SCROLL_LOCK: 145,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  A: 65,
  C: 67,
  D: 68,
  F: 70,
  L: 76,
  O: 79,
  P: 80,
  S: 83,
  V: 86,
  X: 88,
  Y: 89,
  Z: 90
};
var v = [nx.ALT, nx.ARROW_DOWN, nx.ARROW_LEFT, nx.ARROW_RIGHT, nx.ARROW_UP, nx.AUDIO_DOWN, nx.AUDIO_MUTE, nx.AUDIO_UP, nx.BACKSPACE, nx.CAPS_LOCK, nx.DELETE, nx.END, nx.ENTER, nx.ESCAPE, nx.F1, nx.F2, nx.F3, nx.F4, nx.F5, nx.F6, nx.F7, nx.F8, nx.F9, nx.F10, nx.F11, nx.F12, nx.F13, nx.F14, nx.F15, nx.F16, nx.F17, nx.F18, nx.F19, nx.HOME, nx.INSERT, nx.MEDIA_NEXT, nx.MEDIA_PLAY_PAUSE, nx.MEDIA_PREV, nx.MEDIA_STOP, nx.NULL, nx.NUM_LOCK, nx.PAGE_DOWN, nx.PAGE_UP, nx.PAUSE, nx.SCROLL_LOCK, nx.SHIFT, nx.TAB];
export function DC(E) {
  return v.includes(E);
}
export function T2(E) {
  return [nx.CONTROL, nx.COMMAND_LEFT, nx.COMMAND_RIGHT, nx.COMMAND_FIREFOX].includes(E);
}
export function ot(E, O) {
  var x = O.split("|");
  var U = false;
  (0, b.Bk)(x, function (B) {
    if (E === nx[B]) {
      U = true;
      return false;
    }
  });
  return U;
}