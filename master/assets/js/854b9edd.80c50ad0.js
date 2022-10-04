"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="Uploading reports",l={unversionedId:"re_cloud/upload_command",id:"re_cloud/upload_command",title:"Uploading reports",description:"recloud library has one command for uploading all the reports: recloud upload",source:"@site/docs/re_cloud/upload_command.md",sourceDirName:"re_cloud",slug:"/re_cloud/upload_command",permalink:"/master/docs/re_cloud/upload_command",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/upload_command.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quickstart \ud83d\ude80",permalink:"/master/docs/re_cloud/quickstart"}},d={},p=[{value:"Currently supported",id:"currently-supported",level:2},{value:"dbt-docs",id:"dbt-docs",level:3},{value:"pandas-profiling",id:"pandas-profiling",level:3},{value:"great-expectations",id:"great-expectations",level:3},{value:"jupyter notebook",id:"jupyter-notebook",level:3},{value:"re-data",id:"re-data",level:3},{value:"custom",id:"custom",level:3},{value:"common parameters",id:"common-parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"Help",id:"help",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uploading-reports"},"Uploading reports"),(0,n.kt)("p",null,"re_cloud library has one command for uploading all the reports: ",(0,n.kt)("inlineCode",{parentName:"p"},"re_cloud upload")),(0,n.kt)("p",null,"You can upload different reports with this command. Here is the list of how to do it: \ud83d\ude0a"),(0,n.kt)("h2",{id:"currently-supported"},"Currently supported"),(0,n.kt)("h3",{id:"dbt-docs"},"dbt-docs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload dbt-docs --name TEXT --project-dir TEXT\n\nOptions:\n  --project-dir TEXT  Which directory to look in for the dbt_project.yml file.\n                      Default is the current working directory and its parents\n  --name TEXT         Name of the upload used for identification\n")),(0,n.kt)("p",null,"You don't need to pass project-dir paramter if calling this command from witin dbt main directory. Otherwise pass ",(0,n.kt)("inlineCode",{parentName:"p"},"project-dir")," to upload generated docs from this directory."),(0,n.kt)("h3",{id:"pandas-profiling"},"pandas-profiling"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload pandas-profiling --name TEXT  --report-file TEXT\n\nOptions:\n--report-file TEXT  Pandas profiling file with html report  [required]\n--name TEXT         Name of the upload used for identification\n")),(0,n.kt)("p",null,"For pandas profiling --report-file is required paramter. re_data will upload your docs in ",(0,n.kt)("inlineCode",{parentName:"p"},"uncommitted/data_docs/local_site/")," path then."),(0,n.kt)("h3",{id:"great-expectations"},"great-expectations"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload great-expectations --name TEXT\n\nOptions:\n  --name TEXT  Name of the upload used for identification\n")),(0,n.kt)("p",null,"For great-expectation ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," to great-expectations directory. re_data uploads "),(0,n.kt)("h3",{id:"jupyter-notebook"},"jupyter notebook"),(0,n.kt)("p",null,"Usage: re_cloud upload jupyter-notebook --name TEXT  --file TEXT"),(0,n.kt)("p",null,"Options:\n--file TEXT  ipynb notebooks file to upload  ","[required]","\n--name TEXT  Name of the upload used for identification\n--help       Show this message and exit."),(0,n.kt)("h3",{id:"re-data"},"re-data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload re-data --name TEXT --project-dir TEXT --re-data-target-dir TEXT\n\nOptions:\n  --project-dir TEXT         Which directory to look in for the\n                             dbt_project.yml file. Default is the current\n                             working directory and its parents\n\n  --re-data-target-dir TEXT  Which directory to store artefacts generated by\n                             re_data Defaults to the 'target-path' used in\n                             dbt_project.yml\n\n  --name TEXT                Name of the upload used for identification\n")),(0,n.kt)("p",null,"If you are inside dbt project dir and didn't changed default ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," directory for docs and re_data both ",(0,n.kt)("inlineCode",{parentName:"p"},"project-dir")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"re-data-target-dir")," are optional."),(0,n.kt)("h3",{id:"custom"},"custom"),(0,n.kt)("p",null,"Using re_cloud you can also upload your custom html files with information about your data. Some of the popular libraries will generate html for you (for example ",(0,n.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_html.html"},"pandas to_html command"),") can can html created solely by yourself."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Usage: re_cloud upload custom --name TEXT  --file TEXT\n\nOptions:\n  --file TEXT  custom html file to upload  [required]\n  --name TEXT  Name of the upload used for identification\n  --help       Show this message and exit.\n")),(0,n.kt)("h2",{id:"common-parameters"},"common parameters"),(0,n.kt)("h3",{id:"name"},(0,n.kt)("inlineCode",{parentName:"h3"},"name")),(0,n.kt)("p",null,"Name which you would like to give to the report, this will show in the interface. Names don't need to and often will not be unique, given that in most of the pipelines you will be uploading similar reports every day / hours, etc."),(0,n.kt)("h2",{id:"help"},"Help"),(0,n.kt)("p",null,"Are you not familiar with some the mentioned tools and reports mentioned? We include sample reports from all of the tools on re_cloud ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free account \ud83d\ude0a"))),(0,n.kt)("p",null,"If you need any help with setting up the upload, let us know on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack")),", we will try to help right away \ud83d\ude0a"))}c.isMDXComponent=!0}}]);