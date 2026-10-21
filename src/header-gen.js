export const programs = ["Entrepreneurship & Venture Building","Technology Entrepreneurship & AI Product Management","Family Business Management & Entrepreneurship","Business Growth & Digital Marketing","Startup Finance & Investments"];
function header(page) {
  const isHome = page === V4, self = h => (h === page ? '' : h);
  const home = isHome ? '#top' : V4, faq = isHome ? '#faq' : V4 + '#faq', forge = isHome ? '#months' : V4 + '#months';
  const epHref = i => (page === EP ? '' : EP) + '#ep-' + (i + 1);
  const dd = (label, inner) => `<div data-dd="1" style="position:relative"><button type="button" style="all:unset;cursor:pointer;display:flex;align-items:center;gap:6px;font-size:14px;font-weight:500;${UL}" style-hover="background-size:100% 3px">${label} ${chev}</button>${inner}</div>`;
  const link = (h, l, on) => `<a href="${h}" style="white-space:nowrap;${on ? ULon : UL}"${on ? '' : ' style-hover="background-size:100% 3px"'}>${l}</a>`;
  const about = [['About.dc.html','About Pitchvilla'],['Aero Edutech.dc.html','Universities Collaboration'],['Interview Prep.dc.html','Interview Guide'],[faq,'FAQ']];
  const progPanel = `<div style="padding:10px 12px 8px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#6B5E54">Professional programs · 1-year</div>` + programs.map((p,i)=>item(epHref(i), p)).join('');
  const desk = `<nav data-nav="desk" style="display:flex;gap:28px;font-size:14px;font-weight:500;align-items:center">
        ${link(home,'Home',isHome)}
        ${dd('About us', panel(220, about.map(([h,l])=>item(h,l)).join('')))}
        ${link(forge,'100X Forge',false)}
        ${dd('Programs', panel(260, progPanel))}
        ${dd('Services', panel(180, services.map(([l,h,it])=>sub(l,h,it)).join('')))}
        ${link('Contact.dc.html','Contact us',page==='Contact.dc.html')}
      </nav>`;
  const mh = 'padding:16px 0;border-bottom:1px solid rgba(28,20,16,0.14);font-size:22px;font-weight:600;letter-spacing:-0.02em';
  const ms = (t) => `<summary style="list-style:none;cursor:pointer;${mh};display:flex;justify-content:space-between;align-items:center">${t}<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary>`;
  const ml = (h,l) => `<a href="${h}" style="padding:9px 0;font-size:16px;color:#4A3F37">${esc(l)}</a>`;
  const mob = `<details data-nav="mob" style="position:relative;display:none;grid-column:3;justify-self:end">
        <summary aria-label="Menu" style="list-style:none;cursor:pointer;width:44px;height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;margin-right:-10px"><span data-bar="1" style="width:22px;height:2px;border-radius:2px;background:#1C1410;display:block;transition:transform .3s ease,opacity .3s ease"></span><span data-bar="2" style="width:22px;height:2px;border-radius:2px;background:#1C1410;display:block;transition:opacity .2s ease"></span><span data-bar="3" style="width:22px;height:2px;border-radius:2px;background:#1C1410;display:block;transition:transform .3s ease"></span></summary>
        <div style="position:fixed;top:64px;right:0;bottom:0;width:min(86vw,380px);background:#FBF8F1;border-left:1px solid rgba(28,20,16,0.2);box-shadow:0 0 0 100vmax rgba(28,20,16,0.4);padding:8px 28px 32px;display:flex;flex-direction:column;z-index:50;overflow-y:auto">
          <a href="${home}" style="${mh}">Home</a>
          <details>${ms('About us')}<div style="display:flex;flex-direction:column;padding:6px 0 10px 14px">${about.map(([h,l])=>ml(h,l)).join('')}</div></details>
          <a href="${forge}" style="${mh}">100X Forge</a>
          <details>${ms('Programs')}<div style="display:flex;flex-direction:column;padding:6px 0 10px 14px"><span style="padding:6px 0;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#6B5E54">Professional programs · 1-year</span>${programs.map((p,i)=>ml(epHref(i),p)).join('')}</div></details>
          <details>${ms('Services')}<div style="display:flex;flex-direction:column;padding:6px 0 10px 14px">${services.map(([l,h,it])=>`<span style="padding:10px 0 2px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#6B5E54">${l}</span>`+it.map(([h2,l2])=>ml(h2,l2)).join('')).join('')}</div></details>
          <a href="Contact.dc.html" style="${mh}">Contact us</a>
          <a href="Apply.dc.html?type=apply" style="margin-top:24px;background:#FFCC00;border-radius:8px;padding:14px 18px;font-size:15px;font-weight:600;text-align:center">Apply to 100X Forge</a>
        </div>
      </details>`;
  return `<header style="position:sticky;top:0;z-index:30;background:#FBF8F1;border-bottom:1px solid rgba(28,20,16,0.2)">
    <div style="max-width:1280px;margin:0 auto;padding:0 clamp(24px,6vw,96px);height:64px;display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:24px">
      <a href="${home}" style="display:flex;align-items:center"><img src="assets/pitchvilla-wordmark.png" alt="Pitchvilla" style="height:44px;width:auto;flex:none;display:block"></a>
      ${desk}
      <a data-nav="desk" href="Apply.dc.html?type=apply" style="justify-self:end;background:#FFCC00;border-radius:8px;padding:10px 18px;font-size:14px;font-weight:600;white-space:nowrap" style-hover="background:#F2BF00">Apply to 100X Forge</a>
      ${mob}
    </div>
  </header>`;
}