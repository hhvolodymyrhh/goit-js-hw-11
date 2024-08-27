(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.querySelector("body"),u=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="Search" />
		<button class="btnEl">Search</button>
    </form>
    
	  <ul class="galleryEl"></ul>
</div>`;n.insertAdjacentHTML("afterbegin",u);const d=document.querySelector("form");document.querySelector(".btnEl");d.addEventListener("submit",r=>{r.preventDefault(),m().then(s=>p(s)).catch(s=>console.log(s))});async function m(r){document.querySelector(".galleryEl");const s=new URLSearchParams({key:"45653057",q:"name",image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=await fetch(`https://pixabay.com/api/?${s}`);if(!a.ok)throw new Error(a.status);return await a.json()}function p(r){const s=r.map(({webformatURL:a,largeImageURL:l,tags:e,likes:t,views:o,comments:c,downloads:i})=>`<li class="gallery-list-item>
            <a class="gallery-link" href="${l}">
                    <img class="img" src="${a}" 
                        alt="${e}" 
                        title="${e}" />
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-likes">${t}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-views">${o}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-comments">${c}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-downloads">${i}</p>
                        </li>
                    </ul>
                </a> 
          </li>`).join("");console.log(s),userList.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=index.js.map
