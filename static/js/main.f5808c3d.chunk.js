(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),s=n(17),a=n.n(s),r=n(8),o=n.n(r),l=n(18),d=n(3),u=n(4),m=n(6),j=n(5),p=(n(25),n(0)),b=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={input:""},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.input)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.onFormSubmit,className:"container mb-3 p-0 py-3",children:[Object(p.jsxs)("div",{className:"d-flex align-items-center pb-2",children:[Object(p.jsx)("span",{className:"material-icons text-warning me-2",children:"play_circle_filled"}),Object(p.jsx)("label",{className:"form-label h1 m-0",children:"Video Search"})]}),Object(p.jsx)("input",{className:"form-control bg-dark text-light",value:this.state.input,onChange:this.onInputChange,type:"text",placeholder:"Video Search..."})]})})}}]),n}(c.a.Component),h=n(19),v=n.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,type:"video",q:"surfing",key:"AIzaSyAG-9nF5eLHAkLUjD9uNtmDTAZVHsbdnnY"}}),x=(n(45),function(e){var t=e.video,n=e.onVideoSelect;return Object(p.jsxs)("div",{className:"list-group-item video-item px-0 py-3 bg-dark text-light border-secondary",onClick:function(){return n(t)},children:[Object(p.jsx)("img",{alt:t.snippet.title,className:"me-2",src:t.snippet.thumbnails.medium.url}),Object(p.jsx)("div",{className:"small fw-bold",children:t.snippet.title})]})}),f=function(e){var t=e.videos,n=e.onVideoSelect,i=t.map((function(e){return Object(p.jsx)(x,{onVideoSelect:n,video:e},e.id.videoId)}));return Object(p.jsx)("div",{className:"list-group-flush ms-3",children:i})},O=function(e){var t=e.video;if(!t)return"Loading";var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(p.jsxs)("div",{className:"row mt-3",children:[Object(p.jsx)("div",{className:"ratio ratio-16x9 mb-3",children:Object(p.jsx)("iframe",{title:"video player",src:n})}),Object(p.jsxs)("div",{className:"py-2",children:[Object(p.jsx)("h4",{children:t.snippet.title}),Object(p.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],SelectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(o.a.mark((function t(n){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:n}});case 2:i=t.sent,e.setState({videos:i.data.items,SelectedVideo:i.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({SelectedVideo:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onTermSubmit("react")}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"bg-dark text-light min-vh-100",children:[Object(p.jsx)(b,{onFormSubmit:this.onTermSubmit}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsx)(O,{video:this.state.SelectedVideo})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(f,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),n}(c.a.Component);a.a.render(Object(p.jsx)(S,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f5808c3d.chunk.js.map