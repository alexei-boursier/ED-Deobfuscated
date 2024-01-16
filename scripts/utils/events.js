/* Webpack Module: 2 (scripts) */
export default function (eventsObject) {
  /* Webpack Export: exports = function () {...} */
  return function () {
    var events = {};
    for (var property in this._events) {
      var event = this._events[property];
      if (event.id.toString().indexOf("#") == -1) {
        events[event.id] = event;
      }
    }
    return events;
  }.bind(eventsObject);
}
