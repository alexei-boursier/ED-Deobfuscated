export function d(t) {
  const k = t(M => {
    Error.call(M);
    M.stack = new Error().stack;
  });
  k.prototype = Object.create(Error.prototype);
  k.prototype.constructor = k;
  return k;
}