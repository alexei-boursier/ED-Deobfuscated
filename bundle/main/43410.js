export const z = {
  setTimeout(t, b, ...k) {
    const {
      delegate: M
    } = z;
    if (M?.setTimeout) {
      return M.setTimeout(t, b, ...k);
    } else {
      return setTimeout(t, b, ...k);
    }
  },
  clearTimeout(t) {
    const {
      delegate: b
    } = z;
    return (b?.clearTimeout || clearTimeout)(t);
  },
  delegate: undefined
};