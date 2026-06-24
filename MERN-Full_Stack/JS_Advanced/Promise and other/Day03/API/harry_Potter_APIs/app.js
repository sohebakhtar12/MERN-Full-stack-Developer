const container = document.getElementById("main")

const api="https://hp-api.onrender.com/api/characters"

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    // console.log(data)

    for(let item of data){

        // console.log(item)

        const card = document.createElement("article")

        const img = document.createElement("img")
        img.src=item.image ||"https://media.licdn.com/dms/image/v2/D5635AQGUpvBNLXH1_w/profile-framedphoto-shrink_400_400/B56ZaCcaGwGoAc-/0/1745945207586?e=1782129600&v=beta&t=RQ_AOtbzR_tKzOdqix_Sw8X9lIYKR1VJiea-xdN2qAI"
        
        const name=document.createElement("h3")
        name.innerText=item.name;


        //style
        img.style.height="300px"
        img.style.width="300px"
        // card.style.border=""
        // card.style.width="250px"

        card.append(img, name)
        container.append(card)
    }
})