import * as t from "22261";
i({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== t
}, {
  exec: t
});