(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{637:function(t,e,r){"use strict";r.r(e);r(371),r(233),r(34),r(12);var l=r(67),n=r(125),o=Object(l.b)({name:"Blogs",setup:function(){var t=Object(l.g)((function(){return Object(n.b)()}),"oJ2TUppuJGGHND0N2dm8gw=="),e=Object(l.a)((function(){var e;return((null===(e=t.value)||void 0===e?void 0:e.list)||[]).sort((function(a,b){return a.order==b.order?a.updated_time-b.updated_time:Number(a.order)-Number(b.order)}))})),r=Object(l.a)((function(){return e.value.filter((function(b){return b.published}))}));return{blogData:t,list:e,formattedList:r}}}),c=r(59),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blogs-page mt-4 px-4 lg:px-0"},[r("article",{staticClass:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl m-auto"},t._l(t.formattedList,(function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/blog/"+e.id}},[r("article",[r("el-image",{staticStyle:{"min-height":"200px"},attrs:{src:e.cover,alt:e.title}}),t._v(" "),r("div",{staticClass:"tags mt-3 mb-4 flex gap-2"},t._l(e.tags,(function(e){return r("div",{key:e,staticClass:"border border-solid border-black rounded-full px-5 text-lg",staticStyle:{"line-height":"1.7"}},[r("span",[t._v("\n              "+t._s(e)+"\n            ")])])})),0),t._v(" "),r("h5",{staticClass:"font-bold text-xl mb-2",staticStyle:{color:"#181818"}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),r("time",{staticClass:"text-gray-400"},[t._v("\n          "+t._s(t.$d(e.updated_time))+"\n        ")])],1)])})),1)])}),[],!1,null,"c63a969c",null);e.default=component.exports}}]);