(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(76),n(7)),l=n(12),s=n(25),u=n(24),d=n(26),m=n(211),h=n(210),p=n(69),b=(n(78),n(14)),f=n.n(b),v=n(70),g=n(1),E=n(64),y=n.n(E),w=n(65),O=n.n(w),j=n(66),x=n.n(j),C=function(){function e(){Object(c.a)(this,e),this.boo="yoohoo",this.advice="",this.init=Object(g.flow)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,this.advice=a.slip.advice,this.boo=t,e.abrupt("return",this);case 9:case"end":return e.stop()}},e,this)}))}return Object(l.a)(e,[{key:"mainFilter",get:function(){return S.filter+"!"}}]),e}();Object(g.decorate)(C,{boo:g.observable,advice:g.observable,mainFilter:g.computed});var k=(new C).init("hoho"),N=function(){function e(){var t=this;Object(c.a)(this,e),this.loading=!0,this.people=[],this.viewing=30,this.orderBy="id",this.orderDirection="asc",this.filter="",this.todo={id:1,object:{},error:!1,loading:!1},this.init=function(){return t.fetchTodo(),t.fetchPeople(),t},this.fetchPeople=Object(g.flow)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,fetch("http://uinames.com/api/?region=bosnia%20and%20herzegovina&amount=150&ext");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.people.replace(n.map(function(e){return Object(v.a)({},e,{id:x()()})})),this.loading=!1;case 9:case"end":return e.stop()}},e,this)})),this.fetchTodo=Object(g.flow)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.todo.loading=!0,e.next=4,fetch("https://jsonplaceholder.typicode.com/todos/".concat(this.todo.id));case 4:if(200===(t=e.sent).status){e.next=7;break}throw t;case 7:return e.next=9,t.json();case 9:this.todo.object=e.sent,this.todo.error=!1,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.todo.error=!0;case 16:return e.prev=16,this.todo.loading=!1,e.finish(16);case 19:case"end":return e.stop()}},e,this,[[0,13,16,19]])})),this.fetchTodoDebounced=y()(this.fetchTodo,1e3),this.setViewing=function(e){t.viewing=e},this.setFilter=function(e){t.filter=e},this.setTodoId=function(e){t.todo.id=e},this.setOrderBy=function(e){t.orderBy=e},this.toggleDirection=function(){t.orderDirection="asc"===t.orderDirection?"desc":"asc"},this.r=Object(g.reaction)(function(){return t.todo.id},function(e){return t.fetchTodoDebounced()},{name:"fetch todo reaction"})}return Object(l.a)(e,[{key:"filtered",get:function(){var e=this;return this.people.filter(function(t){var n=t.name,a=t.surname;return"".concat(n," ").concat(a).toLowerCase().includes(e.filter.toLowerCase())})}},{key:"ordered",get:function(){return O()(this.filtered,[this.orderBy],[this.orderDirection])}},{key:"sliced",get:function(){return this.ordered.slice(0,this.viewing)}},{key:"advice",get:function(){return k.advice}}]),e}();Object(g.decorate)(N,{loading:g.observable,people:g.observable.shallow,viewing:g.observable,filter:g.observable,todo:g.observable,orderBy:g.observable,orderDirection:g.observable,setViewing:g.action,setFilter:g.action,init:g.action,fetchPeople:g.action.bound,fetchTodo:g.action.bound,setTodoId:g.action,setOrderBy:g.action,toggleDirection:g.action,advice:g.computed,ordered:g.computed,filtered:g.computed,sliced:g.computed});var S=(new N).init(),_=function e(){var t=this;Object(c.a)(this,e),this.location={},this.match={},this.history={},this.setRoute=function(e,n,a){t.location=e,t.match=n,t.history=a}};Object(g.decorate)(_,{location:g.observable,match:g.observable,history:g.observable,setRoute:g.action});var D=new _,F=n(9);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var M=r.a.createElement("rect",{y:10,width:15,height:120,rx:6},r.a.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),T=r.a.createElement("rect",{x:30,y:10,width:15,height:120,rx:6},r.a.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),I=r.a.createElement("rect",{x:60,width:15,height:140,rx:6},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),P=r.a.createElement("rect",{x:90,y:10,width:15,height:120,rx:6},r.a.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),L=r.a.createElement("rect",{x:120,y:10,width:15,height:120,rx:6},r.a.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),V=function(e){return r.a.createElement("svg",B({width:135,height:140,viewBox:"0 0 135 140",fill:"#fff"},e),M,T,I,P,L)},W=(n.p,n(33)),z=n.n(W),R=n(3),A=n.n(R),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:A()(z.a.container,this.props.className)},r.a.createElement(V,{className:A()(z.a.icon,z.a[this.props.size])}))}}]),t}(r.a.PureComponent);J.defaultProps={size:"medium"};var q=n(67),H=n.n(q),Z=n(17),$=Object(F.observer)(function(e){var t=e.name,n=e.surname,a=e.photo;return r.a.createElement("div",{className:"person"},r.a.createElement("img",{src:a,alt:"person"}),r.a.createElement("div",null,t," ",n))}),G=Z.b.div({enter:{scale:1,opacity:1},exit:{scale:0,opacity:0}}),K=Object(F.observer)(function(e){var t=e.people;return r.a.createElement("div",{className:"personList"},r.a.createElement(Z.a,null,t.length>0?t.map(function(e){return r.a.createElement(G,{key:e.id},r.a.createElement($,e))}):r.a.createElement(G,{key:"nope"},"No people matching criteria")))}),Q=n(34),U=n.n(Q),X=n(6),Y=n(41),ee=n.n(Y);n(203);Object(g.configure)({enforceActions:"observed"});var te=Z.b.div({enter:{scale:1,opacity:1},exit:{scale:0,opacity:0}}),ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setViewing=function(e){var t=e.target;return n.props.mainStore.setViewing(t.value)},n.setFilter=function(e){var t=e.target;n.props.mainStore.setFilter(t.value)},n.setTodoId=function(e){var t=e.target;return n.props.mainStore.setTodoId(t.value)},n.setOrderBy=function(e){var t=e.target;n.props.mainStore.setOrderBy(t.value)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.mainStore,n=e.otherStore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{multiline:!1,className:"mainWrapper is-marginless"},r.a.createElement(U.a.Column,{className:"is-one-quarter is-paddingless"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(X.Field,null,r.a.createElement(X.Label,null,"Filter"),r.a.createElement(X.Control,null,r.a.createElement(X.Input,{type:"text",value:t.filter,onChange:this.setFilter}))),r.a.createElement(X.Label,null,"Order by"),r.a.createElement(X.Field,{className:"is-grouped"},r.a.createElement(X.Control,{className:"is-expanded"},r.a.createElement(X.Select,{value:t.orderBy,onChange:this.setOrderBy,className:"is-fullwidth"},r.a.createElement("option",{value:"id"},"ID"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"surname"},"Surname"))),r.a.createElement(X.Control,null,r.a.createElement(ee.a,{onClick:t.toggleDirection},"asc"===t.orderDirection?"\ud83d\udc46":"\ud83d\udc47"))),r.a.createElement(X.Field,null,r.a.createElement(X.Label,null,"Length"),r.a.createElement(X.Control,null,r.a.createElement(X.Input,{type:"number",value:t.viewing.toString(),min:0,onChange:this.setViewing}))))),r.a.createElement(U.a.Column,{className:"main"},r.a.createElement(Z.a,{animateOnMount:!0},t.loading?r.a.createElement(te,{key:"loading"},r.a.createElement(J,{size:"large"})):r.a.createElement(te,{key:"aha"},r.a.createElement(K,{people:t.sliced}),r.a.createElement(ee.a,{color:"primary",onClick:t.fetchPeople},"Fetch new"),r.a.createElement("div",null,n.advice),r.a.createElement("div",null," ","enter todo id to fetch:",r.a.createElement("input",{type:"number",value:t.todo.id,min:0,onChange:this.setTodoId})),r.a.createElement("div",null,t.todo.error?"error":r.a.createElement(Z.a,null,t.todo.loading?r.a.createElement(te,{key:"l"},r.a.createElement(J,null)):r.a.createElement(te,{key:"m"},t.todo.object.title))))))),r.a.createElement(H.a,null))}}]),t}(a.Component),ae=Object(F.inject)("mainStore","otherStore","routerStore")(Object(F.observer)(ne)),re=Object(p.a)(),ie=function(e){return function(t){return function(n){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,n),Object(l.a)(a,[{key:"componentWillMount",value:function(){e.setRoute(this.props.location,this.props.match,this.props.history)}},{key:"render",value:function(){return r.a.createElement(t,this.props)}}]),a}(r.a.Component)}},oe=Object(F.observer)(function(){return r.a.createElement(F.Provider,{mainStore:S,otherStore:k,routerStore:D},r.a.createElement(m.a,{history:re},r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",component:ie(D)(ae)}),r.a.createElement(h.a,{exact:!0,path:"/:id",component:ie(D)(ae)}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,n){e.exports={container:"style_container__ZtD7H",icon:"style_icon__3DITl",small:"style_small__3O7Wo",medium:"style_medium__1edst",large:"style_large__30ddS"}},71:function(e,t,n){e.exports=n(208)},76:function(e,t,n){},78:function(e,t,n){}},[[71,2,1]]]);
//# sourceMappingURL=main.ae5f5371.chunk.js.map