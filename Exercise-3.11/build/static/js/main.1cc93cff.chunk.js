(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),u=t.n(r),a=(t(20),t(6)),i=t(3),o=(t(21),t(4)),s=t.n(o),l=t(0),d=function(e){var n=e.newFilter,t=e.filterChange;return Object(l.jsxs)("div",{children:["filter through name ",Object(l.jsx)("input",{value:n,onChange:t})]})},j=function(e){var n=e.newName,t=e.numberChange,c=e.newNumber,r=e.nameChange,u=e.addname;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:u,children:[Object(l.jsxs)("div",{children:["Name: ",Object(l.jsx)("input",{type:"text",value:n,onChange:r,required:!0})]}),Object(l.jsxs)("div",{children:["Number: ",Object(l.jsx)("input",{value:c,onChange:t,required:!0})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})})},b=function(e){var n=e.persons,t=e.newFilter,c=e.removePerson;return Object(l.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(l.jsxs)("p",{children:[e.name," ",e.number," ",Object(l.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"Delete"})]},e.name)}))})},f="/api/persons",h=function(){return s.a.get(f).then((function(e){return e.data}))},m=function(e){return s.a.post(f,e).then((function(e){return e.data}))},O=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.errormessage;return null===n&&null===t?Object(l.jsx)(l.Fragment,{}):null===t?Object(l.jsx)("div",{className:"msg",children:n}):null===n?Object(l.jsx)("div",{className:"errormsg",children:t}):void 0},x=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),s=o[0],f=o[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),w=p[0],C=p[1],F=Object(c.useState)(""),N=Object(i.a)(F,2),y=N[0],S=N[1],k=Object(c.useState)(null),T=Object(i.a)(k,2),D=T[0],P=T[1],L=Object(c.useState)(null),q=Object(i.a)(L,2),B=q[0],E=q[1];Object(c.useEffect)((function(){h().then(r)}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(v,{message:D,errormessage:B}),Object(l.jsx)(d,{newFilter:y,filterChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(l.jsx)("h3",{children:"Add"}),Object(l.jsx)(j,{newName:s,nameChange:function(e){console.log(e.target.value),f(e.target.value)},newNumber:w,numberChange:function(e){console.log(e.target.value),C(e.target.value)},addname:function(e){if(e.preventDefault(),t.find((function(e){return e.name===s}))){if(window.confirm(s+" already exists in the phonebook, Do you want to replace the phone number ?")){var n=t.find((function(e){return e.name===s})),c=Object(a.a)(Object(a.a)({},n),{},{number:w});g(c.id,c).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e}))),P(" ".concat(s,"'s number modified sucessfully")),setTimeout((function(){P(null)}),3e3),f(""),C("")})).catch((function(e){E("".concat(s," data is  deleted from the server")),setTimeout((function(){E(null)}),3e3),r(t.filter((function(e){return e.id!==c.id})))}))}}else m({name:s,number:w}).then((function(e){r(t.concat(e)),P(" ".concat(s," data successfully added")),setTimeout((function(){P(null)}),3e3)})),f(""),C("")}}),Object(l.jsx)("h3",{children:"Numbers"}),Object(l.jsx)(b,{persons:t,newFilter:y,removePerson:function(e,n){window.confirm("Delete "+n+"?")&&O(e).then((function(){r(t.filter((function(n){return n.id!==e}))),P(" ".concat(n," data successfully deleted")),setTimeout((function(){P(null)}),3e3)}))}})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),u(e),a(e)}))};u.a.render(Object(l.jsx)(x,{}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.1cc93cff.chunk.js.map