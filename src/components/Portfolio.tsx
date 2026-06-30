'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.gsap = gsap;
    let ctx = gsap.context(() => {
      try {
        
const PHOTOS = [
  {id:"p1",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547a0be6c9f95b9414d7_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547a0be6c9f95b9414d7_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547cd450f2e5c62aadc0_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254798052b337ca27138f_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547ce557403980ddc0f9_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547c8052b337ca271486_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547c37065b8b0455fc48_6.png"],title:"Client Management",cat:"saas",year:"2024",role:"SaaS Product Design / UX Strategy",tags:["Dashboard Design","CRM Design","Design System","Figma"],overview:"A client management platform designed to help service businesses track relationships, tasks, and communications in one unified place. The challenge was reducing cognitive load across a data-heavy interface without losing depth.",process:"We mapped the core user journey from lead to active client, identifying where friction caused drop-off. Information architecture was restructured around the most frequent actions rather than database categories.",outcome:"A clean, actionable dashboard with role-based views, an activity timeline, and a smart filter system — all shipped within a single design engagement.",lx:4,ly:12,lw:22,ar:"16/10"},
  {id:"p2",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548ddc4295c73da78df3_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548ddc4295c73da78df3_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548b4d2a85af0bc22998_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548c795b1b6915f0e8e9_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548d3f505cd8385415e4_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548dd450f2e5c62ab817_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32548e37065b8b0456041d_6.png"],title:"E-Wallet",cat:"product",year:"2024",role:"Product Design / Mobile UX",tags:["Mobile App","Fintech","Interaction Design","Prototyping"],overview:"A mobile e-wallet designed for everyday transactions — from peer-to-peer transfers to bill payments. The goal was to make financial actions feel fast and trustworthy without overwhelming the user.",process:"We conducted usability research with first-time digital wallet users to understand trust barriers. Every flow was stripped back to the minimum steps required to complete a transaction.",outcome:"A clean, gesture-driven interface with real-time balance feedback, one-tap transfers, and a transaction history that surfaces what matters most.",lx:30,ly:8,lw:18,ar:"9/16"},
  {id:"p3",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b5f8f9cd0502c14281_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b5f8f9cd0502c14281_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b537065b8b04562e30_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b3036d5fa8d0ee926b_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b3110e273cf10aae5f_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b2ed6be038e64ba4be_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254b5ec85e3dca2b33b17_6.png"],title:"Kraftelite Logo",cat:"Brand Identity",year:"2025",role:"Brand Identity / Logo Design",tags:["Logo Design","Typography","Brand Guidelines","Visual Identity"],overview:"Internal rebrand for Kraftelite design studio specialising in UX, UI, video editing, and graphic design. Existing logo failed at small sizes and no longer represented the studio's quality of work.",process:"Audited existing mark failures legibility at small sizes, poor brand representation. Explored multiple directions. Built for versatility clean geometry, deliberate weight, holds integrity from favicon to large format. Full design system followed with brand book.",outcome:"Complete identity refresh primary mark, responsive variants, colour system, typography pairing, and full brand book covering all touchpoints.",lx:52,ly:18,lw:20,ar:"4/3"},
  {id:"p4",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a9e557403980dddcd5_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a9e557403980dddcd5_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254aa44be990d9b69a1db_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a9555321906a0b4ce2_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a97fef825d58c429c6_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a97fef825d58c4294f_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254ab036d5fa8d0ee8f31_6.png"],title:"Priority Ping",cat:"landing",year:"2024",role:"Landing Page Design / Webflow Development",tags:["Webflow","Conversion Design","Copywriting","Motion Design"],overview:"Blockchain-powered platform where senders pay a fee to guarantee their message gets read. Built for people receiving 100+ messages daily who can't engage with all of them. Client specifically needed illustration to explain the concept.",process:"Full-page design & developed with custom illustration for each section one step in a visual explanation, guiding user from problem to solution to action. Built and shipped in",outcome:"Launched with a Binance executive testimonial as credibility anchor. Illustration-led approach made an unfamiliar concept immediately intuitive.",lx:77,ly:6,lw:24,ar:"16/9"},
  {id:"p5",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32544544be990d9b6941e4_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32544544be990d9b6941e4_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325446d3065c8d2108a583_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254459f24618c2e8b8c7e_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325444f8f9cd0502c0ffa6_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325445ce8b7f1834d57ed7_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254477f3987deedfccbc5_6.png"],title:"Ramdoot Restore",cat:"product",year:"2025",role:"Product Design / Mobile UX",tags:["Mobile App","Magazine","Interaction Design","User Research"],overview:"Temple restoration NGO building a web platform for their flagship magazine covering Indian temple history, architecture, and cultural evidence. Three user types: Reader, Influencer, Admin.",process:"Verified existing client research. Wireframes → User flows → Design system → 100+ screens. Razorpay integrated for reader subscriptions and direct influencer payouts. Separate role-specific experiences for all three user types.",outcome:"1,000 users on soft launch. A/B tested mobile magazine reading experience restructured flow significantly improved mobile engagement. Article feed format with PDF download option. Admin dashboard and influencer payout system shipped within single engagement.",lx:6,ly:54,lw:16,ar:"9/16"},
  {id:"p6",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482555321906a0b334f_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482555321906a0b334f_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482931fb2f64c7d311b_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482110e273cf10a5c41_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325481fcbcdabda981e9fa_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325482e557403980ddc362_5.png"],title:"SHRED",cat:"app",year:"2024",role:"App Design / Fitness Platform",tags:["iOS Design","Fitness","Component Library","Interaction Design"],overview:"Blockchain platform offering stable yield in a volatile market. Users deposit tokens, lock for a tenure, watch returns grow in real time. Covered both marketing landing page and live webapp.",process:"One-on-one sessions with founding team. Sprint-based delivery. Enriched user journey from waitlist signup through to depositing into the application — adding clarity and confidence cues at each step.",outcome:"18,000 waitlist signups within 24 hours of product announcement.",lx:27,ly:52,lw:20,ar:"9/16"},
  {id:"p7",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549e3da864ec36d4f2c3_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549e3da864ec36d4f2c3_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549c5dcbc5e7ec737311_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549df8f9cd0502c1360d_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549bce8b7f1834d5b1bc_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549d4f8dc7c7528299c8_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549dd534b1efa7b811cd_6.png"],title:"SHRED Social",cat:"graphic",year:"2025",role:"Social Media Design / Art Direction",tags:["Social Media","Content Design","Art Direction","Brand Collateral"],overview:"9-month social media retainer following the website engagement. Built consistent visual presence explaining a complex blockchain product to both crypto-native and first-time DeFi users.",process:"Monthly content sprints aligned to product roadmap. Static posts for daily presence, GIFs for feature highlights, explainer videos for product education. 3D and 2D motion for major announcements.",outcome:"100+ assets delivered across 9 months. Launch video hit 249K views on Twitter 5K reposts, 5.9K likes, 1K comments.",lx:52,ly:55,lw:22,ar:"4/3"},
  {id:"p8",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a1ec85e3dca2b332ec_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a1ec85e3dca2b332ec_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a15dcbc5e7ec7375a2_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a444be990d9b699ec0_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a1931fb2f64c7d6710_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a2931fb2f64c7d6772_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254a4931fb2f64c7d6828_6.png"],title:"Squid Crew",cat:"brand",year:"2024",role:"Brand Identity / Visual System",tags:["Brand Strategy","Logomark","Illustration","Typography"],overview:"SaaS platform for freelancers and startups connecting 100+ business tools — communication, payments, invoicing — into one centralised workspace. Core challenge: make managing a full business stack feel like one product, not many tools.",process:"Exploration phase mapping how target users context-switch daily. Design system established early for consistency across complex multi-module product. End-to-end design covering onboarding, app connection, unified dashboard, communication, invoicing, and payment modules.",outcome:"Fully designed end-to-end SaaS with scalable design system. Single coherent workspace reducing cognitive load of multi-tool business management.",lx:78,ly:50,lw:19,ar:"4/3"},
  {id:"p9",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549533e2ba8a35e5b07e_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32549533e2ba8a35e5b07e_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254964f8dc7c75282969a_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254939ab29606a9649655_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254958052b337ca2723b2_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254963c46c1011218f00c_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325496fcbcdabda981f320_6.png"],title:"EDGE",cat:"saas",year:"2024",role:"SaaS Design / Network Platform",tags:["Dashboard Design","Data Visualisation","Design System","Figma"],overview:"Edge DeFi platform with three core modules Vaults, Staking, Stability Pool — supporting WESD, USDT, and EUSD. Challenge was making complex on-chain mechanics feel structured without losing depth for experienced DeFi users.",process:"Dashboard complexity was the core challenge. Design system established early. Information hierarchy rebuilt around most frequent user actions — depositing, monitoring positions, withdrawing. Three modules unified under one coherent interface.",outcome:"Fully designed DeFi SaaS with scalable design system across all three modules. Single dashboard bringing clarity to a technically dense product.",lx:104,ly:10,lw:21,ar:"16/10"},
  {id:"p10",src:"https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325478d5d27325522da347_1.png",images:["https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325478d5d27325522da347_1.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a3254733c46c1011218d9f7_2.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a32547500603d6606752b60_3.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325473931fb2f64c7d28f8_4.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325472d534b1efa7b7d79d_5.png","https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a325473f8f9cd0502c11d61_6.png"],title:"Wizplay",cat:"product",year:"2024",role:"Product Design / Gaming Platform",tags:["Gaming","Mobile App","Interaction Design","Component Library"],overview:"Wizplay is a casual gaming platform designed for the Indian market — bringing together classic card and board games with a social layer built for communities who play together daily.",process:"Conducted sessions with frequent players across age groups to understand what kept them coming back. Social mechanics and table-side rituals were translated into digital interaction patterns.",outcome:"A mobile-first platform with persistent game rooms, live voice, and a loyalty system — shipping to 50,000 beta users with a 4-day rolling retention rate of 62%.",lx:130,ly:20,lw:20,ar:"9/16"},
];
const isMobileView = window.innerWidth <= 768;
  
/* STAGE */
function getPhotoScale(){
  const w = window.innerWidth;
  if(w <= 480) return 1.7;
  if(w <= 768) return 1.85;
  if(w <= 1024) return 1.05;
  return 1;
}

// ── FIX 2: canvas width tightened to eliminate empty space after last project ──
const CANVAS_VW = 340;
const stage = document.getElementById('stage')!;
if (!stage) return;
if(!isMobileView){
  stage.style.width = CANVAS_VW + 'vw';
}

const introScreen = document.createElement('div');
introScreen.id = 'intro-screen';
introScreen.innerHTML = `
  <div id="intro-svg-wrap">
    <svg id="intro-svg" viewBox="0 0 547 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.79261e-05 92.4668L27.5223 2.39404H52.9178L80.44 92.4668H62.9259L38.4061 13.0276H41.6587L17.5142 92.4668H6.79261e-05ZM16.5134 73.7016V57.8138H64.0518V73.7016H16.5134ZM105.091 92.4668V18.2819H76.6929V2.39404H150.502V18.2819H122.105V92.4668H105.091ZM160.555 92.4668V2.39404H177.568V39.424H217.851V2.39404H234.865V92.4668H217.851V55.3118H177.568V92.4668H160.555ZM341.018 95.5185C337.559 95.5185 334.304 94.7047 331.253 93.0771C328.404 91.4496 326.268 88.3979 324.844 83.922C324.234 82.091 323.928 79.5479 323.928 76.2927C323.928 71.8169 324.539 66.8325 325.759 61.3394C326.98 55.8463 328.303 51.167 329.727 47.3015C328.709 47.7084 326.777 49.5394 323.928 52.7946C321.284 55.8463 317.927 59.6101 313.858 64.0859C309.992 68.3583 305.618 72.7324 300.735 77.2083C296.056 81.4807 291.173 85.041 286.087 87.8892C281.001 90.7375 276.017 92.1616 271.134 92.1616C267.879 92.1616 264.42 91.2461 260.758 89.4151C257.096 87.3806 254.146 84.8375 251.908 81.7858C248.856 77.7169 247.331 73.5462 247.331 69.2738C247.331 63.7807 249.162 58.0842 252.824 52.1843C256.689 46.2843 261.572 40.5878 267.472 35.0947C273.575 29.3982 279.984 24.312 286.698 19.8362C293.615 15.1569 300.125 11.2914 306.229 8.23967C312.535 4.98452 317.622 2.84832 321.487 1.83109C325.556 0.610409 330.134 6.91835e-05 335.22 6.91835e-05C338.068 6.91835e-05 341.018 0.406961 344.07 1.22075C347.121 1.83109 349.665 2.95005 351.699 4.57763C353.327 5.39142 354.649 6.51038 355.666 7.93451C356.683 9.35864 357.192 10.8845 357.192 12.5121C357.192 14.1396 356.48 14.6483 355.056 14.0379C353.428 11.5966 351.19 10.0707 348.342 9.46036C345.697 8.64657 342.951 8.23967 340.102 8.23967C331.965 8.23967 323.013 10.8845 313.247 16.1741C303.482 21.4637 294.734 27.6689 287.003 34.7895C284.561 36.824 281.205 40.3843 276.932 45.4705C272.863 50.3532 269.099 55.7446 265.641 61.6446C262.182 67.5445 260.453 72.9359 260.453 77.8186C260.453 80.4634 261.165 82.8031 262.589 84.8375C263.403 86.2617 264.725 86.9737 266.556 86.9737C269.405 86.9737 273.168 85.4479 277.848 82.3962C282.73 79.3445 287.715 75.6824 292.801 71.41C297.887 66.9342 302.465 62.6618 306.534 58.5928C310.806 54.5239 313.858 51.5739 315.689 49.7429C316.706 48.7257 318.639 46.6912 321.487 43.6395C324.539 40.3843 327.794 36.9257 331.253 33.2637C334.711 29.6016 337.763 26.4482 340.408 23.8034C343.256 21.1586 345.087 19.8362 345.901 19.8362C346.918 19.8362 348.546 20.1413 350.783 20.7517C353.225 21.1586 355.259 21.8706 356.887 22.8879C358.514 23.9051 358.82 25.2275 357.802 26.8551C352.513 34.5861 348.24 42.724 344.985 51.2687C341.934 59.6101 340.102 66.2221 339.492 71.1048C339.289 71.9186 339.187 72.7324 339.187 73.5462C339.187 74.1566 339.187 74.8686 339.187 75.6824C339.187 83.8203 342.035 87.8892 347.732 87.8892C350.783 87.8892 354.852 86.0582 359.939 82.3962C365.025 78.7341 370.213 74.36 375.502 69.2738C380.792 64.1876 385.573 59.3049 389.845 54.6256C394.321 49.7429 397.373 46.0808 399 43.6395C399.611 43.0291 400.221 42.724 400.831 42.724C401.645 42.724 402.357 43.1309 402.968 43.9447C403.578 44.555 403.578 45.3688 402.968 46.386C400.73 50.0481 397.475 54.4222 393.202 59.5084C388.93 64.5945 384.149 69.6807 378.859 74.7669C373.57 79.8531 368.382 84.2272 363.295 87.8892C360.651 89.9237 357.294 91.653 353.225 93.0771C349.156 94.7047 345.087 95.5185 341.018 95.5185ZM390.706 92.4668V2.39404H428.737C429.613 2.39404 430.78 2.43574 432.24 2.51914C433.741 2.56084 435.075 2.68595 436.243 2.89445C441.622 3.72845 446.022 5.50072 449.441 8.21124C452.902 10.9218 455.446 14.3412 457.072 18.4695C458.699 22.5562 459.512 27.1223 459.512 32.1681C459.512 39.7159 457.635 46.1794 453.882 51.5588C450.129 56.8964 444.249 60.1907 436.243 61.4417L428.737 61.9421H407.72V92.4668H390.706ZM441.497 92.4668L423.733 55.8122L441.247 52.4345L460.763 92.4668H441.497ZM407.72 46.0543H427.986C428.862 46.0543 429.821 46.0126 430.864 45.9292C431.906 45.8458 432.865 45.679 433.741 45.4288C436.034 44.8033 437.807 43.7608 439.058 42.3013C440.309 40.8001 441.164 39.1529 441.622 37.3598C442.123 35.525 442.373 33.7944 442.373 32.1681C442.373 30.5418 442.123 28.8321 441.622 27.039C441.164 25.2041 440.309 23.557 439.058 22.0975C437.807 20.5962 436.034 19.5329 433.741 18.9074C432.865 18.6572 431.906 18.4904 430.864 18.407C429.821 18.3236 428.862 18.2819 427.986 18.2819H407.72V46.0543ZM493.905 92.4668L466.382 2.39404H483.897L506.415 76.4539L529.308 2.39404H546.822L519.3 92.4668H493.905Z"/>
    </svg>
  </div>
  <div id="intro-image-wrap">
    <img id="intro-image" src="https://cdn.prod.website-files.com/683316d8cf0a6a7db42fa797/6a27d0e84cb71fd13f34c932_Portfolio%20Cards%20%5BRecovered%5D.png" alt="Portfolio Cards" draggable="false"/>
  </div>
  <div id="intro-hint">Scroll to explore →</div>
`;
stage.insertBefore(introScreen, stage.firstChild);

const photoEls: Record<string, { el: HTMLDivElement; p: any }> = {};
let mobileGridEl: HTMLDivElement | null = null;

if(isMobileView){
  mobileGridEl = document.createElement('div');
  mobileGridEl.id = 'mobile-grid';
  PHOTOS.forEach((p,i)=>{
    const el = document.createElement('div');
    el.className = 'photo';
    el.dataset.id = p.id;
    el.dataset.cat = p.cat;
    el.style.cssText = `z-index:${10+i};opacity:0;`;
    el.innerHTML = `<img src="${p.src}" alt="${p.title}" draggable="false"/>
      <div class="photo-label">
        <span class="mobile-title">${p.title}</span>
        <span class="mobile-meta">[${p.year}]&nbsp;&nbsp;[${p.cat}]</span>
      </div>`;
    if (mobileGridEl) {
      mobileGridEl.appendChild(el);
    }
    photoEls[p.id] = {el, p};
  });
  if (mobileGridEl) {
    stage.appendChild(mobileGridEl); // sits right after intro-screen, before outro
  }
} else {
  const s = getPhotoScale();
  PHOTOS.forEach((p,i) => {
    const el = document.createElement('div');
    el.className = 'photo';
    el.dataset.id = p.id;
    el.dataset.cat = p.cat;
    el.style.cssText = `left:${p.lx + 100}vw;top:${p.ly}vh;width:${p.lw * s}vw;z-index:${10+i};opacity:0;`;
    el.innerHTML = `<img src="${p.src}" alt="${p.title}" draggable="false"/>
      <div class="photo-label">${p.title}<br>[${p.cat}]&nbsp;&nbsp;[${p.year}]</div>`;
    stage.appendChild(el);
    photoEls[p.id] = {el, p};
  });
}


// ── FIX 2: outro placed at 260vw — tight against last project ──
const outroScreen = document.createElement('div');
outroScreen.id = 'outro-screen';

outroScreen.innerHTML = `
  <div id="outro-contact">
    <span class="outro-greeting">It's a pleasure to meet you!</span>
    <div class="outro-polaroid-cluster">
      <div class="outro-polaroid op1"><img src="https://picsum.photos/seed/ak1/200/220" alt=""/></div>
      <div class="outro-polaroid op2"><img src="https://picsum.photos/seed/ak2/220/240" alt=""/></div>
      <div class="outro-polaroid op3"><img src="https://picsum.photos/seed/ak3/190/210" alt=""/></div>
      <div class="outro-polaroid op4"><img src="https://picsum.photos/seed/ak4/176/200" alt=""/></div>
      <div class="outro-polaroid op5"><img src="https://picsum.photos/seed/ak5/210/230" alt=""/></div>
      <div class="outro-polaroid op6"><img src="https://picsum.photos/seed/ak6/180/215" alt=""/></div>
      <div class="outro-polaroid op7"><img src="https://picsum.photos/seed/ak7/184/220" alt=""/></div>
      <span class="outro-name-tag">Atharv, 1998, Bombay</span>
      <div class="outro-underline"></div>
      <span class="outro-arrow">↓</span>
      <svg class="outro-clip" style="left:24px;top:240px;width:22px;height:44px;" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2C6.58 2 3 5.58 3 10v22c0 5.52 4.48 10 10 10s10-4.48 10-10V8" stroke="#d42b2b" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M11 6C8.24 6 6 8.24 6 11v21c0 2.76 2.24 5 5 5s5-2.24 5-5V10" stroke="#d42b2b" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
      <svg class="outro-clip" style="right:40px;top:60px;width:18px;height:38px;" viewBox="0 0 22 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2C6.58 2 3 5.58 3 10v22c0 5.52 4.48 10 10 10s10-4.48 10-10V8" stroke="#b8922a" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M11 6C8.24 6 6 8.24 6 11v21c0 2.76 2.24 5 5 5s5-2.24 5-5V10" stroke="#b8922a" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
      <svg class="outro-scribble" style="right:14px;top:310px;width:40px;height:40px;" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 20c3-8 10-14 16-10s4 14-2 16-12-2-10-8 8-8 12-4" stroke="#1a3ae3" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
      <svg class="outro-scribble" style="right:10px;bottom:40px;width:36px;height:44px;" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="#1a3ae3" stroke-width="1.5" fill="none"/><circle cx="8" cy="20" r="6" stroke="#1a3ae3" stroke-width="1.5" fill="none"/><line x1="13" y1="10" x2="30" y2="36" stroke="#1a3ae3" stroke-width="1.5" stroke-linecap="round"/><line x1="13" y1="18" x2="30" y2="36" stroke="#1a3ae3" stroke-width="1.5" stroke-linecap="round"/></svg>
      <div class="outro-location-tag">Location:<br><span style="text-decoration:line-through;color:#aaa;">Mumbai</span> Bombay, India</div>
    </div>
    <div class="outro-divider"></div>
    <span class="outro-reach">This protfolio has been createad with the help of AI, The main reason to create this is to explore how can we use AI in day to day life of a product designers & to make tings more smoother.</span>
    
`;
if(isMobileView){
  stage.appendChild(outroScreen); // flows after the grid
} else {
  document.body.appendChild(outroScreen); // fixed overlay, zone-triggered
}

/* WEBGL CLOTH DISTORTION */
const glCanvas = document.getElementById('glcanvas') as HTMLCanvasElement | null;
const gl = glCanvas?.getContext('webgl', {alpha:true, premultipliedAlpha:false}) ?? null;
function resizeGL(){
  if (!glCanvas) return;
  glCanvas.width=window.innerWidth;
  glCanvas.height=window.innerHeight;
  if(gl) gl.viewport(0,0,glCanvas.width,glCanvas.height);
}
resizeGL();
window.addEventListener('resize',resizeGL);

const VERT_SRC=`
  attribute vec2 aPos;attribute vec2 aUV;
  uniform vec2 uOffset,uPos,uSize,uRes;
  varying vec2 vUV,vOffset;
  #define PI 3.14159265358979
  void main(){
    vUV=aUV;vOffset=uOffset;
    float bendX=sin(aUV.y*PI)*uOffset.x;
    float bendY=sin(aUV.x*PI)*uOffset.y;
    vec2 worldPos=uPos+(aPos+vec2(bendX,bendY))*uSize;
    vec2 clip=(worldPos/uRes)*2.0-1.0;
    clip.y=-clip.y;
    gl_Position=vec4(clip,0.0,1.0);
  }`;
const FRAG_SRC=`
  precision mediump float;
  uniform sampler2D uTex;uniform float uAlpha;
  varying vec2 vUV,vOffset;
  void main(){
    float r=texture2D(uTex,vUV+vOffset*0.4).r;
    float g=texture2D(uTex,vUV).g;
    float b=texture2D(uTex,vUV-vOffset*0.2).b;
    gl_FragColor=vec4(r,g,b,uAlpha);
  }`;

function compileShader(t: number, s: string) {
  if (!gl) return null;
  const sh = gl.createShader(t);
  if (!sh) return null;
  gl.shaderSource(sh, s);
  gl.compileShader(sh);
  return sh;
}
function mkProg(v: string, f: string) {
  if (!gl) return null;
  const p = gl.createProgram();
  if (!p) return null;
  const vertShader = compileShader(gl.VERTEX_SHADER, v);
  const fragShader = compileShader(gl.FRAGMENT_SHADER, f);
  if (!vertShader || !fragShader) return null;
  gl.attachShader(p, vertShader);
  gl.attachShader(p, fragShader);
  gl.linkProgram(p);
  return p;
}

let glReady=false;
let glProg: WebGLProgram | null = null;
let aPos_loc: number = -1;
let aUV_loc: number = -1;
let uOffset_loc: WebGLUniformLocation | null = null;
let uPos_loc: WebGLUniformLocation | null = null;
let uSize_loc: WebGLUniformLocation | null = null;
let uRes_loc: WebGLUniformLocation | null = null;
let uAlpha_loc: WebGLUniformLocation | null = null;
let uTex_loc: WebGLUniformLocation | null = null;
let quadVBO: WebGLBuffer | null = null;
let uvVBO: WebGLBuffer | null = null;
let indexBuf: WebGLBuffer | null = null;

function initGL(){
  if(!gl)return;
  glProg=mkProg(VERT_SRC,FRAG_SRC);
  if (!glProg) return;
  aPos_loc=gl.getAttribLocation(glProg,'aPos');
  aUV_loc=gl.getAttribLocation(glProg,'aUV');
  uOffset_loc=gl.getUniformLocation(glProg,'uOffset');
  uPos_loc=gl.getUniformLocation(glProg,'uPos');
  uSize_loc=gl.getUniformLocation(glProg,'uSize');
  uRes_loc=gl.getUniformLocation(glProg,'uRes');
  uAlpha_loc=gl.getUniformLocation(glProg,'uAlpha');
  uTex_loc=gl.getUniformLocation(glProg,'uTex');
  const SEGS=20;const verts=[],uvs=[],indices=[];
  for(let y=0;y<=SEGS;y++)for(let x=0;x<=SEGS;x++){
    verts.push(x/SEGS,y/SEGS);
    uvs.push(x/SEGS, y/SEGS);
  }
  for(let y=0;y<SEGS;y++)for(let x=0;x<SEGS;x++){
    const i=(y*(SEGS+1))+x;
    indices.push(i,i+1,i+SEGS+1,i+1,i+SEGS+2,i+SEGS+1);
  }
  quadVBO=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,quadVBO);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(verts),gl.STATIC_DRAW);
  uvVBO=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,uvVBO);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(uvs),gl.STATIC_DRAW);
  indexBuf=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuf);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  glReady=true;
}

const glMeshes: Array<{ imgEl: HTMLImageElement; photoEl: Element | null; tex: WebGLTexture | null; texLoaded: boolean; currentAlpha: number; targetAlpha: number; currentOffX: number; currentOffY: number }> = [];
function createGLMesh(imgEl: HTMLImageElement){
  if (!gl) return null;
  const tex=gl.createTexture();
  if (!tex) return null;
  gl.bindTexture(gl.TEXTURE_2D,tex);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));
  const mesh={imgEl,photoEl:imgEl.closest('.photo'),tex,texLoaded:false,currentAlpha:0,targetAlpha:0,currentOffX:0,currentOffY:0};
  const img=new Image();img.crossOrigin='anonymous';
  img.onload=()=>{gl.bindTexture(gl.TEXTURE_2D,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);mesh.texLoaded=true;};
  img.src=imgEl.src;
  glMeshes.push(mesh);return mesh;
}

const IDX_COUNT=20*20*6;
function renderGL(scrollVel: number, isHovering: boolean){
  if(!glReady||!gl||!glProg||!glCanvas||!uRes_loc||!uOffset_loc||!uPos_loc||!uSize_loc||!uAlpha_loc||!uTex_loc)return;
  gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(glProg);gl.uniform2f(uRes_loc,glCanvas.width,glCanvas.height);
  gl.bindBuffer(gl.ARRAY_BUFFER,quadVBO);gl.enableVertexAttribArray(aPos_loc);gl.vertexAttribPointer(aPos_loc,2,gl.FLOAT,false,0,0);
  gl.bindBuffer(gl.ARRAY_BUFFER,uvVBO);gl.enableVertexAttribArray(aUV_loc);gl.vertexAttribPointer(aUV_loc,2,gl.FLOAT,false,0,0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuf);gl.uniform1i(uTex_loc,0);gl.activeTexture(gl.TEXTURE0);
  glMeshes.forEach(mesh=>{
    if(!mesh.texLoaded)return;
    const r=mesh.imgEl.getBoundingClientRect();
    if(r.width<1||r.height<1)return;
    const isCat=mesh.photoEl&&mesh.photoEl.classList.contains('cat-hidden');
    const isHov=mesh.photoEl&&mesh.photoEl.classList.contains('hovered');
    if(projectOpen||aboutOpen){mesh.targetAlpha=0;}
    else if(isHovering){mesh.targetAlpha=isCat?0.08:(isHov?1.0:0.22);}
    else{mesh.targetAlpha=isCat?0.08:1.0;}
    mesh.currentAlpha+=(mesh.targetAlpha-mesh.currentAlpha)*0.07;
    const tOffX=-scrollVel*0.00045,tOffY=scrollVel*0.00018;
    mesh.currentOffX+=(tOffX-mesh.currentOffX)*0.11;
    mesh.currentOffY+=(tOffY-mesh.currentOffY)*0.11;
    gl.uniform2f(uOffset_loc,mesh.currentOffX,mesh.currentOffY);
    gl.uniform2f(uPos_loc,r.left,r.top);
    gl.uniform2f(uSize_loc,r.width,r.height);
    gl.uniform1f(uAlpha_loc,mesh.currentAlpha);
    gl.bindTexture(gl.TEXTURE_2D,mesh.tex);
    gl.drawElements(gl.TRIANGLES,IDX_COUNT,gl.UNSIGNED_SHORT,0);
  });
}

/* SCROLL */
let projectOpen=false,aboutOpen=false;
let targetX=0,currentX=0,prevX=0,scrollVel=0;
const maxX=()=>(CANVAS_VW-100)*window.innerWidth/100;
const progressOffset=()=>window.innerWidth;
const hBar=document.getElementById('h-progress-bar');
const canvasEl=document.getElementById('canvas');
if(!hBar||!canvasEl)return;
window.addEventListener('wheel',e=>{
  if(projectOpen||aboutOpen)return;
  e.preventDefault();
  targetX=Math.max(0,Math.min(targetX+(e.deltaY+e.deltaX)*0.9,maxX()));
},{passive:false});

let touchStartX=0,touchStartY=0,touchLastX=0,isTouchScrolling=false;
canvasEl.addEventListener('touchstart',e=>{
  if(projectOpen||aboutOpen)return;
  touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY;touchLastX=touchStartX;isTouchScrolling=false;
},{passive:true});
canvasEl.addEventListener('touchmove',e=>{
  if(projectOpen||aboutOpen)return;
  const dx=touchStartX-e.touches[0].clientX;const dy=touchStartY-e.touches[0].clientY;
  if(!isTouchScrolling && Math.abs(dx)>Math.abs(dy)*0.8) isTouchScrolling=true;
  if(isTouchScrolling){e.preventDefault();const delta=touchLastX-e.touches[0].clientX;targetX=Math.max(0,Math.min(targetX+delta*1.4,maxX()));touchLastX=e.touches[0].clientX;}
},{passive:false});
canvasEl.addEventListener('touchend',()=>{isTouchScrolling=false;},{passive:true});

let isHovering=false;
(function tick(){
  prevX=currentX;currentX+=(targetX-currentX)*0.1;scrollVel=currentX-prevX;
  if(!projectOpen&&!aboutOpen){stage.style.transform=`translateX(-${currentX}px)`;const scrollable=maxX()-progressOffset();const scrolled=Math.max(0,currentX-progressOffset());hBar.style.width=(scrollable>0?(scrolled/scrollable*100):0)+'%';}
  renderGL(scrollVel,isHovering);requestAnimationFrame(tick);
})();

/* CURSOR */
const curEl=document.getElementById('cursor')!,curRing=document.getElementById('cursor-ring')!,curCoords=document.getElementById('cursor-coords')!;
let mx=-200,my=-200,cx=-200,cy=-200,rx=-200,ry=-200;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
document.addEventListener('mousemove',e=>{
  const el=document.elementFromPoint(e.clientX,e.clientY);
  const onPhoto=!!(el&&el.closest&&el.closest('.photo'));
  const onMq=!!(el&&el.closest&&el.closest('.mq-card'));
  const onClick=!!(el&&(el.closest('button')||el.closest('a')));
  document.body.classList.toggle('cur-hover',onClick||onPhoto||onMq);
});
document.addEventListener('mousedown',()=>document.body.classList.add('cur-click'));
document.addEventListener('mouseup',()=>document.body.classList.remove('cur-click'));
(function animC(){
  cx+=(mx-cx)*0.22;cy+=(my-cy)*0.22;rx+=(mx-rx)*0.09;ry+=(my-ry)*0.09;
  curEl.style.left=cx+'px';curEl.style.top=cy+'px';
  curRing.style.left=rx+'px';curRing.style.top=ry+'px';
  curCoords.style.left=(cx+14)+'px';curCoords.style.top=(cy-42)+'px';
  requestAnimationFrame(animC);
})();
function makeCoord(){const la=Math.random()*180-90,lo=Math.random()*360-180;return `${Math.abs(la).toFixed(4)} deg ${la>=0?'N':'S'}\n${Math.abs(lo).toFixed(4)} deg ${lo>=0?'E':'W'}`;}
let coord=makeCoord();
setInterval(()=>{coord=makeCoord();curCoords.textContent=coord;},820);
curCoords.textContent=coord;

let hoveredEl: HTMLElement | null=null;
stage.addEventListener('mouseover',e=>{
  const photo=(e.target as Element).closest<HTMLElement>('.photo');
  if(!photo||projectOpen||aboutOpen)return;
  if(hoveredEl)hoveredEl.classList.remove('hovered');
  photo.classList.add('hovered');hoveredEl=photo;isHovering=true;
});
stage.addEventListener('mouseout',e=>{
  const photo=(e.target as Element).closest<HTMLElement>('.photo');
  if(!photo)return;
  if(!e.relatedTarget||!(e.relatedTarget as Element).closest('.photo')){if(hoveredEl){hoveredEl.classList.remove('hovered');hoveredEl=null;}isHovering=false;}
});

let touchTapStartX=0,touchTapStartY=0;
stage.addEventListener('touchstart',e=>{touchTapStartX=e.touches[0].clientX;touchTapStartY=e.touches[0].clientY;},{passive:true});
stage.addEventListener('touchend',e=>{
  const dx=Math.abs(e.changedTouches[0].clientX-touchTapStartX);const dy=Math.abs(e.changedTouches[0].clientY-touchTapStartY);
  if(dx>10||dy>10)return;
  const photo=(e.target as Element).closest<HTMLElement>('.photo');
  if(photo&&!projectOpen&&!aboutOpen) openProject(photo.dataset.id!);
},{passive:true});

/* TEXT SCRAMBLE */
class TextScramble{
  el: HTMLElement;
  chars: string;
  queue: Array<{to:string;start:number;end:number;char:string}> = [];
  frame = 0;
  raf = 0;
  resolve: () => void = () => {};
  constructor(el: HTMLElement){this.el=el;this.chars='!<>—_\\/[]{}=+*^?#@$%&';this.update=this.update.bind(this);}
  setText(text: string){
    this.queue=[];
    for(let i=0;i<text.length;i++){const to=text[i],start=Math.floor(i*1.1),end=start+Math.floor(Math.random()*12)+5;this.queue.push({to,start,end,char:''});}
    this.frame=0;cancelAnimationFrame(this.raf);
    return new Promise<void>(r=>{this.resolve=r;this.update();});
  }
  update(){
    let html='',done=0;
    for(const q of this.queue){
      if(this.frame>=q.end){done++;html+=q.to==='\n'?'<br>':(q.to===' '?' ':q.to);}
      else if(this.frame>=q.start){if(!q.char||Math.random()<0.3)q.char=this.chars[Math.floor(Math.random()*this.chars.length)];html+=`<span class="scramble-char">${q.to===' '?' ':q.char}</span>`;}
      else html+=q.to===' '?' ':'<span class="scramble-char">_</span>';
    }
    this.el.innerHTML=html;
    if(done===this.queue.length)this.resolve();
    else{this.raf=requestAnimationFrame(this.update);this.frame++;}
  }
}

/* PROJECT VIEW */
const projectView=document.getElementById('project-view')!;
const navProjTitle=document.getElementById('nav-proj-title')!;
const projMqStrip=document.getElementById('proj-marquee-strip')!;
const projContent=document.getElementById('proj-content')!;
let mqRAF=0,mqPaused=false,mqPos=0,mqSpeed=0.55,mqFullW=0;
const CAT_LABELS: Record<string, string>={brand:'Brand Identity',landing:'Landing Page Design',graphic:'Graphic Design',app:'App Design',packaging:'Packaging Design',saas:'SaaS Design',product:'Product Design'};

stage.addEventListener('click',e=>{
  const photo=(e.target as Element).closest<HTMLElement>('.photo');
  if(!photo||projectOpen||aboutOpen)return;
  openProject(photo.dataset.id!);
});

function openProject(id: string){
  const {p}=photoEls[id];
  projectOpen=true;
  const allPhotos=[...stage.querySelectorAll('.photo')];
  gsap.to(allPhotos,{opacity:0,y:-20,duration:0.45,ease:'power2.in',stagger:{amount:0.3,from:'random'},
    onComplete:()=>{
      buildProjectView(p);projectView.scrollTop=0;
      navProjTitle.textContent=`${p.title}  —  [${p.year}]`;
      document.body.classList.add('project-open');
      gsap.set(projectView,{opacity:0,pointerEvents:'auto'});
      gsap.to(projectView,{opacity:1,duration:0.45,ease:'power2.out',onComplete:()=>{
        projectView.classList.add('show');startMqLoop();animateContentIn();
      }});
    }
  });
  if(hoveredEl){hoveredEl.classList.remove('hovered');hoveredEl=null;}
  isHovering=false;
}

function buildProjectView(p: any){
  projMqStrip.innerHTML='';
  projMqStrip.classList.remove('has-hover');
  mqPos=0;mqFullW=0;mqPaused=false;

  const stripH=Math.round(Math.min(window.innerHeight*0.62,window.innerHeight-180));
  const allImgs=p.images as string[];

  // build TWO sets for seamless marquee loop
  function makeSet(){
    return allImgs.map((src: string,idx: number)=>{
      const m=src.match(/\/(\d+)\/(\d+)$/);
      const iW=m?parseInt(m[1]):900,iH=m?parseInt(m[2]):675;
      const cardW=Math.round((iW/iH)*stripH);
      const card=document.createElement('div');
      card.className='mq-card';
      card.dataset.idx=String(idx);
      card.style.cssText=`width:${cardW}px;height:${stripH}px;`;
      card.innerHTML=`<img src="${src}" alt="${p.title} ${idx+1}" draggable="false">`;
      return card;
    });
  }
  const set1=makeSet(),set2=makeSet();
  [...set1,...set2].forEach(c=>projMqStrip.appendChild(c));

requestAnimationFrame(()=>requestAnimationFrame(()=>{
    let w=0;
    set1.forEach(c=>{w+=c.offsetWidth+14;});
    mqFullW=w;
    // offset set2 to sit exactly after set1
    projMqStrip.style.width=(mqFullW*2)+'px';
    set2.forEach((c,i)=>{
      c.style.position='absolute';
      c.style.top='0';
      let offset=0;
      set1.slice(0,i).forEach(s=>{offset+=s.offsetWidth+14;});
      c.style.left=(offset+mqFullW)+'px';
    });
    gsap.to(set1,{opacity:1,y:0,duration:0.75,ease:'power3.out',stagger:{amount:0.55,from:'center'}});
    gsap.set(set2,{opacity:1,y:0});
  }));

  
  // draggable on top of marquee
  let isDragging=false,dragStartX=0,dragStartPos=0,dragVel=0,lastDragX=0,momentumRAF=0;
  let resumeTimeout=0;

function applyPos(x: number){
    if(mqFullW>0){
      while(x<=-mqFullW) x+=mqFullW;
      while(x>0) x-=mqFullW;
    }
    mqPos=x;
    projMqStrip.style.transform=`translateX(${mqPos}px)`;
  }

  projMqStrip.style.cursor='grab';

  // mouse
  projMqStrip.addEventListener('mousedown',e=>{
    cancelAnimationFrame(momentumRAF);
    clearTimeout(resumeTimeout);
    isDragging=true;
    mqPaused=true;
    dragStartX=e.clientX;
    dragStartPos=mqPos;
    lastDragX=e.clientX;
    dragVel=0;
    projMqStrip.style.cursor='grabbing';
    e.preventDefault();
  });
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    dragVel=e.clientX-lastDragX;
    lastDragX=e.clientX;
    let newPos=dragStartPos+(e.clientX-dragStartX);
    // wrap within double-set bounds
    if(mqFullW>0){
      newPos=((newPos%mqFullW)+mqFullW)%mqFullW*-1;
      newPos=dragStartPos+(e.clientX-dragStartX);
    }
    applyPos(newPos);
  });
  window.addEventListener('mouseup',()=>{
    if(!isDragging)return;
    isDragging=false;
    projMqStrip.style.cursor='grab';
    // momentum then resume marquee
    let vel=dragVel;
    (function momentum(){
      if(Math.abs(vel)<0.3){
        // resume auto-scroll after 800ms idle
        resumeTimeout=window.setTimeout(()=>{mqPaused=false;},800);
        return;
      }
      applyPos(mqPos+vel);
      vel*=0.94;
      momentumRAF=requestAnimationFrame(momentum);
    })();
  });

  // touch
  let touchStartXS=0,touchStartPos=0;
  projMqStrip.addEventListener('touchstart',e=>{
    cancelAnimationFrame(momentumRAF);
    clearTimeout(resumeTimeout);
    mqPaused=true;
    touchStartXS=e.touches[0].clientX;
    touchStartPos=mqPos;
    dragVel=0;lastDragX=e.touches[0].clientX;
  },{passive:true});
  projMqStrip.addEventListener('touchmove',e=>{
    dragVel=e.touches[0].clientX-lastDragX;
    lastDragX=e.touches[0].clientX;
    applyPos(touchStartPos+(e.touches[0].clientX-touchStartXS));
  },{passive:true});
  projMqStrip.addEventListener('touchend',()=>{
    let vel=dragVel;
    (function momentum(){
      if(Math.abs(vel)<0.3){
        resumeTimeout=window.setTimeout(()=>{mqPaused=false;},800);
        return;
      }
      applyPos(mqPos+vel);
      vel*=0.94;
      momentumRAF=requestAnimationFrame(momentum);
    })();
  },{passive:true});

  // build text content
  projContent.innerHTML='';
  const sections: Array<{label:string;text:string}>=[{label:'Overview',text:p.overview},{label:'Process',text:p.process},{label:'Outcome',text:p.outcome}];
  let html=`<div class="proj-meta"><div><div class="proj-meta-title"><span class="proj-meta-title-inner">${p.title}</span></div><div class="proj-role">${p.role}</div></div><div class="proj-meta-right"><div class="proj-meta-year">[${p.year}]</div><div class="proj-meta-cat">${CAT_LABELS[p.cat]||p.cat}</div></div></div>`;
  sections.forEach((s,si)=>{
    html+=`<div class="proj-section" data-delay="${si*90}"><div class="proj-section-label">${s.label}</div><div class="proj-section-body" id="projbody-${si}"></div></div>`;
    if(si<sections.length-1)html+=`<div class="proj-divider" data-delay="${si*90+50}"></div>`;
  });
  html+=`<div class="proj-section" data-delay="280"><div class="proj-section-label">Deliverables</div><div class="proj-tags">${(p.tags as string[]).map((t:string,ti:number)=>`<span class="proj-tag" data-delay="${300+ti*55}">${t}</span>`).join('')}</div></div>`;
  projContent.innerHTML=html;
  sections.forEach((s,si)=>{const el=document.getElementById(`projbody-${si}`);if(el)setTimeout(()=>new TextScramble(el).setText(s.text),600+si*280);});
}


function animateContentIn(){
  projContent.querySelectorAll<HTMLElement>('.proj-section,.proj-divider').forEach(el=>{const delay=+(el.dataset.delay||0);setTimeout(()=>el.classList.add('in'),delay+200);});
  setTimeout(()=>{projContent.querySelectorAll<HTMLElement>('.proj-tag').forEach(el=>{const delay=+(el.dataset.delay||0);setTimeout(()=>el.classList.add('in'),delay);});},300);
}

function startMqLoop(){
  cancelAnimationFrame(mqRAF);
  (function loop(){
    if(!mqPaused && mqFullW>0){
      mqPos-=mqSpeed;
      if(mqPos<=-mqFullW) mqPos+=mqFullW;
      projMqStrip.style.transform=`translateX(${mqPos}px)`;
    }
    mqRAF=requestAnimationFrame(loop);
  })();
}


function closeProject(){
  cancelAnimationFrame(mqRAF);projectOpen=false;
  gsap.to(projectView,{opacity:0,duration:0.4,ease:'power2.in',onComplete:()=>{
    projectView.classList.remove('show');projectView.style.pointerEvents='none';projectView.style.opacity='';
    projMqStrip.innerHTML='';projContent.innerHTML='';
    document.body.classList.remove('project-open');navProjTitle.textContent='';
    const allPhotos=[...stage.querySelectorAll('.photo')];
    gsap.fromTo(allPhotos,{opacity:0,y:20},{opacity:1,y:0,duration:0.55,ease:'power3.out',stagger:{amount:0.4,from:'random'}});
  }});
}

/* ABOUT */
const aboutOverlay=document.getElementById('about-overlay')!;
const aboutBtn=document.getElementById('nav-about-btn')!;
const aboutCloseX=document.getElementById('about-close-x')!;
const aboutBio1El=document.getElementById('about-bio-1')!;
const aboutBio2El=document.getElementById('about-bio-2')!;
const bioScramble1=new TextScramble(aboutBio1El);
const bioScramble2=new TextScramble(aboutBio2El);
const BIO_TEXT_1=`With 8+ years of experience in design, I have worked with both industry-leading web3 projects and consumer startups — across brand identity, SaaS products, landing pages, and mobile apps.`;
const BIO_TEXT_2=`Focused on No-Code development — Shopify, Webflow, Framer — and Interface Design for apps, websites, and SaaS & PaaS platforms.I have worked with TedxGateway, Pulse Chain, Hex Chain, Quranium, Rektify AI, etc.`;

aboutBtn.addEventListener('click',()=>{if(!aboutOpen)openAbout();else closeAbout();});
aboutCloseX.addEventListener('click',closeAbout);

function openAbout(){
  aboutOpen=true;
  const allPhotos=[...stage.querySelectorAll('.photo')];
  gsap.to(allPhotos,{opacity:0,y:-16,duration:0.4,ease:'power2.in',stagger:{amount:0.28,from:'random'}});
  aboutOverlay.classList.add('show');
  setTimeout(()=>bioScramble1.setText(BIO_TEXT_1),460);
  setTimeout(()=>bioScramble2.setText(BIO_TEXT_2),780);
}
function closeAbout(){
  aboutOpen=false;aboutOverlay.classList.remove('show');
  aboutBio1El.innerHTML='';aboutBio2El.innerHTML='';
  const allPhotos=[...stage.querySelectorAll('.photo')];
  setTimeout(()=>{gsap.fromTo(allPhotos,{opacity:0,y:16},{opacity:1,y:0,duration:0.5,ease:'power3.out',stagger:{amount:0.35,from:'random'}});},300);
}

/* FILTER */
let filterOpen=false,activeCat: string | null=null;
const filterToggleBtn=document.getElementById('filter-toggle-btn')!;
const filterCol=document.getElementById('filter-col')!;
const catBtns=[...document.querySelectorAll<HTMLElement>('.cat-btn')];
filterToggleBtn.addEventListener('click',()=>{
  filterOpen=!filterOpen;
  filterToggleBtn.classList.toggle('is-open',filterOpen);
  if(filterOpen){[...catBtns].reverse().forEach((b,i)=>{b.style.transitionDelay=`${i*45}ms`;b.classList.add('show');});}
  else{catBtns.forEach(b=>{b.style.transitionDelay='0ms';b.classList.remove('show','active');});activeCat=null;filterCol.classList.remove('has-active');stage.querySelectorAll('.photo').forEach(el=>el.classList.remove('cat-hidden'));}
});
catBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const cat=btn.dataset.cat;
    if(!cat)return;
    if(activeCat===cat){activeCat=null;btn.classList.remove('active');filterCol.classList.remove('has-active');stage.querySelectorAll<HTMLElement>('.photo').forEach(el=>el.classList.remove('cat-hidden'));}
    else{activeCat=cat;catBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');filterCol.classList.add('has-active');stage.querySelectorAll<HTMLElement>('.photo').forEach(el=>{el.classList.toggle('cat-hidden',el.dataset.cat!==cat);});}
  });
});

