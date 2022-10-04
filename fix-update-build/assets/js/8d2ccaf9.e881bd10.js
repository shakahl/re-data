"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[441],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3005:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:3},s="Data Normalization",u={unversionedId:"reference/data_preparation/data_normalization",id:"reference/data_preparation/data_normalization",isDocsHomePage:!1,title:"Data Normalization",description:"Data normalization refers to a process wherein data within a dataset is reorganized in such a way so that users can properly utilize that dataset for further queries and analysis.",source:"@site/docs/reference/data_preparation/data_normalization.md",sourceDirName:"reference/data_preparation",slug:"/reference/data_preparation/data_normalization",permalink:"/re-data/fix-update-build/docs/reference/data_preparation/data_normalization",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_preparation/data_normalization.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Filtering",permalink:"/re-data/fix-update-build/docs/reference/data_preparation/data_filtering"},next:{title:"Data Validation",permalink:"/re-data/fix-update-build/docs/reference/data_preparation/data_validation"}},c=[{value:"normalize_values",id:"normalize_values",children:[]},{value:"Your ideas",id:"your-ideas",children:[]}],d={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-normalization"},"Data Normalization"),(0,o.kt)("p",null,"Data normalization refers to a process wherein data within a dataset is reorganized in such a way so that users can properly utilize that dataset for further queries and analysis. "),(0,o.kt)("p",null,"re_data provides the following macros for normalization. Check out the list of data normalization macros and let us know if you could use some different ones on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack \ud83d\ude0a"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=macro_request.md&title=%5BMACRO%5D"},"Github")),"."),(0,o.kt)("h3",{id:"normalize_values"},(0,o.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.normalize_values"},"normalize_values")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"source_relation: The model that contains the column in which the normalization would be performed on.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"column: The column name or column expression to be normalized.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"reference_table: A pair of source and target values used for normalization. This could either be a dbt model, a common table expression or a dictionary. Note that for dbt models and cte, the ",(0,o.kt)("inlineCode",{parentName:"em"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"target")," column must exist for the macro to work properly."))),(0,o.kt)("p",null,"Returns: Table with ",(0,o.kt)("inlineCode",{parentName:"p"},"normalized")," column added"),(0,o.kt)("p",null,"This macro adds a new column to the source relation using the format column_name + '__normalized'. This column contains the transformation from source to target."),(0,o.kt)("p",null,"Let's say we have a table that contains US states in the abbreviated format and the corresponding state code. We might want to have the full names of each state for better presentation by reporting tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{% set us_states_mapping = {'Ala.': 'Alabama', 'Alaska': 'Alaska', 'Ariz.': 'Arizona',\n    'Ark.': 'Arkansas', 'Calif.': 'California', 'Colo.': 'Colorado'} \n%}\n\n=> select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', us_states_mapping)\n\n  state   |  code   |   state__normalized    |\n--------------------------------------------+\n Alabama  |  AL     |    Alabama             |\n Ariz.    |  AZ     |    Arizona             |\n Arkansas |  AR     |    Arkansas            |\n Calif.   |  CA     |    California          |\n Colo.    |  CO     |    Colorado            |\n\n")),(0,o.kt)("h2",{id:"your-ideas"},"Your ideas"),(0,o.kt)("p",null,"If you have other suggestions of normalizing data which you would like to be supported\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"let us know on Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0}}]);