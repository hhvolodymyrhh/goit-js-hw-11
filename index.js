import{S as p,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(o){const r=new URLSearchParams({key:"25786434-348adb767e319176b4ad356ea",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function f(o,r){const a=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:m})=>`<li class="gallery-list-item">
            <a class="gallery-link" href="${e}">
                    <img class="img" src="${s}" 
                        alt="${t}" 
                        title="${t}" />
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-likes">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-views">${d}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-comments">${u}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-downloads">${m}</p>
                        </li>
                    </ul>
                </a> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const h=document.querySelector("body"),g=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
</div>`;h.insertAdjacentHTML("afterbegin",g);const l=document.querySelector(".loader");l.style.display="none";let b=new p(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});const S=document.querySelector("form"),n=document.querySelector(".galleryEl");S.addEventListener("submit",o=>{o.preventDefault(),l.style.display="block";const r=o.currentTarget.elements.search.value.toLowerCase().trim();r&&y(r).then(a=>{if(a.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden",l.style.display="none"}else{n.innerHTML="",f(a.hits,n),b.refresh();const s=n.querySelectorAll("img");let e=0;s.forEach(t=>{t.complete?(e++,e===s.length&&(l.style.display="none")):t.addEventListener("load",()=>{e++,e===s.length&&(l.style.display="none")})})}}).catch(a=>{console.log(a),c.show({message:`Sorry, ${a}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden"}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
