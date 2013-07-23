# util.js

Cute, small & lovely JavaScript elves.

These are smallish functions I like to have around when quickly trying
out ideas.

## Glossary

* `q(sel)`, `document.querySelector`
* `qa(sel)`, `document.querySelectorAll`
* `range(from,to)`, `range(35, 42) //=> [35, 36, 37, 38, 39, 40, 41]`
* `req(params)`, creates a XMLHttpRequest
    - `params.url`: the url to be used
    - `params.verb`: the http verb to use (default: `GET`)
    - `params.headers`: map of headers (default: `{}`)
    - `params.cb`: onReadyStateChange callback (default: log to console)
    - `params.error`: error callback (default: log to console)
* `mkparams(params)`, creates a url-params string from a map
    - `mkparams({greeting: "hullo", who: "world"}) //=> "&greeting=hullo?who=world"`
* `slug(str)`, `slug("Hello, this is a WONDERFUL String! (with stuff) ") // => "Hello-this-is-a-WONDERFUL-String-with-stuff"`