(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{245:function(e,a,n){e.exports=n(465)},251:function(e,a,n){},252:function(e,a,n){},421:function(e,a,n){},461:function(e,a,n){},462:function(e,a,n){},465:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(10),l=n.n(i),c={RESIZE:"RESIZE",SET_ACTIVE_NODE:"SET_ACTIVE_NODE",SET_DATA:"SET_DATA",SET_FILTER:"SET_FILTER",SET_FONT_SIZE:"SET_FONT_SIZE",SET_FONT_COLOR:"SET_FONT_COLOR",SET_LINK_COLOR:"SET_LINK_COLOR",SET_LINK_OPACITY:"SET_LINK_OPACITY",SET_FONT_FAMILY:"SET_FONT_FAMILY",SET_NODE_SHAPE:"SET_NODE_SHAPE"};function o(){S.dispatch({type:c.RESIZE})}function h(e){S.dispatch({type:c.SET_ACTIVE_NODE,node:e})}function s(e){S.dispatch({type:c.SET_FILTER,filter:e})}function d(e){S.dispatch({type:c.SET_FONT_SIZE,size:e})}function u(e){S.dispatch({type:c.SET_FONT_COLOR,color:e})}function m(e){S.dispatch({type:c.SET_LINK_COLOR,color:e})}function f(e){S.dispatch({type:c.SET_FONT_FAMILY,family:e})}var p=n(31),g=n.n(p),v=n(20),E=n(21),k={fontFamily:"Helvetica Neue",fontSize:12,fontColor:"#F4F4F4",linkColor:"#2593B8",linkOpacity:.4,nodeShape:"circle",textureName:"arabesque",bgColor:"#242424",version:1};function y(e){g()("body").css("background-color",e)}function b(e){g()("body").css("background-image",e)}var J=new(function(){function e(){return Object(v.a)(this,e),e.instance||(e.instance=this,this.preferences=k,this.init=!1),e.instance}return Object(E.a)(e,[{key:"initPreferenceMgr",value:function(){if(!this.init){this.init=!0;var e,a=window.localStorage.getItem("preferences");if(a){var n=JSON.parse(a);n.version===k.version||(Object.keys(k).forEach((function(e){return void 0===n[e]&&(n[e]=k[e])})),window.localStorage.setItem("preferences",JSON.stringify(n))),this.setPreferences(n),this.notifyAll()}else this.setPreferences(k),window.localStorage.setItem("preferences",JSON.stringify(k));e=this.preferences.fontFamily,g()("head").append("<link href='https://fonts.googleapis.com/css?family="+e+"' rel='stylesheet' type='text/css'>"),this.setTexture(this.preferences.textureName),this.setBackgroundColor(this.preferences.bgColor)}}},{key:"notifyAll",value:function(){d(this.preferences.fontSize),f(this.preferences.fontFamily),m(this.preferences.linkColor),u(this.preferences.fontColor),y(this.preferences.bgColor),b(this.getBackgroundUrl(this.preferences.textureName))}},{key:"savePreferences",value:function(){window.localStorage.setItem("preferences",JSON.stringify(this.preferences))}},{key:"setPreferencesFromStore",value:function(){this.setPreferences(JSON.parse(window.localStorage.getItem("preferences"))),this.notifyAll()}},{key:"resetPreferences",value:function(){this.setPreferences(k),this.notifyAll()}},{key:"setPreferences",value:function(e){this.preferences=e}},{key:"setFontSize",value:function(e){this.preferences.fontSize=e,d(e)}},{key:"setFontFamily",value:function(e){this.preferences.fontFamily=e,f(e)}},{key:"getFontSize",value:function(){return this.preferences.fontSize}},{key:"getFontFamily",value:function(){return this.preferences.fontFamily}},{key:"setFontColor",value:function(e){this.preferences.fontColor=e,u(e)}},{key:"setLinkColor",value:function(e){this.preferences.linkColor=e,m(e)}},{key:"getFontColor",value:function(){return this.preferences.fontColor}},{key:"getLinkColor",value:function(){return this.preferences.linkColor}},{key:"setLinkOpacity",value:function(e){this.preferences.linkOpacity=e,function(e){S.dispatch({type:c.SET_LINK_OPACITY,size:e})}(e)}},{key:"getPreferences",value:function(){return this.preferences}},{key:"getOrgPreferences",value:function(){return k}},{key:"setBackgroundColor",value:function(e){this.preferences.bgColor=e,y(e)}},{key:"getBackgroundColor",value:function(e){return this.preferences.bgColor}},{key:"getBackgroundUrl",value:function(e){return"none"===e?e:"url(https://www.transparenttextures.com/patterns/"+e+".png)"}},{key:"setTexture",value:function(e){this.preferences.textureName=e,b(this.getBackgroundUrl(e))}},{key:"getTexture",value:function(){return this.preferences.textureName}}]),e}());var C=n(75),S=Object(C.c)(Object(C.b)({activeNode:function(e,a){if("undefined"===typeof e)return null;switch(a.type){case c.SET_ACTIVE_NODE:return a.node}return e},filter:function(e,a){if("undefined"===typeof e)return"";switch(a.type){case c.SET_FILTER:return a.filter}return e},height:function(e,a){if("undefined"===typeof e)return g()(window).height();switch(a.type){case c.RESIZE:return g()(window).height()}return e},width:function(e,a){if("undefined"===typeof e)return g()(window).width();switch(a.type){case c.RESIZE:return g()(window).width()}return e},fontSize:function(e,a){if("undefined"===typeof e)return J.getPreferences().fontSize;switch(a.type){case c.SET_FONT_SIZE:return a.size}return e},fontColor:function(e,a){if("undefined"===typeof e)return J.getPreferences().fontColor;switch(a.type){case c.SET_FONT_COLOR:return a.color}return e},linkColor:function(e,a){if("undefined"===typeof e)return J.getPreferences().linkColor;switch(a.type){case c.SET_LINK_COLOR:return a.color}return e},linkOpacity:function(e,a){if("undefined"===typeof e)return J.getPreferences().linkOpacity;switch(a.type){case c.SET_LINK_Opacity:return a.opacity}return e},fontFamily:function(e,a){if("undefined"===typeof e)return J.getPreferences().fontFamily;switch(a.type){case c.SET_FONT_FAMILY:return a.family}return e},nodeShape:function(e,a){if("undefined"===typeof e)return J.getPreferences().nodeShape;switch(a.type){case c.SET_NODE_SHAPE:return a.shape}return e}}),void 0,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=n(227),O=n(14),N=(n(251),n(37)),T=n(36),j=function(e){Object(N.a)(n,e);var a=Object(T.a)(n);function n(){return Object(v.a)(this,n),a.apply(this,arguments)}return Object(E.a)(n,[{key:"handleChange",value:function(e){s(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{id:"search",type:"text",placeholder:"Find Name ...",value:this.props.filter,onChange:this.handleChange})}}]),n}(r.a.PureComponent),x=n(510),P=n(522),I=n(12),R=n(3),_=n(513),A=n(532),F=n(520),L=n(468),B=n(524),D=n(525),M=n(214),z=n.n(M),U=n(213),K=n.n(U),V=n(215),W=n.n(V),H=n(514),G=n(523),Z=n(516),Y=n(526),q=n(515),X=n(530),$=n(216),Q=n.n($),ee=(n(252),n(137)),ae=n(57),ne=n(229),te=n(521),re=n(529),ie=(n(94),n(138),n(5)),le=n(107),ce=(n(511),n(512),n(533));Object(ie.a)({switchBase:{color:le.a[800],"&$checked":{color:le.a[300]},"&$checked + $track":{backgroundColor:le.a[300]}},checked:{},track:{}})(ce.a);var oe=n(517),he=n(212),se=function(e){Object(N.a)(n,e);var a=Object(T.a)(n);function n(){var e;Object(v.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={color:e.props.color},e.handleChangeComplete=function(a){e.props.setColor(a.hex),e.setState({color:a.hex})},e.handleChange=function(a,n){e.props.setColor(a.hex),e.setState({color:a.hex})},e}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement(he.ChromePicker,{color:this.state.color,onChange:this.handleChange,onChangeComplete:this.handleChangeComplete})}}]),n}(r.a.Component),de=(n(421),Object(_.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}})));function ue(e){var a=de(),n=r.a.useState(e.fontFamily),t=Object(I.a)(n,2),i=t[0],l=t[1],c=r.a.useState(e.fontSize),o=Object(I.a)(c,2),h=o[0],s=o[1],d=r.a.useState(!1),u=Object(I.a)(d,2),m=u[0],f=u[1],p=r.a.useState(!1),g=Object(I.a)(p,2),v=g[0],E=g[1],k=r.a.useState(!1),y=Object(I.a)(k,2),b=y[0],C=y[1],S=r.a.useState("dark"),w=Object(I.a)(S,2),O=w[0],N=w[1],T=r.a.useState(e.fontColor),j=Object(I.a)(T,2),x=j[0],R=j[1],_=r.a.useState(e.linkColor),A=Object(I.a)(_,2),F=A[0],L=A[1],B=r.a.useState(e.activeTexture),D=Object(I.a)(B,2),M=D[0],z=D[1],U=r.a.useState(e.bgColor),K=Object(I.a)(U,2),V=K[0],W=K[1];r.a.useEffect((function(){s(e.fontSize),l(e.fontFamily),R(e.fontColor),L(e.linkColor),z(J.getTexture()),W(J.getBackgroundColor())}),[e]);var Y=function(){e.onClose()};return r.a.createElement("div",{className:a.root},r.a.createElement(H.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{open:m,onClose:function(){f(!1)}},r.a.createElement(se,{color:x,setColor:function(e){R(e),J.setFontColor(e)}})),r.a.createElement(H.a,{open:v,onClose:function(){E(!1)}},r.a.createElement(se,{color:F,setColor:function(e){L(e),J.setLinkColor(e)}})),r.a.createElement(H.a,{open:b,onClose:function(){C(!1)}},r.a.createElement(se,{color:V,setColor:function(e){W(e),J.setBackgroundColor(e)}})),r.a.createElement(q.a,{id:"form-dialog-title",style:{textAlign:"center"}},"Settings"),r.a.createElement(Z.a,{dividers:!0,style:{overflow:"hidden"}},r.a.createElement(oe.a,{container:!0,spacing:3},r.a.createElement(oe.a,{container:!0,item:!0,xs:12,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Set Font :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(ne.a,{apiKey:"AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU",activeFontFamily:i,onChange:function(e){l(e.family),J.setFontFamily(e.family)}}))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Font Size :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(re.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,onChange:function(e){s(e.target.value),J.setFontSize(e.target.value)}},r.a.createElement(te.a,{value:9},"9px"),r.a.createElement(te.a,{value:10},"10px"),r.a.createElement(te.a,{value:11},"11px"),r.a.createElement(te.a,{value:12},"12px"),r.a.createElement(te.a,{value:13},"13px"),r.a.createElement(te.a,{value:14},"14px"),r.a.createElement(te.a,{value:15},"15px"),r.a.createElement(te.a,{value:16},"16px"),r.a.createElement(te.a,{value:17},"17px"),r.a.createElement(te.a,{value:18},"18px"),r.a.createElement(te.a,{value:19},"19px"),r.a.createElement(te.a,{value:20},"20px"),r.a.createElement(te.a,{value:21},"21px"),r.a.createElement(te.a,{value:22},"22px"),r.a.createElement(te.a,{value:23},"23px"),r.a.createElement(te.a,{value:24},"24px")))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Theme :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(re.a,{labelId:"themeMenu",id:"themeMenu",value:O,onChange:function(e){N(e.target.value)}},r.a.createElement(te.a,{value:"dark"},"Dark"),r.a.createElement(te.a,{value:"light"},"Light")))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Font Color :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(P.a,{style:{backgroundColor:x},size:"small",variant:"contained",onClick:function(){f(!m)}},"\xa0"))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Link Color :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(P.a,{style:{backgroundColor:F},size:"small",variant:"contained",onClick:function(){E(!v)}},"\xa0"))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Canvas Color :")),r.a.createElement(oe.a,{item:!0},r.a.createElement(P.a,{style:{backgroundColor:V},size:"small",variant:"contained",onClick:function(){C(!b)}},"\xa0"))),r.a.createElement(oe.a,{container:!0,item:!0,xs:12,justify:"space-between"},r.a.createElement(oe.a,{item:!0},r.a.createElement(ae.a,null,"Texture : ")),r.a.createElement(oe.a,{item:!0},r.a.createElement(re.a,{labelId:"textureMenu",id:"textureMenu",value:M,onChange:function(e){z(e.target.value),J.setTexture(e.target.value)},style:{width:"170px"}},r.a.createElement(te.a,{value:"none"},"None"),r.a.createElement(te.a,{value:"arabesque",style:{backgroundImage:J.getBackgroundUrl("arabesque")}},"Arabesque"),r.a.createElement(te.a,{value:"45-degree-fabric-light",style:{backgroundImage:J.getBackgroundUrl("45-degree-fabric-light")}},"45-degree-fabric-light"),r.a.createElement(te.a,{value:"asfalt-light",style:{backgroundImage:J.getBackgroundUrl("asfalt-light")}},"Asfalt-light"),r.a.createElement(te.a,{value:"back-pattern",style:{backgroundImage:J.getBackgroundUrl("back-pattern")}},"Back-pattern"),r.a.createElement(te.a,{value:"az-subtle",style:{backgroundImage:J.getBackgroundUrl("az-subtle")}},"Az-subtle"),r.a.createElement(te.a,{value:"basketball",style:{backgroundImage:J.getBackgroundUrl("basketball")}},"Basketball"),r.a.createElement(te.a,{value:"bedge-grunge",style:{backgroundImage:J.getBackgroundUrl("bedge-grunge")}},"Bedge-grunge"),r.a.createElement(te.a,{value:"beige-paper",style:{backgroundImage:J.getBackgroundUrl("beige-paper")}},"Beige-paper"),r.a.createElement(te.a,{value:"binding-dark",style:{backgroundImage:J.getBackgroundUrl("binding-dark")}},"Binding-dark"),r.a.createElement(te.a,{value:"binding-light",style:{backgroundImage:J.getBackgroundUrl("binding-light")}},"Binding-light"),r.a.createElement(te.a,{value:"black-thread-light",style:{backgroundImage:J.getBackgroundUrl("black-thread-light")}},"Black-thread-light"),r.a.createElement(te.a,{value:"blizzard",style:{backgroundImage:J.getBackgroundUrl("blizzard")}},"Blizzard"),r.a.createElement(te.a,{value:"brushed-alum",style:{backgroundImage:J.getBackgroundUrl("brushed-alum")}},"Brushed-alum"),r.a.createElement(te.a,{value:"brushed-alum-dark",style:{backgroundImage:J.getBackgroundUrl("brushed-alum-dark")}},"Brushed-alum-dark"),r.a.createElement(te.a,{value:"carbon-fibre",style:{backgroundImage:J.getBackgroundUrl("carbon-fibre")}},"Carbon-fibre"),r.a.createElement(te.a,{value:"cardboard",style:{backgroundImage:J.getBackgroundUrl("cardboard")}},"Cardboard"),r.a.createElement(te.a,{value:"circles",style:{backgroundImage:J.getBackgroundUrl("circles")}},"Circles"),r.a.createElement(te.a,{value:"clean-gray-paper",style:{backgroundImage:J.getBackgroundUrl("clean-gray-paper")}},"Clean-gray-paper"),r.a.createElement(te.a,{value:"climpek",style:{backgroundImage:J.getBackgroundUrl("climpek")}},"Climpek")))))),r.a.createElement(G.a,null,!1,r.a.createElement(P.a,{onClick:function(){J.setPreferencesFromStore();var e=J.getPreferences();s(e.fontSize),l(e.fontFamily),R(e.fontColor),L(e.linkColor),z(e.textureName),W(e.bgColor),Y()},color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:function(){J.savePreferences(),Y()},color:"primary"},"Save"))))}var me=Object(_.a)({list:{width:250},fullList:{width:250}});function fe(e){var a=me(),n=r.a.useRef(null),t=r.a.useRef(r.a.createRef()),i=r.a.useState(1),l=Object(I.a)(i,2),c=l[0],o=l[1],d=r.a.useState(!1),u=Object(I.a)(d,2),m=u[0],f=u[1],p=r.a.useState(!1),g=Object(I.a)(p,2),v=g[0],E=g[1],k=r.a.useState(!1),y=Object(I.a)(k,2),b=y[0],J=y[1],C=r.a.useState(!1),S=Object(I.a)(C,2),w=S[0],O=S[1],N=r.a.useState(!1),T=Object(I.a)(N,2),j=T[0],_=T[1],M=r.a.useState(!1),U=Object(I.a)(M,2),V=U[0],$=U[1],ae=r.a.createRef(),ne=r.a.createRef(),te=function(e,a){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&f(a)}},re=function(e){o(e),ie(e,!0)},ie=function(a,n){"edit"===a&&(e.editMode?e.handleSaveTree():E(n)),"settings"===a&&$(n),"feedback"===a&&J(n)},le=function(){E(!1),J(!1),$(!1)},ce=function(){_(!1),O(!1),E(!1),J(!1),$(!1)},oe=function(){if(""!==ae.value){O(!1);var e={from_name:"Family Tree User",to_name:"Subhash",message_html:ae.value};ee.send("default_service","template_rLhbphnf",e).then((function(e){console.log("SUCCESS!",e.status,e.text),J(!1)}),(function(e){console.error("Your message was not able to be sent"),O(!0)}))}else O(!0)},he=function(){"admin333"===ne.value?(_(!1),E(!1),h("0"),s(""),e.setEditMode(!0)):_(!0)},se=function(){var e=t.current;if(e&&e.addEventListener){var a=function(e){(e.touches&&e.touches.length>1||e.ctrlKey)&&e.preventDefault()};e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("wheel",a,{passive:!1})}};r.a.useEffect((function(){setTimeout(se,200)})),r.a.useLayoutEffect((function(){var e=n.current;if(e){var a=function(e){e.touches&&e.touches.length>1&&e.preventDefault(),e.touches||e.preventDefault()};return e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("wheel",a,{passive:!1}),function(){e.removeEventListener("touchmove",a),e.removeEventListener("wheel",a)}}}),[]);var de,fe;return r.a.createElement("div",{ref:n,className:"ListView"},r.a.createElement(r.a.Fragment,{key:"menu"},r.a.createElement(x.a,{onClick:(de=!0,fe=e.pageNum,function(e){o(fe),te(0,de)(e)}),size:"small",color:"primary"},r.a.createElement(Q.a,null)),r.a.createElement("div",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),r.a.createElement(A.a,{classes:{paper:a.drawer},anchor:"left",open:m,onClose:te(0,!1)},function(n,t){return r.a.createElement("div",{ref:t,className:Object(R.a)(a.list),role:"presentation",onClick:te(0,!1),onKeyDown:te(0,!1)},r.a.createElement(F.a,null,r.a.createElement(L.a,{button:!0,key:"settings",onClick:function(){re("settings")},selected:"settings"===c},r.a.createElement(B.a,null,r.a.createElement(K.a,null)),r.a.createElement(D.a,{primary:"User Settings"})),r.a.createElement(L.a,{button:!0,key:"edit",onClick:function(){re("edit")},selected:"edit"===c},r.a.createElement(B.a,null,r.a.createElement(z.a,null)),r.a.createElement(D.a,{primary:e.editMode?"Save Tree":"Edit Tree"})),r.a.createElement(L.a,{button:!0,key:"feedback",onClick:function(){re("feedback")},selected:"feedback"===c},r.a.createElement(B.a,null,r.a.createElement(W.a,null)),r.a.createElement(D.a,{primary:"Send Feedback"}))))}(0,t)),r.a.createElement(H.a,{open:v,onClose:le,"aria-labelledby":"form-dialog-title"},r.a.createElement("div",null,r.a.createElement(q.a,{id:"form-dialog-title"},"Admin"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,null,"To add or modify names, please enter the admin passcode."),j&&r.a.createElement(Y.a,null,r.a.createElement("span",{style:{color:"red"}},"Wrong Password entered !!!")),r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"pass",label:"Password",type:"password",variant:"filled",fullWidth:!0,inputRef:function(e){ne=e}})),r.a.createElement(G.a,null,r.a.createElement(P.a,{onClick:ce,color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:he,color:"primary"},"Enter")))),r.a.createElement(H.a,{open:b,onClose:le,"aria-labelledby":"form-dialog-title"},r.a.createElement("div",null,r.a.createElement(q.a,{id:"form-dialog-title"},"Feedback"),r.a.createElement(Z.a,null,r.a.createElement(Y.a,null,"Please provide your feedback. Also let us know if you want to update any information."),w&&r.a.createElement(Y.a,null,r.a.createElement("span",{style:{color:"red"}},"Unable to send the message")),r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"feedback",label:"Feedback",type:"text",variant:"filled",multiline:!0,rows:8,fullWidth:!0,inputRef:function(e){ae=e}})),r.a.createElement(G.a,null,r.a.createElement(P.a,{onClick:ce,color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:oe,color:"primary"},"Submit")))),r.a.createElement(ue,Object.assign({},e,{open:V,onClose:le,"aria-labelledby":"form-dialog-title"}))))}ee.init("user_DyxpTG6qwaTR7AW1vWs4M");var pe=n(218),ge=n.n(pe),ve=n(219),Ee=n.n(ve),ke=n(217),ye=n.n(ke),be=function(e){Object(N.a)(n,e);var a=Object(T.a)(n);function n(){var e;Object(v.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(){e.props.resetView(),h("0"),s("")},e.handleExpand=function(){e.props.resetView(),h("all"),s("")},e.handleSave=function(){e.props.saveTree()},e.handleCancel=function(){e.props.setEditMode(!1)},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){o()}},{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{style:{float:"left",paddingTop:"0%"}},r.a.createElement(fe,Object.assign({},this.props,{handleSaveTree:this.handleSave}))),r.a.createElement(j,{filter:this.props.filter}),r.a.createElement(P.a,{onClick:this.handleClick,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px"},size:"small"},"Reset"),"\xa0",!this.props.editMode&&r.a.createElement(x.a,{onClick:this.handleExpand,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px"},size:"small"},r.a.createElement(ye.a,null)),this.props.editMode&&r.a.createElement(x.a,{onClick:this.handleSave,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px",float:"right"},size:"small"},r.a.createElement(ge.a,null)),r.a.createElement("div",{style:{float:"right"}},"\xa0"),this.props.editMode&&r.a.createElement(x.a,{onClick:this.handleCancel,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px",float:"right"},size:"small"},r.a.createElement(Ee.a,null)))}}]),n}(r.a.PureComponent),Je=n(135),Ce=n.n(Je),Se=n(220),we=n.n(Se),Oe=n(455);function Ne(e){var a=r.a.useState(!0),n=Object(I.a)(a,2),t=n[0],i=n[1],l=function e(a,n){if(n.id===a)return n;for(var t=0;t<n.children.length;t++){var r=e(a,n.children[t]);if(r)return r}return null}(e.nodeId,e.data),c=r.a.useState(Oe.cloneDeep(l)),o=Object(I.a)(c,2),h=o[0],s=o[1],d=Object.assign({},h),u=r.a.createRef(),m=r.a.createRef(),f=function(){i(!1),e.formSubmitCB(null)};return r.a.createElement("div",null,r.a.createElement(H.a,{open:t,onClose:f,"aria-labelledby":"form-dialog-title",maxWidth:"sm"},r.a.createElement(q.a,{id:"form-dialog-title"},"Edit Info"),r.a.createElement(Z.a,null,r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",defaultValue:h.name,inputRef:function(e){u=e},variant:"outlined",fullWidth:!0}),h.partner&&r.a.createElement(X.a,{margin:"dense",id:"partner",label:"Partner's Name",type:"name",defaultValue:h.partner.name,variant:"outlined",inputRef:function(e){m=e},fullWidth:!0}),function(){var e=0,a=[];if(!h)return a;for(;e<h.children.length;)e<l.children.length?a.push(r.a.createElement(X.a,{disabled:!0,margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:h.children[e].name,fullWidth:!0,variant:"outlined"})):a.push(r.a.createElement(X.a,{margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:h.children[e].name,fullWidth:!0,variant:"outlined"})),e++;return a}()),r.a.createElement(P.a,{variant:"outlined",onClick:function(){d.children.push(e.getNextPerson()),s(d)},color:"primary"},"Add Child"),r.a.createElement(G.a,null,r.a.createElement(P.a,{variant:"contained",onClick:function(){i(!1),h.name=u.value,h.partner?h.partner.name=m.value:m.value&&(h.partner={},h.partner.name=m.value),l.name=h.name,l.partner=h.partner,l.children=h.children,e.formSubmitCB(h)},color:"primary"},"Ok"),r.a.createElement(P.a,{variant:"contained",onClick:f,color:"primary"},"Cancel"))))}var Te=n(106),je=n(527),xe=n(105),Pe=function(e){Object(N.a)(n,e);var a=Object(T.a)(n);function n(e){var t;return Object(v.a)(this,n),(t=a.call(this,e)).zoomed=function(){Object(je.a)("g").filter((function(){return!this.classList.contains("node")})).attr("transform",xe.c.transform)},t.handleClick=function(e,a){t.setState({currentNode:a}),t.props.editMode?t.setState({formActive:!0}):s("")},t.formClose=function(e){t.setState({formActive:!1})},t.pathCB=function(e,a,n){console.log(e),console.log(a),console.log(n)},t.getChildren=function(e){var a=void 0;return e.id?(t.state.currentNode!==e.id||t.props.editMode?a=t.closeNode.has(e.id)?void 0:e.children:(t.state.currentNode=void 0,t.closeNode.has(e.id)?(t.closeNode.delete(e.id),a=e.children):(t.closeNode.add(e.id),e.children=void 0,a=void 0)),a):e.children},t.data=e.data,t.state={key:0,currentNode:void 0,formActive:!1},t.closeNode=new Set,t.hiddenNode=new Set,t.props.editMode||t.populateCloseSet(t.data),t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.zoom=Object(Te.a)().on("zoom",this.zoomed),Object(je.a)("svg").filter((function(){return!this.classList.contains("MuiSvgIcon-root")})).call(this.zoom).on("dblclick.zoom",null),this.props.setZoomRef(this.zoom)}},{key:"populateCloseSet",value:function(e){if(this.closeNode.add(e.id),e.children)for(var a=0;a<e.children.length;a++)this.populateCloseSet(e.children[a])}},{key:"resetCloseSet",value:function(e){if(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e.children)for(var a=0;a<e.children.length;a++)this.resetCloseSet(e.children[a])}},{key:"getRoot",value:function(e,a){if(e.id===a)return e;for(var n=0;n<e.children.length;n++){var t=this.getRoot(e.children[n],a);if(t)return t}return!1}},{key:"buildSubTree",value:function(e){for(var a=0,n=0;n<e.children.length;n++)this.buildSubTree(e.children[n])&&a++;return a>0||0===e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())||e.partner&&0===e.partner.name.toLowerCase().indexOf(this.props.filter.toLowerCase())?(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e):(this.closeNode.add(e.id),null)}},{key:"setClassName",value:function(e){e.children.forEach(this.setClassName,this),this.props.filter&&(e.className=-1===e.name.toLowerCase().indexOf(this.props.filter)?"node searchExcluded":"node searchIncluded")}},{key:"render",value:function(){"0"===this.props.activeNode&&(h(null),this.props.editMode?this.resetCloseSet(this.data):this.populateCloseSet(this.data)),"all"===this.props.activeNode&&(h(null),this.resetCloseSet(this.data));var e=this.data;return e=Ce()(e),this.props.filter&&(e=this.buildSubTree(e)||e),this.setClassName(e),r.a.createElement("div",null,this.state.formActive&&r.a.createElement(Ne,{nodeId:this.state.currentNode,data:this.data,formSubmitCB:this.formClose,getNextPerson:this.props.getNextPerson}),r.a.createElement(we.a,{animated:!0,data:e,width:this.props.width,height:this.props.height,keyProp:"id",getChildren:this.getChildren,margins:{bottom:10,left:20,right:100,top:10},gProps:{className:"node",onClick:this.handleClick},nodeShape:this.props.nodeShape,nodeProps:{r:2,stroke:this.props.linkColor,fill:this.props.linkColor},svgProps:{viewBox:"0 0 "+this.props.width+" "+this.props.height},textProps:{fontSize:this.props.fontSize,fill:this.props.fontColor,fontFamily:this.props.fontFamily},pathProps:{stroke:this.props.linkColor,strokeOpacity:this.props.linkOpacity},steps:30}))}}]),n}(r.a.PureComponent),Ie={name:"Khedan Jha",children:[{name:"Dukhran Jha",children:[{name:"Baburam Jha",children:[{name:"Kashinath Jha",children:[{name:"Janaklal Jha",children:[{name:"Umakant Jha",children:[{name:"Babusaheb Jha",children:[{name:"Bharat Jha",children:[]},{name:"Shatrughan Jha",children:[]}]},{name:"Pitambar Jha",children:[{name:"Rakesh Jha",children:[]}]}]}]},{name:"Madhushudan Jha",children:[{name:"Bageshwar Jha",children:[{name:"Lalbuchchi Devi",children:[]}]}]}]},{name:"Vishwanath Jha",children:[]},{name:"Sashinath Jha",children:[{name:"Jayanath Jha",children:[]},{name:"Janardhan Jha",children:[{name:"Jayaveesh Jha",children:[]}]}]}]},{name:"Dheernath Jha",children:[{name:"Raghuvar Jha",children:[{name:"Govardhan Jha",children:[{name:"Satyadev Jha",children:[{name:"Kalikant Jha",children:[{name:"Raman Jee Jha",children:[]},{name:"Gagan Jee Jha",children:[]}]}]},{name:"Musri Jha",children:[{name:"Upendra Jha",children:[]},{name:"Devendra Jha",children:[{name:"Bhagirath Jha",children:[{name:"Rakesh Jha",children:[]},{name:"Mukesh Jha",children:[]}]}]}]}]}]},{name:"Gopinath Jha",children:[{name:"Ratti Jha",children:[]}]},{name:"Nenmani Jha",children:[{name:"Ugramani Jha",children:[]},{name:"Krishnamani Jha",children:[{name:"Suvansh Lal Jha",children:[{name:"Madhukant Jha",children:[{name:"Kulanand Jha",children:[]},{name:"Raghunath Jha",children:[]},{name:"Krityanand Jha",children:[]}]},{name:"Shubhkant Jha",children:[{name:"Ashok Jha",children:[]},{name:"Kishore Jha",children:[]},{name:"Amol Jha",children:[]}]},{name:"Mahakant Jha",children:[{name:"Chandrashekhar Jha",children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Ajeet Jha",children:[]}]}]},{name:"Yaduvansh Jha",children:[{name:"Lakshmikant Jha",children:[{name:"Sadanand Jha",children:[]}]},{name:"Dayakant Jha",children:[{name:"Tulanand Jha",children:[{name:"Chandan Jha",children:[]}]},{name:"Lokanand Jha",children:[]},{name:"Parmanand Jha",children:[]}]}]},{name:"Srivansh Jha",children:[{name:"Jeevach Jha",children:[{name:"Sushil Kumar Jha",children:[]}]},{name:"ShobhaNand Jha",children:[{name:"Sanjeev Jha",children:[]},{name:"Rajeev Jha",children:[]}]}]},{name:"Udayvansh Jha",children:[{name:"Anmeghana Devi",children:[]}]},{name:"Lakshman Jha",children:[{name:"Shyamakant Jha",children:[{name:"Vaidyanath Jha",children:[{name:"Roushan Jha",children:[]}]},{name:"Vishwanath Jha",children:[{name:"Vipin Vatsa",children:[]},{name:"Nitin Vatsa",children:[]}]}]}]}]},{name:"Jayadev Jha",children:[{name:"Mahadev Jha",children:[{name:"Mohan Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Lal Jha",children:[]},{name:"Rajendra Jha",children:[]}]}]},{name:"Ramdev Jha",children:[{name:"Dharmeshwar Jha",children:[{name:"Sanjay Kumar Jha",children:[]}]},{name:"Umeshwar Jha",children:[{name:"Vinod Jha",children:[]},{name:"Manoj Jha",children:[{name:"Raja Babu",children:[]},{name:"Child 2",children:[]}]},{name:"Shailendra Jha",children:[]},{name:"Amrendra Jha",children:[]}]},{name:"Dineshwar Jha",children:[]},{name:"Maheshwar Jha",partner:{name:"Ambika Jha"},children:[{name:"Manju Jha",partner:{name:"Hemdhar Jha"},children:[{name:"Ambikesh Jha",partner:{name:"Anu Jha"},children:[{name:"Aayushi Jha",children:[]},{name:"Adya Jha",children:[]}]},{name:"Rajesh Jha",partner:{name:"Nirjala Jha"},children:[{name:"Rajat Jha",children:[]},{name:"Aditya Jha",children:[]}]},{name:"Kamlesh Jha",partner:{name:"Vandana Jha"},children:[{name:"Harshit Jha",children:[]},{name:"Kartik Jha",children:[]}]},{name:"Shailesh Jha",partner:{name:"Aruna Jha"},children:[{name:"Yash",children:[]},{name:"Juhi",children:[]}]}]},{name:"Arvind Jha",partner:{name:"Sabri Devi"},children:[{name:"Jaya Jha",partner:{name:"Awadhesh Jha"},children:[{name:"Aryaman Jha",children:[]}]},{name:"Jyoti Pathak",partner:{name:"Rajesh Pathak"},children:[{name:"Rashi Pathak",children:[]},{name:"Aastha Pathak",children:[]}]},{name:"Prakash Jha",partner:{name:"Rishu Shandilya"},children:[]},{name:"Preeti Jha",partner:{name:"Swapnil Pathade"},children:[]}]},{name:"Sunita Jha",partner:{name:"Bihari Jha"},children:[{name:"Chandan Jha",partner:{name:"Kabita Jha"},children:[{name:"Vinamra Jha",children:[]}]},{name:"Rachna Jha",partner:{name:"Santosh Jha"},children:[{name:"Karnika Jha",children:[]},{name:"Umang Jha",children:[]}]}]},{name:"Birendra Jha",partner:{name:"Renu Jha"},children:[{name:"Vikas Jha",partner:{name:"Niharica Jha"},children:[]},{name:"Subhash Jha",partner:{name:"Renuka Mishra"},children:[]},{name:"Shilpa Bharati",children:[]}]},{name:"Dhirendra Jha",partner:{name:"Usha Jha"},children:[{name:"Neha Jha",children:[]},{name:"Nupur Jha",children:[]}]},{name:"Sujata Jha",partner:{name:"Amar Nath Jha"},children:[{name:"Kadambari Jha",partner:{name:"BK Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Shyam Nath Jha",partner:{name:"Anjana Jha"},children:[{name:"Atharva Jha",children:[]}]},{name:"Priya Jha",children:[{name:"Rishi Jha",children:[]}]},{name:"Aditya Nath Jha",partner:{name:"Priyanka Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]}]},{name:"Ugeshwar Jha",children:[]}]},{name:"Baldev Jha",children:[{name:"Sri Nandan Jha",children:[{name:"Surya Kant Jha",children:[{name:"Santosh Jha",children:[]},{name:"Mantosh Jha",children:[]},{name:"Ranjit Jha",children:[]},{name:"Sunil Jha",children:[]}]}]},{name:"Dev Nandan Jha",children:[{name:"Harikant Jha",children:[{name:"Lalan Jha",children:[{name:"Goopal Jha",children:[]},{name:"Child 2",children:[]},{name:"Child 3",children:[]}]},{name:"Madan Jha",children:[]},{name:"Pawan Jha",children:[]}]},{name:"Gangakant Jha",children:[{name:"Pitamber Jha",children:[]},{name:"Bhavan Jha",children:[]},{name:"Krishnakant Jha",children:[]}]},{name:"Mayakant Jha",children:[{name:"Vishwambhar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Raktambar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Pappu Jha",children:[]}]}]}]}]},{name:"Kulmani Jha",children:[{name:"Jogeshwar Jha",children:[]},{name:"Kedarnath Jha",children:[{name:"Sureshwar Jha",children:[{name:"Khela Nand Jha",children:[{name:"Viveka Nand Jha",children:[]}]}]},{name:"Nageshwar Jha",children:[{name:"Durganand Jha",children:[{name:"Ramanand Jha",children:[]},{name:"Kripanand Jha",children:[]}]},{name:"Indranand Jha",children:[{name:"Chandranand Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Radhanand Jha",children:[]},{name:"Ganganand Jha",children:[]}]},{name:"Meghanand Jha",children:[{name:"Sitanand Jha",children:[]},{name:"Rudranand Jha",children:[]}]}]}]}]},{name:"Rudramani Jha",children:[{name:"Varje Jha",children:[{name:"Kapaleshwar Jha",children:[]}]},{name:"Apooch Jha",children:[{name:"Sahdev Jha",children:[{name:"Kari Jha",children:[{name:"Sashikant Jha",children:[{name:"Pradip Jha",children:[]},{name:"Ajit Jha",children:[]},{name:"Sujit Jha",children:[]}]},{name:"Indrakant Jha",children:[]},{name:"Jeevkant Jha",children:[]}]},{name:"Buddhinath Jha",children:[{name:"Raj Kuamr Jha",children:[]},{name:"Phool Kumar Jha",children:[]},{name:"Pawan Kumar Jha",children:[]}]}]}]}]}]},{name:"Dullah Jha",children:[{name:"Kaladhar Jha",children:[]},{name:"Leeladhar Jha",children:[]}]}]}]},Re=n(78),_e=n(228),Ae=n(528),Fe=n(226),Le=n.n(Fe),Be=n(139),De=n.n(Be),Me=n(224),ze=n(140),Ue=n.n(ze),Ke=(n(457),n(225)),Ve=n.n(Ke),We=new(function(){function e(){return Object(v.a)(this,e),e.instance||(e.instance=this,this.db=null,this.parser=null,this.treeDataRef=null,this.treeData=null),e.instance}return Object(E.a)(e,[{key:"initDatabase",value:function(){Ue.a.initializeApp({apiKey:"AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU",authDomain:"dashboard-63843.firebaseapp.com",databaseURL:"https://dashboard-63843.firebaseio.com",projectId:"dashboard-63843",storageBucket:"dashboard-63843.appspot.com",messagingSenderId:"812486429745",appId:"1:812486429745:web:2592255e2738a0b3c19910"}),this.db=Ue.a.firestore(),this.treeDataRef=this.db.collection("tree").doc("treeData")}},{key:"isDataPresent",value:function(e,a){for(var n=0;n<e.length;n++)if(Ve()(e[n],a))return n;return-1}},{key:"save",value:function(e){return this.treeData=e,this.treeDataRef.set(e)}},{key:"getTreeData",value:function(){var e=Object(Me.a)(De.a.mark((function e(){var a;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.treeData){e.next=2;break}return e.abrupt("return",this.treeData);case 2:return e.next=4,this.treeDataRef.get();case 4:return a=e.sent,this.treeData=a.data(),e.abrupt("return",this.treeData);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}());n(461),n(462);g()(window).on("resize",o);var He=function(e){Object(N.a)(n,e);var a=Object(T.a)(n);function n(e){var t;return Object(v.a)(this,n),(t=a.call(this,e)).getNextPerson=function(){var e={name:"Add Name ..."};return e.id=(t.id++).toString(),e.children=[],e.partner={name:""},e},t.setZoomRef=function(e){t.zoom=e},t.reset=function(){Object(je.a)("svg").call(t.zoom.transform,Te.b)},t.wheeled=function(){xe.c.preventDefault(),Object(je.a)("g").filter((function(){return!this.classList.contains("node")})).each((function(){this.setAttribute("transform",xe.c.transform)}))},t.processTreeData=function(e){e&&Object.keys(e).length||(e=Ie),e=t.addIdToNode(e),t.addParent(e),t.addIdToPartner(e),t.setState({json:e})},t.setEditMode=function(e){t.reset(),t.setState({editMode:e})},t.saveTree=function(){console.log(t.state.json),We.save(t.state.json).then((function(){console.log("Tree Data successfully written!"),t.setEditMode(!1)})).catch((function(e){console.error("Error writing Tree Data : ",e)}))},t.id=0,t.treeContainerRef=r.a.createRef(),t.state={editMode:!1,json:{}},t.theme=Object(_e.a)({palette:{type:"dark",primary:Le.a}}),t}return Object(E.a)(n,[{key:"addIdToPartner",value:function(e){if(e.partner||(e.partner={name:""}),e.partner.id=(this.id++).toString(),e.children&&e.children.length)for(var a=0;a<e.children.length;a++)this.addIdToPartner(e.children[a])}},{key:"addParent",value:function(e){if(e.children&&e.children.length)for(var a=0;a<e.children.length;a++)e.children[a].parent=e.id,this.addParent(e.children[a])}},{key:"addIdToNode",value:function(e){if(!e)return e;if(e.id=(this.id++).toString(),e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++)this.addIdToNode(e.children[a]);return e}},{key:"componentDidMount",value:function(){var e=this;J.initPreferenceMgr(),We.initDatabase(),We.getTreeData().then((function(a){e.processTreeData(a)}))}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement(Ae.a,{theme:this.theme},r.a.createElement("div",{id:"container"},r.a.createElement(be,Object.assign({},this.props,{resetView:this.reset,editMode:this.state.editMode,setEditMode:this.setEditMode,saveTree:this.saveTree})),Object.keys(this.state.json).length&&r.a.createElement(Pe,Object.assign({},this.props,{data:this.state.json,editMode:this.state.editMode,setZoomRef:this.setZoomRef,getNextPerson:this.getNextPerson}))))}}]),n}(r.a.PureComponent),Ge=He=Object(Re.b)((function(e){return e}))(He),Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var qe=(0,n(27).createBrowserHistory)();l.a.render(r.a.createElement(w.a,{basename:"/tree",history:qe},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",exact:!0},r.a.createElement(Re.a,{store:S},r.a.createElement(Ge,{editMode:!1}))),r.a.createElement(O.a,{path:"/edit"},r.a.createElement(Re.a,{store:S},r.a.createElement(Ge,{editMode:!0}))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tree",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/tree","/service-worker.js");Ze?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ye(a,e)}))}}()}},[[245,1,2]]]);
//# sourceMappingURL=main.e6e48469.chunk.js.map