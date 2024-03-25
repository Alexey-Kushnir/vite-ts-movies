import{a as p,j as r,r as l,b as g,u as y,L as b}from"./index-CnNyzF1w.js";import{A as f}from"./services-CcgWJH5A.js";const j=p.input`
  margin-right: 5px;
  border: 2px solid grey;
  border-radius: 3px;
  height: 20px;
  width: 300px;
`,v=p.button`
  border: 2px solid grey;
  border-radius: 3px;
  height: 26px;
  width: 100px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #80808054;
    border: 0;
  }
`,S=({updateQueryString:e})=>r.jsxs("form",{onSubmit:a=>e(a),children:[r.jsx(j,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"  Search movies"}),r.jsx(v,{type:"submit",children:"Search"})]}),A=()=>{var c,i;const[e,a]=l.useState(),[h,u]=g(),d=y(),o=h.get("query");l.useEffect(()=>{if(!o)return;const t=new AbortController,s="search/movie?",x=`&query=${o}&page=1`;return(async()=>{try{const n=await f(s,t,x);a(n)}catch(n){console.log(`IsError: ${n}`)}})(),()=>t.abort()},[o]);const m=t=>{t.preventDefault();const s=t.target[0].value.trim();u(s===""?{}:{query:s}),t.currentTarget.reset()};return r.jsxs("div",{children:[r.jsx(S,{updateQueryString:m}),r.jsxs(r.Fragment,{children:[e&&((c=e.results)==null?void 0:c.length)>0&&r.jsx("ul",{children:e.results.map(({title:t,id:s})=>r.jsx("li",{children:r.jsx(b,{to:`${s}`,state:{from:d},children:t})},s))}),e&&((i=e.results)==null?void 0:i.length)===0&&e.page===1&&o!==""?r.jsx("p",{children:"No movies found, please change your query."}):null]})]})};export{A as default};
