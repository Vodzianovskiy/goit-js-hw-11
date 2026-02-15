import{a as m,S as f,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="54665036-94176af4f08ccc0fd35b37209",h="https://pixabay.com/api/",y={getImagesByQuery(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(t=>t.data).catch(t=>{throw console.log("Api error",t),t})}},l=document.querySelector(".gallery"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250}),a={createGallery(s){const r=s.hits.map(({webformatURL:t,largeImageURL:n,tags:e,likes:o,views:i,comments:p,downloads:u})=>`
        <a href="${n}">
          <div class="photo-card">
            <img src="${t}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item">Likes <span>${o}</span></p>
              <p class="info-item">Views<span>${i}</span></p>
              <p class="info-item">Comments <span>${p}</span></p>
              <p class="info-item">Downloads<span>${u}</span></p>
            </div>
          </div>
        </a>
      `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()},clearGallery(){l.innerHTML=""},showLoader(){document.body.classList.add("loading")},hideLoader(){document.body.classList.remove("loading")}},b=document.querySelector(".form"),d=document.querySelector('input[name="search-text"]');b.addEventListener("submit",v);function v(s){s.preventDefault();const r=d.value.trim();if(!r){c.error({message:"Loading images, please wait..."});return}a.clearGallery(),a.showLoader(),d.value="",y.getImagesByQuery(r).then(t=>{if(a.hideLoader(),t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3});return}a.createGallery(t),c.success({message:`Hooray! We found ${t.hits.length} images.`,color:"green",position:"topRight",timeout:3e3})}).catch(t=>{a.hideLoader(),c.error({message:"Oops, something went wrong!"})})}
//# sourceMappingURL=index.js.map
