import{a as f,S as h,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="54665036-94176af4f08ccc0fd35b37209",y="https://pixabay.com/api/",L={getImagesByQuery(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(y,{params:o}).then(t=>t.data).catch(t=>{throw console.log("Api error",t),t})}},l=document.querySelector(".gallery"),d=document.querySelector(".loader"),v=new h(".gallery a",{captionsData:"alt",captionDelay:250}),a={createGallery(s){const o=s.hits.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:m})=>`
        <a href="${n}">
          <div class="photo-card">
            <img src="${t}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item">Likes <span>${r}</span></p>
              <p class="info-item">Views<span>${i}</span></p>
              <p class="info-item">Comments <span>${u}</span></p>
              <p class="info-item">Downloads<span>${m}</span></p>
            </div>
          </div>
        </a>
      `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",o),v.refresh()},clearGallery(){l.innerHTML=""},showLoader(){d.classList.remove("is-hidden")},hideLoader(){d.classList.add("is-hidden")}},b=document.querySelector(".form"),p=document.querySelector('input[name="search-text"]');b.addEventListener("submit",w);function w(s){s.preventDefault();const o=p.value.trim();if(!o){c.error({message:"Loading images, please wait..."});return}a.clearGallery(),a.showLoader(),p.value="",L.getImagesByQuery(o).then(t=>{if(a.hideLoader(),t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:3e3});return}a.createGallery(t),c.success({message:`Hooray! We found ${t.hits.length} images.`,color:"green",position:"topRight",timeout:3e3})}).catch(t=>{a.hideLoader(),c.error({message:"Oops, something went wrong!"})})}
//# sourceMappingURL=index.js.map
