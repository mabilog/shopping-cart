(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{42:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a,s,d,l,h,j,b,p,u,x,m,f,g,O,y,k,w,v,C,z,q,I,B,D,M,S,A=t(1),H=t.n(A),Q=t(25),G=t.n(Q),F=t(3),J=t(23),Y=t(30),E=t(16),V=t(4),W=t(5),T=t(7),U=t(2),$=V.a.div(c||(c=Object(F.a)(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  background-image: url('https://images.unsplash.com/photo-1564403333028-d2898fae2b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]))),_=Object(V.a)(T.b)(i||(i=Object(F.a)(["\n  position: absolute;\n  top: 60%;\n  left: 55%;\n  padding: 0.3em 2em;\n  font-size: 1.1rem;\n  font-weight: bold;\n  font-family: inherit;\n  cursor: pointer;\n  color: black;\n  background-color: white;\n  text-transform: uppercase;\n  border: 1px solid black;\n  &:hover{\n    background-color: #eee;\n  }\n"]))),K=function(){return Object(U.jsx)($,{children:Object(U.jsx)(_,{to:"/shopping-cart/shop",children:"Catalogue"})})},L=t(29),N=V.a.nav(r||(r=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-transform: uppercase;\n  height: 6rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 1.3rem;\n  background-color: #eee;\n  transition: background-color 0.5s ease-in;\n  color: black;\n"]))),P=Object(V.a)(T.b)(o||(o=Object(F.a)(["\n  text-decoration: none;\n  color: inherit;\n\n"]))),R=Object(V.a)(T.b)(a||(a=Object(F.a)(["\n  text-decoration: none;\n  color: inherit;\n\n\n"]))),X=Object(V.a)(T.b)(s||(s=Object(F.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  font-size: 2rem;\n"]))),Z=function(n){var e=n.cartItemsQty;return Object(U.jsxs)(N,{children:[Object(U.jsx)(P,{to:"/shopping-cart/",children:"Shopping Co"}),Object(U.jsx)(R,{to:"/shopping-cart/shop",children:"Shop"}),Object(U.jsxs)(X,{to:"/shopping-cart/cart",children:[Object(U.jsx)(L.a,{}),Object(U.jsx)("span",{children:e})]})]})},nn=V.a.div(d||(d=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n"]))),en=Object(V.a)(T.b)(l||(l=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),tn=V.a.div(h||(h=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 2rem;\n  width: auto;\n"]))),cn=V.a.img(j||(j=Object(F.a)(["\n  height: 300px;\n  max-width: 300px;\n"]))),rn=function(n){var e=n.food;return Object(U.jsx)(nn,{children:Object(U.jsxs)(en,{to:"/shopping-cart/shop/".concat(e.id),children:[Object(U.jsx)(cn,{src:"https://source.unsplash.com/".concat(e.img,"/640x640"),alt:e.id}),Object(U.jsxs)(tn,{children:[e.name,Object(U.jsxs)("p",{children:["$",e.price," CAD"]})]})]})})},on=V.a.div(b||(b=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: auto;\n  justify-items: center;\n  align-content: center;\n  /* min-height: calc(100vh - 6rem); */\n  height: 100%;\n  margin-top: 6rem;\n  padding: 2rem 0;\n  height: 100vh;\n  background: linear-gradient(rgba(0,0,0,0.25), rgba(0, 0, 0, 0.25)), url('https://images.unsplash.com/photo-1564403333028-d2898fae2b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]))),an=function(n){var e=n.foods;return Object(U.jsxs)(on,{children:[e.map((function(n){return Object(U.jsx)(rn,{food:n},n.id)})),console.log("Shop component")]})},sn=[{id:"burger",name:"Cheeseburger",price:10,img:"E94j3rMcxlw",qty:1},{id:"fries",name:"Fries",price:5,img:"5I5aqYJrdso",qty:1},{id:"milkshake",name:"Milkshake",price:8,img:"uy9DJw9e_vs",qty:1}],dn=t(18),ln=V.a.div(p||(p=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: calc(100vh - 6rem);\n  height: 100%;\n  margin-top: 6rem;\n  /* max-width: 600px; */\n  width: 100%;\n  margin: auto;\n  margin-top: 100px;\n"]))),hn=V.a.div(u||(u=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* height: 100%; */\n  /* min-height: calc(100vh - 6rem); */\n  width: 100%;\n  a {\n    width: 100%;\n  }\n"]))),jn=V.a.img(x||(x=Object(F.a)(["\n  /* min-height: calc(100vh - 6rem);\n  height: 100%; */\n  /* max-width: 600px; */\n"]))),bn=Object(V.a)(T.b)(m||(m=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n"]))),pn=V.a.button(f||(f=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4em 2em;\n  font-size: 1.1rem;\n  font-weight: bold;\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: white;\n  "]))),un=V.a.button(g||(g=Object(F.a)(["\n  padding: 0.4em 2em;\n  width: 100%;\n  max-width: 400px;\n  font-size: 26px;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  &:hover {\n    background-color: #333 ;\n  }\n"]))),xn=V.a.button(O||(O=Object(F.a)(["\n  padding: 0.4em 2em;\n  width: 100%;\n  max-width: 400px;\n  font-size: 26px;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  &:hover {\n    background-color: #333 ;\n  }\n"]))),mn=V.a.div(y||(y=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0.4em 2em;\n  width: 100%;\n  max-width: 400px;\n  font-size: 26px;\n  background-color: #333;\n  color: white;\n  font-weight: bold;\n"]))),fn=function(n){var e=n.item,t=n.addCartItem,c=Object(A.useState)(!1),i=Object(E.a)(c,2),r=i[0],o=i[1],a=Object(A.useState)(!1),s=Object(E.a)(a,2),d=s[0],l=s[1],h=Object(W.f)().goBack;return Object(U.jsxs)(ln,{children:[Object(U.jsx)(jn,{src:"https://source.unsplash.com/".concat(e.img,"/500x650"),alt:e.id}),Object(U.jsxs)(hn,{children:[Object(U.jsx)("h1",{children:e.name}),Object(U.jsxs)("p",{children:[e.price.toFixed(2)," USD"]}),d?Object(U.jsx)(mn,{children:"Added to Cart"}):Object(U.jsx)(xn,{onClick:function(){o(!0),t(e),l(!0)},children:"Add to cart"}),r&&Object(U.jsx)(bn,{to:"/shopping-cart/cart",children:Object(U.jsx)(un,{children:"Complete Order"})}),Object(U.jsxs)(pn,{onClick:h,children:[Object(U.jsx)(dn.a,{})," Go Back"]})]})]})},gn=V.a.div(k||(k=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n"]))),On=V.a.div(w||(w=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  height: 8rem;\n"]))),yn=Object(V.a)(T.b)(v||(v=Object(F.a)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n"]))),kn=V.a.img(C||(C=Object(F.a)(["\n  /* width: 100%; */\n  max-width: 400px;\n  height: auto;\n"]))),wn=V.a.div(z||(z=Object(F.a)(["\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  gap: 16px;\n"]))),vn=V.a.button(q||(q=Object(F.a)(["\n  background-color: white;\n  border: 2px solid black;\n  padding: 0 0.5rem;\n  color: black;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 500;\n"]))),Cn=V.a.span(I||(I=Object(F.a)(["\n  background-color: white;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  width: 2rem;\n  text-align: center;\n  color: black;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 500;\n"]))),zn=V.a.button(B||(B=Object(F.a)(["\n  background-color: white;\n  color: black;\n  font-family: inherit;\n  font-size: .8rem;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),qn=function(n){var e=n.item,t=n.deleteCartItem,c=n.changeQty;return Object(U.jsxs)(gn,{children:[Object(U.jsx)(kn,{src:"https://source.unsplash.com/".concat(e.img,"/300x350"),alt:e.id}),Object(U.jsxs)(On,{children:[Object(U.jsxs)(yn,{to:"/shopping-cart/shop/".concat(e.id),children:[" ",e.name]}),Object(U.jsx)("p",{children:e.price.toFixed(2)}),Object(U.jsxs)(wn,{children:[Object(U.jsx)(vn,{onClick:function(){return c(e.id,-1)},disable:e.qty>2,children:"-"}),Object(U.jsxs)(Cn,{children:[" ",e.qty," "]}),Object(U.jsx)(vn,{onClick:function(){return c(e.id,1)},children:"+"}),Object(U.jsx)(zn,{onClick:function(){return t(e.id)},children:"Dismiss"})]})]})]})},In=V.a.div(D||(D=Object(F.a)(["\n display: flex;\n flex-direction: column;\n justify-content: space-around;\n align-items: center;\n min-height: calc(100vh - 6rem);\n height: 100%;\n margin-top: 6rem;\n padding-top: 2rem;\n"]))),Bn=(V.a.h2(M||(M=Object(F.a)(["\n  \n"]))),function(n){var e=n.items,t=n.changeQty,c=n.deleteCartItem,i=Object(W.f)().goBack,r=e.map((function(n){return Object(U.jsx)(qn,{item:n,deleteCartItem:c,changeQty:t},n.id)})),o=e.map((function(n){return n.price*n.qty})).reduce((function(n,e){return n+e}),0).toFixed(2);return Object(U.jsxs)(In,{children:[Object(U.jsx)("h1",{children:"Shopping Cart"}),e.length>0?Object(U.jsxs)("div",{children:[Object(U.jsx)("div",{children:r}),Object(U.jsxs)("button",{onClick:i,children:[Object(U.jsx)(dn.a,{}),"Back"]}),Object(U.jsxs)("h2",{children:["Total: ",o," CAD"]})]}):Object(U.jsx)("div",{children:Object(U.jsx)("h2",{children:"Your cart is empty"})})]})});t(42);var Dn=Object(V.a)(T.a)(S||(S=Object(F.a)(["\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n"]))),Mn=function(){var n=Object(A.useState)([]),e=Object(E.a)(n,2),t=e[0],c=e[1],i=function(n){t.map((function(n){return n.id})).includes(n.id)?r(n.id,1):c([].concat(Object(Y.a)(t),[n]))},r=function(n,e){c(t.map((function(t){return t.id===n?Object(J.a)(Object(J.a)({},t),{},{qty:t.qty+e}):t})))},o=t.reduce((function(n,e){return n+e.qty}),0);return Object(U.jsxs)(Dn,{children:[Object(U.jsx)(Z,{cartItemsQty:o}),Object(U.jsxs)(W.c,{children:[Object(U.jsx)(W.a,{path:"/shopping-cart/",exact:!0,component:K}),Object(U.jsxs)(W.a,{path:"/shopping-cart/shop",exact:!0,children:[Object(U.jsx)(an,{foods:sn})," "]}),Object(U.jsx)(W.a,{exact:!0,path:"/shopping-cart/shop/:id",render:function(n){return Object(U.jsx)(fn,{item:(e=n.match.params.id,sn.find((function(n){return n.id===e}))),addCartItem:i});var e}}),Object(U.jsx)(W.a,{path:"/shopping-cart/cart",children:Object(U.jsx)(Bn,{items:t,changeQty:r,deleteCartItem:function(n){c(t.filter((function(e){return e.id!==n})))}})})]})]})};G.a.render(Object(U.jsx)(H.a.StrictMode,{children:Object(U.jsx)(Mn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8601a9d2.chunk.js.map