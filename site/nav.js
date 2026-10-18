// Shared nav + newsletter block for feature pages.
(function(){
var L=[["index.html","Home"],["directory.html","Directory"],["../species/index.html","Species"],["map.html","Species Map"],["compare.html","Compare"],["prices.html","Market Prices"],["auctions.html","Auction Calendar"],["costs.html","Startup Costs"],["forum.html","Forum & Ask a Vet","soon"],["classifieds.html","Classifieds"],["real-estate.html","Real Estate"],["shop.html","Shop"],["gear.html","Gear"],["tools.html","Tools & Courses"],["guides.html","Guides"],["advertise.html","Advertise"]];
var n=document.getElementById('nav');if(n){var on=n.dataset.on;n.innerHTML=L.map(function(x){return '<a href="'+x[0]+'"'+(x[0]==on?' class="on"':'')+'>'+x[1]+(x[2]?'<small>'+x[2]+'</small>':'')+'</a>'}).join('')}
var b=document.getElementById('newsletter');if(b){b.className='nl';b.innerHTML='<div><h3>Get occasional updates</h3><p>Auction results, law changes, new listings. <b>Signup isn\'t connected yet</b>: no address is stored or sent.</p></div><form onsubmit="this.innerHTML=\'<span>Thanks! Signup goes live once the newsletter service is connected.</span>\';return false"><input type="email" required placeholder="you@ranch.com" aria-label="Email"><button>Subscribe</button></form>'}
})();
// Open every external (other-domain) link in a new tab, incl. links inserted later by scripts.
(function(){
function ext(a){try{var u=new URL(a.getAttribute('href'),location.href);return /^https?:$/.test(u.protocol)&&u.host!==location.host}catch(e){return false}}
function fix(a){if(a&&a.tagName==='A'&&a.getAttribute('href')&&ext(a)){a.target='_blank';a.rel='noopener noreferrer'}}
function all(r){(r.querySelectorAll?r:document).querySelectorAll('a[href]').forEach(fix)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');fix(a)},true);
function start(){all(document);new MutationObserver(function(m){m.forEach(function(x){x.addedNodes.forEach(function(n){if(n.nodeType===1){fix(n);all(n)}})})}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
