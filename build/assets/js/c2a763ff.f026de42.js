"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4934],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={title:"\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def",description:"\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/01xiaohongshu",source:"@site/blog/01xiaohongshu.md",title:"\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def",description:"\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def",date:"2022-08-02T15:45:39.484Z",formattedDate:"2022\u5e748\u67082\u65e5",tags:[],readingTime:2.57,truncated:!0,authors:[],prevItem:{title:"\u4eca\u65e5\u5934\u6761\u5728\u6d88\u606f\u670d\u52a1\u5e73\u53f0\u548c\u5bb9\u707e\u4f53\u7cfb\u5efa\u8bbe\u65b9\u9762\u7684\u5b9e\u8df5\u4e0e\u601d\u8003",permalink:"/blog/10jinritoutiao"},nextItem:{title:"\u963f\u91cc\u7684 RocketMQ \u5982\u4f55\u8ba9\u53cc\u5341\u4e00\u5cf0\u503c\u4e4b\u4e0b0\u6545\u969c",permalink:"/blog/02ali"}},p={authorsImageUrls:[]},f=[{value:"1. \u6d88\u606f\u961f\u5217\u4e1a\u52a1\u573a\u666f\u4e0e\u6311\u6218",id:"1-\u6d88\u606f\u961f\u5217\u4e1a\u52a1\u573a\u666f\u4e0e\u6311\u6218",children:[{value:"1.1 \u6574\u4f53\u89c4\u6a21",id:"11-\u6574\u4f53\u89c4\u6a21",children:[]},{value:"1.2 \u4e1a\u52a1\u67b6\u6784",id:"12-\u4e1a\u52a1\u67b6\u6784",children:[]},{value:"1.3 \u7a33\u5b9a\u6027\u6311\u6218",id:"13-\u7a33\u5b9a\u6027\u6311\u6218",children:[]},{value:"1.4 \u7a33\u5b9a\u6027\u6cbb\u7406",id:"14-\u7a33\u5b9a\u6027\u6cbb\u7406",children:[]}]}],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6d88\u606f\u961f\u5217\u4e1a\u52a1\u573a\u666f\u4e0e\u6311\u6218"},"1. \u6d88\u606f\u961f\u5217\u4e1a\u52a1\u573a\u666f\u4e0e\u6311\u6218"),(0,a.kt)("h3",{id:"11-\u6574\u4f53\u89c4\u6a21"},"1.1 \u6574\u4f53\u89c4\u6a21"),(0,a.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 RocketMQ \u548c Kafka \u7684\u603b\u4f53\u89c4\u6a21\u3002\u5176\u4e2d\u5cf0\u503c  TPS \u7684 8000w/s \u4e00\u822c\u51fa\u73b0\u5728\u665a\u4e0a\u4e0b\u73ed\u4ee5\u540e\u7684\u65f6\u95f4\u6bb5\uff0c\u5199\u5165\u91cf\u8fbe\u523050GB/s\uff0c\u6bcf\u5929\u65b0\u589e2-3PB\u6570\u636e\uff0c\u8282\u70b9\u65701200+\u4e2a\u3002"),(0,a.kt)("img",{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3gaz0px0oj21c40bumyo.jpg\n",alt:"Example banner"}),";",(0,a.kt)("h3",{id:"12-\u4e1a\u52a1\u67b6\u6784"},"1.2 \u4e1a\u52a1\u67b6\u6784"),(0,a.kt)("p",null,"\u867d\u7136 RocketMQ \u548c Kafka \u7684\u6027\u80fd\u76f8\u4f3c\uff0c\u4f46\u5728\u4f7f\u7528\u573a\u666f\u4e0a\u8fd8\u662f\u6709\u6240\u533a\u522b\u7684\u3002RocketMQ \u4e30\u5bcc\u7684\u4e1a\u52a1\u7279\u6027\u66f4\u9002\u7528\u4e8e\u5728\u7ebf\u4e1a\u52a1\u573a\u666f\uff0c\u800c Kafka \u7684\u9ad8\u541e\u5410\u6027\u4f7f\u5176\u66f4\u504f\u5411\u79bb\u7ebf\u3001\u8fd1\u7ebf\u4e1a\u52a1\u3002\u5f53\u7136\uff0c\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u4e5f\u4f1a\u6709\u4ea4\u53c9\u4f7f\u7528\u7684\u73b0\u8c61\uff0c\u6709\u65f6\u5728\u7ebf\u4e1a\u52a1\u4e5f\u4f1a\u4f7f\u7528 Kafka \u89e3\u8026\uff0c\u6709\u7684\u6d41\u5904\u7406\u6570\u636e\u4e5f\u4f1a\u4f7f\u7528 RocketMQ \u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u4e1a\u52a1\u603b\u4f53\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4e1a\u52a1\u65e5\u5fd7\u548cAPP\u7528\u6237\u884c\u4e3a\u6253\u70b9\u7c7b\u7684\u5185\u5bb9\u4f1a\u53d1\u7ed9 Kafka\uff0c\u6570\u636e\u5e93\u589e\u91cf\u65e5\u5fd7\u3001\u5728\u7ebf\u4e1a\u52a1\u3001\u7ebf\u4e0a\u6570\u636e\u4ea4\u6362\u7b49\u4f1a\u53d1\u7ed9 RocketMQ\u3002Kafka \u548c RocketMQ \u4e2d\u7684\u6570\u636e\u4f1a\u6709\u4e00\u90e8\u5206\u6d41\u5165 flink \u4e2d\u6784\u5efa\u5b9e\u65f6\u6570\u4ed3\u3001\u79bb\u7ebf\u6570\u4ed3\u4ee5\u53ca\u4e00\u4e9b\u6570\u636e\u4ea7\u54c1\uff08\u5982\u62a5\u8868\u3001\u76d1\u63a7\uff0c\u7b49\uff09\uff0cRocketMQ \u4e2d\u53e6\u4e00\u90e8\u5206\u6570\u636e\u4f1a\u7528\u4e8e\u5728\u7ebf\u4e1a\u52a1APP\u5f02\u6b65\u89e3\u8026\u3002"),(0,a.kt)("img",{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3gb1can0cj21c60no40y.jpg\n",alt:"Example banner"}),";",(0,a.kt)("h3",{id:"13-\u7a33\u5b9a\u6027\u6311\u6218"},"1.3 \u7a33\u5b9a\u6027\u6311\u6218"),(0,a.kt)("p",null,"a.   \u80cc\u666f\uff1a\n\u5c0f\u7ea2\u4e66\u6574\u4f53\u6536\u655b\u6d88\u606f\u7ec4\u4ef6\u8f83\u665a\uff0c\u516c\u53f8\u6280\u672f\u67b6\u6784\u6700\u5927\u7684\u76ee\u6807\u662f\u63d0\u5347\u7cfb\u7edf\u7a33\u5b9a\u6027\uff1b"),(0,a.kt)("p",null,"b.   \u6311\u6218\uff1a\n\u73b0\u5b58\u6d88\u606f\u7ec4\u4ef6\u4f7f\u7528\u91cf\u6781\u5927\uff0c\u4f46\u6ca1\u6709\u7a33\u5b9a\u6027\u4fdd\u969c\uff1b\u540c\u65f6\u9762\u4e34\u4eba\u624b\u7d27\u7f3a\u3001\u65f6\u95f4\u7d27\uff0c\u5bf9MQ\u539f\u7406\u4e86\u89e3\u4e0d\u6df1\u5165\u7684\u56f0\u5883\uff1b"),(0,a.kt)("p",null,"c.   \u7b56\u7565\uff1a\n\u5148\u505a\u76d1\u63a7\uff0c\u589e\u5f3a\u96c6\u7fa4\u7684\u53ef\u89c2\u6d4b\u80fd\u529b\u662f\u4e86\u89e3\u5176\u5065\u5eb7\u72b6\u51b5\u7684\u6700\u9ad8\u6548\u624b\u6bb5\u3002"),(0,a.kt)("h3",{id:"14-\u7a33\u5b9a\u6027\u6cbb\u7406"},"1.4 \u7a33\u5b9a\u6027\u6cbb\u7406"),(0,a.kt)("p",null,"\u9664\u4e86\u76d1\u63a7\u544a\u8b66\uff0c\u6211\u4eec\u5728\u7a33\u5b9a\u6027\u6cbb\u7406\u65b9\u9762\u8fd8\u505a\u4e86\u4ee5\u4e0b\u6539\u9020\u5de5\u4f5c\uff1a\na.   \u5f15\u64ce\uff1a\u8d44\u6e90\u9694\u79bb\uff0c\u65b0\u589e\u76d1\u63a7\u6253\u70b9\u7b49\uff1b\nb.   \u5e73\u53f0\uff1a\u5de5\u5355\u5ba1\u6838\uff0c\u6743\u9650\u7ba1\u63a7\uff0c\u4e1a\u52a1\u8ffd\u6eaf\uff1b\nc.   \u6cbb\u7406\uff1a\u9488\u5bf9\u96c6\u7fa4\u53ef\u89c6\u5316\u80fd\u529b\u548c\u96c6\u7fa4\u53ef\u8fd0\u7ef4\u80fd\u529b\u7684\u5efa\u8bbe\uff1b"),(0,a.kt)("img",{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3gb3mslkpj21680scabg.jpg\n",alt:"Example banner"}),";")}m.isMDXComponent=!0}}]);