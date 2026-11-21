const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
const billingOptions=[...document.querySelectorAll('.billing-option')];
const priceCards=[...document.querySelectorAll('.price-card[data-monthly]')];
function setBillingPeriod(period){
  billingOptions.forEach(button=>{
    const active=button.dataset.period===period;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  priceCards.forEach(card=>{
    const price=period==='annual'?card.dataset.annual:card.dataset.monthly;
    const suffix=period==='annual'?'/yr':'/mo';
    const priceNode=card.querySelector('[data-price]');
    if(priceNode) priceNode.innerHTML=`${price}<small>${suffix}</small>`;
  });
}
billingOptions.forEach(button=>button.addEventListener('click',()=>setBillingPeriod(button.dataset.period)));
