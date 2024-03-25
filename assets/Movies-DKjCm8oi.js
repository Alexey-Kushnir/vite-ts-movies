import{a as l,j as r,r as i,b as g,u as y,L as b}from"./index-CKHigWlo.js";import{A as f}from"./services-CcgWJH5A.js";const j=l.input`
  margin-right: 5px;
  border: 2px solid grey;
  border-radius: 3px;
  height: 20px;
  width: 300px;
`,v=l.button`
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
`,S=({updateQueryString:e})=>r.jsxs("form",{onSubmit:e,children:[r.jsx(j,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"  Search movies"}),r.jsx(v,{type:"submit",children:"Search"})]}),A=()=>{var u,c;const[e,p]=i.useState(),[h,n]=g(),d=y(),o=h.get("query");i.useEffect(()=>{if(!o)return;const t=new AbortController,s="search/movie?",x=`&query=${o}&page=1`;return(async()=>{try{const a=await f(s,t,x);p(a)}catch(a){console.log(`IsError: ${a}`)}})(),()=>t.abort()},[o]);const m=t=>{t.preventDefault();const s=t.target[0].value.trim();n(s===""?{}:{query:s}),t.currentTarget.reset()};return r.jsxs("div",{children:[r.jsx(S,{updateQueryString:m}),r.jsxs(r.Fragment,{children:[e&&((u=e.results)==null?void 0:u.length)>0&&r.jsx("ul",{children:e.results.map(({title:t,id:s})=>r.jsx("li",{children:r.jsx(b,{to:`${s}`,state:{from:d},children:t})},s))}),e&&((c=e.results)==null?void 0:c.length)===0&&e.page===1&&o!==""?r.jsx("p",{children:"No movies found, please change your query."}):null]})]})};export{A as default};
