(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,g=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(g,c(c({ref:t},o),{},{components:n})):a.a.createElement(g,c({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(1069)),s={id:"classic-interfaces-relay-mutation-request",title:"RelayMutationRequest",original_id:"classic-interfaces-relay-mutation-request"},c={unversionedId:"classic-interfaces-relay-mutation-request",id:"version-classic/classic-interfaces-relay-mutation-request",isDocsHomePage:!1,title:"RelayMutationRequest",description:"RelayMutationRequest encapsulates a mutation that Relay needs to send to the server. They are made available to network layers via the sendMutation method.",source:"@site/versioned_docs/version-classic/Classic-Interfaces-MutationRequest.md",slug:"/classic-interfaces-relay-mutation-request",permalink:"/docs/classic/classic-interfaces-relay-mutation-request",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Interfaces-MutationRequest.md",version:"classic",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1614893206,sidebar:"version-classic/docs",previous:{title:"Relay.Store",permalink:"/docs/classic/classic-api-reference-relay-store"},next:{title:"RelayNetworkLayer",permalink:"/docs/classic/classic-interfaces-relay-network-layer"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"getQueryString",id:"getquerystring",children:[]},{value:"getVariables",id:"getvariables",children:[]},{value:"getFiles",id:"getfiles",children:[]},{value:"getID",id:"getid",children:[]},{value:"getDebugName",id:"getdebugname",children:[]}]}],o={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RelayMutationRequest")," encapsulates a mutation that Relay needs to send to the server. They are made available to network layers via the ",Object(i.b)("inlineCode",{parentName:"p"},"sendMutation")," method."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#getquerystring"},Object(i.b)("pre",null,"getQueryString()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getvariables"},Object(i.b)("pre",null,"getVariables()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getfiles"},Object(i.b)("pre",null,"getFiles()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getid"},Object(i.b)("pre",null,"getID()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getdebugname"},Object(i.b)("pre",null,"getDebugName()")))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getquerystring"},"getQueryString"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\ngetQueryString(): string\n\n")),Object(i.b)("p",null,"Gets a string representation of the GraphQL mutation."),Object(i.b)("h3",{id:"getvariables"},"getVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\ngetVariables(): {[name: string]: mixed}\n\n")),Object(i.b)("p",null,"Gets the variables used by the mutation. These variables should be serialized and send in the GraphQL request."),Object(i.b)("h3",{id:"getfiles"},"getFiles"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\ngetFiles(): ?{[key: string]: File}\n\n")),Object(i.b)("p",null,"Gets an optional map from name to File objects."),Object(i.b)("h3",{id:"getid"},"getID"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\ngetID(): string\n\n")),Object(i.b)("p",null,"Gets a unique identifier for this mutation. These identifiers are useful for assigning response payloads to their corresponding mutations when sent in a single GraphQL request."),Object(i.b)("h3",{id:"getdebugname"},"getDebugName"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\ngetDebugName(): string\n\n")),Object(i.b)("p",null,"Gets a string name used to refer to this request for printing debug output."))}u.isMDXComponent=!0}}]);