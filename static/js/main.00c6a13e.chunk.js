(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{38:function(e,n,a){e.exports=a(82)},44:function(e,n,a){},80:function(e,n,a){},82:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(35),h=a.n(i),o="RESIZE",d="SET_ACTIVE_NODE",c="SET_FILTER",l="ZOOM",s="PAN",u="RESET_VIEW";function p(){k.dispatch({type:o})}function m(e,n,a){k.dispatch({type:l,zoomX:e,zoomY:n,scale:a})}function f(e){k.dispatch({type:d,node:e})}function w(e){k.dispatch({type:c,filter:e})}function v(){k.dispatch({type:u})}var y=a(1),J=a.n(y),g=a(10),k=Object(g.c)(Object(g.b)({activeNode:function(e,n){if("undefined"===typeof e)return null;switch(n.type){case d:return n.node}return e},filter:function(e,n){if("undefined"===typeof e)return"";switch(n.type){case c:return n.filter}return e},height:function(e,n){if("undefined"===typeof e)return J()(window).height()-25;switch(n.type){case o:return J()(window).height()-J()("#header").height();case l:return(J()(window).height()-J()("#header").height())*n.scale;case u:return J()(window).height()-25}return e},width:function(e,n){if("undefined"===typeof e)return J()(window).width();switch(n.type){case o:return J()(window).width();case l:return J()(window).width()*n.scale;case u:return J()(window).width()}return e},panX:function(e,n){if("undefined"===typeof e)return 0;switch(n.type){case s:return n.panX;case u:return 0}return e},panY:function(e,n){if("undefined"===typeof e)return 0;switch(n.type){case s:return n.panY;case u:return 0}return e},zoomX:function(e,n){if("undefined"===typeof e)return J()(window).width();switch(n.type){case l:return n.zoomX;case u:return J()(window).width()}return e},zoomY:function(e,n){if("undefined"===typeof e)return J()(window).height()-25;switch(n.type){case l:return n.zoomY;case u:return J()(window).height()-25}return e}}),void 0,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=(a(44),a(2)),C=a(3),E=a(5),j=a(4),O=function(e){Object(E.a)(a,e);var n=Object(j.a)(a);function a(){return Object(b.a)(this,a),n.apply(this,arguments)}return Object(C.a)(a,[{key:"handleChange",value:function(e){w(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{id:"search",type:"text",placeholder:"Find Name ...",value:this.props.filter,onChange:this.handleChange})}}]),a}(r.a.PureComponent),N=function(e){Object(E.a)(a,e);var n=Object(j.a)(a);function a(){return Object(b.a)(this,a),n.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){p()}},{key:"handleClick",value:function(){f(null),w(""),v(),window.resetGlobal()}},{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement(O,{filter:this.props.filter}),r.a.createElement("button",{onClick:this.handleClick},"Reset"),!1)}}]),a}(r.a.PureComponent),P=a(19),S=a.n(P),R=a(37),T=a.n(R),X=function(e){Object(E.a)(a,e);var n=Object(j.a)(a);function a(e){var t;return Object(b.a)(this,a),(t=n.call(this,e)).pathCB=function(e,n,a){console.log(e),console.log(n),console.log(a)},t.data=e.data,t}return Object(C.a)(a,[{key:"handleClick",value:function(e,n){f(n),v(),window.resetGlobal()}},{key:"getRoot",value:function(e,n){if(e.id===n)return e;for(var a=0;a<e.children.length;a++){var t=this.getRoot(e.children[a],n);if(t)return t}return!1}},{key:"setActiveStyle",value:function(e){}},{key:"getParent",value:function(e){return e.parent?this.getRoot(this.data,e.parent):e}},{key:"buildSubTree",value:function(e){for(var n=[],a=0;a<e.children.length;a++){var t=this.buildSubTree(e.children[a]);t&&n.push(t)}return n.length>0&&(e.children=n),n.length>0||-1!==e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())?e:null}},{key:"setClassName",value:function(e){e.children.forEach(this.setClassName,this),this.props.filter&&(e.className=-1===e.name.toLowerCase().indexOf(this.props.filter)?"node searchExcluded":"node searchIncluded")}},{key:"computePath",value:function(){return"M"}},{key:"parsePartner",value:function(e){if(e.partner&&(e.name+="\n "+e.partner.name),e.children&&e.children.length)for(var n=0;n<e.children.length;n++)this.parsePartner(e.children[n])}},{key:"render",value:function(){var e=this.props.activeNode?this.getRoot(this.data,this.props.activeNode):this.data;return e=this.getParent(e),e=S()(e),this.props.filter&&(e=this.buildSubTree(e)||e),this.setClassName(e),r.a.createElement(T.a,{animated:!0,data:e,width:this.props.width,height:this.props.height,keyProp:"id",gProps:{className:"node",onClick:this.handleClick},svgProps:{transform:"scale(1)",viewBox:this.props.panX+" "+this.props.panY+" "+this.props.zoomX+" "+this.props.zoomY},steps:30})}}]),a}(r.a.PureComponent),A={timestamp:"11/02/2019 22:00",name:"Maheshwar Jha",partner:{name:"Ambika Jha"},children:[{name:"Manju Jha",partner:{name:"Hemdhar Jha"},children:[{name:"Ambikesh Jha",partner:{name:"Anu Jha"},children:[{name:"Aayushi Jha",children:[]},{name:"Adya Jha",children:[]}]},{name:"Rajesh Jha",partner:{name:"Nirjala Jha"},children:[{name:"Rajat Jha",children:[]},{name:"Child 2",children:[]}]},{name:"Kamlesh Jha",partner:{name:"Vandana Jha"},children:[{name:"Harshit Jha",children:[]},{name:"Child 2",children:[]}]},{name:"Shailesh Jha",partner:{name:"Dolly Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]},{name:"Arvind Jha",partner:{name:"Sabri Devi"},children:[{name:"Jaya Jha",partner:{name:"Awadhesh Jha"},children:[{name:"Aryaman Jha",children:[]}]},{name:"Jyoti Pathak",partner:{name:"Rajesh Pathak"},children:[{name:"Arya Jha10",children:[]},{name:"Aastha Jha",children:[]}]},{name:"Prakash Jha",partner:{name:"Rishu Shandilya"},children:[]},{name:"Preeti Jha",partner:{name:"Swapnil Pathade"},children:[]}]},{name:"Sunita Jha",partner:{name:"Bihari Jha"},children:[{name:"Chandan Jha",partner:{name:"Kabita Jha"},children:[{name:"Vinamra Jha",children:[]}]},{name:"Rachna Jha",partner:{name:"Santosh Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]},{name:"Birendra Jha",partner:{name:"Renu Jha"},children:[{name:"Vikas Jha",partner:{name:"Niharica Jha"},children:[]},{name:"Subhash Jha",partner:{name:"Renuka Mishra"},children:[]},{name:"Shilpa Bharati",children:[]}]},{name:"Dhirendra Jha",partner:{name:"Usha Jha"},children:[{name:"Neha Jha",children:[]},{name:"Nupur Jha",children:[]}]},{name:"Sujata Jha",partner:{name:"Amar Nath Jha"},children:[{name:"Kadambari Jha",partner:{name:"BK Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]},{name:"Shyam Nath Jha",partner:{name:"Anjana Jha"},children:[{name:"Atharva Jha",children:[]}]},{name:"Priya Jha",children:[{name:"Child 1",children:[]}]},{name:"Aditya Nath Jha",partner:{name:"Priyanka Jha"},children:[{name:"Child 1",children:[]},{name:"Child 2",children:[]}]}]}]},_=a(13);a(80);J()(window).on("resize",p);var Y=1,I=0,z=0;window.resetGlobal=function(){Y=1,I=0,z=0};var D=function(e){Object(E.a)(a,e);var n=Object(j.a)(a);function a(e){var t;return Object(b.a)(this,a),(t=n.call(this,e)).handleWheel=function(e){var n,a;e.preventDefault(),console.log("mosue wheel"),e.ctrlKey?(Y+=-.01*e.deltaY,Y=Math.min(Math.max(.125,Y),4),m(t.props.width/Y,t.props.height/Y,Y)):(console.log(e.deltaX+" "+e.deltaY),I+=e.deltaX,z+=e.deltaY,n=I,a=z,k.dispatch({type:s,panX:n,panY:a}))},t.id=0,t.treeContainerRef=r.a.createRef(),t.json=t.addIdToNode(A),t.addParent(t.json),t.addIdToPartner(t.json),t}return Object(C.a)(a,[{key:"addIdToPartner",value:function(e){if(e.partner&&(e.partner.id=(this.id++).toString()),e.children&&e.children.length)for(var n=0;n<e.children.length;n++)this.addIdToPartner(e.children[n])}},{key:"addParent",value:function(e){if(e.children&&e.children.length)for(var n=0;n<e.children.length;n++)e.children[n].parent=e.id,this.addParent(e.children[n])}},{key:"addIdToNode",value:function(e){if(!e)return e;if(e.id=(this.id++).toString(),e.children&&e.children.length>0)for(var n=0;n<e.children.length;n++)this.addIdToNode(e.children[n]);return e}},{key:"componentDidMount",value:function(){window.addEventListener("wheel",this.handleWheel,{passive:!1})}},{key:"componentWillUnmount",value:function(){window.addEventListener("wheel",this.handleWheel,{passive:!1})}},{key:"componentWillReceiveProps",value:function(e){this.props.height!==e.height||(this.props.width,e.width),m(this.props.width/Y,this.props.height/Y,Y)}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement(N,{filter:this.props.filter,timestamp:A.timestamp}),r.a.createElement(X,{activeNode:this.props.activeNode,data:this.json,filter:this.props.filter,height:this.props.height,width:this.props.width,panX:this.props.panX,panY:this.props.panY,zoomX:this.props.zoomX,zoomY:this.props.zoomY}))}}]),a}(r.a.PureComponent),M=D=Object(_.b)((function(e){return e}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(r.a.createElement(_.a,{store:k},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.00c6a13e.chunk.js.map