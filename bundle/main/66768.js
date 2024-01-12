import * as M from "63666";
import * as v from "45007";
import * as C from "94650";
function E(F, Z) {
  if (F & 1) {
    C._UZ(0, "img", 16);
  }
  if (F & 2) {
    const X = C.oxw().$implicit;
    const le = C.oxw();
    C.MGl("src", "/assets/images/mimetypes/", le.cloudUtilHelper.getExtension(X.data.id), ".png", C.LSH);
  }
}
const O = function (F) {
  return {
    selected: F
  };
};
function x(F, Z) {
  if (F & 1) {
    C.TgZ(0, "div");
    C.YNc(1, E, 1, 1, "img", 15);
    C.TgZ(2, "span");
    C._uU(3);
    C.qZA()();
  }
  if (F & 2) {
    const X = Z.$implicit;
    const le = C.oxw();
    C.xp6(1);
    C.Q6J("ngIf", !X.data.isFolder());
    C.xp6(1);
    C.Tol(C.VKq(4, O, (le.selectedFile == null ? null : le.selectedFile.id) === X.data.id));
    C.xp6(1);
    C.Oqu(X.data.libelle);
  }
}
function U(F, Z) {
  if (F & 1) {
    C.TgZ(0, "div", 17)(1, "h3");
    C._uU(2, "Votre cloud est vide.");
    C.qZA()();
  }
}
export let e = (() => {
  class F {
    constructor(X, le, fe, q, j) {
      this.authStore = X;
      this.cloudService = le;
      this.modalRef = fe;
      this.uiService = q;
      this.loaderService = j;
      this.cloudUtilHelper = v.VEx;
      this.onClose$ = new i.x();
      this.store = [];
      this.treeViewConfig = {
        idField: "id",
        allowDrag: false,
        allowDrop: false,
        allowDragoverStyling: false,
        displayField: "libelle",
        actionMapping: {
          mouse: {
            click: M.iM.ACTIVATE,
            expanderClick: M.iM.TOGGLE_EXPANDED
          }
        }
      };
    }
    ngOnInit() {
      if (!Object.isExists(this.idEntity)) {
        this.idEntity = this.authStore.currentUser.id;
      }
      if (!Object.isExists(this.typeEntity)) {
        this.typeEntity = this.authStore.currentUser.typeCompte;
      }
      this.refresh();
    }
    ngOnDestroy() {
      this.onClose$.complete();
    }
    updateData() {
      const X = this.store.reduce((le, fe) => ({
        ...le,
        ...fe.getHiddenNodeLinkIds()
      }), {});
      this.tree.treeModel.setState({
        ...this.tree.treeModel.getState(),
        hiddenNodeIds: X
      });
    }
    refresh(X, le = false) {
      this.loader = this.loaderService.show(this);
      this.cloudService.getCloudContents(this.idEntity, this.typeEntity, Object.isExists(X) ? X.id.replace(this._cloudUserID, "") : "", le).pipe((0, t.b)(fe => {
        if (Object.isExists(fe)) {
          const q = new v.mCH(fe);
          if (fe.libelle === "/") {
            this._cloudUserID = q.id;
            q.isExpanded = true;
            this.store = q.children;
            if (le && q.hasChildren) {
              this.tree.treeModel.collapseAll();
            }
          } else if (Object.isExists(X)) {
            const G = this.tree.treeModel.getNodeById(X.id).parent;
            this.store.some(se => v.VEx.updatedNode(se, G.id, q.id, q));
            this.store = [...this.store];
          }
        } else if (!Object.isExists(X)) {
          this.store = [];
        }
      }), (0, b.K)(fe => this.uiService.notifyErrorThenEmpty(fe, true)), (0, k.x)(() => this.loaderService.hide(this))).subscribe();
    }
    onNodeEvent(X) {
      switch (X.eventName) {
        case "toggleExpanded":
          if (!X.node.data.isLoaded) {
            this.refresh(X.node.data, true);
          }
          break;
        case "activate":
          if (X.node.data.isFile()) {
            this.selectedFile = new v.EiA(X.node.data);
          }
          if (X.node.data.isFolder()) {
            X.node.toggleExpanded();
          }
      }
    }
    okFn() {
      if (!!this.selectedFile) {
        this.onClose$.next(this.selectedFile);
        this.close();
      }
    }
    close() {
      this.modalRef.hide();
    }
  }
  F.ɵfac = function (X) {
    return new (X || F)(C.Y36(v.CnD), C.Y36(v.eyc), C.Y36(w.UZ), C.Y36(v.VLf), C.Y36(S.S));
  };
  F.ɵcmp = C.Xpm({
    type: F,
    selectors: [["ed-cloud-finder"]],
    viewQuery: function (X, le) {
      if (X & 1) {
        C.Gf(M.qr, 5);
      }
      if (X & 2) {
        let fe;
        if (C.iGM(fe = C.CRH())) {
          le.tree = fe.first;
        }
      }
    },
    inputs: {
      idEntity: "idEntity",
      typeEntity: "typeEntity"
    },
    decls: 19,
    vars: 5,
    consts: [[1, "modal-header"], [1, "modal-title"], ["title", "Rafraîchir le contenu", "type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], ["type", "button", "aria-label", "Fermer cette fenêtre", 1, "btn-close", "d-print-none", 3, "click"], [1, "modal-body", 3, "ngBusy"], [1, "tree-classic"], [3, "nodes", "options", "activate", "toggleExpanded", "updateData"], ["tree", ""], ["treeNodeTemplate", ""], ["class", "text-center", 4, "ngIf"], [1, "modal-footer"], [1, "w-100"], ["type", "button", 1, "btn", "btn-warning", "float-start", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "float-end", 3, "disabled", "click"], ["alt", "icône type de fichier", 3, "src", 4, "ngIf"], ["alt", "icône type de fichier", 3, "src"], [1, "text-center"]],
    template: function (X, le) {
      if (X & 1) {
        C.TgZ(0, "div", 0)(1, "h3", 1);
        C._uU(2, " Le Cloud EcoleDirecte ");
        C.TgZ(3, "button", 2);
        C.NdJ("click", function () {
          return le.refresh(undefined, true);
        });
        C._UZ(4, "i", 3);
        C.qZA()();
        C.TgZ(5, "button", 4);
        C.NdJ("click", function () {
          return le.close();
        });
        C.qZA()();
        C.TgZ(6, "div", 5)(7, "div", 6)(8, "tree-root", 7, 8);
        C.NdJ("activate", function (q) {
          return le.onNodeEvent(q);
        })("toggleExpanded", function (q) {
          return le.onNodeEvent(q);
        })("updateData", function () {
          return le.updateData();
        });
        C.YNc(10, x, 4, 6, "ng-template", null, 9, C.W1O);
        C.qZA()();
        C.YNc(12, U, 3, 0, "div", 10);
        C.qZA();
        C.TgZ(13, "div", 11)(14, "div", 12)(15, "button", 13);
        C.NdJ("click", function () {
          return le.close();
        });
        C._uU(16, "Fermer");
        C.qZA();
        C.TgZ(17, "button", 14);
        C.NdJ("click", function () {
          return le.okFn();
        });
        C._uU(18, "Sélectionner");
        C.qZA()()();
      }
      if (X & 2) {
        C.xp6(6);
        C.Q6J("ngBusy", le.loader);
        C.xp6(2);
        C.Q6J("nodes", le.store)("options", le.treeViewConfig);
        C.xp6(4);
        C.Q6J("ngIf", le.store.length === 0);
        C.xp6(5);
        C.Q6J("disabled", !le.selectedFile);
      }
    },
    dependencies: [L.O5, I.DC, M.qr],
    styles: [".tree-classic{overflow:auto}.tree-classic span.selected{font-weight:700;margin-left:10px}.tree-classic span.selected:after{content:\"\\f00c\";font-family:FontAwesome;font-style:normal;font-weight:400;margin-left:10px;color:var(--secondary-color)}.tree-classic .tree-node .node-content-wrapper,.tree-classic .tree-node .node-content-wrapper:hover,.tree-classic .tree-node-focused .node-content-wrapper,.tree-classic .tree-node-focused .node-content-wrapper:hover,.tree-classic .tree-node-active .node-content-wrapper,.tree-classic .tree-node-active .node-content-wrapper:hover{box-shadow:none;background:transparent}.tree-classic .tree-node-leaf{left:-15px;position:relative}.tree-classic .toggle-children{padding:6px 18px;background:url(folder.6431f16d608dd0aa.png) no-repeat;height:28px}.tree-classic .toggle-children-wrapper-expanded .toggle-children{background:url(folder-open.888f5701e8118372.png) no-repeat;transform:none}\n"],
    encapsulation: 2
  });
  return F;
})();