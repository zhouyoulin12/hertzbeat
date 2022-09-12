"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[6476],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const i={id:"extend-http",title:"HTTP Protocol Custom Monitoring",sidebar_label:"HTTP Protocol Custom Monitoring"},a=void 0,s={unversionedId:"advanced/extend-http",id:"advanced/extend-http",title:"HTTP Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use HTTP protocol to customize Metric monitoring",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-http.md",sourceDirName:"advanced",slug:"/advanced/extend-http",permalink:"/en/docs/advanced/extend-http",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-http.md",tags:[],version:"current",frontMatter:{id:"extend-http",title:"HTTP Protocol Custom Monitoring",sidebar_label:"HTTP Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"Custom Monitoring",permalink:"/en/docs/advanced/extend-point"},next:{title:"System Default Parsing Method",permalink:"/en/docs/advanced/extend-http-default"}},p={},l=[{value:"HTTP protocol collection process",id:"http-protocol-collection-process",level:3},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring configuration definition file",id:"monitoring-configuration-definition-file",level:3},{value:"Monitoring parameter definition file",id:"monitoring-parameter-definition-file",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"From ",(0,o.kt)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use HTTP protocol to customize Metric monitoring   ")),(0,o.kt)("h3",{id:"http-protocol-collection-process"},"HTTP protocol collection process"),(0,o.kt)("p",null,"\u3010",(0,o.kt)("strong",{parentName:"p"},"call HTTP interface"),"\u3011->\u3010",(0,o.kt)("strong",{parentName:"p"},"response verification "),"\u3011->\u3010",(0,o.kt)("strong",{parentName:"p"},"parse reponse data"),"\u3011->\u3010",(0,o.kt)("strong",{parentName:"p"},"default method parsing\uff5cJsonPath script parsing | XmlPath parsing(todo) | Prometheus parsing(todo)"),"\u3011->\u3010",(0,o.kt)("strong",{parentName:"p"},"Metric data extraction"),"\u3011"),(0,o.kt)("p",null,"It can be seen from the process that we define a monitoring type of HTTP protocol. We need to configure HTTP request parameters, configure which Metrics to obtain, and configure the parsing method and parsing script for response data.\nHTTP protocol supports us to customize HTTP request path, request header, request parameters, request method, request body, etc.   "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"System default parsing method"),"\uff1aHTTP interface returns the JSON data structure specified by hertzbeat, that is, the default parsing method can be used to parse the data and extract the corresponding Metric data. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"extend-http-default"},(0,o.kt)("strong",{parentName:"a"},"System Default Parsing")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"JsonPath script parsing method"),"\uff1aUse JsonPath script to parse the response JSON data, return the data structure specified by the system, and then provide the corresponding Metric data. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"extend-http-jsonpath"},(0,o.kt)("strong",{parentName:"a"},"JsonPath Script Parsing")),"    "),(0,o.kt)("h3",{id:"custom-steps"},"Custom Steps"),(0,o.kt)("p",null,"In order to configure a custom monitoring type, you need to add and configure two YML file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Monitoring configuration definition file named after monitoring type - eg\uff1aexample.yml in the installation directory /hertzbeat/define/app/ "),(0,o.kt)("li",{parentName:"ol"},"Monitoring parameter definition file named after monitoring type - eg\uff1aexample.yml in the installation directory /hertzbeat/define/param/ "),(0,o.kt)("li",{parentName:"ol"},"Restart hertzbeat system, we successfully fit a new custom monitoring type. ")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Configuration usages of the two files are detailed below. Please pay attention to usage annotation.   "),(0,o.kt)("h3",{id:"monitoring-configuration-definition-file"},"Monitoring configuration definition file"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Monitoring configuration definition file is used to define ",(0,o.kt)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.  ")),(0,o.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example_http which use the HTTP protocol to collect data.",(0,o.kt)("br",{parentName:"p"}),"\n","The file name: example_http.yml in /define/app/example_http.yml   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example_http\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\n# parameter mapping map. These are input parameter variables which can be written to the configuration in form of ^_^host^_^. The system automatically replace variable's value.\n# type means parameter type: 0-number number, 1-string cleartext string, 2-secret encrypted string\n# required parameters - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n# Metric group list\nmetrics:\n# The first monitoring Metric group cpu\n# Note\uff1athe built-in monitoring Metrics have (responseTime - response time)\n  - name: cpu\n    # The smaller Metric group scheduling priority(0-127), the higher the priority. After completion of the high priority Metric group collection,the low priority Metric group will then be scheduled. Metric groups with the same priority  will be scheduled in parallel.\n    # Metric group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # Specific monitoring Metrics in the Metric group\n    fields:\n      # Metric information include   field: name   type: field type(0-number: number, 1-string: string)   nstance: primary key of instance or not   unit: Metric unit\n      - field: hostname\n        type: 1\n        instance: true\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: cores\n        type: 0\n      - field: waitTime\n        type: 0\n        unit: s\n# (optional)Monitoring Metric alias mapping to the Metric name above. The field used to collect interface data is not the final Metric name directly. This alias is required for mapping conversion.\n    aliasFields:\n      - hostname\n      - core1\n      - core2\n      - usage\n      - allTime\n      - runningTime\n# (optional)The Metric calculation expression works with the above alias to calculate the final required Metric value.\n# eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - hostname=hostname\n      - cores=core1+core2\n      - usage=usage\n      - waitTime=allTime-runningTime\n# protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# Specific collection configuration when the protocol is HTTP protocol\n    http:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      # url request interface path\n      url: /metrics/cpu\n      # request mode: GET POST PUT DELETE PATCH\n      method: GET\n      # enable ssl/tls or not, that is to say, HTTP or HTTPS. The default is false\n      ssl: false\n      # request header content\n      headers:\n        apiVersion: v1\n      # request parameter content\n      params:\n        param1: param1\n        param2: param2\n      # authorization\n      authorization:\n        # authorization method: Basic Auth, Digest Auth, Bearer Token\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      # parsing method for reponse data: default-system rules, jsonPath-jsonPath script, website-website availability Metric monitoring\n      # todo xmlPath-xmlPath script, prometheus-Prometheus data rules\n      parseType: jsonPath\n      parseScript: '$'\n\n  - name: memory\n    priority: 1\n    fields:\n      - field: hostname\n        type: 1\n        instance: true\n      - field: total\n        type: 0\n        unit: kb\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: speed\n        type: 0\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /metrics/memory\n      method: GET\n      headers:\n        apiVersion: v1\n      params:\n        param1: param1\n        param2: param2\n      authorization:\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      parseType: default\n")),(0,o.kt)("h3",{id:"monitoring-parameter-definition-file"},"Monitoring parameter definition file"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Monitoring parameter definition file is used to define ",(0,o.kt)("em",{parentName:"p"},"required input parameter field structure definition (Front-end page render input parameter box according to structure)"),".  ")),(0,o.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example_http which use the HTTP protocol to collect data.",(0,o.kt)("br",{parentName:"p"}),"\n","The file name: example_http.yml in //define/param/example_http.yml   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Monitoring application type name(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example_http\n# required parameters - host(ipv4, ipv6, domain name)\nparam:\n    # field-field name identifier\n  - field: host\n    # name-parameter field display name\n    name: \n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-field type, style(most mappings are input label type attribute)\n    type: host\n    # required or not  true-required  false-optional\n    required: true\n  - field: port\n    name: \n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    # When type is number, range is used to represent the range.\n    range: '[0,65535]'\n    required: true\n    # port default\n    defaultValue: 80\n    # Prompt information of parameter input box\n    placeholder: 'Please enter the port'\n  - field: username\n    name: \n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    # When type is text, use limit to indicate the string limit size\n    limit: 20\n    required: false\n  - field: password\n    name: \n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n  - field: ssl\n    name: \n      zh-CN: \u542f\u52a8SSL\n      en-US: Enable SSL\n    # When type is boolean, front end uses switch to show the switch\n    type: boolean\n    required: false\n  - field: method\n    name: \n      zh-CN: \u8bf7\u6c42\u65b9\u5f0f\n      en-US: Method\n    type: radio\n    required: true\n    # When type is radio or checkbox, option indicates the list of selectable values {name1:value1,name2:value2}\n    options:\n      - label: GET request\n        value: GET\n      - label: POST request\n        value: POST\n      - label: PUT request\n        value: PUT\n      - label: DELETE request\n        value: DELETE\n")))}u.isMDXComponent=!0}}]);