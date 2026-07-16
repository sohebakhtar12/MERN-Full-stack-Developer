const container = document.getElementById("main")

const api ="https://dummyjson.com/products"

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.products)
    for(let item of data.products){

        const card=document.createElement("article")

        const img=document.createElement("img")
        img.src=item.images[0]

        const naam=document.createElement("h2")
        naam.textContent=item.title

        const price=document.createElement("p")
        price.textContent=item.price

        const textContainr=document.createElement("div")

        textContainr.append(naam,price)

        img.style.height="200px"

        card.append(img,textContainr)

        container.append(card)



    }
})