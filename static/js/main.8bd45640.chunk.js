(this["webpackJsonp11-practice-food-order-app"]=this["webpackJsonp11-practice-food-order-app"]||[]).push([[0],{28:function(e,t,c){e.exports={post:"post_post__2PCPR",enter:"post_enter__3O12T",buttonleft:"post_buttonleft__nkTtC",buttonright:"post_buttonright__1FINh"}},38:function(e,t,c){e.exports={slider:"Slider_slider__K-liv",place:"Slider_place__3HbUZ"}},53:function(e,t,c){e.exports={search:"searchBar_search__3RwOR",product:"searchBar_product__2B58c",loader:"searchBar_loader__KNptd",spin:"searchBar_spin__3gnjQ"}},57:function(e,t,c){e.exports={overall:"Cart_overall__3Qr4k",products:"Cart_products__gVMqB",container:"Cart_container__1w1Ij"}},58:function(e,t,c){e.exports={header:"Header_header__1F_iZ",heading:"Header_heading__3Uk9e"}},61:function(e,t,c){e.exports={overall:"bookmark_overall__1wv4n",products:"bookmark_products__3TqUQ",container:"bookmark_container__2-v05"}},67:function(e,t,c){e.exports={info:"infoshow_info__1W-Os"}},68:function(e,t,c){e.exports={SignUp:"SignUp_SignUp__33_OO"}},69:function(e,t,c){e.exports={LogIn:"LogIn_LogIn__3rdaC"}},75:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(23),s=c.n(a),i=(c(75),c(17)),j=c(57),o=c.n(j),l=c(0),d=function(e){var t=Object(i.b)().removeItem;return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:o.a.products,children:[Object(l.jsx)("img",{src:e.Image,alt:"Images",style:{width:"100%"}}),Object(l.jsxs)("div",{className:o.a.container,children:[Object(l.jsx)("p",{children:e.Name}),Object(l.jsxs)("h4",{children:["Rating:",Object(l.jsx)("b",{children:e.Price})]}),Object(l.jsxs)("h4",{children:["Price:$",Object(l.jsx)("b",{children:Math.round(e.Price/10)})]}),Object(l.jsx)("button",{onClick:function(){return t(e.id)},children:"\xd7"})]})]})})},b=function(){var e=Object(i.b)(),t=e.isEmpty,c=e.items;if(t)return Object(l.jsx)("h2",{children:" DashBoard Is Empty"});var r=c.map((function(e){return Object(l.jsx)(d,{id:e.id,Name:e.Name,Price:e.price,Image:e.thumbnail,Amount:e.rating.average},e.id)}));return Object(l.jsxs)("div",{children:[0===c.length&&!c&&Object(l.jsx)("h2",{children:"DashBoard Is Empty"}),!r&&Object(l.jsx)("p",{children:"LoadCartItems"}),r]})},h=c(7),u=c(19),O=c(8),x=c(58),m=c.n(x),p=c(44),g=c(97),f=c(94),_=c(48),v=c(5),N=n.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(e){}}),k=function(e){var t=localStorage.getItem("token"),c=Object(r.useState)(t),n=Object(v.a)(c,2),a=n[0],s=n[1],i={token:a,isLoggedIn:!!a,login:function(e){s(e),localStorage.setItem("token",e)},logout:function(){s(null),localStorage.removeItem("token")}};return Object(l.jsx)(N.Provider,{value:i,children:e.children})},S=N,C=function(){var e=Object(i.b)().totalUniqueItems,t=0===e||!e,c=Object(r.useContext)(S),n=c.isLoggedIn,a=function(){c.logout()};return Object(p.useMediaQuery)({query:"(max-width: 640px)"})?Object(l.jsx)("div",{children:Object(l.jsxs)(g.a,{style:{width:"100%",alignItems:"center",backgroundColor:"goldenrod"},children:[Object(l.jsx)("h3",{children:"Shopping"}),Object(l.jsx)("h3",{children:"Cart"}),Object(l.jsxs)(f.a,{className:"mt-1 mb-1",children:[Object(l.jsx)(f.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Drop"}),Object(l.jsxs)(f.a.Menu,{children:[n&&Object(l.jsx)(f.a.Item,{children:Object(l.jsx)(O.b,{to:"/Shopping-Cart/CartItems",children:Object(l.jsxs)("span",{children:["DashBoard",t?Object(l.jsx)(u.c,{}):Object(l.jsx)(u.d,{}),e||"0"]})})}),n&&Object(l.jsx)(f.a.Item,{children:Object(l.jsx)(O.b,{to:"/Shopping-Cart/BookmarkItems",children:Object(l.jsx)("span",{children:"BookMarkitems"})})}),!n&&Object(l.jsx)(f.a.Item,{children:Object(l.jsx)(O.b,{to:"/Signup/",children:Object(l.jsx)("span",{children:"SignUp"})})}),!n&&Object(l.jsx)(f.a.Item,{children:Object(l.jsx)(O.b,{to:"/Login/",children:Object(l.jsx)("span",{children:"LogIn"})})}),Object(l.jsx)(f.a.Item,{children:Object(l.jsxs)(O.b,{to:"/Shopping-Cart",children:[Object(l.jsx)("span",{children:"HOME"})," "]})}),n&&Object(l.jsx)(f.a.Item,{children:Object(l.jsx)(_.a,{onClick:a,children:Object(l.jsx)("span",{children:"LogOut"})})})]})]})]})}):Object(l.jsx)("div",{className:m.a.header,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("h2",{className:m.a.heading,children:"Shopping.Com "})}),n&&Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsx)(O.b,{to:"/Shopping-Cart/CartItems",children:Object(l.jsxs)("span",{children:["DashBoard",t?Object(l.jsx)(u.c,{}):Object(l.jsx)(u.d,{}),e||"0"]})})})}),n&&Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsx)(O.b,{to:"/Shopping-Cart/BookmarkItems",children:Object(l.jsx)("span",{children:"BookMarkitems"})})})}),!n&&Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsx)(O.b,{to:"/Signup/",children:Object(l.jsx)("span",{children:"SignUp"})})})}),!n&&Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsx)(O.b,{to:"/Login/",children:Object(l.jsx)("span",{children:"LogIn"})})})}),Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsxs)(O.b,{to:"/Shopping-Cart",children:[Object(l.jsx)("span",{children:"HOME"})," "]})})}),n&&Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:Object(l.jsx)(_.a,{onClick:a,children:Object(l.jsx)("span",{children:"LogOut"})})})})]})})},I=c(9),y=c.n(I),P=c(60),w=JSON.parse(localStorage.getItem("book")),L=[];localStorage.setItem("book",JSON.stringify(w||[]));var T=function(e){var t=JSON.parse(localStorage.getItem("book"));if(L.push(e),localStorage.setItem("book",JSON.stringify(L)),!t)return!1;if(L.filter((function(t){return t.Name===e.Name}))){localStorage.setItem("book",JSON.stringify([].concat(t,e)))}},B=function(e){var t=(JSON.parse(localStorage.getItem("book"))||[]).filter((function(t){return t.Name!==e.Name}));localStorage.setItem("book",JSON.stringify(t))},R=c(93),A=function(e){var t=Object(i.b)(),c=t.addItem,n=t.items,a=Object(r.useState)(!1),s=Object(v.a)(a,2),j=s[0],o=s[1],d=Object(r.useContext)(S).isLoggedIn;if(Object(p.useMediaQuery)({query:"(max-width: 540px)"})){var b=n.map((function(t){return t.id===e.id})).filter((function(e){return!0===e})),h=(JSON.parse(localStorage.getItem("book"))||[]).map((function(t){return t.id===e.id})).filter((function(e){return!0===e}));return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:y.a.products,children:[" ",Object(l.jsx)("img",{src:e.thumbnail,alt:"Avatar",style:{width:"100%",marginTop:"10px",borderRadius:"30px"}}),Object(l.jsxs)("div",{className:y.a.container,children:[Object(l.jsxs)("p",{className:y.a.PG,children:[" imbd-",e.rating]}),!h[0]&&d&&Object(l.jsx)(R.a,{className:"mb-2",id:e.id,type:"checkbox",variant:"outline-primary",checked:j,value:"1",onChange:function(e){return o(e.currentTarget.checked)},onClick:function(){return T(e)},children:Object(l.jsx)(u.a,{})}),h[0]?Object(l.jsx)(R.a,{className:"mb-2",id:e.id,type:"checkbox",variant:"outline-primary",checked:j,value:"1",onChange:function(e){return o(e.currentTarget.checked)},onClick:function(){return B(e)},children:Object(l.jsx)(u.b,{})}):void 0,Object(l.jsxs)("h4",{children:[" ",Object(l.jsx)(O.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "})]}),!b[0]&&d&&Object(l.jsxs)("button",{onClick:function(){return c(e)},children:[Object(l.jsx)(P.AiOutlineShoppingCart,{})," ADD TO CART"]}),b[0]?Object(l.jsxs)("button",{children:[" ",Object(l.jsx)(O.b,{to:"/Shopping-Cart/CartItems",children:Object(l.jsx)("span",{children:"DashBoard"})})]}):void 0,!d&&Object(l.jsx)(O.b,{to:"/Login/",children:Object(l.jsx)("span",{children:"LogIn To Start Adding"})})]})]})})}var x=n.map((function(t){return t.id===e.id})).filter((function(e){return!0===e})),m=(JSON.parse(localStorage.getItem("book"))||[]).map((function(t){return t.id===e.id})).filter((function(e){return!0===e}));return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("div",{className:y.a.wrapper,children:Object(l.jsxs)("div",{className:y.a.main_card,children:[Object(l.jsx)("div",{className:y.a.card_left,children:Object(l.jsxs)("div",{className:y.a.card_datails,children:[!m[0]&&d&&Object(l.jsx)(R.a,{className:"mb-2",id:e.id,type:"checkbox",checked:j,value:"1",onChange:function(e){return o(e.currentTarget.checked)},onClick:function(){return T(e)},children:Object(l.jsx)(u.a,{})}),(m[0]?d:void 0)&&Object(l.jsx)(R.a,{className:"mb-2",id:e.id,type:"checkbox",checked:j,value:"1",onChange:function(e){return o(e.currentTarget.checked)},onClick:function(){return B(e)},children:Object(l.jsx)(u.b,{})}),Object(l.jsx)("h1",{children:e.Name}),Object(l.jsxs)("div",{className:y.a.card_cat,children:[Object(l.jsxs)("p",{className:y.a.PG,children:[" imbd-",e.rating]}),Object(l.jsx)("p",{className:y.a.year,children:e.airdate}),Object(l.jsxs)("p",{className:y.a.genre,children:[e.genres[0],"|",e.genres[1],"|",e.genres[2]]}),Object(l.jsxs)("p",{className:y.a.time,children:[e.runtime,"m"]})]}),Object(l.jsx)(O.c,{to:"/Shopping-Cart/Info/".concat(e.id),children:" View More "}),Object(l.jsxs)("div",{className:y.a.btn,children:[Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:y.a.fas,children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"See Trailer"})})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:y.a.fas,children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Downlaod"})})}),!x[0]&&d&&Object(l.jsxs)("button",{onClick:function(){return c(e)},children:[Object(l.jsx)(P.AiOutlineShoppingCart,{})," ADD TO CART"]}),x[0]?Object(l.jsxs)("button",{children:[" ",Object(l.jsx)(O.b,{to:"/Shopping-Cart/CartItems",children:Object(l.jsx)("span",{children:"DashBoard"})})]}):void 0,!d&&Object(l.jsx)(O.b,{to:"/Login/",children:Object(l.jsx)("span",{children:"LogIn To Start Adding"})})]})]})}),Object(l.jsxs)("div",{className:y.a.card_right,children:[Object(l.jsx)("div",{className:y.a.img_container,children:Object(l.jsx)("img",{src:e.thumbnail,alt:""})}),Object(l.jsx)("div",{className:y.a.play_btn,children:Object(l.jsx)(O.c,{to:"https://www.imdb.com/title/tt4912910/",target:"_blank",children:Object(l.jsx)("i",{className:y.a.play})})})]})]})})})},E=c(53),F=c.n(E),D=c.p+"static/media/CS-GO-image.ecd7a38d.jpg",G=c(28),M=c.n(G),J=function(e){var t=Math.ceil(e.products.length/e.resultPerPage);return 1===e.currentPage&&t>1?Object(l.jsx)("div",{className:M.a.post,children:Object(l.jsxs)("button",{onClick:function(){return e.nextPage(1)},className:M.a.buttonleft,children:["Page ",e.currentPage+1," "]})}):e.currentPage===t&&t>1?Object(l.jsx)("div",{className:M.a.post,children:Object(l.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]})}):e.currentPage<t?Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:M.a.post,children:[Object(l.jsxs)("button",{onClick:function(){return e.nextPage(-1)},children:["Page ",e.currentPage-1," "]}),Object(l.jsxs)("button",{className:M.a.buttonright,onClick:function(){return e.nextPage(1)},children:["Page ",e.currentPage+1]})]})}):Object(l.jsx)("div",{className:M.a.post})},q=c(31),H=c.n(q),U=c(49),z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(v.a)(a,2),i=s[0],j=s[1],o=Object(r.useState)([]),d=Object(v.a)(o,2),b=d[0],h=d[1],u=Object(r.useState)(!1),O=Object(v.a)(u,2),x=O[0],m=O[1];return{fetchProducts:function(){var e=Object(U.a)(H.a.mark((function e(){var t,r,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows");case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,n=r.filter((function(e){return e.name.toLowerCase().trim().includes(c.toLowerCase().trim())})),h(r.slice(0,20)),0!==c.length||c){e.next=10;break}return e.abrupt("return",Object(l.jsx)("p",{children:"Bla Bla"}));case 10:j(n),m(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),products:i,setIsProducts:n,touched:x,isProducts:c,render:b}},K=function(){var e=z();console.log(e.products);var t=Object(r.useState)(1),c=Object(v.a)(t,2),n=c[0],a=c[1],s=20*(n-1),i=20*n,j=function(e){return a(n+e)},o=e.products.slice(s,i).map((function(e){return Object(l.jsx)(A,{id:e.id,Name:e.name,airdate:e.premiered,EndDate:e.ended,genres:e.genres,thumbnail:e.image?e.image.original:D,summary:e.summary,price:e.rating.average,runtime:e.runtime,url:e.url,rating:e.rating.average},e.id)}));return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("div",{className:F.a.search,children:[Object(l.jsx)("input",{value:e.isProducts,onChange:function(t){t.preventDefault(),e.setIsProducts(t.target.value)},placeholder:"Search..",type:"text",id:"search",onKeyDown:function(t){13===t.keyCode&&(e.fetchProducts(),a(1))}}),Object(l.jsx)("button",{onClick:e.fetchProducts,children:"Search"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),!e.touched&&Object(l.jsx)("h2",{className:F.a.product,children:"Search The Best............."}),e.products&&Object(l.jsx)(J,{products:e.products,resultPerPage:20,currentPage:n,nextPage:j}),Object(l.jsx)("br",{}),e.touched&&0===o.length&&Object(l.jsx)("h2",{className:F.a.product,children:"No products Found..."}),e.touched&&o,e.products&&Object(l.jsx)(J,{products:e.products,resultPerPage:20,currentPage:n,nextPage:j})]})},W=c(67),Q=c.n(W),V=function(e){return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:Q.a.info,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:e.Image,alt:"No"}),Object(l.jsx)("center",{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:e.name}),Object(l.jsxs)("h4",{children:[" Rating:  ",e.Rating," "]}),Object(l.jsxs)("summary",{children:[" ",e.summary," "]})]})]})})},Z=function(e){var t=Object(r.useState)([]),c=Object(v.a)(t,2),n=c[0],a=c[1],s=Object(h.h)().id,i=Object(r.useCallback)(Object(U.a)(H.a.mark((function e(){var t,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.tvmaze.com/shows/".concat(s,"?embed=cast"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c),console.log(c);case 8:case"end":return e.stop()}}),e)}))),[s]);return Object(r.useEffect)((function(){i()}),[i]),!!n&&Object(l.jsx)("div",{children:Object(l.jsx)(V,{name:n.name,Image:n.image?n.image.original:D,Rating:n.rating?n.rating.average:null,summary:n.summary})})},X=(c(85),c(61)),Y=c.n(X),$=function(e){return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:Y.a.products,children:[Object(l.jsx)("img",{src:e.Image,alt:"Images",style:{width:"100%"}}),Object(l.jsxs)("div",{className:Y.a.container,children:[Object(l.jsx)("p",{children:e.Name}),Object(l.jsxs)("h4",{children:["Rating:",Object(l.jsx)("b",{children:e.Price})]}),Object(l.jsx)(_.a,{onClick:function(){B(e),window.location.reload(!1)},children:"\xd7"})]})]})})},ee=function(){var e=JSON.parse(localStorage.getItem("book")).map((function(e){return Object(l.jsx)($,{id:e.id,Name:e.Name,Price:e.price,Image:e.thumbnail,Amount:e.rating.average},e.id)}));return Object(l.jsxs)("div",{children:[0===e.length?Object(l.jsx)("h2",{children:"No Bookmarks Yet"}):"",!e&&Object(l.jsx)("p",{children:"LoadCartItems"}),e]})},te=c(98),ce=c(95),re=c(68),ne=c.n(re),ae=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),s=Object(r.useRef)(),i=Object(r.useContext)(S),j=Object(r.useState)(!0),o=Object(v.a)(j,2),d=o[0],b=o[1],u=Object(r.useState)(""),x=Object(v.a)(u,2),m=x[0],p=x[1],f=Object(r.useState)(""),N=Object(v.a)(f,2),k=N[0],C=N[1],I=Object(r.useState)(!1),y=Object(v.a)(I,2),P=y[0],w=y[1],L=Object(r.useState)(!0),T=Object(v.a)(L,2),B=T[0],R=T[1],A=Object(h.g)();return Object(l.jsx)("div",{children:Object(l.jsxs)(g.a,{className:ne.a.SignUp,children:[Object(l.jsx)(te.a,{show:!d,variant:"danger",children:Object(l.jsxs)(te.a.Heading,{children:["ERROR: ",m]})}),Object(l.jsx)(te.a,{show:P,variant:"primary",children:Object(l.jsx)(te.a.Heading,{children:k})}),Object(l.jsx)(te.a,{show:!B,variant:"danger",children:Object(l.jsx)(te.a.Heading,{children:"Confirm Password Not Is Valid!\ud83d\ude2b"})}),Object(l.jsxs)(ce.a,{onSubmit:function(r){b(!0),r.preventDefault();var s=e.current.value,j=t.current.value,o=c.current.value,d=n.current.value,h=a.current.value,u=a.current.value;if(o!==j)return R(!1);fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWnOKCBGTPaXpK7nx6cM4ELazrACRBGyM",{method:"POST",body:JSON.stringify({email:s,password:j,Confirmpassword:o,returnSecureToken:!0,address:h,phone:d,city:u}),headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)return e.json().then((function(e){console.log(e.error.message),b(!1),p(e.error.message)}));C(Object(l.jsx)("h4",{children:"Success!"})),w(!0),e.json().then((function(e){return i.login(e.idToken)})),A.replace("/Shopping-Cart/")}))},children:[Object(l.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(ce.a.Label,{children:"Email address"}),Object(l.jsx)(ce.a.Control,{type:"email",placeholder:"Enter email",required:!0,ref:e}),Object(l.jsx)(ce.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(ce.a.Label,{children:"Password"}),Object(l.jsx)(ce.a.Control,{type:"password",placeholder:"Password",required:!0,ref:t,maxLength:"25",minLength:"6"})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(ce.a.Label,{children:"Confirm Password"}),Object(l.jsx)(ce.a.Control,{type:"password",placeholder:"Password",required:!0,ref:c,maxLength:"25",minLength:"6"})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",children:[Object(l.jsx)(ce.a.Label,{htmlFor:"phone",children:"Phone Number"}),Object(l.jsx)(ce.a.Control,{type:"tel",placeholder:"Phone Number",required:!0,ref:n})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",children:[Object(l.jsx)(ce.a.Label,{children:"City"}),Object(l.jsx)(ce.a.Control,{type:"text",placeholder:"City",name:"city",ref:s})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",children:[Object(l.jsx)(ce.a.Label,{children:"Address"}),Object(l.jsx)(ce.a.Control,{type:"address",placeholder:"Address",name:"address",ref:a})]}),Object(l.jsx)(ce.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(l.jsx)(ce.a.Check,{type:"checkbox",label:"Check me out"})}),Object(l.jsx)(_.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h4",{children:"Or"}),Object(l.jsx)(O.b,{to:"/Login/",children:Object(l.jsx)("span",{children:"Already Have Account"})})]})})},se=c(69),ie=c.n(se),je=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useContext)(S),n=Object(h.g)(),a=Object(r.useState)(!0),s=Object(v.a)(a,2),i=s[0],j=s[1],o=Object(r.useState)(""),d=Object(v.a)(o,2),b=d[0],u=d[1],x=Object(r.useState)(""),m=Object(v.a)(x,2),p=m[0],f=m[1],N=Object(r.useState)(!1),k=Object(v.a)(N,2),C=k[0],I=k[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(g.a,{className:ie.a.LogIn,children:[Object(l.jsx)(te.a,{show:!i,variant:"danger",children:Object(l.jsxs)(te.a.Heading,{children:["ERROR: ",b]})}),Object(l.jsx)(te.a,{show:C,variant:"primary",children:Object(l.jsx)(te.a.Heading,{children:p})}),Object(l.jsxs)(ce.a,{onSubmit:function(r){j(!0),r.preventDefault();var a=e.current.value,s=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWnOKCBGTPaXpK7nx6cM4ELazrACRBGyM",{method:"POST",body:JSON.stringify({email:a,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)return e.json().then((function(e){j(!1),u(e.error.message)}));f(Object(l.jsx)("h4",{children:"Success!"})),I(!0),e.json().then((function(e){return c.login(e.idToken)})),n.replace("/Shopping-Cart/")}))},children:[Object(l.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(ce.a.Label,{children:"Email address"}),Object(l.jsx)(ce.a.Control,{type:"email",placeholder:"Enter email",required:!0,ref:e}),Object(l.jsx)(ce.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(ce.a.Label,{children:"Password"}),Object(l.jsx)(ce.a.Control,{type:"password",placeholder:"Password",required:!0,ref:t,maxLength:"25",minLength:"6"})]}),Object(l.jsx)(_.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h4",{children:"Or"}),Object(l.jsx)(O.b,{to:"/Signup/",children:Object(l.jsx)("span",{children:"Create New Account"})})]})})},oe=c(96),le=c(38),de=c.n(le),be=c.p+"static/media/unnamed.b85de9fc.png";var he=function(){var e=be,t=be,c=be,n=be;return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:de.a.place,children:[Object(l.jsxs)(oe.a,{className:de.a.slider,children:[Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:e||"null",alt:"First slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:t||"null",alt:"Second slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-80",src:c||"null",alt:"Third slide"})})]}),Object(l.jsxs)(oe.a,{className:de.a.slider,children:[Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:n||"null",alt:"First slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:t||"null",alt:"Second slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-80",src:c||"null",alt:"Third slide"})})]}),Object(l.jsxs)(oe.a,{className:de.a.slider,children:[Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:e||"null",alt:"First slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-100",src:t||"null",alt:"Second slide"})}),Object(l.jsx)(oe.a.Item,{children:Object(l.jsx)("img",{className:"d-block w-80",src:c||"null",alt:"Third slide"})})]})]})})};var ue=function(){var e=Object(r.useContext)(S).isLoggedIn;return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(C,{}),Object(l.jsx)(he,{}),Object(l.jsxs)(h.d,{children:[e&&Object(l.jsx)(h.b,{path:"/Shopping-Cart/BookmarkItems",exact:!0,children:Object(l.jsx)(ee,{})}),Object(l.jsx)(h.b,{path:"/",exact:!0,children:Object(l.jsx)(h.a,{to:"/Shopping-Cart/"})}),Object(l.jsx)(h.b,{path:"/Shopping-Cart/",exact:!0,children:Object(l.jsx)(K,{})}),e&&Object(l.jsx)(h.b,{path:"/Shopping-Cart/:CartItems",exact:!0,children:Object(l.jsx)(b,{})}),Object(l.jsx)(h.b,{path:"/CartItems/:productId",exact:!0,children:Object(l.jsx)(A,{})}),Object(l.jsx)(h.b,{path:"/Shopping-Cart/Info/:id",exact:!0,children:Object(l.jsx)(Z,{})}),!e&&Object(l.jsx)(h.b,{path:"/Signup/",exact:!0,children:Object(l.jsx)(ae,{})}),!e&&Object(l.jsx)(h.b,{path:"/Login/",exact:!0,children:Object(l.jsx)(je,{})}),Object(l.jsx)(h.b,{path:"*",children:Object(l.jsx)(h.a,{to:"/Shopping-Cart/"})}),Object(l.jsx)(h.b,{children:Object(l.jsx)("div",{children:"Not Found 404"})})]})]})})};s.a.render(Object(l.jsx)(k,{children:Object(l.jsx)(O.a,{children:Object(l.jsx)(ue,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={main_card:"Products_main_card__1npgY",enter:"Products_enter__KZLKg",card_left:"Products_card_left__2wcFx",card_datails:"Products_card_datails__XRoNg",card_right:"Products_card_right__2qT3x",card_cat:"Products_card_cat__2TvYO",PG:"Products_PG__23Eha",year:"Products_year__3R8va",genre:"Products_genre__1kyOo",time:"Products_time__3qFcr",disc:"Products_disc__q7Ats","social-btn":"Products_social-btn__wrJbg",play_btn:"Products_play_btn__3zvuF","fa-play-circle":"Products_fa-play-circle__37_rT",bounce:"Products_bounce__2ZzDX",products:"Products_products__2_Rwo",container:"Products_container__WzNI9",bookmark:"Products_bookmark__2HVAZ"}}},[[86,1,2]]]);
//# sourceMappingURL=main.8bd45640.chunk.js.map