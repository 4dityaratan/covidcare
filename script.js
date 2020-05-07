const result = document.getElementById('result');
const message = document.querySelector('#message');
var url = 'http://newsapi.org/v2/everything?q=coronavirus&sortBy=publishedAt&pageSize=50&language=en&apiKey=df3d03fe7c7c49dd8ebf28a4ea7b9568';
var req = new Request(url);
fetch(req)
    .then(response => response.json())
    .then(data => {
            result.innerHTML = `
           <ul class="card-columns">
                ${data.articles
                    .map(
                        article=>`<li class="card cardModified">
                            <img class="card-img-top" src="${article.urlToImage}" alt="image">
                            <div class="container">
                            <h5 class="titleFont" style="font-size:.3vw;"><a class="articleLink" href="${article.url}">${article.title}</a></h5>
                            
                            <small class="text-muted descriptionFont">
                                ${article.description}
                                </small>
                            <h5>
                            <footer class="blockquote-footer">
                                <small class="text-muted sourceFont">
                                ${article.source.name}
                                </small>
                            </footer>
                            </h5>
                            </div>
                        </li>`
                )}
           </ul>            
        `
    })