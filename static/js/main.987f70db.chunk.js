(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){e.exports={userBlock:"Users_userBlock__pP45E",paginationBlock:"Users_paginationBlock__39sE2",page:"Users_page__3KGly",active:"Users_active__SYpTy",userInformation:"Users_userInformation__22EcP",followButton:"Users_followButton__3DkDc",followIcon:"Users_followIcon__1RYxd",userDescription:"Users_userDescription__39_Vf",userPhoto:"Users_userPhoto__H4-bv"}},182:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return v})),n.d(t,"h",(function(){return _})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return y}));var r=n(22),a=n.n(r),c=n(43),s=n(89),o=n(9),i=n(32),u=n(73),l=n(416),f="profile/ADD-POST",j="profile/SET-USER-PROFILE",d="profile/SET-STATUS",p="profile/SAVE-PHOTO-SUCCESS",b="profile/DELETE_POST",h={posts:[{id:"1",likeCount:5,post:"Hi! How are you?"},{id:"2",likeCount:15,post:"I learn React!)))"}],profile:null,status:""},O=function(e){return{type:f,newPostText:e}},g=function(e){return{type:b,id:e}},m=function(e){return{type:d,status:e}},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:j,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.c.updateStatus(e);case 3:t.sent.resultCode===i.a.Success&&n(m(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.savePhoto(e);case 2:(r=t.sent).resultCode===i.a.Success&&n((a=r.data,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.c.saveProfile(e);case 3:if(0!==(s=t.sent).resultCode){t.next=12;break}if(null==c){t.next=9;break}n(x(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={id:Object(l.a)(),post:t.newPostText,likeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts))});case b:return Object(o.a)(Object(o.a)({},e),{},{posts:Object(s.a)(e.posts.filter((function(e){return e.id!==t.id})))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(9),a=n(92),c=n(93),s=n(95),o=n(94),i=n(4),u=n(0),l=n.n(u),f=n(31),j=n(35),d=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(s.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(e,Object(r.a)({},this.props)):Object(i.jsx)(f.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(d)(t)}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(89),a=n(9),c="dialogs/ADD-MESSAGE",s={dialogsData:[{id:1,name:"Katya"},{id:2,name:"Sasha"},{id:3,name:"Eva"},{id:4,name:"Alisa"},{id:5,name:"Ivan"},{id:6,name:"Roma"}],messageData:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"How are you?"},{id:4,message:"Fine. And you?"},{id:5,message:"Good. Thanks"}]},o=function(e){return{type:c,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[{id:7,message:t.newMessageText}])});default:return e}}},232:function(e,t,n){"use strict";t.a=n.p+"static/media/user.a634a2f6.png"},248:function(e,t,n){e.exports={form_summary_error:"FormsControls_form_summary_error__1-4rE",error:"FormsControls_error__3oE9L"}},253:function(e,t,n){e.exports={userPhoto:"Header_userPhoto__1bH2a"}},292:function(e,t,n){},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return f}));var r,a,c=n(237),s=n.n(c);!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var o=s.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fe3cd028-48b8-4f24-aace-482e17e6fa4c"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return o.post("follow/".concat(e))},unfollow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return o.delete("follow/".concat(e))}},u={getProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return o.put("profile",e).then((function(e){return e.data}))}},l={me:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return o.delete("auth/login").then((function(e){return e.data}))}},f={getCaptchaUrl:function(){return o.get("/security/get-captcha-url")}}},414:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),s=(n(196),n(33)),o=n.n(s),i=n(92),u=n(93),l=n(95),f=n(94),j=(n(292),n(31)),d=n(40),p=n(35),b=n(26),h=n(9),O=n(22),g=n.n(O),m=n(43),x=n(32),v=n(73),_="auth/SET_USER_DATA",w="auth/GET_CAPTCHA_URL_SUCCESS",y={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},P=function(e,t,n,r){return{type:_,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(e){return{type:w,payload:{captchaUrl:e}}},C=function(){return function(){var e=Object(m.a)(g.a.mark((function e(t){var n,r,a,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.b.me();case 2:(n=e.sent).resultCode===x.a.Success&&(r=n.data,a=r.id,c=r.email,s=r.login,t(P(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(m.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(S(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case _:return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},k="INITIALIZED_SUCCESS",I={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},A=n(194),N=n(209),F=n(89),L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(h.a)(Object(h.a)({},e),r):e}))},D="users/FOLLOW",z="users/UNFOLLOW",R="users/SET_USERS",G="users/SET_CURRENT_PAGE",H="users/SET_TOTAL_USERS_COUNT",M="users/TOGGLE_IS_FETCHING",B="users/TOGGLE_IS_FOLLOWING_PROGRESS",W={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},K=function(e){return{type:D,userID:e}},V=function(e){return{type:z,userID:e}},q=function(e){return{type:G,currentPage:e}},Y=function(e){return{type:M,isFetching:e}},J=function(e,t){return{type:B,isFetching:e,userID:t}},X=function(){var e=Object(m.a)(g.a.mark((function e(t,n,r,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0,n)),e.next=3,r(n);case 3:e.sent.data.resultCode===x.a.Success&&t(a(n)),t(J(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(h.a)(Object(h.a)({},e),{},{users:L(e.users,t.userID,"id",{followed:!0})});case z:return Object(h.a)(Object(h.a)({},e),{},{users:L(e.users,t.userID,"id",{followed:!1})});case R:return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case G:return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case H:return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.count});case M:return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case B:return Object(h.a)(Object(h.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(F.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},Q=n(238),$=n(234),ee=Object(b.c)({profilePage:A.b,dialogsPage:N.b,usersPage:Z,auth:U,app:T,form:$.a}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,ne=Object(b.e)(ee,te(Object(b.a)(Q.a)));window.store=ne;var re=ne,ae=n(109),ce=n.n(ae),se=n(424),oe=function(e){var t=e.totalUsersCount,n=e.onPageChanged;return Object(r.jsx)(se.a,{total:1|t,showSizeChanger:!1,onChange:n})},ie=n(425),ue=n(426),le=n(257),fe=n(428),je=n(429),de=n(430),pe={userBlock:{width:"400px",margin:" 20px 0"}},be=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return Object(r.jsxs)("div",{className:ce.a.user,children:[Object(r.jsxs)(ie.a,{style:pe.userBlock,children:[Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(d.b,{to:"/profile/"+t.id,children:null!==t.photos.small?Object(r.jsx)("img",{className:ce.a.userPhoto,src:t.photos.small,alt:"user avatar"}):Object(r.jsx)(ue.a,{size:64,icon:Object(r.jsx)(fe.a,{})})}),Object(r.jsxs)("div",{className:ce.a.userDescription,children:[Object(r.jsx)(d.b,{to:"/profile/"+t.id,children:Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:t.name})})}),Object(r.jsx)("span",{children:Object(r.jsx)("i",{children:t.status?t.status:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})})]})]}),Object(r.jsx)("div",{style:{marginTop:"20px"},children:t.followed?Object(r.jsx)(le.a,{type:"primary",icon:Object(r.jsx)(je.a,{}),disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(r.jsx)(le.a,{type:"primary",icon:Object(r.jsx)(de.a,{}),disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]},t.id),")"]})},he=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,c=e.followingInProgress,s=e.follow,o=e.unfollow,i=e.onPageChanged,u=e.users;return Object(r.jsxs)("div",{className:ce.a.user,children:[Object(r.jsx)(oe,{currentPage:a,onPageChanged:i,totalUsersCount:t,pageSize:n}),u.map((function(e){return Object(r.jsx)(be,{user:e,followingInProgress:c,unfollow:o,follow:s},e.id)}))]})},Oe=n(195),ge=function(e){return e.usersPage.users},me=function(e){return e.usersPage.pageSize},xe=function(e){return e.usersPage.totalUsersCount},ve=function(e){return e.usersPage.currentPage},_e=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},ye=n(422),Pe=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentValue,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ye.a,{spinning:this.props.isFetching,children:Object(r.jsx)(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})})})}}]),n}(c.a.Component),Se=Object(b.d)(Oe.a,Object(p.b)((function(e){return{users:ge(e),pageSize:me(e),totalUsersCount:xe(e),currentPage:ve(e),isFetching:_e(e),followingInProgress:we(e)}}),{follow:function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,e,x.e.follow.bind(e),K);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,e,x.e.unfollow.bind(e),V);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPages:q,toggleIsFollowingProgress:J,getUsers:function(e,t){return function(){var n=Object(m.a)(g.a.mark((function n(r){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Y(!0)),r(q(e)),n.next=4,x.e.getUsers(e,t);case 4:a=n.sent,r(Y(!1)),r((s=a.items,{type:R,users:s})),r((c=a.totalCount,{type:H,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Pe),Ce=n(233),Ee=n(68),Ue=n(182),ke=n(71),Ie=n.n(ke),Te=n(259),Ae=n(67),Ne=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.captchaUrl,a=e.error;return Object(r.jsxs)("form",{className:Ie.a.form,onSubmit:t,children:[Object(r.jsx)("div",{className:Ie.a.form__input,children:Object(Ee.c)("Email","email",[Ue.b],Ee.b)}),Object(r.jsx)("div",{className:Ie.a.form__input,children:Object(Ee.c)("Password","password",[Ue.b],Ee.b,{type:"password"})}),Object(r.jsxs)("div",{className:Ie.a.form__checkbox,children:[Object(Ee.c)(void 0,"rememberMe",[],Ee.a,{type:"checkbox"}),Object(r.jsx)("span",{className:Ie.a.form__checkbox__text,children:"Remember me"})]}),n&&Object(r.jsx)("img",{src:n,alt:"captcha"}),Object(r.jsx)("div",{className:Ie.a.form__input,children:n&&Object(Ee.c)("Symbols from image","captcha",[],Ee.b)}),Object(r.jsx)(le.a,{onClick:function(){if(a)return Te.b.error(a)},className:Ie.a.form__button,htmlType:"submit",type:"primary",children:"Login"})]})})),Fe=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginUser:function(e,t,n,r){return function(){var a=Object(m.a)(g.a.mark((function a(c){var s,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x.b.login(e,t,n,r);case 2:(s=a.sent).resultCode===x.a.Success?c(C()):(10===s.resultCode&&c(E()),o=s.messages.length>0?s.messages[0]:"Some Error",c(Object(v.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(j.a,{to:"/profile"}):Object(r.jsxs)(Ae.a,{className:Ie.a.form__container,children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Ne,{onSubmit:function(t){e.loginUser(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Le=function(){return Object(r.jsx)("div",{children:"News"})},De=function(){return Object(r.jsx)("div",{children:"Music"})},ze=function(){return Object(r.jsx)("div",{children:"Settings"})},Re=(n(413),n(423)),Ge=n(436),He=n(437),Me=n(427),Be=n(431),We=n(432),Ke=n(433),Ve=n(434),qe=n(435),Ye=function(){return Object(r.jsxs)(Me.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(Be.a,{}),children:Object(r.jsx)(d.b,{to:"/profile",children:"Profile"})},"1"),Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(We.a,{}),children:Object(r.jsx)(d.b,{to:"/dialogs",children:"Messages"})},"2"),Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(fe.a,{}),children:Object(r.jsx)(d.b,{to:"/users",children:"Users"})},"3"),Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(Ke.a,{}),children:Object(r.jsx)(d.b,{to:"/news",children:"News"})},"4"),Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(Ve.a,{}),children:Object(r.jsx)(d.b,{to:"/music",children:"Music"})},"5"),Object(r.jsx)(Me.a.Item,{icon:Object(r.jsx)(qe.a,{}),children:Object(r.jsx)(d.b,{to:"/settings",children:"Settings"})},"6")]})},Je=n(253),Xe=n.n(Je),Ze=n(232),Qe=function(){var e=Object(p.d)((function(e){return e.auth.isAuth})),t=Object(p.d)((function(e){var t;return null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small})),n=Object(p.c)();return Object(r.jsx)(r.Fragment,{children:e?Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:t||Ze.a,alt:"user avatar",className:Xe.a.userPhoto}),Object(r.jsx)(le.a,{type:"primary",onClick:function(){n(function(){var e=Object(m.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.b.logout();case 2:(n=e.sent).resultCode===x.a.Success?t(P(null,null,null,!1)):(r=n.messages.length>0?n.messages[0]:"Some Error",t(Object(v.a)("login",{_error:r})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}):Object(r.jsx)(d.b,{to:"/login",children:Object(r.jsx)(le.a,{type:"primary",children:"Login"})})})},$e=Re.a.Header,et=Re.a.Sider,tt=Re.a.Content,nt=c.a.lazy((function(){return n.e(5).then(n.bind(null,451))})),rt=c.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,450))})),at={mainLayout:{minHeight:"100vh",height:"100%"}},ct=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(){alert("Some error occured")},e.state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return Object(r.jsx)(ye.a,{className:"preloader",spinning:!this.props.initialized,children:Object(r.jsxs)(Re.a,{className:"main_layout",style:at.mainLayout,children:[Object(r.jsx)(et,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:Object(r.jsx)(Ye,{})}),Object(r.jsxs)(Re.a,{className:"site-layout",children:[Object(r.jsxs)($e,{style:{padding:"0 20px"},className:"site-layout-background",children:[c.a.createElement(this.state.collapsed?Ge.a:He.a,{className:"trigger",onClick:this.toggle}),Object(r.jsx)(Qe,{})]}),Object(r.jsx)(tt,{className:"main_content",children:Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(ye.a,{}),children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(j.a,{to:"/profile"})}}),Object(r.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(rt,{})}}),Object(r.jsx)(j.b,{path:"/dialogs",render:function(){return Object(r.jsx)(nt,{})}}),Object(r.jsx)(j.b,{path:"/users",render:function(){return Object(r.jsx)(Se,{})}}),Object(r.jsx)(j.b,{path:"/login",render:function(){return Object(r.jsx)(Fe,{})}}),Object(r.jsx)(j.b,{path:"/news",render:function(){return Object(r.jsx)(Le,{})}}),Object(r.jsx)(j.b,{path:"/music",render:function(){return Object(r.jsx)(De,{})}}),Object(r.jsx)(j.b,{path:"/settings",render:function(){return Object(r.jsx)(ze,{})}}),Object(r.jsx)(j.b,{path:"*",render:function(){return Object(r.jsx)("h1",{children:"404 PAGE NOT FOUND"})}})]})})})]})]})})}}]),n}(c.a.Component),st=Object(b.d)(j.g,Object(p.b)((function(e){var t;return{initialized:e.app.initialized,photo:null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:k})}))}}}))(ct),ot=function(){return Object(r.jsx)(d.a,{children:Object(r.jsx)(p.a,{store:re,children:Object(r.jsx)(st,{})})})},it=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,447)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(ot,{}),document.getElementById("root")),it()},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return O}));var r=n(9),a=n(167),c=n(4),s=(n(0),n(248)),o=n.n(s),i=n(186),u=n(260),l=n(417),f=n(415),j=u.a.TextArea,d={error:{marginTop:"10px"}},p=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:a}),s&&Object(c.jsx)(l.a,{style:d.error,message:r,type:"error",showIcon:!0})]})},b=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)(u.a,Object(r.a)(Object(r.a)({},t),n))}))},h=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)(f.a,Object(r.a)(Object(r.a)({},t),n))}))})};function O(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(c.jsxs)("span",{className:o.a.form__item,children:[" ",Object(c.jsx)(i.a,Object(r.a)({name:t,component:a,placeholder:e,validate:n},s))," "]})}t.d=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(c.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)(j,Object(r.a)(Object(r.a)({style:{minWidth:"420px",width:"100%"}},t),n))}))}},71:function(e,t,n){e.exports={form__container:"Login_form__container__2E6yT",form:"Login_form__2hBfP",form__input:"Login_form__input__3osNe",form__checkbox:"Login_form__checkbox__2ODAt",form__checkbox__text:"Login_form__checkbox__text__17AFR",form__button:"Login_form__button__1zZ7v"}}},[[414,1,2]]]);
//# sourceMappingURL=main.987f70db.chunk.js.map