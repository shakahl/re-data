"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Data Normalization",s={unversionedId:"re_data/reference/macros/data_normalization",id:"re_data/reference/macros/data_normalization",title:"Data Normalization",description:"Data normalization refers to a process wherein data within a dataset is reorganized in such a way so that users can properly utilize that dataset for further queries and analysis.",source:"@site/docs/re_data/reference/macros/data_normalization.md",sourceDirName:"re_data/reference/macros",slug:"/re_data/reference/macros/data_normalization",permalink:"/0.10.4/docs/re_data/reference/macros/data_normalization",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/macros/data_normalization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Filtering",permalink:"/0.10.4/docs/re_data/reference/macros/data_filtering"},next:{title:"Data Validation",permalink:"/0.10.4/docs/re_data/reference/macros/data_validation"}},l={},c=[{value:"normalize_values",id:"normalize_values",level:3},{value:"(source code)",id:"source-code",level:4},{value:"Your ideas",id:"your-ideas",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-normalization"},"Data Normalization"),(0,n.kt)("p",null,"Data normalization refers to a process wherein data within a dataset is reorganized in such a way so that users can properly utilize that dataset for further queries and analysis. "),(0,n.kt)("p",null,"re_data provides the following macros for normalization. Check out the list of data normalization macros and let us know if you could use some different ones on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,n.kt)("h3",{id:"normalize_values"},"normalize_values"),(0,n.kt)("h4",{id:"source-code"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.normalize_values"},"(source code)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Arguments:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"source_relation: The model that contains the column in which the normalization would be performed on.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"column: The column name or column expression to be normalized.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"reference_table: A pair of source and target values used for normalization. This could either be a dbt model, a common table expression or a dictionary. Note that for dbt models and cte, the ",(0,n.kt)("inlineCode",{parentName:"em"},"source")," and ",(0,n.kt)("inlineCode",{parentName:"em"},"target")," column must exist for the macro to work properly."))),(0,n.kt)("p",null,"Returns: Table with ",(0,n.kt)("inlineCode",{parentName:"p"},"normalized")," column added"),(0,n.kt)("p",null,"This macro adds a new column to the source relation using the format column_name + '__normalized'. This column contains the transformation from source to target."),(0,n.kt)("p",null,"Let's say we have a table that contains US states in the abbreviated format and the corresponding state code. We might want to have the full names of each state for better presentation by reporting tools."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"{% set us_states_mapping = {'Ala.': 'Alabama', 'Alaska': 'Alaska', 'Ariz.': 'Arizona',\n    'Ark.': 'Arkansas', 'Calif.': 'California', 'Colo.': 'Colorado'} \n%}\n\n=> select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', us_states_mapping)\n\n  state   |  code   |   state__normalized    |\n--------------------------------------------+\n Alabama  |  AL     |    Alabama             |\n Ariz.    |  AZ     |    Arizona             |\n Arkansas |  AR     |    Arkansas            |\n Calif.   |  CA     |    California          |\n Colo.    |  CO     |    Colorado            |\n\n")),(0,n.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,n.kt)("p",null,"If you have other suggestions of normalizing data which you would like to be supported\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}d.isMDXComponent=!0}}]);