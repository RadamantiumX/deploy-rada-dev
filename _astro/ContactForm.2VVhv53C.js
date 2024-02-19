import{r as l}from"./index.LFf77hJu.js";var c={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=l,h=Symbol.for("react.element"),b=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,m){var r,a={},n=null,o=null;m!==void 0&&(n=""+m),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)j.call(e,r)&&!_.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:h,type:t,key:n,ref:o,props:a,_owner:v.current}}u.Fragment=b;u.jsx=d;u.jsxs=d;c.exports=u;var s=c.exports;function N({name:t,message:e,send:m}){const[r,a]=l.useState(""),n=l.useRef(null),o=l.useRef(null),p=l.useRef(null),f=g=>{g.preventDefault();const x={email:n.current.value,name:o.current.value,message:p.current.value};fetch("http://localhost:3000/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(i=>i.json()).then(i=>{a(i.message)})};return s.jsxs("form",{className:"flex flex-col gap-y-2",onSubmit:f,children:[r.length>0&&s.jsxs("div",{className:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert",children:[s.jsx("span",{className:"font-medium",children:"Success!"})," ",r]}),s.jsx("label",{for:"email",children:"Email"}),s.jsx("input",{className:"bg-gray-600 p-1 rounded-md hover:bg-gray-500",name:"email",ref:n,type:"email",placeholder:"mail@example.com",required:!0}),s.jsx("label",{for:"name",children:t}),s.jsx("input",{className:"bg-gray-600 p-1 rounded-md hover:bg-gray-500",name:"name",ref:o,type:"text",placeholder:"John Doe",required:!0}),s.jsx("label",{for:"message",children:e}),s.jsx("textarea",{className:"bg-gray-600 p-1 rounded-md hover:bg-gray-500 resize-none focus:border-sky-500",name:"message",ref:p,id:"",cols:"30",rows:"5",required:!0}),s.jsxs("button",{type:"submit",className:"flex flex-row justify-center gap-2 rounded-full cursor-pointer text-2xl bg-green-700 mt-11 p-1 px-5 hover:bg-yellow-500 hover:scale-110 transition",children:[s.jsx("i",{className:"fa-regular fa-paper-plane"})," ",m]})]})}export{N as default};
