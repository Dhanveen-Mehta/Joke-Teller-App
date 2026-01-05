let jokeBtn = document.querySelector("#get-joke");
let jokeSelection = document.querySelector("#type-of-joke");
let dadJoke = document.querySelector("#Dad-joke")
let programmingJoke = document.querySelector("#Programming-joke")
let darkJoke = document.querySelector("#Dark-joke")
let outputArea = document.querySelector("#output-area")
let jokeCount = 0;
jokeBtn.addEventListener("click",function(){
    jokeGen ();

})

async function jokeGen() {
    if(jokeSelection.value === dadJoke.innerText){
        jokeCount = jokeCount +1 
        if(jokeCount >=10){
            alert("Maximum Number of jokes reached");
            location.reload()
        }
        console.log("dad joke selected")
        let resDad = await axios.get("https://icanhazdadjoke.com/",{
            headers:{
                Accept:"text/plain"
            }
        })
        resDad =resDad.data
      // console.log(resDad)
       let li = document.createElement("li")
       li.innerText = resDad;
      // let finalDadJoke = li.innerText;
       //console.log(finalDadJoke)
       outputArea.appendChild(li)
       
       









    }else if(jokeSelection.value === programmingJoke.innerText){
        jokeCount =jokeCount+1;
        if(jokeCount>=5){
            alert("Maximum Number of jokes reached")
            location.reload()
        }
        let resPro = await axios.get("https://v2.jokeapi.dev/joke/Programming?format=txt")
       // console.log(resPro)
        let li = document.createElement("li");
        li.innerText = resPro.data;
        outputArea.appendChild(li);

       // console.log("programming joke selected")
    
    
    
    
    
    
    
    }else if(jokeSelection.value === darkJoke.innerText){
        jokeCount =jokeCount+1;
        if(jokeCount>=4){
            alert("Maximum Number of jokes reached")
            location.reload()
        }

        let resDark = await axios.get("https://v2.jokeapi.dev/joke/Dark?format=txt")
        let li = document.createElement("li");
        li.innerText = resDark.data;
        outputArea.appendChild(li);
        //console.log("dark joke selected")










    }else{

        alert("Please select the type of joke")
    }
    
}