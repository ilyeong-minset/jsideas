(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1727:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SlidesProvider=t.SlidesConsumer=void 0;var r,o=n(552);var a=(0,((r=o)&&r.__esModule?r:{default:r}).default)();t.SlidesConsumer=a.Consumer,t.SlidesProvider=a.Provider},1737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1781);Object.defineProperty(t,"NextButton",{enumerable:!0,get:function(){return r.NextButton}}),Object.defineProperty(t,"PrevButton",{enumerable:!0,get:function(){return r.PrevButton}});var o=n(1782);Object.defineProperty(t,"Slides",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}});var a=n(1786);Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return a.Slide}}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.Body}}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return a.Footer}})},1781:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PrevButton=t.NextButton=void 0;var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1732),l=(o=i)&&o.__esModule?o:{default:o},u=n(218),s=n(1727),c=n(7);var f=t.NextButton=function(t){return e.createElement(s.SlidesConsumer,null,function(n){var r=n.nextSlide;return e.createElement(l.default,a({},t,{variant:"primary",onClick:r}))})};f.displayName="onboarding/slides/_navigation/next-button",f.propTypes=r.omit(u.Button.propTypes,["type","onClick"]);var d=t.PrevButton=function(t){return e.createElement(s.SlidesConsumer,null,function(n){var r=n.prevSlide;return n.slideIndex>0&&e.createElement(u.Button,a({},t,{onClick:r,variant:"minimal",label:(0,c.__)("Back")}))})};d.displayName="onboarding/slides/_navigation/prev-button",d.propTypes=r.omit(u.Button.propTypes,["type","label","children","onClick"])}).call(this,n(1),n(3))},1782:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0});var a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=p(n(1783)),s=p(n(0)),c=n(1727),f=n(558),d=p(n(1785));function p(e){return e&&e.__esModule?e:{default:e}}var y=(i=a=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.prevSlide=function(){t.setState(function(e){var t=e.slideIndex;return{slideIndex:Math.max(t-1,0)}})},t.nextSlide=function(){if(t.state.slideIndex===t.state.slideCount-1)return t.props.onFinish();t.setState(function(e){var t=e.slideIndex,n=e.slideCount;return{slideIndex:Math.min(t+1,n-1)}})},t.state={prevSlide:t.prevSlide,nextSlide:t.nextSlide,slideIndex:0},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),l(n,null,[{key:"getDerivedStateFromProps",value:function(t,n){var o=e.Children.count(t.children);if(o!==n.slideCount)return{slideCount:o,slideIndex:Math.min(n.slideIndex,o-1),onEnterSlide:t.onEnterSlide||r.noop}}}]),l(n,[{key:"_renderSlide",value:function(){return e.Children.toArray(this.props.children)[this.state.slideIndex]}},{key:"render",value:function(){var t=this.props.title;return e.createElement(c.SlidesProvider,{value:this.state},e.createElement("div",{styleName:"slides"},e.createElement("div",null,e.createElement("h4",{styleName:"title"},t),e.createElement(u.default,null)),this._renderSlide()))}}]),n}(),a.displayName="onboarding/slides/_slides",a.propTypes={title:s.default.node,children:s.default.node,onFinish:s.default.func,onEnterSlide:s.default.func},a.defaultProps={onFinish:r.noop,onEnterSlide:r.noop,title:null,children:null},i);(0,f.polyfill)(y),t.default=o(y,d.default)}).call(this,n(1),n(3),n(5))},1783:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(1)),a=n(1727);function i(e){return e&&e.__esModule?e:{default:e}}var l=e(function(e){var t=e.value,n=void 0===t?0:t;return o.default.createElement("div",{styleName:"progress"},o.default.createElement("p",{role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n+"%"}},n,"% complete"))},i(n(1784)).default);l.displayName="onboarding/slides/_progress/progress-bar",l.propTypes={value:r.default.number};var u=function(){return o.default.createElement(a.SlidesConsumer,null,function(e){var t,n,r=e.slideIndex,a=e.slideCount;return o.default.createElement(l,{value:(t=r,n=a,100*(0===n?0:(t+1)/n))})})};u.displayName="onboarding/slides/_progress",u.propTypes={},t.default=u}).call(this,n(5))},1784:function(e,t,n){e.exports={progress:"_progress--progress--3dYri"}},1785:function(e,t,n){e.exports={slides:"_slides--slides--3T5FZ",title:"_slides--title--1gVKX"}},1786:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Slide=t.Footer=t.Body=void 0;var o,a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=f(n(0)),s=n(1727),c=f(n(1787));function f(e){return e&&e.__esModule?e:{default:e}}var d=t.Body=e(function(e){var t=e.children,n=e.className;return r.createElement("div",{styleName:"body",className:n},t)},c.default,{errorWhenNotFound:!1});d.displayName="onboarding/slides/_slide/body";var p=t.Footer=e(function(e){var t=e.children,n=e.className;return r.createElement("div",{styleName:"footer",className:n},t)},c.default,{errorWhenNotFound:!1});p.displayName="onboarding/slides/_slide/footer",d.propTypes=p.propTypes={children:u.default.node};var y=e(c.default)((i=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.onEnterSlide)(e.name)}},{key:"render",value:function(){var e=this.props.children;return r.createElement("div",{styleName:"slide"},e)}}]),t}(),a.displayName="onboarding/slides/_slide/inner-slide",a.propTypes={onEnterSlide:u.default.func.isRequired,name:u.default.string.isRequired,children:u.default.node},o=i))||o,h=t.Slide=function(e){var t=e.children,n=e.name,o=void 0===n?"Slide":n;return r.createElement(s.SlidesConsumer,null,function(e){var n=e.onEnterSlide;return r.createElement(y,{onEnterSlide:n,name:o},t)})};h.displayName="onboarding/slides/_slide",h.propTypes={children:u.default.node,name:u.default.string},t.default=h}).call(this,n(5),n(1))},1787:function(e,t,n){e.exports={slide:"_slide--slide--146nd",body:"_slide--body--2z1vT",footer:"_slide--footer--13p7L"}},1883:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.OtherRadio=t.OtherCheckbox=t.OtherTextInput=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(51),i=c(n(0)),l=n(1753),u=c(n(3141)),s=n(545);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=t.OtherTextInput=(0,s.withProps)({className:u.default["other-field"]})(a.TextInput);function p(t){var n,a;return a=n=function(n){function a(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))),n.state={value:""},f(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),o(a,[{key:"handleInputChange",value:function(e){var t=this.props.onInputChange;t("on"===e?this.state.value:null)}},{key:"handleTextChange",value:function(e){this.props.onTextChange(e),this.setState({value:e})}},{key:"render",value:function(){var n=this,o=this.props.defaultValue,a=this.state.value||o;return e.createElement(t,{checked:!r.isNil(o),onChange:function(e){return n.handleInputChange(e.target.value)}},e.createElement(d,{placeholder:l.SURVEY_TEXTS.OTHER_TEXT_INPUT,value:a,onChange:function(e){return n.handleTextChange(e.target.value)}}))}}]),a}(),n.propTypes={defaultValue:i.default.string,onTextChange:i.default.func,onInputChange:i.default.func},a}(t.OtherCheckbox=p(a.Checkbox)).displayName="survey/choices/other-checkbox",(t.OtherRadio=p(a.Radio)).displayName="survey/choices/other-radio"}).call(this,n(1),n(3))},3137:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.SurveyModal=void 0;var a,i,l,u,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1753),d=n(545),p=w(n(70)),y=n(218),h=w(n(3138)),b=w(n(320)),v=w(n(0)),m=w(n(3139)),_=n(1737),E=n(1727),g=n(7),O=w(n(3153)),S=w(n(224));function w(e){return e&&e.__esModule?e:{default:e}}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var k=function(){return e.createElement(E.SlidesConsumer,null,function(t){var n=t.slideIndex,r=t.slideCount;return e.createElement("h1",{className:O.default["counts-title"]},n+1+" of "+r)})},R=t.SurveyModal=(a=r(O.default,{allowMultiple:!0}),(0,S.default)(i=a((u=l=function(t){function n(){var t,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return r=a=T(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(l))),a.state={isOpen:!0,isFinished:!1,showWelcomeSlide:!0,responses:{}},a.handleOnRequestClose=function(){var e=a.props,t=e.updateSurveyStatus,n=e.track;a.props.updateSurveyStatus({status:status,time_stamp:(new Date).getTime()});var r=a.state.isFinished;n("Survey closed",{finishedSurvey:r}),t(r?{status:f.COMPLETED_SURVEY,time_stamp:(new Date).getTime()}:{status:f.ATTEMPTED_SURVEY,time_stamp:(new Date).getTime()}),a.props.onDismissModal(),a.setState({isOpen:!1})},a.handleFinish=function(){p.default.track("Survey Submission",a.state.responses),a.setState({isFinished:!0})},a.onResponseSelected=function(e,t){var n,r,o;a.setState({responses:s({},a.state.responses,(n={},r=e,o=t,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n))})},a.getResponse=function(e){return o.get(a.state,["responses",e],null)},a.renderQuestions=function(){var t=f.SURVEY_TEXTS.SURVEYS;return o.map(t,function(n,r){return e.createElement(m.default,{key:r,survey:n,isLast:r===t.length-1,onResponseSelected:a.onResponseSelected,response:a.getResponse(n.question)})})},a.renderContent=function(){var t=a.props.track,n=a.state,r=n.isFinished;return n.showWelcomeSlide?e.createElement("div",{styleName:"container"},e.createElement("h1",null,f.SURVEY_TEXTS.WELCOME_SURVEY_TITLE),e.createElement("h2",null,f.SURVEY_TEXTS.WELCOME_SURVEY_SUBTITLE),e.createElement(y.Button,{variant:"primary",label:(0,g.__)("Get started"),onClick:function(){return a.setState({showWelcomeSlide:!1})}})):r?e.createElement("div",{styleName:"container"},e.createElement("img",{src:h.default,alt:(0,g.__)("megaphone")}),e.createElement("span",{styleName:"thank-you-text"},(0,g.__)("Thank you!")),e.createElement(y.Button,{variant:"primary",label:(0,g.__)("Back to my course"),onClick:function(){return a.handleOnRequestClose()}})):e.createElement(_.Slides,{onEnterSlide:function(e){return t("Viewed "+e)},onFinish:a.handleFinish,title:e.createElement(k,null)},a.renderQuestions())},T(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),c(n,[{key:"render",value:function(){var t=this.state.isOpen;return e.createElement(b.default,{bodyOpenClassName:O.default["body-open"],isOpen:t,onRequestClose:this.handleOnRequestClose,styleName:"modal"},this.renderContent())}}]),n}(),l.displayName="survey/survey-modal",l.propTypes={surveyEnabled:v.default.bool.isRequired,surveyStatus:v.default.object.isRequired,updateSurveyStatus:v.default.func,onDismissModal:v.default.func.isRequired,track:v.default.func.isRequired},i=u))||i)||i);t.default=(0,d.branch)(function(e){return!e.surveyEnabled},d.renderNothing)(R)}).call(this,n(1),n(5),n(3))},3138:function(e,t,n){e.exports=n.p+"images/megaphone-a75cb.svg"},3139:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.QuestionSlide=void 0;var o,a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=m(n(3140)),s=m(n(3143)),c=m(n(0)),f=m(n(3145)),d=m(n(3147)),p=m(n(3149)),y=m(n(3151)),h=n(1753),b=n(7),v=m(n(3152));function m(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=t.QuestionSlide=e(v.default)((i=a=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleResposeSelected=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=r.props,n=t.survey.question;(0,t.onResponseSelected)(n,e)},_(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"renderChoices",value:function(){var e=this.props,t=e.survey,n=t.question,o=t.answers,a=t.type,i=t.labels,l=t.range,c=t.categories,f=e.response;switch(a){case h.TYPES.RADIO:return r.createElement(d.default,{answers:o,onResponseSelected:this.handleResposeSelected,response:f});case h.TYPES.CHECKBOX:return r.createElement(s.default,{question:n,answers:o,onResponseSelected:this.handleResposeSelected,response:f});case h.TYPES.RATING:return r.createElement(p.default,{labels:i,range:l,onResponseSelected:this.handleResposeSelected,response:f});case h.TYPES.CATEGORY_RATING:return r.createElement(u.default,{categories:c,labels:i,range:l,onResponseSelected:this.handleResposeSelected,response:f});default:return null}}},{key:"render",value:function(){var e=this.props,t=e.survey,n=e.isLast;return r.createElement(f.default,{nextButtonLabel:n?(0,b.__)("Done"):(0,b.__)("Next")},r.createElement("h1",{styleName:"question-text"},t.question),r.createElement("div",{styleName:"answer-container"},this.renderChoices()))}}]),t}(),a.displayName="survey/question-slide",a.propTypes={survey:y.default.isRequired,isLast:c.default.bool,onResponseSelected:c.default.func,response:c.default.object},a.defaultProps={isLast:!1},o=i))||o;t.default=E}).call(this,n(5),n(1))},3140:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryRankChoices=void 0;var a,i,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(218),f=n(1883),d=b(n(0)),p=n(1753),y=n(7),h=b(n(3142));function b(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=t.CategoryRankChoices=e(h.default,{allowMultiple:!0})((l=i=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleRankSelected=function(e,t){r.props.onResponseSelected(u({},r.props.response,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e)))},v(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),s(t,[{key:"renderCategoryRankChoices",value:function(e){var t=this;if(e===p.SURVEY_TEXTS.OTHER_TEXT_INPUT){var n=this.props.response;return r.createElement("div",{styleName:"other-input-container"},r.createElement("span",{styleName:"other-text"},p.SURVEY_TEXTS.OTHER_TEXT_INPUT,":"),r.createElement(f.OtherTextInput,{value:o.get(n,"other"),placeholder:(0,y.__)("What else is important?"),onChange:function(e){return t.handleRankSelected(e.target.value,"other")}}))}return this.renderRanks(e)}},{key:"renderRanks",value:function(e){var t=this,n=this.props,a=n.range,i=n.response,l=o.get(i,e);return o.map(o.times(a),function(n){var o=(n+1).toString();return r.createElement(c.Button,{key:"choice-"+n,variant:l===o?"primary":"secondary",small:!0,label:o,onClick:function(){return t.handleRankSelected(o,e)}})})}},{key:"renderLabels",value:function(){var e=this.props.labels;return o.map(e,function(e){return r.createElement("span",{key:e,styleName:"label"},e)})}},{key:"render",value:function(){var e=this,t=this.props.categories;return r.createElement("div",{styleName:"container"},o.map(t,function(t){return r.createElement("div",{key:t,styleName:"category-container"},t!==p.SURVEY_TEXTS.OTHER_TEXT_INPUT&&r.createElement("span",{styleName:"category-title"},t),r.createElement("div",{styleName:"rank-container"},e.renderCategoryRankChoices(t)),t!==p.SURVEY_TEXTS.OTHER_TEXT_INPUT&&r.createElement("div",{styleName:"label-container"},e.renderLabels()))}))}}]),t}(),i.displayName="survey/choices/category-rank-choices",i.propTypes={categories:d.default.arrayOf(d.default.string).isRequired,range:d.default.number.isRequired,labels:d.default.arrayOf(d.default.string).isRequired,onResponseSelected:d.default.func.isRequired,response:d.default.objectOf(d.default.string)},a=l))||a;t.default=m}).call(this,n(5),n(1),n(3))},3141:function(e,t,n){e.exports={"other-field":"other-field--other-field--2RKl8"}},3142:function(e,t,n){e.exports={container:"category-rank-choices--container--27jgi","category-title":"category-rank-choices--category-title--1JOsR","rank-container":"category-rank-choices--rank-container--3ZhG0","label-container":"category-rank-choices--label-container--3GIVZ",label:"category-rank-choices--label--Sa4C-","other-input-container":"category-rank-choices--other-input-container--MrU1i","other-text":"category-rank-choices--other-text--19_nC","category-container":"category-rank-choices--category-container--1Wrdk"}},3143:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxChoices=void 0;var a,i,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=h(n(563)),f=n(1883),d=h(n(0)),p=n(1753),y=h(n(3144));function h(e){return e&&e.__esModule?e:{default:e}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=t.CheckboxChoices=e(y.default)((l=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),s(t,[{key:"handleCheckboxSelected",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.props,a=r.onResponseSelected,i=r.response,l=this.getNoneIndex(i);if(o.isEmpty(i)||e===p.SURVEY_TEXTS.NONE)a(b({},t,e));else if(i[t]!==e||n){if(-1!==l)return void a(b({},t,e));a(u({},i,b({},t,e)))}else a(o.omit(i,t))}},{key:"getNoneIndex",value:function(e){return o.indexOf(o.values(e),p.SURVEY_TEXTS.NONE)}},{key:"render",value:function(){var e=this,t=this.props,n=t.answers,a=t.response;return r.createElement("div",{styleName:"checkbox-container"},r.createElement("ul",{styleName:"answer-choices"},o.map(n,function(t,n){if(t===p.SURVEY_TEXTS.OTHER_TEXT_INPUT){var i=o.get(a,n);return r.createElement("li",{key:t},r.createElement(f.OtherCheckbox,{defaultValue:i,onTextChange:function(t){return e.handleCheckboxSelected(t,n,!0)},onInputChange:function(t){return e.handleCheckboxSelected(t,n)}}))}return r.createElement("li",{key:t},r.createElement(c.default,{checked:o.includes(a,t),label:t,onChange:function(){return e.handleCheckboxSelected(t,n)}}))})))}}]),t}(),i.displayName="survey/choices/checkbox-choices",i.propTypes={answers:d.default.arrayOf(d.default.string).isRequired,onResponseSelected:d.default.func.isRequired,response:d.default.object.isRequired},a=l))||a;t.default=v}).call(this,n(5),n(1),n(3))},3144:function(e,t,n){e.exports={"checkbox-container":"checkbox-choices--checkbox-container--1Vu_9","answer-choices":"checkbox-choices--answer-choices--Udo97 shared--answer-choices--2UYId"}},3145:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0});var o,a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1737),s=f(n(0)),c=n(7);function f(e){return e&&e.__esModule?e:{default:e}}var d=e(f(n(3146)).default)((i=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.nextButtonLabel;return r.createElement(u.Slide,null,r.createElement(u.Body,{styleName:"body"},r.createElement("div",{styleName:"content"},t)),r.createElement(u.Footer,null,r.createElement("div",{styleName:"footer-buttons"},r.createElement("div",null,r.createElement(u.PrevButton,null)),r.createElement(u.NextButton,{label:n}))))}}]),t}(),a.displayName="survey/question",a.propTypes={children:s.default.node,nextButtonLabel:s.default.string},a.defaultProps={get nextButtonLabel(){return(0,c.__)("Next")}},o=i))||o;t.default=d}).call(this,n(5),n(1))},3146:function(e,t,n){e.exports={content:"question--content--2wFoI","footer-buttons":"question--footer-buttons--18vjA",body:"question--body--k4d6E"}},3147:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RadioChoices=void 0;var a,i,l,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1883),c=h(n(0)),f=n(51),d=n(1753),p=n(7),y=h(n(3148));function h(e){return e&&e.__esModule?e:{default:e}}var b=t.RadioChoices=e(y.default)((l=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),u(t,[{key:"handleSelectAnswer",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.props,r=n.onResponseSelected;return e===n.response&&t?r():r(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.answers,a=t.response;return r.createElement("ul",{styleName:"answer-choices"},o.map(n,function(t,i){if(o.isEqual(d.SURVEY_TEXTS.OTHER_TEXT_INPUT,t)){var l=o.includes(n,a)?null:a;return r.createElement("li",{key:i},r.createElement(s.OtherRadio,{defaultValue:l,onInputChange:function(t){return e.handleSelectAnswer(t)},onTextChange:function(t){return e.handleSelectAnswer(t,!1)}}))}return r.createElement("li",{key:i},r.createElement(f.Radio,{checked:a===t,label:(0,p.__)(t),onChange:function(){return e.handleSelectAnswer(t)}}))}))}}]),t}(),i.displayName="survey/radio-choices",i.propTypes={answers:c.default.arrayOf(c.default.string).isRequired,onResponseSelected:c.default.func,response:c.default.object},a=l))||a;t.default=b}).call(this,n(5),n(1),n(3))},3148:function(e,t,n){e.exports={"choice-container":"radio-choices--choice-container--_Hx8z","answer-choices":"radio-choices--answer-choices--KXB11 shared--answer-choices--2UYId"}},3149:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RankChoices=void 0;var a,i,l,u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(218),f=p(n(0)),d=p(n(3150));function p(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=t.RankChoices=e(d.default,{allowMultiple:!0})((l=i=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleRankSelected=function(e){r.props.onResponseSelected(e)},y(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),s(t,[{key:"renderRankChoices",value:function(){var e=this,t=this.props,n=t.range,a=t.response;return o.map(o.times(n),function(t){var n=(t+1).toString();return r.createElement(c.Button,{key:"choice-"+t,variant:a===n?"primary":"secondary",small:!0,label:n,onClick:function(){return e.handleRankSelected(n)}})})}},{key:"renderLabels",value:function(){var e=this.props.labels;return o.map(e,function(e){return r.createElement("span",{key:e,styleName:"label"},e)})}},{key:"render",value:function(){var e=u(this.props.labels,2),t=e[0],n=e[1];return r.createElement("div",{styleName:"container"},r.createElement("div",{styleName:"mobile-label"},r.createElement("span",{styleName:"label"},t)),r.createElement("div",{styleName:"rank-container"},this.renderRankChoices()),r.createElement("div",{styleName:"mobile-label"},r.createElement("span",{styleName:"label"},n)),r.createElement("div",{styleName:"label-container"},this.renderLabels()))}}]),t}(),i.displayName="survey/choices/rank-choices",i.propTypes={range:f.default.number.isRequired,labels:f.default.arrayOf(f.default.string).isRequired,onResponseSelected:f.default.func,response:f.default.object},a=l))||a;t.default=h}).call(this,n(5),n(1),n(3))},3150:function(e,t,n){e.exports={container:"rank-choices--container--2jhbj","label-container":"rank-choices--label-container--2ZwSK",label:"rank-choices--label--2L_SK","question-container":"rank-choices--question-container--L3R89","rank-container":"rank-choices--rank-container--3DZrI","mobile-label":"rank-choices--mobile-label--28FTi"}},3151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default.shape({question:a.default.string.isRequired,type:a.default.string.isRequired,answers:a.default.arrayOf(a.default.string),range:a.default.number,hasInput:a.default.bool})},3152:function(e,t,n){e.exports={"question-container":"question-slide--question-container--SqGeU","question-text":"question-slide--question-text--1rXoT","answer-container":"question-slide--answer-container--1-dV4"}},3153:function(e,t,n){e.exports={"body-open":"survey-modal--body-open--1M0hR",modal:"survey-modal--modal--1pPev",footer:"survey-modal--footer--2dsEa",container:"survey-modal--container--1uRoB","icon-container":"survey-modal--icon-container--38-v3","thank-you-text":"survey-modal--thank-you-text--2PpAq","counts-title":"survey-modal--counts-title--2bBbK","modal-sidebar":"survey-modal--modal-sidebar--gtlSc"}}}]);
//# sourceMappingURL=survey-modal.b774a.js.map