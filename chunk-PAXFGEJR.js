import{a as j,b as de,c as ue,d as Se,e as ve,f as xe,g as ye,h as Le,i as De}from"./chunk-FVNPA4ZG.js";import{a as be,b as Re,c as Ee,e as Te,f as Ie,h as Ve,j as ke,l as Fe,m as y}from"./chunk-YVYEINFY.js";import{$ as E,Ca as Pe,D as ae,Da as G,E as k,Ea as B,G as S,H as s,Ha as x,Ia as W,Ja as N,K as d,Ka as O,O as u,R as g,T as f,U as he,V as _e,W as F,X as M,Y as r,Z as o,_ as R,a as q,aa as h,b as fe,ba as m,c as ge,ca as i,da as v,ea as _,fa as we,h as U,ja as re,ka as pe,la as se,m as I,na as Ce,o as V,oa as le,pa as ce,r as b,u as c,ua as A,xa as me,y as C,z as P}from"./chunk-CXYLFGD3.js";var H=class t{http=c(B);baseUrl="https://swapi.dev/api/planets/";getPlanetsList(n){let e=n||this.baseUrl;return this.http.get(e).pipe(U(a=>({results:ye(a),next:a.next,previous:a.previous})))}getPlanet(n){return this.http.get(`${this.baseUrl}${n}/`).pipe(U(e=>xe(e)))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var He=t=>["/star-war/planets/",t],$e=(t,n)=>n.url;function Ue(t,n){t&1&&(r(0,"p"),i(1,"Loading planets..."),o())}function Ae(t,n){if(t&1&&(r(0,"div",3)(1,"a",4)(2,"h3"),i(3),o()()()),t&2){let e=n.$implicit,a=n.$index;s(),g("routerLink",Ce(2,He,a+1)),s(2),v(e.name)}}var X=class t{planetsService=c(H);planets=S([]);nextUrl=S(null);previousUrl=S(null);ngOnInit(){this.loadPlanets()}loadPlanets(n){this.planetsService.getPlanetsList(n).subscribe({next:e=>{this.planets.set(e.results),this.nextUrl.set(e.next),this.previousUrl.set(e.previous)},error:e=>console.error("Error fetching planets:",e)})}goToNextPage(){let n=this.nextUrl();n&&this.loadPlanets(n)}goToPreviousPage(){let n=this.previousUrl();n&&this.loadPlanets(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-planet-list"]],decls:11,vars:3,consts:[[1,"planets-list"],[1,"pagination"],[3,"click","disabled"],[1,"planet-item"],[3,"routerLink"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"h2"),i(2,"Planets List"),o(),r(3,"div",1)(4,"button",2),h("click",function(){return a.goToPreviousPage()}),i(5," Previous "),o(),r(6,"button",2),h("click",function(){return a.goToNextPage()}),i(7,"Next"),o()(),u(8,Ue,2,0,"p"),F(9,Ae,4,4,"div",3,$e),o()),e&2&&(s(4),g("disabled",!a.previousUrl()),s(2),g("disabled",!a.nextUrl()),s(2),f(a.planets().length===0?8:-1),s(),M(a.planets()))},dependencies:[G,O],styles:[".planets-list[_ngcontent-%COMP%]{padding:20px}.planet-item[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;margin:10px 0}.pagination[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{padding:5px 10px;margin:0 5px}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}"],changeDetection:0})};function qe(t,n){t&1&&(r(0,"p"),i(1,"Loading planet details..."),o())}function Ge(t,n){if(t&1&&(r(0,"h2"),i(1),o(),r(2,"p"),i(3),o(),r(4,"p"),i(5),o(),r(6,"p"),i(7),o(),r(8,"p"),i(9),o(),r(10,"p"),i(11),o(),r(12,"p"),i(13),o(),r(14,"p"),i(15),o(),r(16,"p"),i(17),o()),t&2){let e=m();s(),v(e.planet().name),s(2),_("Rotation Period: ",e.planet().rotation_period," hours"),s(2),_("Orbital Period: ",e.planet().orbital_period," days"),s(2),_("Diameter: ",e.planet().diameter," km"),s(2),_("Climate: ",e.planet().climate,""),s(2),_("Gravity: ",e.planet().gravity,""),s(2),_("Terrain: ",e.planet().terrain,""),s(2),_("Surface Water: ",e.planet().surface_water,"%"),s(2),_("Population: ",e.planet().population,"")}}var Y=class t{route=c(x);planetsService=c(H);planet=S(void 0);ngOnInit(){let n=this.route.snapshot.paramMap.get("id");n&&this.planetsService.getPlanet(+n).subscribe({next:e=>this.planet.set(e),error:e=>console.error("Error fetching planet:",e)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-planet-view"]],decls:3,vars:1,consts:[[1,"planet-view"]],template:function(e,a){e&1&&(r(0,"div",0),u(1,qe,2,0,"p")(2,Ge,18,9),o()),e&2&&(s(),f(a.planet()?2:1))},encapsulation:2,changeDetection:0})};function Be(t,n){t&1&&i(0,`
Loading...
`)}function We(t,n){if(t&1){let e=E();r(0,"button",3),h("click",function(){let p=C(e).$implicit,l=m(3);return P(l.itemSelect.emit(p.id))}),i(1),o()}if(t&2){let e=n.$implicit;s(),we("",e.name," ",e.id," ")}}function Xe(t,n){if(t&1&&(r(0,"div",5),F(1,We,2,2,"button",6,_e),o()),t&2){let e=m(2);s(),M(e.parsedData().results)}}function Ye(t,n){t&1&&i(0,`
Not Found !!!
`)}function ze(t,n){if(t&1&&u(0,Xe,3,0,"div",5)(1,Ye,1,0),t&2){let e=m();f(e.parsedData().results.length>0?0:1)}}var T=class t{data=k.required();isLoading=k(!1);searchData=k.required();searchDataChange=ae();itemSelect=ae();parsedData=A(()=>ve(this.data()));fb=c(ke).nonNullable;formGroup=A(()=>this.fb.group({search:this.fb.control(this.searchData().search??"",{updateOn:"submit"})}));onSubmit(){this.searchDataChange.emit(this.formGroup().getRawValue())}onPage(n){n&&this.searchDataChange.emit(Object.fromEntries(n.searchParams))}clear(){this.searchDataChange.emit({})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-people-list"]],inputs:{data:[1,"data"],isLoading:[1,"isLoading"],searchData:[1,"searchData"]},outputs:{searchDataChange:"searchDataChange",itemSelect:"itemSelect"},decls:14,vars:4,consts:[[3,"ngSubmit","formGroup"],["for",""],["type","text","formControlName","search"],["type","button",3,"click"],["type","button",3,"click","disabled"],[1,"-cmp-resource-list"],["type","button"]],template:function(e,a){e&1&&(r(0,"form",0),h("ngSubmit",function(){return a.onSubmit()}),r(1,"label",1)(2,"b"),i(3,"Search"),o(),R(4,"input",2),o(),r(5,"button",3),h("click",function(){return a.clear()}),i(6,"X"),o()(),r(7,"div")(8,"button",4),h("click",function(){return a.onPage(a.parsedData().previous)}),i(9,"previous"),o(),r(10,"button",4),h("click",function(){return a.onPage(a.parsedData().next)}),i(11,"next"),o()(),u(12,Be,1,0)(13,ze,2,1)),e&2&&(g("formGroup",a.formGroup()),s(8),g("disabled",!a.parsedData().previous),s(2),g("disabled",!a.parsedData().next),s(2),f(a.isLoading()?12:13))},dependencies:[Fe,Te,be,Re,Ee,Ie,Ve],styles:[".-cmp-resource-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],changeDetection:0})};var Me=`${j}/people/`,z=class t{async getAll(n){let e=new URL(Me);typeof n<"u"&&Object.entries(n).filter(([,l])=>!!l).forEach(([l,L])=>e.searchParams.set(l,L));let a=await fetch(e),p=await a.json();if(a.ok)return p;throw new Error("HTTP ERROR",{cause:p})}async get(n){let e=new URL(n,Me),a=await fetch(e),p=await a.json();if(a.ok)return p;throw new Error("HTTP ERROR",{cause:p})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function Je(t,n){if(t&1){let e=E();r(0,"app-sw-people-list",1),h("searchDataChange",function(p){C(e);let l=m();return P(l.search(p))})("itemSelect",function(p){C(e);let l=m();return P(l.onItemSelect(p))}),o()}if(t&2){let e=m();g("data",n)("searchData",e.searchData())("isLoading",e.isLoading())}}function Ke(t,n){t&1&&(r(0,"p"),i(1,"Loading..."),o())}var J=class t{service=c(z);activatedRoute=c(x);isLoading=S(!1);queryParams$=this.activatedRoute.queryParams;data=y(this.queryParams$.pipe(V(()=>this.isLoading.set(!0)),I(async n=>await this.service.getAll(n)),V(()=>this.isLoading.set(!1))));searchData=y(this.queryParams$,{initialValue:{}});router=c(N);search(n){this.router.navigate([],{queryParams:n,replaceUrl:!0})}onItemSelect(n){let e=n.split("/").pop();this.router.navigate(["..",e],{relativeTo:this.activatedRoute})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-people-fetch-list-page"]],decls:2,vars:1,consts:[[3,"data","searchData","isLoading"],[3,"searchDataChange","itemSelect","data","searchData","isLoading"]],template:function(e,a){if(e&1&&u(0,Je,1,3,"app-sw-people-list",0)(1,Ke,2,0,"p"),e&2){let p;f((p=a.data())?0:1,p)}},dependencies:[T],encapsulation:2,changeDetection:0})};var Ne=`${j}/people/`,$=class t{http=c(B);getAll(n){return this.http.get(Ne,{params:q({},n)})}get(n){return this.http.get(`${Ne}${n}`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function Qe(t,n){if(t&1){let e=E();r(0,"app-sw-people-list",1),h("searchDataChange",function(p){C(e);let l=m();return P(l.search(p))})("itemSelect",function(p){C(e);let l=m();return P(l.onItemSelect(p))}),o()}if(t&2){let e=m();g("data",n)("searchData",e.searchData())("isLoading",e.isLoading())}}function Ze(t,n){t&1&&(r(0,"p"),i(1,"Loading..."),o())}var K=class t{service=c($);activatedRoute=c(x);isLoading=S(!1);queryParams$=this.activatedRoute.queryParams;data=y(this.queryParams$.pipe(V(()=>this.isLoading.set(!0)),I(n=>this.service.getAll(n)),V(()=>this.isLoading.set(!1))));searchData=y(this.queryParams$,{initialValue:{}});router=c(N);search(n){this.router.navigate([],{queryParams:n,replaceUrl:!0})}onItemSelect(n){let e=n.split("/").pop();this.router.navigate(["..",e],{relativeTo:this.activatedRoute})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-people-http-client-list-page"]],decls:2,vars:1,consts:[[3,"data","searchData","isLoading"],[3,"searchDataChange","itemSelect","data","searchData","isLoading"]],template:function(e,a){if(e&1&&u(0,Qe,1,3,"app-sw-people-list",0)(1,Ze,2,0,"p"),e&2){let p;f((p=a.data())?0:1,p)}},dependencies:[T],encapsulation:2,changeDetection:0})};var Oe=`${j}/people/`,Q=class t{getAll(n){return me({request:n,loader:async({request:e,abortSignal:a})=>{let p=new URL(Oe);typeof e<"u"&&Object.entries(e).filter(([,oe])=>!!oe).forEach(([oe,je])=>p.searchParams.set(oe,je));let l=await fetch(p),L=await l.json();if(l.ok)return L;throw new Error("HTTP ERROR",{cause:L})}})}get(n){return me({request:n,loader:async({request:e,abortSignal:a})=>{let p=new URL(e,Oe),l=await fetch(p,{signal:a}),L=await l.json();if(l.ok)return L;throw new Error("HTTP ERROR",{cause:L})}})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function et(t,n){if(t&1){let e=E();r(0,"app-sw-people-list",1),h("searchDataChange",function(p){C(e);let l=m();return P(l.search(p))})("itemSelect",function(p){C(e);let l=m();return P(l.onItemSelect(p))}),o()}if(t&2){let e=m();g("data",n)("searchData",e.searchData())("isLoading",e.resource.isLoading())}}function tt(t,n){t&1&&(r(0,"p"),i(1,"Loading..."),o())}var Z=class t{service=c(Q);activatedRoute=c(x);queryParams$=this.activatedRoute.queryParams;searchData=y(this.queryParams$,{initialValue:{}});resource=this.service.getAll(this.searchData);router=c(N);search(n){this.router.navigate([],{queryParams:n,replaceUrl:!0})}onItemSelect(n){let e=n.split("/").pop();this.router.navigate(["..",e],{relativeTo:this.activatedRoute})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-people-http-resource-list-page"]],decls:2,vars:1,consts:[[3,"data","searchData","isLoading"],[3,"searchDataChange","itemSelect","data","searchData","isLoading"]],template:function(e,a){if(e&1&&u(0,et,1,3,"app-sw-people-list",0)(1,tt,2,0,"p"),e&2){let p;f((p=a.resource.value())?0:1,p)}},dependencies:[T],encapsulation:2,changeDetection:0})};var ee=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-people-page"]],decls:12,vars:0,consts:[["routerLink","fetch","routerLinkActive","app-st-active"],["routerLink","http-client","routerLinkActive","app-st-active"],["routerLink","resource-client","routerLinkActive","app-st-active"]],template:function(e,a){e&1&&(r(0,"nav")(1,"ul")(2,"li")(3,"a",0),i(4,"Fetch"),o()(),r(5,"li")(6,"a",1),i(7,"Http-client"),o()(),r(8,"li")(9,"a",2),i(10,"Resource-client"),o()()()(),R(11,"router-outlet"))},dependencies:[O,W],encapsulation:2,changeDetection:0})};function nt(t,n){t&1&&i(0," Loading.. ")}function it(t,n){t&1&&i(0," - ")}function ot(t,n){if(t&1&&i(0),t&2){m();let e=se(24);_(" ",e.name," ")}}function at(t,n){t&1&&i(0," Loadgin... ")}function rt(t,n){t&1&&i(0," - ")}function pt(t,n){if(t&1&&i(0),t&2){m();let e=se(1);_(" ",e.name," ")}}function st(t,n){if(t&1&&(r(0,"li"),re(1),u(2,at,1,0)(3,rt,1,0)(4,pt,1,1),o()),t&2){let e,a=n.$implicit;s();let p=pe(a());s(),f((e=p)===void 0?2:e===null?3:4)}}function lt(t,n){if(t&1&&(r(0,"ul"),F(1,st,5,2,"li",null,he),o()),t&2){let e=m();s(),M(e.parsedData().species)}}function ct(t,n){t&1&&i(0," -- ")}var te=class t{data=k.required();parsedData=A(()=>{let l=Se(this.data()),{homeworld:e,species:a}=l,p=ge(l,["homeworld","species"]);return fe(q({},p),{homeworld:de(e,ue),species:a.map(L=>de(L,ue))})});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-person-view"]],inputs:{data:[1,"data"]},decls:43,vars:16,template:function(e,a){if(e&1&&(r(0,"dl")(1,"dt"),i(2,"Name"),o(),r(3,"dd"),i(4),o(),r(5,"dt"),i(6,"Birth Year"),o(),r(7,"dd"),i(8),o(),r(9,"dt"),i(10,"Gender"),o(),r(11,"dd"),i(12),o(),r(13,"dt"),i(14,"Height"),o(),r(15,"dd"),i(16),o(),r(17,"dt"),i(18,"Mass"),o(),r(19,"dd"),i(20),o(),r(21,"dt"),i(22,"HomeWorld"),o(),r(23,"dd"),re(24),u(25,nt,1,0)(26,it,1,0)(27,ot,1,1),o(),r(28,"dt"),i(29,"Species"),o(),r(30,"dd"),u(31,lt,3,0,"ul")(32,ct,1,0),o()(),r(33,"dt"),i(34,"Created"),o(),r(35,"dd"),i(36),le(37,"date"),o(),r(38,"dt"),i(39,"Edited"),o(),r(40,"dd"),i(41),le(42,"date"),o()),e&2){let p;s(4),v(a.parsedData().name),s(4),v(a.parsedData().birth_year),s(4),v(a.parsedData().gender),s(4),_("",a.parsedData().height," cm."),s(4),_("",a.parsedData().mass," kg."),s(4);let l=pe(a.parsedData().homeworld());s(),f((p=l)===void 0?25:p===null?26:27),s(6),f(a.parsedData().species.length>0?31:32),s(5),v(ce(37,10,a.parsedData().created,"medium")),s(5),v(ce(42,13,a.parsedData().edited,"medium"))}},dependencies:[Pe],encapsulation:2,changeDetection:0})};function mt(t,n){t&1&&R(0,"app-sw-person-view",0),t&2&&g("data",n)}function dt(t,n){t&1&&i(0,` Loading...
`)}var ne=class t{service=c($);activatedRoute=c(x);params$=this.activatedRoute.params;data=y(this.params$.pipe(U(({id:n})=>n),I(n=>this.service.get(n))));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-person-view-page"]],decls:2,vars:1,consts:[[3,"data"]],template:function(e,a){if(e&1&&u(0,mt,1,1,"app-sw-person-view",0)(1,dt,1,0),e&2){let p;f((p=a.data())?0:1,p)}},dependencies:[te],encapsulation:2,changeDetection:0})};var ie=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-sw-page"]],decls:12,vars:0,consts:[["routerLink","people"],["routerLink","species"],["routerLink","planets"]],template:function(e,a){e&1&&(r(0,"h1"),i(1,"Star Wars Explorer"),o(),r(2,"nav")(3,"a",0),i(4,"People"),o(),i(5," | "),r(6,"a",1),i(7,"Species"),o(),i(8," | "),r(9,"a",2),i(10,"Planets"),o()(),R(11,"router-outlet"))},dependencies:[G,W,O],encapsulation:2,changeDetection:0})};var fi=[{path:"",component:ie,children:[{path:"",redirectTo:"people",pathMatch:"full"},{path:"people",component:ee,children:[{path:"",redirectTo:"fetch",pathMatch:"full"},{path:"fetch",component:J},{path:"http-client",component:K},{path:"resource-client",component:Z},{path:":id",component:ne}]},{path:"species",children:[{path:"",component:Le},{path:":id",component:De}]},{path:"planets",children:[{path:"",component:X},{path:":id",component:Y}]}]}];export{fi as default};
