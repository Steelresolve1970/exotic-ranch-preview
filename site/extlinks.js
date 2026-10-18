// Open every external (other-domain) link in a new tab, incl. links inserted later by scripts.
(function(){
function ext(a){try{var u=new URL(a.getAttribute('href'),location.href);return /^https?:$/.test(u.protocol)&&u.host!==location.host}catch(e){return false}}
function fix(a){if(a&&a.tagName==='A'&&a.getAttribute('href')&&ext(a)){a.target='_blank';a.rel='noopener noreferrer'}}
function all(r){(r.querySelectorAll?r:document).querySelectorAll('a[href]').forEach(fix)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');fix(a)},true);
function start(){all(document);new MutationObserver(function(m){m.forEach(function(x){x.addedNodes.forEach(function(n){if(n.nodeType===1){fix(n);all(n)}})})}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
