(this.webpackJsonpcollab3d=this.webpackJsonpcollab3d||[]).push([[0],{33:function(e,t,n){e.exports=n(55)},41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(21),i=n(4),c=n(5),r=n(0),l=n.n(r),u=n(11),m=n.n(u),s=n(1),d=n(25),p=n(10),f=n(26);function b(){var e=Object(p.d)(f.a,"models/gltf/microphone/scene.gltf");return l.a.createElement("primitive",{object:e.scene,position:[0,0,0]})}function O(e){var t=e.cameraPosition,n=e.onUpdate,o=e.setOrbitControls,u=Object(i.a)(e,["cameraPosition","onUpdate","setOrbitControls"]),m=Object(r.useState)(!0),s=Object(a.a)(m,2),d=s[0],f=s[1],b=Object(p.e)(),O=b.camera,h=b.gl.domElement,j=Object(r.useRef)();return Object(p.c)((function(e){var a,i,r=e.camera;(d&&(o(j.current),f(!1)),t)&&((a=r.position).set.apply(a,Object(c.a)(t.position)),r.lookAt(0,0,0),(i=j.current.target).set.apply(i,Object(c.a)(t.focus)),j.current.update(),n())})),l.a.createElement("orbitControls",Object.assign({ref:j,args:[O,h]},u))}function h(e){var t=e.cameraPosition,n=e.onUpdate,a=e.setCamera,o=e.setOrbitControls,c=Object(i.a)(e,["cameraPosition","onUpdate","setCamera","setOrbitControls"]);return l.a.createElement(p.a,Object.assign({camera:{fov:60,near:1,position:[-2,0,-3]},gl:{outputEncoding:s.sRGBEncoding},onCreated:function(e){var t=e.gl,n=e.scene,o=e.camera;t.outputEncoding=s.sRGBEncoding,n.background=new s.Color(16448250),o.lookAt(0,0,0),a(o)}},c),l.a.createElement(O,{cameraPosition:t,onUpdate:n,setOrbitControls:o,minDistance:1,maxDistance:50}),l.a.createElement("pointLight",{position:[10,10,10]}),l.a.createElement("pointLight",{position:[-10,-10,-10]}),l.a.createElement(r.Suspense,{fallback:null},l.a.createElement(b,null)))}Object(p.b)({OrbitControls:d.a});n(40),n(41);var j=n(7),v=n(31),E=n(14),g=n(12),C=n(13),y=(n(42),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"I am a top bar. please fix me")}}]),t}(l.a.Component)),S=n(57),N=n(20),k=n.n(N);n(50);function R(e){var t=e.selected,n=e.white,a=e.author,o=e.comment,c=e.profileColor,r=e.thread,u=e.onDelete,m=e.onReply,s=e.showReply,d=void 0===s||s,p=Object(i.a)(e,["selected","white","author","comment","profileColor","thread","onDelete","onReply","showReply"]);return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:t?"selected-bar":""}),l.a.createElement("div",Object.assign({className:"note"+(n?" white":"")},p),l.a.createElement("div",{className:"content-row"},l.a.createElement("div",{className:"profile-image",style:{backgroundColor:c}}),l.a.createElement("div",{className:"content-column"},l.a.createElement("div",{className:"author-row"},l.a.createElement("div",{className:"author-name"},a),l.a.createElement("i",{className:"close-button material-icons",onClick:function(e){e.stopPropagation(),u()}},"close")),l.a.createElement("div",{className:"comment"},o),p.children,d?l.a.createElement("div",{className:"reply"},l.a.createElement("span",{className:"reply-button",onClick:function(e){e.stopPropagation(),m()}},function(e){return e&&e.length>0?e.length>1?"".concat(e.length," Replies"):"1 Reply":"Reply"}(r))):null))))}n(51);function w(e){var t=e.isModalOpen,n=e.onCancel,a=e.onDelete,o=Object(i.a)(e,["isModalOpen","onCancel","onDelete"]);return l.a.createElement("div",{id:"modal",className:t?"":"hide",onClick:n},l.a.createElement("div",Object.assign({id:"modal-dialog",onClick:function(e){return e.stopPropagation()}},o),l.a.createElement("span",{id:"modal-warning"},"Are you sure you want to delete?"),l.a.createElement("div",{id:"modal-actions"},l.a.createElement("span",{id:"modal-cancel",onClick:function(e){e.stopPropagation(),n()}},"Cancel"),l.a.createElement("span",{id:"modal-delete",onClick:function(e){e.stopPropagation(),a()}},"Delete"))))}n(52);function q(e){var t=e.notes,n=e.onSubmitComment,o=e.onSelect,c=e.onDeleteNote,u=e.onReplyNote,m=Object(i.a)(e,["notes","onSubmitComment","onSelect","onDeleteNote","onReplyNote"]),s=Object(r.useState)(null),d=Object(a.a)(s,2),p=d[0],f=d[1],b=Object(r.useState)(null),O=Object(a.a)(b,2),h=O[0],j=O[1],v=Object(r.useState)(void 0),E=Object(a.a)(v,2),g=E[0],C=E[1];return l.a.createElement("div",Object.assign({id:"notes-column"},m),l.a.createElement("div",{id:"input-column"},l.a.createElement("span",{id:"input-label"},"Comments"),l.a.createElement(k.a,{id:"input-comment",placeholder:"Add a comment",value:g,onChange:function(e){return C(e.target.value)}}),l.a.createElement("div",{id:"input-actions"},l.a.createElement("span",{id:"input-cancel",onClick:function(){return C("")}},"Cancel"),l.a.createElement("span",{id:"input-submit",onClick:function(){n(g),C("")}},"Submit"))),t.map((function(e,t){var n=e.id,a=e.camera,c=Object(i.a)(e,["id","camera"]);return l.a.createElement(R,Object.assign({key:n,selected:n===p,white:t%2===1,onClick:function(){p===n?f(null):(o(a),f(n))},onDelete:function(){return j(n)},onReply:function(e){return u(n,e)}},c))})),l.a.createElement(w,{isModalOpen:h,onCancel:function(){return j(null)},onDelete:function(){c(h),j(null)}}))}n(53),n(54);function D(e){var t=e.note,n=e.onReturn,o=e.onSubmitReply,c=e.onDeleteNote,u=Object(i.a)(e,["note","onReturn","onSubmitReply","onDeleteNote"]),m=Object(r.useState)(void 0),s=Object(a.a)(m,2),d=s[0],p=s[1],f=Object(r.useState)(null),b=Object(a.a)(f,2),O=b[0],h=b[1];return l.a.createElement("div",Object.assign({id:"thread-column"},u),l.a.createElement("div",{id:"back-to-comments-row",onClick:n},l.a.createElement("i",{className:"material-icons"},"chevron_left"),l.a.createElement("span",{id:"back-to-comments"},"Back to comments")),l.a.createElement(R,Object.assign({selected:!0,onDelete:function(){return h(t.id)},showReply:!1},t),l.a.createElement(k.a,{id:"reply-comment",placeholder:"Add a reply",value:d,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),o(t.id,d),p(""))}})),t&&t.thread.map((function(e){return l.a.createElement(R,Object.assign({key:e.id,white:!0,onDelete:function(){return h(e.id)},showReply:!1},e))})),l.a.createElement(w,{isModalOpen:O,onCancel:function(){return h(null)},onDelete:function(){c(O),h(null)}}))}function P(e){var t=e.notes,n=e.onSelect,o=e.onSubmitComment,c=e.onSubmitReply,u=Object(i.a)(e,["notes","onSelect","onSubmitComment","onSubmitReply"]),m=Object(r.useState)(null),s=Object(a.a)(m,2),d=s[0],p=s[1],f=Object(r.useState)(null),b=Object(a.a)(f,2),O=b[0],h=b[1];return l.a.createElement("div",{id:"notes-row"},l.a.createElement(q,Object.assign({className:"main-thread"+(d?" main-thread-inactive":""),notes:t,onSelect:n,onSubmitComment:o,onReplyNote:function(e){n(t.find((function(t){return t.id===e})).camera),p(e),h(e)}},u)),l.a.createElement(D,Object.assign({className:"active-thread"+(d?"":" active-thread-inactive"),note:t.find((function(e){return e.id===O})),onReturn:function(){return p(null)},onSubmitReply:c},u)))}var U=[{id:1,camera:{position:[.5,2,3],focus:[0,0,0]},profileColor:"#c4c4c4",author:"Name of person #1",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",thread:[{id:5,profileColor:"#c4c4c4",author:"Name of person #2",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."},{id:6,profileColor:"#c4c4c4",author:"Name of person #2",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}]},{id:2,camera:{position:[2,3,.5],focus:[0,0,0]},profileColor:"#c4c4c4",author:"Name of person #2",comment:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",thread:[]},{id:3,camera:{position:[3,.5,2],focus:[0,0,0]},profileColor:"#c4c4c4",author:"Name of person #3",comment:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",thread:[]},{id:4,camera:{position:[-2,0,-3],focus:[0,0,0]},profileColor:"#c4c4c4",author:"Name of person #4",comment:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",thread:[]}],x=["#c4c4c4","#ff7a7a","#ffe279","#ffc37c"];m.a.render(l.a.createElement((function(){var e=Object(r.useState)({position:[-2,0,-3],focus:[0,0,0]}),t=Object(a.a)(e,2),n=t[0],u=t[1],m=Object(r.useState)(void 0),s=Object(a.a)(m,2),d=s[0],p=s[1],f=Object(r.useState)(void 0),b=Object(a.a)(f,2),O=b[0],j=b[1],v=Object(r.useState)(U),E=Object(a.a)(v,2),g=E[0],C=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("div",{id:"main-area"},l.a.createElement("div",{id:"variations-column"},l.a.createElement(S.a,{onClick:function(){return u({position:[.8876483038068422,0,.46052197423015095,0,.143698258438904,.9500711177409453,-.27697595880526665,0,-.4375286268011064,.3120334456984873,.8433290161586208,0,-1.5926282414090294,1.135818886907916,3.0697639552267915,1],focus:[0,0,0]})}},"Position 1"),l.a.createElement(S.a,{onClick:function(){return u({position:[-.9990864021979794,0,.04273594439224533,0,.026569622732542743,.7832427130760378,.6211480560712863,0,-.033472617031648916,.6217160544921511,-.782527144254923,0,-.1218421651361034,2.2630805983163875,-2.848441800760354,1],focus:[0,0,0]})}},"Position 2"),l.a.createElement(S.a,{onClick:function(){return u({position:[-.992904594169215,0,-.11891369508036442,0,.11228505451656628,.32921006243195794,-.9375568256515217,0,.03914758498142157,-.944256710218967,-.32687418343542496,0,.14114862496109934,-3.404565985895425,-1.178561629001846,1],focus:[0,0,0]})}},"Position 3")),l.a.createElement(h,{id:"three-renderer",cameraPosition:n,onUpdate:function(){return u(null)},setCamera:function(e){return p(e)},setOrbitControls:function(e){return j(e)}}),l.a.createElement(P,{notes:g,onSubmitComment:function(e){return C(function(e,t,n,a){return[{id:1+Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id})))),camera:{position:t.position.toArray(),focus:n.target.toArray()},profileColor:x[Math.floor(Math.random()*x.length)],author:"Greg Gottesman",comment:a,thread:[]}].concat(Object(c.a)(e))}(g,d,O,e))},onSubmitReply:function(e,t){return C(function(e,t,n){return e.map((function(e){var a=e.thread,r=Object(i.a)(e,["thread"]);return r.id===t?Object(o.a)({},r,{thread:[].concat(Object(c.a)(a),[{id:1+Math.max.apply(Math,[t].concat(Object(c.a)(a.map((function(e){return e.id}))))),profileColor:r.profileColor,author:"Greg Gottesman",comment:n}])}):Object(o.a)({thread:a},r)}))}(g,e,t))},onSelect:function(e){return u(e)},onDeleteNote:function(e){return C(function(e,t){return t.filter((function(t){return t.id!==e})).map((function(t){var n=t.thread,a=Object(i.a)(t,["thread"]);return Object(o.a)({thread:n.filter((function(t){return t.id!==e}))},a)}))}(e,g))}})))}),null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1a56795e.chunk.js.map