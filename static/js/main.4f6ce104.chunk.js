(this["webpackJsonp11-practice-food-order-app"]=this["webpackJsonp11-practice-food-order-app"]||[]).push([[0],{13:function(e,t,c){e.exports={search:"searchBar_search__3RwOR",product:"searchBar_product__2B58c",loader:"searchBar_loader__KNptd",spin:"searchBar_spin__3gnjQ"}},16:function(e,t,c){e.exports={overall:"Cart_overall__3Qr4k",products:"Cart_products__gVMqB",container:"Cart_container__1w1Ij"}},17:function(e,t,c){e.exports={header:"Header_header__1F_iZ",heading:"Header_heading__3Uk9e"}},28:function(e,t,c){e.exports={info:"infoshow_info__1W-Os"}},3:function(e,t,c){e.exports={main_card:"Products_main_card__1npgY",enter:"Products_enter__KZLKg",card_left:"Products_card_left__2wcFx",card_datails:"Products_card_datails__XRoNg",card_right:"Products_card_right__2qT3x",card_cat:"Products_card_cat__2TvYO",PG:"Products_PG__23Eha",year:"Products_year__3R8va",genre:"Products_genre__1kyOo",time:"Products_time__3qFcr",disc:"Products_disc__q7Ats","social-btn":"Products_social-btn__wrJbg",play_btn:"Products_play_btn__3zvuF","fa-play-circle":"Products_fa-play-circle__37_rT",bounce:"Products_bounce__2ZzDX",products:"Products_products__2_Rwo",container:"Products_container__WzNI9"}},33:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(22),n=c.n(a),s=(c(33),c(6)),i=c(16),j=c.n(i),d=c(0),l=function(e){var t=Object(s.b)().removeItem;return Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)("div",{className:j.a.products,children:[Object(d.jsx)("img",{src:e.Image,alt:"Images",style:{width:"100%"}}),Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("p",{children:e.Name}),Object(d.jsxs)("h4",{children:["Rating:",Object(d.jsx)("b",{children:e.Price})]}),Object(d.jsx)("button",{onClick:function(){return t(e.id)},children:"\xd7"})]})]})})},o=function(){var e=Object(s.b)(),t=e.isEmpty,c=e.items;if(t)return Object(d.jsx)("p",{children:" Cart is Empty"});var r=c.map((function(e){return Object(d.jsx)(l,{id:e.id,Name:e.Name,Price:e.price,Image:e.thumbnail,Amount:e.rating.average},e.id)}));return Object(d.jsxs)("div",{children:[0===c.length&&!c&&Object(d.jsx)("p",{children:"No Cart items"}),!r&&Object(d.jsx)("p",{children:"LoadCartItems"}),r]})},b=c(2),u=c(20),h=c(7),x=c(17),O=c.n(x),m=function(){var e=Object(s.b)().totalUniqueItems,t=0===e||!e;return Object(d.jsx)("div",{className:O.a.header,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{className:O.a.heading,children:"Shopping.Com "})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsx)(h.b,{to:"/Shopping-Cart/CartItems",children:Object(d.jsxs)("span",{children:["Cart",t?Object(d.jsx)(u.a,{}):Object(d.jsx)(u.b,{}),e||"0"]})})})}),Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(h.b,{to:"/Shopping-Cart",children:[Object(d.jsx)("span",{children:"HOME"})," "]})})})]})})},p=c(10),_=c.n(p),g=c(12),f=c(8),v=c(3),P=c.n(v),N=c(26),C=c(27),y=c(25),w=function(e){var t=Object(s.b)(),c=t.addItem,a=t.removeItem;return Object(y.useMediaQuery)({query:"(max-width: 540px)"})?Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)("div",{className:P.a.products,children:[Object(d.jsx)("h2",{children:e.Name}),Object(d.jsx)("img",{src:e.thumbnail,alt:"Avatar",style:{width:"100%"}}),Object(d.jsxs)("div",{className:P.a.container,children:[Object(d.jsxs)("p",{className:P.a.PG,children:[" imbd-",e.rating]}),Object(d.jsxs)("h4",{children:[" ",Object(d.jsx)(h.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "})]})]})]})}):(console.log(e.Cart),Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("div",{className:P.a.wrapper,children:Object(d.jsxs)("div",{className:P.a.main_card,children:[Object(d.jsx)("div",{className:P.a.card_left,children:Object(d.jsxs)("div",{className:P.a.card_datails,children:[Object(d.jsx)("h1",{children:e.Name}),Object(d.jsxs)("div",{className:P.a.card_cat,children:[Object(d.jsxs)("p",{className:P.a.PG,children:[" imbd-",e.rating]}),Object(d.jsx)("p",{className:P.a.year,children:e.airdate}),Object(d.jsxs)("p",{className:P.a.genre,children:[e.genres[0],"|",e.genres[1],"|",e.genres[2]]}),Object(d.jsxs)("p",{className:P.a.time,children:[e.runtime,"m"]})]}),Object(d.jsxs)("p",{className:P.a.disc,children:[e.summary[0],"."]}),Object(d.jsx)(h.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "}),Object(d.jsxs)("div",{className:P.a.btn,children:[Object(d.jsx)("button",{children:Object(d.jsx)("i",{className:P.a.fas,children:Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"See Trailer"})})}),Object(d.jsx)("button",{children:Object(d.jsx)("i",{className:P.a.fas,children:Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Downlaod"})})}),e.Cart2&&Object(d.jsx)("button",{onClick:function(){return c(e)},children:Object(d.jsx)(N.AiOutlineShoppingCart,{})}),e.Cart&&Object(d.jsxs)("button",{onClick:function(){return a(e.id)},children:[Object(d.jsx)(C.HiShoppingCart,{})," "]})]})]})}),Object(d.jsxs)("div",{className:P.a.card_right,children:[Object(d.jsx)("div",{className:P.a.img_container,children:Object(d.jsx)("img",{src:e.thumbnail,alt:""})}),Object(d.jsx)("div",{className:P.a.play_btn,children:Object(d.jsx)(h.c,{to:"https://www.imdb.com/title/tt4912910/",target:"_blank",children:Object(d.jsx)("i",{className:P.a.play})})})]})]})})}))},k=c(13),I=c.n(k),S=c.p+"static/media/CS-GO-image.ecd7a38d.jpg",F=c(9),B=c.n(F),R=function(e){var t=Math.ceil(e.products.length/e.resultPerPage);return 1===e.currentPage&&t>1?Object(d.jsx)("div",{className:B.a.post,children:Object(d.jsxs)("button",{onClick:function(){return e.nextPage(1)},className:B.a.buttonleft,children:["Page ",e.currentPage+1," "]})}):e.currentPage===t&&t>1?Object(d.jsx)("div",{className:B.a.post,children:Object(d.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]})}):e.currentPage<t?Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)("div",{className:B.a.post,children:[Object(d.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]}),Object(d.jsxs)("button",{className:B.a.buttonright,onClick:function(){return e.nextPage(1)},children:["Page ",e.currentPage+1]})]})}):Object(d.jsx)("div",{className:B.a.post})},E=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(f.a)(n,2),i=s[0],j=s[1],l=Object(r.useState)(!1),o=Object(f.a)(l,2),b=o[0],u=o[1],h=Object(r.useState)(1),x=Object(f.a)(h,2),O=x[0],m=x[1],p=function(){var e=Object(g.a)(_.a.mark((function e(){var t,r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows");case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,a=r.filter((function(e){return e.name.toLowerCase().trim().includes(c.toLowerCase().trim())})),0!==c.length||c){e.next=9;break}return e.abrupt("return",Object(d.jsx)("p",{children:"Bla Bla"}));case 9:u(!0),j(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=20*(O-1),P=20*O,N=function(e){return m(O+e)},C=i.slice(v,P).map((function(e){return Object(d.jsx)(w,{id:e.id,Name:e.name,airdate:e.premiered,EndDate:e.ended,genres:e.genres,thumbnail:e.image?e.image.original:S,summary:e.summary,price:e.rating.average,runtime:e.runtime,url:e.url,rating:e.rating.average,Cart:!1,Cart2:!0},e.id)}));return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("div",{className:I.a.search,children:[Object(d.jsx)("input",{value:c,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Search..",type:"text",id:"search",onKeyDown:function(e){13===e.keyCode&&(p(),m(1))}}),Object(d.jsx)("button",{onClick:p,children:"Search"})]}),!b&&Object(d.jsx)("h2",{className:I.a.product,children:"Search The Best............."}),i&&Object(d.jsx)(R,{products:i,resultPerPage:20,currentPage:O,nextPage:N}),b&&0===C.length&&Object(d.jsx)("h2",{className:I.a.product,children:"No products Found..."}),b&&C,i&&Object(d.jsx)(R,{products:i,resultPerPage:20,currentPage:O,nextPage:N})]})},T=c(28),q=c.n(T),M=function(e){return Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)("div",{className:q.a.info,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.Image,alt:"No"}),Object(d.jsx)("center",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("h4",{children:[" Rating:  ",e.Rating," "]}),Object(d.jsxs)("summary",{children:[" ",e.summary," "]})]})]})})},z=function(e){var t=Object(r.useState)([]),c=Object(f.a)(t,2),a=c[0],n=c[1],s=Object(b.g)().id,i=Object(r.useCallback)(Object(g.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows/".concat(s,"?embed=cast"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)}))),[s]);return Object(r.useEffect)((function(){i()}),[i]),!!a&&Object(d.jsx)("div",{children:Object(d.jsx)(M,{name:a.name,Image:a.image?a.image.original:S,Rating:a.rating?a.rating.average:null,summary:a.summary})})};var A=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,children:Object(d.jsx)(b.a,{to:"/Shopping-Cart/"})}),Object(d.jsx)(b.b,{path:"/Shopping-Cart/",exact:!0,children:Object(d.jsx)(E,{})}),Object(d.jsx)(b.b,{path:"/Shopping-Cart/:CartItems",exact:!0,children:Object(d.jsx)(o,{})}),Object(d.jsx)(b.b,{path:"/CartItems/:productId",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(b.b,{path:"/Shopping-Cart/Info/:id",exact:!0,children:Object(d.jsx)(z,{})}),Object(d.jsx)(b.b,{children:Object(d.jsx)("div",{children:"Not Found 404"})})]})]})})};n.a.render(Object(d.jsx)(h.a,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))},9:function(e,t,c){e.exports={post:"post_post__2PCPR",enter:"post_enter__3O12T",buttonleft:"post_buttonleft__nkTtC",buttonright:"post_buttonright__1FINh"}}},[[44,1,2]]]);
//# sourceMappingURL=main.4f6ce104.chunk.js.map