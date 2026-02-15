import{a as m,S as h,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="54665036-94176af4f08ccc0fd35b37209",g="https://pixabay.com/api/",L={getImagesByQuery(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:o}).then(r=>r.data).catch(r=>{throw console.log("Api error",r),r})}},l=document.querySelector(".gallery"),d=document.querySelector(".loader"),v=new h(".gallery a",{captionsData:"alt",captionDelay:250}),n={createGallery(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:f})=>`
        <a href="${i}">
          <div class="photo-card">
            <img src="${r}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item">Likes <span>${t}</span></p>
              <p class="info-item">Views <span>${a}</span></p>
              <p class="info-item">Comments <span>${p}</span></p>
              <p class="info-item">Downloads <span>${f}</span></p>
            </div>
          </div>
        </a>
      `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",o),v.refresh()},clearGallery(){l.innerHTML=""},showLoader(){d.classList.remove("is-hidden")},hideLoader(){d.classList.add("is-hidden")}},b=document.querySelector(".form"),u=document.querySelector('input[name="search-text"]');b.addEventListener("submit",S);function S(s){s.preventDefault();const o=u.value.trim();if(!o){c.error({message:"Please enter a search query!"});return}n.clearGallery(),n.showLoader(),u.value="",L.getImagesByQuery(o).then(r=>{if(n.hideLoader(),r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}n.createGallery(r.hits),c.success({message:`Hooray! We found ${r.hits.length} images.`})}).catch(r=>{n.hideLoader(),c.error({message:"Oops, something went wrong!"})})}
//# sourceMappingURL=index.js.map
