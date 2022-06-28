import{p as d,u as m,r as g,a as B,j as u,C as f,P as y,b as E,L as x,S as I,G as v,B as c,s as A,e as T,c as i,T as o,d as e}from"./index.ec682950.js";import{u as w}from"./use-form.5ab8f94c.js";import{T as S}from"./TextInput.b4dde9f3.js";import{C as O}from"./Container.b6abd195.js";import"./use-id.10611058.js";class l{constructor(){this.serviceName="user"}createOne(r){return d(this.serviceName,"createOne",r)}updateOne(r){return d(this.serviceName,"updateOne",r)}getById(r){return d(this.serviceName,"getById",r)}}function b(){const{t:F}=m(),[r,n]=g.exports.useState(!1),{setUser:C}=B(),D=async()=>{n(!0);try{const{data:s}=await new l().createOne({});s.id?(C({id:s.id}),A(F("loadUserPage.createSuccess"))):T(F("loadUserPage.networkError"))}finally{n(!1)}},h=async({id:s})=>{n(!0),setTimeout(async()=>{try{const{data:t}=await new l().getById({id:s});t!=null&&t.id?(C({id:t.id}),A(F("loadUserPage.loadSuccess"))):p("id",F("no-corresponding-data-for-this-ID"))}finally{n(!1)}},1e3)},a=w({initialValues:{id:""},validate:{id:s=>s?null:F("can-not-be-empty")}}),{setFieldError:p}=a;return u(f,{style:{width:"100%",maxHeight:"100%",height:"300px"},children:u(y,{shadow:"xs",p:"md",radius:"lg",sx:{position:"relative"},children:E("form",{onSubmit:a.onSubmit(h),children:[u(x,{visible:r}),u(S,{sx:{width:"300px"},label:F("ID-check"),description:F("ID-check-warning"),...a.getInputProps("id"),placeholder:F("ID-check-placeholder")}),u(I,{h:"sm"}),E(v,{spacing:"sm",position:"right",children:[u(c,{size:"xs",variant:"outline",radius:"lg",onClick:D,children:F("new-form")}),u(c,{size:"xs",radius:"lg",type:"submit",color:"green",children:F("load-form")})]})]})})})}function j(){const{user:F}=B();return u(O,{size:1200,children:E(i,{p:"lg",children:[u(o,{order:2,children:"\u6B22\u8FCE\u6765\u5230 ArkSurvey"}),u(e,{py:"md",children:"\u806A\u660E\u7684\u4F60\u80AF\u5B9A\u53D1\u73B0\u4E86\uFF0C\u8FD9\u4E2A\u7F51\u7AD9\u662F\u7528\u6765\u8C03\u67E5\u3001\u7EDF\u8BA1\u3001\u5C55\u73B0\u660E\u65E5\u65B9\u821F\u73A9\u5BB6\u7684\u5404\u79CD\u6570\u636E\uFF0C\u5305\u62EC\u4E3B\u89C2\u7684\u5F3A\u5EA6\u8BC4\u4EF7\u3001\u5BA2\u89C2\u7684\u7EC3\u5EA6\u7B49\u3002"}),F.id?u(o,{order:3,children:"\u53EF\u4EE5\u968F\u610F\u4F7F\u7528\u5566"}):u(b,{}),E(i,{py:"md",children:[u(e,{children:"Q\uFF1A\u5E94\u8BE5\u600E\u4E48\u7528\u5462\uFF1F"}),u(e,{children:"A\uFF1A\u5982\u679C\u4F60\u662F\u65B0\u4EBA\u7684\u8BDD\uFF0C\u8BF7\u5148\u65B0\u5EFA\u4E00\u4E2A\u7528\u6237 ID\uFF08\u771F\u7684\uFF0C\u70B9\u4E00\u4E0B\u5C31\u884C\u4E0D\u7528\u8F93\u5176\u4ED6\u4E1C\u897F\uFF09\uFF0C\u8BB0\u5F97\u590D\u5236\u4FDD\u5B58\u54E6\uFF0C\u4EE5\u540E\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A ID \u52A0\u8F7D\u4F60\u4E4B\u524D\u4FDD\u5B58\u7684\u6570\u636E\uFF08\u5F53\u7136\u522B\u4EBA\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A ID \u4FEE\u6539\u4F60\u7684\u6570\u636E\u54E6\uFF0C\u6CE8\u610F\u4E0D\u8981\u6CC4\u9732\u4E86\uFF09\uFF0C\u4E4B\u540E\u5C31\u662F\u586B\u586B\u586B\u5566\uFF0C\u4E5F\u53EF\u4EE5\u53BB\u770B\u7EDF\u8BA1\u9875\u9762\u4E86\u3002"})]}),E(i,{py:"md",children:[u(e,{children:"Q\uFF1A\u54E6\uFF0C\u4E3A\u4EC0\u4E48\u8981\u505A\u8FD9\u4E48\u4E00\u4E2A\u7F51\u7AD9\u5462\uFF0C\u662F\u7528\u6765 TTK \u5417\uFF1F"}),E(e,{children:["A\uFF1A",u("del",{children:"\u786E\u5B9E\uFF0C\u672C\u7F51\u7AD9\u4E3B\u8981\u5C31\u662F\u7528\u6765\u4E3A TTK \u63D0\u4F9B\u6570\u636E\u7684"}),"NO\uFF0C\u672C\u7F51\u7AD9\u4E00\u662F\u4E3A\u4E86\u7ED9\u840C\u65B0\u4E00\u4E2A\u5927\u6570\u636E\u5411\u7684\u517B\u6210\u6307\u5BFC\uFF0C\u6216\u8005\u7ED9\u8001\u73A9\u5BB6\u4E00\u4E2A\u8865\u5168BOX\u7684\u65B9\u5411\uFF0C \u4E8C\u662F\u53D1\u6398\u51FA\u4E00\u4E9B\u666E\u901A\u65B9\u6CD5\u65E0\u6CD5\u53D1\u73B0\u7684\u6709\u8DA3\u6570\u636E\uFF0C\u81F3\u4E8E\u5176\u4ED6\u7528\u9014\u4F60\u4EEC\u53EF\u4EE5\u81EA\u884C\u53D1\u6398\uFF08\u786E\u4FE1"]})]}),E(i,{py:"md",children:[u(e,{children:"Q\uFF1A\u611F\u89C9\u633A\u672A\u6765\u53EF\u671F\u554A\uFF0C\u6709\u540E\u7EED\u7684\u66F4\u65B0\u8BA1\u5212\u5417\uFF1F"}),E(e,{children:["A\uFF1A",u("del",{children:"\u522B\u95EE\uFF0C\u95EE\u5C31\u662F\u6CA1\u6709"}),"\u5148\u5B9A\u4E2A\u5C0F\u76EE\u6807\uFF0C\u56FD\u5E86\u524D\u5B8C\u6210 v1.0\uFF0C\u5230\u65F6\u5019\u9875\u9762\u4E0A\u9762\u5C31\u4E0D\u4F1A\u6709\u7070\u8272\u6309\u94AE\u4E86\uFF0C \u800C\u4E14\u5E94\u8BE5\u8FD8\u4F1A\u989D\u5916\u589E\u52A0\u51E0\u4E2A\u5173\u4E8E\u535A\u58EB\u81EA\u5DF1\u7684\u8868\u5355\u3002"]})]}),E(i,{py:"md",children:[u(e,{children:"Q\uFF1A\u4F60\u8FD9\u9996\u9875\u600E\u4E48\u753B\u98CE\u548C\u5176\u4ED6\u9875\u9762\u4E0D\u4E00\u6837\uFF1F"}),u(e,{children:"A\uFF1A\u56E0\u4E3A\u7F3A\u4EBA\u54E6\uFF0C\u5982\u679C\u591A\u6765\u51E0\u4E2A\u5927\u4F6C\uFF0C\u4F30\u8BA1\u8FD9\u9996\u9875\u5C31\u4E0D\u4E00\u6837\u4E86\uFF0C\u6240\u4EE5\u5927\u4F6C\u5FEB\u6765\u52A0\u5165\u6211\u4EEC\u5427\uFF01\uFF08\u4E0D\u53EA\u662F\u7A0B\u5E8F\u54E6\uFF0C\u7F8E\u5DE5\u3001\u6587\u6848\u3001\u8BBE\u8BA1\u3001\u8FD0\u8425\u90FD\u6CA1\u4EBA"})]})]})})}export{j as default};
