"use strict";(self.webpackChunked_web=self.webpackChunked_web||[]).push([[1655],{64115:(S,h,a)=>{a.d(h,{E:()=>Ee});var e=a(94650),o=a(45007),v=a(60515),l=a(18505),g=a(28746),p=a(70262),_=a(20388),m=a(92635),u=a(36895),C=a(24006),y=a(80125),D=a(4602);function T(i,s){1&i&&(e.TgZ(0,"div",22),e._uU(1,"Aucun invit\xe9 disponible"),e.qZA())}const E=function(i,s){return{"btn-secondary":i,"btn-success":s}};function R(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",24),e.NdJ("click",function(){const c=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.selectInvite(c))}),e._uU(2),e.ALo(3,"displayNom"),e.ALo(4,"displayNom"),e.qZA(),e.BQk()}if(2&i){const t=s.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.WLB(12,E,(null==n.inviteSelected?null:n.inviteSelected.idInvite)!==t.idInvite,(null==n.inviteSelected?null:n.inviteSelected.idInvite)===t.idInvite)),e.xp6(1),e.lnq(" ",e.Dn7(3,4,t,!1,!1)," - ",e.Dn7(4,8,t.eleve,!1,!1)," (",t.eleve.codeClasse,") ")}}const A=function(){return["nom|asc","prenom|asc"]};function Z(i,s){if(1&i&&(e.YNc(0,R,5,15,"ng-container",23),e.ALo(1,"orderBy"),e.ALo(2,"trackByProperty")),2&i){const t=e.oxw();e.Q6J("ngForOf",e.xi3(1,2,t.listInvitesDispos,e.DdM(7,A)))("ngForTrackBy",e.lcZ(2,5,"idInvite"))}}function O(i,s){1&i&&(e.TgZ(0,"div",22),e._uU(1,"Aucun cr\xe9neau disponible"),e.qZA())}function V(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",25),e.NdJ("click",function(){const c=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.selectCreneau(c))}),e._uU(2),e.qZA(),e.BQk()}if(2&i){const t=s.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("disabled",!n.isCreneauInviteDispo(t))("ngClass",e.WLB(5,E,(null==n.creneauSelected?null:n.creneauSelected.heureDebut)!==t.heureDebut,(null==n.creneauSelected?null:n.creneauSelected.heureDebut)===t.heureDebut))("title",n.getTooltipCreneau(t)),e.xp6(1),e.AsE(" ",t.heureDebut," - ",t.heureFin," ")}}function I(i,s){if(1&i&&(e.YNc(0,V,3,8,"ng-container",23),e.ALo(1,"trackByProperty")),2&i){const t=e.oxw();e.Q6J("ngForOf",t.listCreneauxDispos)("ngForTrackBy",e.lcZ(1,2,"heureDebut"))}}let F=(()=>{class i{constructor(t,n,r,c,d,f,b){this.authStore=t,this.modalRef=n,this.rdvService=r,this.uiService=c,this.loaderService=d,this.cd=f,this.rdvStore=b,this.title=o.NRy.RDVPP,this.listInvitesDispos=[],this.listCreneauxDispos=[]}ngOnInit(){this.exceptions=this.rdvStore.getReservationsForOtherSession(this.authStore.variantForCurrentUser,this.session.id),this.listInvitesDispos=this.session.listInvitesDisponibles,this.listCreneauxDispos=this.session.listCreneauxJour(this.jour,this.authStore.currentUser.typeCompte,this.authStore.currentUser.id).filter(t=>t.isDisponible&&!this.isCreneauInException(t))}isCreneauInException(t){return this.exceptions.find(n=>n.date===t.date&&n.heureDebut<t.heureFin&&n.heureFin>t.heureDebut)}isInviteInException(t){return this.exceptions.findIndex(n=>o.C_1.isSameDay(this.jour,n.dateAsDate)&&Object.isExists(n.invite)&&n.invite.id===t.id&&n.invite.type===t.type&&n.invite.eleve.id===t.eleve.id)>-1}selectCreneau(t){this.creneauSelected=t}selectInvite(t){this.inviteSelected=t,this.selectCreneau(void 0)}close(){this.modalRef.hide()}save(){!Object.isExists(this.creneauSelected)||!Object.isExists(this.inviteSelected)||(this.loader=this.loaderService.show(this),this.cd.markForCheck(),this.rdvService.toggleCreneau(this.session,this.creneauSelected,this.inviteSelected).pipe((0,l.b)(t=>{t&&(this.uiService.notifyEvent(o.DOJ.genericSuccess,"La prise de rendez-vous a \xe9t\xe9 effectu\xe9e",this.title,"icon-ed_rdvpp"),this.close())}),(0,g.x)(()=>this.loaderService.hide(this)),(0,p.K)(t=>(this.uiService.notifyEvent(o.DOJ.genericError,""!==t.message?t.message:"La prise de rendez-vous a \xe9chou\xe9",this.title,"fa fa-warning"),v.E))).subscribe())}isCreneauInviteDispo(t){return!!Object.isExists(this.inviteSelected)&&this.rdvStore.isCreneauInviteDispo(this.authStore.variantForCurrentUser,this.inviteSelected,t)}getTooltipCreneau(t){return Object.isExists(this.inviteSelected)?this.isCreneauInviteDispo(t)?"Fixer le rendez-vous sur ce cr\xe9neau":"Cr\xe9neau non disponible pour l'invit\xe9 s\xe9lectionn\xe9":"Veuillez s\xe9lectionner un invit\xe9"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.CnD),e.Y36(_.UZ),e.Y36(o.vIF),e.Y36(o.VLf),e.Y36(m.S),e.Y36(e.sBO),e.Y36(o.nUJ))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],inputs:{session:"session",jour:"jour"},decls:38,vars:10,consts:[[1,"ed-rdv-modal",3,"ngBusy"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Fermer cette fen\xeatre",1,"btn-close","d-print-none",3,"click"],["id","form-session-rdv","novalidate","",3,"ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-lg-6"],[1,"card","panel-creneaux","panel-invites"],[1,"card-header","text-center"],[1,"panel-title","text-center"],[1,"card-body"],["class","jumbotron",4,"ngIf","ngIfElse"],["listInvites",""],[1,"card-footer"],[1,"card","panel-creneaux"],["listCreneaux",""],[1,"modal-footer"],[1,"w-100"],["type","button",1,"btn","btn-warning","float-start",3,"click"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"clearfix"],[1,"jumbotron"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","button","title","Fixer le rendez-vous sur cet invit\xe9",1,"btn",3,"ngClass","click"],["type","button",1,"btn",3,"disabled","ngClass","title","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3),e.ALo(4,"edDate"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return n.close()}),e.qZA()(),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return n.save()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h3",10),e._uU(13,"S\xe9lectionner un invit\xe9"),e.qZA()(),e.TgZ(14,"div",11),e.YNc(15,T,2,0,"div",12),e.YNc(16,Z,3,8,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(18,"div",14),e._uU(19,"Liste des invit\xe9s n'ayant pris aucun rendez-vous sur votre session et disponibles ce jour"),e.qZA()()(),e.TgZ(20,"div",7)(21,"div",15)(22,"div",9)(23,"h3",10),e._uU(24,"S\xe9lectionner un cr\xe9neau"),e.qZA()(),e.TgZ(25,"div",11),e.YNc(26,O,2,0,"div",12),e.YNc(27,I,2,4,"ng-template",null,16,e.W1O),e.qZA(),e.TgZ(29,"div",14),e._uU(30,"Liste des cr\xe9neaux disponibles"),e.qZA()()()()(),e.TgZ(31,"div",17)(32,"div",18)(33,"button",19),e.NdJ("click",function(){return n.close()}),e._uU(34,"Annuler"),e.qZA(),e.TgZ(35,"button",20),e._uU(36,"Enregistrer"),e.qZA(),e._UZ(37,"div",21),e.qZA()()()()),2&t){const r=e.MAs(17),c=e.MAs(28);e.Q6J("ngBusy",n.loader),e.xp6(3),e.hij("Fixer un rendez-vous pour le ",e.xi3(4,7,n.jour,"EEEE d LLLL"),""),e.xp6(12),e.Q6J("ngIf",0===n.listInvitesDispos.length)("ngIfElse",r),e.xp6(11),e.Q6J("ngIf",0===n.listCreneauxDispos.length)("ngIfElse",c),e.xp6(9),e.Q6J("disabled",!n.inviteSelected||!n.creneauSelected)}},dependencies:[u.mk,u.sg,u.O5,C._Y,C.JL,C.F,y.DC,o.$t3,o.d0N,o.ifA,D.$],styles:[".ed-rdv-modal[_ngcontent-%COMP%]   div.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:none}.ed-rdv-modal[_ngcontent-%COMP%]   div.card.panel-creneaux.panel-invites[_ngcontent-%COMP%]   div.card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:normal;flex-basis:auto;width:100%}.ed-rdv-modal[_ngcontent-%COMP%]   div.card.panel-creneaux[_ngcontent-%COMP%]   div.card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-basis:fit-content}.ed-rdv-modal[_ngcontent-%COMP%]   div.card.panel-creneaux[_ngcontent-%COMP%]   div.card-body[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]{background-color:#fff;border-color:var(--light-primary-color);color:var(--light-primary-color)}"],changeDetection:0}),i})();var M=a(39646),x=a(52497),J=a(82722),U=a(54244),P=a(95698),k=a(39300),w=a(63900),L=a(55253);function N(i,s){if(1&i&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.hij(" ",t.authStore.isFamille()?"\xcates-vous s\xfbr de vouloir prendre le rendez-vous ?":"\xcates-vous s\xfbr de vouloir d\xe9sactiver la prise de rendez-vous sur le cr\xe9neau ?"," ")}}function Y(i,s){1&i&&(e.TgZ(0,"p"),e._uU(1,"\xcates-vous s\xfbr de vouloir annuler le rendez-vous ?"),e.qZA())}function B(i,s){if(1&i&&(e.ynx(0),e._uU(1," Cr\xe9neau r\xe9serv\xe9 par "),e.TgZ(2,"p",12),e._uU(3),e.ALo(4,"displayNom"),e.ALo(5,"displayNom"),e.qZA(),e._uU(6," Annuler le rendez-vous ? "),e.BQk()),2&i){const t=e.oxw(3);e.xp6(3),e.lnq(" ",e.Dn7(4,3,t.creneau.invite,!1,!1)," - ",e.Dn7(5,7,t.creneau.invite.eleve,!1,!1)," (",t.creneau.invite.eleve.codeClasse,") ")}}function q(i,s){1&i&&(e.TgZ(0,"p"),e._uU(1,"\xcates-vous s\xfbr de vouloir activer la prise de rendez-vous sur le cr\xe9neau ?"),e.qZA())}function Q(i,s){if(1&i&&(e.YNc(0,B,7,11,"ng-container",3),e.YNc(1,q,2,0,"ng-template",null,11,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw(2);e.Q6J("ngIf",n.creneau.isReserve)("ngIfElse",t)}}function j(i,s){if(1&i&&(e.YNc(0,Y,2,0,"p",3),e.YNc(1,Q,3,2,"ng-template",null,9,e.W1O),e.TgZ(3,"p",10),e._uU(4),e.ALo(5,"edDate"),e.qZA()),2&i){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf",n.authStore.isFamille())("ngIfElse",t),e.xp6(4),e.lnq("",e.xi3(5,5,n.creneau.dateAsDate,"EEEE d LLLL")," de ",n.creneau.heureDebut," \xe0 ",n.creneau.heureFin,"")}}const $=function(i){return[i]};function z(i,s){if(1&i&&(e.TgZ(0,"button",13),e._UZ(1,"i",14),e._uU(2," Envoyer un message \xe0 la famille "),e.qZA()),2&i){const t=e.oxw();e.Q6J("typeContact",t.edTypeEntity.RENDEZ_VOUS)("listContact",e.VKq(2,$,t.creneau.inviteAsContact))}}let K=(()=>{class i{constructor(t,n,r){this.authStore=t,this.modalService=n,this.modalRef=r,this.edTypeEntity=o.meW,this.btnCancelClass="btn-warning",this.btnOKClass="btn-primary"}ngOnInit(){this.title=this.creneau.isDisponible?this.authStore.isFamille()?"R\xe9servation du cr\xe9neau":"D\xe9sactivation du cr\xe9neau":this.authStore.isFamille()||this.creneau.isReserve?"Annulation du rendez-vous":"Activation du cr\xe9neau",this.creneau.isDisponible||(this.btnOKClass="btn-warning",this.btnCancelClass="btn-primary")}okFn(){this.modalService.setDismissReason(x.G.validation),this.modalRef.hide()}cancelFn(){this.modalService.setDismissReason(x.G.cancel),this.modalRef.hide()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.CnD),e.Y36(_.tT),e.Y36(_.UZ))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],inputs:{creneau:"creneau"},decls:14,vars:10,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[4,"ngIf","ngIfElse"],["creneauIndispo",""],[1,"modal-footer"],[1,"w-100"],["type","button",3,"click"],["type","button","edMessageTo","","class","margin-whitespace btn btn-primary float-end","title","Envoyer un message \xe0 la famille avant de supprimer le RDV",3,"typeContact","listContact",4,"ngIf"],["creneauIndispoAdulte",""],[1,"text-bold","text-center","margin-top-20"],["creneauActivation",""],[1,"text-bold","text-center"],["type","button","edMessageTo","","title","Envoyer un message \xe0 la famille avant de supprimer le RDV",1,"margin-whitespace","btn","btn-primary","float-end",3,"typeContact","listContact"],["aria-hidden","true",1,"fa","fa-envelope","i-small"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,N,3,1,"div",3),e.YNc(5,j,6,8,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"button",7),e.NdJ("click",function(){return n.cancelFn()}),e._uU(10,"Non"),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return n.okFn()}),e._uU(12,"Oui"),e.qZA(),e.YNc(13,z,3,4,"button",8),e.qZA()()),2&t){const r=e.MAs(6);e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Q6J("ngIf",n.creneau.isDisponible)("ngIfElse",r),e.xp6(5),e.Gre("btn btn-primary float-start ",n.btnCancelClass,""),e.xp6(2),e.Gre("btn float-end ",n.btnOKClass,""),e.xp6(2),e.Q6J("ngIf",n.creneau.isReserve&&!n.authStore.isFamille())}},dependencies:[u.O5,L.x,o.$t3,o.ifA],changeDetection:0}),i})();function W(i,s){1&i&&e._UZ(0,"i",2)}const G=["*"];let H=(()=>{class i extends((0,o.kCV)()){constructor(t,n,r,c,d,f,b,ye){super(),this.authStore=t,this.modalService=n,this.rdvStore=r,this.rdvService=c,this.uiService=d,this.cd=f,this.loaderService=b,this.badgesStore=ye,this.loaderChange=new e.vpe,this.title=o.NRy.RDVPP,this.isDisabled=!1,this.tooltip="",this.cssClass=""}ngOnInit(){const t=this.authStore.isFamille()?o.$ej.edDBUserSpecificKey(this.authStore.currentUser.codeOgec,o.dcH.ELEVE,this.idEleve):this.authStore.variantForCurrentUser;this.rdvStore.selectReservationsForOtherSession(t,this.session.id).pipe((0,l.b)(n=>{this.exceptions=n,this.creneauException=this.getCreneauInException(),this.isDisabled=this.isCreneauDisabled(),this.cssClass=this.getCSSClassCreneau(),this.tooltip=this.getTooltipCreneau()}),(0,J.R)(this.componentDestroyed$)).subscribe()}ngOnChanges(t){this.isDisabled=this.isCreneauDisabled(),this.cssClass=this.getCSSClassCreneau(),this.tooltip=this.getTooltipCreneau()}isCreneauDisabled(){return!this.session.isJourSession(this.creneau.dateAsDate)||this.creneau.isPasse||Object.isExists(this.creneauException)||this.authStore.isFamille()&&(this.creneau.isDisabled||!this.session.isJourReservableToday(this.creneau.dateAsDate)&&!this.creneau.isReservePar(this.authStore.currentUser.typeCompte,this.authStore.currentUser.id,this.idEleve))}getCreneauInException(){return Object.isExists(this.idEleve)&&Object.isExists(this.creneau.invite)&&this.creneau.invite.eleve.id!==this.idEleve?this.creneau:this.exceptions.find(t=>t.date===this.creneau.date&&t.heureDebut<this.creneau.heureFin&&t.heureFin>this.creneau.heureDebut)}getTooltipCreneau(){const t=new o.$t3;if(this.authStore.isProfOuPersonnel()){if(this.isDisabled){if(this.creneau.isReserve){let n=`Cr\xe9neau r\xe9serv\xe9 pour ${t.transform(this.creneau.invite,!1,!1)}`;return Object.isExists(this.creneau.invite.eleve)&&(n=`${n} - ${t.transform(this.creneau.invite.eleve,!1,!1)} (${this.creneau.invite.eleve.codeClasse})`),n}if(Object.isExists(this.creneauException)){let n=`Cr\xe9neau r\xe9serv\xe9 pour ${t.transform(this.creneauException.invite,!1,!1)}`;return Object.isExists(this.creneauException.invite.eleve)&&(n=`${n} - ${t.transform(this.creneauException.invite.eleve,!1,!1)} (${this.creneauException.invite.eleve.codeClasse}) sur une autre session`),n}return""}if(this.creneau.isReserve){let n=`Cr\xe9neau r\xe9serv\xe9 pour ${t.transform(this.creneau.invite,!1,!1)}`;return Object.isExists(this.creneau.invite.eleve)&&(n=`${n} - ${t.transform(this.creneau.invite.eleve,!1,!1)} (${this.creneau.invite.eleve.codeClasse})\nAnnuler le rendez-vous et d\xe9sactiver la prise de rendez-vous pour ce cr\xe9neau`),n}if(!this.creneau.isDisponible)return"Activer la prise de rendez-vous pour ce cr\xe9neau";if(Object.isExists(this.creneauException)){let n=`Cr\xe9neau r\xe9serv\xe9 pour ${t.transform(this.creneauException.invite,!1,!1)}`;return Object.isExists(this.creneauException.invite.eleve)&&(n=`${n} - ${t.transform(this.creneauException.invite.eleve,!1,!1)} (${this.creneau.invite.eleve.codeClasse})  sur une autre session`),n}return"D\xe9sactiver la prise de rendez-vous pour ce cr\xe9neau"}return Object.isExists(this.creneauException)&&Object.isExists(this.creneauException.invite.eleve)?`Cr\xe9neau r\xe9serv\xe9 pour ${this.creneauException.invite.eleve.prenom} sur une autre session`:this.creneau.isReserve?"Le cr\xe9neau n'est pas r\xe9servable":""}getCSSClassCreneau(){if(this.authStore.isFamille()){if(this.creneau.isDisabled||!this.session.isJourReservableToday(this.creneau.dateAsDate))return"btn-secondary";if(this.creneau.isDisponible)return"btn-success";if(this.creneau.isReservePar(this.authStore.currentUser.typeCompte,this.authStore.currentUser.id,this.idEleve))return"btn-primary";if(this.creneau.isReserve)return"btn-secondary"}else if(this.authStore.isProfOuPersonnel())return this.creneau.isReserve?"btn-primary":this.creneau.isDisponible?"btn-success":"btn-danger";return""}toggleCreneau(){let t;if(this.authStore.isProfOuPersonnel()&&!this.creneau.isReserve)t=(0,M.of)(x.G.validation);else{const n={id:this.modalService.getModalsCount()+1,keyboard:!1,ignoreBackdropClick:!0,initialState:{creneau:this.creneau}};this.modalService.show(K,n),t=this.modalService.onHide}t.pipe((0,U.n)(()=>this.modalService.getModalsCount()>0),(0,P.q)(1),(0,k.h)(n=>n===x.G.validation),(0,w.w)(n=>{let r;return this.loaderChange.emit(this.loaderService.show(this)),r=this.authStore.isFamille()?this.rdvService.toggleCreneau(this.session,this.creneau,this.session.getInviteForEleve(this.idEleve)):this.rdvService.toggleCreneau(this.session,this.creneau),r}),(0,l.b)(n=>{if(n){if(this.authStore.isFamille()){const r=this.badgesStore.cloneDeep();this.creneau.isDisponible?r.getBadgeFromModule(o.qzA.RDVPP,this.idEleve,o.o2q.FE)>0&&r.updateBadgeForModule(r.getBadgeFromModule(o.qzA.RDVPP,this.idEleve,o.o2q.FE)-1,o.qzA.RDVPP,this.idEleve,o.o2q.FE):r.updateBadgeForModule(r.getBadgeFromModule(o.qzA.RDVPP,this.idEleve,o.o2q.FE)+1,o.qzA.RDVPP,this.idEleve,o.o2q.FE),this.badgesStore.store=r,this.badgesStore.setStorage(r).catch(c=>console.error("RDVSessionCreneauComponent.toggleCreneau badgesStore.setStorage : ",c))}this.uiService.notifyEvent(o.DOJ.genericSuccess,"Le cr\xe9neau a \xe9t\xe9 mis \xe0 jour",this.title,"icon-ed_rdvpp")}}),(0,g.x)(()=>{this.loaderService.hide(this)}),(0,p.K)(n=>(this.uiService.notifyEvent(o.DOJ.genericError,""!==n.message?n.message:"La mise \xe0 jour du cr\xe9neau a \xe9chou\xe9",this.title,"fa fa-warning"),v.E))).subscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.CnD),e.Y36(_.tT),e.Y36(o.nUJ),e.Y36(o.vIF),e.Y36(o.VLf),e.Y36(e.sBO),e.Y36(m.S),e.Y36(o.et7))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ed-rdv-session-creneau"]],inputs:{session:"session",creneau:"creneau",idEleve:"idEleve",customClass:"customClass"},outputs:{loaderChange:"loaderChange"},features:[e.qOj,e.TTD],ngContentSelectors:G,decls:3,vars:7,consts:[["type","button",3,"title","ngClass","disabled","click"],["aria-hidden","true","class","icon-ed_famille small",4,"ngIf"],["aria-hidden","true",1,"icon-ed_famille","small"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"button",0),e.NdJ("click",function(){return n.toggleCreneau()}),e.YNc(1,W,1,0,"i",1),e.Hsn(2),e.qZA()),2&t&&(e.Gre("ed-rdv-session-creneau btn ",n.customClass,""),e.Q6J("title",n.tooltip)("ngClass",n.customClass?null:n.cssClass)("disabled",n.isDisabled),e.xp6(1),e.Q6J("ngIf",n.creneau.isReserve||n.creneauException))},dependencies:[u.mk,u.O5],styles:[".ed-rdv-session-creneau.btn-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),i})();function X(i,s){if(1&i&&(e.TgZ(0,"i",6),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Oqu(t.session.description)}}const ee=function(i,s){return{on:i,off:s}};function te(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2).$implicit,c=e.oxw(5);return e.KtG(c.toggleDispoListCreneaux(r))}),e._UZ(1,"i",18),e.qZA()}if(2&i){const t=e.oxw(2).$implicit,n=e.oxw(5);e.MGl("title","",n.lastToggleStateJour(t)?"D\xe9sactiver":"Activer"," les cr\xe9neaux de ce jour"),e.Q6J("ngClass",e.WLB(2,ee,n.lastToggleStateJour(t),!n.lastToggleStateJour(t)))}}function ne(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2).$implicit,c=e.oxw(5);return e.KtG(c.openModalPriseRDV(r))}),e._UZ(1,"i",20)(2,"i",21),e.qZA()}}function ie(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ed-rdv-session-creneau",22),e.NdJ("loaderChange",function(r){e.CHM(t);const c=e.oxw(7);return e.KtG(c.loaderChange.emit(r))}),e._uU(1),e.qZA()}if(2&i){const t=s.$implicit,n=e.oxw(7);e.Q6J("creneau",t)("session",n.session)("idEleve",n.idEleve),e.xp6(1),e.hij(" ",t.heureDebut," ")}}function se(i,s){if(1&i&&(e.TgZ(0,"div",10)(1,"div",11),e.YNc(2,te,2,5,"button",12),e.TgZ(3,"h3",13),e._uU(4),e.ALo(5,"edDate"),e.qZA(),e.YNc(6,ne,3,0,"button",14),e.qZA(),e.TgZ(7,"div",15),e.YNc(8,ie,2,4,"ed-rdv-session-creneau",16),e.ALo(9,"trackByProperty"),e.qZA()()),2&i){const t=e.oxw().$implicit,n=e.oxw(5);e.xp6(2),e.Q6J("ngIf",n.authStore.isProfOuPersonnel()&&n.session.isJourSession(t)&&!n.session.isJourPasse(t)),e.xp6(2),e.Oqu(e.xi3(5,5,t,"EEEE d LLLL")),e.xp6(2),e.Q6J("ngIf",n.authStore.isProfOuPersonnel()&&n.session.isJourSession(t)&&!n.session.isJourPasse(t)),e.xp6(2),e.Q6J("ngForOf",n.session.listCreneauxJour(t,n.authStore.currentUser.typeCompte,n.authStore.currentUser.id))("ngForTrackBy",e.lcZ(9,8,"heureDebut"))}}function oe(i,s){if(1&i&&(e.ynx(0),e.YNc(1,se,10,10,"div",9),e.BQk()),2&i){const t=s.$implicit,n=e.oxw(5);e.xp6(1),e.Q6J("ngIf",n.session.isJourSession(t))}}function re(i,s){if(1&i&&(e.TgZ(0,"div",8),e.YNc(1,oe,2,1,"ng-container",5),e.ALo(2,"trackByProperty"),e.qZA()),2&i){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n.session.listJoursParSemaine[t])("ngForTrackBy",e.lcZ(2,2,"$index"))}}function ae(i,s){if(1&i&&(e.ynx(0),e.YNc(1,re,3,4,"div",7),e.BQk()),2&i){const t=s.$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.authStore.isProfOuPersonnel()||n.session.isSemaineReservable(t,n.authStore.currentUser.typeCompte,n.authStore.currentUser.id))}}function ce(i,s){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,X,2,1,"i",4),e.YNc(2,ae,2,1,"ng-container",5),e.ALo(3,"keys"),e.ALo(4,"trackByProperty"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",(t.authStore.isFamille()||t.session.isSpectateur)&&""!==t.session.description),e.xp6(1),e.Q6J("ngForOf",e.lcZ(3,3,t.session.listJoursParSemaine))("ngForTrackBy",e.lcZ(4,5,"$index"))}}function le(i,s){if(1&i&&(e.ynx(0),e.YNc(1,ce,5,7,"div",1),e.BQk()),2&i){const t=e.oxw(),n=e.MAs(3);e.xp6(1),e.Q6J("ngIf",t.authStore.isProfOuPersonnel()||!t.session.isReservePar(t.authStore.currentUser.typeCompte,t.authStore.currentUser.id,t.idEleve))("ngIfElse",n)}}function ue(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ed-rdv-session-creneau",25),e.NdJ("loaderChange",function(r){e.CHM(t);const c=e.oxw(2);return e.KtG(c.loaderChange.emit(r))}),e._uU(1," Annuler le rendez-vous "),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("idEleve",t.idEleve)("creneau",t.creneauReserve)("session",t.session)}}function de(i,s){if(1&i&&(e.TgZ(0,"h4",23),e._uU(1," Rendez-vous pris le "),e.TgZ(2,"b"),e._uU(3),e.ALo(4,"edDate"),e.qZA(),e._uU(5," \xe0 "),e.TgZ(6,"b"),e._uU(7),e.qZA(),e.YNc(8,ue,2,3,"ed-rdv-session-creneau",24),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.Oqu(e.xi3(4,3,t.creneauReserve.date,"EEEE d LLLL")),e.xp6(4),e.Oqu(t.creneauReserve.heureDebut),e.xp6(1),e.Q6J("ngIf",!t.creneauReserve.isPasse&&t.session.isReservable(t.authStore.currentUser.typeCompte,t.authStore.currentUser.id,t.idEleve))}}function pe(i,s){1&i&&(e.TgZ(0,"span"),e._uU(1,"Cette session est termin\xe9e"),e.qZA())}function _e(i,s){1&i&&(e.TgZ(0,"span"),e._uU(1,"Cette session n'est pas disponible \xe0 la r\xe9servation"),e.qZA())}function ve(i,s){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.AsE("Vous \xeates invit\xe9 sur cette session par ",t.session.auteur.prenom," ",t.session.auteur.nom,"")}}function ge(i,s){if(1&i&&(e.TgZ(0,"h4",28),e.YNc(1,pe,2,0,"span",29),e.YNc(2,_e,2,0,"span",29),e.YNc(3,ve,2,2,"span",29),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.session.isTerminee),e.xp6(1),e.Q6J("ngIf",!t.session.isTerminee&&!t.session.isSpectateur),e.xp6(1),e.Q6J("ngIf",!t.session.isTerminee&&t.session.isSpectateur)}}function he(i,s){1&i&&e._UZ(0,"img",38)}function me(i,s){1&i&&e._UZ(0,"img",39)}function fe(i,s){if(1&i&&e._UZ(0,"img",40),2&i){const t=e.oxw(2).$implicit;e.s9C("src",t.invite.eleve.photo,e.LSH)}}function xe(i,s){if(1&i&&(e.TgZ(0,"li",32)(1,"div",33)(2,"div",34),e.YNc(3,he,1,0,"img",35),e.YNc(4,me,1,0,"img",36),e.YNc(5,fe,1,1,"img",37),e.TgZ(6,"h3"),e._uU(7),e.ALo(8,"displayNom"),e.ALo(9,"displayNom"),e.qZA(),e.TgZ(10,"p"),e._uU(11," Rendez-vous pris le "),e.TgZ(12,"b"),e._uU(13),e.ALo(14,"edDate"),e.qZA(),e._uU(15," \xe0 "),e.TgZ(16,"b"),e._uU(17),e.qZA()()()()()),2&i){const t=e.oxw().$implicit;e.xp6(3),e.Q6J("ngIf",""===t.invite.eleve.photo&&"M"===t.invite.eleve.sexe),e.xp6(1),e.Q6J("ngIf",""===t.invite.eleve.photo&&"F"===t.invite.eleve.sexe),e.xp6(1),e.Q6J("ngIf",""!==t.invite.eleve.photo),e.xp6(2),e.lnq("",e.Dn7(8,8,t.invite,!1,!1)," - ",e.Dn7(9,12,t.invite.eleve,!1,!1)," (",t.invite.eleve.codeClasse,")"),e.xp6(6),e.Oqu(e.xi3(14,16,t.date,"EEEE d LLLL")),e.xp6(4),e.Oqu(t.heureDebut)}}function Ce(i,s){if(1&i&&(e.ynx(0),e.YNc(1,xe,18,19,"li",31),e.BQk()),2&i){const t=s.$implicit;e.xp6(1),e.Q6J("ngIf",t.isReserve)}}const be=function(){return["date|asc","heureDebut|asc"]};function Se(i,s){if(1&i&&(e.TgZ(0,"ul",30),e.YNc(1,Ce,2,1,"ng-container",5),e.ALo(2,"orderBy"),e.ALo(3,"trackByProperty"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,t.session.creneaux,e.DdM(7,be)))("ngForTrackBy",e.lcZ(3,5,"id"))}}function De(i,s){if(1&i&&(e.YNc(0,ge,4,3,"h4",26),e.YNc(1,Se,4,8,"ul",27)),2&i){const t=e.oxw(),n=e.MAs(3);e.Q6J("ngIf",t.authStore.isProfOuPersonnel()||!t.session.isReservePar(t.authStore.currentUser.typeCompte,t.authStore.currentUser.id,t.idEleve))("ngIfElse",n),e.xp6(1),e.Q6J("ngIf",t.authStore.isProfOuPersonnel())}}let Ee=(()=>{class i{constructor(t,n,r,c,d,f){this.authStore=t,this.rdvService=n,this.uiService=r,this.loaderService=c,this.cd=d,this.modalService=f,this.loaderChange=new e.vpe,this.title=o.NRy.RDVPP,this.toggleStateParJour={}}ngOnChanges(t){(t.session||t.idEleve)&&(this.creneauReserve=this.session.getCreneauReserve(this.authStore.currentUser.typeCompte,this.authStore.currentUser.id,this.idEleve))}openModalPriseRDV(t){const n={session:this.session,jour:t},r={id:this.modalService.getModalsCount()+1,initialState:n,ignoreBackdropClick:!0,class:"modal-lg"};this.modalService.show(F,r)}toggleDispoListCreneaux(t){const n=!this.lastToggleStateJour(t);this.loaderChange.emit(this.loaderService.show(this)),this.rdvService.toggleDispoListCreneauxRDV(this.session,t,n).pipe((0,l.b)(r=>{r&&(this.uiService.notifyEvent(o.DOJ.genericSuccess,"Les cr\xe9neaux ont \xe9t\xe9 mis \xe0 jour",this.title,"icon-ed_rdvpp"),this.toggleStateParJour[o.C_1.dateToString(t)]=n)}),(0,g.x)(()=>{this.loaderService.hide(this)}),(0,p.K)(r=>(this.uiService.notifyEvent(o.DOJ.genericError,""!==r.message?r.message:"La mise \xe0 jour du cr\xe9neau a \xe9chou\xe9",this.title,"fa fa-warning"),v.E))).subscribe()}lastToggleStateJour(t){const n=o.C_1.dateToString(t);return Object.isExists(this.toggleStateParJour[n])||(this.toggleStateParJour[n]=this.session.nbCreneauxDisposJour(t,this.authStore.currentUser.typeCompte,this.authStore.currentUser.id)>0),this.toggleStateParJour[n]}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.CnD),e.Y36(o.vIF),e.Y36(o.VLf),e.Y36(m.S),e.Y36(e.sBO),e.Y36(_.tT))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ed-rdv-session"]],inputs:{session:"session",idEleve:"idEleve",loader:"loader"},outputs:{loaderChange:"loaderChange"},features:[e.TTD],decls:6,vars:2,consts:[[1,"ed-rdv-session"],[4,"ngIf","ngIfElse"],["monRDV",""],["sessionReadOnly",""],["class","margin-whitespace description",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"margin-whitespace","description"],["class","ed-rdv-session-semaine",4,"ngIf"],[1,"ed-rdv-session-semaine"],["class","card panel-creneaux",4,"ngIf"],[1,"card","panel-creneaux"],[1,"card-header","text-center"],["type","button","class","btn btn-primary btn-sm btn-toggle-creneaux btn-primary",3,"ngClass","title","click",4,"ngIf"],[1,"panel-title","text-center"],["type","button","class","btn btn-primary btn-sm btn-rdv","title","Fixer un rendez-vous",3,"click",4,"ngIf"],[1,"card-body"],[3,"creneau","session","idEleve","loaderChange",4,"ngFor","ngForOf","ngForTrackBy"],["type","button",1,"btn","btn-primary","btn-sm","btn-toggle-creneaux","btn-primary",3,"ngClass","title","click"],["aria-hidden","true",1,"fa","fa-toggle-on"],["type","button","title","Fixer un rendez-vous",1,"btn","btn-primary","btn-sm","btn-rdv",3,"click"],["aria-hidden","true",1,"icon-ed_plus","i-small"],["aria-hidden","true",1,"icon-ed_famille"],[3,"creneau","session","idEleve","loaderChange"],[1,"margin-whitespace"],["class","margin-whitespace","customClass","btn-danger",3,"idEleve","creneau","session","loaderChange",4,"ngIf"],["customClass","btn-danger",1,"margin-whitespace",3,"idEleve","creneau","session","loaderChange"],["class","text-danger margin-whitespace",4,"ngIf","ngIfElse"],["class","liste-rdv-resume",4,"ngIf"],[1,"text-danger","margin-whitespace"],[4,"ngIf"],[1,"liste-rdv-resume"],["class","item",4,"ngIf"],[1,"item"],[1,"row"],[1,"col-lg-12","clear"],["alt","photo eleve gar\xe7on","src","/assets/images/eleve-garcon.jpg","class","image-eleve d-print-none",4,"ngIf"],["alt","photo eleve fille","src","/assets/images/eleve-fille.jpg","class","image-eleve d-print-none",4,"ngIf"],["alt","photo eleve","class","image-eleve d-print-none",3,"src",4,"ngIf"],["alt","photo eleve gar\xe7on","src","/assets/images/eleve-garcon.jpg",1,"image-eleve","d-print-none"],["alt","photo eleve fille","src","/assets/images/eleve-fille.jpg",1,"image-eleve","d-print-none"],["alt","photo eleve",1,"image-eleve","d-print-none",3,"src"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,le,2,2,"ng-container",1),e.YNc(2,de,9,6,"ng-template",null,2,e.W1O),e.YNc(4,De,2,3,"ng-template",null,3,e.W1O),e.qZA()),2&t){const r=e.MAs(5);e.xp6(1),e.Q6J("ngIf",n.session.isReservable(n.authStore.currentUser.typeCompte,n.authStore.currentUser.id,n.idEleve)&&!n.session.isSpectateur)("ngIfElse",r)}},dependencies:[u.mk,u.sg,u.O5,H,o.$t3,o.d0N,o.ifA,o.VOG,D.$],styles:['@charset "UTF-8";div.ed-rdv-session div.ed-rdv-session-semaine{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;background:var(--footer-primary-color);padding:10px}div.ed-rdv-session div.ed-rdv-session-semaine>div.card{width:270px;background-color:#fff}div.ed-rdv-session div.ed-rdv-session-semaine:not(:first-child){margin:1px 0 0}div.ed-rdv-session ul.liste-rdv-resume{margin-left:4px}div.ed-rdv-session ul.liste-rdv-resume li{padding-top:10px;padding-bottom:10px}div.ed-rdv-session ul.liste-rdv-resume li:not(:last-child){border-bottom:2px solid var(--light-placeholder-color)}div.ed-rdv-session ul.liste-rdv-resume li img{float:left;height:60px;margin-right:10px}div.ed-rdv-session ul.liste-rdv-resume li h3{text-transform:none;margin-top:0;margin-bottom:10px}div.ed-rdv-session i.description{color:var(--ultradark-placeholder-color)}div.card.panel-creneaux{border:1px solid #ddd;margin:10px}div.card.panel-creneaux div.card-header{border-bottom:1px solid var(--light-primary-color);padding:10px;color:#fff;background-color:var(--light-primary-color);position:relative}div.card.panel-creneaux div.card-header h3{text-transform:capitalize;margin-top:0;margin-bottom:0}div.card.panel-creneaux div.card-header button.btn-toggle-creneaux{position:absolute;top:5px;left:5px;outline:none;background-color:transparent}div.card.panel-creneaux div.card-header button.btn-toggle-creneaux.on{color:#5cb85c}div.card.panel-creneaux div.card-header button.btn-toggle-creneaux.off{color:var(--secondary-color);transform:rotate(180deg)}div.card.panel-creneaux div.card-header button.btn-rdv{position:absolute;top:0;right:0;bottom:0}div.card.panel-creneaux div.card-body{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;padding:10px}div.card.panel-creneaux div.card-body button{position:relative;margin:5px;border-style:solid;border-width:1px;width:100px}div.card.panel-creneaux div.card-body button.btn-success{background-color:#5cb85c;border-color:#4cae4c}div.card.panel-creneaux div.card-body button.btn-secondary{background-color:var(--light-placeholder-color);border-color:var(--smalldark-placeholder-color);color:var(--dark-placeholder-color)}div.card.panel-creneaux div.card-body button.btn-danger,div.card.panel-creneaux div.card-body button.btn-danger:hover{background:var(--secondary-color);border:none}div.card.panel-creneaux div.card-body button.btn-primary{background-color:var(--light-primary-color);border-color:var(--light-primary-color);color:#fff}div.card.panel-creneaux div.card-body button i.icon-ed_famille{position:absolute;top:-4px;left:33%}div.card.panel-creneaux div.card-body button i.icon-ed_famille:before{opacity:.3;font-size:35px}div.card.panel-creneaux.day-disabled{border-color:var(--light-placeholder-color)}div.card.panel-creneaux.day-disabled div.card-header{border-bottom-color:var(--light-placeholder-color);background-color:var(--light-placeholder-color);color:var(--dark-placeholder-color)}div.card.panel-creneaux.day-disabled div.card-body button{background-color:var(--light-placeholder-color);border-color:var(--light-placeholder-color);color:var(--dark-placeholder-color);cursor:default}\n'],encapsulation:2,changeDetection:0}),i})()},39499:(S,h,a)=>{a.d(h,{Y:()=>v});var e=a(99658),o=a(94650);let v=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[e.m]}),l})()},54244:(S,h,a)=>{a.d(h,{n:()=>v});var e=a(54482),o=a(25403);function v(l){return(0,e.e)((g,p)=>{let _=!1,m=0;g.subscribe((0,o.x)(p,u=>(_||(_=!l(u,m++)))&&p.next(u)))})}}}]);