"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},s="What is re_data?",i={unversionedId:"re_data/introduction/whatis_data",id:"re_data/introduction/whatis_data",title:"What is re_data?",description:"re_data is an open-source data reliability framework for modern data stack. \ud83d\ude0a",source:"@site/docs/re_data/introduction/whatis_data.md",sourceDirName:"re_data/introduction",slug:"/re_data/introduction/whatis_data",permalink:"/latest/docs/re_data/introduction/whatis_data",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/introduction/whatis_data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome to our docs!",permalink:"/latest/docs/start_here"},next:{title:"Integrations",permalink:"/latest/docs/re_data/introduction/integrations"}},l={},d=[{value:"Alerts",id:"alerts",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Asserts",id:"asserts",level:2},{value:"Test history",id:"test-history",level:2},{value:"Lineage",id:"lineage",level:2},{value:"Cleaning macros \ud83e\uddf9",id:"cleaning-macros-",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-re_data"},"What is re_data?"),(0,n.kt)("p",null,"re_data is an open-source data reliability framework for modern data stack. \ud83d\ude0a"),(0,n.kt)("p",null,"Currently, re_data focuses on observing the dbt project (together with underlying data warehouse - Postgres, BigQuery, Snowflake, Redshift)."),(0,n.kt)("h1",{id:"live-demo"},"Live demo"),(0,n.kt)("p",null,"Check out our ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://re-data.github.io/re-data/ui-latest/#/alerts"},"live demo"))," of what re_data can do for you! \ud83d\ude0a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphExample",src:a(1319).Z,width:"1587",height:"863"})),(0,n.kt)("h2",{id:"alerts"},"Alerts"),(0,n.kt)("p",null,"re_data detects potential problems in your data like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"anomalies (suspicious data patterns),"),(0,n.kt)("li",{parentName:"ul"},"failed dbt tests (",(0,n.kt)("strong",{parentName:"li"},"new in 0.8.0")," \ud83c\udf89),"),(0,n.kt)("li",{parentName:"ul"},"schema changes")),(0,n.kt)("p",null,"and alerts you on Slack or Email and in re_data UI so that you can react, investigate and fix issues quickly. You can even setup more granual alerts for specific groups of people using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/config#re_data_owners-optionalsetting"},(0,n.kt)("inlineCode",{parentName:"a"},"re_data_owners")))," setting."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"For detecting anomalies re_data uses metrics. You can compute predefined and custom metrics about your data. All metrics are stored in your database and accessible for you. re_data custom metrics are just dbt macros which you can add to your dbt project. Check out what base, extra metrics re_data has and how you can define your own metrics here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/base_metrics"},"default metrics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/extra_metrics"},"extra metrics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/your_own_metric"},"defining your own metric")))),(0,n.kt)("h2",{id:"asserts"},"Asserts"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(new in 0.8.0 \ud83c\udf89)")),(0,n.kt)("p",null,"re_data contains asserts library which enable you to test computed metrics using dbt tests. This additonal step allows you to make sure the data is correct and meets your expectations. Example tests in our asserts library:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/tests/asserts#assert_in_range"},"re_data.assert_in_range"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/tests/asserts#assert_true"},"re_data.assert_true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/tests/asserts#assert_equal"},"re_data.assert_equal")))),(0,n.kt)("h2",{id:"test-history"},"Test history"),(0,n.kt)("p",null,"re_data stores dbt tests history and let's you investigate test details like SQL which was run or failed rows for each runned test."),(0,n.kt)("h2",{id:"lineage"},"Lineage"),(0,n.kt)("p",null,"re_data shows data lineage for your data warehouse. (This is imported from the dbt graph). You can navigate your data & investigate alerts & metrics related to each node in the graph."),(0,n.kt)("h2",{id:"cleaning-macros-"},"Cleaning macros \ud83e\uddf9"),(0,n.kt)("p",null,"re_data ships with a set of macros to save you time and pain of writing code for cleaning / normalizing / validating your data. Use them to make your project cleaner \ud83d\ude0a. You can also use them as a base for your own metrics or data tests. Example macros in our data cleaning library include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/macros/data_filtering#filter_remove_duplicates"},"re_data.filter_remove_duplicates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/macros/data_validation#is_number_decimal_point"},"re_data.is_number_decimal_point"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/macros/data_cleaning#clean_blacklist"},"re_data.clean_blacklist")))),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"re_data is very easy to add to existing dbt projects. Check out ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/installation/for_dbt_users"},"quickstart"))," instructions and follow ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/toy_shop/toy_shop_data"},"toy shop"))," tutorial to see how you can generate re_data reliability data & UI for your data warehouse."),(0,n.kt)("p",null,"If you are not using dbt, re_data can still be a great option to start monitoring your existing tables. Check out installation for new users: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/installation/new_to_dbt"},"new to dbt"))," in this case."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"more-questions"},"More questions?"),(0,n.kt)("p",{parentName:"admonition"},"Ask as on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),". We will help you asap and you will help us improve our documentation")))}u.isMDXComponent=!0},1319:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-9b350274adfb40bc5c806d7ae9d54c49.png"}}]);