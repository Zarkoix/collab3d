(this.webpackJsonpcollab3d=this.webpackJsonpcollab3d||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(13),o=a(8),i=a(6),c=a(7),l=a(1),s=a.n(l),m=a(11),u=a.n(m),d=a(4),h=a(10),f=a(0),p=a(21),b=a(12),v=a(22);function E(){var e=Object(b.c)(v.a,"models/gltf/microphone/scene.gltf");return s.a.createElement("primitive",{object:e.scene,position:[0,0,0]})}function g(e){var t=Object(b.d)(),a=t.camera,n=t.gl.domElement;return s.a.createElement("orbitControls",Object.assign({args:[a,n]},e))}function j(e){var t=e.setCameraPosition,a=Object(h.a)(e,["setCameraPosition"]);return s.a.createElement(b.a,Object.assign({camera:{fov:60,near:1,position:[-2,0,-3]},gl:{outputEncoding:f.sRGBEncoding},onCreated:function(e){var a=e.gl,n=e.scene,r=e.camera;a.outputEncoding=f.sRGBEncoding,n.background=new f.Color(16448250),r.lookAt(0,0,0),t((function(e){var t;(t=r.position).set.apply(t,Object(d.a)(e)),r.lookAt(0,0,0)}))}},a),s.a.createElement(g,{minDistance:1,maxDistance:500}),s.a.createElement("pointLight",{position:[10,10,10]}),s.a.createElement("pointLight",{position:[-10,-10,-10]}),s.a.createElement(l.Suspense,{fallback:null},s.a.createElement(E,null)))}Object(b.b)({OrbitControls:p.a});a(34),a(35),a(36);var O=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"I am a top bar. please fix me")}}]),t}(s.a.Component),w=a(3);a(37),a(38);function C(e){var t=e.selected,a=e.white,n=e.title,r=e.author,o=e.comment,i=e.profileColor,c=e.onDelete,l=Object(h.a)(e,["selected","white","title","author","comment","profileColor","onDelete"]);return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:t?"selected-bar":""}),s.a.createElement("div",Object.assign({className:"note"+(a?" white":"")},l),s.a.createElement("div",{className:"title-row"},s.a.createElement("span",{className:"title"},n),s.a.createElement("i",{className:"close-button material-icons",onClick:function(e){e.stopPropagation(),c()}},"close")),s.a.createElement("div",{className:"content-row"},s.a.createElement("div",{className:"profile-image",style:{backgroundColor:i}}),s.a.createElement("div",{className:"content-column"},s.a.createElement("div",{className:"author-name"},r),s.a.createElement("div",{className:"comment"},o),s.a.createElement("div",{className:"reply"},s.a.createElement("span",{className:"reply-button"},"Reply"))))))}var k=[{id:1,camera:[.5,2,3],title:"Great idea!",profileColor:"#ff7a7a",author:"Greg Gottesman",comment:"This is great feature to add. But have we thought about how it will work with the new intiative rolling out?"},{id:2,camera:[2,3,.5],title:"Weather material",profileColor:"#ffe279",author:"Ed Lazowska",comment:"I disagree with the design choice here. I believe that weather resistant material would be better used here."},{id:3,camera:[3,.5,2],title:"Production costs",profileColor:"#ffc37c",author:'Dawy "The Boulder" Johnson',comment:"Have we thought about the cool factor associated with adding a flap here?  I\u2019ve seeing market research that it is popular with our target demo."}];function y(e){var t=e.setCameraPosition,a=Object(l.useState)(k),n=Object(w.a)(a,2),r=n[0],o=n[1],i=Object(l.useState)(null),c=Object(w.a)(i,2),m=c[0],u=c[1];return s.a.createElement("div",{id:"notes-column"},r.map((function(e,a){var n=e.id,i=e.camera,c=Object(h.a)(e,["id","camera"]);return s.a.createElement(C,Object.assign({key:n,selected:n===m,white:a%2===1,onClick:function(){t(i),u(m!==n?n:null)},onDelete:function(){return o(r.filter((function(e){return e.id!==n})))}},c))})))}var N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(O,null),s.a.createElement("div",{id:"main-area"},s.a.createElement("div",{id:"variations-column"}),s.a.createElement(j,{id:"three-renderer",setCameraPosition:function(t){return e.setState({setCameraPosition:t})}}),s.a.createElement(y,{setCameraPosition:this.state.setCameraPosition})))}}]),t}(s.a.Component);u.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1c41b995.chunk.js.map