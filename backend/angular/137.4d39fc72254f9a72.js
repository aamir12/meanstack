"use strict";(self.webpackChunkmean=self.webpackChunkmean||[]).push([[137],{2137:(N,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>O});var m=a(9808),i=a(4182),c=a(4406),t=a(6435),l=a(384),g=a(9224),f=a(773),u=a(7322),d=a(7531),h=a(7423);function _(n,e){1&n&&t._UZ(0,"mat-spinner")}function v(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function S(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function Z(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1," Login "),t.qZA())}function A(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1);return t.oxw().onLogin(s)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,v,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,S,2,0,"mat-error",0),t.qZA(),t.YNc(10,Z,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),r=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",r.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}function T(n,e){1&n&&t._UZ(0,"mat-spinner")}function L(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function M(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function x(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1," Signup "),t.qZA())}function I(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1);return t.oxw().onSignup(s)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,L,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,M,2,0,"mat-error",0),t.qZA(),t.YNc(10,x,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),r=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",r.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}const b=[{path:"login",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onLogin(o){o.invalid||(this.isLoading=!0,this.authService.login(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,_,1,0,"mat-spinner",0),t.YNc(2,A,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(1),t.Q6J("ngIf",!r.isLoading))},directives:[g.a8,m.O5,f.Ou,i._Y,i.JL,i.F,u.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,u.TO,h.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onSignup(o){o.invalid||(this.isLoading=!0,this.authService.createUser(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,T,1,0,"mat-spinner",0),t.YNc(2,I,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(1),t.Q6J("ngIf",!r.isLoading))},directives:[g.a8,m.O5,f.Ou,i._Y,i.JL,i.F,u.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,u.TO,h.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),n})();var J=a(4872);let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,J.q,i.u5,y]]}),n})()}}]);