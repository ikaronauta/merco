"use strict";(self.webpackChunkdoc_bpmco=self.webpackChunkdoc_bpmco||[]).push([[4669],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],c={title:"opcion_espacio",slug:"/opcion-espacio"},l=void 0,s={unversionedId:"app-movil/sincronizacion/tablas/opcion_espacio",id:"app-movil/sincronizacion/tablas/opcion_espacio",title:"opcion_espacio",description:"Endpoint",source:"@site/docs/app-movil/sincronizacion/tablas/opcion_espacio.md",sourceDirName:"app-movil/sincronizacion/tablas",slug:"/opcion-espacio",permalink:"/merco/docs/opcion-espacio",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/app-movil/sincronizacion/tablas/opcion_espacio.md",tags:[],version:"current",frontMatter:{title:"opcion_espacio",slug:"/opcion-espacio"},sidebar:"tutorialSidebar",previous:{title:"observacionComentario",permalink:"/merco/docs/observacioncomentario"},next:{title:"otrosregistros",permalink:"/merco/docs/otrosregistros"}},p={},u=[{value:"Endpoint",id:"endpoint",level:2},{value:"Tablas",id:"tablas",level:2},{value:"Consultas",id:"consultas",level:2},{value:"Consulta A",id:"consulta-a",level:3},{value:"Consulta B",id:"consulta-b",level:3},{value:"Consulta C",id:"consulta-c",level:3},{value:"Ultima actualizaci\xf3n",id:"ultima-actualizaci\xf3n",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"endpoint"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="EndPoint"',title:'"EndPoint"'},"Metodo.SINCRONIZAROPCIONESESPACIOS\n\nSIOEO\n")),(0,o.kt)("h2",{id:"tablas"},"Tablas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clmer_OpcionesEspacio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clmer_sincronizacion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clmer_sincronizacionMercaderistaTabla"))),(0,o.kt)("h2",{id:"consultas"},"Consultas"),(0,o.kt)("h3",{id:"consulta-a"},"Consulta A"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Query"',title:'"Query"'},"SELECT clmer_sync \nFROM clmer_sincronizacionMercaderistaTabla \nWHERE clmer_tabla = 'OpcionesEspacio' \n    AND clmer_mercaderista = @mercaderista\n")),(0,o.kt)("h3",{id:"consulta-b"},"Consulta B"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Condiciones"',title:'"Condiciones"'},"if (S.Equals(sync))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Query"',title:'"Query"'},"select opc_codigo 'sin_id','a' as 'sin_tipo', opc_txt texto, opc_esp opcion\nFROM clmer_OpcionesEspacio pc \n    JOIN clmer_sincronizacion sinc \n        ON CONVERT(INT,sinc.sin_id) = pc.opc_codigo \n        AND sinc.sin_tabla = 'OpcionesEspacio'  \n    JOIN clmer_sincronizacionMercaderistaTabla smt \n        ON smt.clmer_tabla = 'OpcionesEspacio' \n        AND clmer_mercaderista = @mercaderista\nWHERE sinc.sin_fecha >= smt.clmer_fecha\n")),(0,o.kt)("h3",{id:"consulta-c"},"Consulta C"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Condiciones"',title:'"Condiciones"'},"else (S.Equals(sync))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Query"',title:'"Query"'},"SELECT opc_codigo 'sin_id','a' as 'sin_tipo', opc_txt texto, opc_esp opcion\nFROM clmer_OpcionesEspacio\n")),(0,o.kt)("h2",{id:"ultima-actualizaci\xf3n"},"Ultima actualizaci\xf3n"),(0,o.kt)("div",{class:"ultima-actualizacion"},(0,o.kt)("small",null,(0,o.kt)("i",null," Ultima actualizaci\xf3n: ",(0,o.kt)("b",null," 20 de mayo de 2022.")," ")),(0,o.kt)("small",null,(0,o.kt)("i",null," Actualizado por: ",(0,o.kt)("b",null," Julian A. Ortiz.")," "))))}d.isMDXComponent=!0}}]);