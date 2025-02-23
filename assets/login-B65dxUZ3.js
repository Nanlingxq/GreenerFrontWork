import{S as F,d as P,r as p,a as V,c as U,b as o,e as t,w as i,f as c,E as h,u as A,o as B,g as m,h as k,l as f}from"./index-DdnSHeUd.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S="/GreenerFrontWork/assets/icon2-DGoYRmqE.png",G="/GreenerFrontWork/assets/icon1-X_FqoDFa.png",X=s=>{const r=document.querySelector(".pre-box"),l=document.querySelector("#avatar");s?(r.style.transform="translateX(100%)",r.style.backgroundColor="#9ee6aa",l.src=G):(r.style.transform="translateX(0%)",r.style.backgroundColor="#19b96e",l.src=S)},D=s=>F({...s,method:"get",params:s.data}),I=s=>F({...s,method:"post",data:s.data}),C={get:D,post:I},M=s=>C.post({url:"/api/login",data:s}),N=s=>C.post({url:"/api/register",data:s}),y={loginApi:M,registerApi:N},W=P("loginStore",{state:()=>({flag:!0}),actions:{toggleFlag(){this.flag=!this.flag}}}),Y={class:"bigBox"},$={class:"box",ref:"box"},j={class:"register-form"},z={class:"login-form"},H={__name:"login",setup(s){const r=p({username:"",password:""}),l=p({username:"",password:"",confirmPassword:""}),g=V(""),b=V(""),x=p({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度应该在3~5个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"长度应该大于6",trigger:"blur"}],confirmPassword:[{required:!0,message:"请输入确认密码",trigger:"blur"},{min:6,message:"长度应该大于6",trigger:"blur"}]}),_=A(),w=()=>{const n=W();X(n.flag),n.toggleFlag()},q=()=>{_.push({name:"home"}),g.value.validate(n=>{if(n)y.loginApi(r).then(e=>{console.log("login",e),e.status===0&&(h.success(e.message),window.sessionStorage.setItem("token",e.token),_.push("/home"))}).catch(e=>{console.log(e)});else return})},R=()=>{b.value.validate(n=>{if(n)y.registerApi(l).then(e=>{e.status===0&&h.success(e.message)}).catch(e=>{console.log(e)});else return})};return(n,e)=>{const u=c("el-input"),d=c("el-form-item"),v=c("el-form");return B(),U("div",Y,[o("div",$,[e[7]||(e[7]=o("div",{class:"pre-box"},[o("h1",null,"欢迎访问"),o("p",null,"我们的环保网站!"),o("div",{class:"img-box"},[o("img",{src:S,alt:"",id:"avatar"})])],-1)),o("div",j,[e[5]||(e[5]=o("div",{class:"title-box"},[o("h1",null,"注册")],-1)),t(v,{ref_key:"registerFormRef",ref:b,model:l,rules:x,"label-with":"5px"},{default:i(()=>[t(d,{prop:"username",label:" "},{default:i(()=>[t(u,{type:"text",placeholder:"用户名","suffix-icon":m(k),modelValue:l.username,"onUpdate:modelValue":e[0]||(e[0]=a=>l.username=a)},null,8,["suffix-icon","modelValue"])]),_:1}),t(d,{prop:"password",label:" "},{default:i(()=>[t(u,{type:"password",placeholder:"密码","suffix-icon":m(f),modelValue:l.password,"onUpdate:modelValue":e[1]||(e[1]=a=>l.password=a)},null,8,["suffix-icon","modelValue"])]),_:1}),t(d,{prop:"confirmPassword",label:" "},{default:i(()=>[t(u,{type:"password",placeholder:"确认密码","suffix-icon":m(f),modelValue:l.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=a=>l.confirmPassword=a)},null,8,["suffix-icon","modelValue"])]),_:1})]),_:1},8,["model","rules"]),o("div",{class:"btn-box"},[o("button",{onClick:R},"注册"),o("p",{onClick:w},"已有账号?去登录")])]),o("div",z,[e[6]||(e[6]=o("div",{class:"title-box"},[o("h1",null,"登录")],-1)),t(v,{ref_key:"loginFormRef",ref:g,model:r,rules:x,"label-with":"5px"},{default:i(()=>[t(d,{prop:"username",label:" "},{default:i(()=>[t(u,{type:"text",placeholder:"用户名","suffix-icon":m(k),modelValue:r.username,"onUpdate:modelValue":e[3]||(e[3]=a=>r.username=a)},null,8,["suffix-icon","modelValue"])]),_:1}),t(d,{prop:"password",label:" "},{default:i(()=>[t(u,{type:"password",placeholder:"密码","suffix-icon":m(f),modelValue:r.password,"onUpdate:modelValue":e[4]||(e[4]=a=>r.password=a)},null,8,["suffix-icon","modelValue"])]),_:1})]),_:1},8,["model","rules"]),o("div",{class:"btn-box"},[o("button",{onClick:q},"登录"),o("p",{onClick:w},"没有账号?去注册")])])],512)])}}},L=E(H,[["__scopeId","data-v-71af5461"]]);export{L as default};
