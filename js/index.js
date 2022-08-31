console.log('Ajj Tak');

   // 012243f74c7d4adf84d0417d7e3a40fd ---> news api



let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(this.readyState === 4 && this.status === 200){
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element) { 
        let news =`<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${element["title"]}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body"> ${element["content"]}.<a href = "${element["url"]}" target="_blank" >Read more hear</a> </div>
        </div>
</div>`;
newsHtml += news;
});
newsaccordion.innerHTML = newsHtml;
}
else{
  console.log("Some Eror");
}

}
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=012243f74c7d4adf84d0417d7e3a40fd', true);
xhr.send();


