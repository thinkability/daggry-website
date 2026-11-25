// Old: https://thinkability.github.io/daggry-website/<path>  ->  New: https://daggry-dev.github.io/website/<path>
var old = '/daggry-website/';
var p = location.pathname;
var rest = p.indexOf(old) === 0 ? p.slice(old.length) : '';
location.replace('https://daggry-dev.github.io/website/' + rest + location.search + location.hash);
