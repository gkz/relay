(self.webpackChunk=self.webpackChunk||[]).push([[34433],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var a=t(44256),r=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var s=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},p=function(){return r.createElement(o,null,r.createElement(l,null),r.createElement(s,null))},c=function(){return r.createElement(o,null,r.createElement(s,null))};const h=function(){return(0,a.fbContent)({internal:r.createElement(p,null),external:r.createElement(c,null)})}},93474:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(68629),s=["components"],l={id:"graphql-server-specification",title:"GraphQL Server Specification",slug:"/guides/graphql-server-specification/"},p={unversionedId:"guides/graphql-server-specification",id:"version-v11.0.0/guides/graphql-server-specification",isDocsHomePage:!1,title:"GraphQL Server Specification",description:"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema.",source:"@site/versioned_docs/version-v11.0.0/guides/graphql-server-specification.md",sourceDirName:"guides",slug:"/guides/graphql-server-specification/",permalink:"/docs/guides/graphql-server-specification/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guides/graphql-server-specification.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1624379491,formattedLastUpdatedAt:"6/22/2021",frontMatter:{id:"graphql-server-specification",title:"GraphQL Server Specification",slug:"/guides/graphql-server-specification/"},sidebar:"version-v11.0.0/docs",previous:{title:"Legacy APIs",permalink:"/docs/api-reference/legacy-apis/"},next:{title:"Relay Compiler",permalink:"/docs/guides/compiler/"}},c=[{value:"Preface",id:"preface",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Object Identification",id:"object-identification",children:[]},{value:"Connections",id:"connections",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],h={toc:c};function u(e){var n=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema."),(0,i.kt)("p",null,"Table of Contents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#preface"},"Preface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#schema"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#object-identification"},"Object Identification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connections"},"Connections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,i.kt)("h2",{id:"preface"},"Preface"),(0,i.kt)("p",null,"The two core assumptions that Relay makes about a GraphQL server are that it provides:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A mechanism for refetching an object."),(0,i.kt)("li",{parentName:"ol"},"A description of how to page through connections.")),(0,i.kt)("p",null,"This example demonstrates all three of these assumptions. This example is not comprehensive, but it is designed to quickly introduce these core assumptions, to provide some context before diving into the more detailed specification of the library."),(0,i.kt)("p",null,"The premise of the example is that we want to use GraphQL to query for information about ships and factions in the original Star Wars trilogy."),(0,i.kt)("p",null,"It is assumed that the reader is already familiar with ",(0,i.kt)("a",{parentName:"p",href:"http://graphql.org/"},"GraphQL"),"; if not, the README for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")," is a good place to start."),(0,i.kt)("p",null,"It is also assumed that the reader is already familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Star_Wars"},"Star Wars"),"; if not, the 1977 version of Star Wars is a good place to start, though the 1997 Special Edition will serve for the purposes of this document."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"The schema described below will be used to demonstrate the functionality that a GraphQL server used by Relay should implement. The two core types are a faction and a ship in the Star Wars universe, where a faction has many ships associated with it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ninterface Node {\n  id: ID!\n}\n\ntype Faction implements Node {\n  id: ID!\n  name: String\n  ships: ShipConnection\n}\n\ntype Ship implements Node {\n  id: ID!\n  name: String\n}\n\ntype ShipConnection {\n  edges: [ShipEdge]\n  pageInfo: PageInfo!\n}\n\ntype ShipEdge {\n  cursor: String!\n  node: Ship\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  rebels: Faction\n  empire: Faction\n  node(id: ID!): Node\n}\n")),(0,i.kt)("h2",{id:"object-identification"},"Object Identification"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"Faction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship")," have identifiers that we can use to refetch them. We expose this capability to Relay through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," interface and the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," field on the root query type."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," interface contains a single field, ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which is an ",(0,i.kt)("inlineCode",{parentName:"p"},"ID!"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," root field takes a single argument, an ",(0,i.kt)("inlineCode",{parentName:"p"},"ID!"),", and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Node"),". These two work in concert to allow refetching; if we pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," returned in that field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," field, we get the object back."),(0,i.kt)("p",null,"Let's see this in action, and query for the ID of the rebels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nquery RebelsQuery {\n  rebels {\n    id\n    name\n  }\n}\n")),(0,i.kt)("p",null,"returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),(0,i.kt)("p",null,"So now we know the ID of the Rebels in our system. We can now refetch them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nquery RebelsRefetchQuery {\n  node(id: "RmFjdGlvbjox") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),(0,i.kt)("p",null,"returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "node": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),(0,i.kt)("p",null,"If we do the same thing with the Empire, we'll find that it returns a different ID, and we can refetch it as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nquery EmpireQuery {\n  empire {\n    id\n    name\n  }\n}\n")),(0,i.kt)("p",null,"yields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "empire": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nquery EmpireRefetchQuery {\n  node(id: "RmFjdGlvbjoy") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),(0,i.kt)("p",null,"yields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "node": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," interface and ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," field assume globally unique IDs for this refetching. A system without globally unique IDs can usually synthesize them by combining the type with the type-specific ID, which is what was done in this example."),(0,i.kt)("p",null,"The IDs we got back were base64 strings. IDs are designed to be opaque (the only thing that should be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," argument on ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is the unaltered result of querying ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," on some object in the system), and base64ing a string is a useful convention in GraphQL to remind viewers that the string is an opaque identifier."),(0,i.kt)("p",null,"Complete details on how the server should behave are available in the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"GraphQL Object Identification")," best practices guide in the GraphQL site."),(0,i.kt)("h2",{id:"connections"},"Connections"),(0,i.kt)("p",null,"A faction has many ships in the Star Wars universe. Relay contains functionality to make manipulating one-to-many relationships easy, using a standardized way of expressing these one-to-many relationships. This standard connection model offers ways of slicing and paginating through the connection."),(0,i.kt)("p",null,"Let's take the rebels, and ask for their first ship:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nquery RebelsShipsQuery {\n  rebels {\n    name,\n    ships(first: 1) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"yields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"That used the ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"ships")," to slice the result set down to the first one. But what if we wanted to paginate through it? On each edge, a cursor will be exposed that we can use to paginate. Let's ask for the first two this time, and get the cursor as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nquery MoreRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 2) {\n      edges {\n        cursor\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"and we get back"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE=",\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Notice that the cursor is a base64 string. That's the pattern from earlier: the server is reminding us that this is an opaque string. We can pass this string back to the server as the ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ships")," field, which will let us ask for the next three ships after the last one in the previous result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"gives us"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI=",\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM=",\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sweet! Let's keep going and get the next four!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nquery RebelsQuery {\n  rebels {\n    name,\n    ships(first: 4 after: "YXJyYXljb25uZWN0aW9uOjQ=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"yields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": []\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Hm. There were no more ships; guess there were only five in the system for the rebels. It would have been nice to know that we'd reached the end of the connection, without having to do another round trip in order to verify that. The connection model exposes this capability with a type called ",(0,i.kt)("inlineCode",{parentName:"p"},"PageInfo"),". So let's issue the two queries that got us ships again, but this time ask for ",(0,i.kt)("inlineCode",{parentName:"p"},"hasNextPage"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    originalShips: ships(first: 2) {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n    moreShips: ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"and we get back"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "originalShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": true\n      }\n    },\n    "moreShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": false\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"So on the first query for ships, GraphQL told us there was a next page, but on the next one, it told us we'd reached the end of the connection."),(0,i.kt)("p",null,"Relay uses all of this functionality to build out abstractions around connections, to make these easy to work with efficiently without having to manually manage cursors on the client."),(0,i.kt)("p",null,"Complete details on how the server should behave are available in the ",(0,i.kt)("a",{target:"_blank",href:t(64339).Z},"GraphQL Cursor Connections")," spec."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"This concludes the overview of the GraphQL Server Specifications. For the detailed requirements of a Relay-compliant GraphQL server, a more formal description of the ",(0,i.kt)("a",{target:"_blank",href:t(64339).Z},"Relay cursor connection")," model, the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"GraphQL global object identification")," model are all available."),(0,i.kt)("p",null,"To see code implementing the specification, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-relay-js"},"GraphQL.js Relay library")," provides helper functions for creating nodes and connections; that repository's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-relay-js/tree/master/src/__tests__"},(0,i.kt)("inlineCode",{parentName:"a"},"__tests__"))," folder contains an implementation of the above example as integration tests for the repository."),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}u.isMDXComponent=!0},64339:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});const a=t.p+"assets/files/connections-61fc54c286f0afc0b4f230f7c4b150bf.htm"}}]);