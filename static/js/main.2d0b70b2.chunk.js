(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{104:function(e,a,n){e.exports=n(151)},110:function(e,a,n){},148:function(e,a,n){},151:function(e,a,n){"use strict";n.r(a);var r=n(0),h=n.n(r),i=n(9),t=n.n(i),d="RESIZE",l="SET_ACTIVE_NODE",c="SET_FILTER";function o(){f.dispatch({type:d})}function m(e){f.dispatch({type:l,node:e})}function s(e){f.dispatch({type:c,filter:e})}var u=n(21),J=n.n(u),p=n(44),f=Object(p.c)(Object(p.b)({activeNode:function(e,a){if("undefined"===typeof e)return null;switch(a.type){case l:return a.node}return e},filter:function(e,a){if("undefined"===typeof e)return"";switch(a.type){case c:return a.filter}return e},height:function(e,a){if("undefined"===typeof e)return J()(window).height()-25;switch(a.type){case d:return J()(window).height()-J()("#header").height()}return e},width:function(e,a){if("undefined"===typeof e)return J()(window).width();switch(a.type){case d:return J()(window).width()}return e}}),void 0,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(93),y=n(11),b=(n(110),n(22)),g=n(23),k=n(28),C=n(25),w=function(e){Object(k.a)(n,e);var a=Object(C.a)(n);function n(){return Object(b.a)(this,n),a.apply(this,arguments)}return Object(g.a)(n,[{key:"handleChange",value:function(e){s(e.target.value)}},{key:"render",value:function(){return h.a.createElement("input",{id:"search",type:"text",placeholder:"Find Name ...",value:this.props.filter,onChange:this.handleChange})}}]),n}(h.a.PureComponent),S=n(195),N=function(e){Object(k.a)(n,e);var a=Object(C.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,h=new Array(r),i=0;i<r;i++)h[i]=arguments[i];return(e=a.call.apply(a,[this].concat(h))).handleClick=function(){e.props.resetView(),m("0"),s("")},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){o()}},{key:"render",value:function(){return h.a.createElement("div",{id:"header"},h.a.createElement(w,{filter:this.props.filter}),h.a.createElement(S.a,{onClick:this.handleClick,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px"},size:"small"},"Reset"))}}]),n}(h.a.PureComponent),E=n(67),j=n.n(E),O=n(89),R=n.n(O),P=n(72),A=n(194),M=n(197),D=n(191),V=n(190),B=n(198),K=n(146);function T(e){var a=h.a.useState(!0),n=Object(P.a)(a,2),r=n[0],i=n[1],t=function e(a,n){if(n.id===a)return n;for(var r=0;r<n.children.length;r++){var h=e(a,n.children[r]);if(h)return h}return null}(e.nodeId,e.data),d=h.a.useState(K.cloneDeep(t)),l=Object(P.a)(d,2),c=l[0],o=l[1],m=Object.assign({},c),s=h.a.createRef(),u=h.a.createRef(),J=function(){i(!1),e.formSubmitCB(null)};return h.a.createElement("div",null,h.a.createElement(M.a,{open:r,onClose:J,"aria-labelledby":"form-dialog-title",maxWidth:"sm"},h.a.createElement(B.a,{id:"form-dialog-title"},"Edit Info"),h.a.createElement(V.a,null,h.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",defaultValue:c.name,inputRef:function(e){s=e},variant:"outlined",fullWidth:!0}),c.partner&&h.a.createElement(A.a,{margin:"dense",id:"partner",label:"Partner's Name",type:"name",defaultValue:c.partner.name,variant:"outlined",inputRef:function(e){u=e},fullWidth:!0}),function(){var e=0,a=[];if(!c)return a;for(;e<c.children.length;)e<t.children.length?a.push(h.a.createElement(A.a,{disabled:!0,margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})):a.push(h.a.createElement(A.a,{margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})),e++;return a}()),h.a.createElement(S.a,{variant:"outlined",onClick:function(){m.children.push({name:"Add Name ...",children:[]}),o(m)},color:"primary"},"Add Child"),h.a.createElement(D.a,null,h.a.createElement(S.a,{variant:"contained",onClick:function(){i(!1),c.name=s.value,c.partner.name=u.value,t.name=c.name,t.partner=c.partner,t.children=c.children,e.formSubmitCB(c)},color:"primary"},"Save"),h.a.createElement(S.a,{variant:"contained",onClick:J,color:"primary"},"Cancel"))))}var I=function(e){Object(k.a)(n,e);var a=Object(C.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=a.call(this,e)).handleClick=function(e,a){r.setState({currentNode:a}),r.props.editMode?r.setState({formActive:!0}):s("")},r.formClose=function(e){r.setState({formActive:!1})},r.pathCB=function(e,a,n){console.log(e),console.log(a),console.log(n)},r.getChildren=function(e){var a=void 0;return e.id?(r.state.currentNode!==e.id||r.props.editMode?a=r.closeNode.has(e.id)?void 0:e.children:(r.state.currentNode=void 0,r.closeNode.has(e.id)?(r.closeNode.delete(e.id),a=e.children):(r.closeNode.add(e.id),e.children=void 0,a=void 0)),a):e.children},r.data=e.data,r.state={key:0,currentNode:void 0,formActive:!1},r.closeNode=new Set,r.hiddenNode=new Set,r.props.editMode||r.populateCloseSet(r.data),r}return Object(g.a)(n,[{key:"populateCloseSet",value:function(e){if(this.closeNode.add(e.id),e.children)for(var a=0;a<e.children.length;a++)this.populateCloseSet(e.children[a])}},{key:"resetCloseSet",value:function(e){if(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e.children)for(var a=0;a<e.children.length;a++)this.resetCloseSet(e.children[a])}},{key:"getRoot",value:function(e,a){if(e.id===a)return e;for(var n=0;n<e.children.length;n++){var r=this.getRoot(e.children[n],a);if(r)return r}return!1}},{key:"buildSubTree",value:function(e){for(var a=0,n=0;n<e.children.length;n++)this.buildSubTree(e.children[n])&&a++;return a>0||0===e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())?(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e):(this.closeNode.add(e.id),null)}},{key:"setClassName",value:function(e){e.children.forEach(this.setClassName,this),this.props.filter&&(e.className=-1===e.name.toLowerCase().indexOf(this.props.filter)?"node searchExcluded":"node searchIncluded")}},{key:"render",value:function(){"0"===this.props.activeNode&&(m(null),this.props.editMode?this.resetCloseSet(this.data):this.populateCloseSet(this.data));var e=this.data;return e=j()(e),this.props.filter&&(e=this.buildSubTree(e)||e),this.setClassName(e),h.a.createElement("div",null,this.state.formActive&&h.a.createElement(T,{nodeId:this.state.currentNode,data:this.data,formSubmitCB:this.formClose}),h.a.createElement(R.a,{animated:!0,data:e,width:this.props.width,height:this.props.height,keyProp:"id",getChildren:this.getChildren,margins:{bottom:10,left:20,right:100,top:10},gProps:{className:"node",onClick:this.handleClick},svgProps:{viewBox:"0 0 "+this.props.width+" "+this.props.height},steps:30}))}}]),n}(h.a.PureComponent),L={name:"Khedan Jha",children:[{name:"Dukhran Jha",children:[{name:"Baburam Jha",children:[{name:"Kashinath Jha",children:[{name:"Janaklal Jha",children:[{name:"Umakant Jha",children:[{name:"Babusaheb Jha",children:[{name:"Bharat Jha",children:[]},{name:"Shatrughan Jha",children:[]}]},{name:"Pitambar Jha",children:[{name:"Rakesh Jha",children:[]}]}]}]},{name:"Madhushudan Jha",children:[{name:"Bageshwar Jha",children:[{name:"Lalbuchchi Devi",children:[]}]}]}]},{name:"Vishwanath Jha",children:[]},{name:"Sashinath Jha",children:[{name:"Jayanath Jha",children:[]},{name:"Janardhan Jha",children:[{name:"Jayaveesh Jha",children:[]}]}]}]},{name:"Dheernath Jha",children:[{name:"Raghuvar Jha",children:[]},{name:"Gopinath Jha",children:[]},{name:"Nenmani Jha",children:[{name:"Ugramani Jha",children:[]},{name:"Krishnamani Jha",children:[{name:"Suvansh Lal Jha",children:[{name:"Madhukant Jha",children:[{name:"Kulanand Jha",children:[]},{name:"Raghunath Jha",children:[]},{name:"Krityanand Jha",children:[]}]},{name:"Shubhkant Jha",children:[{name:"Ashok Jha",children:[]},{name:"Kishore Jha",children:[]},{name:"Amol Jha",children:[]}]},{name:"Mahakant Jha",children:[{name:"Chandrashekhar Jha",children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Ajeet Jha",children:[]}]}]},{name:"Yaduvansh Jha",children:[{name:"Lakshmikant Jha",children:[{name:"Sadanand Jha",children:[]}]},{name:"Dayakant Jha",children:[{name:"Tulanand Jha",children:[{name:"Chandan Jha",children:[]}]},{name:"Lokanand Jha",children:[]},{name:"Parmanand Jha",children:[]}]}]},{name:"Srivansh Jha",children:[{name:"Jeevach Jha",children:[{name:"Sushil Kumar Jha",children:[]}]},{name:"ShobhaNand Jha",children:[{name:"Sanjeev Jha",children:[]},{name:"Rajeev Jha",children:[]}]}]},{name:"Udayvansh Jha",children:[{name:"Anmeghana Devi",children:[]}]},{name:"Lakshman Jha",children:[{name:"Shyamakant Jha",children:[{name:"Vaidyanath Jha",children:[{name:"Roushan Jha",children:[]}]},{name:"Vishwanath Jha",children:[{name:"Vipin Vatsa",children:[]},{name:"Nitin Vatsa",children:[]}]}]}]}]},{name:"Jayadev Jha",children:[{name:"Mahadev Jha",children:[{name:"Mohan Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Lal Jha",children:[]},{name:"Rajendra Jha",children:[]}]}]},{name:"Ramdev Jha",children:[{name:"Dharmeshwar Jha",children:[{name:"Sanjay Kumar Jha",children:[]}]},{name:"Umeshwar Jha",children:[{name:"Vinod Jha",children:[]},{name:"Manoj Jha",children:[{name:"Raja Babu",children:[]},{name:"Child 2",children:[]}]},{name:"Shailendra Jha",children:[]},{name:"Amrendra Jha",children:[]}]},{name:"Dineshwar Jha",children:[]},{name:"Maheshwar Jha",partner:{name:"Ambika Jha"},children:[{name:"Manju Jha",partner:{name:"Hemdhar Jha"},children:[{name:"Ambikesh Jha",partner:{name:"Anu Jha"},children:[{name:"Aayushi Jha",children:[]},{name:"Adya Jha",children:[]}]},{name:"Rajesh Jha",partner:{name:"Nirjala Jha"},children:[{name:"Rajat Jha",children:[]},{name:"Aditya Jha",children:[]}]},{name:"Kamlesh Jha",partner:{name:"Vandana Jha"},children:[{name:"Harshit Jha",children:[]},{name:"Kartik Jha",children:[]}]},{name:"Shailesh Jha",partner:{name:"Aruna Jha"},children:[{name:"Yash",children:[]},{name:"Juhi",children:[]}]}]},{name:"Arvind Jha",partner:{name:"Sabri Devi"},children:[{name:"Jaya Jha",partner:{name:"Awadhesh Jha"},children:[{name:"Aryaman Jha",children:[]}]},{name:"Jyoti Pathak",partner:{name:"Rajesh Pathak"},children:[{name:"Rashi Pathak",children:[]},{name:"Aastha Pathak",children:[]}]},{name:"Prakash Jha",partner:{name:"Rishu Shandilya"},children:[]},{name:"Preeti Jha",partner:{name:"Swapnil Pathade"},children:[]}]},{name:"Sunita Jha",partner:{name:"Bihari Jha"},children:[{name:"Chandan Jha",partner:{name:"Kabita Jha"},children:[{name:"Vinamra Jha",children:[]}]},{name:"Rachna Jha",partner:{name:"Santosh Jha"},children:[{name:"Karnika Jha",children:[]},{name:"Umang Jha",children:[]}]}]},{name:"Birendra Jha",partner:{name:"Renu Jha"},children:[{name:"Vikas Jha",partner:{name:"Niharica Jha"},children:[]},{name:"Subhash Jha",partner:{name:"Renuka Mishra"},children:[]},{name:"Shilpa Bharati",children:[]}]},{name:"Dhirendra Jha",partner:{name:"Usha Jha"},children:[{name:"Neha Jha",children:[]},{name:"Nupur Jha",children:[]}]},{name:"Sujata Jha",partner:{name:"Amar Nath Jha"},children:[{name:"Kadambari Jha",partner:{name:"BK Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Shyam Nath Jha",partner:{name:"Anjana Jha"},children:[{name:"Atharva Jha",children:[]}]},{name:"Priya Jha",children:[{name:"Rishi Jha",children:[]}]},{name:"Aditya Nath Jha",partner:{name:"Priyanka Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]}]},{name:"Ugeshwar Jha",children:[]}]},{name:"Baldev Jha",children:[{name:"Sri Nandan Jha",children:[{name:"Surya Kant Jha",children:[{name:"Santosh Jha",children:[]},{name:"Mantosh Jha",children:[]},{name:"Ranjit Jha",children:[]},{name:"Sunil Jha",children:[]}]}]},{name:"Dev Nandan Jha",children:[{name:"Harikant Jha",children:[{name:"Lalan Jha",children:[{name:"Goopal Jha",children:[]},{name:"Child 2",children:[]},{name:"Child 3",children:[]}]},{name:"Madan Jha",children:[]},{name:"Pawan Jha",children:[]}]},{name:"Gangakant Jha",children:[{name:"Pitamber Jha",children:[]},{name:"Bhavan Jha",children:[]},{name:"Krishnakant Jha",children:[]}]},{name:"Mayakant Jha",children:[{name:"Vishwambhar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Raktambar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Pappu Jha",children:[]}]}]}]}]},{name:"Kulmani Jha",children:[]},{name:"Rudramani Jha",children:[]}]},{name:"Dullah Jha",children:[{name:"Kaladhar Jha",children:[]},{name:"Leeladhar Jha",children:[]}]}]}]},_=n(47),x=n(71),z=n(193),U=n(58),W=n(192);n(148);J()(window).on("resize",o);var H=function(e){Object(k.a)(n,e);var a=Object(C.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=a.call(this,e)).zoomed=function(){Object(z.a)("g").filter((function(){return!this.classList.contains("node")})).attr("transform",U.c.transform)},r.reset=function(){Object(W.a)("svg").call(r.zoom.transform,x.b)},r.wheeled=function(){U.c.preventDefault(),Object(z.a)("g").filter((function(){return!this.classList.contains("node")})).each((function(){this.setAttribute("transform",U.c.transform)}))},r.id=0,r.treeContainerRef=h.a.createRef(),r.json=r.addIdToNode(L),r.addParent(r.json),r.addIdToPartner(r.json),r}return Object(g.a)(n,[{key:"addIdToPartner",value:function(e){if(e.partner&&(e.partner.id=(this.id++).toString()),e.children&&e.children.length)for(var a=0;a<e.children.length;a++)this.addIdToPartner(e.children[a])}},{key:"addParent",value:function(e){if(e.children&&e.children.length)for(var a=0;a<e.children.length;a++)e.children[a].parent=e.id,this.addParent(e.children[a])}},{key:"addIdToNode",value:function(e){if(!e)return e;if(e.id=(this.id++).toString(),e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++)this.addIdToNode(e.children[a]);return e}},{key:"componentDidMount",value:function(){this.zoom=Object(x.a)().on("zoom",this.zoomed),Object(W.a)("svg").call(this.zoom).on("dblclick.zoom",null)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return h.a.createElement("div",{id:"container"},h.a.createElement(N,{filter:this.props.filter,resetView:this.reset}),h.a.createElement(I,{activeNode:this.props.activeNode,data:this.json,filter:this.props.filter,height:this.props.height,width:this.props.width,editMode:this.props.editMode}))}}]),n}(h.a.PureComponent),X=H=Object(_.b)((function(e){return e}))(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=(0,n(17).createBrowserHistory)();t.a.render(h.a.createElement(v.a,{basename:"/tree",history:F},h.a.createElement(y.c,null,h.a.createElement(y.a,{path:"/",exact:!0},h.a.createElement(_.a,{store:f},h.a.createElement(X,{editMode:!1}))),h.a.createElement(y.a,{path:"/edit"},h.a.createElement(_.a,{store:f},h.a.createElement(X,{editMode:!0}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.2d0b70b2.chunk.js.map