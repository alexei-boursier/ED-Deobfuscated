import * as i from "45007";
import * as t from "92340";
export const sX = {
  isBrowser: true,
  production: t.N.production,
  api: t.N.api_url,
  apip: t.N.apip_url,
  collaboraUrl: t.N.collabora_url,
  collaboraWopiUrl: t.N.collabora_wopi_url,
  apiExtension: ".awp",
  packageVersion: "4.47.0",
  defaultTTL: i.X9o.uneMinute * 5,
  monitorHTTP: false
};
export function Je(E) {
  let O = sX.api;
  if (i.FSr.isNotEmptyString(E)) {
    O = i.IDb.isProfOuPersonnel(E) ? sX.apip : sX.api;
  }
  if (sX.production) {
    return `${O}/v3`;
  } else {
    return `http://${O}/EDV3WEBSERVICES_WEB/FR/v3`;
  }
}
export const Qq = ["", {
  outlets: {
    auxiliaryModal: null
  }
}];
const v = `${location.origin}/assets/ext/mathjax279/MathJax.js?config=TeX-AMS_HTML&locale=fr`;
export const Ho = E => {
  const O = E.editor;
  O.editable().$.addEventListener("input", function (x) {
    if (x.inputType === "insertReplacementText") {
      O.fire("change");
    }
  });
};
export const x$ = {
  allowedContent: true,
  config: {
    pasteFromWordRemoveFontStyles: false
  },
  height: 250,
  width: "100%",
  linkDefaultProtocol: "https://",
  extraPlugins: "contextmenu,colorbutton,font,mathjax,base64image,pastebase64,deselect",
  removePlugins: "stylescombo,elementspath,smiley,image,magicline,showblocks,pagebreak,div,find,about,preview,templates,save,newpage,print,wsc,textindent",
  removeButtons: "Anchor",
  toolbar: "full",
  toolbarGroups: [{
    name: "clipboard",
    groups: ["clipboard", "undo"]
  }, {
    name: "links",
    groups: ["link", "unlink"]
  }, {
    name: "insert",
    groups: ["Math", "table", "specialchar", "horizontalrule"]
  }, {
    name: "tools"
  }, {
    name: "document",
    groups: ["mode"]
  }, "/", {
    name: "basicstyles",
    groups: ["basicstyles", "cleanup"]
  }, {
    name: "paragraph",
    groups: ["list", "indent", "align"]
  }, "/", {
    name: "colors"
  }, {
    name: "styles"
  }],
  mathJaxLib: v,
  on: {
    instanceReady: Ho
  }
};
export function UZ(E) {
  E.editor.dataProcessor.htmlFilter.addRules({
    elements: {
      $: O => {
        if (O.name === "img") {
          const U = O.attributes.width;
          const B = O.attributes.height;
          if (O.attributes.style) {
            const F = new RegExp(/(width:|height:).+?(;[\s]?|$)/g);
            O.attributes.style = O.attributes.style.replace(F, "");
          }
          if (U) {
            delete O.attributes.width;
          }
          if (B) {
            delete O.attributes.height;
          }
        }
        return O;
      }
    }
  });
}
export const gL = {
  containerClass: "theme-ed",
  dateInputFormat: "DD/MM/YYYY",
  customTodayClass: "custom-today-class",
  selectFromOtherMonth: true,
  todayButtonLabel: "Aujourd'hui",
  clearButtonLabel: "Effacer"
};
export const fI = {
  newestOnTop: true,
  maxOpened: 3,
  autoDismiss: true,
  timeOut: 2000,
  closeButton: false,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  enableHtml: true,
  tapToDismiss: true
};