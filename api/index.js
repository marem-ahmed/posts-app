(async function(){
    let data =await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3ee5ba8475a4ea4a6e9140f6427b0c2')
    let newData=await data.json()
    let eldata = newData.articles;
    console.log(eldata)
    let cartona=``
    for(let i=0;i<eldata.length;i++){
        console.log(eldata[i].urlToImage)
         cartona += `<div class="card m-4" style = "width: 18rem;" >
          <img class="card-img-top" src = "${eldata[i].urlToImage}" alt="Card image cap">
          <div class="card-body">
          <h1>${eldata[i].author}</h1>
            <p class="card-text">${eldata[i].title}</p>
            </div>
        </div>`
    }
    document.getElementById("container").innerHTML=cartona
}

)();