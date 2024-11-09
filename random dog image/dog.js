const url="https://dog.ceo/api/breeds/image/random";


async function getImage(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.message);
        let img = document.querySelector("img");
        img.src = data.message;
    
    }
   catch(e){
    console.log(e);
   }
}

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    await getImage();
});