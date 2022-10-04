"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[674],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(h,i(i({ref:t},d),{},{components:o})):r.createElement(h,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1557:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},l="Welcome to a toy shop!",p={unversionedId:"getting_started/toy_shop/toy_shop_data",id:"getting_started/toy_shop/toy_shop_data",isDocsHomePage:!1,title:"Welcome to a toy shop!",description:"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42",source:"@site/docs/getting_started/toy_shop/toy_shop_data.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/toy_shop_data",permalink:"/re-data/0.5.0/docs/getting_started/toy_shop/toy_shop_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/toy_shop_data.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation for starters",permalink:"/re-data/0.5.0/docs/getting_started/installation/new_to_dbt"},next:{title:"Observability data",permalink:"/re-data/0.5.0/docs/getting_started/toy_shop/compute_monitoring"}},d=[{value:"Checking out the toy shop",id:"checking-out-the-toy-shop",children:[]},{value:"Toy shop data",id:"toy-shop-data",children:[]},{value:"Profile setup",id:"profile-setup",children:[]},{value:"Loading data &amp; creating models",id:"loading-data--creating-models",children:[]}],c={toc:d};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-a-toy-shop"},"Welcome to a toy shop!"),(0,a.kt)("p",null,"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42"),(0,a.kt)("p",null,"It's an example of how a re_data project can work and help you improve data in your data warehouse"),(0,a.kt)("h2",{id:"checking-out-the-toy-shop"},"Checking out the toy shop"),(0,a.kt)("p",null,"To run re_data for toy_shop yourself, clone our repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/re-data/re-data"},"https://github.com/re-data/re-data")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to toy shop project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/re-data/re-data\ncd re-data/getting_started/toy_shop/\n")),(0,a.kt)("h2",{id:"toy-shop-data"},"Toy shop data"),(0,a.kt)("p",null,"Toy shop DB has 4 seed tables which we would like to observe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"customers"),(0,a.kt)("li",{parentName:"ul"},"orders"),(0,a.kt)("li",{parentName:"ul"},"order_items"),(0,a.kt)("li",{parentName:"ul"},"companies")),(0,a.kt)("p",null,"And some other dbt models we would like to observe too:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pending_orders"),(0,a.kt)("li",{parentName:"ul"},"orders_per_age"),(0,a.kt)("li",{parentName:"ul"},"revenue_per_age")),(0,a.kt)("p",null,"You can check them in ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"seeds")," folders for more details."),(0,a.kt)("h2",{id:"profile-setup"},"Profile setup"),(0,a.kt)("p",null,"For re_data to work you will need dbt connection with name ",(0,a.kt)("inlineCode",{parentName:"p"},"toy_shop")," to some test DB. Here is example of how it would look like for postgres, if need more details on that check out dbt ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/reference/profiles.yml"},"docs."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")),(0,a.kt)("h2",{id:"loading-data--creating-models"},"Loading data & creating models"),(0,a.kt)("p",null,"Now you are ready to load toy_shop seed data & create project models. Notice we exclude re_data from being run now, as we will want to run it in a separate process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dbt seed\ndbt run --exclude package:re_data\n")))}u.isMDXComponent=!0}}]);