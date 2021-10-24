(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{41:function(n,e,t){},42:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(16),c=t.n(i),a=(t(41),t(13)),d=t(15),l=t(12),u=t(5),s=t(4),f=t(22);t(42);function p(){var n=Object(u.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n  -webkit-print-color-adjust: exact !important;   /* Chrome, Safari, Edge */\n  color-adjust: exact !important;                 /*Firefox*/\n}\n\n\n    *, *:before, *:after {\n    }\n\n    \n\n    body {\n        font-family: "Josefin Sans", sans-serif;\n        line-height: 1.5;\n        background-color: ',";\n        min-height: 100vh;\n        overflow: none;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    li {\n        list-style: none;\n    }\n\n    input:focus,\n    input:active,\n    button:focus,\n    button:active {\n        outline: none;\n        border: none;\n    }\n\n\n\n    .emoji-mart-scroll {\n        border-bottom: 0;\n        margin-bottom: 6px;\n      }\n      \n      .emoji-mart-scroll + .emoji-mart-bar {\n        display: none;\n      }\n\n      @media print\n        {    \n\n            .no-print, .no-print *\n            {\n                display: none !important;\n            }\n        }\n"]);return p=function(){return n},n}var h=Object(s.b)(p(),(function(n){return n.theme.mainBackgroundColor})),b={mainBackgroundColor:"hsl(0, 0%, 98%)",todoBackgroundColor:"hsl(0, 0%, 100%)",mainBackground:"url(".concat("/focus/images/bg-desktop-light.jpg",")"),mobileBackground:"url(".concat("/focus/images/bg-mobile-light.jpg",")"),themeChanger:"url(".concat("/focus/images/icon-moon.svg",")"),headerColor:"hsl(0, 0%, 100%)",optionsColor:"hsl(236, 9%, 61%)",optionsHover:"hsl(236, 9%, 35%)",optionsActive:"hsl(220, 98%, 61%)",todoTextColor:"hsl(235, 19%, 35%)",todoTextLineThrough:"hsl(236, 9%, 61%)",shadowColor:"hsl(236, 33%, 92%)",borderColor:"hsl(236, 33%, 92%)"};"url(".concat("/focus/images/bg-desktop-dark.jpg",")"),"url(".concat("/focus/images/bg-mobile-dark.jpg",")"),"url(".concat("/focus/images/icon-sun.svg",")");function m(){var n=Object(u.a)(["\n  background-color: ",";\n  \n  color: ","\n \n  padding: ",";\n  grid-gap: 1em;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) 20px 20px;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 2px dotted hsl(236deg 3% 81%);\n\n  font-size: ",";\n\n  .emoji {\n    vertical-align: sub;\n      margin-left: 3px;\n      margin-right: 3px;\n\n      height: ",";\n      width: ",";\n  }\n\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n    -o-transition: all 0.3s;\n       transition: all 0.3s;\n\n\n  \n  input {\n\n    min-width: 150px;\n   \n    @media print { \n      display: none !important;\n    }\n\n    font: inherit;\n    background: inherit;\n    \n    color: inherit;\n    border: none;\n    \n\n    \n    text-decoration: ",";\n  }\n\n\n  @media (max-width: 650px) {\n    \n  }\n"]);return m=function(){return n},n}function g(){var n=Object(u.a)(["\n\n  position: relative;\n  height: 1.3em;\n  width: 0.8em;\n\n  label {\n    border: 1px solid ","\n    border-radius: 25%;\n    border-width: ","\n    cursor: pointer;\n    height: 1.2em;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 1.2em;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  label:hover {\n    border-color2: ",';\n  }\n\n  label img {\n    opacity: 0;\n    width: 55%;\n  }\n\n  input[type="checkbox"] {\n    visibility: hidden;\n  }\n\n  input[type="checkbox"]:checked + label {\n    background2: linear-gradient(120deg, #57ddff, #c058f3);\n    border2: none;\n  }\n\n  \n  input[type="checkbox"] + label span {\n    display: none;\n  }\n  \n  input[type="checkbox"]:checked + label span {\n    margin-top: 0.2em;\n    display: block;\n\n  }\n\n  input[type="checkbox"]:checked + label img {\n    opacity: 1;\n  }\n\n']);return g=function(){return n},n}var j=s.c.div(g(),(function(n){return n.index<3?"rgb(255, 105, 105);":n.index<6?"rgb(171 116 0);":"rgb(71 89 131);"}),(function(n){return n.index<3?"0.1em;":(n.index,"0.12em;")}),(function(n){return n.theme.optionsHover})),x=s.c.li(m(),(function(n){return n.theme.todoBackgroundColor}),(function(n){return n.index<3?"rgb(255, 105, 105);":n.index<6?"rgb(171 116 0);":"rgb(71 89 131);"}),(function(n){return n.index<3?"0.7em 0.7em 0.7em 1em":n.index<6?"0.7em 0.7em 0.7em 1.6em":"0.8em 0.7em 0.8em 2.0em"}),(function(n){return n.index<3?"30px":n.index<6?"22px":"18px"}),(function(n){return n.index<3?"30px":n.index<6?"22px":"18px"}),(function(n){return n.index<3?"30px":n.index<6?"22px":"18px"}),(function(n){return n.done&&"line-through"})),v=(t(45),t(34)),O=t(2);function y(){var n=Object(u.a)(["\n\nwidth: 0;\nright: 400px;\nz-index: 1000;\nposition: absolute;\nheight: 0;\n\n.wrapper {\n    width: 360px;\n}\n\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n@media print { display: none !important; }\n\ncolor: black;\n-webkit-filter: grayscale(100%);\nfilter: grayscale(100%);\n\nheight: 1.5em;\nwidth: 1.5em;\n\ndisplay: flex;\nalign-items: center;\n\nimg {\n    height: 20px;\n    cursor: pointer;\n\n}\n"]);return w=function(){return n},n}var k=s.c.div(w()),C=s.c.div(y()),T=function(n){Object(o.useEffect)((function(){a()}),[n.refresh]);var e=r.a.useState(!1),t=Object(l.a)(e,2),i=t[0],c=t[1],a=function(){c(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)(k,{onClick:function(){c(!i)},children:[" ",Object(O.jsx)("img",{src:"/focus/images/emoticon-30-xxl.png",alt:""})]}),i?Object(O.jsx)(C,{children:Object(O.jsx)("div",{className:"wrapper",onMouseLeave:a,children:Object(O.jsx)(v.a,{onSelect:n.addEmoji,showPreview:!1,autoFocus:!1})})}):null]})};function S(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 1em;\n    grid-gap: 1em;\n    display: grid;\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1.5em;\n    border-radius: 0.3em;\n\n    input {\n        font: inherit;\n        background: inherit;\n        border: none;\n        color: ",";\n  }\n\n  @media(max-width: 650px) {\n    font-size: 0.8rem;\n  }\n\n  @media print\n  { \n  display: none !important;\n\n  }\n"]);return S=function(){return n},n}function I(){var n=Object(u.a)(["\n    visibility: hidden;\n    display: none;\n"]);return I=function(){return n},n}var B=s.c.button(I()),E=s.c.form(S(),(function(n){return n.theme.todoBackgroundColor}),(function(n){return n.theme.todoTextColor})),F=function(n){var e=r.a.createRef(),t=r.a.createRef(),i=Object(o.useState)(!1),c=Object(l.a)(i,2),a=c[0],d=c[1];return Object(O.jsxs)(E,{onSubmit:function(o){var r,i;o.preventDefault();var c=(null===e||void 0===e||null===(r=e.current)||void 0===r?void 0:r.value)||"";if(""!==c){var a={key:Date.now().toString(),title:c,done:(null===t||void 0===t||null===(i=t.current)||void 0===i?void 0:i.checked)||!1,newIndex:-1};n.addTodo(a),o.currentTarget.reset()}},onMouseLeave:function(){d(!a)},children:[Object(O.jsxs)(j,{index:-1,children:[Object(O.jsx)("input",{type:"checkbox",name:"done",id:"done",ref:t}),Object(O.jsx)("label",{htmlFor:"done",children:Object(O.jsx)("img",{src:"/focus/images/icon-check.svg",alt:""})})]}),Object(O.jsx)("input",{type:"text",name:"todo",id:"todo",ref:e,"data-testid":"todo-input"}),Object(O.jsx)(T,{addEmoji:function(n){(null===e||void 0===e?void 0:e.current)&&(e.current.value+=n.native,e.current.focus())},refresh:a}),Object(O.jsx)(B,{type:"submit"})]})},z=t(30);function A(){var n=Object(u.a)(["\n\n    display: none;\n  \n\n@media print\n{ \n    \n    display: inline-block;\n    width: auto;\n\n    overflow: hidden;\n\n}\n"]);return A=function(){return n},n}var L=s.c.span(A()),P=function(n){return Object(O.jsx)(L,{dangerouslySetInnerHTML:{__html:z.a.parse(n.value,{folder:"svg",ext:".svg",size:35})}})};function D(){var n=Object(u.a)(["\n\n  @media print { \n      display: none !important;\n    }\n\n  border: none;\n  background: inherit;\n  position: relative;\n  height: 1.5em;\n  width: 1.5em;\n  cursor: pointer;\n"]);return D=function(){return n},n}var H=s.c.button(D()),M=function(n,e){var t,i,c=r.a.createRef(),d=function(e){var t=Object(a.a)({},n.todo);"checkbox"===e.target.type?t.done=e.target.checked:"title"===e.target.name&&(t.title=e.target.value),n.changeTodo&&n.changeTodo(t)},u=Object(o.useState)(!1),s=Object(l.a)(u,2),f=s[0],p=s[1];return Object(O.jsxs)(x,{done:n.todo.done,index:n.index,onMouseLeave:function(){p(!f)},children:[Object(O.jsxs)(j,{index:n.index,children:[Object(O.jsx)("input",{type:"checkbox",name:n.todo.key,id:n.todo.key,checked:n.todo.done,"data-testid":"todo-checkbox",onChange:d}),Object(O.jsx)("label",{htmlFor:n.todo.key,children:Object(O.jsx)("span",{children:"\u2713"})})]}),Object(O.jsx)("input",{type:"text",ref:c,name:"title",id:"todo","data-testid":"todo-title",value:n.todo.title,onChange:d,style:{maxWidth:.7*(null===(t=n.todo)||void 0===t||null===(i=t.title)||void 0===i?void 0:i.length)+"em"}}),Object(O.jsx)(P,{value:n.todo.title}),Object(O.jsx)(T,{addEmoji:function(e){var t=Object(a.a)({},n.todo);t.title+=e.native,n.changeTodo&&n.changeTodo(t),c.current&&c.current.focus()},refresh:f}),Object(O.jsx)(H,{"data-testid":"cancel-todo",onClick:function(){n.deleteTodo&&n.deleteTodo(n.todo)},children:Object(O.jsx)("img",{src:"images/icon-cross.svg",alt:"cancel"})})]})},R=t(31),J=t(32),N=t(36),_=t(35);function U(){var n=Object(u.a)(["\n\n  background-color: inherit;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n\n  &:hover {\n  color: ",";\n  }\n\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n\n    font-weight: bold;\n    label {\n        cursor: pointer;\n    }\n\n    label:hover {\n        color: ",";\n    }\n\n    input:checked + label {\n        color: ",';\n    }\n\n    input[type="radio"] {\n        display: none;\n    }\n']);return W=function(){return n},n}function q(){var n=Object(u.a)(["\n\n@media print\n{   \n    display: none !important;\n}\n\n  background-color: ",";\n  color: ",";\n  /* font-size: 0.8rem; */\n  padding: 1em;\n  border-bottom-right-radius: 0.3em;\n  border-bottom-left-radius: 0.3em;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  box-shadow: 10px 10px 20px ",";\n\n  & > * {\n      font-size: 0.8rem;\n  }\n\n  & > *:last-child {\n      text-align: right;\n  }\n\n  form {\n      ul {\n        display: flex;\n        justify-content: space-around;\n      }\n  }\n\n  @media (max-width: 650px) {\n      grid-template-columns: repeat(2, 1fr);\n      padding: 0;\n      background-color: ",";\n      box-shadow: none;\n\n      & > * {\n          background-color: ",";\n          padding: 1em;\n      }\n\n      form {\n          grid-column: 1 / -1;\n          margin-top: 1.5em;\n          border-radius: 0.3em;\n          box-shadow: 0 0 2em ",";\n      }\n\n      & > *:first-child {\n          border-bottom-left-radius: 0.3em;\n          height: 100%;\n          box-sizing: border-box;\n      }\n\n      & > *:last-child {\n          grid-row: 1;\n          grid-column: 2;\n          border-bottom-right-radius: 0.3em;\n      }\n  }\n"]);return q=function(){return n},n}var G=s.c.ul(q(),(function(n){return n.theme.todoBackgroundColor}),(function(n){return n.theme.optionsColor}),(function(n){return n.theme.shadowColor}),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.todoBackgroundColor}),(function(n){return n.theme.shadowColor})),K=s.c.li(W(),(function(n){return n.theme.optionsHover}),(function(n){return n.theme.optionsActive})),Q=s.c.button(U(),(function(n){return n.theme.optionsHover})),V=function(n){Object(N.a)(t,n);var e=Object(_.a)(t);function t(){var n;Object(R.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).handleChange=function(e){n.props.changeFilter({status:"".concat(e.target.id)})},n}return Object(J.a)(t,[{key:"render",value:function(){var n=this,e=this.props.todos.reduce((function(n,e){return e.done?n:n+1}),0);return Object(O.jsxs)(G,{children:[Object(O.jsxs)("li",{children:["".concat(e)," items left!"]}),Object(O.jsx)("form",{onChange:this.handleChange,children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)(K,{children:[Object(O.jsx)("input",{type:"radio",defaultChecked:"all"===this.props.filter.status,name:"filter",id:"all",value:"All"}),Object(O.jsx)("label",{htmlFor:"all",children:"All"})]}),Object(O.jsxs)(K,{children:[Object(O.jsx)("input",{type:"radio",defaultChecked:"active"===this.props.filter.status,name:"filter",id:"active",value:"Active"}),Object(O.jsx)("label",{htmlFor:"active",children:"Active"})]}),Object(O.jsxs)(K,{children:[Object(O.jsx)("input",{type:"radio",defaultChecked:"completed"===this.props.filter.status,name:"filter",id:"completed",value:"completed"}),Object(O.jsx)("label",{htmlFor:"completed",children:"Completed"})]})]})}),Object(O.jsx)("li",{children:Object(O.jsx)(Q,{onClick:function(){return n.props.deleteTodos()},"data-testid":"clear-completed",children:"Clear completed"})})]})}}]),t}(r.a.Component);function X(){var n=Object(u.a)(["\n\n  @media print { display: none !important; }\n    \n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n\n    h1 {\n        color: ",";\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 2rem;\n        letter-spacing: 0.3em;\n        margin: 1em 0;\n    }\n\n    button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        align-self: center;\n\n        height: 30px;\n\n        img { \n            height: 30px;\n            margin-right: 5px;\n        }\n\n        span {\n            border-bottom: dotted 1px #f6f6ff;\n            color: #f6f6ff;\n            font-weight: bold;\n        }\n\n    }\n\n    .theme-changer {\n        border: none;\n        background: transparent;\n        cursor: pointer;\n    }\n\n    /* img {\n        width: 100%;\n    } */\n"]);return X=function(){return n},n}var Y=s.c.div(X(),(function(n){return n.theme.headerColor})),Z=function(n){return Object(O.jsxs)(Y,{className:"header",children:[Object(O.jsx)("h1",{children:"Print your tasks"}),Object(O.jsxs)("button",{className:"theme-changer",onClick:function(){window.print()},children:[Object(O.jsx)("img",{alt:"theme-changer",src:"./logo192.png"}),Object(O.jsx)("span",{children:"Print"})]})]})},$=function(){try{return window.self!==window.top}catch(n){return!0}},nn=function(n,e){var t=Object(o.useState)((function(){if($())return e;console.log("not iniframe");var t=window.localStorage.getItem(n);return null!==t?JSON.parse(t):e})),r=Object(l.a)(t,2),i=r[0],c=r[1];return Object(o.useEffect)((function(){$()||window.localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,c,function(){return localStorage.removeItem(n)}]};function en(){var n=Object(u.a)(["\n\n@media print\n{    \n    display: none !important;\n}\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1.5em 0;\n    color: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n\n@media print { display: none !important; }\n\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  height: 30vh;\n  background: "," center center/cover;\n\n  @media (max-width: 650px) {\n      content: ",";\n      max-width: 100vw;\n  }\n"]);return tn=function(){return n},n}function on(){var n=Object(u.a)(["\n\n    box-shadow: 10px 10px 20px ",";\n    div:first-child li{\n      border-top-left-radius: 0.3em;\n      border-top-right-radius: 0.3em;\n    }\n\n    @media (max-width: 650px) {\n        box-shadow: none;\n    }\n"]);return on=function(){return n},n}function rn(){var n=Object(u.a)(["\n    max-width: 800px;\n    position: relative;\n    margin: auto;\n\n    @media (max-width: 650px) {\n        padding: 0 2rem;\n        top: 1.5rem;\n    }\n"]);return rn=function(){return n},n}var cn=s.c.div(rn()),an=s.c.ul(on(),(function(n){return n.theme.shadowColor})),dn=s.c.div(tn(),(function(n){return n.theme.mainBackground}),(function(n){return n.theme.mobileBackground})),ln=s.c.footer(en(),(function(n){return n.theme.optionsColor})),un=function(n){var e=nn("todos",[]),t=Object(l.a)(e,2),r=t[0],i=t[1],c=nn("filter",{status:"all"}),u=Object(l.a)(c,2),p=u[0],m=u[1],g={filter:p,currentTheme:b};Object(o.useEffect)((function(){var n=[];(function(){try{return window.self!==window.top}catch(n){return!0}})()&&(window.addEventListener("message",(function(e){"object"===typeof e.data&&"sendTasks"===e.data.call&&(e.data.value.forEach((function(e,t){var o={key:Date.now().toString()+t.toString(),title:e.title,done:e.done,newIndex:t};n.push(o)})),i(n))})),window.parent.postMessage({call:"AppIsReady"},"*"))}),[i]);var j=function(n){var e=Object(d.a)(r),t=e.findIndex((function(e){return e.key===n.key}));e[t]=n,i(e)},x=function(n){var e=Object(d.a)(r),t=e.findIndex((function(e){return e.key===n.key}));e.splice(t,1),e.forEach((function(n,e){n.newIndex=e})),i(e)},v=function(){switch(g.filter.status){case"active":return r.filter((function(n){return!1===n.done}));case"completed":return r.filter((function(n){return!0===n.done}));default:return r}},y=function(n,e){return n.newIndex>=0?n.newIndex:e};return Object(O.jsxs)(s.a,{theme:g.currentTheme,children:[Object(O.jsx)(h,{theme:g.currentTheme}),Object(O.jsx)(dn,{}),Object(O.jsxs)(cn,{children:[Object(O.jsx)(Z,{}),Object(O.jsx)(F,{addTodo:function(n){var e=Object(d.a)(r);e.push(n),i(e)}}),Object(O.jsx)(f.a,{onDragEnd:function(n){if(n.destination){var e=Object(d.a)(r),t=e.splice(n.source.index,1),o=Object(l.a)(t,1)[0];e.splice(n.destination.index,0,o),e.forEach((function(n,e){return n.newIndex=e})),i(e)}},onDragUpdate:function(n,e){var t,o=Object(d.a)(r),c=o.map((function(n,e){return e}));c.splice(n.source.index,1),c.splice((null===(t=n.destination)||void 0===t?void 0:t.index)||0,0,n.source.index),o.forEach((function(n,e){n.newIndex=c.indexOf(e)})),i(o)},children:Object(O.jsx)(f.c,{droppableId:"todos",children:function(n,e){return Object(O.jsxs)(an,Object(a.a)(Object(a.a)({},n.droppableProps),{},{ref:n.innerRef,children:[v().map((function(n,e){return Object(O.jsx)(f.b,{draggableId:n.key.toString(),index:e,children:function(t,o){return Object(O.jsx)("div",Object(a.a)(Object(a.a)(Object(a.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(O.jsx)(M,{index:y(n,e),todo:n,changeTodo:j,deleteTodo:x})}))}},n.key)})),n.placeholder]}))}})}),Object(O.jsx)(V,{filter:g.filter,changeFilter:function(n){m(n)},todos:r,deleteTodos:function(){var n=Object(d.a)(r).filter((function(n){return!1===n.done}));i(n)}}),Object(O.jsx)(ln,{children:Object(O.jsx)("p",{children:"Drag and drop to reorder list"})})]})]})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(un,{})}),document.getElementById("root")),sn()}},[[52,1,2]]]);
//# sourceMappingURL=main.d87b186f.chunk.js.map