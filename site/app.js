// External links -> new tab (robust for iOS Safari) + whole-card click-through.
(function(){
if(window.__erwnApp)return;window.__erwnApp=1;
function isExt(href){try{var u=new URL(href,location.href);return /^https?:$/.test(u.protocol)&&u.host!==location.host}catch(e){return false}}
function fix(a){if(a&&a.tagName==='A'&&a.getAttribute('href')&&isExt(a.getAttribute('href'))){a.target='_blank';a.rel='noopener noreferrer'}}
function openExt(url){var w=null;try{w=window.open(url,'_blank')}catch(e){}if(w){try{w.opener=null}catch(e){}}else{var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.dataset.native=1;document.body.appendChild(a);a.click();a.remove()}}
function primary(card){var a=card.querySelector('a.site[href]');if(a)return a;
 var L=card.querySelectorAll('a[href]');for(var i=0;i<L.length;i++){var h=L[i].getAttribute('href');if(/^(tel:|mailto:|#|javascript:)/i.test(h))continue;if(L[i].closest('.src,figcaption .credit,.credit'))continue;return L[i]}return null}
function prep(card){if(card.dataset.cl)return;card.dataset.cl=1;var a=primary(card);if(!a)return;card.classList.add('clickable');
 if(isExt(a.getAttribute('href'))&&!card.querySelector('.visit')){var c=document.createElement('div');c.className='visit';c.textContent='Visit website \u2197';(card.querySelector('.body')||card).appendChild(c)}}
function scan(r){(r.querySelectorAll?r:document).querySelectorAll('a[href]').forEach(fix);(r.querySelectorAll?r:document).querySelectorAll('.card').forEach(prep);if(r.classList&&r.classList.contains('card'))prep(r)}
document.addEventListener('click',function(e){
 if(e.defaultPrevented||e.button>0)return;
 var a=e.target.closest&&e.target.closest('a[href]');
 if(a){if(a.dataset.native)return;var h=a.getAttribute('href');if(/^(tel:|mailto:)/i.test(h)){e.stopPropagation();return}
  if(isExt(h)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();e.stopPropagation();openExt(a.href)}return}
 if(e.target.closest('button,input,select,textarea,label,summary'))return;
 var card=e.target.closest&&e.target.closest('.card.clickable');if(!card)return;
 if(window.getSelection&&String(window.getSelection()).length)return;
 var p=primary(card);if(!p)return;e.preventDefault();
 if(isExt(p.getAttribute('href')))openExt(p.href);else location.href=p.href},false);
var st=document.createElement('style');st.textContent='.card.clickable{cursor:pointer;transition:box-shadow .15s,transform .15s}.card.clickable:hover{box-shadow:0 6px 18px rgba(0,0,0,.18);transform:translateY(-2px)}.card .visit{margin-top:8px;font-weight:600;color:#5b2c83;font-size:.9em}';
function homeLink(){var h=document.querySelector('header h1');if(!h||h.querySelector('a'))return;var home=/\/species\//.test(location.pathname)?'../site/index.html':'index.html';h.innerHTML='<a href="'+home+'" style="color:inherit;text-decoration:none">'+h.innerHTML+'</a>'}
function start(){document.head.appendChild(st);homeLink();scan(document);new MutationObserver(function(m){m.forEach(function(x){x.addedNodes.forEach(function(n){if(n.nodeType===1)scan(n)})})}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
