import{o as e,t}from"./jsx-runtime-DVpe7PXp.js";import{t as n}from"./react-Dps3yNUO.js";import{E as r,S as i,T as a,b as o,d as ee,h as s,k as te,l as ne,m as re,n as ie}from"./directory-shared-CRPKgtKa.js";import{t as ae}from"./eye-DxLvfiAe.js";import{t as c}from"./handshake-Cmord6Rl.js";import{t as l}from"./loader-circle-4qQez087.js";import{t as u}from"./refresh-cw-CNfvV_Bg.js";import{t as oe}from"./search-NjH87rZO.js";import{t as se}from"./user-CrL1PNfI.js";import{t as ce}from"./users-BlfWDWPD.js";import{c as d,l as f,v as le}from"./index-u1CDBKMY.js";import{t as ue}from"./config-CrWrgA7M.js";import{t as de}from"./AppLink-vF5K77Gg.js";import{c as fe,f as pe,l as me}from"./membersApi-B3HrPzjG.js";import{f as he,l as ge,s as _e}from"./partnersApi-mdWPoT3n.js";import{n as p,t as ve}from"./useApiCall-B0EBj9IB.js";import{n as ye,r as be,t as xe}from"./RenewPeriodFields-BSLZDVrC.js";var Se=le(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),m=e(n(),1),h=t(),g=10,Ce=400,we=[{value:`members`,label:`Members`,icon:ce},{value:`partners`,label:`Partners`,icon:c}];function Te(e,t){return e===`members`?t.memberId:t.partnerId}function _(e,t){return e===`members`?t.memberName:t.partnerName}function v(e){return e===`members`?`/admin/directory/$slug/details`:`/admin/directory/partner/$slug/details`}function y(e,t){return e===`members`?re(t):s(t)}function b(e){return e?.photo?ue(e.photo):``}function x({title:e,description:t,children:n,onClose:r,maxWidth:i=`max-w-md`}){return(0,h.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]`,role:`dialog`,"aria-modal":`true`,onClick:e=>{e.target===e.currentTarget&&r()},onKeyDown:e=>{e.key===`Escape`&&r()},tabIndex:-1,children:(0,h.jsxs)(`div`,{className:`w-full ${i} max-h-[90vh] overflow-y-auto overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl`,children:[(0,h.jsxs)(`div`,{className:`flex items-start justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5`,children:[(0,h.jsxs)(`div`,{className:`min-w-0`,children:[(0,h.jsx)(`h3`,{className:`text-sm font-bold text-slate-800 sm:text-base`,children:e}),t&&(0,h.jsx)(`p`,{className:`mt-1 text-xs leading-5 text-slate-500 sm:text-[13px]`,children:t})]}),(0,h.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Close`,className:`shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700`,children:(0,h.jsx)(f,{className:`h-4 w-4`})})]}),(0,h.jsx)(`div`,{className:`p-4 sm:p-5`,children:n})]})})}function Ee(){return(0,h.jsx)(`div`,{className:`overflow-hidden rounded-md border border-slate-200 bg-white`,children:(0,h.jsx)(`div`,{className:`w-full overflow-x-auto`,children:(0,h.jsxs)(`table`,{className:`w-full min-w-[950px] text-left text-[13px]`,children:[(0,h.jsx)(`thead`,{className:`bg-slate-50`,children:(0,h.jsx)(`tr`,{children:[`ID`,`Name`,`Designation`,`Mobile`,`Status`,`Days Remaining`,`Actions`].map(e=>(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:e},e))})}),(0,h.jsx)(`tbody`,{children:Array.from({length:7}).map((e,t)=>(0,h.jsxs)(`tr`,{className:`border-b border-slate-100 last:border-b-0`,children:[(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-4 w-20 animate-pulse rounded bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-4 w-28 animate-pulse rounded bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-4 w-28 animate-pulse rounded bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-4 w-24 animate-pulse rounded bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-6 w-16 animate-pulse rounded-full bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`h-4 w-24 animate-pulse rounded bg-slate-200`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsx)(`div`,{className:`ml-auto h-4 w-40 animate-pulse rounded bg-slate-200`})})]},t))})]})})})}function S(){let e=ve(fe),t=ve(_e),n=p(me),s=p(ge),re=p(pe),c=p(he),[f,le]=(0,m.useState)(`members`),[ue,S]=(0,m.useState)([]),[C,De]=(0,m.useState)({page:1,total:0,totalPages:1}),w=(0,m.useRef)(0),[T,E]=(0,m.useState)(`all`),[Oe,D]=(0,m.useState)(!0),[O,k]=(0,m.useState)(``),[A,ke]=(0,m.useState)(``),[j,Ae]=(0,m.useState)(``),[M,N]=(0,m.useState)(1),[P,je]=(0,m.useState)(null),[F,I]=(0,m.useState)(``),[L,R]=(0,m.useState)(``),[Me,z]=(0,m.useState)(``),[B,Ne]=(0,m.useState)(``),[V,Pe]=(0,m.useState)(!1),[Fe,H]=(0,m.useState)(``),[U,Ie]=(0,m.useState)(null),[W,G]=(0,m.useState)(``),[K,q]=(0,m.useState)(!1),[Le,J]=(0,m.useState)(``);(0,m.useEffect)(()=>{let e=setTimeout(()=>{Ae(A.trim())},Ce);return()=>clearTimeout(e)},[A]),(0,m.useEffect)(()=>{N(1)},[f,j,T]);let Y=async()=>{let n=++w.current,r=()=>n!==w.current;D(!0),k(``);try{let n={search:j,status:T,page:M,limit:g},i=f===`members`?await e(n):await t(n);if(r())return;let a=(f===`members`?i?.members:i?.partners)||[],o=i?.pagination||{page:1,total:a.length,totalPages:1};if(a.length===0&&M>1&&o.total>0){N(Math.max(1,o.totalPages));return}S(a),De(o)}catch(e){if(r())return;let t=e?.message||`Could not load ${f}.`;k(t),d.error(t)}finally{r()||D(!1)}};(0,m.useEffect)(()=>{Y()},[f,j,T,M]);let X=C.totalPages,Z=C.page,Re=ue,ze=e=>{le(e),ke(``),Ae(``),E(`all`),N(1)},Be=e=>{je(e),I(e?.validityTo?String(e.validityTo).slice(0,10):``),R(``),z(``),Ne(be(e).from),H(``)},Q=()=>{V||(je(null),I(``),R(``),z(``),H(``))},Ve=async e=>{if(e.preventDefault(),!F){H(`Choose the new validity date.`);return}if(te(F)){H(`Validity date must be after today.`);return}if(!B){H(`Choose the Valid From date.`);return}if(L&&Number(L)<0){H(`Amount cannot be negative.`);return}Pe(!0),H(``);try{let e={validityFrom:B,validityTo:F,amount:L?Number(L):void 0,note:Me.trim()||void 0};f===`members`?await n({id:P.id,...e}):await s({id:P.id,...e}),await Y(),d.success(`${_(f,P)||`Record`} renewed successfully through ${F}${L?` for ₹${L}`:``}.`),Q()}catch(e){let t=e?.message||`Could not renew.`;H(t),d.error(t)}finally{Pe(!1)}},He=e=>{Ie(e),G(e?.designation||``),J(``)},$=()=>{K||(Ie(null),G(``),J(``))};return(0,h.jsxs)(`section`,{className:`w-full space-y-3`,children:[(0,h.jsx)(`div`,{className:`rounded-md border border-slate-200 bg-white shadow-sm`,children:(0,h.jsxs)(`div`,{className:`flex items-center gap-3 px-4 py-3 sm:px-5`,children:[(0,h.jsx)(`div`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-50`,children:(0,h.jsx)(u,{className:`h-4 w-4 text-red-700`})}),(0,h.jsxs)(`div`,{className:`min-w-0`,children:[(0,h.jsx)(`h2`,{className:`text-base font-bold text-slate-800 sm:text-lg`,children:`Reset Directory`}),(0,h.jsx)(`p`,{className:`text-xs text-slate-500 sm:text-[13px]`,children:`Renew member or partner validity and update designations.`})]})]})}),(0,h.jsxs)(`div`,{className:`overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm`,children:[(0,h.jsx)(`div`,{className:`border-b border-slate-200 bg-slate-50/70 px-3 py-3 sm:px-4`,children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`,children:[(0,h.jsx)(`div`,{className:`flex w-full rounded-md border border-slate-200 bg-white p-1 sm:w-auto`,role:`tablist`,children:we.map(e=>{let t=e.icon,n=f===e.value;return(0,h.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":n,onClick:()=>ze(e.value),className:`
                      inline-flex h-9 flex-1 items-center
                      justify-center gap-1.5 rounded-[4px]
                      px-4 text-xs font-semibold
                      transition-all
                      sm:flex-none sm:text-[13px]

                      ${n?`bg-red-700 text-white shadow-sm`:`text-slate-600 hover:bg-slate-100`}
                    `,children:[(0,h.jsx)(t,{className:`h-3.5 w-3.5`}),e.label]},e.value)})}),(0,h.jsx)(`select`,{value:T,onChange:e=>E(e.target.value),"aria-label":`Filter ${f} by status`,className:`
                h-9 w-full rounded-md border border-slate-300
                bg-white px-3 text-xs outline-none
                transition-all hover:border-slate-400
                focus:border-red-700 focus:ring-2 focus:ring-red-100
                sm:text-[13px] lg:w-auto
              `,children:ne.map(e=>(0,h.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,h.jsx)(`div`,{className:`w-full lg:max-w-sm`,children:(0,h.jsxs)(`label`,{className:`relative block`,children:[(0,h.jsx)(oe,{className:`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400`}),(0,h.jsx)(`input`,{value:A,onChange:e=>ke(e.target.value),placeholder:f===`members`?`Search Member ID, name or mobile...`:`Search Partner ID, name or mobile...`,"aria-label":`Search ${f}`,className:`
                    h-9 w-full rounded-md
                    border border-slate-300
                    bg-white pl-9 pr-3
                    text-xs outline-none
                    transition-all
                    placeholder:text-slate-400
                    hover:border-slate-400
                    focus:border-red-700
                    focus:ring-2
                    focus:ring-red-100
                    sm:text-[13px]
                  `})]})})]})}),O&&(0,h.jsx)(`div`,{className:`mx-3 mt-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 sm:mx-4 sm:text-[13px]`,children:O}),Oe?(0,h.jsx)(`div`,{className:`p-3 sm:p-4`,children:(0,h.jsx)(Ee,{})}):Re.length===0?(0,h.jsxs)(`div`,{className:`mx-3 my-4 flex min-h-52 flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50/50 sm:mx-4`,children:[(0,h.jsx)(`div`,{className:`flex h-12 w-12 items-center justify-center rounded-full bg-slate-100`,children:(0,h.jsx)(ce,{className:`h-6 w-6 text-slate-400`})}),(0,h.jsx)(`p`,{className:`mt-3 text-sm font-semibold text-slate-600`,children:j?`No ${f} match your search`:`No ${f} found`}),j&&(0,h.jsx)(`p`,{className:`mt-1 text-xs text-slate-400`,children:`Try searching with a different keyword.`})]}):(0,h.jsxs)(`div`,{className:`p-3 sm:p-4`,children:[(0,h.jsxs)(`div`,{className:`overflow-hidden rounded-md border border-slate-200`,children:[(0,h.jsx)(`div`,{className:`w-full overflow-x-auto scrollbar-hide`,children:(0,h.jsxs)(`table`,{className:`w-full min-w-[1050px] text-left text-[13px]`,children:[(0,h.jsx)(`thead`,{className:`bg-slate-50`,children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:f===`members`?`Member ID`:`Partner ID`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:`Name`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:`Designation`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:`Mobile`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:`Status`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 font-semibold text-slate-500`,children:`Days Remaining`}),(0,h.jsx)(`th`,{className:`whitespace-nowrap border-b border-slate-200 px-3 py-3 text-center font-semibold text-slate-500`,children:`Actions`})]})}),(0,h.jsx)(`tbody`,{children:Re.map((e,t)=>{let n=e.isActive&&!a(e),s=a(e),te=r(e);return(0,h.jsxs)(`tr`,{className:`
                            border-b border-slate-100
                            last:border-b-0
                            transition-colors
                            hover:bg-red-50/40
                            ${t%2==0?`bg-white`:`bg-slate-50/40`}
                          `,children:[(0,h.jsx)(`td`,{className:`whitespace-nowrap px-3 py-3`,children:(0,h.jsx)(`span`,{className:`font-semibold text-slate-700`,children:Te(f,e)||`—`})}),(0,h.jsx)(`td`,{className:`px-3 py-3`,children:(0,h.jsxs)(de,{to:v(f),params:{slug:y(f,e)},className:`group flex items-center gap-2.5`,children:[(0,h.jsxs)(`div`,{className:`h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100`,children:[b(e)?(0,h.jsx)(`img`,{src:b(e),alt:_(f,e)||`Profile`,className:`h-full w-full object-cover`,onError:e=>{e.currentTarget.style.display=`none`,e.currentTarget.nextElementSibling?.classList.remove(`hidden`)}}):null,(0,h.jsx)(`div`,{className:`h-full w-full items-center justify-center ${b(e)?`hidden`:`flex`}`,children:(0,h.jsx)(se,{className:`h-4 w-4 text-slate-400`})})]}),(0,h.jsx)(`span`,{className:`min-w-0 truncate font-semibold text-slate-700 transition-colors group-hover:text-red-700 group-hover:underline`,children:_(f,e)||`—`})]})}),(0,h.jsx)(`td`,{className:`max-w-[180px] px-3 py-3`,children:(0,h.jsx)(`span`,{className:`block truncate text-slate-600`,children:e.designation||`—`})}),(0,h.jsx)(`td`,{className:`whitespace-nowrap px-3 py-3 text-slate-600`,children:e.mobile||`—`}),(0,h.jsx)(`td`,{className:`whitespace-nowrap px-3 py-3`,children:(0,h.jsx)(ee,{active:n})}),(0,h.jsx)(`td`,{className:`
                              whitespace-nowrap
                              px-3 py-3
                              font-semibold

                              ${s?`text-red-600`:te?`text-amber-600`:`text-slate-600`}
                            `,children:i(o(e))}),(0,h.jsx)(`td`,{className:`whitespace-nowrap px-3 py-3`,children:(0,h.jsxs)(`div`,{className:`flex justify-center gap-1`,children:[(0,h.jsxs)(de,{to:v(f),params:{slug:y(f,e)},className:`
                                  inline-flex h-8
                                  items-center gap-1
                                  rounded-[4px]
                                  px-2.5
                                  text-xs font-semibold
                                  text-slate-600
                                  transition-colors
                                  hover:bg-red-50
                                  hover:text-red-700
                                `,children:[(0,h.jsx)(ae,{className:`h-3.5 w-3.5`}),`View`]}),(0,h.jsxs)(`button`,{type:`button`,onClick:()=>Be(e),className:`
                                  inline-flex h-8
                                  items-center gap-1
                                  rounded-[4px]
                                  px-2.5
                                  text-xs font-semibold
                                  text-emerald-700
                                  transition-colors
                                  hover:bg-emerald-50
                                  hover:text-emerald-800
                                `,children:[(0,h.jsx)(u,{className:`h-3.5 w-3.5`}),`Renew`]}),(0,h.jsxs)(`button`,{type:`button`,onClick:()=>He(e),className:`
                                  inline-flex h-8
                                  items-center gap-1
                                  rounded-[4px]
                                  px-2.5
                                  text-xs font-semibold
                                  text-slate-600
                                  transition-colors
                                  hover:bg-red-50
                                  hover:text-red-700
                                `,children:[(0,h.jsx)(Se,{className:`h-3.5 w-3.5`}),`Designation`]})]})})]},e.id)})})]})}),(0,h.jsx)(`div`,{className:`border-t border-slate-100 bg-slate-50 px-3 py-1.5 text-center text-[11px] text-slate-400 sm:hidden`,children:`Swipe left/right to view the complete table`})]}),C.total>0&&(0,h.jsxs)(`div`,{className:`mt-3 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-[13px]`,children:[(0,h.jsxs)(`p`,{children:[`Showing`,` `,(0,h.jsx)(`span`,{className:`font-semibold text-slate-700`,children:(Z-1)*g+1}),` `,`–`,` `,(0,h.jsx)(`span`,{className:`font-semibold text-slate-700`,children:Math.min(Z*g,C.total)}),` `,`of `,(0,h.jsx)(`span`,{className:`font-semibold text-slate-700`,children:C.total})]}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(`button`,{type:`button`,disabled:Z<=1,onClick:()=>N(e=>Math.max(1,e-1)),className:`
                      h-8 rounded-md
                      border border-slate-300
                      bg-white px-3
                      text-xs font-semibold
                      text-slate-600
                      transition-colors
                      hover:border-red-700
                      hover:text-red-700
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    `,children:`Previous`}),(0,h.jsxs)(`span`,{className:`
                      hidden h-8
                      items-center
                      rounded-md
                      border border-slate-200
                      bg-slate-50
                      px-3
                      text-xs font-semibold
                      text-slate-600
                      sm:flex
                    `,children:[`Page `,Z,` of `,X]}),(0,h.jsx)(`button`,{type:`button`,disabled:Z>=X,onClick:()=>N(e=>Math.min(X,e+1)),className:`
                      h-8 rounded-md
                      border border-slate-300
                      bg-white px-3
                      text-xs font-semibold
                      text-slate-600
                      transition-colors
                      hover:border-red-700
                      hover:text-red-700
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    `,children:`Next`})]})]})]})]}),P&&(0,h.jsx)(x,{title:`Renew ${f===`members`?`Membership`:`Partnership`}`,description:`${_(f,P)||`This record`} — set the new validity details.`,onClose:Q,children:(0,h.jsxs)(`form`,{onSubmit:Ve,className:`space-y-4`,children:[(0,h.jsx)(ye,{record:P,value:B,onChange:Ne,disabled:V}),(0,h.jsxs)(`label`,{className:`block text-[13px] font-semibold text-slate-700`,children:[`New Validity To`,(0,h.jsx)(`input`,{type:`date`,required:!0,value:F,onChange:e=>I(e.target.value),className:`h-8 w-full rounded-[3px] border border-slate-300 bg-white px-2 text-[13px] text-slate-800 outline-none transition-colors hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mt-1 w-full`})]}),(0,h.jsxs)(`label`,{className:`block text-[13px] font-semibold text-slate-700`,children:[`Amount Paid (₹)`,(0,h.jsx)(`input`,{type:`number`,min:`0`,step:`0.01`,placeholder:`e.g. 5000`,value:L,onChange:e=>R(e.target.value),className:`h-8 w-full rounded-[3px] border border-slate-300 bg-white px-2 text-[13px] text-slate-800 outline-none transition-colors hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mt-1 w-full`})]}),(0,h.jsx)(xe,{value:Me,onChange:z,disabled:V}),Fe&&(0,h.jsx)(`div`,{role:`alert`,className:`rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 sm:text-[13px]`,children:Fe}),(0,h.jsxs)(`div`,{className:`flex flex-col-reverse gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end`,children:[(0,h.jsx)(`button`,{type:`button`,onClick:Q,disabled:V,className:`
                  h-9 rounded-md
                  bg-slate-100 px-4
                  text-xs font-semibold
                  text-slate-600
                  transition-colors
                  hover:bg-slate-200
                  disabled:opacity-50
                  sm:text-[13px]
                `,children:`Cancel`}),(0,h.jsxs)(`button`,{type:`submit`,disabled:V,className:`
                  inline-flex h-9
                  items-center justify-center
                  gap-2 rounded-md
                  bg-red-700 px-4
                  text-xs font-semibold
                  text-white
                  shadow-sm
                  transition-colors
                  hover:bg-red-800
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:text-[13px]
                `,children:[V&&(0,h.jsx)(l,{className:`h-4 w-4 animate-spin`}),V?`Renewing...`:`Renew`]})]})]})}),U&&(0,h.jsx)(x,{title:`Change Designation`,description:`${_(f,U)||`This record`} — update their designation.`,onClose:$,children:(0,h.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!W.trim()){J(`Choose or enter a designation.`);return}q(!0),J(``);try{let e=W.trim();f===`members`?await re({id:U.id,member:{memberId:U.memberId,memberName:U.memberName,designation:e}}):await c({id:U.id,partner:{designation:e}}),await Y(),d.success(`${_(f,U)||`Record`}'s designation updated to ${W.trim()}.`),$()}catch(e){let t=e?.message||`Could not update designation.`;J(t),d.error(t)}finally{q(!1)}},className:`space-y-4`,children:[(0,h.jsxs)(`label`,{className:`block text-[13px] font-semibold text-slate-700`,children:[`Designation`,(0,h.jsx)(`div`,{className:`mt-1`,children:(0,h.jsx)(ie,{value:W,onChange:G})})]}),Le&&(0,h.jsx)(`div`,{role:`alert`,className:`rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 sm:text-[13px]`,children:Le}),(0,h.jsxs)(`div`,{className:`flex flex-col-reverse gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end`,children:[(0,h.jsx)(`button`,{type:`button`,onClick:$,disabled:K,className:`
                  h-9 rounded-md
                  bg-slate-100 px-4
                  text-xs font-semibold
                  text-slate-600
                  transition-colors
                  hover:bg-slate-200
                  disabled:opacity-50
                  sm:text-[13px]
                `,children:`Cancel`}),(0,h.jsxs)(`button`,{type:`submit`,disabled:K,className:`
                  inline-flex h-9
                  items-center justify-center
                  gap-2 rounded-md
                  bg-red-700 px-4
                  text-xs font-semibold
                  text-white
                  shadow-sm
                  transition-colors
                  hover:bg-red-800
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:text-[13px]
                `,children:[K&&(0,h.jsx)(l,{className:`h-4 w-4 animate-spin`}),K?`Saving...`:`Save Designation`]})]})]})})]})}export{S as ResetDirectory};