(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(1),c=n(2),u=n(4),s=n(3);n(12),n(13),n(14);function d(e){var t=e.unread?r.a.createElement("div",{className:"unread_count"},e.unread):null;return r.a.createElement("div",{className:"messages"},e.name,t)}var m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={datetime:new Date},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({datetime:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.datetime.toLocaleString())}}]),n}(r.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),console.log("props in constructor",e),(a=t.call(this,e)).handleButtonClick=function(){console.log("props in handleButtonClick",a.props),console.log("state in handleButtonClick",a.state);var e=a.state.count+1;a.setState({count:e})},a.state={count:0},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The current count: ",this.state.count),r.a.createElement("button",{onClick:this.handleButtonClick},"Add 1"))}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),console.log("props in constructor",e),(a=t.call(this,e)).handleWorldButtonClick=function(){console.log("props in handleWorldButtonClick",a.props),console.log("state in handleWorldButtonClick",a.state),a.setState({who:"World"})},a.handleFriendButtonClick=function(){console.log("props in handleWorldButtonClick",a.props),console.log("state in handleWorldButtonClick",a.state),a.setState({who:"Friend"})},a.handleReactButtonClick=function(){console.log("props in handleWorldButtonClick",a.props),console.log("state in handleWorldButtonClick",a.state),a.setState({who:"React"})},a.state={who:"World"},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"hello-div"},r.a.createElement("p",null,"Hello ",this.state.who),r.a.createElement("button",{onClick:this.handleWorldButtonClick},"World"),r.a.createElement("button",{onClick:this.handleFriendButtonClick},"Friend"),r.a.createElement("button",{onClick:this.handleReactButtonClick},"React"))}}]),n}(r.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.interval=setInterval((function(){e.setState({count:e.state.count+1})}),1e3)}},{key:"componentWillUnmount",value:function(){console.log("componentDidUnMount"),clearInterval(this.interval)}},{key:"renderDisplay",value:function(){var e=this.state.count;return e>=8?(clearInterval(this.interval),"BOOM!!!!"):e%2===0?"tick":"tock"}},{key:"render",value:function(){return r.a.createElement("div",{className:"CountdownBomb"},this.renderDisplay())}}]),n}(r.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={chamber:null,spinningTheChamber:!1},e.handleClick=function(){e.setState({spinningTheChamber:!0}),e.timeout=setTimeout((function(){var t=Math.ceil(8*Math.random());e.setState({chamber:t,spinningTheChamber:!1})}),2e3)},e}return Object(c.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"renderDisplay",value:function(){var e=this.state,t=e.chamber,n=e.spinningTheChamber,a=this.props.bulletInChamber;return n?"Spinning the chamber and pulling the trigger! ...":t===a?"BANG!!!!!":"SAFE for now..."}},{key:"render",value:function(){return r.a.createElement("div",{className:"RouletteGun"},r.a.createElement("p",null,this.renderDisplay()),r.a.createElement("button",{onClick:this.handleClick},"Pull the trigger!"))}}]),n}(a.Component);b.defaultProps={bulletInChamber:8};var f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentTabIndex:0},e}return Object(c.a)(n,[{key:"handleButtonClick",value:function(e){console.log(this.props.tabs),console.log("button clicked!",{index:e}),this.setState({currentTabIndex:e})}},{key:"renderButtons",value:function(){var e=this;return this.props.tabs.map((function(t,n){return r.a.createElement("button",{key:n,onClick:function(){return e.handleButtonClick(n)}},t.name)}))}},{key:"renderContent",value:function(){var e=this.props.tabs[this.state.currentTabIndex];return r.a.createElement("div",{className:"content"},e.content)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderButtons(),!!this.props.tabs.length&&this.renderContent())}}]),n}(r.a.Component);f.defaultProps={tabs:[]};var k=f,C=[{name:"First tab",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."},{name:"Second tab",content:"Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Third tab",content:"Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."}],g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"My React Playground"),r.a.createElement(k,{tabs:C}),r.a.createElement(b,null),r.a.createElement(m,null),r.a.createElement(p,{count:123}),r.a.createElement(h,null),r.a.createElement(v,null),r.a.createElement(d,{name:"Messages",unread:0}),r.a.createElement(d,{name:"Notifications",unread:10}))}}]),n}(a.Component);n(19);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.4c5472aa.chunk.js.map