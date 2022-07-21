"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4083],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={},i="\u6279\u91cf\u6d88\u606f\u53d1\u9001",p={unversionedId:"\u751f\u4ea7\u8005/08message4",id:"\u751f\u4ea7\u8005/08message4",isDocsHomePage:!1,title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",description:"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002",source:"@site/docs/02-\u751f\u4ea7\u8005/08message4.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/08message4",permalink:"/docs/\u751f\u4ea7\u8005/08message4",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/02-\u751f\u4ea7\u8005/08message4.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/07message3"},next:{title:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/09message5"}},u=[],l={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6279\u91cf\u6d88\u606f\u53d1\u9001"},"\u6279\u91cf\u6d88\u606f\u53d1\u9001"),(0,o.kt)("p",null,"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"batch",src:n(985).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{10,11,12,13}","{10,11,12,13}":!0},'public class SimpleBatchProducer {\n\n    public static void main(String[] args) throws Exception {\n        DefaultMQProducer producer = new DefaultMQProducer("BatchProducerGroupName");\n        producer.start();\n\n        //If you just send messages of no more than 1MiB at a time, it is easy to use batch\n        //Messages of the same batch should have: same topic, same waitStoreMsgOK and no schedule support\n        String topic = "BatchTest";\n        List<Message> messages = new ArrayList<>();\n        messages.add(new Message(topic, "Tag", "OrderID001", "Hello world 0".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID002", "Hello world 1".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID003", "Hello world 2".getBytes()));\n\n        producer.send(messages);\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u8c03\u7528\u975e\u5e38\u7b80\u5355\uff0c\u5c06\u6d88\u606f\u6253\u5305\u6210 Collection",(0,o.kt)("inlineCode",{parentName:"p"},"<Message>")," msgs\u4f20\u5165\u65b9\u6cd5\u4e2d\u5373\u53ef\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u6279\u91cf\u6d88\u606f\u7684\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 1MiB\uff08\u5426\u5219\u9700\u8981\u81ea\u884c\u5206\u5272\uff09\uff0c\u5176\u6b21\u540c\u4e00\u6279 batch \u4e2d topic \u5fc5\u987b\u76f8\u540c\u3002 "))))}m.isMDXComponent=!0},985:function(e,t,n){t.Z=n.p+"assets/images/batch-241308ac9ed97b3a1fbf0e5e6417f74d.png"}}]);