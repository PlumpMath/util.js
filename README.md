# util.js

Cute, small & lovely JavaScript elves.

These are smallish functions I like to have around when quickly trying
out ideas.

To try it, you could use the following bookmarklet:

    javascript:var s=document.createElement("script");s.src="https://gist.github.com/heyLu/6065025/raw/8d88c7fea7cf10c6ab02fbbb8af3fa6c46070a13/util-v0.js";document.body.appendChild(s)

## Glossary

* `q(sel)`, `document.querySelector`
* `qa(sel)`, `document.querySelectorAll`
* `range(from,to)`, `range(35, 42) //=> [35, 36, 37, 38, 39, 40, 41]`
* `ary(indexable)`, transform something accessible by index into a real array
    - useful for e.g. `ary(qa("p")).map(function(_){_.textContent = "whoopey!"})`
* `req(params)`, creates a XMLHttpRequest, you must `.send()` it yourself
    - `params.url`: the url to be used
    - `params.verb`: the http verb to use (default: `GET`)
    - `params.headers`: map of headers (default: `{}`)
    - `params.cb`: onReadyStateChange callback (default: log to console)
    - `params.error`: error callback (default: log to console)
* `mkparams(params)`, creates a url-params string from a map
    - `mkparams({greeting: "hullo", who: "world"}) //=> "&greeting=hullo?who=world"`
* `slug(str)`, `slug("Hello, this is a WONDERFUL String! (with stuff) ") // => "Hello-this-is-a-WONDERFUL-String-with-stuff"`

## Wishlist

* functions: el, html
* a demo (preferrably right here, with One Click™)
