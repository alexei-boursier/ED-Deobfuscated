"use strict";(self.webpackChunked_web=self.webpackChunked_web||[]).push([[6035],{86035:(g,d,n)=>{n.r(d),n.d(d,{NotesModule:()=>y});var i=n(99658),r=n(95715),s=n(45007),u=n(18505),c=n(82722),o=n(94650),p=n(19277);const m=[{path:"",component:(()=>{class e extends((0,s.kCV)()){constructor(t,l,E){super(),this.authStore=t,this.badgesStore=l,this.route=E}ngOnInit(){this.route.paramMap.pipe((0,u.b)(t=>{this.idEleve=+t.get("idUser"),this.typeEntity=t.get("typeEntity")?.toString()}),(0,c.R)(this.componentDestroyed$)).subscribe(),this.clearBadge()}clearBadge(){if(!this.authStore.isEleve())return;const t=this.badgesStore.cloneDeep();t.getBadgeFromModule(s.qzA.NOTES,this.authStore.currentUser.id,s.dcH.ELEVE)>0&&(t.updateBadgeForModule(0,s.qzA.NOTES,this.authStore.currentUser.id,s.dcH.ELEVE),this.badgesStore.store=t,this.badgesStore.setStorage(t).catch(l=>console.error("EleveNoteLazyTemplateComponent.clearBadge badgesStore.setStorage : ",l)))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.CnD),o.Y36(s.et7),o.Y36(r.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ed-eleve-note-lazy-template"]],features:[o.qOj],decls:1,vars:2,consts:[[3,"idEleve","typeEntity"]],template:function(t,l){1&t&&o._UZ(0,"ed-eleve-notes-template",0),2&t&&o.Q6J("idEleve",l.idEleve)("typeEntity",l.typeEntity)},dependencies:[p.k]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.Bz.forChild(m),r.Bz]}),e})();var v=n(98355);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[i.m,h,v.o]}),e})()}}]);