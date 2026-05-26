const header=document.querySelector('[data-header]');
const menu=document.querySelector('[data-menu-button]');
if(menu&&header){menu.addEventListener('click',()=>header.classList.toggle('open'));}
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
