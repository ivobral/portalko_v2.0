// async function catcher(){
//     let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url='+'https://www.dalmacijadanas.hr/rss');
//     let data = await response.json();

//     //console.log(data.items)

//     let news = [];

//     data.items.forEach(item => {
//         let post = {
//             title: item.title,
//             image: item.thumbnail,
//             link: item.link,
//             pubDate: item.pubDate,
//             author: item.author,
//             categories: item.categories,
//         };
//       news.push(post);
//     });

//     return news;
// };

async function getPromise(){
    let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.dalmacijadanas.hr/rss');
    let data = await response.json();

    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({
            data});
      },50)
    })
}

function getResult() {
    return getPromise()
        .then(function(response) {
            return response;
        })
} 

export {  getResult };