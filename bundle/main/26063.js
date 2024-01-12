export const l = {
  now: () => (l.delegate || Date).now(),
  delegate: undefined
};