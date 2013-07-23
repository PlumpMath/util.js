var req=function(params){var xhr=new XMLHttpRequest();xhr.open(params.verb||'GET', params.url);for(name in params.headers||[]){xhr.setRequestHeader(name, (params.headers||[])[name])};cb=console.log.bind(console);xhr.onerror=params.error||cb;xhr.onreadystatechange=params.cb||cb;return xhr};

var mkparams=function(params){var param_str="";for (key in params){var sep=param_str==""?"?":"&";param_str+=sep+key+"="+params[key]};return param_str}

var q=function(sel){return document.querySelector(sel)}
var qa=function(sel){return document.querySelectorAll(sel)}

var range=function(from,to){var ary = [];for(var i=0;i<from+to;i++){ary[from+i]=from+i;};return ary}

var slug=function(str){return str.replace(/[^\w\d\s]/g, "").trim().replace(/\s+/g, "-")}
