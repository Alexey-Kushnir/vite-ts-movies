import{a as n,L as l,r as i,c as h,u as g,j as e,O as m}from"./index-CnNyzF1w.js";import{A as f}from"./services-CcgWJH5A.js";const j=n.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`,u=n(l)`
  font-size: small;
  display: block;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #9393936c;
  color: #000;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
  width: 70px;
  height: 15px;
`,c=n(l)`
  font-size: small;
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #9393936c;
  color: #000;
  text-align: center;
  text-decoration: none;
  width: 50px;
  height: 15px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`,I=()=>{var a;const[o,d]=i.useState(),{movieId:s}=h(),x=((a=g().state)==null?void 0:a.from)??"/";return i.useEffect(()=>{const t=new AbortController,p=`movie/${s}?`;return(async()=>{try{const r=await f(p,t);d(r)}catch(r){console.log(`IsError: ${r}`)}})(),()=>t.abort()},[s]),e.jsxs(e.Fragment,{children:[o&&e.jsxs(j,{children:[e.jsx(u,{to:x,children:"Go back"}),e.jsx("img",{src:`https://image.tmdb.org/t/p/original/${o.poster_path}`,alt:o.original_title,height:"350px"}),e.jsxs("h2",{children:[o.original_title," (",o.release_date.slice(0,4),")"]}),e.jsxs("p",{children:["User Score: ",(o.vote_average*10).toFixed(0),"%"]}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:o.overview}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:o.genres.map(t=>`${t.name}, `).join("").slice(0,-2)}),e.jsx("h4",{children:"Additional information"}),e.jsx(c,{to:"cast",children:"Cast"}),e.jsx(c,{to:"reviews",children:"Reviews"})]}),e.jsx(i.Suspense,{fallback:e.jsx("div",{children:" Loading subpage..."}),children:e.jsx(m,{})})]})};export{I as default};
