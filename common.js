async function loadConfig(){
  try{
    const r=await fetch('config.json'); return await r.json();
  }catch(e){
    return {
      municipality:{name:'Ferrières-en-Brie',shortName:'Ferrières',appName:'Ferrières & Vous',tagline:'La ville, simplement.',logoText:'F',
      theme:{primary:'#143c34',secondary:'#2c725f',accent:'#d6b06a',background:'#f1f4f2',surface:'#ffffff',danger:'#d8584f'}},
      modules:{news:true,alerts:true,agenda:true,reports:true,works:true,school:true,services:true,heritage:true,directory:true,legal:true,rss:true}
    }
  }
}
function applyConfig(c){
  const m=c.municipality,t=m.theme||{};
  document.documentElement.style.setProperty('--primary',t.primary||'#143c34');
  document.documentElement.style.setProperty('--secondary',t.secondary||'#2c725f');
  document.documentElement.style.setProperty('--accent',t.accent||'#d6b06a');
  document.documentElement.style.setProperty('--bg',t.background||'#f1f4f2');
  document.documentElement.style.setProperty('--surface',t.surface||'#fff');
  document.documentElement.style.setProperty('--danger',t.danger||'#d8584f');
  document.querySelectorAll('[data-app-name]').forEach(el=>el.textContent=m.appName);
  document.querySelectorAll('[data-city]').forEach(el=>el.textContent=m.name);
  document.querySelectorAll('[data-short-city]').forEach(el=>el.textContent=m.shortName);
  document.querySelectorAll('[data-tagline]').forEach(el=>el.textContent=m.tagline);
  document.querySelectorAll('[data-logo-text]').forEach(el=>el.textContent=m.logoText||m.shortName.slice(0,1));
}
function toast(msg){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}
  t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)
}