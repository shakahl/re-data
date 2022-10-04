"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[255],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>_});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),_=n,p=u["".concat(s,".").concat(_)]||u[_]||m[_]||o;return a?r.createElement(p,i(i({ref:t},c),{},{components:a})):r.createElement(p,i({ref:t},c))}));function _(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(7462),n=a(7294),o=a(6010),i=a(2389),l=a(7392),s=a(7094),d=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:i,defaultValue:u,values:_,groupId:p,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=_??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[w,N]=(0,n.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=p){const e=v[p];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),r=h[a].value;r!==w&&(x(t),N(r),null!=p&&k(p,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function _(e){const t=(0,i.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},9352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>_,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),i=a(5162);const l={sidebar_position:0},s="Configuration \u2699\ufe0f",d={unversionedId:"re_data/reference/config",id:"re_data/reference/config",title:"Configuration \u2699\ufe0f",description:"To run redata you would need to configure what tables should be monitored and set up some properties of this monitoring. You may also want/need to update some of the defaults vars use by redata to run it for specific time windows or compute types of metrics you need.",source:"@site/docs/re_data/reference/config.mdx",sourceDirName:"re_data/reference",slug:"/re_data/reference/config",permalink:"/latest/docs/re_data/reference/config",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/config.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/latest/docs/re_data/getting_started/toy_shop/notifications"},next:{title:"Init",permalink:"/latest/docs/re_data/reference/cli/init"}},c={},m=[{value:"Model level config",id:"model-level-config",level:2},{value:"Monitoring properties",id:"monitoring-properties",level:2},{value:"re_data_monitored",id:"re_data_monitored",level:3},{value:"re_data_time_filter (optional)",id:"re_data_time_filter-optional",level:3},{value:"re_data_columns (optional)",id:"re_data_columns-optional",level:3},{value:"re_data_metrics_groups (optional)",id:"re_data_metrics_groups-optional",level:3},{value:"re_data_metrics (optional)",id:"re_data_metrics-optional",level:3},{value:"re_data_anomaly_detector (optional)",id:"re_data_anomaly_detector-optional",level:3},{value:"re_data_owners (optional)",id:"re_data_owners-optional",level:3},{value:"Global config vars",id:"global-config-vars",level:2},{value:"re_data:time_window_start, re_data:time_window_end",id:"re_datatime_window_start-re_datatime_window_end",level:3},{value:"re_data:select",id:"re_dataselect",level:3},{value:"re_data:metrics_groups",id:"re_datametrics_groups",level:3},{value:"re_data:default_metrics",id:"re_datadefault_metrics",level:3},{value:"re_data:anomaly_detector",id:"re_dataanomaly_detector",level:3},{value:"re_data:anomaly_detection_look_back_days",id:"re_dataanomaly_detection_look_back_days",level:3},{value:"re_data:save_test_history",id:"re_datasave_test_history",level:3},{value:"re_data:query_test_failures",id:"re_dataquery_test_failures",level:3},{value:"re_data:test_history_failures_limit",id:"re_datatest_history_failures_limit",level:3},{value:"re_data:store_table_samples",id:"re_datastore_table_samples",level:3},{value:"re_data:owners_config",id:"re_dataowners_config",level:3}],u={toc:m};function _(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration-\ufe0f"},"Configuration \u2699\ufe0f"),(0,n.kt)("p",null,"To run re_data you would need to configure what tables should be monitored and set up some properties of this monitoring. You may also want/need to update some of the defaults vars use by re_data to run it for specific time windows or compute types of metrics you need."),(0,n.kt)("h2",{id:"model-level-config"},"Model level config"),(0,n.kt)("p",null,"Currently re_data supports dbt native configuration, by leveraging dbt models & sources configs."),(0,n.kt)("p",null,"If you are not familiar with dbt models & sources configuration we encourage to check the dbt: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/model-configs"},"model-configs")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/source-configs"},"source-configs")," documentation."),(0,n.kt)("p",null,"re_data dbt native cofiguration follows the same rules as dbt configuration, config block inside model will have the most priority and configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," will have the least priority."),(0,n.kt)(o.Z,{defaultValue:"config_block",values:[{label:"Config block",value:"config_block"},{label:"Property file",value:"property_file"},{label:"Project file",value:"project_file"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"config_block",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="<model_name>.sql"',title:'"<model_name>.sql"'},"{{\n    config(\n      re_data_monitored=true,\n      re_data_time_filter='creation_time',\n      re_data_columns=['amount', 'status'],\n      re_data_metrics_groups=['table_metrics', 'column_metrics'],\n      re_data_metrics={'table': ['orders_obove_100'], 'column': { 'status': ['distinct_values'],\n      re_data_anomaly_detector={'name': 'modified_z_score', 'threshold': 3.0} }},\n      re_data_owners=['datateam']\n    )\n}}\n\n\nselect ...\n"))),(0,n.kt)(i.Z,{value:"property_file",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=schema.yml",title:"schema.yml"},"version: 2\n\nmodels:\n  - name: pending_orders\n    config:\n      re_data_monitored: true\n      re_data_time_filter: created_at\n      re_data_columns:\n        - amount\n        - status\n      re_data_metrics_groups:\n        - table_metrics\n      re_data_metrics:\n        table:\n          - orders_above_100\n        column:\n          status:\n            - distinct_values\n      re_data_anomaly_detector:\n        name: modified_z_score\n        threshold: 3\n          \n          \n"))),(0,n.kt)(i.Z,{value:"project_file",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"models:\n  toy_shop:\n    revenue:\n      +re_data_monitored: true\n      +re_data_time_filter: created_at\n      +re_data_anomaly_detector:\n        name: modified_z_score\n        threshold: 3\n      +re_data_metrics_groups:\n        - table_metrics\n\n      orders_per_age:\n        +re_data_metrics:\n          table:\n            - orders_above_100\n\nsources:\n  toy_shop:\n    toy_shop_sources:\n      toy_shop_customers:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n  \nseeds:\n  toy_shop:\n    order_items:\n      +re_data_monitored: true\n      +re_data_time_filter: added_at\n      +re_data_anomaly_detector:\n        name: z_score\n        threshold: 3\n      +re_data_columns:\n        - name\n        - amount\n\n")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"dbt 1.1.0 introduced config for sources so ",(0,n.kt)("inlineCode",{parentName:"p"},"Property file")," configuration for sources in available since dbt 1.1.0")),(0,n.kt)("p",null,"You can define configuration on many levels; it's common to enable re_data for a group of tables (for example, all sources). It's also common to override some of the properties for specific groups."),(0,n.kt)("p",null,"Now let's go over the configuration you can set on models"),(0,n.kt)("h2",{id:"monitoring-properties"},"Monitoring properties"),(0,n.kt)("h3",{id:"re_data_monitored"},"re_data_monitored"),(0,n.kt)("p",null,"Set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to enable monitoring for a given table or set of tables."),(0,n.kt)("h3",{id:"re_data_time_filter-optional"},"re_data_time_filter (optional)"),(0,n.kt)("p",null,"SQL expression (for example, column name) to filter records of the table to a specific time range. It can be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if you wish to compute metrics on the whole table. This expression will be compared to ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:time_window_start")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:time_window_end")," vars during the run. (described below)"),(0,n.kt)("h3",{id:"re_data_columns-optional"},"re_data_columns (optional)"),(0,n.kt)("p",null,"Set of columns for which re_data should compute metrics. If not specified, re_data will compute stats for all columns with either numeric or text types."),(0,n.kt)("h3",{id:"re_data_metrics_groups-optional"},"re_data_metrics_groups (optional)"),(0,n.kt)("p",null,"List of groups of metrics to compute. You can use any ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:metrics_groups")," defined in your vars here.\nIf not specified, re_data will compute metrics defined by ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:default_metrics")," variable."),(0,n.kt)("h3",{id:"re_data_metrics-optional"},"re_data_metrics (optional)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Additional")," metrics to be computed for a given table (set of tables). Those can be either whole ",(0,n.kt)("inlineCode",{parentName:"p"},"table")," level or ",(0,n.kt)("inlineCode",{parentName:"p"},"column")," level. (Check out ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/overview_metric"},"metrics"))," section to learn distinction between the two)"),(0,n.kt)("p",null,"You can be pass any number of already defined or your custom metrics to be computed. Check out ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/extra_metrics"},"extra metrics"))," section for available metrics and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/your_own_metric"},"custom metrics"))," for ways to define your own metrics."),(0,n.kt)("p",null,"In a lot of cases when you extend metrics which are computed we recommend creating a new ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:metrics_groups")," in your vars,\nadding your metrics to it and then defining ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_metrics_groups")," to use it for set of models.\nThis approach is usually more flexible when adding new metrics for a given model."),(0,n.kt)("h3",{id:"re_data_anomaly_detector-optional"},"re_data_anomaly_detector (optional)"),(0,n.kt)("p",null,"Alternative anomaly dector with it's parameters to use when detecting anomalies in a given model (set of models)"),(0,n.kt)("p",null,"For details about configuration look into ",(0,n.kt)("a",{parentName:"p",href:"anomaly_detection"},"Anomaly Detection")),(0,n.kt)("h3",{id:"re_data_owners-optional"},"re_data_owners (optional)"),(0,n.kt)("p",null,"Group of single person which should receive and alert about problem with a given model."),(0,n.kt)("p",null,"For details about configuration look into ",(0,n.kt)("a",{parentName:"p",href:"notifications/configuring_owners"},"Notifications")),(0,n.kt)("h2",{id:"global-config-vars"},"Global config vars"),(0,n.kt)("p",null,"Apart from model specific config re_data enables you to edit global configuration for some of the parameters.\nAll of them are optional so we start with sensible defaults and let you override if there is a need."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Parameters of re_data configuration"',title:'"Parameters',of:!0,re_data:!0,'configuration"':!0},"vars:\n  # (optional) if not passed, stats for last day will be computed\n  re_data:time_window_start: '{{ (run_started_at - modules.datetime.timedelta(1)).strftime(\"%Y-%m-%d 00:00:00\") }}'\n  re_data:time_window_end: '{{ run_started_at.strftime(\"%Y-%m-%d 00:00:00\") }}'\n  \n  # (optional) configuring \n  re_data:select:\n    - model_name1\n    - model_name2\n    - source_name1\n\n  # (optional) tells how much hisory you want to consider when looking for anomalies\n  re_data:anomaly_detection_look_back_days: 30\n\n  # (optional) configuring storing tests history\n  re_data:save_test_history: true\n\n  # (optional) querying db for failing rows\n  re_data:query_test_failures: true\n\n  # (optional) limit the number of failed rows returned per test\n  re_data:test_history_failures_limit: 10\n\n  # (optional) configuring storing table samples\n  re_data:store_table_samples: true\n\n  # (optional) configuring owners\n  re_data:owners_config:\n    datateam:\n      - type: slack\n        identifier: U02FHBSXXXX\n        name: user1\n    backend:\n      - type: email\n        identifier: user1@getre.io\n        name: user1\n\n")),(0,n.kt)("h3",{id:"re_datatime_window_start-re_datatime_window_end"},"re_data:time_window_start, re_data:time_window_end"),(0,n.kt)("p",null,"re_data metrics are time-based. (re_data filters all your table data to a specific time window.)\nIn general, we advise setting up a time window this way that all new data is monitored.\nIt's also possible to compute metrics from overlapping data for example last 7 days."),(0,n.kt)("p",null,"By default, re_data computes daily stats from the last day (it actually uses exact configuration from example for that)"),(0,n.kt)("h3",{id:"re_dataselect"},"re_data:select"),(0,n.kt)("p",null,"This is a list which allows you to additionally restrict re_data to only compute metrics/anomalies for certain models.\nEach model listed here still needs to have ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_monitored=true")," to be monitored.\nIf the list is not passed, re_data will computed stats for all ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_monitored=true")," models."),(0,n.kt)("p",null,"List elements can be either model/source name or dbt tags which your models have. Example select section with tags would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"vars:\n  ...\n\n  re_data:select:\n    - tag:my_tag_name\n    - tag:my_other_tag_name\n    - specific_table\n    - other_specific_table\n")),(0,n.kt)("h3",{id:"re_datametrics_groups"},"re_data:metrics_groups"),(0,n.kt)("p",null,"Groups of metrics to compute. By defult ",(0,n.kt)("inlineCode",{parentName:"p"},"table_metrics")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"column_metrics")," are defined here, and that's their definition:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"re_data:metrics_groups:\n  table_metrics:\n    table:\n      - row_count\n      - freshness\n\n  column_metrics:\n    column:\n      numeric:\n        - min\n        - max\n        - avg\n        - stddev\n        - variance\n        - nulls_count\n        - nulls_percent\n      text:\n        - min_length\n        - max_length\n        - avg_length\n        - nulls_count\n        - missing_count\n        - nulls_percent\n        - missing_percent\n")),(0,n.kt)("p",null,"You can redefine this var any way you want. If you remove ",(0,n.kt)("inlineCode",{parentName:"p"},"table_metrics"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"column_metrics")," group you will then not be able to use them in ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_metrics_groups")," settings."),(0,n.kt)("h3",{id:"re_datadefault_metrics"},"re_data:default_metrics"),(0,n.kt)("p",null,"Default metrics to compute for each model if no ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_metrics_groups")," is specified. You can use any of the metrics groups defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:metrics_groups")," here.\nThe default re_data configuration is a follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"re_data:default_metrics:\n  - table_metrics\n  - column_metrics\n")),(0,n.kt)("h3",{id:"re_dataanomaly_detector"},"re_data:anomaly_detector"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"anomaly_detection"},"Anomaly Detection")),(0,n.kt)("h3",{id:"re_dataanomaly_detection_look_back_days"},"re_data:anomaly_detection_look_back_days"),(0,n.kt)("p",null,"The period which ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data")," considers when looking for anomalies. (By default, it's 30 days)"),(0,n.kt)("h3",{id:"re_datasave_test_history"},"re_data:save_test_history"),(0,n.kt)("p",null,"Variable to enable storing test history. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/re_data/reference/tests/history"},"re_data tests history")," for more details."),(0,n.kt)("h3",{id:"re_dataquery_test_failures"},"re_data:query_test_failures"),(0,n.kt)("p",null,"Variable to configure if re_data should query failed rows (",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by default)"),(0,n.kt)("h3",{id:"re_datatest_history_failures_limit"},"re_data:test_history_failures_limit"),(0,n.kt)("p",null,"Variable to configure how many failured rows to fetch per table (",(0,n.kt)("inlineCode",{parentName:"p"},"10")," by default)"),(0,n.kt)("h3",{id:"re_datastore_table_samples"},"re_data:store_table_samples"),(0,n.kt)("p",null,"This is used to enable storing sample data of monitored tables."),(0,n.kt)("h3",{id:"re_dataowners_config"},"re_data:owners_config"),(0,n.kt)("p",null,"Variable to configure owners for your data.  See ",(0,n.kt)("a",{parentName:"p",href:"/docs/re_data/reference/notifications/configuring_owners"},"re_data notifications")," for more details."))}_.isMDXComponent=!0}}]);