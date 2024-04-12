import{i as o,S as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="/goit-js-hw-11/assets/group-5bc7b79a.svg",u=document.querySelector(".form"),n=document.querySelector(".gallery");function g(a){const r="https://pixabay.com/api/",s="43354074-012c59d6306474dc1e40056e0",l=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,key:s});return fetch(`${r}?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(a){return a.map(r=>`<li class="gallery__item">
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
</li>`).join("")}u.addEventListener("submit",p);function p(a){a.preventDefault(),n.innerHTML="";const r=a.currentTarget.elements.search.value.trim();g(r).then(s=>{if(r===""||s.hits.length===0)return o.error({iconUrl:f,message:"Sorry, there are no images matching<br> your search query. Please try again!",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"});n.innerHTML=m(s.hits),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
