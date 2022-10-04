"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),d=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:m,groupId:b,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==_&&!h.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[w,x]=(0,r.useState)(_),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,d.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==w&&(j(t),x(n),null!=b&&v(b,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},y)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={sidebar_position:2},i="Quickstart - new to dbt",d={unversionedId:"re_data/getting_started/installation/new_to_dbt",id:"re_data/getting_started/installation/new_to_dbt",title:"Quickstart - new to dbt",description:"You are not using dbt in your company but would like to try to re_data.",source:"@site/docs/re_data/getting_started/installation/new_to_dbt.mdx",sourceDirName:"re_data/getting_started/installation",slug:"/re_data/getting_started/installation/new_to_dbt",permalink:"/0.10.3b/docs/re_data/getting_started/installation/new_to_dbt",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/getting_started/installation/new_to_dbt.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart - dbt users",permalink:"/0.10.3b/docs/re_data/getting_started/installation/for_dbt_users"},next:{title:"Welcome to toy shop!",permalink:"/0.10.3b/docs/re_data/getting_started/toy_shop/toy_shop_data"}},u={},p=[{value:"Install re_data package",id:"install-re_data-package",level:2},{value:"Init your dbt project",id:"init-your-dbt-project",level:2},{value:"Setup you db connection",id:"setup-you-db-connection",level:2},{value:"Adding tables to your dbt project",id:"adding-tables-to-your-dbt-project",level:2},{value:"Learning more",id:"learning-more",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart---new-to-dbt"},"Quickstart - new to dbt"),(0,r.kt)("p",null,"You are not using dbt in your company but would like to try to re_data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Excellent choice!")," re_data can help you with data quality and is a good way to start using dbt in your organization, even if you are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"not yet ready to switch,"),(0,r.kt)("li",{parentName:"ul"},"happy with the current way of transforming data. ")),(0,r.kt)("h2",{id:"install-re_data-package"},"Install re_data package"),(0,r.kt)("p",null,"For the new users we recommend starting with installing re_data package in your python environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_data\n")),(0,r.kt)("p",null,"re_data includes dbt-core in dependencies so after this step you will already have it installed in your system. But in order to use dbt for your specific db you need to install dbt-postgres, dbt-snowflake, dbt-redshift, dbt-bigquery python package depending on what data warehouse you are planning to use."),(0,r.kt)("h2",{id:"init-your-dbt-project"},"Init your dbt project"),(0,r.kt)("p",null,"After intallation you can initialize your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init project_name\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note, that project which re_data initializes already contains 2 seed files (customers, orders) and pending_orders_per_customer model. Those are example tables added together with their re_data configuration. You are free to delete them, also you can follow up tutorial on running monitoring for them: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/toy_shop/toy_shop_data"},"toy shop tutorial \ud83d\ude0a")))),(0,r.kt)("h2",{id:"setup-you-db-connection"},"Setup you db connection"),(0,r.kt)("p",null,"dbt stores connection details for your db in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),". Example setup for dbs supported by re_data here:"),(0,r.kt)(o.Z,{defaultValue:"bigquery",values:[{label:"BigQuery",value:"bigquery"},{label:"Snowflake",value:"snowflake"},{label:"Redshift",value:"redshift"},{label:"Postgres",value:"postgres"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"snowflake",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: snowflake\n      account: xxx\n      user: xxx\n      password: xxx\n      database: database\n      warehouse: warehouse\n      schema: toy_shop\n"))),(0,r.kt)(l.Z,{value:"bigquery",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: bigquery\n      method: oauth\n      project: xxx\n      schema: toy_shop\n      location: US\n      threads: 4\n"))),(0,r.kt)(l.Z,{value:"redshift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: redshift\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5439\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n"))),(0,r.kt)(l.Z,{value:"postgres",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")))),(0,r.kt)("p",null,"More details on how to set up a profile file for your DB can be found in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/reference/profiles.yml"},"dbt profile docs"))),(0,r.kt)("h2",{id:"adding-tables-to-your-dbt-project"},"Adding tables to your dbt project"),(0,r.kt)("p",null,"Once you have the dbt project setup and a working connection with the data warehouse, you will need to add your current tables to your dbt project."),(0,r.kt)("p",null,"The easiest way to do that, assuming you don't want to add additional tables or views in your database, is to add tables you would like to monitor as dbt sources."),(0,r.kt)("p",null,"Assuming you have tables in your ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_name")," schema, this would be the configuration you would need to set up in dbt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="sources/schema.yml"',title:'"sources/schema.yml"'},"version: 2\nsources:\n  - name: schema_name\n    tables:\n      - name: table_name1\n      - name: table_name2\n      - name: table_name3\n")),(0,r.kt)("p",null,"More details on configuring sources can be found in dbt documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/using-sources"},"here")),(0,r.kt)("p",null,"Once you add these tables and make them visible in the dbt project (the one created by re_data), you can start monitoring your tables in re_data."),(0,r.kt)("p",null,"re_data dbt source configuration needs to be your into your ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),". Here is example of sources configuration in re_data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"sources:\n  project_name:\n    db_schema:\n      table_name1:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n      table_name1:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n")),(0,r.kt)("p",null,"After creating this configuration, you should be ready to compute re_data models containing metrics & anomalies of your tables. "),(0,r.kt)("h2",{id:"learning-more"},"Learning more"),(0,r.kt)("p",null,"We still recommend to follow introduction for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/installation/for_dbt_users"},"dbt users"))," and our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/toy_shop/toy_shop_data"},"example toyshop tutorial \ud83d\ude0a"))," for more details."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h3",{parentName:"admonition",id:"having-problems"},"Having problems?"),(0,r.kt)("p",{parentName:"admonition"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide.")))}m.isMDXComponent=!0}}]);