(this.webpackJsonpriccardo=this.webpackJsonpriccardo||[]).push([[0],{79:function(e,a,i){},86:function(e,a,i){},87:function(e,a,i){"use strict";i.r(a);var t=i(1),c=i(0),n=i.n(c),r=i(24),s=i.n(r),o=(i(75),i(78),i(62)),d=(i(79),i.p+"static/media/logo.85aa02c7.png"),l=i(106),m=i(99),j=i(109),b=i(110),p=i(102),h=i(67),u=i(9),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(c.useState)(e),i=Object(u.a)(a,2),t=i[0],n=i[1],r=function(){n(!t)};return[t,r]},z=Object(c.createContext)();function x(e){var a=g(!1),i=Object(u.a)(a,2),c=i[0],n=i[1];return Object(t.jsx)(z.Provider,{value:{show:c,toggleShow:n},children:e.children})}var O=Object(c.createContext)();function k(e){var a=Object(c.useState)(),i=Object(u.a)(a,2),n=i[0],r=i[1];return Object(t.jsx)(O.Provider,{value:{newPizza:n,setNewPizza:r},children:e.children})}var f=Object(c.createContext)();function w(e){var a=Object(c.useState)(),i=Object(u.a)(a,2),n=i[0],r=i[1];return Object(t.jsx)(f.Provider,{value:{newLunch:n,setNewLunch:r},children:e.children})}var v=Object(c.createContext)();function y(e){var a=Object(c.useState)([]),i=Object(u.a)(a,2),n=i[0],r=i[1];return Object(t.jsx)(v.Provider,{value:{cart:n,setCart:r},children:e.children})}var C=i(103),I={logo:{width:"200px",padding:"15px"},navbar:{marginBottom:"40px",padding:"0",borderBottom:"1px solid lightgrey"}};var P=Object(C.a)(I)((function(e){var a=Object(c.useContext)(v).cart,i=Object(c.useContext)(z),n=i.show,r=i.toggleShow,s=Object(c.useContext)(O).newPizza,o=Object(c.useContext)(f).newLunch,u=e.classes;return Object(t.jsx)(l.a,{className:u.navbar,bg:"light",variant:"light",expand:"lg",sticky:"top",collapseOnSelect:!0,children:Object(t.jsxs)(m.a,{style:{position:"relative"},fluid:"lg",children:[(o||s)&&Object(t.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",right:"31px",top:"90px"},children:Object(t.jsx)(j.a,{show:n,onClose:r,delay:3e3,autohide:!0,children:Object(t.jsx)(j.a.Header,{children:Object(t.jsxs)("span",{style:{color:"black",fontSize:"15px"},children:[s&&"+1 ".concat(s.name),o&&"+1 ".concat(o.name)]})})})}),Object(t.jsx)(l.a.Brand,{href:"#home",children:Object(t.jsx)("img",{className:u.logo,srcSet:d,alt:"riccardo-logo"})}),Object(t.jsx)(l.a.Toggle,{className:"mr-2","aria-controls":"basic-navbar-nav"}),Object(t.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(t.jsxs)(b.a,{className:"mr-auto",children:[Object(t.jsxs)(p.a,{title:"Menu",id:"basic-nav-dropdown",children:[Object(t.jsx)(p.a.Item,{href:"#pizzas",children:"Pizza"}),Object(t.jsx)(p.a.Item,{href:"#zestawy",children:"Zestawy obiadowe"}),Object(t.jsx)(p.a.Item,{href:"#makarony",children:"Makarony"}),Object(t.jsx)(p.a.Divider,{}),Object(t.jsx)(p.a.Item,{href:"#salatki",children:"Sa\u0142atki"}),Object(t.jsx)(p.a.Item,{href:"#nalesniki",children:"Nale\u015bniki"}),Object(t.jsx)(p.a.Item,{href:"#sosy",children:"Sosy"}),Object(t.jsx)(p.a.Item,{href:"#startery",children:"Startery"}),Object(t.jsx)(p.a.Item,{href:"#Napoje",children:"Napoje"})]}),Object(t.jsx)(b.a.Link,{href:"#about",children:"O nas"}),Object(t.jsx)(b.a.Link,{href:"#promocje",children:"Promocje"}),Object(t.jsx)(b.a.Link,{href:"#contact",children:"Kontakt"})]}),Object(t.jsx)(b.a,{children:Object(t.jsxs)(h.a,{onClick:function(){return console.log(a)},className:"mr-3 ml-2",style:{maxWidth:"120px"},variant:"dark",children:["Koszyk ",0===a.length?"":"| ".concat(a.length," ")]})})]})]})})})),N=i(12),R=i(101),S=i(107),F=i.p+"static/media/office.3cc651db.jpg",B=i.p+"static/media/students.eb855f97.jpg",L=i.p+"static/media/family.942d2709.jpg",H=i.p+"static/media/lunch.b6c1b6bd.jpg",U={pizzas:[{id:1,name:"Margherita",price:{"20cm":9.5,"28cm":16.9,"50cm":32.5},ingredients:["sos","ser","oregano"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:2,name:"Massima",price:{"20cm":14.5,"28cm":17.9,"50cm":34.5},ingredients:["sos","ser","pieczarki","cebula"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:3,name:"Capricciosa",price:{"20cm":14.5,"28cm":20.9,"50cm":40.5},ingredients:["sos","ser","szynka","pieczarki"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:4,name:"Bambino",price:{"20cm":15.5,"28cm":20.9,"50cm":40.5},ingredients:["sos","ser","szynka","ananas"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:5,name:"Salami",price:{"20cm":15.5,"28cm":20.9,"50cm":41.9},ingredients:["sos","ser","salami","papryka","og\xf3rek"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:6,name:"Tono",price:{"20cm":16.5,"28cm":20.9,"50cm":42.5},ingredients:["sos","ser","tu\u0144czyk","czerwona cebula","feta"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:7,name:"Gamberetto",price:{"20cm":16.5,"28cm":22.9,"50cm":43.5},ingredients:["sos","ser","szynka","krewetki","ananas"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:8,name:"Wegetariana",price:{"20cm":16.5,"28cm":21.9,"50cm":43.5},ingredients:["sos","ser","pieczarki","papryka","oliwki","ruccola","kukurydza","pomidory"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:9,name:"Wiosenna",price:{"20cm":16.5,"28cm":21.9,"50cm":43.5},ingredients:["sos","ser","broku\u0142y","cukinia","krewetki","czosnek"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:10,name:"Broccoli",price:{"20cm":16.5,"28cm":21.9,"50cm":43.5},ingredients:["sos","ser","broku\u0142y","pomidor","feta","parmezan"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:11,name:"Pepperone \ud83c\udf36",price:{"20cm":16.5,"28cm":22.5,"50cm":44.5},ingredients:["sos","ser","bekon","papryka jalape\xf1o","pieczarki","cebula"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:12,name:"Forte \ud83c\udf36",price:{"20cm":16.5,"28cm":23.5,"50cm":44.5},ingredients:["sos","ser","salami","kie\u0142basa pepperoni","papryka jalape\xf1o"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:13,name:"Wiejska \ud83c\udf36",price:{"20cm":16.5,"28cm":23.5,"50cm":44.5},ingredients:["sos","ser","kie\u0142basa","cebula","pieczarki","tabasco"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:14,name:"Saporito",price:{"20cm":16.5,"28cm":23.5,"50cm":46.5},ingredients:["sos","ser","szynka","kurczak","pieczarki","og\xf3rek","oregano"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:15,name:"Szpinakowa",price:{"20cm":16.5,"28cm":23.5,"50cm":46.5},ingredients:["sos","ser","szpinak","kurczak","pomidory suszone","parmezan"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:16,name:"Frutti di Mare",price:{"20cm":16.5,"28cm":23.5,"50cm":49.5},ingredients:["sos","ser","owoce morze","kapary","czosnek","oliwki"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:17,name:"Jalape\xf1o \ud83c\udf36",price:{"20cm":17.5,"28cm":23.5,"50cm":49.5},ingredients:["sos","ser","szynka","bekon","papryka jalape\xf1o","czosnek"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:18,name:"Calzone (Pierog)",size:"28cm",dough:"\u015brednie",price:23.5,ingredients:["sos","ser","kurczak","szynka","pieczarki"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:19,name:"Miscela",price:{"20cm":16.5,"28cm":23.5,"50cm":45.5},ingredients:["sos","ser","pieczarki","szynka","bekon","oliwki"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:20,name:"Salmone",price:{"20cm":16.5,"28cm":23.5,"50cm":46.9},ingredients:["sos","ser","\u0142oso\u015b w\u0119dzony","ruccola","parmezan"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:21,name:"Ricco",price:{"20cm":16.5,"28cm":23.5,"50cm":46.9},ingredients:["sos","ser","bekon","kie\u0142basa","pieczarki","kukurydza","cebula"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:22,name:"Fantazja",price:{"20cm":18.5,"28cm":25.5,"50cm":50.9},ingredients:["sos","ser"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:23,name:"Riccardo",price:{"20cm":17.5,"28cm":25.5,"50cm":50.9},ingredients:["sos","ser","kurczak","kurki","cebula","ser ple\u015bniowy"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:24,name:"Wo\u0142owina",price:{"20cm":17.5,"28cm":25.5,"50cm":50.9},ingredients:["sos","ser","wo\u0142owina","feta","czerwona cebula","og\xf3rek kiszony"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"},{id:25,name:"Bekonowe Jaja",price:{"20cm":16.5,"28cm":21.9,"50cm":43.9},ingredients:["sos","ser","bekon","szczypior","jaja"],image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"}],pizzasIngredients:[{name:"ananas",price:2},{name:"bekon",price:3},{name:"broku\u0142y",price:2},{name:"cebula",price:2},{name:"czerwona cebula",price:2},{name:"cukinia",price:2},{name:"czosnek",price:2},{name:"feta",price:3},{name:"kukurydza",price:2},{name:"kapary",price:2},{name:"kie\u0142basa",price:3},{name:"kurczak",price:3},{name:"krewetki",price:6},{name:"\u0142oso\u015b w\u0119dzony",price:6},{name:"og\xf3rek",price:2},{name:"oliwki",price:2},{name:"owoce morza",price:6},{name:"pieczarki",price:2},{name:"papryka",price:2},{name:"pomidory",price:2},{name:"papryka jalape\xf1o",price:2},{name:"pomidory suszone",price:2},{name:"parmezan",price:3},{name:"ruccola",price:2},{name:"ser",price:3},{name:"szynka",price:3},{name:"salami",price:3},{name:"ser ple\u015bniowy",price:3},{name:"tu\u0144czyk",price:6}],lunches:[{id:2,name:"Schab z grilowanym boczkiem",price:24.5,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:3,name:"Pier\u015b z grilowanym boczkiem",price:24.5,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:4,name:"Kark\xf3wka z grilla",price:23.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:5,name:"Dorsz (filet)",price:28.5,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:6,name:"Schabowy",price:23.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:7,name:"Pier\u015b z kurczaka",price:23.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:8,name:"Szwajcar (pier\u015b lub schab z serem)",price:24.9,image:H,meat:"schab",first:"ziemniaki opiekane",second:"duszona kapusta"},{id:9,name:"Zrazy wieprzowe",price:25.5,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:10,name:"Pier\u015b hawajska",price:24.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:11,name:"Placek po w\u0119giersku \ud83c\udf36",price:24.9,image:H,second:"duszona kapusta"},{id:12,name:"Schab ch\u0142opa",price:24.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:13,name:"De volaille",price:24.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:14,name:"Pier\u015b z pieczarkami i serem",price:24.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:15,name:"Warzywa zasma\u017cane z kurczakiem",price:20.9,image:H,first:"ziemniaki opiekane"},{id:16,name:"Pier\u015b z jajkiem sadzonym",price:23.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"},{id:17,name:"Pier\u015b w sosie \u015bmietanowo-serowym",price:24.9,image:H,first:"ziemniaki opiekane",second:"duszona kapusta"}]},M=new Intl.NumberFormat("en-IN",{minimumFractionDigits:2}),A=i(100),W=i(68),D=i(111),T={checkout:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},checkoutPrice:{fontSize:"20px",margin:"0",fontWeight:"700"},CardBody:{height:"135px"}};var E=Object(C.a)(T)((function(e){var a=e.classes;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h3",{className:"title pt-5",id:"pizzas",children:"Pizzy"}),Object(t.jsx)(A.a,{children:U.pizzas.map((function(i){return Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)(W.a,{sm:6,md:6,lg:4,xl:3,children:Object(t.jsxs)(D.a,{className:"mb-3",children:[Object(t.jsx)(D.a.Img,{className:"pl-3",variant:"top",src:i.image,alt:i.name}),Object(t.jsxs)(D.a.Body,{className:a.CardBody,children:[Object(t.jsxs)(D.a.Title,{children:[i.id,". ",i.name]}),Object(t.jsx)(D.a.Subtitle,{className:"mb-2 text-muted",children:22!==i.id?i.ingredients.map((function(e,a){return Object(t.jsx)("span",{children:i.ingredients[a+1]?e+", ":e},e)})):"sos, ser, +5 w\u0142asnych sk\u0142adnik\xf3w do wyboru"})]}),Object(t.jsx)(D.a.Footer,{children:Object(t.jsxs)("div",{className:a.checkout,children:[Object(t.jsxs)("p",{className:a.checkoutPrice,children:["od"," ",18===i.id?M.format(i.price):M.format(i.price["20cm"]),"pln"]}),Object(t.jsx)(h.a,{onClick:function(){return e.handlePizzaClick(i)},variant:"outline-dark",children:"Wybierz"})]})})]})})},i.name)}))})]})})),G={checkout:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},checkoutPrice:{fontSize:"20px",margin:"0",fontWeight:"700"},CardBody:{height:"100px"}};var Z=Object(C.a)(G)((function(e){var a=e.classes;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h3",{className:"title pt-5",id:"zestawy",children:"Zestawy obiadowe"}),Object(t.jsx)(A.a,{children:U.lunches.map((function(i){return Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)(W.a,{sm:6,md:6,lg:4,xl:3,children:Object(t.jsxs)(D.a,{className:"mb-3",children:[Object(t.jsx)(D.a.Img,{variant:"top",src:i.image,alt:i.name}),Object(t.jsx)(D.a.Body,{className:a.CardBody,children:Object(t.jsxs)(D.a.Title,{children:[i.id,". ",i.name]})}),Object(t.jsx)(D.a.Footer,{children:Object(t.jsxs)("div",{className:a.checkout,children:[Object(t.jsxs)("p",{className:a.checkoutPrice,children:[M.format(i.price),"pln"]}),Object(t.jsx)(h.a,{variant:"outline-dark",onClick:function(){return function(a){e.handleLunchModalOpen(a)}(i)},children:"Wybierz"})]})})]})})},i.name)}))})]})})),J=i(40),K=i(33),V=i(11),Y=i(104),q=i(105),Q={modalLunchImage:{width:"100%",alignSelf:"center",justifyContent:"center",borderRadius:"1rem"},modalPrice:{fontSize:"28px",fontWeight:"700"},icon:{marginTop:"-4px"},checkout:{display:"flex",justifyContent:"space-between"}};var X=Object(C.a)(Q)((function(e){var a=Object(c.useState)({}),i=Object(u.a)(a,2),n=i[0],r=i[1],s=Object(c.useContext)(v),o=s.cart,d=s.setCart,l=Object(c.useContext)(z).toggleShow,m=e.classes,j=e.lunch,b=e.onHide,p=function(e){r(Object(V.a)(Object(V.a)({},n),{},Object(K.a)({},e.target.name,e.target.value)))};return Object(t.jsx)(Y.a,Object(V.a)(Object(V.a)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,size:"lg",children:Object(t.jsx)(Y.a.Body,{children:Object(t.jsxs)(A.a,{children:[Object(t.jsx)(W.a,{lg:7,style:{display:"flex"},children:Object(t.jsx)("img",{className:m.modalLunchImage,src:j.image,alt:"obiad"})}),Object(t.jsxs)(W.a,{lg:5,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(t.jsxs)(q.a,{children:[Object(t.jsx)("h4",{children:j.name}),8===j.id&&Object(t.jsxs)(q.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(t.jsx)(q.a.Label,{children:"zodzaj mi\u0119sa:"}),Object(t.jsxs)(q.a.Control,{name:"meat",as:"select",onChange:p,children:[Object(t.jsx)("option",{value:"schab",children:"schab"}),Object(t.jsx)("option",{value:"piers",children:"pier\u015b"})]})]}),11!==j.id&&Object(t.jsxs)(q.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(t.jsx)(q.a.Label,{children:"dodatek do dania:"}),Object(t.jsxs)(q.a.Control,{name:"first",as:"select",onChange:p,children:[Object(t.jsx)("option",{value:"ziemniaki opiekane",children:"ziemniaki opiekane"}),Object(t.jsx)("option",{value:"ziemniaki",children:"ziemniaki"}),Object(t.jsx)("option",{value:"kasza",children:"kasza"}),Object(t.jsx)("option",{value:"ry\u017c",children:"ry\u017c"}),Object(t.jsx)("option",{value:"frytki",children:"frytki"})]})]}),15!==j.id&&Object(t.jsxs)(q.a.Group,{controlId:"exampleForm.ControlSelect2",children:[Object(t.jsx)(q.a.Label,{children:"dodatek warzywny:"}),Object(t.jsxs)(q.a.Control,{name:"second",as:"select",onChange:p,children:[Object(t.jsx)("option",{value:"duszona kapusta",children:"duszona kapusta"}),Object(t.jsx)("option",{value:"marchewka na ciep\u0142o",children:"marchewka na ciep\u0142o"}),Object(t.jsx)("option",{value:"buraczki na ciep\u0142o",children:"buraczki na ciep\u0142o"}),Object(t.jsx)("option",{value:"zestaw sur\xf3wek",children:"zestaw sur\xf3wek"})]})]})]}),Object(t.jsxs)("div",{className:m.checkout,children:[Object(t.jsxs)(h.a,{variant:"outline-secondary",onClick:b,children:[Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})}),"Wro\u0107"]}),Object(t.jsxs)("span",{className:m.modalPrice,children:[M.format(j.price),"z\u0142"]}),Object(t.jsxs)(h.a,{variant:"success",onClick:function(){return function(e){b();var a=Object(V.a)(Object(V.a)({},e),n);d([].concat(Object(J.a)(o),[a])),r({}),l()}(j)},type:"button",children:["Dodaj"," ",Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart2 ".concat(m.icon),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})})]})]})]})]})})}))})),$=Object(c.createContext)();function _(e){var a=Object(c.useState)(),i=Object(u.a)(a,2),n=i[0],r=i[1];return Object(t.jsx)($.Provider,{value:{currIngredients:n,setCurrIngredients:r},children:e.children})}var ee={root:{textAlign:"center"},group:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.5rem"},input:{position:"absolute",opacity:"0",zIndex:"-1","&:checked + label":{paddingLeft:"1em","&:before":{top:"0",width:" 100%",height:"2em",background:"lightgrey"}},"&:disabled + label":{color:"lightgrey","&:before":{border:"1px solid lightgrey"}}},label:{position:"relative",marginRight:"1em",paddingLeft:"2em",paddingRight:"1em",lineHeight:"2",cursor:"pointer",zIndex:"1","-webkit-transition":".25s all ease","-o-transition":".25s all ease",transition:".25s all ease","&:before":{boxSizing:"border-box",content:"' '",position:"absolute",top:"0.3em",left:"0",display:"block",width:"1.4em",height:"1.4em",border:"1px solid grey",borderRadius:"1em",zIndex:"-1","-webkit-transition":".25s all ease","-o-transition":".25s all ease",transition:".25s all ease"}}};var ae=Object(C.a)(ee)((function(e){var a=e.size,i=e.dough,c=e.newPizza,n=e.handleSizeChange,r=e.handleDoughChange,s=e.classes;return Object(t.jsxs)("div",{className:s.root,children:[Object(t.jsx)("h6",{children:"Rozmiar:"}),Object(t.jsxs)("div",{className:s.group,onChange:n,children:[Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-size",id:"rb1",checked:"20cm"===a,value:"20cm",disabled:"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb1",children:"20cm"}),Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-size",id:"rb2",value:"28cm",checked:"28cm"===a||"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb2",children:"28cm"}),Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-size",id:"rb3",value:"50cm",checked:"50cm"===a,disabled:"grube"===i||"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb3",children:"50cm"})]}),Object(t.jsx)("h6",{children:"Ciasto:"}),Object(t.jsxs)("div",{className:s.group,onChange:r,children:[Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-dough",id:"rb4",value:"cie\u0144kie",checked:"cie\u0144kie"===i,disabled:"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb4",children:"cie\u0144kie"}),Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-dough",id:"rb5",value:"\u015brednie",checked:"\u015brednie"===i||"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb5",children:"\u015brednie"}),Object(t.jsx)("input",{className:s.input,type:"radio",name:"rb-dough",id:"rb6",value:"grube",checked:"grube"===i,disabled:"50cm"===a||"Calzone (Pierog)"===c.name,readOnly:!0}),Object(t.jsx)("label",{className:s.label,htmlFor:"rb6",children:"grube"})]})]})})),ie=i(108),te={modalIngredients:{padding:"0",display:"flex",flexWrap:"wrap"},modalIngredientsIngredient:{display:"block",cursor:"pointer",marginRight:"4px"},modalIngredientsIngredientName:{textDecoration:"underline dotted #000"},modalIngredientsIngredientNameDeleted:{textDecoration:"line-through"},icons:{color:"grey",fontSize:"12px",marginLeft:"4px",marginTop:"-1.4px"}};var ce=Object(C.a)(te)((function(e){var a=Object(c.useContext)(O).newPizza,i=Object(c.useContext)($).currIngredients,r=e.extras,s=e.handleIngredientClick,o=e.handleExtraIngredientInputClick,d=e.handleExtraIngredientClick,l=e.classes;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("ul",{className:l.modalIngredients,children:a.ingredients.map((function(e,c){return Object(t.jsxs)("li",{value:e,className:l.modalIngredientsIngredient,onClick:function(){return s(e)},children:[i.includes(e)?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{className:l.modalIngredientsIngredientName,children:e}),Object(t.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-dash-circle ".concat(l.icons),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(t.jsx)("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(t.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})]})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{className:l.modalIngredientsIngredientNameDeleted,children:e}),Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-return-left ".concat(l.icons),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"})})]}),a.ingredients[c+1]&&","]},Object(ie.a)())}))}),r.length>0&&Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)("h6",{children:"Dodatki:"}),Object(t.jsx)("ul",{className:l.modalIngredients,children:r.map((function(e,a){return Object(t.jsxs)("li",{className:l.modalIngredientsIngredient,onClick:function(){return d(e)},children:[Object(t.jsx)("span",{className:l.modalIngredientsIngredientName,children:e.name}),Object(t.jsx)("span",{children:"+(".concat(e.price,"z\u0142)")}),Object(t.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-dash-circle ".concat(l.icons),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(t.jsx)("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(t.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})]}),r[a+1]&&","]},Object(ie.a)())}))})]}),Object(t.jsx)(q.a,{children:Object(t.jsx)(q.a.Group,{children:Object(t.jsxs)(q.a.Control,{onChange:o,size:"sm",as:"select",disabled:r.length>=5,children:[Object(t.jsx)("option",{children:"Dodaj sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsxs)("option",{value:e.name,children:[e.name," (+",e.price,"pln)"]},a)}))]})})})]})}));var ne=Object(C.a)(te)((function(e){var a=e.currIngredients,i=e.newPizza,c=e.handleIngredientClick,n=e.handleFantazjaInputClick,r=e.classes;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("ul",{className:r.modalIngredients,children:i.ingredients.map((function(e,n){return Object(t.jsxs)("li",{value:e,className:r.modalIngredientsIngredient,onClick:function(){return c(e)},children:[a.includes(e)?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{className:r.modalIngredientsIngredientName,children:e}),Object(t.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-dash-circle ".concat(r.icons),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(t.jsx)("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(t.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})]})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("span",{className:r.modalIngredientsIngredientNameDeleted,children:e}),Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-return-left ".concat(r.icons),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"})})]}),i.ingredients[n+1]&&","]},Object(ie.a)())}))}),Object(t.jsx)(q.a,{children:Object(t.jsxs)(q.a.Group,{children:[Object(t.jsxs)(q.a.Control,{name:"form1",className:"mt-1",onChange:n,size:"sm",as:"select",children:[Object(t.jsx)("option",{children:"Wybierz sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsx)("option",{value:e.name,children:e.name},a)}))]}),Object(t.jsxs)(q.a.Control,{name:"form2",className:"mt-1",onChange:n,size:"sm",as:"select",children:[Object(t.jsx)("option",{children:"Wybierz sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsx)("option",{value:e.name,children:e.name},a)}))]}),Object(t.jsxs)(q.a.Control,{name:"form3",className:"mt-1",onChange:n,size:"sm",as:"select",children:[Object(t.jsx)("option",{children:"Wybierz sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsx)("option",{value:e.name,children:e.name},a)}))]}),Object(t.jsxs)(q.a.Control,{name:"form4",className:"mt-1",onChange:n,size:"sm",as:"select",children:[Object(t.jsx)("option",{children:"Wybierz sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsx)("option",{value:e.name,children:e.name},a)}))]}),Object(t.jsxs)(q.a.Control,{name:"form5",className:"mt-1",onChange:n,size:"sm",as:"select",children:[Object(t.jsx)("option",{children:"Wybierz sk\u0142adnik"}),U.pizzasIngredients.map((function(e,a){return Object(t.jsx)("option",{value:e.name,children:e.name},a)}))]})]})})]})})),re={modalPizzaImage:{width:"100%",alignSelf:"center",justifyContent:"center"},modalPrice:{fontSize:"28px",fontWeight:"700"},icon:{marginTop:"-4px"},checkout:{display:"flex",justifyContent:"space-between"}};var se=Object(C.a)(re)((function(e){var a=Object(c.useState)("20cm"),i=Object(u.a)(a,2),n=i[0],r=i[1],s=Object(c.useState)("cie\u0144kie"),o=Object(u.a)(s,2),d=o[0],l=o[1],m=Object(c.useState)([]),j=Object(u.a)(m,2),b=j[0],p=j[1],g=Object(c.useState)(0),x=Object(u.a)(g,2),k=x[0],f=x[1],w=Object(c.useState)({}),y=Object(u.a)(w,2),C=y[0],I=y[1],P=Object(c.useContext)(z).toggleShow,N=Object(c.useContext)(v),R=N.cart,S=N.setCart,F=Object(c.useContext)($),B=F.currIngredients,L=F.setCurrIngredients,H=Object(c.useContext)(O).newPizza,D=e.classes,T=function(e){B.includes(e)?L(B.filter((function(a){return a!==e}))):L([].concat(Object(J.a)(B),[e]))},E=function(e){p(b.filter((function(a){return a.id!==e.id}))),f(k-e.price)},G=function(){e.onHide(),r("20cm"),l("cie\u0144kie"),p([]),I({}),f(0),L([])};return Object(t.jsx)(Y.a,Object(V.a)(Object(V.a)({},e),{},{onHide:G,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(t.jsx)(Y.a.Body,{children:Object(t.jsxs)(A.a,{children:[Object(t.jsx)(W.a,{lg:7,children:Object(t.jsx)("img",{className:D.modalPizzaImage,src:H.image,alt:"pizza"})}),Object(t.jsxs)(W.a,{lg:5,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(t.jsxs)("div",{children:[Object(t.jsx)(Y.a.Title,{children:H.name}),Object(t.jsx)("p",{children:18===H.id?"28cm, \u015brednie":"".concat(n,", ").concat(d)}),22===H.id?Object(t.jsx)(ne,{extras:b,newPizza:H,currIngredients:B,handleIngredientClick:T,handleFantazjaInputClick:function(e){if("Wybierz sk\u0142adnik"!==e.target.value){var a=U.pizzasIngredients.find((function(a){return a.name===e.target.value}));a=Object(V.a)(Object(V.a)({},a),{},{id:Object(ie.a)()}),I(Object(V.a)(Object(V.a)({},C),{},Object(K.a)({},e.target.name,a.name)))}else I(Object(V.a)(Object(V.a)({},C),{},Object(K.a)({},e.target.name,"")))},handleExtraIngredientClick:E}):Object(t.jsx)(ce,{extras:b,handleIngredientClick:T,handleExtraIngredientInputClick:function(e){if("Dodaj sk\u0142adnik"!==e.target.value){var a=U.pizzasIngredients.find((function(a){return a.name===e.target.value}));a=Object(V.a)(Object(V.a)({},a),{},{id:Object(ie.a)()}),p([].concat(Object(J.a)(b),[a])),f(k+a.price),e.target.value="Dodaj sk\u0142adnik"}},handleExtraIngredientClick:E}),Object(t.jsx)(ae,{size:n,dough:d,newPizza:H,handleSizeChange:function(e){r(e.target.value)},handleDoughChange:function(e){l(e.target.value)}})]}),Object(t.jsxs)("div",{className:D.checkout,children:[Object(t.jsxs)(h.a,{variant:"outline-secondary",onClick:G,className:"mr-3",children:[Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})}),"Wro\u0107"]}),Object(t.jsxs)("span",{className:D.modalPrice,children:[18===H.id?M.format(H.price+k):"20cm"===n||"28cm"===n||"50cm"===n?M.format(H.price[n]+k):null,"z\u0142"]}),Object(t.jsxs)(h.a,{variant:"success",onClick:function(){var a={};a=18===H.id?Object(V.a)(Object(V.a)({},H),{},{extras:b}):Object(V.a)(Object(V.a)({},H),{},{ingredients:B,size:n,dough:d,extras:22===H.id?Object.values(C):b,price:"20cm"===n&&H.price["20cm"]+k||"28cm"===n&&H.price["28cm"]+k||"50cm"===n&&H.price["50cm"]+k}),S([].concat(Object(J.a)(R),[a])),e.onHide(),r("20cm"),l("cie\u0144kie"),p([]),f(0),L([]),I({}),P()},type:"button",children:["Dodaj"," ",Object(t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart2 ".concat(D.icon),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})})]})]})]})]})})}))})),oe={popularCard:{cursor:"pointer",padding:"10px",borderRadius:"1rem",boxShadow:"rgba(6, 5, 50, 0.15) 0px 4px 22px -6px",marginBottom:"2rem","& p":{fontWeight:"700"}},cardBodyPopular:{alignSelf:"center",padding:"0"},cardTitlePopular:{fontSize:"18px",marginBottom:"0.4rem",fontWeight:"400"}},de=[1,3,11,14];var le=Object(C.a)(oe)((function(e){var a=e.handlePizzaClick,i=e.classes;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h3",{className:"mt-5 mb-4",children:"Popularne:"}),Object(t.jsx)(A.a,{children:U.pizzas.map((function(e){return de.includes(e.id)?Object(t.jsx)(W.a,{xs:6,sm:4,md:3,children:Object(t.jsx)(D.a,{className:i.popularCard,onClick:function(){return a(e)},children:Object(t.jsxs)(A.a,{noGutters:"true",children:[Object(t.jsx)(W.a,{md:5,children:Object(t.jsx)(D.a.Img,{src:e.image,alt:"pizza"})}),Object(t.jsx)(W.a,{md:7,style:{display:"flex"},children:Object(t.jsxs)(D.a.Body,{className:i.cardBodyPopular,children:[Object(t.jsx)(D.a.Title,{className:i.cardTitlePopular,children:e.name}),Object(t.jsxs)(D.a.Text,{children:["Od ",M.format(e.price["20cm"]),"z\u0142"]})]})})]})})},Object(ie.a)()):null}))})]})}));var me=function(e){var a=Object(c.useState)(!1),i=Object(u.a)(a,2),n=i[0],r=i[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),d=o[0],l=o[1],m=Object(c.useContext)(f),j=m.newLunch,b=m.setNewLunch,p=Object(c.useContext)(O),h=p.newPizza,g=p.setNewPizza,x=Object(c.useContext)($).setCurrIngredients,k=Object(c.useContext)(z),w=k.show,v=k.toggleShow,y=function(e){w&&v(),b(),x(e.ingredients),g(e),l(!0)};return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(S.a,{children:[Object(t.jsxs)(S.a.Item,{interval:5e3,children:[Object(t.jsx)("img",{className:"d-block w-100",src:F,alt:"Rabaty dla firm"}),Object(t.jsxs)(S.a.Caption,{children:[Object(t.jsx)("h3",{className:"mb-0",children:"Rabaty dla firm"}),Object(t.jsx)("p",{children:"-5% na wszystkie dania. Przy wi\u0119kszych zam\xf3wieniach negocjujemy ceny."})]})]}),Object(t.jsxs)(S.a.Item,{interval:5e3,children:[Object(t.jsx)("img",{className:"d-block w-100",src:B,alt:"Studenci jedz\u0105 taniej"}),Object(t.jsxs)(S.a.Caption,{children:[Object(t.jsx)("h3",{children:"Studenci jedz\u0105 taniej"}),Object(t.jsx)("p",{children:"-5% na wszystkie dania"})]})]}),Object(t.jsxs)(S.a.Item,{interval:5e3,children:[Object(t.jsx)("img",{className:"d-block w-100",src:L,alt:"Rodzinne obiadki"}),Object(t.jsxs)(S.a.Caption,{children:[Object(t.jsx)("h3",{children:"Rodzinne obiadki"}),Object(t.jsx)("p",{children:"-5% przy zam\xf3wieniu powy\u017cej 70 z\u0142 (w lokalu)"})]})]})]}),Object(t.jsx)(le,{handlePizzaClick:y}),Object(t.jsx)(E,{handlePizzaClick:y}),Object(t.jsx)(Z,{handleLunchModalOpen:function(e){w&&v(),g(),b(e),r(!0)}}),h&&Object(t.jsx)(se,{show:d,onHide:function(){return l(!1)}}),j&&Object(t.jsx)(X,{lunch:j,show:n,onHide:function(){return r(!1)}})]})};var je=function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"O nas"}),Object(t.jsxs)("p",{children:[Object(t.jsx)("b",{children:"PIZZERIA & RESTAURANT RICCARDO"})," znajduje si\u0119 na Oruni G\xf3rnej przy Placu Czerwona Torebka w Gda\u0144sku. Riccardo tworz\u0105 osoby kreatywne, z wieloletnim do\u015bwiadczeniem, jak r\xf3wnie\u017c osoby m\u0142ode, otwarte, pe\u0142ne optymizmu i zaanga\u017cowania. Naszym celem by\u0142o stworzenie miejsca nowego, o prawdziwie wyj\u0105tkowym klimacie, do kt\xf3rego ch\u0119tnie si\u0119 powraca, kt\xf3re niech\u0119tnie si\u0119 opuszcza. Ciep\u0142e wn\u0119trze jak i stworzona przez nas atmosfera pozwalaj\u0105 na pe\u0142en relaks i chwil\u0119 zapomnienia.Ka\u017cdy odnajdzie tu co\u015b dla siebie, zar\xf3wno doro\u015bli, m\u0142odzie\u017c, jak i rodzice z dzie\u0107mi. Proponujemy szeroki wyb\xf3r kuchni polskiej i europejskiej. SERDECZNIE ZAPRASZAMY!"]})]})};var be=function(e){return Object(t.jsxs)(N.d,{children:[Object(t.jsx)(N.b,{exact:!0,path:"/riccardo",render:function(){return Object(t.jsx)(me,{})}}),Object(t.jsx)(N.b,{exact:!0,path:"/riccardo/about",render:function(){return Object(t.jsx)(je,{})}}),Object(t.jsx)(N.b,{exact:!0,path:"/riccardo/promocje",render:function(){return Object(t.jsxs)("h1",{children:["This page is in progress"," ",Object(t.jsx)(R.a,{animation:"grow",variant:"warning"})]})}}),Object(t.jsx)(N.b,{exact:!0,path:"/riccardo/contact",render:function(){return Object(t.jsxs)("h1",{children:["This page is in progress ",Object(t.jsx)(R.a,{animation:"grow",variant:"dark"})]})}}),Object(t.jsx)(N.a,{to:"/riccardo"})]})};i(86);var pe=function(){return Object(t.jsx)(y,{children:Object(t.jsx)(x,{children:Object(t.jsx)(k,{children:Object(t.jsx)(w,{children:Object(t.jsx)(_,{children:Object(t.jsxs)("div",{className:"App",id:"home",children:[Object(t.jsx)(P,{}),Object(t.jsx)(m.a,{fluid:"lg",children:Object(t.jsx)(be,{})})]})})})})})})},he=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,112)).then((function(a){var i=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;i(e),t(e),c(e),n(e),r(e)}))};s.a.render(Object(t.jsx)(o.a,{children:Object(t.jsx)(pe,{})}),document.getElementById("root")),he()}},[[87,1,2]]]);
//# sourceMappingURL=main.da5df217.chunk.js.map