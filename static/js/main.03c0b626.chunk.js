(this["webpackJsonp11-practice-food-order-app"]=this["webpackJsonp11-practice-food-order-app"]||[]).push([[0],{10:function(e,t,c){e.exports={header:"Header_header__1F_iZ",heading:"Header_heading__3Uk9e"}},12:function(e,t,c){e.exports={search:"searchBar_search__3RwOR",product:"searchBar_product__2B58c",loader:"searchBar_loader__KNptd",spin:"searchBar_spin__3gnjQ"}},15:function(e,t,c){e.exports={overall:"Cart_overall__3Qr4k",products:"Cart_products__gVMqB",container:"Cart_container__1w1Ij"}},19:function(e,t,c){e.exports={products:"Products_products__2_Rwo",enter:"Products_enter__KZLKg",container:"Products_container__WzNI9"}},29:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(21),i=c.n(a),s=(c(29),c(7)),o=r.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=c(15),l=c.n(j),d=c(0),m=function(e){var t=JSON.parse(localStorage.getItem("itemsTotal")),c=Object(n.useContext)(o);return console.log(c.totalAmount),Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)("div",{className:l.a.products,children:[Object(d.jsx)("img",{src:e.Image,alt:"Images",style:{width:"100%"}}),Object(d.jsxs)("div",{className:l.a.container,children:[Object(d.jsx)("h4",{children:Object(d.jsxs)("b",{children:["\ud83d\udcb2",e.Price]})}),Object(d.jsx)("p",{children:e.Name}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"}),Object(d.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(d.jsxs)("h3",{children:[e.Amount," x "]})]}),Object(d.jsxs)("h3",{children:["Total:\ud83d\udcb2",t]})]})})},u=function(){var e=Object(n.useContext)(o);localStorage.setItem("items",JSON.stringify(e.items)),localStorage.setItem("itemsTotal",JSON.stringify(e.totalAmount));var t=e.items;console.log(t);var c=JSON.parse(localStorage.getItem("items")),r=function(t){e.removeItem(t)},a=function(t){e.addItem(Object(s.a)(Object(s.a)({},t),{},{amount:1}))},i=c.map((function(e){return Object(d.jsx)(m,{id:e.id,Name:e.Name,Price:e.Price,Image:e.Image,Amount:e.amount,onRemove:r.bind(null,e.id),onAdd:a.bind(null,e)},e.id)}));return 0!==c.length&&c?Object(d.jsxs)("div",{children:[0===c.length&&Object(d.jsx)("p",{children:"No Cart items"}),!i&&Object(d.jsx)("p",{children:"LoadCartItems"}),i]}):Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Empty cart"})})},h=c(2),b=c(5),O=c(10),x=c.n(O),p=function(){var e=Object(n.useContext)(o);console.log(e.items);var t=JSON.parse(localStorage.getItem("items"));if(!t)return Object(d.jsx)("div",{className:x.a.header,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{className:x.a.heading,children:"Shopping.Com "})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(b.b,{to:"/home/CartItem",children:[Object(d.jsxs)("span",{children:["Cart\ud83d\uded2 ","0"]})," "]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(b.b,{to:"/home",children:[Object(d.jsx)("span",{children:"HOME"})," "]})})})]})});var c=t.reduce((function(e,t){return e+t.amount}),0);return Object(d.jsx)("div",{className:x.a.header,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{className:x.a.heading,children:"Shopping.Com "})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(b.b,{to:"/home/CartItems",children:[Object(d.jsxs)("span",{children:["Cart\ud83d\uded2 ",c]})," "]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(b.b,{to:"/home",children:[Object(d.jsx)("span",{children:"HOME"})," "]})})})]})})},f=c(18),g=c.n(f),v=c(24),_=c(6),I=c(19),N=c.n(I),C=function(e){var t=Object(n.useContext)(o),c=Object(n.useState)(!0),r=Object(_.a)(c,2),a=r[0],i=r[1];localStorage.setItem("itemsTotal",JSON.stringify(t.totalAmount)),localStorage.setItem("items",JSON.stringify(t.items));return Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)("div",{className:N.a.products,children:[Object(d.jsx)("h2",{children:e.Name}),Object(d.jsx)("img",{src:e.thumbnail,alt:"Avatar",style:{width:"100%"}}),Object(d.jsxs)("div",{className:N.a.container,children:[Object(d.jsx)("h4",{children:Object(d.jsxs)("b",{children:[" ",e.Type]})}),Object(d.jsx)("p",{children:e.Name}),a&&Object(d.jsx)("button",{onClick:function(c){return c.preventDefault(),t.addItem({id:e.id,Name:e.Name,Summary:e.summary,Image:e.thumbnail,amount:t.addItem.length,totalAmount:t.totalAmount}),i(!1)},children:"Add To Cart"}),!a&&Object(d.jsx)("p",{children:"Already In Cart"})]})]})})},y=c(12),S=c.n(y),A=c.p+"static/media/CS-GO-image.ecd7a38d.jpg",k=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(_.a)(a,2),s=i[0],o=i[1],j=Object(n.useState)(!1),l=Object(_.a)(j,2),m=l[0],u=l[1],h=function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,r,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/schedule/full");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,r=n.filter((function(e){return e.name.includes(c.trim())})),a=[],0!==c.length||c){e.next=10;break}return e.abrupt("return",Object(d.jsx)("p",{children:"Bla Bla"}));case 10:for(i in r)a.push({id:r[i].id,name:r[i].name,summary:r[i].summary,CurrentPrice:r[i].currency,Image:r[i].image?r[i].image.original:A});u(!0),o(r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=s.map((function(e){return Object(d.jsx)(C,{id:e.id,Name:e.name,summary:e.summary,thumbnail:e.image?e.image.original:A},e.id)}));return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)("div",{className:S.a.search,children:[Object(d.jsx)("input",{value:c,onChange:function(e){e.preventDefault(),r(e.target.value)},placeholder:"Search..",type:"text",id:"search",onKeyDown:function(e){13===e.keyCode&&h()}}),Object(d.jsx)("button",{onClick:h,children:"Search"})]}),!m&&Object(d.jsx)("h2",{className:S.a.product,children:"Search The Best............."}),m&&0===b.length&&Object(d.jsx)("h2",{className:S.a.product,children:"No products Found..."}),m&&b]})},w=c(20),B={items:[],totalAmount:0},P=function(e,t){if("ADD"===t.type){var c,n=e.totalAmount+t.item.Price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[r];if(a){var i=Object(s.a)(Object(s.a)({},a),{},{amount:a.amount+t.item.amount});(c=Object(w.a)(e.items))[r]=i}else c=e.items.concat(t.item);return{items:c,totalAmount:n}}if("REMOVE"===t.type){var o,j=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[j],d=e.totalAmount-l.Price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(s.a)(Object(s.a)({},l),{},{amount:l.amount-1});(o=Object(w.a)(e.items))[j]=m}return{items:o,totalAmount:d}}return B},J=function(e){var t=Object(n.useReducer)(P,B),c=Object(_.a)(t,2),r=c[0],a=c[1],i={items:r.items,totalAmount:r.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})}};return Object(d.jsx)(o.Provider,{value:i,children:e.children})};var E=function(){return Object(d.jsx)(J,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,children:Object(d.jsx)(h.a,{to:"/home"})}),Object(d.jsx)(h.b,{path:"/home",exact:!0,children:Object(d.jsx)(k,{})}),Object(d.jsx)(h.b,{path:"/home/:CartItems",exact:!0,children:Object(d.jsx)(u,{})}),Object(d.jsx)(h.b,{path:"/CartItems/:productId",exact:!0,children:Object(d.jsx)(C,{})})]})]})})};i.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.03c0b626.chunk.js.map