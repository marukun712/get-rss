function start(){
form = document.getElementById('large-input');
form.addEventListener('keypress', text);

function text(e) {
  if (e.keyCode === 13) {
    console.log(form.value)
    url = `https://nitter.net/${form.value}/rss`
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
    .then(response => {
        return response.json();
      })
      .then(data => {
        $('#cardarea').empty();
        num = data.items.length
        var id = data.feed.title
        document.getElementById('id').innerHTML = id
        for(i = 0; i < num; i++){
        var title = data.items[i].title
        var url = data.items[i].link
        var date = data.items[i].pubDate
        var image = data.items[i].thumbnail
        var replaceurl = url.replace('nitter.net','twitter.com')
        if(image == ""){
            var image = 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png'
        }
        $('#cardarea').append(`<a href="${replaceurl}" class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"><img src="${image}" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" /><div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div><span class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">${title}</span></a>`)
        }
      });

} 
  return false;
}
}
setTimeout(start,1000)
