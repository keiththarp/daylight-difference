(this["webpackJsonpdaylight-difference"]=this["webpackJsonpdaylight-difference"]||[]).push([[0],{19:function(e,t,c){},38:function(e,t,c){"use strict";t.a=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))}},39:function(e,t,c){"use strict";var n=c(0),a=c(1),i=c(11),s=c(3);c(19);function r(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"daylight-header",children:Object(n.jsx)("h1",{children:"Daylight Difference Determiner"})}),Object(n.jsx)("h4",{className:"mt-2 mb-3 text-light",children:"Calculate the difference in daylight time between two locations."})]})}var l=c(22),o=c(25);function j(){return Object(n.jsxs)("div",{className:"d-flex mx-4 justify-content-around",children:[Object(n.jsx)("div",{className:"text-light",children:"Daylight Difference Determiner"}),Object(n.jsx)("div",{children:Object(n.jsx)(i.b,{to:"/",children:Object(n.jsx)(l.a,{className:"text-light",icon:o.a})})}),Object(n.jsx)("div",{children:Object(n.jsx)(i.b,{to:"/about",children:Object(n.jsx)(l.a,{className:"text-light",icon:o.b})})})]})}var d=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(r,{}),Object(n.jsxs)("div",{className:"about-screen",children:[Object(n.jsx)("p",{children:"I built this app the winter of 2020/21 while hiding from COVID-19, tucked away in a quiet house in the woods near Acadia National Park. The super short winter days had me wondering how much sunlight we were missing out on compared to friends and family several hours to the south of us."}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h4",{children:"Technologies:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"BootStrap"}),Object(n.jsx)("li",{children:"TypeScript"}),Object(n.jsx)("li",{children:"Axios"}),Object(n.jsx)("li",{children:"Luxon"})]})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h4",{children:"APIs:"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("a",{href:"https://opencagedata.com/api",children:"OpenCage Geocoding"})," used to populate the location search and Lat/Long data."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("a",{href:"https://sunrise-sunset.org/api",children:"Sunrise Sunset API"})," Provides sunrise/set times, but conveniently enough also provides day length data, eliminating a math step."]})]})]})]}),Object(n.jsx)(j,{})]})},h=c(13),b=c(9),u=c(26),O=c.n(u);var x=function(e){var t=Object(a.useState)(0),c=Object(b.a)(t,2),i=c[0],s=c[1],r=Object(a.useState)([]),l=Object(b.a)(r,2),o=l[0],j=l[1],d=Object(a.useState)(""),h=Object(b.a)(d,2),u=h[0],x=h[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),g=f[0],y=f[1],p=Object(a.useState)(""),v=Object(b.a)(p,2),N=v[0],S=v[1],D=/,(.*)/,w=function(t,c,n){S(n.replace(D,"")),function(e,t,c){var n="https://api.sunrise-sunset.org/json?lat=".concat(e,"&lng=").concat(t,"&date=").concat(c);return O.a.get(n)}(t,c,e.date).then((function(t){s(t.data.results.day_length),j([]),e.displayData(e.cityNumber,t.data.results.day_length,n.replace(D,"")),console.log(t.data)}))};return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"about-screen",children:[Object(n.jsx)("input",{className:"city-search-input m-3",onChange:function(e){x(e.currentTarget.value),y(e.currentTarget.value.toLowerCase())},value:u,placeholder:"Search Location"}),Object(n.jsx)("button",{onClick:function(){(function(e){var t="https://api.opencagedata.com/geocode/v1/json?q=".concat(e,"&key=").concat("eb47c1b37c7f4b77b7dc729f0915b698");return O.a.get(t)})(g).then((function(e){j(e.data.results),s(0),console.log(e)}))},children:"Search"}),o.length>0?Object(n.jsx)("div",{className:"row justify-content-center mt-2",children:Object(n.jsxs)("div",{className:"col-auto border border-secondary bg-light",children:[Object(n.jsx)("h4",{className:"mt-2",children:"Choose the correct location"}),Object(n.jsx)("ul",{className:"city-list",children:o.map((function(e,t){return Object(n.jsxs)("li",{children:[Object(n.jsx)("button",{onClick:function(){w(e.geometry.lat,e.geometry.lng,e.formatted)},className:"city-option-button",children:"+"}),e.formatted]},t)}))})]})}):null,Object(n.jsx)("div",{children:0!==i&&Object(n.jsxs)("div",{children:[N," has ",Object(n.jsx)("span",{className:"day-length",children:i})," of daylight."]})})]})})},m=c(16),f=m.DateTime.local().toFormat("yyyy-MM-dd");var g=function(){var e=Object(a.useState)(f),t=Object(b.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)({city1:"",daylight1:0,city2:"",daylight2:0}),l=Object(b.a)(s,2),o=l[0],d=l[1],u=o.city1,O=o.daylight1,g=o.city2,y=o.daylight2,p=function(e,t,c){d(1===e?Object(h.a)(Object(h.a)({},o),{},{city1:c,daylight1:t}):Object(h.a)(Object(h.a)({},o),{},{city2:c,daylight2:t}))},v=function(){var e=O.toString(),t=y.toString(),c=m.DateTime.fromISO(e),a=m.DateTime.fromISO(t);if(O>y){var i=c.diff(a,["hours","minutes","seconds"]).toFormat("hh:mm:ss");return Object(n.jsxs)("div",{children:[u," has ",i," more daylight than ",g,"."]})}var s=a.diff(c,["hours","minutes","seconds"]).toFormat("hh:mm:ss");return Object(n.jsxs)("div",{children:[g," has ",s," more daylight than ",u,"."]})};return Object(a.useEffect)((function(){O&&y&&v()}),[O,y,o]),Object(n.jsxs)("div",{className:"daylight-body",children:[Object(n.jsx)(r,{}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{children:["Enter a date (yyyy-mm-dd) ",Object(n.jsx)("input",{className:"city-search-input mb-4",onChange:function(e){i(e.currentTarget.value)},value:c,placeholder:"YYYY-MM-DD"})]})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"City name for location 1"}),Object(n.jsx)(x,{displayData:p,cityNumber:1,date:c})]}),Object(n.jsxs)("div",{className:"mt-4",children:[Object(n.jsx)("h3",{children:"City name for location 2"}),Object(n.jsx)(x,{displayData:p,cityNumber:2,date:c})]}),O&&y?Object(n.jsx)("div",{className:"py-3 bg-light",children:Object(n.jsx)(v,{})}):null,Object(n.jsx)(j,{})]})};c(72);t.a=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(i.a,{basename:"/daylight-difference",children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{path:"/",exact:!0,component:g}),Object(n.jsx)(s.a,{path:"/about",exact:!0,component:d})]})})})}},40:function(e,t,c){"use strict";c.r(t),function(e){var t=c(0),n=c(1),a=c.n(n),i=c(36),s=c.n(i),r=(c(46),c(47),c(48),c(39)),l=c(38),o=c(20),j=c(21);j.config({path:Object(o.resolve)(e,"../.env"),debug:!0}),c(21).config(),s.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(r.a,{})}),document.getElementById("root")),Object(l.a)()}.call(this,"/")},48:function(e,t,c){},72:function(e,t,c){}},[[40,1,2]]]);
//# sourceMappingURL=main.3390d0ba.chunk.js.map