// console.log("cfvhkgukch")

fetch("https://type.fit/api/quotes").then(function(response){
    return response.json()
}).then(function(response){
    let all_quotes=response
    // console.log(all_quotes)

    let show=document.querySelector("#show")
    let author=document.querySelector("#author")
    let btn=document.querySelector("#btn")


    btn.addEventListener("click",()=>{    
    
    
        function getRandomNumber() {
            return Math.floor(Math.random() * 1501);
        }
        let random_number=getRandomNumber()
    
    
        let detail=all_quotes[random_number]
    
        show.innerHTML=detail.text
        author.innerHTML=detail.author
    })
    

})


// quote generator using async/await

// async function quoteGenerator(){
//     let database=await fetch("https://type.fit/api/quotes")
//     let jsonData=await database.json()


    

//     let show=document.querySelector("#show")
//     let author=document.querySelector("#author")
//     let btn=document.querySelector("#btn")


//     btn.addEventListener("click",()=>{    
    
    
//         function getRandomNumber() {
//             return Math.floor(Math.random() * 1501);
//         }
//         let random_number=getRandomNumber()
    
    
//         let detail=jsonData[random_number]
    
//         show.innerHTML=detail.text
//         author.innerHTML=detail.author
//     })
// }

// quoteGenerator()


