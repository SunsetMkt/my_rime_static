if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>s(e,o),d={module:{uri:o},exports:l,require:t};i[o]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-68b9963c.css",revision:null},{url:"assets/index-999b34d1.js",revision:null},{url:"assets/MyEditor-fc494372.js",revision:null},{url:"assets/MySimulator-1080162c.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"b55918747c652c855d55f9d5a276b670"},{url:"rime.js",revision:"0ea933b8e7832482390034f932ef2758"},{url:"worker.js",revision:"dd275e850d90859940382dd1648115dd"},{url:"apple-touch-icon.png",revision:"6e5ceec116ccdbcf2c8ef8a2ee6e815f"},{url:"rime.data",revision:"f6a0288a806954b8c0f1d34148aa43e1"},{url:"rime.wasm",revision:"8368e02984d3712f4c1512a798f41c9f"},{url:"LibreService.svg",revision:"3bbd71af5b012e283fb5eef01996e393"},{url:"manifest.webmanifest",revision:"601750cd7a6ae8dfc3e0ae74a400eb7f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
