if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>n(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Container.b6773faa.js",revision:null},{url:"assets/DraggableCharContainer.91252594.js",revision:null},{url:"assets/get-floating-position.f8fa2263.js",revision:null},{url:"assets/Header.f05e8967.js",revision:null},{url:"assets/index.1774cffd.js",revision:null},{url:"assets/index.458ec7a0.js",revision:null},{url:"assets/index.552ed853.js",revision:null},{url:"assets/index.7c3918fd.js",revision:null},{url:"assets/index.9d9db3cc.js",revision:null},{url:"assets/index.b3c221fe.js",revision:null},{url:"assets/index.b528a834.js",revision:null},{url:"assets/index.c8afcdb5.js",revision:null},{url:"assets/index.de46a58f.js",revision:null},{url:"assets/index.eb225e89.js",revision:null},{url:"assets/PageContainer.5365323c.js",revision:null},{url:"assets/SegmentedControl.7b357ac1.js",revision:null},{url:"assets/TextInput.f906047b.js",revision:null},{url:"assets/use-form.b1c1a349.js",revision:null},{url:"assets/use-id.84f59721.js",revision:null},{url:"assets/use-uncontrolled.bd071ab9.js",revision:null},{url:"assets/useEnvSelect.d1367f9a.js",revision:null},{url:"assets/useQuery.3688caea.js",revision:null},{url:"index.html",revision:"59d52e21ec75b3c9710a54e97949b8d4"},{url:"favicon.ico",revision:"f3350cde2c791f63fa8d45478139bd22"},{url:"robots.txt",revision:"e232f8308190c040e3711172d401a8ac"},{url:"apple-touch-icon.png",revision:"f3350cde2c791f63fa8d45478139bd22"},{url:"pwa-192x192.png",revision:"f3350cde2c791f63fa8d45478139bd22"},{url:"pwa-512x512.png",revision:"37d4bb329dbfde146ead4f2aa834cc58"},{url:"manifest.webmanifest",revision:"fcbb265b5c2b423bc102447c9c3ebfd7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
