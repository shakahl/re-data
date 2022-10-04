"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:3},i="Reliability UI \ud83d\udc40",o={unversionedId:"re_data/getting_started/toy_shop/generate_ui",id:"re_data/getting_started/toy_shop/generate_ui",title:"Reliability UI \ud83d\udc40",description:"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files.",source:"@site/docs/re_data/getting_started/toy_shop/generate_ui.md",sourceDirName:"re_data/getting_started/toy_shop",slug:"/re_data/getting_started/toy_shop/generate_ui",permalink:"/master/docs/re_data/getting_started/toy_shop/generate_ui",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/getting_started/toy_shop/generate_ui.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Reliability data",permalink:"/master/docs/re_data/getting_started/toy_shop/compute_monitoring"},next:{title:"Notifications",permalink:"/master/docs/re_data/getting_started/toy_shop/notifications"}},l={},d=[{value:"Alerts",id:"alerts",level:2},{value:"Schema Changes",id:"schema-changes",level:2},{value:"Lineage",id:"lineage",level:2},{value:"Tests",id:"tests",level:2},{value:"Tables",id:"tables",level:2}],c={toc:d};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reliability-ui-"},"Reliability UI \ud83d\udc40"),(0,n.kt)("p",null,"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --interval days:1\nre_data overview serve\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We don't pass --end-date to ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data overview generate")," and this is causing re_data to use the default (today). We generate for this whole period to get also tests history (just ran) displayed")),(0,n.kt)("p",null,"After running these commands you should be able to see views similar to those:"),(0,n.kt)("h2",{id:"alerts"},"Alerts"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphExample",src:a(9418).Z,width:"1486",height:"828"})),(0,n.kt)("p",null,"Alerts view lets you see if there are any problems currently detected in your data.\nre_data compares past & current metric computed using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Standard_score"},"z_score"))," to determinate if value is suspicious."),(0,n.kt)("p",null,"From the alerts view, you can go to learn more details about specific alerts in the graph view."),(0,n.kt)("h2",{id:"schema-changes"},"Schema Changes"),(0,n.kt)("p",null,"The alerts view also shows any schema changes detected. These schema changes include detecting when columns were added, removed or had its type changed. For tutorial purposes, we modify using the schema of the orders table using macros included in the default template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# this operation adds a column to the orders table\ndbt run-operation schema_change_add_orders_column\n# run re_data models to detect the column added schema change\nre_data run\n# this operation drops the column added earlier\ndbt run-operation schema_change_drop_orders_column\n# re-run re_data models to detect the removed column\nre_data run\n")),(0,n.kt)("p",null,"Regenerating the user interface:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --interval days:1\nre_data overview serve\n")),(0,n.kt)("p",null,"Will show:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AlertsWithSchemaChanges",src:a(7385).Z,width:"1488",height:"820"})),(0,n.kt)("h2",{id:"lineage"},"Lineage"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphExample",src:a(1319).Z,width:"1587",height:"863"})),(0,n.kt)("p",null,"Lineage view lets you investigate anomalies, metrics & schema changes on top of the dbt lineage graph."),(0,n.kt)("h2",{id:"tests"},"Tests"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphExample",src:a(2156).Z,width:"1566",height:"839"})),(0,n.kt)("p",null,"Tests view lets you see history and details (if you click on the test name) of the dbt tests runs."),(0,n.kt)("h2",{id:"tables"},"Tables"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphExample",src:a(6767).Z,width:"1587",height:"860"})),(0,n.kt)("p",null,"Tables view lets you investigate any table easily. Check out for anomalies, metrics, tests related to it."),(0,n.kt)("p",null,"In the next section, let's see how we can notify ourselves about problems in the data"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"something-didnt-worked-as-expected"},"Something didn't worked as expected?"),(0,n.kt)("p",{parentName:"admonition"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide.")))}p.isMDXComponent=!0},9418:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/alerts-5e24a118c8eb0b974238e22dcdf8f205.png"},7385:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/alerts_with_schema_changes-9cdecb3ba6d3548868fa3408e912b3bd.png"},1319:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-9b350274adfb40bc5c806d7ae9d54c49.png"},6767:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tables-63cbc57bd8f1158b6a895fbea9a24412.png"},2156:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tests-5fa038cf9e4af79a7c85ce16707c199c.png"}}]);