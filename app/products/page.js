'use client';
import {useState} from 'react';
import {Shell,A} from '../../components/Site';

const ps=[
  ['Dot Matrix Real Time Clock','dotmatrix.png','Industrial'],
  ['SmartTouch Button','smarttouch.jpg','Industrial'],
  ['Lift Controller',null,'Industrial'],
  ['USB To Serial Converter',null,'Embedded'],
  ['CAN To RS232',null,'Embedded'],
  ['USB To GPIO','GPIO.jpg','Embedded'],
  ['Customized Timer / Counter',null,'Industrial'],
  ['pH Meter','phmeter.jpg','Instrumentation'],
  ['Flow Totalizer (16x2 LCD)',null,'Instrumentation'],
  ['Flow Totalizer (7 Segment)',null,'Instrumentation'],
  ['ORP Meter','okrpmeter.jpg','Instrumentation'],
  ['TDS Meter','tdsmeter.jpg','Instrumentation'],
  ['Solar Powered LED Street Light','streetlight.jpg','Solar'],
  ['Solar Powered Lantern','lantern.png','Solar'],
  ['Solar Charge Controller',null,'Solar'],
  ['Solar Charge Controller Cum LED Driver',null,'Solar'],
  ['SLCC-12W',null,'Solar'],
  ['SLCC-9W',null,'Solar'],
  ['Home Lighting System','homelighting.jpg','Solar'],
  ['MPPT Charge Controller 10A','mppt.jpg','Solar'],
  ['Leak Tester',null,'Automation'],
  ['Temperature Profile Manager',null,'Automation'],
  ['AC Data Logger',null,'Automation'],
  ['DC Data Logger',null,'Automation']
];

function ProductVisual({product,image,category}){
  if(image){
    return <img src={A+image} alt={product} loading="lazy"/>;
  }
  return <div className="productFallback" aria-label={`${product} product visual coming soon`}>
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <path d="M20 55H90V105H160V60H300M55 185V145H130V175H230V115H300"/>
      <circle cx="90" cy="55" r="5"/><circle cx="90" cy="105" r="5"/><circle cx="160" cy="105" r="5"/><circle cx="160" cy="60" r="5"/><circle cx="130" cy="145" r="5"/><circle cx="230" cy="175" r="5"/>
    </svg>
    <span>IABEX / {category}</span>
    <strong>{product}</strong>
  </div>;
}

export default function Products(){
  const [f,setF]=useState('All');
  const cats=['All','Industrial','Embedded','Instrumentation','Solar','Automation'];
  const shown=ps.filter(p=>f==='All'||p[2]===f);
  return <Shell><main className="sub">
    <section className="subHero"><div className="kicker">PRODUCTS / SERVICES</div><h1>Hardware engineered<br/><em>for the real world.</em></h1><p>Industrial electronics · Embedded systems · Automation</p></section>
    <section className="catalog">
      <div className="filters">{cats.map(c=><button className={f===c?'active':''} onClick={()=>setF(c)} key={c}>{c}</button>)}</div>
      <div className="productGrid">{shown.map((p,i)=><article className="productCard reveal seen" key={p[0]}>
        <div className={'productImg '+(!p[1]?'hasFallback':'')}><ProductVisual product={p[0]} image={p[1]} category={p[2]}/><span>{p[2]}</span></div>
        <small>PRODUCT {String(i+1).padStart(2,'0')}</small><h2>{p[0]}</h2><p>Engineered by IABEX for reliable, production-ready industrial deployment.</p><a href={`mailto:info@iabex.in?subject=${encodeURIComponent(p[0]+' enquiry')}`}>Request specifications <b>↗</b></a>
      </article>)}</div>
    </section>
  </main></Shell>;
}
