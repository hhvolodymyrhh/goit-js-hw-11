import{S as d,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(a){const r=new URLSearchParams({key:"25786434-348adb767e319176b4ad356ea",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(a,r){console.log(a);const s=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:n,comments:c,downloads:u})=>`<li class="gallery-list-item>
            <a class="gallery-link" href="${e}">
                    <img class="img" src="${o}" 
                        alt="${t}" 
                        title="${t}" />
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-likes">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-views">${n}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-comments">${c}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-downloads">${u}</p>
                        </li>
                    </ul>
                </a> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const h=document.querySelector("body"),y=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    
	  <ul class="galleryEl"></ul>
</div>`;h.insertAdjacentHTML("afterbegin",y);console.log(d);const g=document.querySelector("form"),l=document.querySelector(".galleryEl");g.addEventListener("submit",a=>{a.preventDefault();const r=a.currentTarget.elements.search.value.toLowerCase().trim();r&&p(r).then(s=>{if(s.hits.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const e=document.querySelector(".iziToast");e.style.borderRadius="10px",e.style.overflow="hidden"}else{l.innerHTML="",f(s.hits,l);var o=$(".galleryEl a").simpleLightbox();o.refresh()}}).catch(s=>console.log(s))});
//# sourceMappingURL=index.js.map
