(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{143:function(e,a,n){e.exports=n(193)},149:function(e,a,n){},153:function(e,a,n){},189:function(e,a,n){},190:function(e,a,n){},193:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(9),h=n.n(i),l="RESIZE",d="SET_ACTIVE_NODE",c="SET_FILTER";function o(){J.dispatch({type:l})}function m(e){J.dispatch({type:d,node:e})}function s(e){J.dispatch({type:c,filter:e})}var u=n(33),f=n.n(u),p=n(54),J=Object(p.c)(Object(p.b)({activeNode:function(e,a){if("undefined"===typeof e)return null;switch(a.type){case d:return a.node}return e},filter:function(e,a){if("undefined"===typeof e)return"";switch(a.type){case c:return a.filter}return e},height:function(e,a){if("undefined"===typeof e)return f()(window).height();switch(a.type){case l:return f()(window).height()}return e},width:function(e,a){if("undefined"===typeof e)return f()(window).width();switch(a.type){case l:return f()(window).width()}return e}}),void 0,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(124),g=n(11),k=(n(149),n(28)),E=n(29),y=n(32),b=n(30),w=function(e){Object(y.a)(n,e);var a=Object(b.a)(n);function n(){return Object(k.a)(this,n),a.apply(this,arguments)}return Object(E.a)(n,[{key:"handleChange",value:function(e){s(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{id:"search",type:"text",placeholder:"Find Name ...",value:this.props.filter,onChange:this.handleChange})}}]),n}(r.a.PureComponent),C=(n(63),n(85),n(23)),S=n(4),j=n(75),N=(n(238),n(239),n(255));Object(S.a)({switchBase:{color:j.a[800],"&$checked":{color:j.a[300]},"&$checked + $track":{backgroundColor:j.a[300]}},checked:{},track:{}})(N.a);var R=n(237),O=n(249),M=n(3),P=n(240),A=n(256),L=n(241),K=n(242),T=n(243),D=n(244),V=n(114),x=n.n(V),B=n(115),I=n.n(B),W=n(116),z=n.n(W),_=n(250),U=n(248),H=n(246),F=n(247),G=n(245),X=n(254),$=(n(153),Object(P.a)({list:{width:250},fullList:{width:250}}));function Y(e){var a=$(),n=r.a.useRef(null),t=r.a.useRef(r.a.createRef()),i=r.a.useState(1),h=Object(C.a)(i,2),l=h[0],d=h[1],c=r.a.useState(!1),o=Object(C.a)(c,2),u=o[0],f=o[1],p=r.a.useState(!1),J=Object(C.a)(p,2),v=J[0],g=J[1],k=r.a.useState(!1),E=Object(C.a)(k,2),y=E[0],b=E[1],w=r.a.useState(!1),S=Object(C.a)(w,2),j=S[0],N=S[1],P=r.a.createRef(),V=r.a.createRef(),B=function(e,a){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&f(a)}},W=function(e){d(e),Y(e,!0)},Y=function(a,n){"edit"===a&&(e.editMode?(e.handleSaveTree(),e.setEditMode(!1)):g(n)),"settings"===a&&N(n),"feedback"===a&&b(n)},Z=function(){g(!1),b(!1),N(!1)},q=function(){g(!1),b(!1),N(!1)},Q=function(){console.log(P.value)},ee=function(){console.log(V.value),g(!1),"admin"===V.value&&(m("0"),s(""),e.setEditMode(!0))},ae=function(){var e=t.current;if(e&&e.addEventListener){var a=function(e){(e.touches&&e.touches.length>1||e.ctrlKey)&&e.preventDefault()};e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("wheel",a,{passive:!1})}};r.a.useEffect((function(){setTimeout(ae,200)})),r.a.useLayoutEffect((function(){var e=n.current;if(e){var a=function(e){e.touches&&e.touches.length>1&&e.preventDefault(),e.touches||e.preventDefault()};return e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("wheel",a,{passive:!1}),function(){e.removeEventListener("touchmove",a),e.removeEventListener("wheel",a)}}}),[]);var ne,te;return r.a.createElement("div",{ref:n,className:"ListView"},r.a.createElement(r.a.Fragment,{key:"menu"},r.a.createElement(R.a,{onClick:(ne=!0,te=e.pageNum,function(e){d(te),B(0,ne)(e)}),size:"small",color:"primary"},"|||"),r.a.createElement("div",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),r.a.createElement(A.a,{classes:{paper:a.drawer},anchor:"left",open:u,onClose:B(0,!1)},function(n,t){return r.a.createElement("div",{ref:t,className:Object(M.a)(a.list),role:"presentation",onClick:B(0,!1),onKeyDown:B(0,!1)},r.a.createElement(L.a,null,r.a.createElement(K.a,{button:!0,key:"edit",onClick:function(){W("edit")},selected:"edit"===l},r.a.createElement(T.a,null,r.a.createElement(x.a,null)),r.a.createElement(D.a,{primary:e.editMode?"Save Tree":"Edit Tree"})),r.a.createElement(K.a,{button:!0,key:"settings",onClick:function(){W("settings")},selected:"settings"===l},r.a.createElement(T.a,null,r.a.createElement(I.a,null)),r.a.createElement(D.a,{primary:"Settings"})),r.a.createElement(K.a,{button:!0,key:"feedback",onClick:function(){W("feedback")},selected:"feedback"===l},r.a.createElement(T.a,null,r.a.createElement(z.a,null)),r.a.createElement(D.a,{primary:"Send Feedback"}))))}(0,t)),r.a.createElement(_.a,{open:v,onClose:Z,"aria-labelledby":"form-dialog-title"},r.a.createElement("div",null,r.a.createElement(G.a,{id:"form-dialog-title"},"Admin"),r.a.createElement(H.a,null,r.a.createElement(F.a,null,"To add or modify names, please enter the admin passcode."),r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"pass",label:"Password",type:"password",variant:"filled",fullWidth:!0,inputRef:function(e){V=e}})),r.a.createElement(U.a,null,r.a.createElement(O.a,{onClick:q,color:"primary"},"Cancel"),r.a.createElement(O.a,{onClick:ee,color:"primary"},"Enter")))),r.a.createElement(_.a,{open:y,onClose:Z,"aria-labelledby":"form-dialog-title"},r.a.createElement("div",null,r.a.createElement(G.a,{id:"form-dialog-title"},"Feedback"),r.a.createElement(H.a,null,r.a.createElement(F.a,null,"Please provide your feedback. Also let us know if you want to update any information."),r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"feedback",label:"Feedback",type:"text",variant:"filled",multiline:!0,rows:8,fullWidth:!0,defaultValue:"Work in Progress..",InputProps:{readOnly:!0},inputRef:function(e){P=e}})),r.a.createElement(U.a,null,r.a.createElement(O.a,{onClick:q,color:"primary"},"Cancel"),r.a.createElement(O.a,{onClick:Q,color:"primary"},"Submit")))),r.a.createElement(_.a,{open:j,onClose:Z,"aria-labelledby":"form-dialog-title"},r.a.createElement("div",null,r.a.createElement(G.a,{id:"form-dialog-title"},"Settings"),r.a.createElement(H.a,null,r.a.createElement(F.a,null,"Work in Progress....")),r.a.createElement(U.a,null,r.a.createElement(O.a,{onClick:q,color:"primary"},"Cancel"),r.a.createElement(O.a,{onClick:q,color:"primary"},"Ok"))))))}var Z=n(117),q=n.n(Z),Q=n(118),ee=n.n(Q),ae=function(e){Object(y.a)(n,e);var a=Object(b.a)(n);function n(){var e;Object(k.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(){e.props.resetView(),m("0"),s("")},e.handleSave=function(){console.log("tree is saved")},e.handleCancel=function(){e.props.setEditMode(!1)},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){o()}},{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{style:{float:"left",paddingTop:"0%"}},r.a.createElement(Y,{editMode:this.props.editMode,setEditMode:this.props.setEditMode,handleSaveTree:this.handleSave})),r.a.createElement(w,{filter:this.props.filter}),r.a.createElement(O.a,{onClick:this.handleClick,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px"},size:"small"},"Reset"),this.props.editMode&&r.a.createElement(R.a,{onClick:this.handleSave,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px",float:"right"},size:"small"},r.a.createElement(q.a,null)),r.a.createElement("div",{style:{float:"right"}},"\xa0"),this.props.editMode&&r.a.createElement(R.a,{onClick:this.handleCancel,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px",float:"right"},size:"small"},r.a.createElement(ee.a,null)),!1)}}]),n}(r.a.PureComponent),ne=n(83),te=n.n(ne),re=n(119),ie=n.n(re),he=n(187);function le(e){var a=r.a.useState(!0),n=Object(C.a)(a,2),t=n[0],i=n[1],h=function e(a,n){if(n.id===a)return n;for(var t=0;t<n.children.length;t++){var r=e(a,n.children[t]);if(r)return r}return null}(e.nodeId,e.data),l=r.a.useState(he.cloneDeep(h)),d=Object(C.a)(l,2),c=d[0],o=d[1],m=Object.assign({},c),s=r.a.createRef(),u=r.a.createRef(),f=function(){i(!1),e.formSubmitCB(null)};return r.a.createElement("div",null,r.a.createElement(_.a,{open:t,onClose:f,"aria-labelledby":"form-dialog-title",maxWidth:"sm"},r.a.createElement(G.a,{id:"form-dialog-title"},"Edit Info"),r.a.createElement(H.a,null,r.a.createElement(X.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",defaultValue:c.name,inputRef:function(e){s=e},variant:"outlined",fullWidth:!0}),c.partner&&r.a.createElement(X.a,{margin:"dense",id:"partner",label:"Partner's Name",type:"name",defaultValue:c.partner.name,variant:"outlined",inputRef:function(e){u=e},fullWidth:!0}),function(){var e=0,a=[];if(!c)return a;for(;e<c.children.length;)e<h.children.length?a.push(r.a.createElement(X.a,{disabled:!0,margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})):a.push(r.a.createElement(X.a,{margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})),e++;return a}()),r.a.createElement(O.a,{variant:"outlined",onClick:function(){m.children.push({name:"Add Name ...",children:[]}),o(m)},color:"primary"},"Add Child"),r.a.createElement(U.a,null,r.a.createElement(O.a,{variant:"contained",onClick:function(){i(!1),c.name=s.value,c.partner?c.partner.name=u.value:u.value&&(c.partner={},c.partner.name=u.value),h.name=c.name,h.partner=c.partner,h.children=c.children,e.formSubmitCB(c)},color:"primary"},"Save"),r.a.createElement(O.a,{variant:"contained",onClick:f,color:"primary"},"Cancel"))))}var de=function(e){Object(y.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(k.a)(this,n),(t=a.call(this,e)).handleClick=function(e,a){t.setState({currentNode:a}),t.props.editMode?t.setState({formActive:!0}):s("")},t.formClose=function(e){t.setState({formActive:!1})},t.pathCB=function(e,a,n){console.log(e),console.log(a),console.log(n)},t.getChildren=function(e){var a=void 0;return e.id?(t.state.currentNode!==e.id||t.props.editMode?a=t.closeNode.has(e.id)?void 0:e.children:(t.state.currentNode=void 0,t.closeNode.has(e.id)?(t.closeNode.delete(e.id),a=e.children):(t.closeNode.add(e.id),e.children=void 0,a=void 0)),a):e.children},t.data=e.data,t.state={key:0,currentNode:void 0,formActive:!1},t.closeNode=new Set,t.hiddenNode=new Set,t.props.editMode||t.populateCloseSet(t.data),t}return Object(E.a)(n,[{key:"populateCloseSet",value:function(e){if(this.closeNode.add(e.id),e.children)for(var a=0;a<e.children.length;a++)this.populateCloseSet(e.children[a])}},{key:"resetCloseSet",value:function(e){if(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e.children)for(var a=0;a<e.children.length;a++)this.resetCloseSet(e.children[a])}},{key:"getRoot",value:function(e,a){if(e.id===a)return e;for(var n=0;n<e.children.length;n++){var t=this.getRoot(e.children[n],a);if(t)return t}return!1}},{key:"buildSubTree",value:function(e){for(var a=0,n=0;n<e.children.length;n++)this.buildSubTree(e.children[n])&&a++;return a>0||0===e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())||e.partner&&0===e.partner.name.toLowerCase().indexOf(this.props.filter.toLowerCase())?(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e):(this.closeNode.add(e.id),null)}},{key:"setClassName",value:function(e){e.children.forEach(this.setClassName,this),this.props.filter&&(e.className=-1===e.name.toLowerCase().indexOf(this.props.filter)?"node searchExcluded":"node searchIncluded")}},{key:"render",value:function(){"0"===this.props.activeNode&&(m(null),this.props.editMode?this.resetCloseSet(this.data):this.populateCloseSet(this.data));var e=this.data;return e=te()(e),this.props.filter&&(e=this.buildSubTree(e)||e),this.setClassName(e),r.a.createElement("div",null,this.state.formActive&&r.a.createElement(le,{nodeId:this.state.currentNode,data:this.data,formSubmitCB:this.formClose}),r.a.createElement(ie.a,{animated:!0,data:e,width:this.props.width,height:this.props.height,keyProp:"id",getChildren:this.getChildren,margins:{bottom:10,left:20,right:100,top:10},gProps:{className:"node",onClick:this.handleClick},svgProps:{viewBox:"0 0 "+this.props.width+" "+this.props.height},steps:30}))}}]),n}(r.a.PureComponent),ce={name:"Khedan Jha",children:[{name:"Dukhran Jha",children:[{name:"Baburam Jha",children:[{name:"Kashinath Jha",children:[{name:"Janaklal Jha",children:[{name:"Umakant Jha",children:[{name:"Babusaheb Jha",children:[{name:"Bharat Jha",children:[]},{name:"Shatrughan Jha",children:[]}]},{name:"Pitambar Jha",children:[{name:"Rakesh Jha",children:[]}]}]}]},{name:"Madhushudan Jha",children:[{name:"Bageshwar Jha",children:[{name:"Lalbuchchi Devi",children:[]}]}]}]},{name:"Vishwanath Jha",children:[]},{name:"Sashinath Jha",children:[{name:"Jayanath Jha",children:[]},{name:"Janardhan Jha",children:[{name:"Jayaveesh Jha",children:[]}]}]}]},{name:"Dheernath Jha",children:[{name:"Raghuvar Jha",children:[{name:"Govardhan Jha",children:[{name:"Satyadev Jha",children:[{name:"Kalikant Jha",children:[{name:"Raman Jee Jha",children:[]},{name:"Gagan Jee Jha",children:[]}]}]},{name:"Musri Jha",children:[{name:"Upendra Jha",children:[]},{name:"Devendra Jha",children:[{name:"Bhagirath Jha",children:[{name:"Rakesh Jha",children:[]},{name:"Mukesh Jha",children:[]}]}]}]}]}]},{name:"Gopinath Jha",children:[{name:"Ratti Jha",children:[]}]},{name:"Nenmani Jha",children:[{name:"Ugramani Jha",children:[]},{name:"Krishnamani Jha",children:[{name:"Suvansh Lal Jha",children:[{name:"Madhukant Jha",children:[{name:"Kulanand Jha",children:[]},{name:"Raghunath Jha",children:[]},{name:"Krityanand Jha",children:[]}]},{name:"Shubhkant Jha",children:[{name:"Ashok Jha",children:[]},{name:"Kishore Jha",children:[]},{name:"Amol Jha",children:[]}]},{name:"Mahakant Jha",children:[{name:"Chandrashekhar Jha",children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Ajeet Jha",children:[]}]}]},{name:"Yaduvansh Jha",children:[{name:"Lakshmikant Jha",children:[{name:"Sadanand Jha",children:[]}]},{name:"Dayakant Jha",children:[{name:"Tulanand Jha",children:[{name:"Chandan Jha",children:[]}]},{name:"Lokanand Jha",children:[]},{name:"Parmanand Jha",children:[]}]}]},{name:"Srivansh Jha",children:[{name:"Jeevach Jha",children:[{name:"Sushil Kumar Jha",children:[]}]},{name:"ShobhaNand Jha",children:[{name:"Sanjeev Jha",children:[]},{name:"Rajeev Jha",children:[]}]}]},{name:"Udayvansh Jha",children:[{name:"Anmeghana Devi",children:[]}]},{name:"Lakshman Jha",children:[{name:"Shyamakant Jha",children:[{name:"Vaidyanath Jha",children:[{name:"Roushan Jha",children:[]}]},{name:"Vishwanath Jha",children:[{name:"Vipin Vatsa",children:[]},{name:"Nitin Vatsa",children:[]}]}]}]}]},{name:"Jayadev Jha",children:[{name:"Mahadev Jha",children:[{name:"Mohan Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Lal Jha",children:[]},{name:"Rajendra Jha",children:[]}]}]},{name:"Ramdev Jha",children:[{name:"Dharmeshwar Jha",children:[{name:"Sanjay Kumar Jha",children:[]}]},{name:"Umeshwar Jha",children:[{name:"Vinod Jha",children:[]},{name:"Manoj Jha",children:[{name:"Raja Babu",children:[]},{name:"Child 2",children:[]}]},{name:"Shailendra Jha",children:[]},{name:"Amrendra Jha",children:[]}]},{name:"Dineshwar Jha",children:[]},{name:"Maheshwar Jha",partner:{name:"Ambika Jha"},children:[{name:"Manju Jha",partner:{name:"Hemdhar Jha"},children:[{name:"Ambikesh Jha",partner:{name:"Anu Jha"},children:[{name:"Aayushi Jha",children:[]},{name:"Adya Jha",children:[]}]},{name:"Rajesh Jha",partner:{name:"Nirjala Jha"},children:[{name:"Rajat Jha",children:[]},{name:"Aditya Jha",children:[]}]},{name:"Kamlesh Jha",partner:{name:"Vandana Jha"},children:[{name:"Harshit Jha",children:[]},{name:"Kartik Jha",children:[]}]},{name:"Shailesh Jha",partner:{name:"Aruna Jha"},children:[{name:"Yash",children:[]},{name:"Juhi",children:[]}]}]},{name:"Arvind Jha",partner:{name:"Sabri Devi"},children:[{name:"Jaya Jha",partner:{name:"Awadhesh Jha"},children:[{name:"Aryaman Jha",children:[]}]},{name:"Jyoti Pathak",partner:{name:"Rajesh Pathak"},children:[{name:"Rashi Pathak",children:[]},{name:"Aastha Pathak",children:[]}]},{name:"Prakash Jha",partner:{name:"Rishu Shandilya"},children:[]},{name:"Preeti Jha",partner:{name:"Swapnil Pathade"},children:[]}]},{name:"Sunita Jha",partner:{name:"Bihari Jha"},children:[{name:"Chandan Jha",partner:{name:"Kabita Jha"},children:[{name:"Vinamra Jha",children:[]}]},{name:"Rachna Jha",partner:{name:"Santosh Jha"},children:[{name:"Karnika Jha",children:[]},{name:"Umang Jha",children:[]}]}]},{name:"Birendra Jha",partner:{name:"Renu Jha"},children:[{name:"Vikas Jha",partner:{name:"Niharica Jha"},children:[]},{name:"Subhash Jha",partner:{name:"Renuka Mishra"},children:[]},{name:"Shilpa Bharati",children:[]}]},{name:"Dhirendra Jha",partner:{name:"Usha Jha"},children:[{name:"Neha Jha",children:[]},{name:"Nupur Jha",children:[]}]},{name:"Sujata Jha",partner:{name:"Amar Nath Jha"},children:[{name:"Kadambari Jha",partner:{name:"BK Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Shyam Nath Jha",partner:{name:"Anjana Jha"},children:[{name:"Atharva Jha",children:[]}]},{name:"Priya Jha",children:[{name:"Rishi Jha",children:[]}]},{name:"Aditya Nath Jha",partner:{name:"Priyanka Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]}]},{name:"Ugeshwar Jha",children:[]}]},{name:"Baldev Jha",children:[{name:"Sri Nandan Jha",children:[{name:"Surya Kant Jha",children:[{name:"Santosh Jha",children:[]},{name:"Mantosh Jha",children:[]},{name:"Ranjit Jha",children:[]},{name:"Sunil Jha",children:[]}]}]},{name:"Dev Nandan Jha",children:[{name:"Harikant Jha",children:[{name:"Lalan Jha",children:[{name:"Goopal Jha",children:[]},{name:"Child 2",children:[]},{name:"Child 3",children:[]}]},{name:"Madan Jha",children:[]},{name:"Pawan Jha",children:[]}]},{name:"Gangakant Jha",children:[{name:"Pitamber Jha",children:[]},{name:"Bhavan Jha",children:[]},{name:"Krishnakant Jha",children:[]}]},{name:"Mayakant Jha",children:[{name:"Vishwambhar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Raktambar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Pappu Jha",children:[]}]}]}]}]},{name:"Kulmani Jha",children:[{name:"Jogeshwar Jha",children:[]},{name:"Kedarnath Jha",children:[{name:"Sureshwar Jha",children:[{name:"Khela Nand Jha",children:[{name:"Viveka Nand Jha",children:[]}]}]},{name:"Nageshwar Jha",children:[{name:"Durganand Jha",children:[{name:"Ramanand Jha",children:[]},{name:"Kripanand Jha",children:[]}]},{name:"Indranand Jha",children:[{name:"Chandranand Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Radhanand Jha",children:[]},{name:"Ganganand Jha",children:[]}]},{name:"Meghanand Jha",children:[{name:"Sitanand Jha",children:[]},{name:"Rudranand Jha",children:[]}]}]}]}]},{name:"Rudramani Jha",children:[{name:"Varje Jha",children:[{name:"Kapaleshwar Jha",children:[]}]},{name:"Apooch Jha",children:[{name:"Sahdev Jha",children:[{name:"Kari Jha",children:[{name:"Sashikant Jha",children:[{name:"Pradip Jha",children:[]},{name:"Ajit Jha",children:[]},{name:"Sujit Jha",children:[]}]},{name:"Indrakant Jha",children:[]},{name:"Jeevkant Jha",children:[]}]},{name:"Buddhinath Jha",children:[{name:"Raj Kuamr Jha",children:[]},{name:"Phool Kumar Jha",children:[]},{name:"Pawan Kumar Jha",children:[]}]}]}]}]}]},{name:"Dullah Jha",children:[{name:"Kaladhar Jha",children:[]},{name:"Leeladhar Jha",children:[]}]}]}]},oe=n(57),me=n(88),se=n(252),ue=n(74),fe=n(251),pe=n(125),Je=n(253),ve=n(123),ge=n.n(ve);n(189),n(190);f()(window).on("resize",o);var ke=function(e){Object(y.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(k.a)(this,n),(t=a.call(this,e)).zoomed=function(){Object(se.a)("g").filter((function(){return!this.classList.contains("node")})).attr("transform",ue.c.transform)},t.reset=function(){Object(fe.a)("svg").call(t.zoom.transform,me.b)},t.wheeled=function(){ue.c.preventDefault(),Object(se.a)("g").filter((function(){return!this.classList.contains("node")})).each((function(){this.setAttribute("transform",ue.c.transform)}))},t.setEditMode=function(e){t.reset(),t.setState({editMode:e})},t.id=0,t.treeContainerRef=r.a.createRef(),t.json=t.addIdToNode(ce),t.addParent(t.json),t.addIdToPartner(t.json),t.state={editMode:!1},t.theme=Object(pe.a)({palette:{type:"dark",primary:ge.a}}),t}return Object(E.a)(n,[{key:"addIdToPartner",value:function(e){if(e.partner&&(e.partner.id=(this.id++).toString()),e.children&&e.children.length)for(var a=0;a<e.children.length;a++)this.addIdToPartner(e.children[a])}},{key:"addParent",value:function(e){if(e.children&&e.children.length)for(var a=0;a<e.children.length;a++)e.children[a].parent=e.id,this.addParent(e.children[a])}},{key:"addIdToNode",value:function(e){if(!e)return e;if(e.id=(this.id++).toString(),e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++)this.addIdToNode(e.children[a]);return e}},{key:"componentDidMount",value:function(){this.zoom=Object(me.a)().on("zoom",this.zoomed),Object(fe.a)("svg").call(this.zoom).on("dblclick.zoom",null)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement(Je.a,{theme:this.theme},r.a.createElement("div",{id:"container"},r.a.createElement(ae,{filter:this.props.filter,resetView:this.reset,editMode:this.state.editMode,setEditMode:this.setEditMode}),r.a.createElement(de,{activeNode:this.props.activeNode,data:this.json,filter:this.props.filter,height:this.props.height,width:this.props.width,editMode:this.state.editMode})))}}]),n}(r.a.PureComponent),Ee=ke=Object(oe.b)((function(e){return e}))(ke),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var we=(0,n(20).createBrowserHistory)();h.a.render(r.a.createElement(v.a,{basename:"/tree",history:we},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0},r.a.createElement(oe.a,{store:J},r.a.createElement(Ee,{editMode:!1}))),r.a.createElement(g.a,{path:"/edit"},r.a.createElement(oe.a,{store:J},r.a.createElement(Ee,{editMode:!0}))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tree",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/tree","/service-worker.js");ye?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(a,e)}))}}()}},[[143,1,2]]]);
//# sourceMappingURL=main.b9412c97.chunk.js.map