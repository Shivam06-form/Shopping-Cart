(this["webpackJsonp11-practice-food-order-app"]=this["webpackJsonp11-practice-food-order-app"]||[]).push([[0],{10:function(e,t,c){e.exports={post:"post_post__2PCPR",enter:"post_enter__3O12T",buttonleft:"post_buttonleft__nkTtC",buttonright:"post_buttonright__1FINh"}},16:function(e,t,c){e.exports={search:"searchBar_search__3RwOR",product:"searchBar_product__2B58c",loader:"searchBar_loader__KNptd",spin:"searchBar_spin__3gnjQ"}},19:function(e,t,c){e.exports={overall:"Cart_overall__3Qr4k",products:"Cart_products__gVMqB",container:"Cart_container__1w1Ij"}},20:function(e,t,c){e.exports={header:"Header_header__1F_iZ",heading:"Header_heading__3Uk9e"}},3:function(e,t,c){e.exports={main_card:"Products_main_card__1npgY",enter:"Products_enter__KZLKg",card_left:"Products_card_left__2wcFx",card_datails:"Products_card_datails__XRoNg",card_right:"Products_card_right__2qT3x",card_cat:"Products_card_cat__2TvYO",PG:"Products_PG__23Eha",year:"Products_year__3R8va",genre:"Products_genre__1kyOo",time:"Products_time__3qFcr",disc:"Products_disc__q7Ats","social-btn":"Products_social-btn__wrJbg",play_btn:"Products_play_btn__3zvuF","fa-play-circle":"Products_fa-play-circle__37_rT",bounce:"Products_bounce__2ZzDX",products:"Products_products__2_Rwo",container:"Products_container__WzNI9",bookmark:"Products_bookmark__2HVAZ"}},31:function(e,t,c){e.exports={info:"infoshow_info__1W-Os"}},36:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(25),n=c.n(a),s=(c(36),c(8)),i=c(19),o=c.n(i),j=c(0),d=function(e){var t=Object(s.b)().removeItem;return Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)("div",{className:o.a.products,children:[Object(j.jsx)("img",{src:e.Image,alt:"Images",style:{width:"100%"}}),Object(j.jsxs)("div",{className:o.a.container,children:[Object(j.jsx)("p",{children:e.Name}),Object(j.jsxs)("h4",{children:["Rating:",Object(j.jsx)("b",{children:e.Price})]}),Object(j.jsxs)("h4",{children:["Price:$",Object(j.jsx)("b",{children:Math.round(e.Price/10)})]}),Object(j.jsx)("button",{onClick:function(){return t(e.id)},children:"\xd7"})]})]})})},l=function(){var e=Object(s.b)(),t=e.isEmpty,c=e.items;if(t)return Object(j.jsx)("p",{children:" Cart is Empty"});var r=c.map((function(e){return Object(j.jsx)(d,{id:e.id,Name:e.Name,Price:e.price,Image:e.thumbnail,Amount:e.rating.average},e.id)}));return Object(j.jsxs)("div",{children:[0===c.length&&!c&&Object(j.jsx)("p",{children:"No Cart items"}),!r&&Object(j.jsx)("p",{children:"LoadCartItems"}),r]})},b=c(2),u=c(9),h=c(7),O=c(20),x=c.n(O),m=function(){var e=Object(s.b)().totalUniqueItems,t=0===e||!e;return Object(j.jsx)("div",{className:x.a.header,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("h2",{className:x.a.heading,children:"Shopping.Com "})}),Object(j.jsx)("li",{children:Object(j.jsx)("h3",{children:Object(j.jsx)(h.b,{to:"/Shopping-Cart/CartItems",children:Object(j.jsxs)("span",{children:["DashBoard",t?Object(j.jsx)(u.c,{}):Object(j.jsx)(u.d,{}),e||"0"]})})})}),Object(j.jsx)("li",{children:Object(j.jsx)("h3",{children:Object(j.jsxs)(h.b,{to:"/Shopping-Cart",children:[Object(j.jsx)("span",{children:"HOME"})," "]})})})]})})},p=c(11),g=c.n(p),_=c(14),f=c(5),v=c(3),k=c.n(v),N=c(24),P=c(29),C=c(51),y=function(e){var t=Object(s.b)(),c=t.addItem,a=t.items,n=Object(r.useState)(!1),i=Object(f.a)(n,2),o=i[0],d=i[1];if(Object(P.useMediaQuery)({query:"(max-width: 540px)"})){var l=a.map((function(t){return t.id===e.id})).filter((function(e){return!0===e})),b=(JSON.parse(localStorage.getItem("book"))||[]).map((function(t){return t.id===e.id})).filter((function(e){return!0===e}));return Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)("div",{className:k.a.products,children:[" ",Object(j.jsx)("img",{src:e.thumbnail,alt:"Avatar",style:{width:"100%",marginTop:"10px",borderRadius:"30px"}}),Object(j.jsxs)("div",{className:k.a.container,children:[Object(j.jsxs)("p",{className:k.a.PG,children:[" imbd-",e.rating]}),!b[0]&&Object(j.jsx)(C.a,{className:"mb-1",id:"toggle-check",type:"checkbox",variant:"outline-primary",checked:o,onClick:e.BookMark,onChange:function(e){return d(e.currentTarget.checked)},children:Object(j.jsx)(u.a,{})}),b[0]?Object(j.jsx)(C.a,{className:"mb-1",type:"checkbox",variant:"primary",checked:o,value:"1",onChange:function(e){return d(e.currentTarget.checked)},onClick:e.BookMark2,children:Object(j.jsx)(u.b,{})}):void 0,Object(j.jsxs)("h4",{children:[" ",Object(j.jsx)(h.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "})]}),!l[0]&&Object(j.jsxs)("button",{onClick:function(){return c(e)},children:[Object(j.jsx)(N.AiOutlineShoppingCart,{})," ADD TO CART"]}),l[0]?Object(j.jsxs)("button",{children:[" ",Object(j.jsx)(h.b,{to:"/Shopping-Cart/CartItems",children:Object(j.jsx)("span",{children:"DashBoard"})})]}):void 0]})]})})}var O=a.map((function(t){return t.id===e.id})).filter((function(e){return!0===e})),x=(JSON.parse(localStorage.getItem("book"))||[]).map((function(t){return t.id===e.id})).filter((function(e){return!0===e}));return Object(j.jsx)(r.Fragment,{children:Object(j.jsx)("div",{className:k.a.wrapper,children:Object(j.jsxs)("div",{className:k.a.main_card,children:[Object(j.jsx)("div",{className:k.a.card_left,children:Object(j.jsxs)("div",{className:k.a.card_datails,children:[!x[0]&&Object(j.jsx)(C.a,{className:"mb-3",id:"toggle-check",type:"checkbox",variant:"outline-primary",checked:o,onClick:e.BookMark,onChange:function(e){return d(e.currentTarget.checked)},children:Object(j.jsx)(u.a,{})}),x[0]?Object(j.jsx)(C.a,{className:"mb-2",type:"checkbox",variant:"primary",checked:o,value:"1",onChange:function(e){return d(e.currentTarget.checked)},onClick:e.BookMark2,children:Object(j.jsx)(u.b,{})}):void 0,Object(j.jsx)("h1",{children:e.Name}),Object(j.jsxs)("div",{className:k.a.card_cat,children:[Object(j.jsxs)("p",{className:k.a.PG,children:[" imbd-",e.rating]}),Object(j.jsx)("p",{className:k.a.year,children:e.airdate}),Object(j.jsxs)("p",{className:k.a.genre,children:[e.genres[0],"|",e.genres[1],"|",e.genres[2]]}),Object(j.jsxs)("p",{className:k.a.time,children:[e.runtime,"m"]})]}),Object(j.jsx)(h.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "}),Object(j.jsxs)("div",{className:k.a.btn,children:[Object(j.jsx)("button",{children:Object(j.jsx)("i",{className:k.a.fas,children:Object(j.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"See Trailer"})})}),Object(j.jsx)("button",{children:Object(j.jsx)("i",{className:k.a.fas,children:Object(j.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Downlaod"})})}),!O[0]&&Object(j.jsxs)("button",{onClick:function(){return c(e)},children:[Object(j.jsx)(N.AiOutlineShoppingCart,{})," ADD TO CART"]}),O[0]?Object(j.jsxs)("button",{children:[" ",Object(j.jsx)(h.b,{to:"/Shopping-Cart/CartItems",children:Object(j.jsx)("span",{children:"DashBoard"})})]}):void 0]})]})}),Object(j.jsxs)("div",{className:k.a.card_right,children:[Object(j.jsx)("div",{className:k.a.img_container,children:Object(j.jsx)("img",{src:e.thumbnail,alt:""})}),Object(j.jsx)("div",{className:k.a.play_btn,children:Object(j.jsx)(h.c,{to:"https://www.imdb.com/title/tt4912910/",target:"_blank",children:Object(j.jsx)("i",{className:k.a.play})})})]})]})})})},S=c(16),I=c.n(S),w=c.p+"static/media/CS-GO-image.ecd7a38d.jpg",B=c(10),T=c.n(B),F=function(e){var t=Math.ceil(e.products.length/e.resultPerPage);return 1===e.currentPage&&t>1?Object(j.jsx)("div",{className:T.a.post,children:Object(j.jsxs)("button",{onClick:function(){return e.nextPage(1)},className:T.a.buttonleft,children:["Page ",e.currentPage+1," "]})}):e.currentPage===t&&t>1?Object(j.jsx)("div",{className:T.a.post,children:Object(j.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]})}):e.currentPage<t?Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)("div",{className:T.a.post,children:[Object(j.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]}),Object(j.jsxs)("button",{className:T.a.buttonright,onClick:function(){return e.nextPage(1)},children:["Page ",e.currentPage+1]})]})}):Object(j.jsx)("div",{className:T.a.post})},M=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(f.a)(n,2),i=s[0],o=s[1],d=Object(r.useState)(!1),l=Object(f.a)(d,2),b=l[0],u=l[1],h=Object(r.useState)(1),O=Object(f.a)(h,2),x=O[0],m=O[1],p=function(){var e=Object(_.a)(g.a.mark((function e(){var t,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows");case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,a=r.filter((function(e){return e.name.toLowerCase().trim().includes(c.toLowerCase().trim())})),0!==c.length||c){e.next=9;break}return e.abrupt("return",Object(j.jsx)("p",{children:"Bla Bla"}));case 9:u(!0),o(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=20*(x-1),k=20*x,N=function(e){return m(x+e)},P=i.slice(v,k).map((function(e){return Object(j.jsx)(y,{id:e.id,Name:e.name,airdate:e.premiered,EndDate:e.ended,genres:e.genres,thumbnail:e.image?e.image.original:w,summary:e.summary,price:e.rating.average,runtime:e.runtime,url:e.url,rating:e.rating.average,BookMark:function(){var t=[],c=JSON.parse(localStorage.getItem("book"));if(t.push(e),localStorage.setItem("book",JSON.stringify(t)),!c)return!1;if(t.filter((function(t){return t.name===e.name}))){localStorage.setItem("book",JSON.stringify([].concat(c,e)))}},BookMark2:function(){var t=(JSON.parse(localStorage.getItem("book"))||[]).filter((function(t){return t.name!==e.name}));localStorage.setItem("book",JSON.stringify(t))}},e.id)}));return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)("div",{className:I.a.search,children:[Object(j.jsx)("input",{value:c,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Search..",type:"text",id:"search",onKeyDown:function(e){13===e.keyCode&&(p(),m(1))}}),Object(j.jsx)("button",{onClick:p,children:"Search"})]}),!b&&Object(j.jsx)("h2",{className:I.a.product,children:"Search The Best............."}),i&&Object(j.jsx)(F,{products:i,resultPerPage:20,currentPage:x,nextPage:N}),b&&0===P.length&&Object(j.jsx)("h2",{className:I.a.product,children:"No products Found..."}),b&&P,i&&Object(j.jsx)(F,{products:i,resultPerPage:20,currentPage:x,nextPage:N})]})},R=c(31),D=c.n(R),A=function(e){return Object(j.jsx)(r.Fragment,{children:Object(j.jsxs)("div",{className:D.a.info,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.Image,alt:"No"}),Object(j.jsx)("center",{})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsxs)("h4",{children:[" Rating:  ",e.Rating," "]}),Object(j.jsxs)("summary",{children:[" ",e.summary," "]})]})]})})},J=function(e){var t=Object(r.useState)([]),c=Object(f.a)(t,2),a=c[0],n=c[1],s=Object(b.g)().id,i=Object(r.useCallback)(Object(_.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows/".concat(s,"?embed=cast"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)}))),[s]);return Object(r.useEffect)((function(){i()}),[i]),!!a&&Object(j.jsx)("div",{children:Object(j.jsx)(A,{name:a.name,Image:a.image?a.image.original:w,Rating:a.rating?a.rating.average:null,summary:a.summary})})};c(47);var E=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(b.d,{children:[Object(j.jsx)(b.b,{path:"/",exact:!0,children:Object(j.jsx)(b.a,{to:"/Shopping-Cart/"})}),Object(j.jsx)(b.b,{path:"/Shopping-Cart/",exact:!0,children:Object(j.jsx)(M,{})}),Object(j.jsx)(b.b,{path:"/Shopping-Cart/:CartItems",exact:!0,children:Object(j.jsx)(l,{})}),Object(j.jsx)(b.b,{path:"/CartItems/:productId",exact:!0,children:Object(j.jsx)(y,{})}),Object(j.jsx)(b.b,{path:"/Shopping-Cart/Info/:id",exact:!0,children:Object(j.jsx)(J,{})}),Object(j.jsx)(b.b,{children:Object(j.jsx)("div",{children:"Not Found 404"})})]})]})})};n.a.render(Object(j.jsx)(h.a,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b37ffaf4.chunk.js.map