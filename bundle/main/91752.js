import * as i from "94650";
import * as b from "24006";
import _default5 from "74472";
/**
       * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md.
       */
function v(I, E) {}
let C;
export let u = (() => {
  class I {
    constructor(O, x) {
      this.elementRef = O;
      this.ngZone = x;
      this.tagName = "textarea";
      this.type = "classic";
      this.ready = new i.vpe();
      this.dataReady = new i.vpe();
      this.change = new i.vpe();
      this.dataChange = new i.vpe();
      this.dragStart = new i.vpe();
      this.dragEnd = new i.vpe();
      this.drop = new i.vpe();
      this.fileUploadResponse = new i.vpe();
      this.fileUploadRequest = new i.vpe();
      this.focus = new i.vpe();
      this.paste = new i.vpe();
      this.afterPaste = new i.vpe();
      this.blur = new i.vpe();
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
      this.editorUrl = "https://cdn.ckeditor.com/4.16.0/standard-all/ckeditor.js";
    }
    set data(O) {
      if (O !== this._data) {
        if (this.instance) {
          this.instance.setData(O);
          this._data = this.instance.getData();
          return;
        }
        this._data = O;
      }
    }
    get data() {
      return this._data;
    }
    set readOnly(O) {
      if (this.instance) {
        this.instance.setReadOnly(O);
      } else {
        this._readOnly = O;
      }
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      } else {
        return this._readOnly;
      }
    }
    ngAfterViewInit() {
      (function w(I) {
        if (I.length < 1) {
          return Promise.reject(new TypeError("CKEditor URL must be a non-empty string."));
        } else if ("CKEDITOR" in window) {
          return Promise.resolve(CKEDITOR);
        } else {
          C ||= new Promise((E, O) => {
            _default5(I, x => {
              if (x) {
                O(x);
              } else {
                E(CKEDITOR);
              }
              C = undefined;
            });
          });
          return C;
        }
      }
      /**
             * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
             * For licensing, see LICENSE.md.
             */)(this.editorUrl).then(() => {
        if (!this._destroyed) {
          this.ngZone.runOutsideAngular(this.createEditor.bind(this));
        }
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(O) {
      this.data = O;
    }
    registerOnChange(O) {
      this.onChange = O;
    }
    registerOnTouched(O) {
      this.onTouched = O;
    }
    createEditor() {
      const O = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(O);
      const x = this.type === "inline" ? CKEDITOR.inline(O, this.config) : CKEDITOR.replace(O, this.config);
      x.once("instanceReady", U => {
        this.instance = x;
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const B = x.undoManager;
        if (this.data !== null) {
          if (B) {
            B.lock();
          }
          x.setData(this.data, {
            callback: () => {
              if (this.data !== x.getData()) {
                x.fire(B ? "change" : "dataReady");
              }
              if (B) {
                B.unlock();
              }
              this.ngZone.run(() => {
                this.ready.emit(U);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            this.ready.emit(U);
          });
        }
      });
    }
    subscribe(O) {
      O.on("focus", x => {
        this.ngZone.run(() => {
          this.focus.emit(x);
        });
      });
      O.on("paste", x => {
        this.ngZone.run(() => {
          this.paste.emit(x);
        });
      });
      O.on("afterPaste", x => {
        this.ngZone.run(() => {
          this.afterPaste.emit(x);
        });
      });
      O.on("dragend", x => {
        this.ngZone.run(() => {
          this.dragEnd.emit(x);
        });
      });
      O.on("dragstart", x => {
        this.ngZone.run(() => {
          this.dragStart.emit(x);
        });
      });
      O.on("drop", x => {
        this.ngZone.run(() => {
          this.drop.emit(x);
        });
      });
      O.on("fileUploadRequest", x => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(x);
        });
      });
      O.on("fileUploadResponse", x => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(x);
        });
      });
      O.on("blur", x => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(x);
        });
      });
      O.on("dataReady", this.propagateChange, this);
      O.on(this.instance.undoManager ? "change" : "selectionCheck", this.propagateChange, this);
    }
    propagateChange(O) {
      this.ngZone.run(() => {
        const x = this.instance.getData();
        if (O.name === "change") {
          this.change.emit(O);
        } else if (O.name === "dataReady") {
          this.dataReady.emit(O);
        }
        if (x !== this.data) {
          this._data = x;
          this.dataChange.emit(x);
          if (this.onChange) {
            this.onChange(x);
          }
        }
      });
    }
  }
  I.ɵfac = function (O) {
    return new (O || I)(i.Y36(i.SBq), i.Y36(i.R0b));
  };
  I.ɵcmp = i.Xpm({
    type: I,
    selectors: [["ckeditor"]],
    inputs: {
      tagName: "tagName",
      type: "type",
      editorUrl: "editorUrl",
      data: "data",
      readOnly: "readOnly",
      config: "config"
    },
    outputs: {
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    features: [i._Bn([{
      provide: b.JU,
      useExisting: (0, i.Gpc)(() => I),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function (O, x) {
      if (O & 1) {
        i.YNc(0, v, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return I;
})();
export let d = (() => {
  class I {}
  I.ɵfac = function (O) {
    return new (O || I)();
  };
  I.ɵmod = i.oAB({
    type: I
  });
  I.ɵinj = i.cJS({
    imports: [b.u5, t.ez]
  });
  return I;
})();