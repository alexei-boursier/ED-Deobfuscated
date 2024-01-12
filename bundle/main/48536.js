import * as i from "94650";
import * as t from "45007";
import * as b from "95698";
import * as k from "18505";
import * as M from "70262";
import * as v from "28746";
import * as w from "60515";
var S = function L() {
  var Oe = [].slice.call(arguments);
  var Ee = false;
  if (typeof Oe[0] == "boolean") {
    Ee = Oe.shift();
  }
  var ke = Oe[0];
  if (E(ke)) {
    throw new Error("extendee must be an object");
  }
  for (var Be = Oe.slice(1), De = Be.length, Qe = 0; Qe < De; Qe++) {
    var It = Be[Qe];
    for (var Yt in It) {
      if (Object.prototype.hasOwnProperty.call(It, Yt)) {
        var Dn = It[Yt];
        if (Ee && I(Dn)) {
          var Et = Array.isArray(Dn) ? [] : {};
          ke[Yt] = L(true, Object.prototype.hasOwnProperty.call(ke, Yt) && !E(ke[Yt]) ? ke[Yt] : Et, Dn);
        } else {
          ke[Yt] = Dn;
        }
      }
    }
  }
  return ke;
};
function I(Oe) {
  return Array.isArray(Oe) || {}.toString.call(Oe) == "[object Object]";
}
function E(Oe) {
  return !Oe || typeof Oe != "object" && typeof Oe != "function";
}
function O(Oe) {
  if (Oe && Oe.__esModule) {
    return Oe.default;
  } else {
    return Oe;
  }
}
class x {
  on(Ee, ke) {
    this._callbacks = this._callbacks || {};
    this._callbacks[Ee] ||= [];
    this._callbacks[Ee].push(ke);
    return this;
  }
  emit(Ee, ...ke) {
    this._callbacks = this._callbacks || {};
    let Be = this._callbacks[Ee];
    if (Be) {
      for (let De of Be) {
        De.apply(this, ke);
      }
    }
    if (this.element) {
      this.element.dispatchEvent(this.makeEvent("dropzone:" + Ee, {
        args: ke
      }));
    }
    return this;
  }
  makeEvent(Ee, ke) {
    let Be = {
      bubbles: true,
      cancelable: true,
      detail: ke
    };
    if (typeof window.CustomEvent == "function") {
      return new CustomEvent(Ee, Be);
    }
    var De = document.createEvent("CustomEvent");
    De.initCustomEvent(Ee, Be.bubbles, Be.cancelable, Be.detail);
    return De;
  }
  off(Ee, ke) {
    if (!this._callbacks || arguments.length === 0) {
      this._callbacks = {};
      return this;
    }
    let Be = this._callbacks[Ee];
    if (!Be) {
      return this;
    }
    if (arguments.length === 1) {
      delete this._callbacks[Ee];
      return this;
    }
    for (let De = 0; De < Be.length; De++) {
      if (Be[De] === ke) {
        Be.splice(De, 1);
        break;
      }
    }
    return this;
  }
}
var F = {
  url: null,
  method: "post",
  withCredentials: false,
  timeout: null,
  parallelUploads: 2,
  uploadMultiple: false,
  chunking: false,
  forceChunking: false,
  chunkSize: 2097152,
  parallelChunkUploads: false,
  retryChunks: false,
  retryChunksLimit: 3,
  maxFilesize: 256,
  paramName: "file",
  createImageThumbnails: true,
  maxThumbnailFilesize: 10,
  thumbnailWidth: 120,
  thumbnailHeight: 120,
  thumbnailMethod: "crop",
  resizeWidth: null,
  resizeHeight: null,
  resizeMimeType: null,
  resizeQuality: 0.8,
  resizeMethod: "contain",
  filesizeBase: 1000,
  maxFiles: null,
  headers: null,
  defaultHeaders: true,
  clickable: true,
  ignoreHiddenFiles: true,
  acceptedFiles: null,
  acceptedMimeTypes: null,
  autoProcessQueue: true,
  autoQueue: true,
  addRemoveLinks: false,
  previewsContainer: null,
  disablePreviews: false,
  hiddenInputContainer: "body",
  capture: null,
  renameFilename: null,
  renameFile: null,
  forceFallback: false,
  dictDefaultMessage: "Drop files here to upload",
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
  dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
  dictInvalidFileType: "You can't upload files of this type.",
  dictResponseError: "Server responded with {{statusCode}} code.",
  dictCancelUpload: "Cancel upload",
  dictUploadCanceled: "Upload canceled.",
  dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
  dictRemoveFile: "Remove file",
  dictRemoveFileConfirmation: null,
  dictMaxFilesExceeded: "You can not upload any more files.",
  dictFileSizeUnits: {
    tb: "TB",
    gb: "GB",
    mb: "MB",
    kb: "KB",
    b: "b"
  },
  init() {},
  params(Oe, Ee, ke) {
    if (ke) {
      return {
        dzuuid: ke.file.upload.uuid,
        dzchunkindex: ke.index,
        dztotalfilesize: ke.file.size,
        dzchunksize: this.options.chunkSize,
        dztotalchunkcount: ke.file.upload.totalChunkCount,
        dzchunkbyteoffset: ke.index * this.options.chunkSize
      };
    }
  },
  accept: (Oe, Ee) => Ee(),
  chunksUploaded: function (Oe, Ee) {
    Ee();
  },
  binaryBody: false,
  fallback() {
    let Oe;
    this.element.className = `${this.element.className} dz-browser-not-supported`;
    for (let ke of this.element.getElementsByTagName("div")) {
      if (/(^| )dz-message($| )/.test(ke.className)) {
        Oe = ke;
        ke.className = "dz-message";
        break;
      }
    }
    if (!Oe) {
      Oe = Z.createElement("<div class=\"dz-message\"><span></span></div>");
      this.element.appendChild(Oe);
    }
    let Ee = Oe.getElementsByTagName("span")[0];
    if (Ee) {
      if (Ee.textContent != null) {
        Ee.textContent = this.options.dictFallbackMessage;
      } else if (Ee.innerText != null) {
        Ee.innerText = this.options.dictFallbackMessage;
      }
    }
    return this.element.appendChild(this.getFallbackForm());
  },
  resize(Oe, Ee, ke, Be) {
    let De = {
      srcX: 0,
      srcY: 0,
      srcWidth: Oe.width,
      srcHeight: Oe.height
    };
    let Qe = Oe.width / Oe.height;
    if (Ee == null && ke == null) {
      Ee = De.srcWidth;
      ke = De.srcHeight;
    } else if (Ee == null) {
      Ee = ke * Qe;
    } else if (ke == null) {
      ke = Ee / Qe;
    }
    let It = (Ee = Math.min(Ee, De.srcWidth)) / (ke = Math.min(ke, De.srcHeight));
    if (De.srcWidth > Ee || De.srcHeight > ke) {
      if (Be === "crop") {
        if (Qe > It) {
          De.srcHeight = Oe.height;
          De.srcWidth = De.srcHeight * It;
        } else {
          De.srcWidth = Oe.width;
          De.srcHeight = De.srcWidth / It;
        }
      } else {
        if (Be !== "contain") {
          throw new Error(`Unknown resizeMethod '${Be}'`);
        }
        if (Qe > It) {
          ke = Ee / Qe;
        } else {
          Ee = ke * Qe;
        }
      }
    }
    De.srcX = (Oe.width - De.srcWidth) / 2;
    De.srcY = (Oe.height - De.srcHeight) / 2;
    De.trgWidth = Ee;
    De.trgHeight = ke;
    return De;
  },
  transformFile(Oe, Ee) {
    if ((this.options.resizeWidth || this.options.resizeHeight) && Oe.type.match(/image.*/)) {
      return this.resizeImage(Oe, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, Ee);
    } else {
      return Ee(Oe);
    }
  },
  previewTemplate: O("<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size=\"\"></span></div>\n    <div class=\"dz-filename\"><span data-dz-name=\"\"></span></div>\n  </div>\n  <div class=\"dz-progress\">\n    <span class=\"dz-upload\" data-dz-uploadprogress=\"\"></span>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage=\"\"></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z\"></path>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z\"></path>\n    </svg>\n  </div>\n</div>\n"),
  drop(Oe) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragstart(Oe) {},
  dragend(Oe) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragenter(Oe) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragover(Oe) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragleave(Oe) {
    return this.element.classList.remove("dz-drag-hover");
  },
  paste(Oe) {},
  reset() {
    return this.element.classList.remove("dz-started");
  },
  addedfile(Oe) {
    if (this.element === this.previewsContainer) {
      this.element.classList.add("dz-started");
    }
    if (this.previewsContainer && !this.options.disablePreviews) {
      for (var Ee of (Oe.previewElement = Z.createElement(this.options.previewTemplate.trim()), Oe.previewTemplate = Oe.previewElement, this.previewsContainer.appendChild(Oe.previewElement), Oe.previewElement.querySelectorAll("[data-dz-name]"))) {
        Ee.textContent = Oe.name;
      }
      for (Ee of Oe.previewElement.querySelectorAll("[data-dz-size]")) {
        Ee.innerHTML = this.filesize(Oe.size);
      }
      if (this.options.addRemoveLinks) {
        Oe._removeLink = Z.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
        Oe.previewElement.appendChild(Oe._removeLink);
      }
      let ke = Be => {
        Be.preventDefault();
        Be.stopPropagation();
        if (Oe.status === Z.UPLOADING) {
          return Z.confirm(this.options.dictCancelUploadConfirmation, () => this.removeFile(Oe));
        } else if (this.options.dictRemoveFileConfirmation) {
          return Z.confirm(this.options.dictRemoveFileConfirmation, () => this.removeFile(Oe));
        } else {
          return this.removeFile(Oe);
        }
      };
      for (let Be of Oe.previewElement.querySelectorAll("[data-dz-remove]")) {
        Be.addEventListener("click", ke);
      }
    }
  },
  removedfile(Oe) {
    if (Oe.previewElement != null && Oe.previewElement.parentNode != null) {
      Oe.previewElement.parentNode.removeChild(Oe.previewElement);
    }
    return this._updateMaxFilesReachedClass();
  },
  thumbnail(Oe, Ee) {
    if (Oe.previewElement) {
      Oe.previewElement.classList.remove("dz-file-preview");
      for (let ke of Oe.previewElement.querySelectorAll("[data-dz-thumbnail]")) {
        ke.alt = Oe.name;
        ke.src = Ee;
      }
      return setTimeout(() => Oe.previewElement.classList.add("dz-image-preview"), 1);
    }
  },
  error(Oe, Ee) {
    if (Oe.previewElement) {
      Oe.previewElement.classList.add("dz-error");
      if (typeof Ee != "string" && Ee.error) {
        Ee = Ee.error;
      }
      for (let ke of Oe.previewElement.querySelectorAll("[data-dz-errormessage]")) {
        ke.textContent = Ee;
      }
    }
  },
  errormultiple() {},
  processing(Oe) {
    if (Oe.previewElement && (Oe.previewElement.classList.add("dz-processing"), Oe._removeLink)) {
      return Oe._removeLink.innerHTML = this.options.dictCancelUpload;
    }
  },
  processingmultiple() {},
  uploadprogress(Oe, Ee, ke) {
    if (Oe.previewElement) {
      for (let Be of Oe.previewElement.querySelectorAll("[data-dz-uploadprogress]")) {
        if (Be.nodeName === "PROGRESS") {
          Be.value = Ee;
        } else {
          Be.style.width = `${Ee}%`;
        }
      }
    }
  },
  totaluploadprogress() {},
  sending() {},
  sendingmultiple() {},
  success(Oe) {
    if (Oe.previewElement) {
      return Oe.previewElement.classList.add("dz-success");
    }
  },
  successmultiple() {},
  canceled(Oe) {
    return this.emit("error", Oe, this.options.dictUploadCanceled);
  },
  canceledmultiple() {},
  complete(Oe) {
    if (Oe._removeLink) {
      Oe._removeLink.innerHTML = this.options.dictRemoveFile;
    }
    if (Oe.previewElement) {
      return Oe.previewElement.classList.add("dz-complete");
    }
  },
  completemultiple() {},
  maxfilesexceeded() {},
  maxfilesreached() {},
  queuecomplete() {},
  addedfiles() {}
};
class Z extends x {
  static initClass() {
    this.prototype.Emitter = x;
    this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
    this.prototype._thumbnailQueue = [];
    this.prototype._processingThumbnail = false;
  }
  getAcceptedFiles() {
    return this.files.filter(Ee => Ee.accepted).map(Ee => Ee);
  }
  getRejectedFiles() {
    return this.files.filter(Ee => !Ee.accepted).map(Ee => Ee);
  }
  getFilesWithStatus(Ee) {
    return this.files.filter(ke => ke.status === Ee).map(ke => ke);
  }
  getQueuedFiles() {
    return this.getFilesWithStatus(Z.QUEUED);
  }
  getUploadingFiles() {
    return this.getFilesWithStatus(Z.UPLOADING);
  }
  getAddedFiles() {
    return this.getFilesWithStatus(Z.ADDED);
  }
  getActiveFiles() {
    return this.files.filter(Ee => Ee.status === Z.UPLOADING || Ee.status === Z.QUEUED).map(Ee => Ee);
  }
  init() {
    if (this.element.tagName === "form") {
      this.element.setAttribute("enctype", "multipart/form-data");
    }
    if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
      this.element.appendChild(Z.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
    }
    if (this.clickableElements.length) {
      let Be = () => {
        if (this.hiddenFileInput) {
          this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        }
        this.hiddenFileInput = document.createElement("input");
        this.hiddenFileInput.setAttribute("type", "file");
        if (this.options.maxFiles === null || this.options.maxFiles > 1) {
          this.hiddenFileInput.setAttribute("multiple", "multiple");
        }
        this.hiddenFileInput.className = "dz-hidden-input";
        if (this.options.acceptedFiles !== null) {
          this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
        }
        if (this.options.capture !== null) {
          this.hiddenFileInput.setAttribute("capture", this.options.capture);
        }
        this.hiddenFileInput.setAttribute("tabindex", "-1");
        this.hiddenFileInput.style.visibility = "hidden";
        this.hiddenFileInput.style.position = "absolute";
        this.hiddenFileInput.style.top = "0";
        this.hiddenFileInput.style.left = "0";
        this.hiddenFileInput.style.height = "0";
        this.hiddenFileInput.style.width = "0";
        Z.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
        this.hiddenFileInput.addEventListener("change", () => {
          let {
            files: De
          } = this.hiddenFileInput;
          if (De.length) {
            for (let Qe of De) {
              this.addFile(Qe);
            }
          }
          this.emit("addedfiles", De);
          Be();
        });
      };
      Be();
    }
    this.URL = window.URL !== null ? window.URL : window.webkitURL;
    for (let Be of this.events) {
      this.on(Be, this.options[Be]);
    }
    this.on("uploadprogress", () => this.updateTotalUploadProgress());
    this.on("removedfile", () => this.updateTotalUploadProgress());
    this.on("canceled", Be => this.emit("complete", Be));
    this.on("complete", Be => {
      if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
        return setTimeout(() => this.emit("queuecomplete"), 0);
      }
    });
    let ke = function (Be) {
      if (function (Be) {
        if (Be.dataTransfer.types) {
          for (var De = 0; De < Be.dataTransfer.types.length; De++) {
            if (Be.dataTransfer.types[De] === "Files") {
              return true;
            }
          }
        }
        return false;
      }(Be)) {
        Be.stopPropagation();
        if (Be.preventDefault) {
          return Be.preventDefault();
        } else {
          return Be.returnValue = false;
        }
      }
    };
    this.listeners = [{
      element: this.element,
      events: {
        dragstart: Be => this.emit("dragstart", Be),
        dragenter: Be => {
          ke(Be);
          return this.emit("dragenter", Be);
        },
        dragover: Be => {
          let De;
          try {
            De = Be.dataTransfer.effectAllowed;
          } catch {}
          Be.dataTransfer.dropEffect = De === "move" || De === "linkMove" ? "move" : "copy";
          ke(Be);
          return this.emit("dragover", Be);
        },
        dragleave: Be => this.emit("dragleave", Be),
        drop: Be => {
          ke(Be);
          return this.drop(Be);
        },
        dragend: Be => this.emit("dragend", Be)
      }
    }];
    this.clickableElements.forEach(Be => this.listeners.push({
      element: Be,
      events: {
        click: De => {
          if (Be !== this.element || De.target === this.element || Z.elementInside(De.target, this.element.querySelector(".dz-message"))) {
            this.hiddenFileInput.click();
          }
          return true;
        }
      }
    }));
    this.enable();
    return this.options.init.call(this);
  }
  destroy() {
    this.disable();
    this.removeAllFiles(true);
    if (this.hiddenFileInput != null && this.hiddenFileInput.parentNode) {
      this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
      this.hiddenFileInput = null;
    }
    delete this.element.dropzone;
    return Z.instances.splice(Z.instances.indexOf(this), 1);
  }
  updateTotalUploadProgress() {
    let Ee;
    let ke = 0;
    let Be = 0;
    if (this.getActiveFiles().length) {
      for (let Qe of this.getActiveFiles()) {
        ke += Qe.upload.bytesSent;
        Be += Qe.upload.total;
      }
      Ee = ke * 100 / Be;
    } else {
      Ee = 100;
    }
    return this.emit("totaluploadprogress", Ee, Be, ke);
  }
  _getParamName(Ee) {
    if (typeof this.options.paramName == "function") {
      return this.options.paramName(Ee);
    } else {
      return `${this.options.paramName}${this.options.uploadMultiple ? `[${Ee}]` : ""}`;
    }
  }
  _renameFile(Ee) {
    if (typeof this.options.renameFile != "function") {
      return Ee.name;
    } else {
      return this.options.renameFile(Ee);
    }
  }
  getFallbackForm() {
    let Ee;
    let ke;
    if (Ee = this.getExistingFallback()) {
      return Ee;
    }
    let Be = "<div class=\"dz-fallback\">";
    if (this.options.dictFallbackText) {
      Be += `<p>${this.options.dictFallbackText}</p>`;
    }
    Be += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? "multiple=\"multiple\"" : undefined} /><input type="submit" value="Upload!"></div>`;
    let De = Z.createElement(Be);
    if (this.element.tagName !== "FORM") {
      ke = Z.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
      ke.appendChild(De);
    } else {
      this.element.setAttribute("enctype", "multipart/form-data");
      this.element.setAttribute("method", this.options.method);
    }
    return ke ?? De;
  }
  getExistingFallback() {
    let Ee = function (Be) {
      for (let De of Be) {
        if (/(^| )fallback($| )/.test(De.className)) {
          return De;
        }
      }
    };
    for (let Be of ["div", "form"]) {
      var ke;
      if (ke = Ee(this.element.getElementsByTagName(Be))) {
        return ke;
      }
    }
  }
  setupEventListeners() {
    return this.listeners.map(Ee => (() => {
      let ke = [];
      for (let Be in Ee.events) {
        ke.push(Ee.element.addEventListener(Be, Ee.events[Be], false));
      }
      return ke;
    })());
  }
  removeEventListeners() {
    return this.listeners.map(Ee => (() => {
      let ke = [];
      for (let Be in Ee.events) {
        ke.push(Ee.element.removeEventListener(Be, Ee.events[Be], false));
      }
      return ke;
    })());
  }
  disable() {
    this.clickableElements.forEach(Ee => Ee.classList.remove("dz-clickable"));
    this.removeEventListeners();
    this.disabled = true;
    return this.files.map(Ee => this.cancelUpload(Ee));
  }
  enable() {
    delete this.disabled;
    this.clickableElements.forEach(Ee => Ee.classList.add("dz-clickable"));
    return this.setupEventListeners();
  }
  filesize(Ee) {
    let ke = 0;
    let Be = "b";
    if (Ee > 0) {
      let De = ["tb", "gb", "mb", "kb", "b"];
      for (let Qe = 0; Qe < De.length; Qe++) {
        let It = De[Qe];
        if (Ee >= Math.pow(this.options.filesizeBase, 4 - Qe) / 10) {
          ke = Ee / Math.pow(this.options.filesizeBase, 4 - Qe);
          Be = It;
          break;
        }
      }
      ke = Math.round(ke * 10) / 10;
    }
    return `<strong>${ke}</strong> ${this.options.dictFileSizeUnits[Be]}`;
  }
  _updateMaxFilesReachedClass() {
    if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
      if (this.getAcceptedFiles().length === this.options.maxFiles) {
        this.emit("maxfilesreached", this.files);
      }
      return this.element.classList.add("dz-max-files-reached");
    } else {
      return this.element.classList.remove("dz-max-files-reached");
    }
  }
  drop(Ee) {
    if (!Ee.dataTransfer) {
      return;
    }
    this.emit("drop", Ee);
    let ke = [];
    for (let Be = 0; Be < Ee.dataTransfer.files.length; Be++) {
      ke[Be] = Ee.dataTransfer.files[Be];
    }
    if (ke.length) {
      let {
        items: Be
      } = Ee.dataTransfer;
      if (Be && Be.length && Be[0].webkitGetAsEntry != null) {
        this._addFilesFromItems(Be);
      } else {
        this.handleFiles(ke);
      }
    }
    this.emit("addedfiles", ke);
  }
  paste(Ee) {
    if (function se(Oe, Ee) {
      if (typeof Oe !== "undefined" && Oe !== null) {
        return Ee(Oe);
      } else {
        return undefined;
      }
    }(Ee?.clipboardData, Be => Be.items) == null) {
      return;
    }
    this.emit("paste", Ee);
    let {
      items: ke
    } = Ee.clipboardData;
    if (ke.length) {
      return this._addFilesFromItems(ke);
    } else {
      return undefined;
    }
  }
  handleFiles(Ee) {
    for (let ke of Ee) {
      this.addFile(ke);
    }
  }
  _addFilesFromItems(Ee) {
    return (() => {
      let ke = [];
      for (let De of Ee) {
        var Be;
        if (De.webkitGetAsEntry != null && (Be = De.webkitGetAsEntry())) {
          ke.push(Be.isFile ? this.addFile(De.getAsFile()) : Be.isDirectory ? this._addFilesFromDirectory(Be, Be.name) : undefined);
        } else {
          ke.push(De.getAsFile == null || De.kind != null && De.kind !== "file" ? undefined : this.addFile(De.getAsFile()));
        }
      }
      return ke;
    })();
  }
  _addFilesFromDirectory(Ee, ke) {
    let Be = Ee.createReader();
    let De = It => function W(Oe, Ee, ke) {
      if (typeof Oe !== "undefined" && Oe !== null && typeof Oe[Ee] == "function") {
        return ke(Oe, Ee);
      }
    }(console, "log", Yt => Yt.log(It));
    var Qe = () => Be.readEntries(It => {
      if (It.length > 0) {
        for (let Yt of It) {
          if (Yt.isFile) {
            Yt.file(Dn => {
              if (!this.options.ignoreHiddenFiles || Dn.name.substring(0, 1) !== ".") {
                Dn.fullPath = `${ke}/${Dn.name}`;
                return this.addFile(Dn);
              }
            });
          } else if (Yt.isDirectory) {
            this._addFilesFromDirectory(Yt, `${ke}/${Yt.name}`);
          }
        }
        Qe();
      }
      return null;
    }, De);
    return Qe();
  }
  accept(Ee, ke) {
    if (this.options.maxFilesize && Ee.size > this.options.maxFilesize * 1048576) {
      ke(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(Ee.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
    } else if (Z.isValidFile(Ee, this.options.acceptedFiles)) {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        ke(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        this.emit("maxfilesexceeded", Ee);
      } else {
        this.options.accept.call(this, Ee, ke);
      }
    } else {
      ke(this.options.dictInvalidFileType);
    }
  }
  addFile(Ee) {
    Ee.upload = {
      uuid: Z.uuidv4(),
      progress: 0,
      total: Ee.size,
      bytesSent: 0,
      filename: this._renameFile(Ee)
    };
    this.files.push(Ee);
    Ee.status = Z.ADDED;
    this.emit("addedfile", Ee);
    this._enqueueThumbnail(Ee);
    this.accept(Ee, ke => {
      if (ke) {
        Ee.accepted = false;
        this._errorProcessing([Ee], ke);
      } else {
        Ee.accepted = true;
        if (this.options.autoQueue) {
          this.enqueueFile(Ee);
        }
      }
      this._updateMaxFilesReachedClass();
    });
  }
  enqueueFiles(Ee) {
    for (let ke of Ee) {
      this.enqueueFile(ke);
    }
    return null;
  }
  enqueueFile(Ee) {
    if (Ee.status !== Z.ADDED || Ee.accepted !== true) {
      throw new Error("This file can't be queued because it has already been processed or was rejected.");
    }
    Ee.status = Z.QUEUED;
    if (this.options.autoProcessQueue) {
      return setTimeout(() => this.processQueue(), 0);
    }
  }
  _enqueueThumbnail(Ee) {
    if (this.options.createImageThumbnails && Ee.type.match(/image.*/) && Ee.size <= this.options.maxThumbnailFilesize * 1048576) {
      this._thumbnailQueue.push(Ee);
      return setTimeout(() => this._processThumbnailQueue(), 0);
    }
  }
  _processThumbnailQueue() {
    if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
      return;
    }
    this._processingThumbnail = true;
    let Ee = this._thumbnailQueue.shift();
    return this.createThumbnail(Ee, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, ke => {
      this.emit("thumbnail", Ee, ke);
      this._processingThumbnail = false;
      return this._processThumbnailQueue();
    });
  }
  removeFile(Ee) {
    if (Ee.status === Z.UPLOADING) {
      this.cancelUpload(Ee);
    }
    this.files = X(this.files, Ee);
    this.emit("removedfile", Ee);
    if (this.files.length === 0) {
      return this.emit("reset");
    }
  }
  removeAllFiles(Ee) {
    if (Ee == null) {
      Ee = false;
    }
    for (let ke of this.files.slice()) {
      if (ke.status !== Z.UPLOADING || Ee) {
        this.removeFile(ke);
      }
    }
    return null;
  }
  resizeImage(Ee, ke, Be, De, Qe) {
    return this.createThumbnail(Ee, ke, Be, De, true, (It, Yt) => {
      if (Yt == null) {
        return Qe(Ee);
      }
      {
        let {
          resizeMimeType: Dn
        } = this.options;
        if (Dn == null) {
          Dn = Ee.type;
        }
        let Et = Yt.toDataURL(Dn, this.options.resizeQuality);
        if (Dn === "image/jpeg" || Dn === "image/jpg") {
          Et = j.restore(Ee.dataURL, Et);
        }
        return Qe(Z.dataURItoBlob(Et));
      }
    });
  }
  createThumbnail(Ee, ke, Be, De, Qe, It) {
    let Yt = new FileReader();
    Yt.onload = () => {
      Ee.dataURL = Yt.result;
      if (Ee.type !== "image/svg+xml") {
        this.createThumbnailFromUrl(Ee, ke, Be, De, Qe, It);
      } else {
        It?.(Yt.result);
      }
    };
    Yt.readAsDataURL(Ee);
  }
  displayExistingFile(Ee, ke, Be, De, Qe = true) {
    this.emit("addedfile", Ee);
    this.emit("complete", Ee);
    if (Qe) {
      let It = Yt => {
        this.emit("thumbnail", Ee, Yt);
        if (Be) {
          Be();
        }
      };
      Ee.dataURL = ke;
      this.createThumbnailFromUrl(Ee, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, It, De);
    } else {
      this.emit("thumbnail", Ee, ke);
      if (Be) {
        Be();
      }
    }
  }
  createThumbnailFromUrl(Ee, ke, Be, De, Qe, It, Yt) {
    let Dn = document.createElement("img");
    if (Yt) {
      Dn.crossOrigin = Yt;
    }
    Qe = getComputedStyle(document.body).imageOrientation != "from-image" && Qe;
    Dn.onload = () => {
      let Et = lt => lt(1);
      if (typeof EXIF !== "undefined" && EXIF !== null && Qe) {
        Et = lt => EXIF.getData(Dn, function () {
          return lt(EXIF.getTag(this, "Orientation"));
        });
      }
      return Et(lt => {
        Ee.width = Dn.width;
        Ee.height = Dn.height;
        let et = this.options.resize.call(this, Ee, ke, Be, De);
        let St = document.createElement("canvas");
        let ve = St.getContext("2d");
        St.width = et.trgWidth;
        St.height = et.trgHeight;
        if (lt > 4) {
          St.width = et.trgHeight;
          St.height = et.trgWidth;
        }
        switch (lt) {
          case 2:
            ve.translate(St.width, 0);
            ve.scale(-1, 1);
            break;
          case 3:
            ve.translate(St.width, St.height);
            ve.rotate(Math.PI);
            break;
          case 4:
            ve.translate(0, St.height);
            ve.scale(1, -1);
            break;
          case 5:
            ve.rotate(Math.PI * 0.5);
            ve.scale(1, -1);
            break;
          case 6:
            ve.rotate(Math.PI * 0.5);
            ve.translate(0, -St.width);
            break;
          case 7:
            ve.rotate(Math.PI * 0.5);
            ve.translate(St.height, -St.width);
            ve.scale(-1, 1);
            break;
          case 8:
            ve.rotate(Math.PI * -0.5);
            ve.translate(-St.height, 0);
        }
        q(ve, Dn, et.srcX ?? 0, et.srcY ?? 0, et.srcWidth, et.srcHeight, et.trgX ?? 0, et.trgY ?? 0, et.trgWidth, et.trgHeight);
        let Lt = St.toDataURL("image/png");
        if (It != null) {
          return It(Lt, St);
        }
      });
    };
    if (It != null) {
      Dn.onerror = It;
    }
    return Dn.src = Ee.dataURL;
  }
  processQueue() {
    let {
      parallelUploads: Ee
    } = this.options;
    let ke = this.getUploadingFiles().length;
    let Be = ke;
    if (ke >= Ee) {
      return;
    }
    let De = this.getQueuedFiles();
    if (De.length > 0) {
      if (this.options.uploadMultiple) {
        return this.processFiles(De.slice(0, Ee - ke));
      }
      for (; Be < Ee;) {
        if (!De.length) {
          return;
        }
        this.processFile(De.shift());
        Be++;
      }
    }
  }
  processFile(Ee) {
    return this.processFiles([Ee]);
  }
  processFiles(Ee) {
    for (let ke of Ee) {
      ke.processing = true;
      ke.status = Z.UPLOADING;
      this.emit("processing", ke);
    }
    if (this.options.uploadMultiple) {
      this.emit("processingmultiple", Ee);
    }
    return this.uploadFiles(Ee);
  }
  _getFilesWithXhr(Ee) {
    return this.files.filter(Be => Be.xhr === Ee).map(Be => Be);
  }
  cancelUpload(Ee) {
    if (Ee.status === Z.UPLOADING) {
      let ke = this._getFilesWithXhr(Ee.xhr);
      for (let Be of ke) {
        Be.status = Z.CANCELED;
      }
      if (typeof Ee.xhr !== "undefined") {
        Ee.xhr.abort();
      }
      for (let Be of ke) {
        this.emit("canceled", Be);
      }
      if (this.options.uploadMultiple) {
        this.emit("canceledmultiple", ke);
      }
    } else if (Ee.status === Z.ADDED || Ee.status === Z.QUEUED) {
      Ee.status = Z.CANCELED;
      this.emit("canceled", Ee);
      if (this.options.uploadMultiple) {
        this.emit("canceledmultiple", [Ee]);
      }
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  }
  resolveOption(Ee, ...ke) {
    if (typeof Ee == "function") {
      return Ee.apply(this, ke);
    } else {
      return Ee;
    }
  }
  uploadFile(Ee) {
    return this.uploadFiles([Ee]);
  }
  uploadFiles(Ee) {
    this._transformFiles(Ee, ke => {
      if (this.options.chunking) {
        let Be = ke[0];
        Ee[0].upload.chunked = this.options.chunking && (this.options.forceChunking || Be.size > this.options.chunkSize);
        Ee[0].upload.totalChunkCount = Math.ceil(Be.size / this.options.chunkSize);
      }
      if (Ee[0].upload.chunked) {
        let Be = Ee[0];
        let De = ke[0];
        let Qe = 0;
        Be.upload.chunks = [];
        let It = () => {
          let Yt = 0;
          for (; Be.upload.chunks[Yt] !== undefined;) {
            Yt++;
          }
          if (Yt >= Be.upload.totalChunkCount) {
            return;
          }
          Qe++;
          let Dn = Yt * this.options.chunkSize;
          let Et = Math.min(Dn + this.options.chunkSize, De.size);
          let lt = {
            name: this._getParamName(0),
            data: De.webkitSlice ? De.webkitSlice(Dn, Et) : De.slice(Dn, Et),
            filename: Be.upload.filename,
            chunkIndex: Yt
          };
          Be.upload.chunks[Yt] = {
            file: Be,
            index: Yt,
            dataBlock: lt,
            status: Z.UPLOADING,
            progress: 0,
            retries: 0
          };
          this._uploadData(Ee, [lt]);
        };
        Be.upload.finishedChunkUpload = (Yt, Dn) => {
          let Et = true;
          Yt.status = Z.SUCCESS;
          Yt.dataBlock = null;
          Yt.response = Yt.xhr.responseText;
          Yt.responseHeaders = Yt.xhr.getAllResponseHeaders();
          Yt.xhr = null;
          for (let lt = 0; lt < Be.upload.totalChunkCount; lt++) {
            if (Be.upload.chunks[lt] === undefined) {
              return It();
            }
            if (Be.upload.chunks[lt].status !== Z.SUCCESS) {
              Et = false;
            }
          }
          if (Et) {
            this.options.chunksUploaded(Be, () => {
              this._finished(Ee, Dn, null);
            });
          }
        };
        if (this.options.parallelChunkUploads) {
          for (let Yt = 0; Yt < Be.upload.totalChunkCount; Yt++) {
            It();
          }
        } else {
          It();
        }
      } else {
        let Be = [];
        for (let De = 0; De < Ee.length; De++) {
          Be[De] = {
            name: this._getParamName(De),
            data: ke[De],
            filename: Ee[De].upload.filename
          };
        }
        this._uploadData(Ee, Be);
      }
    });
  }
  _getChunk(Ee, ke) {
    for (let Be = 0; Be < Ee.upload.totalChunkCount; Be++) {
      if (Ee.upload.chunks[Be] !== undefined && Ee.upload.chunks[Be].xhr === ke) {
        return Ee.upload.chunks[Be];
      }
    }
  }
  _uploadData(Ee, ke) {
    let Be = new XMLHttpRequest();
    for (let Et of Ee) {
      Et.xhr = Be;
    }
    if (Ee[0].upload.chunked) {
      Ee[0].upload.chunks[ke[0].chunkIndex].xhr = Be;
    }
    let De = this.resolveOption(this.options.method, Ee, ke);
    let Qe = this.resolveOption(this.options.url, Ee, ke);
    Be.open(De, Qe, true);
    if (this.resolveOption(this.options.timeout, Ee)) {
      Be.timeout = this.resolveOption(this.options.timeout, Ee);
    }
    Be.withCredentials = !!this.options.withCredentials;
    Be.onload = Et => {
      this._finishedUploading(Ee, Be, Et);
    };
    Be.ontimeout = () => {
      this._handleUploadError(Ee, Be, `Request timedout after ${this.options.timeout / 1000} seconds`);
    };
    Be.onerror = () => {
      this._handleUploadError(Ee, Be);
    };
    (Be.upload ?? Be).onprogress = Et => this._updateFilesUploadProgress(Ee, Be, Et);
    let Dn = this.options.defaultHeaders ? {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest"
    } : {};
    if (this.options.binaryBody) {
      Dn["Content-Type"] = Ee[0].type;
    }
    if (this.options.headers) {
      S(Dn, this.options.headers);
    }
    for (let Et in Dn) {
      let lt = Dn[Et];
      if (lt) {
        Be.setRequestHeader(Et, lt);
      }
    }
    if (this.options.binaryBody) {
      for (let Et of Ee) {
        this.emit("sending", Et, Be);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", Ee, Be);
      }
      this.submitRequest(Be, null, Ee);
    } else {
      let Et = new FormData();
      if (this.options.params) {
        let lt = this.options.params;
        if (typeof lt == "function") {
          lt = lt.call(this, Ee, Be, Ee[0].upload.chunked ? this._getChunk(Ee[0], Be) : null);
        }
        for (let et in lt) {
          let St = lt[et];
          if (Array.isArray(St)) {
            for (let ve = 0; ve < St.length; ve++) {
              Et.append(et, St[ve]);
            }
          } else {
            Et.append(et, St);
          }
        }
      }
      for (let lt of Ee) {
        this.emit("sending", lt, Be, Et);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", Ee, Be, Et);
      }
      this._addFormElementData(Et);
      for (let lt = 0; lt < ke.length; lt++) {
        let et = ke[lt];
        Et.append(et.name, et.data, et.filename);
      }
      this.submitRequest(Be, Et, Ee);
    }
  }
  _transformFiles(Ee, ke) {
    let Be = [];
    let De = 0;
    for (let Qe = 0; Qe < Ee.length; Qe++) {
      this.options.transformFile.call(this, Ee[Qe], It => {
        Be[Qe] = It;
        if (++De === Ee.length) {
          ke(Be);
        }
      });
    }
  }
  _addFormElementData(Ee) {
    if (this.element.tagName === "FORM") {
      for (let ke of this.element.querySelectorAll("input, textarea, select, button")) {
        let Be = ke.getAttribute("name");
        let De = ke.getAttribute("type");
        De &&= De.toLowerCase();
        if (typeof Be !== "undefined" && Be !== null) {
          if (ke.tagName === "SELECT" && ke.hasAttribute("multiple")) {
            for (let Qe of ke.options) {
              if (Qe.selected) {
                Ee.append(Be, Qe.value);
              }
            }
          } else if (!De || De !== "checkbox" && De !== "radio" || ke.checked) {
            Ee.append(Be, ke.value);
          }
        }
      }
    }
  }
  _updateFilesUploadProgress(Ee, ke, Be) {
    if (Ee[0].upload.chunked) {
      let De = Ee[0];
      let Qe = this._getChunk(De, ke);
      if (Be) {
        Qe.progress = Be.loaded * 100 / Be.total;
        Qe.total = Be.total;
        Qe.bytesSent = Be.loaded;
      } else {
        Qe.progress = 100;
        Qe.bytesSent = Qe.total;
      }
      De.upload.progress = 0;
      De.upload.total = 0;
      De.upload.bytesSent = 0;
      for (let It = 0; It < De.upload.totalChunkCount; It++) {
        if (De.upload.chunks[It] && typeof De.upload.chunks[It].progress !== "undefined") {
          De.upload.progress += De.upload.chunks[It].progress;
          De.upload.total += De.upload.chunks[It].total;
          De.upload.bytesSent += De.upload.chunks[It].bytesSent;
        }
      }
      De.upload.progress = De.upload.progress / De.upload.totalChunkCount;
      this.emit("uploadprogress", De, De.upload.progress, De.upload.bytesSent);
    } else {
      for (let De of Ee) {
        if (!De.upload.total || !De.upload.bytesSent || De.upload.bytesSent != De.upload.total) {
          if (Be) {
            De.upload.progress = Be.loaded * 100 / Be.total;
            De.upload.total = Be.total;
            De.upload.bytesSent = Be.loaded;
          } else {
            De.upload.progress = 100;
            De.upload.bytesSent = De.upload.total;
          }
          this.emit("uploadprogress", De, De.upload.progress, De.upload.bytesSent);
        }
      }
    }
  }
  _finishedUploading(Ee, ke, Be) {
    let De;
    if (Ee[0].status !== Z.CANCELED && ke.readyState === 4) {
      if (ke.responseType !== "arraybuffer" && ke.responseType !== "blob" && (De = ke.responseText, ke.getResponseHeader("content-type") && ~ke.getResponseHeader("content-type").indexOf("application/json"))) {
        try {
          De = JSON.parse(De);
        } catch (Qe) {
          Be = Qe;
          De = "Invalid JSON response from server.";
        }
      }
      this._updateFilesUploadProgress(Ee, ke);
      if (ke.status >= 200 && ke.status < 300) {
        if (Ee[0].upload.chunked) {
          Ee[0].upload.finishedChunkUpload(this._getChunk(Ee[0], ke), De);
        } else {
          this._finished(Ee, De, Be);
        }
      } else {
        this._handleUploadError(Ee, ke, De);
      }
    }
  }
  _handleUploadError(Ee, ke, Be) {
    if (Ee[0].status !== Z.CANCELED) {
      if (Ee[0].upload.chunked && this.options.retryChunks) {
        let De = this._getChunk(Ee[0], ke);
        if (De.retries++ < this.options.retryChunksLimit) {
          this._uploadData(Ee, [De.dataBlock]);
          return;
        }
        console.warn("Retried this chunk too often. Giving up.");
      }
      this._errorProcessing(Ee, Be || this.options.dictResponseError.replace("{{statusCode}}", ke.status), ke);
    }
  }
  submitRequest(Ee, ke, Be) {
    if (Ee.readyState == 1) {
      if (this.options.binaryBody) {
        if (Be[0].upload.chunked) {
          const De = this._getChunk(Be[0], Ee);
          Ee.send(De.dataBlock.data);
        } else {
          Ee.send(Be[0]);
        }
      } else {
        Ee.send(ke);
      }
    } else {
      console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
    }
  }
  _finished(Ee, ke, Be) {
    for (let De of Ee) {
      De.status = Z.SUCCESS;
      this.emit("success", De, ke, Be);
      this.emit("complete", De);
    }
    if (this.options.uploadMultiple) {
      this.emit("successmultiple", Ee, ke, Be);
      this.emit("completemultiple", Ee);
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  }
  _errorProcessing(Ee, ke, Be) {
    for (let De of Ee) {
      De.status = Z.ERROR;
      this.emit("error", De, ke, Be);
      this.emit("complete", De);
    }
    if (this.options.uploadMultiple) {
      this.emit("errormultiple", Ee, ke, Be);
      this.emit("completemultiple", Ee);
    }
    if (this.options.autoProcessQueue) {
      return this.processQueue();
    }
  }
  static uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (Ee) {
      let ke = Math.random() * 16 | 0;
      return (Ee === "x" ? ke : ke & 3 | 8).toString(16);
    });
  }
  constructor(Ee, ke) {
    let Be;
    super();
    this.element = Ee;
    this.clickableElements = [];
    this.listeners = [];
    this.files = [];
    if (typeof this.element == "string") {
      this.element = document.querySelector(this.element);
    }
    if (!this.element || this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }
    if (this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    }
    Z.instances.push(this);
    this.element.dropzone = this;
    let Qe = Z.optionsForElement(this.element) ?? {};
    this.options = S(true, {}, F, Qe, ke ?? {});
    this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
    if (this.options.forceFallback || !Z.isBrowserSupported()) {
      return this.options.fallback.call(this);
    }
    if (this.options.url == null) {
      this.options.url = this.element.getAttribute("action");
    }
    if (!this.options.url) {
      throw new Error("No URL provided.");
    }
    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }
    if (this.options.uploadMultiple && this.options.chunking) {
      throw new Error("You cannot set both: uploadMultiple and chunking.");
    }
    if (this.options.binaryBody && this.options.uploadMultiple) {
      throw new Error("You cannot set both: binaryBody and uploadMultiple.");
    }
    if (this.options.acceptedMimeTypes) {
      this.options.acceptedFiles = this.options.acceptedMimeTypes;
      delete this.options.acceptedMimeTypes;
    }
    if (this.options.renameFilename != null) {
      this.options.renameFile = It => this.options.renameFilename.call(this, It.name, It);
    }
    if (typeof this.options.method == "string") {
      this.options.method = this.options.method.toUpperCase();
    }
    if ((Be = this.getExistingFallback()) && Be.parentNode) {
      Be.parentNode.removeChild(Be);
    }
    if (this.options.previewsContainer !== false) {
      this.previewsContainer = this.options.previewsContainer ? Z.getElement(this.options.previewsContainer, "previewsContainer") : this.element;
    }
    if (this.options.clickable) {
      this.clickableElements = this.options.clickable === true ? [this.element] : Z.getElements(this.options.clickable, "clickable");
    }
    this.init();
  }
}
Z.initClass();
Z.options = {};
Z.optionsForElement = function (Oe) {
  if (Oe.getAttribute("id")) {
    return Z.options[le(Oe.getAttribute("id"))];
  }
};
Z.instances = [];
Z.forElement = function (Oe) {
  if (typeof Oe == "string") {
    Oe = document.querySelector(Oe);
  }
  if (Oe?.dropzone == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }
  return Oe.dropzone;
};
Z.discover = function () {
  let Oe;
  if (document.querySelectorAll) {
    Oe = document.querySelectorAll(".dropzone");
  } else {
    Oe = [];
    let Ee = ke => (() => {
      let Be = [];
      for (let De of ke) {
        if (/(^| )dropzone($| )/.test(De.className)) {
          Be.push(Oe.push(De));
        } else {
          Be.push(undefined);
        }
      }
      return Be;
    })();
    Ee(document.getElementsByTagName("div"));
    Ee(document.getElementsByTagName("form"));
  }
  return (() => {
    let Ee = [];
    for (let ke of Oe) {
      if (Z.optionsForElement(ke) !== false) {
        Ee.push(new Z(ke));
      } else {
        Ee.push(undefined);
      }
    }
    return Ee;
  })();
};
Z.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i];
Z.isBrowserSupported = function () {
  let Oe = true;
  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if ("classList" in document.createElement("a")) {
      if (Z.blacklistedBrowsers !== undefined) {
        Z.blockedBrowsers = Z.blacklistedBrowsers;
      }
      for (let Ee of Z.blockedBrowsers) {
        if (Ee.test(navigator.userAgent)) {
          Oe = false;
          continue;
        }
      }
    } else {
      Oe = false;
    }
  } else {
    Oe = false;
  }
  return Oe;
};
Z.dataURItoBlob = function (Oe) {
  let Ee = atob(Oe.split(",")[1]);
  let ke = Oe.split(",")[0].split(":")[1].split(";")[0];
  let Be = new ArrayBuffer(Ee.length);
  let De = new Uint8Array(Be);
  for (let Qe = 0, It = Ee.length, Yt = It >= 0; Yt ? Qe <= It : Qe >= It; Yt ? Qe++ : Qe--) {
    De[Qe] = Ee.charCodeAt(Qe);
  }
  return new Blob([Be], {
    type: ke
  });
};
const X = (Oe, Ee) => Oe.filter(ke => ke !== Ee).map(ke => ke);
const le = Oe => Oe.replace(/[\-_](\w)/g, Ee => Ee.charAt(1).toUpperCase());
Z.createElement = function (Oe) {
  let Ee = document.createElement("div");
  Ee.innerHTML = Oe;
  return Ee.childNodes[0];
};
Z.elementInside = function (Oe, Ee) {
  if (Oe === Ee) {
    return true;
  }
  for (; Oe = Oe.parentNode;) {
    if (Oe === Ee) {
      return true;
    }
  }
  return false;
};
Z.getElement = function (Oe, Ee) {
  let ke;
  if (typeof Oe == "string") {
    ke = document.querySelector(Oe);
  } else if (Oe.nodeType != null) {
    ke = Oe;
  }
  if (ke == null) {
    throw new Error(`Invalid \`${Ee}\` option provided. Please provide a CSS selector or a plain HTML element.`);
  }
  return ke;
};
Z.getElements = function (Oe, Ee) {
  let ke;
  let Be;
  if (Oe instanceof Array) {
    Be = [];
    try {
      for (ke of Oe) {
        Be.push(this.getElement(ke, Ee));
      }
    } catch {
      Be = null;
    }
  } else if (typeof Oe == "string") {
    for (ke of (Be = [], document.querySelectorAll(Oe))) {
      Be.push(ke);
    }
  } else if (Oe.nodeType != null) {
    Be = [Oe];
  }
  if (Be == null || !Be.length) {
    throw new Error(`Invalid \`${Ee}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
  }
  return Be;
};
Z.confirm = function (Oe, Ee, ke) {
  if (window.confirm(Oe)) {
    return Ee();
  } else if (ke != null) {
    return ke();
  } else {
    return undefined;
  }
};
Z.isValidFile = function (Oe, Ee) {
  if (!Ee) {
    return true;
  }
  Ee = Ee.split(",");
  let ke = Oe.type;
  let Be = ke.replace(/\/.*$/, "");
  for (let De of Ee) {
    De = De.trim();
    if (De.charAt(0) === ".") {
      if (Oe.name.toLowerCase().indexOf(De.toLowerCase(), Oe.name.length - De.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(De)) {
      if (Be === De.replace(/\/.*$/, "")) {
        return true;
      }
    } else if (ke === De) {
      return true;
    }
  }
  return false;
};
if (typeof jQuery !== "undefined" && jQuery !== null) {
  jQuery.fn.dropzone = function (Oe) {
    return this.each(function () {
      return new Z(this, Oe);
    });
  };
}
Z.ADDED = "added";
Z.QUEUED = "queued";
Z.ACCEPTED = Z.QUEUED;
Z.UPLOADING = "uploading";
Z.PROCESSING = Z.UPLOADING;
Z.CANCELED = "canceled";
Z.ERROR = "error";
Z.SUCCESS = "success";
function q(Oe, Ee, ke, Be, De, Qe, It, Yt, Dn, Et) {
  let lt = function (Oe) {
    let ke = Oe.naturalHeight;
    let Be = document.createElement("canvas");
    Be.width = 1;
    Be.height = ke;
    let De = Be.getContext("2d");
    De.drawImage(Oe, 0, 0);
    let {
      data: Qe
    } = De.getImageData(1, 0, 1, ke);
    let It = 0;
    let Yt = ke;
    let Dn = ke;
    for (; Dn > It;) {
      if (Qe[(Dn - 1) * 4 + 3] === 0) {
        Yt = Dn;
      } else {
        It = Dn;
      }
      Dn = Yt + It >> 1;
    }
    let Et = Dn / ke;
    if (Et === 0) {
      return 1;
    } else {
      return Et;
    }
  }(Ee);
  return Oe.drawImage(Ee, ke, Be, De, Qe, It, Yt, Dn, Et / lt);
}
class j {
  static initClass() {
    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  static encode64(Ee) {
    let Be;
    let De;
    let It;
    let Yt;
    let Dn;
    let ke = "";
    let Qe = "";
    let Et = "";
    let lt = 0;
    for (; Be = Ee[lt++], De = Ee[lt++], Qe = Ee[lt++], It = Be >> 2, Yt = (Be & 3) << 4 | De >> 4, Dn = (De & 15) << 2 | Qe >> 6, Et = Qe & 63, isNaN(De) ? Dn = Et = 64 : isNaN(Qe) && (Et = 64), ke = ke + this.KEY_STR.charAt(It) + this.KEY_STR.charAt(Yt) + this.KEY_STR.charAt(Dn) + this.KEY_STR.charAt(Et), Be = De = Qe = "", It = Yt = Dn = Et = "", lt < Ee.length;);
    return ke;
  }
  static restore(Ee, ke) {
    if (!Ee.match("data:image/jpeg;base64,")) {
      return ke;
    }
    let Be = this.decode64(Ee.replace("data:image/jpeg;base64,", ""));
    let De = this.slice2Segments(Be);
    let Qe = this.exifManipulation(ke, De);
    return `data:image/jpeg;base64,${this.encode64(Qe)}`;
  }
  static exifManipulation(Ee, ke) {
    let Be = this.getExifArray(ke);
    let De = this.insertExif(Ee, Be);
    return new Uint8Array(De);
  }
  static getExifArray(Ee) {
    let ke;
    let Be = 0;
    for (; Be < Ee.length;) {
      ke = Ee[Be];
      if (ke[0] === 255 & ke[1] === 225) {
        return ke;
      }
      Be++;
    }
    return [];
  }
  static insertExif(Ee, ke) {
    let Be = Ee.replace("data:image/jpeg;base64,", "");
    let De = this.decode64(Be);
    let Qe = De.indexOf(255, 3);
    let It = De.slice(0, Qe);
    let Yt = De.slice(Qe);
    let Dn = It;
    Dn = Dn.concat(ke);
    Dn = Dn.concat(Yt);
    return Dn;
  }
  static slice2Segments(Ee) {
    let ke = 0;
    let Be = [];
    for (; !(Ee[ke] === 255 & Ee[ke + 1] === 218);) {
      if (Ee[ke] === 255 & Ee[ke + 1] === 216) {
        ke += 2;
      } else {
        let Qe = ke + (Ee[ke + 2] * 256 + Ee[ke + 3]) + 2;
        let It = Ee.slice(ke, Qe);
        Be.push(It);
        ke = Qe;
      }
      if (ke > Ee.length) {
        break;
      }
    }
    return Be;
  }
  static decode64(Ee) {
    let Be;
    let De;
    let It;
    let Yt;
    let Dn;
    let Qe = "";
    let Et = "";
    let lt = 0;
    let et = [];
    if (/[^A-Za-z0-9\+\/\=]/g.exec(Ee)) {
      console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
    }
    Ee = Ee.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    for (; It = this.KEY_STR.indexOf(Ee.charAt(lt++)), Yt = this.KEY_STR.indexOf(Ee.charAt(lt++)), Dn = this.KEY_STR.indexOf(Ee.charAt(lt++)), Et = this.KEY_STR.indexOf(Ee.charAt(lt++)), Be = It << 2 | Yt >> 4, De = (Yt & 15) << 4 | Dn >> 2, Qe = (Dn & 3) << 6 | Et, et.push(Be), Dn !== 64 && et.push(De), Et !== 64 && et.push(Qe), Be = De = Qe = "", It = Yt = Dn = Et = "", lt < Ee.length;);
    return et;
  }
}
j.initClass();
import * as re from "36895";
import * as Re from "24006";
function Ge(Oe, Ee) {
  if (Oe & 1) {
    const ke = i.EpF();
    i.TgZ(0, "button", 11);
    i.NdJ("click", function () {
      i.CHM(ke);
      const De = i.oxw();
      return i.KtG(De.openCloudFinder());
    });
    i._uU(1, " Depuis mon cloud ");
    i.qZA();
  }
}
function Ue(Oe, Ee) {
  if (Oe & 1) {
    const ke = i.EpF();
    i.TgZ(0, "div", 12)(1, "div", 13)(2, "span", 14);
    i._UZ(3, "img", 15);
    i.qZA()();
    i.TgZ(4, "div", 16)(5, "p", 17);
    i._uU(6);
    i.qZA();
    i._UZ(7, "strong", 18)(8, "i", 19);
    i.qZA();
    i.TgZ(9, "div", 20)(10, "button", 21);
    i.NdJ("click", function () {
      const Qe = i.CHM(ke).$implicit;
      const It = i.oxw();
      return i.KtG(It.onRemovedFile(Qe));
    });
    i._UZ(11, "i", 22);
    i.qZA()()();
  }
  if (Oe & 2) {
    const ke = Ee.$implicit;
    i.xp6(6);
    i.Oqu(ke.libelle);
  }
}
const ot = function (Oe) {
  return {
    "has-error": Oe
  };
};
export let s = (() => {
  class Oe {
    constructor(ke, Be, De, Qe, It, Yt, Dn) {
      this.elementRef = ke;
      this.credentialsStore = Be;
      this.renderer = De;
      this.uiService = Qe;
      this.modalService = It;
      this.ngZone = Yt;
      this.cloudService = Dn;
      this.dropzoneFiles = [];
      this.filesUploadedFromCloud = [];
      this.totalProgress = 0;
      this._tabErrors = [];
      this.successUpload = new i.vpe();
      this.successUploadQueue = new i.vpe();
      this.removedFile = new i.vpe();
      this.defaultConfig = {
        dropzoneContainer: "#dropzoneContainer",
        fromCloudEnabled: true,
        mode: "",
        libelleTitre: "Déposez vos fichiers ici, ou sélectionnez un fichier à l'aide du bouton."
      };
      this._pourcentageProgress$ = new C.X(0);
    }
    set dropzoneConfig(ke) {
      this._dropzoneConfig = {
        ...ke
      };
    }
    set config(ke) {
      this._config = {
        ...ke
      };
    }
    get laConfig() {
      return this._config;
    }
    ngOnInit() {
      this.displayInError = !!Object.isExists(this.displayInError) && this.displayInError;
      if (Object.isExists(this.elementRef.nativeElement.closest(this._config.dropzoneContainer))) {
        this.initDropZone();
      } else {
        setTimeout(() => this.initDropZone(), 0);
      }
    }
    ngOnChanges(ke) {
      let Be;
      if (Object.isExists(ke.config)) {
        this._config = {
          ...this.defaultConfig,
          ...ke.config.currentValue
        };
      }
      if (Object.isExists(ke.dropzoneConfig)) {
        this._dropzoneConfig = {
          ...ke.dropzoneConfig.currentValue
        };
      }
      if (ke.fileToTeleverse?.currentValue !== ke.fileToTeleverse?.previousValue && !ke.fileToTeleverse.firstChange && Object.isExists(this.fileToTeleverse?.blob) && this.fileToTeleverse?.blob.type !== "") {
        if (this.remplace) {
          this._dropzoneConfig = {
            ...this._dropzoneConfig,
            params: {
              ...this._dropzoneConfig.params,
              remplace: true
            }
          };
        }
        Be = new File([this.fileToTeleverse.blob], this.fileToTeleverse.libelleFichier, {
          type: this.fileToTeleverse.blob.type
        });
      }
      if (Object.isExists(this.myDropzone)) {
        if (Object.isExists(Be)) {
          this.myDropzone.addFile(Be);
        }
        if (this.myDropzone.options.url !== this._dropzoneConfig.url) {
          this.myDropzone.options.url = this._dropzoneConfig.url;
        }
        if (this.myDropzone.options.disabled !== this._dropzoneConfig.disabled) {
          this.myDropzone.options.disabled = this._dropzoneConfig.disabled;
        }
        if (this.myDropzone.options.previewsContainer !== `${this._config.dropzoneContainer} .previews`) {
          this.myDropzone.options.previewsContainer = `${this._config.dropzoneContainer} .previews`;
        }
        if (this.myDropzone.options.clickable !== `${this._config.dropzoneContainer} .fileinput-button`) {
          this.myDropzone.options.clickable = `${this._config.dropzoneContainer} .fileinput-button`;
        }
      }
    }
    initDropZone() {
      const ke = this.elementRef.nativeElement.closest(this._config.dropzoneContainer);
      if (ke.hasOwnProperty("dropzone")) {
        delete ke.dropzone;
      }
      const Be = {
        headers: {
          [t.j9q.token]: this.credentialsStore.snapshot.authToken
        },
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 3,
        previewTemplate: "\n  <div class=\"file-row row\">\n    <div class=\"col-lg-2\">\n      <span class=\"preview\"><img class=\"img-thumbnail\" data-dz-thumbnail alt=\"\" src=\"\" /></span>\n    </div>\n    <div class=\"col-lg-8\">\n      <p class=\"name\" data-dz-name></p>\n      <strong class=\"error text-danger\" data-dz-errormessage></strong>\n      <p class=\"size\" style=\"display: none\" data-dz-size></p>\n      <div class=\"progress progress-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n           aria-valuenow=\"0\">\n        <div class=\"progress-bar progress-bar-success\" style=\"width:100%;\" data-dz-uploadprogress></div>\n      </div>\n    </div>\n    <div class=\"col-lg-2\">\n      <button data-dz-remove class=\"btn btn-danger delete\" type=\"button\" aria-label=\"Supprimer le fichier\" title=\"Supprimer le fichier\">\n        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n",
        timeout: 3000000,
        maxFilesize: 2000,
        previewsContainer: `${this._config.dropzoneContainer} .previews`,
        clickable: `${this._config.dropzoneContainer} .fileinput-button`,
        dictMaxFilesExceeded: "Vous avez atteint le nombre maximum de fichiers",
        dictFileTooBig: "Le fichier est trop volumineux ({{filesize}}Mo). Taille maximum requise : {{maxFilesize}}Mo.",
        init: () => this.dragEnteredEls = [],
        dragenter: De => {
          this.dragEnteredEls.push(De.target);
        },
        dragleave: De => {
          const Qe = this.dragEnteredEls.findIndex(It => It === De.target);
          if (Qe > -1) {
            this.dragEnteredEls.splice(Qe, 1);
          }
          if (this.dragEnteredEls.length === 0) {
            this.renderer.removeClass(this.myDropzone.element, "dz-drag-hover");
          }
        },
        accept: (De, Qe) => {
          if (De.name.indexOf(":") > -1) {
            Qe("Nom de fichier invalide");
          }
          Qe();
        },
        ...this._dropzoneConfig
      };
      this.myDropzone = new Z(ke, Be);
      this.myDropzone.on("addedfile", De => this.ngZone.run(() => this.onAddedFile(De)));
      this.myDropzone.on("sending", (De, Qe, It) => this.ngZone.run(() => this.onSending(De, Qe, It)));
      this.myDropzone.on("success", (De, Qe) => this.ngZone.run(() => this.onSuccess(De, Qe)));
      this.myDropzone.on("error", (De, Qe) => this.ngZone.run(() => this.onError(De, Qe)));
      this.myDropzone.on("removedfile", De => this.ngZone.run(() => this.onRemovedFile(De)));
      this.myDropzone.on("processing", () => this.ngZone.run(() => this.onProcessing()));
      this.myDropzone.on("totaluploadprogress", this.ngZone.run(() => De => this.onTotalUploadProgress(De)));
      this.myDropzone.on("queuecomplete", () => this.ngZone.run(() => this.onQueueComplete()));
    }
    onRemovedFile(ke) {
      const Be = this.dropzoneFiles.findIndex(Qe => Qe.file === ke);
      const De = {
        ...this.dropzoneFiles[Be],
        indice: Be
      };
      if (ke instanceof t.eD9) {
        const Qe = this.filesUploadedFromCloud.findIndex(It => It.id === ke.id);
        if (Qe > -1) {
          this.filesUploadedFromCloud.splice(Qe, 1);
        }
      }
      this.dropzoneFiles.splice(Be, 1);
      this.removedFile.emit(De);
    }
    openCloudFinder() {
      this.modalService.show(he.e, {
        id: this.modalService.getModalsCount() + 1,
        initialState: {
          idEntity: this._config.idEntity,
          typeEntity: this._config.typeEntity
        },
        class: "modal-lg"
      }).content.onClose$.pipe((0, b.q)(1)).subscribe({
        next: Be => {
          if (Object.isExists(Be)) {
            const De = Qe => {
              if (this._config.keepComplete) {
                this.filesUploadedFromCloud.push(Qe);
              }
              if (Object.isExists(this.myDropzone.options.maxFiles) && this.myDropzone.options.maxFiles === 1) {
                if (this.filesUploadedFromCloud.length > 1) {
                  this.filesUploadedFromCloud.shift();
                }
                if (this.myDropzone.files.length > 0) {
                  this.myDropzone.removeFile(this.myDropzone.files[0]);
                }
              }
              this.successUpload.emit(Qe);
              this.successUploadQueue.emit(1);
            };
            if (Object.isExists(this._config.mode) && this._config.mode !== "") {
              this.onProcessing(true);
              this.cloudService.uploadFileFromCloud(+this._config.idContexte, this._config.mode, Be.id, this._config.side, this._dropzoneConfig.params).pipe((0, k.b)(Qe => {
                const It = this.contextSource === "cloud" ? new t.EiA(Qe) : new t.eD9(Qe);
                De(It);
              }), (0, M.K)(() => {
                this.uiService.notifyEvent(t.DOJ.genericError, "Impossible de téléverser le fichier.", "Erreur");
                return w.E;
              }), (0, v.x)(() => this.onQueueComplete())).subscribe();
            } else {
              De(new t.eD9(Be));
            }
          }
        },
        error: Be => console.error("openCloudFinder subscribe error", Be)
      });
    }
    trackByFn(ke, Be) {
      return Be.id || `${ke}`;
    }
    onQueueComplete() {
      this.dropzoneFiles = [];
      const ke = this.myDropzone.files.filter(Be => Be.status !== "error").length;
      this.myDropzone.files.forEach(Be => {
        if (Be.status === "error") {
          this.myDropzone.removeFile(Be);
          return;
        }
        const De = JSON.parse(Be.xhr.responseText);
        const Qe = this.contextSource === "cloud" ? new t.EiA(De.data) : new t.eD9(De.data);
        this.dropzoneFiles.push({
          file: Be
        });
        if (Be.processing) {
          if (Be.status === "success") {
            this.successUpload.emit(Qe);
          }
          if (!this._config.keepComplete) {
            this.myDropzone.removeFile(Be);
          }
          Be.processing = false;
        }
      });
      if (Object.isExists(this.modalInstance)) {
        setTimeout(() => {
          this.modalInstance.hide();
        }, 100);
      }
      this.dragEnteredEls.length = 0;
      this.renderer.removeClass(this.myDropzone.element, "dz-drag-hover");
      if (ke > 0) {
        this.successUploadQueue.emit(ke);
      }
      if (this._tabErrors.length > 0) {
        this.uiService.notifyEvent(t.DOJ.ePersistant, [...new Set(this._tabErrors)].join("<br />"), "Erreur");
        this._tabErrors = [];
      }
    }
    onTotalUploadProgress(ke) {
      const Be = parseInt(ke, 10);
      this.totalProgress = Be;
      this._pourcentageProgress$.next(Be);
    }
    onProcessing(ke = false) {
      if (Object.isExists(this.modalInstance)) {
        return;
      }
      const Be = {
        title: "Téléversement ",
        cancel: "Annuler le téléversement",
        enableCancel: !ke,
        totalProgress$: this._pourcentageProgress$.asObservable()
      };
      const De = {
        id: this.modalService.getModalsCount() + 1,
        ignoreBackdropClick: true,
        keyboard: false,
        initialState: Be
      };
      this.modalInstance = this.modalService.show(Le.z, De);
      this.modalInstance.onHide.pipe((0, b.q)(1), (0, k.b)(Qe => {
        if (Qe === Pe.G.cancel) {
          this.removeUploadingFile();
        }
      }), (0, M.K)(() => {
        this.removeUploadingFile();
        return w.E;
      }), (0, v.x)(() => this.modalInstance = undefined)).subscribe();
    }
    onAddedFile(ke) {
      if (this.myDropzone.options.disabled === true) {
        this.myDropzone.removeFile(ke);
        this.uiService.notifyEvent(t.DOJ.genericError, "Téléversement de fichier impossible dans ce répertoire", "Erreur");
        return;
      }
      if (Object.isExists(this.myDropzone.options.maxFiles) && this.myDropzone.options.maxFiles === 1) {
        if (this.myDropzone.files.length > 1) {
          this.myDropzone.removeFile(this.myDropzone.files[0]);
        }
        if (this.filesUploadedFromCloud.length > 0) {
          this.filesUploadedFromCloud.length = 0;
        }
      }
      const Be = this.checkFileSizeFn;
      if (typeof Be !== "undefined" && ke.size > Be) {
        this.myDropzone.removeFile(ke);
        this.uiService.notifyEvent(t.DOJ.genericError, "L'espace disponible est insufisant pour téléverser ce fichier", "Erreur");
      }
    }
    onSending(ke, Be, De) {
      if (this.myDropzone.options.headers[t.j9q.token] !== this.credentialsStore.snapshot.authToken) {
        this.myDropzone.options.headers = {
          ...this.myDropzone.options.headers,
          [t.j9q.token]: this.credentialsStore.snapshot.authToken
        };
      }
      if (Object.isExists(this._dropzoneConfig.params)) {
        De.set("data", JSON.stringify({
          ...this._dropzoneConfig.params
        }));
      }
      if (this._config.canMergeFiles && this._config.tabFilesMerged.length > 0) {
        let Qe = Object.isExists(this._dropzoneConfig.params) ? this._dropzoneConfig.params : {};
        const It = this._config.tabFilesMerged.filter(Dn => (Dn.hasOwnProperty("uncMerge") ? Dn.uncMerge : Dn.unc).indexOf("¤merge.pdf") > -1);
        const Yt = It.length > 0 ? It[It.length - 1] : this._config.tabFilesMerged[0];
        Yt.unc = Yt.hasOwnProperty("uncMerge") ? Yt.uncMerge : Yt.unc;
        delete Yt.uncMerge;
        Qe = {
          ...Qe,
          fichierPrecedent: Yt
        };
        De.set("data", JSON.stringify(Qe));
      }
      if (Object.isExists(this.contextSource) && this.contextSource === "cloud" && ke.fullPath) {
        let Qe = JSON.parse(De.get("data"));
        if (!Object.isExists(Qe)) {
          Qe = {};
        }
        Qe.fullPath = ke.fullPath;
        De.set("data", JSON.stringify(Qe));
      }
    }
    onSuccess(ke, Be) {
      if (typeof Be == "string" || Be instanceof String) {
        Be = JSON.parse(Be.toString());
      }
      let De = true;
      if (Be.code >= 300 || Be.code === 235) {
        const Qe = Be.message !== "" ? Be.message : "Une erreur s'est produite lors de l'envoi du fichier";
        De = false;
        if (Be.code === 525 || Be.code === 520) {
          this.uiService.notifyEvent(t.DOJ.userAccessTokenInvalid, "...");
          this.myDropzone.removeAllFiles(true);
        } else {
          this._tabErrors.push(Qe);
        }
      }
      if (De) {
        if (this._config.canMergeFiles) {
          this._config.tabFilesMerged.push(new t.eD9(Be.data));
        }
        if (Object.isExists(this.myDropzone.previewsContainer)) {
          try {
            const Qe = this.renderer.selectRootElement(ke.previewElement.getElementsByClassName("progress")[0], true);
            if (Qe) {
              Qe.innerHTML = "<i class=\"fa fa-check fa-lg text-success\"></i>";
            }
            this.renderer.removeClass(Qe, "progress");
            this.renderer.removeClass(Qe, "progress-striped");
            this.renderer.removeClass(Qe, "active");
          } catch (Qe) {
            console.error(Qe);
          }
        }
      } else {
        this.myDropzone.removeFile(ke);
      }
    }
    onError(ke, Be) {
      this._tabErrors.push(Be);
      this.uiService.notifyEvent(t.DOJ.genericError, Be, "Erreur : " + ke.name);
    }
    removeUploadingFile() {
      let ke;
      ke = this.myDropzone.getQueuedFiles();
      ke.forEach(Be => {
        this.myDropzone.removeFile(Be);
      });
      ke = this.myDropzone.getUploadingFiles();
      ke.forEach(Be => {
        this.myDropzone.removeFile(Be);
      });
    }
  }
  Oe.ɵfac = function (ke) {
    return new (ke || Oe)(i.Y36(i.SBq), i.Y36(t.dSF), i.Y36(i.Qsj), i.Y36(t.VLf), i.Y36(pe.tT), i.Y36(i.R0b), i.Y36(t.eyc));
  };
  Oe.ɵcmp = i.Xpm({
    type: Oe,
    selectors: [["ed-input-files"]],
    inputs: {
      dropzoneConfig: "dropzoneConfig",
      config: "config",
      typeFichier: "typeFichier",
      checkFileSizeFn: "checkFileSizeFn",
      contextSource: "contextSource",
      displayInError: "displayInError",
      remplace: "remplace",
      fileToTeleverse: "fileToTeleverse"
    },
    outputs: {
      successUpload: "successUpload",
      successUploadQueue: "successUploadQueue",
      removedFile: "removedFile"
    },
    features: [i.TTD],
    decls: 15,
    vars: 8,
    consts: [[1, "input-files"], ["novalidate", ""], [1, "dropzone", "dropzone-ed", 3, "ngClass"], [1, "help-message"], ["class", "btn btn-secondary btn-sm fileinput-buttonfromcloud", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "fileinput-button"], [1, "files", "previews"], ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropzone-ed-overlay"], [1, "center"], ["aria-hidden", "true", 1, "fa", "icon-ed_recu", "fa-2x"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "fileinput-buttonfromcloud", 3, "click"], [1, "row"], [1, "col-lg-2"], [1, "preview-cloud"], ["src", "assets/images/cloud-empty.png", "alt", "icône cloud", 1, "img-thumbnail", 2, "height", "60px"], [1, "col-lg-8"], [1, "name-cloud"], ["data-errormessage", "", 1, "error", "text-danger"], [1, "fa", "fa-check", "fa-lg", "text-success"], ["aria-hidden", "true", 1, "col-lg-2"], ["type", "button", "data-remove", "", "aria-label", "Supprimer le fichier", 1, "btn", "btn-danger", "delete-cloud", 3, "click"], [1, "fa", "fa-trash-o"]],
    template: function (ke, Be) {
      if (ke & 1) {
        i.TgZ(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "p", 3);
        i._uU(4);
        i.qZA();
        i.YNc(5, Ge, 2, 0, "button", 4);
        i.TgZ(6, "button", 5);
        i._uU(7);
        i.qZA()()();
        i.TgZ(8, "div", 6);
        i.YNc(9, Ue, 12, 1, "div", 7);
        i.qZA();
        i.TgZ(10, "div", 8)(11, "div", 9);
        i._UZ(12, "i", 10)(13, "br");
        i._uU(14, " Déposez vos fichiers ici. ");
        i.qZA()()();
      }
      if (ke & 2) {
        i.xp6(2);
        i.Q6J("ngClass", i.VKq(6, ot, Be.displayInError));
        i.xp6(2);
        i.Oqu(Be.laConfig.libelleTitre);
        i.xp6(1);
        i.Q6J("ngIf", Be.laConfig.fromCloudEnabled);
        i.xp6(2);
        i.hij(" ", Be.laConfig.canMergeFiles && Be.laConfig.tabFilesMerged.length > 0 ? "Ajouter une page " + (Be.laConfig.tabFilesMerged.length + 1) : "Depuis mon ordinateur", " ");
        i.xp6(2);
        i.Q6J("ngForOf", Be.filesUploadedFromCloud)("ngForTrackBy", Be.trackByFn);
      }
    },
    dependencies: [re.mk, re.sg, re.O5, Re._Y, Re.JL, Re.F],
    styles: [".input-files .dropzone-ed{min-height:0;background:none}.input-files .dropzone-ed:not(has-error){border:1px dashed #000}.input-files .dropzone-ed.has-error{border-color:var(--secondary-color)}.input-files .dropzonecadre{text-align:center}.input-files .dropzonemess{width:100%;text-align:center}.input-files .dropzone{min-height:100px;min-width:252px}.input-files .dropzone h2{margin-top:4px;margin-bottom:11px;position:relative;font-weight:300;font-size:14pt}.input-files .dropzone.dropzone-ed{position:relative;padding:10px;text-align:center}.input-files .dropzone.dropzone-ed .dz-default.dz-message{background:none}.input-files .fileinput-buttonfromcloud{margin-right:3px}.input-files .previews{margin:5px 0;vertical-align:middle;text-align:center}.input-files .previews>div.row{display:table;height:100%;table-layout:fixed;margin:0;width:100%}.input-files .previews>div.row>div{display:table-cell;vertical-align:middle;float:none;table-layout:fixed;text-align:center;padding:2px 5px}.input-files .previews>div.row>div>*{margin-bottom:0}.input-files .previews>div.row:nth-child(odd){background-color:#d9edf7}.input-files .previews>div.row:nth-child(even){background-color:#fff}.input-files .previews p.name,.input-files .previews p.name-cloud{word-break:break-word}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return Oe;
})();