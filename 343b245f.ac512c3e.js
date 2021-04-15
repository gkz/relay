(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(y,c(c({ref:t},p),{},{components:n})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},332:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1142)),i={id:"relay-compat",title:"Compatibility Mode",original_id:"relay-compat"},c={unversionedId:"relay-compat",id:"version-v10.0.1/relay-compat",isDocsHomePage:!1,title:"Compatibility Mode",description:"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from",source:"@site/versioned_docs/version-v10.0.1/Modern-RelayCompat.md",slug:"/relay-compat",permalink:"/docs/v10.0.1/relay-compat",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.0.1/Modern-RelayCompat.md",version:"v10.0.1",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618495548},l=[{value:"API and Runtime",id:"api-and-runtime",children:[]},{value:"Getting started",id:"getting-started",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from\nscratch. Instead, convert one component at a time to the Relay Modern API while\ncontinuing to have a working app. Once all components have been converted, the\nsmaller and faster Relay Modern runtime can be used."),Object(o.b)("p",null,"During this migration, use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./relay-compat"}),"Relay Compat")," tools and APIs to work with both Relay Classic and Relay Modern."),Object(o.b)("h2",{id:"api-and-runtime"},"API and Runtime"),Object(o.b)("p",null,"Relay can be thought of as two parts which work together: an API for building\ndata-driven components and a runtime which fetches and stores data from GraphQL\nto populate your app. Relay Modern brings both a new API and a new runtime."),Object(o.b)("p",null,"In order to incrementally convert an existing codebase, we will need to use the\nRelay Modern API while continuing to use the Relay Classic runtime until all\ncomponents are converted."),Object(o.b)("p",null,"Relay Compat is part of ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay'")," which allows you to do exactly this,\nproviding an identical API to Relay Modern, while allowing interoperability with\nboth runtimes."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"Require the Relay Compat API from ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/compat'")," and use it as you would\nRelay Modern. The components using Relay Compat can be referred to by both other\nRelay Modern and Relay Classic components."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const {createFragmentContainer, graphql} = require('react-relay/compat');\n\nclass TodoItem extends React.Component {\n  render() {\n    const item = this.props.item;\n    // ...\n  }\n}\n\nmodule.exports = createFragmentContainer(TodoItem, graphql`\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`);\n")))}s.isMDXComponent=!0}}]);