/* [Case studies] btn — scroll to first project */
document.getElementById('nav-casestudy-btn')!.addEventListener('click',()=>{
  if(projectOpen||aboutOpen)return;
  targetX = Math.min(window.innerWidth * 1.05, maxX());
});

/* ESC */
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if(projectOpen)closeProject();
  else if(aboutOpen)closeAbout();
  else if(filterOpen)filterToggleBtn.click();
});

/* REVEAL + INIT GL */
/* REVEAL + INIT GL */
function revealCanvas(){
  if(!isMobileView){ initGL(); }
  setTimeout(()=>{
    document.getElementById('intro-image-wrap')!.classList.add('revealed');
    setTimeout(()=>{document.getElementById('intro-svg-wrap')!.classList.add('revealed');document.getElementById('intro-hint')!.classList.add('revealed');},320);
  },80);
  Object.values(photoEls).forEach(({el},i)=>setTimeout(()=>gsap.to(el,{opacity:1,duration:0.6,ease:'power2.out'}),i*65));

  if(isMobileView){
    const filterEl = document.getElementById('bottom-right')!;
    const socialEl = document.getElementById('social-links')!;
    filterEl.classList.add('hidden');
    socialEl.classList.add('hidden');

    const mobileObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.target===mobileGridEl) filterEl.classList.toggle('hidden', !entry.isIntersecting);
        if(entry.target===outroScreen) socialEl.classList.toggle('hidden', !entry.isIntersecting);
      });
    },{threshold:0.12});

    if(mobileGridEl) mobileObserver.observe(mobileGridEl);
    mobileObserver.observe(outroScreen);

    return; // grid scrolls natively — skip GL meshes + desktop zone logic entirely
  }

  setTimeout(()=>document.querySelectorAll<HTMLImageElement>('.photo img').forEach(img=>createGLMesh(img)),200);

  const socialEl = document.getElementById('social-links')!;
  const filterEl = document.getElementById('bottom-right')!;
  const outroEl  = document.getElementById('outro-screen')!;
  const contactEl= document.getElementById('outro-contact')!;

  function updateZones(){
    const vw = window.innerWidth;
 const heroEnd    = vw * 0.7;
const outroStart = (CANVAS_VW - 102) * vw / 100;

    const inHero  = currentX < heroEnd;
    const inOutro = currentX >= outroStart;
    const inStudy = !inHero && !inOutro;

    // Social: visible on hero + outro, hidden in casestudy zone
    socialEl.classList.toggle('hidden', inStudy);

    // Filter: visible only in casestudy zone
    filterEl.classList.toggle('hidden', !inStudy);

    // Outro overlay
    if(inOutro){
      outroEl.classList.add('show');
      contactEl.classList.add('revealed');
    } else {
      outroEl.classList.remove('show');
    }
  }

  setInterval(updateZones, 100);
  updateZones();
}

