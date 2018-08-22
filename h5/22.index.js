(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[22],{"184":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10),i=_interopRequireDefault(n(46));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(185);var l=function(e){function AtTabs(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabs);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabs.__proto__||Object.getPrototypeOf(AtTabs)).apply(this,arguments));return e.touchDot=0,e.interval=null,e.time=0,e.isMoving=!1,e.maxIndex=e.props.tabList.length,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabs,r.default.Component),a(AtTabs,[{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onClick.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleTouchStart","value":function handleTouchStart(e){var t=this;this.props.swipeable&&(this.touchDot=e.touches[0].pageX,this.interval=setInterval(function(){t.time++},100))}},{"key":"handleTouchMove","value":function handleTouchMove(e){if(this.props.swipeable){var t=this.props.current,n=e.touches[0].pageX;!this.isMoving&&t+1<this.maxIndex&&n-this.touchDot<=-40&&this.time<10&&(this.isMoving=!0,this.handleClick(t+1)),!this.isMoving&&t-1>=0&&n-this.touchDot>=40&&this.time<10&&(this.isMoving=!0,this.handleClick(t-1))}}},{"key":"handleTouchEnd","value":function handleTouchEnd(){this.props.swipeable&&(clearInterval(this.interval),this.time=0,this.isMoving=!1)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.tabList,a=t.scroll,i=t.current,l=["at-tabs__header"];a&&l.push("at-tabs__header--scroll");var c="transform: translate3d(-"+100*i+"%, 0px, 0px);";return r.default.createElement(o.View,{"className":"at-tabs"},r.default.createElement(o.View,{"className":l},n.map(function(t,n){return r.default.createElement(o.View,{"className":i===n?"at-tabs__item at-tabs__item--active":"at-tabs__item","key":t.title,"onClick":e.handleClick.bind(e,n)},t.title)})),r.default.createElement(o.View,{"className":"at-tabs__body","id":"test","onTouchStart":this.handleTouchStart.bind(this),"onTouchEnd":this.handleTouchEnd.bind(this),"onTouchMove":this.handleTouchMove.bind(this),"style":c},this.props.children))}}]),AtTabs}();l.defaultProps={"current":0,"swipeable":!0,"scroll":!1,"tabList":[],"onClick":function onClick(){}},l.propTypes={"current":i.default.number,"swipeable":i.default.bool,"scroll":i.default.bool,"tabList":i.default.array,"onClick":i.default.func},t.default=l},"185":function(e,t,n){var a=n(186);"string"==typeof a&&(a=[[e.i,a,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},"186":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Mixins\n */\n/* library */\n/**\n * 元素居中定位\n */\n/**\n * @example scss\n *\n * .element {\n *   @include clearfix;\n * }\n *\n * // CSS Output\n * .element::after {\n *   clear: both;\n *   content: '';\n *   display: block;\n * }\n */\n/**\n * 通用的遮罩\n */\n/**\n * Mixes a color with black. It's different from darken()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amount of black to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: shade(#ffbb52, 60%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #664a20;\n *   }\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* Flex Item */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 点击态\n */\n/**\n * 禁止态\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 设置placeholder 颜色\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.at-tabs {\n  overflow: hidden; }\n  .at-tabs__item {\n    position: relative;\n    -webkit-flex: 1;\n            flex: 1;\n    padding: 0.512rem 0.512rem;\n    font-size: 0.59733rem;\n    color: #333;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n    .at-tabs__item::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1PX;\n      background-color: #6190E8;\n      -webkit-transform: scaleX(0);\n              transform: scaleX(0);\n      -webkit-transition: all 0.15s;\n      transition: all 0.15s; }\n    .at-tabs__item--active {\n      color: #6190E8; }\n      .at-tabs__item--active::after {\n        -webkit-transform: scaleX(1);\n                transform: scaleX(1); }\n  .at-tabs__header {\n    position: relative;\n    display: -webkit-flex;\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n    white-space: nowrap;\n    background-color: #FFF;\n    overflow: -moz-scrollbars-none; }\n    .at-tabs__header--scroll {\n      overflow-x: scroll;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap; }\n      .at-tabs__header--scroll .at-tabs__item {\n        display: inline-block;\n        overflow: visible; }\n    .at-tabs__header::-webkit-scrollbar {\n      height: 0 !important;\n      width: 0 !important; }\n  .at-tabs__body {\n    display: block;\n    font-size: 0;\n    white-space: nowrap;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    width: 100%; }\n",""])},"187":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(188);var i=function(e){function AtTabsPane(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabsPane),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabsPane.__proto__||Object.getPrototypeOf(AtTabsPane)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabsPane,r.default.Component),a(AtTabsPane,[{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"tabs-pane"},this.props.children)}}]),AtTabsPane}();t.default=i},"188":function(e,t,n){var a=n(189);"string"==typeof a&&(a=[[e.i,a,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},"189":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".tabs-pane {\n  display: inline-block;\n  width: 100%;\n  white-space: initial;\n  vertical-align: top; }\n",""])},"190":function(e,t,n){var a=n(191);"string"==typeof a&&(a=[[e.i,a,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},"191":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".tab-content {\n  padding: 2.13333rem 1.06667rem;\n  font-size: 0.64rem;\n  text-align: center;\n  background-color: #FAFBFC; }\n",""])},"30":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10),i=_interopRequireDefault(n(184)),l=_interopRequireDefault(n(187)),c=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(190);var s=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0,"current3":0,"current4":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),a(Index,[{"key":"handleClick","value":function handleClick(e,t){this.state[e]=t,this.setState()}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,a=e.current3,s=e.current4,u=[{"title":"标签页1"},{"title":"标签页2"},{"title":"标签页3"}];return r.default.createElement(o.View,{"className":"page"},r.default.createElement(c.default,{"title":"Tabs 标签页"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"等宽标签栏"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(i.default,{"swipeable":!1,"current":t,"tabList":u,"onClick":this.handleClick.bind(this,"current1")},r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容"))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"滚动标签栏"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(i.default,{"swipeable":!1,"scroll":!0,"current":n,"tabList":[{"title":"标签页1"},{"title":"标签页2"},{"title":"标签页3"},{"title":"标签页4"},{"title":"标签页5"},{"title":"标签页6"},{"title":"标签页7"},{"title":"标签页8"},{"title":"标签页9"}],"onClick":this.handleClick.bind(this,"current2")},r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页四的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页五的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页六的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页七的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页八的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页九的内容"))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"滑动切换内容"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(i.default,{"current":a,"tabList":u,"onClick":this.handleClick.bind(this,"current3")},r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")),r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容"))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"禁止内容切换动画"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(i.default,{"current":s,"tabList":u,"onClick":this.handleClick.bind(this,"current4")}),0===s?r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页一的内容")):null,1===s?r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页二的内容")):null,2===s?r.default.createElement(l.default,null,r.default.createElement(o.View,{"className":"tab-content"},"标签页三的内容")):null))))}}]),Index}();t.default=s},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var a=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),o=_interopRequireDefault(n(0)),i=_interopRequireDefault(n(46)),l=n(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(51);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"51":function(e,t,n){var a=n(52);"string"==typeof a&&(a=[[e.i,a,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},"52":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".doc-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem; }\n  .doc-header__title {\n    position: relative;\n    height: 1.92rem;\n    color: #333;\n    font-size: 0.85333rem;\n    font-weight: bold; }\n    .doc-header__title::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      display: inline-block;\n      width: 2.56rem;\n      height: 2PX;\n      border-radius: 1PX;\n      background-color: #6190E8; }\n",""])}}]);