import{S as c,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="/goit-js-hw-11/assets/group-5bc7b79a.svg",g=document.querySelector(".form"),n=document.querySelector(".gallery"),o=document.querySelector(".loader");function m(a){const r="https://pixabay.com/api/",t="43354074-012c59d6306474dc1e40056e0",l=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,key:t,per_page:9});return fetch(`${r}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(a){return a.map(r=>`<li class="gallery__item">
<a href="${r.largeImageURL}">
<img class="gallery__img" src="${r.largeImageURL}" alt="${r.tags}">
 <div Class="info-gallery__box">
  <ul Class="info-gallery__list">
  <li Class="info-gallery__item">
     <p Class="info-gallery__text">Likes</p>
     <span Class="info-gallery__span">${r.likes}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Views</p>
      <span Class="info-gallery__span">${r.views}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Comments</p>
      <span Class="info-gallery__span">${r.comments}</span>
 </li>
 <li Class="info-gallery__item">
     <p Class="info-gallery__text">Downloads</p>
     <span Class="info-gallery__span">${r.downloads}</span>
 </li>
  </ul>
</div>
</a>
</li>`).join("")}const p=new c(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",y);function y(a){a.preventDefault();const r=a.currentTarget.elements.search.value.trim();o.classList.remove("is-hidden"),n.innerHTML="",m(r).then(t=>{if(r===""||t.hits.length===0)return f.error({iconUrl:u,message:"Sorry, there are no images matching<br> your search query. Please try again!",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"});n.innerHTML=d(t.hits),p.refresh()}).catch(t=>console.log(t)).finally(()=>{o.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
