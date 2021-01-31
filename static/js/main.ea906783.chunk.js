(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{12:function(t,e,a){t.exports={table:"SortedCountries_table__8zfiO",tdCenter:"SortedCountries_tdCenter__2mfOV",tdName:"SortedCountries_tdName__3DFZ6",tdNumber:"SortedCountries_tdNumber__3WNo_",tdCases:"SortedCountries_tdCases__3pxQI",tdDeaths:"SortedCountries_tdDeaths__3FekR",tdMillions:"SortedCountries_tdMillions__PpevR"}},22:function(t,e,a){t.exports={btnGroup:"SortButtons_btnGroup__9sM8U",button:"SortButtons_button__1Hg7m"}},23:function(t,e,a){t.exports={countryCard:"CountriesListWithData_countryCard__2ehkD",cards:"CountriesListWithData_cards__2cOsX",textCard:"CountriesListWithData_textCard__3nsn_",link:"CountriesListWithData_link__2t9JJ"}},24:function(t,e,a){t.exports={pageStructure:"MainPage_pageStructure__NDVAq",footer:"MainPage_footer__AnEoP",content:"MainPage_content__3sBWv",header:"MainPage_header__29F_0"}},28:function(t,e,a){t.exports={buttonSort:"CountryButtons_buttonSort__3mEC-",buttonDefault:"CountryButtons_buttonDefault__dxtGP"}},34:function(t,e,a){t.exports={footer:"Footer_footer__1w0lV",footerText:"Footer_footerText__2uHpc"}},35:function(t,e,a){t.exports={center:"Pagination_center__2sFCf",pagination:"Pagination_pagination__1vutr",act:"Pagination_act__BqceK"}},4:function(t,e,a){t.exports={table:"Country_table__2XPdt",tdBold:"Country_tdBold__3PZQo",tdLeft:"Country_tdLeft__3jXAR",buttonSort:"Country_buttonSort__2ytl8",buttonDefault:"Country_buttonDefault__1o9cl"}},47:function(t,e,a){},48:function(t,e,a){t.exports={navbar:"NavBar_navbar__3Fl2e"}},49:function(t,e,a){t.exports={header:"Header_header__1VCKf"}},7:function(t,e,a){t.exports={structure:"Sort_structure__3DaB9",table:"Sort_table__se2ax",tdCenter:"Sort_tdCenter__i2dE-",tdName:"Sort_tdName__1inz6",tdNumber:"Sort_tdNumber__1sgqI",tdCases:"Sort_tdCases__3jkjt",tdDeaths:"Sort_tdDeaths__1OCL0",tdMillions:"Sort_tdMillions__eczeu",center:"Sort_center__1KXsy"}},79:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(1),s=a.n(n),r=a(25),o=a.n(r),i=a(13),d=a(21),l=a(14),u=(a(59),a(46)),j=a(16),b=a(15),h=a(18),O=a.n(h),_="GET_COUNTRIES",x=["Bangladesh","Brazil","China","India","Indonesia","Mexico","Nigeria","Pakistan","Russia","US"],f={countries:[]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:var a=e.countries,c=Object.keys(a).reduce((function(t,e){var c=a[e].All,n=c.deaths,s=c.confirmed,r=c.population;return x.includes(e)?[].concat(Object(b.a)(t),[{name:e,deaths:n,cases:s,population:r}]):t}),[]);return Object(j.a)(Object(j.a)({},t),{},{countries:c});default:return t}},p=function(){return Object(l.combineReducers)({countriesListReducer:m})},v=[u.a],C=(0,l.compose)(l.applyMiddleware.apply(void 0,v)),N=Object(l.createStore)(p(),{},C),g=a(3),S=a(5),y=a(47),D=a.n(y),P=[{Bangladesh:"bd"},{Brazil:"br"},{China:"cn"},{India:"in"},{Indonesia:"id"},{Mexico:"mx"},{Nigeria:"ng"},{Pakistan:"pk"},{Russia:"ru"},{US:"us"}],B=function(t){var e=Object(n.useState)(),a=Object(S.a)(e,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){P.forEach((function(e){Object.keys(e)[0]===t.id&&r(Object.values(e)[0])}))}),[]),s?Object(c.jsx)("img",{className:D.a,alt:"",src:"https://flagcdn.com/256x192/".concat(s,".png")}):"Loading..."},k=a(4),M=a.n(k),L=a(28),I=a.n(L);var R=function(t){var e=t.setCovDetRation,a=t.setPopCovRation,n=t.confirmed,s=t.deaths,r=t.population;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:I.a.buttonSort,type:"button",onClick:function(){e(Math.round(n/s))},children:"COVID/death"}),Object(c.jsx)("button",{className:I.a.buttonSort,type:"button",onClick:function(){a(Math.round(r/n))},children:"Popualtion/COVID"}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:I.a.buttonDefault,type:"button",onClick:function(){a(),e()},children:"Discharge"})})]})},A=function(){var t=Object(g.f)().id,e=Object(n.useState)(),a=Object(S.a)(e,2),s=a[0],r=a[1],o=Object(n.useState)(),i=Object(S.a)(o,2),d=i[0],l=i[1],u=Object(n.useState)(),j=Object(S.a)(u,2),b=j[0],h=j[1];return Object(n.useEffect)((function(){O.a.get("https://covid-api.mmediagroup.fr/v1/cases").then((function(t){r(t.data)}))}),[]),s?Object(c.jsx)("div",{children:Object.values(s).map((function(e,a){if(t===e.All.country)return Object(c.jsxs)("div",{children:[Object(c.jsx)(B,{id:t}),Object(c.jsx)("table",{className:M.a.table,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Name"}),Object(c.jsx)("td",{className:M.a.tdBold,children:e.All.country})]}),Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Total cases of COVID:"}),Object(c.jsx)("td",{className:M.a.tdBold,children:e.All.confirmed})]}),Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Total deaths:"}),Object(c.jsx)("td",{className:M.a.tdBold,children:e.All.deaths})]}),Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Population:"}),Object(c.jsx)("td",{className:M.a.tdBold,children:e.All.population})]}),Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Covid to death"}),Object(c.jsx)("td",{className:M.a.tdBold,children:d})]}),Object(c.jsxs)("tr",{className:M.a.tr,children:[Object(c.jsx)("td",{className:M.a.tdLeft,children:"Population to COVID"}),Object(c.jsx)("td",{className:M.a.tdBold,children:b})]})]})}),Object(c.jsx)(R,{setPopCovRation:h,setCovDetRation:l,confirmed:e.All.confirmed,deaths:e.All.deaths,population:e.All.population})]},a)}))}):"Loading..."},E=a(48),V=a.n(E);var W=function(){return Object(c.jsxs)("div",{className:V.a.navbar,children:[Object(c.jsx)(i.b,{to:"/",children:"Countries List"}),Object(c.jsx)(i.b,{to:"/sort",children:"Sort"})]})},F=a(49),T=a.n(F);var z=function(){return Object(c.jsx)("div",{className:T.a.header,children:Object(c.jsx)(W,{})})},w=a(22),G=a.n(w);var U=function(t){var e=t.countries,a=t.setCountries,n=t.setColor;return Object(c.jsxs)("div",{className:G.a.btnGroup,children:[Object(c.jsx)("button",{className:G.a.button,onClick:function(){return function(){var t=e.sort((function(t,e){return e.cases-t.cases}));a(Object(b.a)(t)),n("cases")}()},children:"COVID sort"}),Object(c.jsx)("button",{className:G.a.button,onClick:function(){return function(){var t=e.sort((function(t,e){return e.deaths-t.deaths}));a(Object(b.a)(t)),n("deaths")}()},children:"Deaths sort"}),Object(c.jsx)("button",{className:G.a.button,onClick:function(){return function(){var t=e.sort((function(t,e){return e.population-t.population}));a(Object(b.a)(t)),n("population")}()},children:"Mln. sort"})]})},J=a(12),K=a.n(J),X=function(t){var e=t.countries,a=t.color;return e?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:K.a.table,children:e.map((function(t,e){return Object(c.jsx)("table",{className:K.a,children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"".concat(K.a.tdName," ").concat(K.a.tdCenter),style:{fontWeight:"bold",color:"#36485a"},children:t.name}),Object(c.jsx)("td",{className:"".concat(K.a.tdNumber," ").concat(K.a.tdCenter),children:e+1}),Object(c.jsx)("td",{className:"".concat(K.a.tdCases),style:"cases"===a?{fontWeight:"bold",color:"#36485a"}:{},children:t.cases}),Object(c.jsx)("td",{className:K.a.tdDeaths,style:"deaths"===a?{fontWeight:"bold",color:"#36485a"}:{},children:t.deaths}),Object(c.jsx)("td",{className:K.a.tdMillions,style:"population"===a?{fontWeight:"bold",color:"#36485a"}:{},children:"".concat(Math.round(t.population/1e6))})]})})},t.name)}))})}):"Loading..."},q=a(7),H=a.n(q),Q=["Bangladesh","Brazil","China","India","Indonesia","Mexico","Nigeria","Pakistan","Russia","US"];var Z=function(){var t=Object(n.useState)(),e=Object(S.a)(t,2),a=e[0],s=e[1],r=Object(n.useState)("red"),o=Object(S.a)(r,2),i=o[0],d=o[1];return Object(n.useEffect)((function(){O.a.get("https://covid-api.mmediagroup.fr/v1/cases").then((function(t){var e=t.data,a=Object.keys(e).reduce((function(t,a){var c=e[a].All,n=c.deaths,s=c.confirmed,r=c.population;return Q.includes(a)?[].concat(Object(b.a)(t),[{name:a,deaths:n,cases:s,population:r}]):t}),[]);s(a)}))}),[]),Object(c.jsxs)("div",{className:"".concat(H.a.structure," ").concat(H.a.center),children:[Object(c.jsxs)("div",{className:H.a.table,children:[Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"".concat(H.a.tdCenter," ").concat(H.a.tdName),children:"Country"}),Object(c.jsx)("td",{className:"".concat(H.a.tdCenter," ").concat(H.a.tdNumber),children:"#"}),Object(c.jsx)("td",{className:"".concat(H.a.tdCenter," ").concat(H.a.tdCases),children:"COVID"}),Object(c.jsx)("td",{className:"".concat(H.a.tdCenter," ").concat(H.a.tdDeaths),children:"Deaths"}),Object(c.jsx)("td",{className:"".concat(H.a.tdCenter," ").concat(H.a.tdMillions),children:"Mln."})]})})}),Object(c.jsx)(X,{countries:a,color:i})]}),Object(c.jsx)("div",{children:Object(c.jsx)(U,{countries:a,setCountries:s,setColor:d,color:i})})]})},Y=a(34),$=a.n(Y);var tt=function(){return Object(c.jsx)("div",{className:$.a.footer,children:Object(c.jsx)("div",{className:$.a.footerText,children:'All rights belong to "Roga and Kopity" \xa9 Copyright 2021 '})})},et=a(23),at=a.n(et),ct=function(t){var e=t.countries;return t.loading?Object(c.jsx)("h2",{children:"Loading..."}):Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:at.a.cards,children:e.map((function(t){return Object(c.jsx)(i.b,{to:"/".concat(t.name),className:at.a.link,children:Object(c.jsx)("div",{className:at.a.countryCard,children:Object(c.jsx)("div",{className:at.a.textCard,children:t.name})})},t.name)}))})})},nt=a(35),st=a.n(nt),rt=function(t){for(var e=t.countriesPerPage,a=t.totalCountries,s=t.paginate,r=Object(n.useState)(),o=Object(S.a)(r,2),i=o[0],d=o[1],l=[],u=1;u<=Math.ceil(a/e);u+=1)l.push(u);return Object(c.jsx)("div",{className:st.a.center,children:Object(c.jsx)("div",{className:st.a.pagination,children:l.map((function(t,e){return Object(c.jsx)("a",{onClick:function(){s(t),d(t)},href:"#",className:"".concat(t===i?"act":""),children:t},t)}))})})};var ot=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.countriesListReducer.countries})),a=Object(n.useState)(1),s=Object(S.a)(a,2),r=s[0],o=s[1],i=Object(n.useState)(4),l=Object(S.a)(i,2),u=l[0],j=(l[1],Object(n.useState)(!1)),b=Object(S.a)(j,2),h=(b[0],b[1]);Object(n.useEffect)((function(){t((function(t){O.a.get("https://covid-api.mmediagroup.fr/v1/cases").then((function(e){t({type:_,countries:e.data})}))})),h(!0)}),[]);var x=r*u,f=x-u,m=e.slice(f,x);return Object(c.jsxs)("div",{children:[Object(c.jsx)(ct,{countries:m}),Object(c.jsx)(rt,{countriesPerPage:u,totalCountries:e.length,paginate:function(t){return o(t)}})]})},it=a(24),dt=a.n(it),lt=function(){return Object(c.jsxs)("div",{className:dt.a.pageStructure,children:[Object(c.jsx)("div",{className:dt.a.header,children:Object(c.jsx)(z,{})}),Object(c.jsx)("div",{className:dt.a.content,children:Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{path:"/covid/",children:Object(c.jsx)(ot,{})}),Object(c.jsx)(g.a,{exact:!0,path:"/sort",children:Object(c.jsx)(Z,{})}),Object(c.jsx)(g.a,{path:"/:id",children:Object(c.jsx)(A,{})}),Object(c.jsx)(g.a,{path:"/",children:Object(c.jsx)(ot,{})})]})}),Object(c.jsx)("div",{className:dt.a.footer,children:Object(c.jsx)(tt,{})})]})};var ut=function(){return Object(c.jsx)(d.a,{store:N,children:Object(c.jsx)(lt,{})})};o.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ut,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.ea906783.chunk.js.map