/* LOADER */
(function initLoader(){
  gsap.set(['nav','#social-links','#h-progress'],{autoAlpha:0});
  const wordmarkInner=document.getElementById('ldr-wordmark-inner')!;
  const locationInner=document.getElementById('ldr-location-inner')!;
  const pctEl=document.getElementById('ldr-pct')!;
  const loaderEl=document.getElementById('loader')!;

  // ── NEW: build letter spans for name ──
  const nameWrap=document.getElementById('ldr-line-wrap')!;
  'Atharv Kelwadkar'.split('').forEach(ch=>{
    const s=document.createElement('span');
    s.className='ldr-char';
    s.textContent=ch===' '?'\u00A0':ch;
    nameWrap.appendChild(s);
  });

  // ── NEW: build letter spans for subtitle ──
  const subWrap=document.getElementById('ldr-sub-wrap')!;
  'Multi — Disciplinary Designer'.split('').forEach(ch=>{
    const s=document.createElement('span');
    s.className='ldr-sub-char';
    s.textContent=ch===' '?'\u00A0':ch;
    subWrap.appendChild(s);
  });

  // ── UPDATED: removed line1 and subInner from set() ──
  gsap.set([wordmarkInner,locationInner,pctEl],{yPercent:110,force3D:true,visibility:'visible'});

  const counter={val:0};
  const tl=gsap.timeline({defaults:{ease:'power3.out'},onComplete(){loaderEl.remove();}});
  tl
    .to(wordmarkInner,{yPercent:0,duration:0.7},0.05)
    .to(locationInner,{yPercent:0,duration:0.7},0.08)
    .to(pctEl,{yPercent:0,duration:0.7},0.10)
    .to(counter,{val:100,duration:1.65,ease:'power1.inOut',onUpdate(){pctEl.textContent=Math.floor(counter.val)+'%';}},0.10)
    // ── UPDATED: replaced line1/subInner with per-letter animations ──
    .to('.ldr-char',{translateY:'0%',duration:1.0,ease:'power4.out',stagger:0.045},0.18)
    .to('.ldr-sub-char',{translateY:'0%',duration:0.7,ease:'power3.out',stagger:0.025},0.52)
    .addLabel('lift',1.95)
    .to(loaderEl,{yPercent:-100,duration:1.1,ease:'power4.inOut'},'lift')
    .to('nav',{autoAlpha:1,duration:0.01},'lift+=0.52')
    .fromTo('.nav-item,.nav-logo',{autoAlpha:0,y:-10},{autoAlpha:1,y:0,duration:0.55,stagger:0.08,ease:'power3.out'},'lift+=0.54')
    .to('#social-links',{autoAlpha:1,duration:0.01},'lift+=0.62')
    .fromTo('.social-link',{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:0.45,stagger:0.07,ease:'power3.out'},'lift+=0.64')
    .to(['#h-progress'],{autoAlpha:1,duration:0.5},'lift+=0.68')
    .call(()=>revealCanvas(),[],  'lift+=0.48');
})();

      } catch(e) { console.error("Script Error:", e); }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} dangerouslySetInnerHTML={{ __html: `<div id="loader">
    <div id="ldr-wordmark"><span id="ldr-wordmark-inner">AK — Portfolio</span></div>
  <div id="ldr-body">
  <div class="ldr-line" id="ldr-line-wrap"></div>
  <div id="ldr-sub" style="overflow:hidden;margin-top:14px;">
    <div id="ldr-sub-wrap" style="display:flex;gap:0.18em;justify-content:center;"></div>
  </div>
</div>
    
    <div id="ldr-bottom">
      <div id="ldr-location"><span id="ldr-location-inner">Bombay, India</span></div>
      <div id="ldr-pct-wrap"><span id="ldr-pct">0%</span></div>
    </div>
  </div>

  <div class="grid-bg" id="home-grid-bg"></div>
  <div id="cursor"></div>
  <div id="cursor-ring"></div>
  <div id="cursor-coords"></div>

  <!-- ── NAV: [About][Case studies] | ATHARV | [Resume][Contact] ── -->
  <nav id="main-nav">
    <div class="nav-left">
      <button class="nav-item" id="nav-about-btn">[About]</button>
      <button class="nav-item" id="nav-casestudy-btn">[Case studies]</button>
    </div>
    <a href="#" class="nav-logo">ATHARV</a>
    <div class="nav-right">
      <a href="https://drive.google.com/file/d/1breHhutnikcF8RlMtDVYWgE5Oh_5RH3O/view?usp=sharing" class="nav-item" id="nav-resume-btn" target="">[Resume]</a>
      <button class="nav-item" id="nav-contact-btn" onclick="window.location='mailto:hello@atharvk.com'">[Contact]</button>
    </div>
    <span class="nav-item" id="nav-proj-title"></span>
  </nav>

  <div id="social-links">
    <a class="social-link" href="#" target="_blank">Instagram</a>
    <a class="social-link" href="#" target="_blank">Behance</a>
    <a class="social-link" href="#" target="_blank">LinkedIn</a>
    <a class="social-link" href="#" target="_blank">Twitter</a>
  </div>

  <div id="bottom-right">
    <div class="filter-col" id="filter-col">
      <button class="cat-btn" data-cat="brand">Brand Identity</button>
      <button class="cat-btn" data-cat="landing">Landing Page</button>
      <button class="cat-btn" data-cat="graphic">Graphic Design</button>
      <button class="cat-btn" data-cat="app">App Design</button>
      <button class="cat-btn" data-cat="packaging">Packaging</button>
      <button class="cat-btn" data-cat="saas">SaaS Design</button>
      <button class="cat-btn" data-cat="product">Product Design</button>
    </div>
    <div class="filter-toggle-wrap">
      <button id="filter-toggle-btn">[FILTER]</button>
    </div>
  </div>

  <div id="h-progress"><div id="h-progress-bar"></div></div>
  <div id="canvas"><div id="stage"></div></div>
  <canvas id="glcanvas"></canvas>

  <div id="project-view">
    <div id="proj-nav-spacer"></div>
    <div id="proj-marquee-section">
      <div id="proj-marquee-strip"></div>
    </div>
    <div id="proj-content"></div>
  </div>

  <div id="about-overlay">
    <button id="about-close-x">[CLOSE]</button>
    <div class="about-headline-block">
      <h1 class="about-headline">
        <em>Hello,</em> My name is Atharv. I am a Product designer<br>
        Based in <em>*BOMBAY</em>,<br>
        with a passion for exploration.<br>
        Multi&#8202;&mdash;&#8202;Disciplinary.<br>
        Currently designing @<br>
        <span class="hl-link"><span class="hl-arrow">&#8599;</span>kraftelite</span>
      </h1>
    </div>
    <div class="about-body-block">
      <p id="about-bio-1"></p>
      <p id="about-bio-2"></p>
    </div>
    <div class="about-photo-block">
      <img class="about-photo"
        src="https://raw.githubusercontent.com/ProductDesigner-Ath/Protfolio/9188cd54b642b0a987b8061805cc9275672e3073/images/Upscale-me.png"
        alt="Atharv Kelwadkar"/>
    </div>
    <div class="about-footnote">
      * Synthesist&thinsp;/&thinsp;sin-thuh-sist/<br>
      means <em>one who turns complexity into clarity</em>.
    </div>
  </div>` }} />
  );
}
