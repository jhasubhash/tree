(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{104:function(e,a,n){e.exports=n(151)},110:function(e,a,n){},148:function(e,a,n){},151:function(e,a,n){"use strict";n.r(a);var h=n(0),r=n.n(h),i=n(9),t=n.n(i),d="RESIZE",l="SET_ACTIVE_NODE",c="SET_FILTER",o="RESET_VIEW";function m(){v.dispatch({type:d})}function s(e){v.dispatch({type:l,node:e})}function u(e){v.dispatch({type:c,filter:e})}var J=n(19),p=n.n(J),f=n(44),v=Object(f.c)(Object(f.b)({activeNode:function(e,a){if("undefined"===typeof e)return null;switch(a.type){case l:return a.node}return e},filter:function(e,a){if("undefined"===typeof e)return"";switch(a.type){case c:return a.filter}return e},height:function(e,a){if("undefined"===typeof e)return p()(window).height()-25;switch(a.type){case d:return p()(window).height()-p()("#header").height();case o:return p()(window).height()-25}return e},width:function(e,a){if("undefined"===typeof e)return p()(window).width();switch(a.type){case d:case o:return p()(window).width()}return e}}),void 0,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=n(92),k=n(11),b=(n(110),n(22)),g=n(23),C=n(28),S=n(25),w=function(e){Object(C.a)(n,e);var a=Object(S.a)(n);function n(){return Object(b.a)(this,n),a.apply(this,arguments)}return Object(g.a)(n,[{key:"handleChange",value:function(e){u(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{id:"search",type:"text",placeholder:"Find Name ...",value:this.props.filter,onChange:this.handleChange})}}]),n}(r.a.PureComponent),E=n(195),N=function(e){Object(C.a)(n,e);var a=Object(S.a)(n);function n(){return Object(b.a)(this,n),a.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){m()}},{key:"handleClick",value:function(){s("0"),u(""),v.dispatch({type:o})}},{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement(w,{filter:this.props.filter}),r.a.createElement(E.a,{onClick:this.handleClick,variant:"contained",color:"primary",style:{maxHeight:"25px",minHeight:"25px",fontSize:"11px"},size:"small"},"Reset"))}}]),n}(r.a.PureComponent),j=n(67),O=n.n(j),R=n(88),P=n.n(R),A=n(71),M=n(194),D=n(197),V=n(191),B=n(190),K=n(198),T=n(146);function I(e){var a=r.a.useState(!0),n=Object(A.a)(a,2),h=n[0],i=n[1],t=function e(a,n){if(n.id===a)return n;for(var h=0;h<n.children.length;h++){var r=e(a,n.children[h]);if(r)return r}return null}(e.nodeId,e.data),d=r.a.useState(T.cloneDeep(t)),l=Object(A.a)(d,2),c=l[0],o=l[1],m=Object.assign({},c),s=r.a.createRef(),u=r.a.createRef(),J=function(){i(!1),e.formSubmitCB(null)};return r.a.createElement("div",null,r.a.createElement(D.a,{open:h,onClose:J,"aria-labelledby":"form-dialog-title",maxWidth:"sm"},r.a.createElement(K.a,{id:"form-dialog-title"},"Edit Info"),r.a.createElement(B.a,null,r.a.createElement(M.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",defaultValue:c.name,inputRef:function(e){s=e},variant:"outlined",fullWidth:!0}),c.partner&&r.a.createElement(M.a,{margin:"dense",id:"partner",label:"Partner's Name",type:"name",defaultValue:c.partner.name,variant:"outlined",inputRef:function(e){u=e},fullWidth:!0}),function(){var e=0,a=[];if(!c)return a;for(;e<c.children.length;)e<t.children.length?a.push(r.a.createElement(M.a,{disabled:!0,margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})):a.push(r.a.createElement(M.a,{margin:"dense",id:"name",label:"Child "+(e+1),key:"Child "+(e+1),type:"name",defaultValue:c.children[e].name,fullWidth:!0,variant:"outlined"})),e++;return a}()),r.a.createElement(E.a,{variant:"outlined",onClick:function(){m.children.push({name:"Add Name ...",children:[]}),o(m)},color:"primary"},"Add Child"),r.a.createElement(V.a,null,r.a.createElement(E.a,{variant:"contained",onClick:function(){i(!1),c.name=s.value,c.partner.name=u.value,t.name=c.name,t.partner=c.partner,t.children=c.children,e.formSubmitCB(c)},color:"primary"},"Save"),r.a.createElement(E.a,{variant:"contained",onClick:J,color:"primary"},"Cancel"))))}var L=function(e){Object(C.a)(n,e);var a=Object(S.a)(n);function n(e){var h;return Object(b.a)(this,n),(h=a.call(this,e)).handleClick=function(e,a){h.setState({currentNode:a}),h.props.editMode?h.setState({formActive:!0}):u("")},h.formClose=function(e){h.setState({formActive:!1})},h.pathCB=function(e,a,n){console.log(e),console.log(a),console.log(n)},h.getChildren=function(e){var a=void 0;return e.id?(h.state.currentNode!==e.id||h.props.editMode?a=h.closeNode.has(e.id)?void 0:e.children:(h.state.currentNode=void 0,h.closeNode.has(e.id)?(h.closeNode.delete(e.id),a=e.children):(h.closeNode.add(e.id),e.children=void 0,a=void 0)),a):e.children},h.data=e.data,h.state={key:0,currentNode:void 0,formActive:!1},h.closeNode=new Set,h.hiddenNode=new Set,h.props.editMode||h.populateCloseSet(h.data),h}return Object(g.a)(n,[{key:"populateCloseSet",value:function(e){if(this.closeNode.add(e.id),e.children)for(var a=0;a<e.children.length;a++)this.populateCloseSet(e.children[a])}},{key:"resetCloseSet",value:function(e){if(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e.children)for(var a=0;a<e.children.length;a++)this.resetCloseSet(e.children[a])}},{key:"getRoot",value:function(e,a){if(e.id===a)return e;for(var n=0;n<e.children.length;n++){var h=this.getRoot(e.children[n],a);if(h)return h}return!1}},{key:"buildSubTree",value:function(e){for(var a=0,n=0;n<e.children.length;n++)this.buildSubTree(e.children[n])&&a++;return a>0||0===e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())?(this.closeNode.has(e.id)&&this.closeNode.delete(e.id),e):(this.closeNode.add(e.id),null)}},{key:"setClassName",value:function(e){e.children.forEach(this.setClassName,this),this.props.filter&&(e.className=-1===e.name.toLowerCase().indexOf(this.props.filter)?"node searchExcluded":"node searchIncluded")}},{key:"render",value:function(){"0"===this.props.activeNode&&(s(null),this.props.editMode?this.resetCloseSet(this.data):this.populateCloseSet(this.data));var e=this.data;return e=O()(e),this.props.filter&&(e=this.buildSubTree(e)||e),this.setClassName(e),r.a.createElement("div",null,this.state.formActive&&r.a.createElement(I,{nodeId:this.state.currentNode,data:this.data,formSubmitCB:this.formClose}),r.a.createElement(P.a,{animated:!0,data:e,width:this.props.width,height:this.props.height,keyProp:"id",getChildren:this.getChildren,margins:{bottom:10,left:20,right:100,top:10},gProps:{className:"node",onClick:this.handleClick},svgProps:{viewBox:"0 0 "+this.props.width+" "+this.props.height},steps:30}))}}]),n}(r.a.PureComponent),_={name:"Nathu Jha",children:[{name:"Narhari Jha",children:[{name:"Vasudev Jha",children:[{name:"Indrapati Jha",children:[{name:"Keshav Jha",children:[{name:"Shyam Jha",children:[{name:"Anirudh Jha",children:[{name:"Udayram Jha",children:[{name:"Khedan Jha",children:[{name:"Dukhran Jha",children:[{name:"Baburam Jha",children:[{name:"Kashinath Jha",children:[{name:"Janaklal Jha",children:[{name:"Umakant Jha",children:[{name:"Babusaheb Jha",children:[{name:"Bharat Jha",children:[]},{name:"Shatrughan Jha",children:[]}]},{name:"Pitambar Jha",children:[{name:"Rakesh Jha",children:[]}]}]}]},{name:"Madhushudan Jha",children:[{name:"Bageshwar Jha",children:[{name:"Lalbuchchi Devi",children:[]}]}]}]},{name:"Vishwanath Jha",children:[]},{name:"Sashinath Jha",children:[{name:"Jayanath Jha",children:[]},{name:"Janardhan Jha",children:[{name:"Jayaveesh Jha",children:[]}]}]}]},{name:"Dheernath Jha",children:[{name:"Raghuvar Jha",children:[]},{name:"Gopinath Jha",children:[]},{name:"Nenmani Jha",children:[{name:"Ugramani Jha",children:[]},{name:"Krishnamani Jha",children:[{name:"Suvansh Lal Jha",children:[{name:"Madhukant Jha",children:[{name:"Kulanand Jha",children:[]},{name:"Raghunath Jha",children:[]},{name:"Krityanand Jha",children:[]}]},{name:"Shubhkant Jha",children:[{name:"Ashok Jha",children:[]},{name:"Kishore Jha",children:[]},{name:"Amol Jha",children:[]}]},{name:"Mahakant Jha",children:[{name:"Chandrashekhar Jha",children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Ajeet Jha",children:[]}]}]},{name:"Yaduvansh Jha",children:[{name:"Lakshmikant Jha",children:[{name:"Sadanand Jha",children:[]}]},{name:"Dayakant Jha",children:[{name:"Tulanand Jha",children:[{name:"Chandan Jha",children:[]}]},{name:"Lokanand Jha",children:[]},{name:"Parmanand Jha",children:[]}]}]},{name:"Srivansh Jha",children:[{name:"Jeevach Jha",children:[{name:"Sushil Kumar Jha",children:[]}]},{name:"ShobhaNand Jha",children:[{name:"Sanjeev Jha",children:[]},{name:"Rajeev Jha",children:[]}]}]},{name:"Udayvansh Jha",children:[{name:"Anmeghana Devi",children:[]}]},{name:"Lakshman Jha",children:[{name:"Shyamakant Jha",children:[{name:"Vaidyanath Jha",children:[{name:"Roushan Jha",children:[]}]},{name:"Vishwanath Jha",children:[{name:"Vipin Vatsa",children:[]},{name:"Nitin Vatsa",children:[]}]}]}]}]},{name:"Jayadev Jha",children:[{name:"Mahadev Jha",children:[{name:"Mohan Jha",children:[{name:"Pankaj Jha",children:[]}]},{name:"Lal Jha",children:[]},{name:"Rajendra Jha",children:[]}]}]},{name:"Ramdev Jha",children:[{name:"Dharmeshwar Jha",children:[{name:"Sanjay Kumar Jha",children:[]}]},{name:"Umeshwar Jha",children:[{name:"Vinod Jha",children:[]},{name:"Manoj Jha",children:[{name:"Raja Babu",children:[]},{name:"Child 2",children:[]}]},{name:"Shailendra Jha",children:[]},{name:"Amrendra Jha",children:[]}]},{name:"Dineshwar Jha",children:[]},{name:"Maheshwar Jha",partner:{name:"Ambika Jha"},children:[{name:"Manju Jha",partner:{name:"Hemdhar Jha"},children:[{name:"Ambikesh Jha",partner:{name:"Anu Jha"},children:[{name:"Aayushi Jha",children:[]},{name:"Adya Jha",children:[]}]},{name:"Rajesh Jha",partner:{name:"Nirjala Jha"},children:[{name:"Rajat Jha",children:[]},{name:"Aditya Jha",children:[]}]},{name:"Kamlesh Jha",partner:{name:"Vandana Jha"},children:[{name:"Harshit Jha",children:[]},{name:"Kartik Jha",children:[]}]},{name:"Shailesh Jha",partner:{name:"Aruna Jha"},children:[{name:"Yash",children:[]},{name:"Juhi",children:[]}]}]},{name:"Arvind Jha",partner:{name:"Sabri Devi"},children:[{name:"Jaya Jha",partner:{name:"Awadhesh Jha"},children:[{name:"Aryaman Jha",children:[]}]},{name:"Jyoti Pathak",partner:{name:"Rajesh Pathak"},children:[{name:"Rashi Pathak",children:[]},{name:"Aastha Pathak",children:[]}]},{name:"Prakash Jha",partner:{name:"Rishu Shandilya"},children:[]},{name:"Preeti Jha",partner:{name:"Swapnil Pathade"},children:[]}]},{name:"Sunita Jha",partner:{name:"Bihari Jha"},children:[{name:"Chandan Jha",partner:{name:"Kabita Jha"},children:[{name:"Vinamra Jha",children:[]}]},{name:"Rachna Jha",partner:{name:"Santosh Jha"},children:[{name:"Karnika Jha",children:[]},{name:"Umang Jha",children:[]}]}]},{name:"Birendra Jha",partner:{name:"Renu Jha"},children:[{name:"Vikas Jha",partner:{name:"Niharica Jha"},children:[]},{name:"Subhash Jha",partner:{name:"Renuka Mishra"},children:[]},{name:"Shilpa Bharati",children:[]}]},{name:"Dhirendra Jha",partner:{name:"Usha Jha"},children:[{name:"Neha Jha",children:[]},{name:"Nupur Jha",children:[]}]},{name:"Sujata Jha",partner:{name:"Amar Nath Jha"},children:[{name:"Kadambari Jha",partner:{name:"BK Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Shyam Nath Jha",partner:{name:"Anjana Jha"},children:[{name:"Atharva Jha",children:[]}]},{name:"Priya Jha",children:[{name:"Rishi Jha",children:[]}]},{name:"Aditya Nath Jha",partner:{name:"Priyanka Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]}]},{name:"Ugeshwar Jha",children:[]}]},{name:"Baldev Jha",children:[{name:"Sri Nandan Jha",children:[{name:"Surya Kant Jha",children:[{name:"Santosh Jha",children:[]},{name:"Mantosh Jha",children:[]},{name:"Ranjit Jha",children:[]},{name:"Sunil Jha",children:[]}]}]},{name:"Dev Nandan Jha",children:[{name:"Harikant Jha",children:[{name:"Lalan Jha",children:[{name:"Goopal Jha",children:[]},{name:"Child 2",children:[]},{name:"Child 3",children:[]}]},{name:"Madan Jha",children:[]},{name:"Pawan Jha",children:[]}]},{name:"Gangakant Jha",children:[{name:"Pitamber Jha",children:[]},{name:"Bhavan Jha",children:[]},{name:"Krishnakant Jha",children:[]}]},{name:"Mayakant Jha",children:[{name:"Vishwambhar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Raktambar Jha",children:[{name:"Child 1",children:[]},{name:"Child2",children:[]}]},{name:"Pappu Jha",children:[]}]}]}]}]},{name:"Kulmani Jha",children:[]},{name:"Rudramani Jha",children:[]}]},{name:"Dullah Jha",children:[{name:"Kaladhar Jha",children:[]},{name:"Leeladhar Jha",children:[]}]}]}]}]}]}]}]}]}]}]}]},x=n(47),U=n(93),W=n(193),z=n(58),H=n(192);n(148);p()(window).on("resize",m);var X=function(e){Object(C.a)(n,e);var a=Object(S.a)(n);function n(e){var h;return Object(b.a)(this,n),(h=a.call(this,e)).zoomed=function(){Object(W.a)("g").filter((function(){return!this.classList.contains("node")})).attr("transform",z.c.transform)},h.wheeled=function(){z.c.preventDefault(),Object(W.a)("g").filter((function(){return!this.classList.contains("node")})).each((function(){this.setAttribute("transform",z.c.transform)}))},h.id=0,h.treeContainerRef=r.a.createRef(),h.json=h.addIdToNode(_),h.addParent(h.json),h.addIdToPartner(h.json),h}return Object(g.a)(n,[{key:"addIdToPartner",value:function(e){if(e.partner&&(e.partner.id=(this.id++).toString()),e.children&&e.children.length)for(var a=0;a<e.children.length;a++)this.addIdToPartner(e.children[a])}},{key:"addParent",value:function(e){if(e.children&&e.children.length)for(var a=0;a<e.children.length;a++)e.children[a].parent=e.id,this.addParent(e.children[a])}},{key:"addIdToNode",value:function(e){if(!e)return e;if(e.id=(this.id++).toString(),e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++)this.addIdToNode(e.children[a]);return e}},{key:"componentDidMount",value:function(){Object(H.a)("svg").call(Object(U.a)().on("zoom",this.zoomed)).on("dblclick.zoom",null)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement(N,{filter:this.props.filter}),r.a.createElement(L,{activeNode:this.props.activeNode,data:this.json,filter:this.props.filter,height:this.props.height,width:this.props.width,editMode:this.props.editMode}))}}]),n}(r.a.PureComponent),F=X=Object(x.b)((function(e){return e}))(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=(0,n(17).createBrowserHistory)();t.a.render(r.a.createElement(y.a,{basename:"/tree",history:G},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",exact:!0},r.a.createElement(x.a,{store:v},r.a.createElement(F,{editMode:!1}))),r.a.createElement(k.a,{path:"/edit"},r.a.createElement(x.a,{store:v},r.a.createElement(F,{editMode:!0}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.47ca3db1.chunk.js.map