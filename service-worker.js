"use strict";var precacheConfig=[["/react-m-c-media/index.html","6b7d4bc4a94c4acf558ecc995aabe490"],["/react-m-c-media/static/css/main.03648255.css","ddc6a05aa40315114c1c600a91ad79f7"],["/react-m-c-media/static/js/main.2cd8957e.js","27ce7e25889cf37c648f7a35bb6a8969"],["/react-m-c-media/static/media/BWParkBanner.7c87a248.jpg","7c87a2483b03c2d670487d5ce3b36ec3"],["/react-m-c-media/static/media/MCLogo.4e166680.png","4e166680bb30d32365007e1b7ddd2726"],["/react-m-c-media/static/media/Matthew_Croak_Tech_Resume.f8d487d3.pdf","f8d487d374db77295a4ff955050ec066"],["/react-m-c-media/static/media/footer-mail.de510e13.png","de510e13acf3c60be6c211ec5daf9db6"],["/react-m-c-media/static/media/insta-footer.a5860aea.png","a5860aea1fa310668db2b3835ecfb4ca"],["/react-m-c-media/static/media/medium-footer.b4cf02a0.png","b4cf02a0a65bca4af11404cba474494e"],["/react-m-c-media/static/media/profile-pic.eed46cca.png","eed46ccabf6047442b94602da3353bf7"],["/react-m-c-media/static/media/web-crab-compressed.e7df9b52.jpg","e7df9b520be48c8346efd853ea8e0950"],["/react-m-c-media/static/media/web-fighting-nazcas.20c65a63.jpg","20c65a637438057212f659085ad4603d"],["/react-m-c-media/static/media/web-nazca.899907c6.jpg","899907c6e22fb5ac7af9dc32a75d939d"],["/react-m-c-media/static/media/web-otovalo-waterfall.dc5ecdef.jpg","dc5ecdefb1722f7008afa0b806d57cb2"],["/react-m-c-media/static/media/web-pelican.80829e5c.jpg","80829e5cdf3c02d07b142fe916b9046b"],["/react-m-c-media/static/media/web-sealion.1b511b73.jpg","1b511b73cf786f6a87150b78235afa48"],["/react-m-c-media/static/media/youtube-footer.52c2be6d.png","52c2be6dfcac39e3b550aaad28a9fbad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/react-m-c-media/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});