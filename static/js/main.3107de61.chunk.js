(this["webpackJsonpjerichochua.github.io"]=this["webpackJsonpjerichochua.github.io"]||[]).push([[0],{22:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a.n(r),c=a(12),s=a.n(c),i=(a(22),a(13)),o=a(14),d=a(17),h=a(16),l=a(0),j=function(t){var e=t.forecast;return Object(l.jsxs)("div",{className:"forecast",children:[Object(l.jsx)("h3",{children:e.area}),Object(l.jsx)("p",{children:e.forecast})]})},u=function(t){var e=t.forecastStart,a=t.forecastEnd;return Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:[e.toLocaleString()," - ",a.toLocaleString()]})})},f=function(t){var e=t.forecasts,a=t.forecastStart,r=t.forecastEnd;return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{forecastStart:a,forecastEnd:r}),e.map((function(t){return Object(l.jsx)(j,{forecast:t},t.area)}))]})},b=function(t){var e=t.title;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:e})})};b.defaultProps={title:"2 Hour Weather Forecast Singapore"};var v=b,p=function(t){var e=t.lastUpdated;return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("p",{children:["Last updated: ",e.toLocaleString()]}),Object(l.jsxs)("p",{children:["Source: ",Object(l.jsx)("a",{href:"https://data.gov.sg/",target:"_blank",rel:"noopener noreferrer",children:"data.gov.sg"})]}),Object(l.jsx)("p",{children:"Designed with React"})]})},O=a(15),g=a.n(O),x=(a(42),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={weatherData:[],isFetched:!1,validStartPeriod:"",validEndPeriod:"",lastUpdated:""},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;g.a.get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast").then((function(e){console.log(e.data),t.setState({weatherData:e.data.items[0].forecasts,validStartPeriod:new Date(e.data.items[0].valid_period.start),validEndPeriod:new Date(e.data.items[0].valid_period.end),lastUpdated:new Date(e.data.items[0].update_timestamp),isFetched:!0})})).catch((function(t){return console.error(t)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(v,{}),this.state.isFetched?Object(l.jsx)(f,{forecasts:this.state.weatherData,forecastStart:this.state.validStartPeriod,forecastEnd:this.state.validEndPeriod}):"Fetching weather forecasts...",Object(l.jsx)(p,{lastUpdated:this.state.lastUpdated})]})}}]),a}(r.Component)),m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.3107de61.chunk.js.map