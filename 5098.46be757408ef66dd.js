"use strict";(self.webpackChunked_web=self.webpackChunked_web||[]).push([[5098],{40030:(O,g,a)=>{a.d(g,{m:()=>f});var m=a(99658),r=a(94650);let f=(()=>{class c{}return c.\u0275fac=function(E){return new(E||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[m.m]}),c})()},21056:(O,g,a)=>{a.r(g),a.d(g,{VieDeLaClasseModule:()=>de});var m=a(95715),r=a(45007),f=a(22586),c=a(39646),S=a(4128),E=a(54004),b=a(63900),h=a(28746),d=a(70262),u=a(18505),_=a(82722),M=a(46590),e=a(94650),D=a(92635),p=a(36895),x=a(80125),U=a(1821),L=a(11822),V=a(95698),J=a(39300),P=a(87192),F=a(52497);class T extends r.bIF{constructor(o={}){super(o),Object.isExists(o.id)&&(this.id=o.id),Object.isExists(o.libelle)&&(this.libelle=o.libelle)}}var Z=a(11302),I=a(20388),Y=a(87338),v=a(24006),B=a(91752),w=a(99533),G=a(75177),N=a(39653);function R(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.setModeEdit())}),e._UZ(1,"i",8),e.qZA()}}function j(s,o){if(1&s&&(e._UZ(0,"div",9),e.ALo(1,"filterHtml")),2&s){const t=e.oxw();e.Q6J("content",t.vieClasseCible.contenu)("innerHTML",e.lcZ(1,2,t.vieClasseCible.contenu),e.oJD)}}function K(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"form",10)(1,"ckeditor",11),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.vieClasseCible.contenu=n)}),e.qZA(),e.TgZ(2,"div",12)(3,"button",13),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.saveContenuClasse())}),e._UZ(4,"i",14),e.TgZ(5,"span",15),e._uU(6,"Enregistrer"),e.qZA()(),e.TgZ(7,"button",16),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.setModeEdit())}),e._uU(8,"Annuler"),e.qZA()(),e._UZ(9,"div",17),e.qZA()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.vieClasseCible.contenu)("config",t.ckeditorOptions)}}function Q(s,o){1&s&&(e.TgZ(0,"span",22),e._uU(1," L'ajout de document sera disponible apr\xe8s l'enregistrement. "),e.qZA())}function k(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"ed-bloc-commentaires",23),e.NdJ("commentaireAdded",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.onCommentaireAdded(n))})("commentaireDeleted",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.onCommentaireDeleted(n))}),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("afficherCommentaires",t.afficherCommentaires)("afficherFormulaireCommentaires",t.afficherFormulaireCommentaires)("idSupport",t.vieClasseCible.idCDT)("isModerateur",t.isModerateur())("tabCommentaires",t.vieClasseCible.commentaires)("typeSupport",t.CONST_TYPE_SUPPORT.VIEDELACLASSE)}}function H(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",18),e.ALo(1,"trim"),e.TgZ(2,"ed-cdt-documents",19),e.NdJ("deleteDocument",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.deleteFile(n))})("successUpload",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onUploadSuccess(n))}),e.ALo(3,"trim"),e.YNc(4,Q,2,0,"span",20),e.qZA(),e.YNc(5,k,1,6,"ed-bloc-commentaires",21),e.qZA()}if(2&s){const t=e.oxw();e.s9C("id",e.lcZ(1,11,"container-classe-"+t.vieClasseCible.idCDT+"-"+t.vieClasseCible.id)),e.xp6(2),e.Q6J("documents",t.vieClasseCible.fichiers)("fromCloudEnabled",!0)("idContext",t.vieClasseCible.idCDT)("canAddDocuments",t.canUploadPJ&&0!==t.vieClasseCible.idCDT)("canDeleteDocuments",t.canUploadPJ)("typeContext",t.CONST_TYPE_SUPPORT.VIEDELACLASSE)("dropzoneContainer",e.lcZ(3,13,"#container-classe-"+t.vieClasseCible.idCDT+"-"+t.vieClasseCible.id))("title","Pi\xe8ces-jointes"),e.xp6(2),e.Q6J("ngIf",!t.canUploadPJ&&0===t.vieClasseCible.idCDT&&t.isMatiereEnseignee(t.vieClasseCible)),e.xp6(1),e.Q6J("ngIf",t.vieClasseCible.commentaires.length>0||t.isModerateur()||t.authStore.isEleve())}}let $=(()=>{class s{constructor(t,i,n,l,C,y){this.authStore=t,this.vieDeLaClasseService=i,this.loaderService=n,this.uiService=l,this.modalService=C,this.cd=y,this.ckeditorOptions=Z.x$,this.CONST_TYPE_ENTITE=r.JBS,this.CONST_TYPE_SUPPORT=r.ce3,this.idMatiere="",this.afficherCommentaires=!1,this.canUploadPJ=!1,this.afficherBlocAjoutDoc=!1,this.isModeEditable=!1,this.canEdit=!1,this.isVieClasseMatiere=!1,Object.isExists(this.entityCurrent)||(this.entityCurrent=new r.WRp)}ngOnChanges(t){this.vieClasseCible=this.getVieClasseCible(),this.typeEntityCurrent=this.entityCurrent instanceof r.WRp?r.JBS.CLASSE:r.JBS.GROUPE,this.idMatiere=Object.isExists(this.matiere)?this.matiere.id:"",this.isVieClasseMatiere=""!==this.idMatiere,this.authStore.isProfesseur()&&(this.canEdit=this.isVieClasseMatiere?this.authStore.currentUser.profile.matieres.findIndex(i=>i.code===this.vieClasseCible.id)>-1:!0===this.vieClasseCible.profPrincipal)}getVieClasseCible(){let t;return t=Object.isExists(this.matiere)?new T(this.matiere):new T(this.vieDeLaClasse),t.contenu=t.contenuDecode,null===t.commentaires&&(t.commentaires=[]),t}saveContenuClasse(){const t=new r.bIF(this.vieDeLaClasse);let i;Object.isExists(this.matiere)?(i=t.matieres.find(n=>n.id===this.matiere.id&&n.idCDT===this.matiere.idCDT),i&&(i.contenu=r.YC.base64encode(this.vieClasseCible.contenu))):t.contenu=r.YC.base64encode(this.vieClasseCible.contenu),this.loader=this.loaderService.show(this),this.vieDeLaClasseService.save(this.authStore.currentUser.id,this.authStore.currentUser.typeCompte,this.typeEntityCurrent,this.entityCurrent.id,this.entityCurrent.code,t,i).pipe((0,u.b)(()=>{this.vieDeLaClasse=new r.bIF(t),this.setModeEdit(),this.uiService.notifyEvent(r.DOJ.genericSuccess,"Le contenu a bien \xe9t\xe9 enregistr\xe9 !","Vie de la classe","icon-ed_viedelaclasse")}),(0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(n=>this.uiService.notifyErrorThenEmpty(n,!0,"Vie de la classe","fa fa-warning"))).subscribe()}setModeEdit(){this.isModeEditable=!this.isModeEditable,this.isModeEditable||(this.vieClasseCible=this.getVieClasseCible())}setAffichageBlocAjoutDoc(t){this.afficherBlocAjoutDoc=Object.isExists(t)?t:!this.afficherBlocAjoutDoc}isMatiereEnseignee(t){return!!Object.isExists(this.matiere)&&null!==this.authStore.currentUser&&this.authStore.isProfesseur()&&this.authStore.currentUser.profile.matieres.findIndex(i=>i.code===""+t.id)>-1}onUploadSuccess(t){this.vieDeLaClasseService.addFile(t,this.entityCurrent.id,this.typeEntityCurrent,this.vieDeLaClasse,this.matiere)}deleteFile(t){const i={id:this.modalService.getModalsCount()+1,initialState:{title:"Supprimer le fichier",message:`Confirmez-vous la suppression du fichier <strong>${t.libelle}</strong> ?`}};this.modalService.show(P.z,i),this.modalService.onHide.pipe((0,V.q)(1),(0,J.h)(n=>n===F.G.validation),(0,b.w)(n=>(this.loader=this.loaderService.show(this),this.cd.markForCheck(),this.vieDeLaClasseService.deleteFile(t,this.entityCurrent.id,this.typeEntityCurrent,this.vieDeLaClasse,this.matiere))),(0,u.b)(n=>{this.uiService.notifyEvent(r.DOJ.genericSuccess,"Le fichier a bien \xe9t\xe9 supprim\xe9 !","Vie de la classe","icon-ed_viedelaclasse"),this.vieClasseCible=this.getVieClasseCible()}),(0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(n=>this.uiService.notifyErrorThenEmpty(n,!0,"Erreur","fa fa-warning"))).subscribe()}isModerateur(){return!this.isVieClasseMatiere&&this.vieDeLaClasse.profPrincipal||this.isVieClasseMatiere&&this.authStore.isProfesseur()}onCommentaireAdded(t){let i;this.loader=this.loaderService.show(this),i=0===t.id?this.vieDeLaClasseService.addComment(this.authStore.currentUser.id,this.authStore.currentUser.typeCompte,this.entityCurrent.id,this.typeEntityCurrent,this.vieDeLaClasse,t,this.matiere):this.vieDeLaClasseService.updateComment(this.authStore.currentUser.id,this.authStore.currentUser.typeCompte,this.entityCurrent.id,this.typeEntityCurrent,this.vieDeLaClasse,t,this.matiere),i.pipe((0,u.b)(()=>{this.uiService.notifyEvent(r.DOJ.genericSuccess,`Votre commentaire a bien \xe9t\xe9 ${t.id>0?"enregistr\xe9":"modifi\xe9"} !`,"Vie de la classe","icon-ed_viedelaclasse")}),(0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(n=>this.uiService.notifyErrorThenEmpty(n,!0,"Vie de la classe","fa fa-warning"))).subscribe()}onCommentaireDeleted(t){this.loader=this.loaderService.show(this),this.vieDeLaClasseService.deleteComment(this.authStore.currentUser.id,this.authStore.currentUser.typeCompte,this.entityCurrent.id,this.typeEntityCurrent,this.vieDeLaClasse,t,this.matiere).pipe((0,u.b)(()=>{this.uiService.notifyEvent(r.DOJ.genericSuccess,"Votre commentaire a bien \xe9t\xe9 supprim\xe9 !","Vie de la classe","icon-ed_viedelaclasse")}),(0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(i=>this.uiService.notifyErrorThenEmpty(i,!0,"Vie de la classe","fa fa-warning"))).subscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(r.CnD),e.Y36(r.aw1),e.Y36(D.S),e.Y36(r.VLf),e.Y36(I.tT),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ed-vie-de-classe-element"]],inputs:{vieDeLaClasse:"vieDeLaClasse",entityCurrent:"entityCurrent",contexteOriginal:"contexteOriginal",afficherCommentaires:"afficherCommentaires",canUploadPJ:"canUploadPJ",afficherFormulaireCommentaires:"afficherFormulaireCommentaires",matiere:"matiere"},features:[e.TTD],decls:10,vars:9,consts:[[1,"card","ed-card","with-epingle",3,"ngBusy","id"],[1,"card-header"],["type","button","class","btn btn-fab btn-danger float-end d-print-none","title","Modifier",3,"click",4,"ngIf"],[1,"card-body"],["edMathjax","","class","text-breaked-word ed-cke",3,"content","innerHTML",4,"ngIf"],["id","formModifVieClasse","method","post","name","formModifVieClasse","ngForm","","novalidate","",4,"ngIf"],["class","card-footer legende d-print-none dropzone-container",3,"id",4,"ngIf"],["type","button","title","Modifier",1,"btn","btn-fab","btn-danger","float-end","d-print-none",3,"click"],["aria-hidden","true",1,"fa","fa-pencil"],["edMathjax","",1,"text-breaked-word","ed-cke",3,"content","innerHTML"],["id","formModifVieClasse","method","post","name","formModifVieClasse","ngForm","","novalidate",""],["name","contenuVieDeClasse",3,"ngModel","config","ngModelChange"],[1,"btn-action","margin-top-10"],["type","button","id","buttonModif","name","button1id",1,"btn","btn-success","float-end",3,"click"],["aria-hidden","true",1,"icon-ed_save"],[1,"margin-whitespace"],["type","button","id","buttonSaveAFaire","name","buttonSaveAFaire",1,"btn","btn-danger","float-start",3,"click"],[1,"clearfix"],[1,"card-footer","legende","d-print-none","dropzone-container",3,"id"],[3,"documents","fromCloudEnabled","idContext","canAddDocuments","canDeleteDocuments","typeContext","dropzoneContainer","title","deleteDocument","successUpload"],["class","form-text",4,"ngIf"],[3,"afficherCommentaires","afficherFormulaireCommentaires","idSupport","isModerateur","tabCommentaires","typeSupport","commentaireAdded","commentaireDeleted",4,"ngIf"],[1,"form-text"],[3,"afficherCommentaires","afficherFormulaireCommentaires","idSupport","isModerateur","tabCommentaires","typeSupport","commentaireAdded","commentaireDeleted"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.ALo(1,"trim"),e.TgZ(2,"div",1),e.YNc(3,R,2,0,"button",2),e.TgZ(4,"h3"),e._uU(5),e.qZA()(),e.TgZ(6,"div",3),e.YNc(7,j,2,4,"div",4),e.YNc(8,K,10,2,"form",5),e.qZA(),e.YNc(9,H,6,15,"div",6),e.qZA()),2&t&&(e.s9C("id",i.isVieClasseMatiere?e.lcZ(1,7,"matiere"+i.vieClasseCible.id):"vieClasse"),e.Q6J("ngBusy",i.loader),e.xp6(3),e.Q6J("ngIf",(i.typeEntityCurrent===i.CONST_TYPE_ENTITE.CLASSE||i.typeEntityCurrent===i.CONST_TYPE_ENTITE.GROUPE&&i.contexteOriginal!==i.CONST_TYPE_ENTITE.CLASSE)&&!i.isModeEditable&&i.canEdit),e.xp6(2),e.Oqu(i.isVieClasseMatiere?i.vieClasseCible.libelle:i.vieClasseCible.classe),e.xp6(2),e.Q6J("ngIf",!i.isModeEditable),e.xp6(1),e.Q6J("ngIf",i.isModeEditable),e.xp6(1),e.Q6J("ngIf",i.vieClasseCible.fichiers.length>0||i.vieClasseCible.commentaires.length>0||i.isModerateur()||i.authStore.isEleve()))},dependencies:[Y.C,p.O5,v._Y,v.JJ,v.JL,v.On,v.F,B.u,x.DC,w.L,G.M,N.w,f.Z],styles:['.item-classe{position:relative}.item-classe:before{content:"";position:absolute;top:-15px;left:40px;display:block;width:5px;height:30px;background:var(--light-primary-color);border-radius:50px}.item-classe .commentaires{margin:20px 0 0}\n'],encapsulation:2,changeDetection:0}),s})();var z=a(4602);function W(s,o){if(1&s&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.hij("(",t.entityCurrent.libelle,")")}}function X(s,o){if(1&s&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.AsE("(",t.eleveCurrent.prenom," - ",t.eleveCurrent.classe.libelle,")")}}function q(s,o){if(1&s&&e._UZ(0,"ed-vie-de-classe-element",16),2&s){const t=e.oxw(2);e.s9C("id",t.vieClasseCurrent.idCDT),e.Q6J("afficherCommentaires",t.isAfficherCommentairesClasse())("canUploadPJ",t.canUploadPJ())("afficherFormulaireCommentaires",t.isAfficherFormulaireCommentairesClasse())("entityCurrent",t.entityCurrent)("contexteOriginal",t.contexteOriginal)("vieDeLaClasse",t.vieClasseCurrent)}}function ee(s,o){if(1&s&&(e._UZ(0,"ed-vie-de-classe-element",17),e.ALo(1,"trim")),2&s){const t=o.$implicit,i=e.oxw(2);e.s9C("id",e.lcZ(1,8,t.id)),e.Q6J("afficherCommentaires",i.isAfficherCommentairesMatiere(t))("canUploadPJ",i.canUploadPJ(t))("afficherFormulaireCommentaires",i.isAfficherFormulaireCommentairesMatiere(t))("entityCurrent",i.entityCurrent)("contexteOriginal",i.contexteOriginal)("matiere",t)("vieDeLaClasse",i.vieClasseCurrent)}}function te(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"ed-select-entity",18),e.NdJ("entityChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.selectClassOrGroupe(n))}),e.qZA()}if(2&s){const t=e.oxw(2);e.Q6J("displayClasses",!1)("displayGroupes",!1)("displayClassesOfGroupe",t.typeEntity===t.CONST_TYPE_CLASSE_GROUPE.GROUPE?t.idEntity:0)}}const A=function(s){return{"active-custom":s}};function ie(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"li",13)(1,"button",14),e.NdJ("click",function(){const l=e.CHM(t).$implicit,C=e.oxw(2);return C.setSection(l.libelle),e.KtG(C.scrollToElement("#matiere"+l.id))}),e._uU(2),e.qZA()()}if(2&s){const t=o.$implicit,i=e.oxw(2);e.Q6J("ngClass",e.VKq(2,A,t.libelle===i.currentSection)),e.xp6(2),e.Oqu(t.libelle)}}const se=function(){return["ED-VIE-DE-CLASSE-ELEMENT"]};function re(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"div",6),e.NdJ("sectionChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onSectionChange(n))}),e.YNc(4,q,1,7,"ed-vie-de-classe-element",7),e.YNc(5,ee,2,10,"ed-vie-de-classe-element",8),e.ALo(6,"trackByProperty"),e.qZA()(),e.TgZ(7,"div",9),e.YNc(8,te,1,3,"ed-select-entity",10),e.TgZ(9,"div",11)(10,"ul",12)(11,"li",13)(12,"button",14),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return n.setSection(n.vieClasseCurrent.idCDT),e.KtG(n.scrollToElement("#vieClasse"))}),e._uU(13),e.qZA()(),e.YNc(14,ie,3,4,"li",15),e.ALo(15,"trackByProperty"),e.qZA()()()()()}if(2&s){const t=e.oxw();e.xp6(3),e.Q6J("spiedTags",e.DdM(13,se)),e.xp6(1),e.Q6J("ngIf",t.contexteOriginal!==t.CONST_TYPE_CLASSE_GROUPE.GROUPE),e.xp6(1),e.Q6J("ngForOf",t.vieClasseCurrent.matieres)("ngForTrackBy",e.lcZ(6,9,"$index")),e.xp6(3),e.Q6J("ngIf",t.authStore.isProfOuPersonnel()&&t.typeEntity===t.CONST_TYPE_CLASSE_GROUPE.GROUPE),e.xp6(3),e.Q6J("ngClass",e.VKq(14,A,t.vieClasseCurrent.idCDT===+t.currentSection)),e.xp6(2),e.hij(" ",t.vieClasseCurrent.classe," "),e.xp6(1),e.Q6J("ngForOf",t.vieClasseCurrent.matieres)("ngForTrackBy",e.lcZ(15,11,"$index"))}}function ne(s,o){1&s&&(e.TgZ(0,"div",19)(1,"h3",20),e._uU(2,"Aucun contenu n'est disponible"),e.qZA()())}const ae=[{path:"",component:(()=>{class s extends((0,r.kCV)()){constructor(t,i,n,l,C,y,ue,he,Ce,me,fe){super(),this.activatedRoute=t,this.uiService=i,this.loaderService=n,this.authStore=l,this.viedelaclasseStore=C,this.vieDeLaClasseService=y,this.etablissementService=ue,this.etablissementStore=he,this.renderer=Ce,this.badgesStore=me,this.cd=fe,this.CONST_TYPE_CLASSE_GROUPE=r.JBS,this.edTypeUser=r.dcH,this._trimPipe=new f.Z,this.eleveCurrent=new r.Dfc,this.vieClasseCurrent=new r.bIF,this.titre="Vie de la classe",this.tabGroupes=[],this.tabClassesOriginal=[],this.idcontexteOriginal=0,this.contexteOriginal=r.JBS.CLASSE,this.cloudActif=r.Kg5.isModuleEnabled(this.authStore.currentUser,r.qzA.CLOUD)}ngOnInit(){this.activatedRoute.paramMap.pipe((0,E.U)(t=>(this.typeEntity=t.get("typeEntity"),this.typeUser=t.get("typeEntity"),this.idEntity=+t.get("idEntity"),t)),(0,b.w)(()=>!this.idEntity||this.typeEntity!==r.meW.CLASSE&&this.typeEntity!==r.meW.GROUPE?(0,c.of)(void 0):(this.loader=this.loaderService.show(this),this.etablissementService.getClasseGroupeById(this.idEntity,this.typeEntity).pipe((0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(t=>this.uiService.notifyErrorThenEmpty(t,!0,"Consultation","fa fa-warning"))))),(0,u.b)(t=>{if(this.authStore.isFamille()){const i=this.authStore.currentUser.profile.eleves.find(n=>n.id===this.idEntity);typeof i<"u"&&(this.entityCurrent=i.classe,this.eleveCurrent=i)}else this.entityCurrent=this.authStore.isEleve()?this.authStore.currentUser.profile.classe:new r.WRp(t);this.typeEntity===r.JBS.GROUPE&&(this.contexteOriginal=r.JBS.GROUPE,this.idcontexteOriginal=this.idEntity,this.contexteEnCours=new r.WRp,this.entityCurrent=new r.zJg(t),this.groupeOriginal=new r.zJg(t),this.titre="Espace groupe"),this._variantDefault=r.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec,this.authStore.currentUser.typeCompte,this.authStore.currentUser.id,[this.contexteOriginal,this.entityCurrent.id]),this.initFromStorage()}),(0,d.K)(t=>this.uiService.notifyErrorThenEmpty(t,!0,"Erreur","fa fa-warning")),(0,_.R)(this.componentDestroyed$)).subscribe(),this.clearBadge()}initFromStorage(){this.listVieDeClasse$=this.viedelaclasseStore.select$().pipe((0,E.U)(t=>Object.getEntity(t,this._variantDefault)),(0,u.b)(t=>{this.vieClasseCurrent=new r.bIF(t)})),this.typeEntity===r.JBS.GROUPE&&this.etablissementStore.select$().pipe((0,u.b)(t=>{const i=new r.jIb(t);this.tabGroupes=i.groupes instanceof Array?i.groupes.map(l=>new r.zJg(l)):[];const n=this.tabGroupes.find(()=>({id:this.idEntity}));Object.isExists(n)&&(this.tabClassesOriginal=n.classes instanceof Array?n.classes.map(l=>new r.Mn7(l)):[])}),(0,_.R)(this.componentDestroyed$)).subscribe(),this.refreshData()}refreshData(t=!1){let i=[this.vieDeLaClasseService.listeVieClasse(this.authStore.currentUser.id,this.authStore.currentUser.typeCompte,this.entityCurrent.id,this.contexteOriginal,!0)];this.typeEntity===r.JBS.GROUPE&&!t&&i.push(this.etablissementService.getNiveauxListe().pipe((0,M.d)(null))),this.loader=this.loaderService.show(this),this.cd.markForCheck(),(0,S.D)(i).pipe((0,h.x)(()=>this.loaderService.hide(this)),(0,d.K)(n=>this.uiService.notifyErrorThenEmpty(n,!0,"Vie de la classe","fa fa-warning"))).subscribe()}isAfficherCommentairesClasse(){return!(null===this.authStore.currentUser||!Array.isArray(this.vieClasseCurrent.commentaires))&&(this.isAfficherCommentairesLectureSeuleClasse()||this.isAfficherFormulaireCommentairesClasse())}isAfficherCommentairesLectureSeuleClasse(){return null!==this.authStore.currentUser&&(!this.vieClasseCurrent.profPrincipal&&this.authStore.isProfesseur()||0===this.vieClasseCurrent.idCDT||Array.isArray(this.vieClasseCurrent.commentaires))&&!this.authStore.isEleve()&&!this.authStore.isProfesseur()}isAfficherFormulaireCommentairesClasse(){return null!==this.authStore.currentUser&&0!==this.vieClasseCurrent.idCDT&&(this.vieClasseCurrent.profPrincipal||this.authStore.isEleve())&&Array.isArray(this.vieClasseCurrent.commentaires)}isAfficherCommentairesMatiere(t){return!(null===this.authStore.currentUser||!Array.isArray(t.commentaires))&&(this.isAfficherCommentairesLectureSeuleMatiere(t)||this.isAfficherFormulaireCommentairesMatiere(t))}isAfficherCommentairesLectureSeuleMatiere(t){return null!==this.authStore.currentUser&&(!this.isMatiereEnseignee(t)&&this.authStore.isProfesseur()||0===t.idCDT||null!==t.commentaires&&t.commentaires.length>0)&&!this.authStore.isEleve()&&Array.isArray(this.vieClasseCurrent.commentaires)&&!this.authStore.isProfesseur()}isAfficherFormulaireCommentairesMatiere(t){return null!==this.authStore.currentUser&&(this.isMatiereEnseignee(t)||this.authStore.isEleve())&&t.idCDT>0&&Array.isArray(this.vieClasseCurrent.commentaires)}isMatiereEnseignee(t){return null!==this.authStore.currentUser&&this.authStore.isProfesseur()&&this.authStore.currentUser.profile.matieres.findIndex(i=>i.code===""+t.id)>-1}canUploadPJ(t){return!(null===this.authStore.currentUser||!this.authStore.isProfesseur()||Object.isExists(t)&&0===t.idCDT||!Object.isExists(t)&&0===this.vieClasseCurrent.idCDT)&&(Object.isExists(t)?this.isMatiereEnseignee(t):this.vieClasseCurrent.profPrincipal)}selectClassOrGroupe(t){t.typeEntity===r.meW.GROUPE?(this.contexteEnCours=new r.Mn7,this.contexteOriginal=r.JBS.GROUPE,this.entityCurrent=this.groupeOriginal):(this.contexteEnCours=new r.Mn7(t),this.contexteOriginal=r.JBS.CLASSE,this.entityCurrent=new r.WRp(t)),this._variantDefault=r.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec,this.authStore.currentUser.typeCompte,this.authStore.currentUser.id,[this.contexteOriginal,this.entityCurrent.id]),this.refreshData()}scrollToElement(t){const i=this._trimPipe.transform(t);try{this.renderer.selectRootElement("#body-vie-classe ed-vie-de-classe-element "+i,!0).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}catch{console.error("l'ancre #body-vie-classe ed-vie-de-classe-element "+i+" n'existe pas")}}clearBadge(){const t=this.badgesStore.cloneDeep();this.authStore.isFamille()&&(this.typeUser="FE"),t.getBadgeFromModule(r.qzA.VIE_DE_LA_CLASSE,this.idEntity,r.o2q[this.typeUser])>0&&(t.updateBadgeForModule(0,r.qzA.VIE_DE_LA_CLASSE,this.idEntity,r.o2q[this.typeUser]),this.badgesStore.store=t,this.badgesStore.setStorage(t).catch(i=>console.error("VieDeLaClasseComponent.clearBadge badgesStore.setStorage : ",i)))}setSection(t){this.currentSection=t,this.cd.markForCheck()}onSectionChange(t){this.currentSection=t,this.cd.markForCheck()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(m.gz),e.Y36(r.VLf),e.Y36(D.S),e.Y36(r.CnD),e.Y36(r.ezZ),e.Y36(r.aw1),e.Y36(r.Xmb),e.Y36(r.VD2),e.Y36(e.Qsj),e.Y36(r.et7),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ed-vie-de-la-classe"]],features:[e.qOj],decls:9,vars:8,consts:[[1,"ed-container","vie-de-classe","double-padding",3,"ngBusy"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noVieDeClasse",""],["id","body-vie-classe",1,"clear","row"],["role","main",1,"col-lg-8","col-xl-9","no-padding"],["edScrollSpy","",3,"spiedTags","sectionChange"],[3,"id","afficherCommentaires","canUploadPJ","afficherFormulaireCommentaires","entityCurrent","contexteOriginal","vieDeLaClasse",4,"ngIf"],[3,"id","afficherCommentaires","canUploadPJ","afficherFormulaireCommentaires","entityCurrent","contexteOriginal","matiere","vieDeLaClasse",4,"ngFor","ngForOf","ngForTrackBy"],["id","rubrique-vieClasse",1,"col-lg-4","col-xl-3"],[3,"displayClasses","displayGroupes","displayClassesOfGroupe","entityChange",4,"ngIf"],["role","complementary",1,"bs-docs-sidebar","d-print-none","hidden-xs","hidden-sm","scroll-menu"],["id","navVieClasse",1,"nav","bs-docs-sidenav"],[3,"ngClass"],["type","button",1,"btn","btn-link",3,"click"],[3,"ngClass",4,"ngFor","ngForOf","ngForTrackBy"],[3,"id","afficherCommentaires","canUploadPJ","afficherFormulaireCommentaires","entityCurrent","contexteOriginal","vieDeLaClasse"],[3,"id","afficherCommentaires","canUploadPJ","afficherFormulaireCommentaires","entityCurrent","contexteOriginal","matiere","vieDeLaClasse"],[3,"displayClasses","displayGroupes","displayClassesOfGroupe","entityChange"],[1,"jumbotron","container-bg","double-padding"],[1,"d-print-none"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2),e.YNc(3,W,2,1,"small",1),e.YNc(4,X,2,2,"small",1),e.qZA(),e.YNc(5,re,16,16,"div",2),e.ALo(6,"async"),e.YNc(7,ne,3,0,"ng-template",null,3,e.W1O),e.qZA()),2&t){const n=e.MAs(8);e.Q6J("ngBusy",i.loader),e.xp6(2),e.hij(" ",i.titre," "),e.xp6(1),e.Q6J("ngIf",(i.authStore.isProfesseur()||i.authStore.isPersonnel())&&i.entityCurrent),e.xp6(1),e.Q6J("ngIf",i.authStore.isFamille()&&i.entityCurrent),e.xp6(1),e.Q6J("ngIf",e.lcZ(6,6,i.listVieDeClasse$))("ngIfElse",n)}},dependencies:[p.mk,p.sg,p.O5,x.DC,U.j,L.h,$,p.Ov,z.$,f.Z],styles:["ed-vie-de-classe-element+ed-vie-de-classe-element{display:block;margin:40px 0 0}.active-custom{background:var(--smalldark-placeholder-color)}#navVieClasse.nav>li>a:hover{background:var(--light-placeholder-color)}#navVieClasse.nav>li>a:focus{visibility:hidden}\n"],encapsulation:2,changeDetection:0}),s})()}];let oe=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(ae),m.Bz]}),s})();var le=a(99658),ce=a(4477);let de=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[oe,ce.S,le.m]}),s})()}}]);