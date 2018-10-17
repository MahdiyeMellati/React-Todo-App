var React = require('react');
var ReactDOM = require('react-dom');
var {Provider}= require('react-redux');
var {Route,Router,IndexRoute,hashHistory}= require("react-router");
var Main = require('Main');
var actions= require('actions');
var store= require('configureStore').configure();

store.subscribe(()=>
{
  console.log('new state : ',store.getState() );
});
//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App class
require('style!css!sass!applicationStyles');


ReactDOM.render(

 <Provider store={store}>
   <Main/>
 </Provider>,
  document.getElementById('app')
);
