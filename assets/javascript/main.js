//javascript, jQuery

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yqPqbKECQUmQgiQHXJbL8e3XpkLvmI7s&limit=20");
xhr.done(function(response) { console.log("success got data", response); });

var jiffs = response.data