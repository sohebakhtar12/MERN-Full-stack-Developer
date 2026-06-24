import Card from "./Component/card";
function App() {
  
  const arr = [
  {
    name: "Laptop",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    name: "Mobile",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "Watch",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Camera",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },
  {
    name: "Backpack",
    img: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
  },
  {
    name: "Tablet",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  },
  {
    name: "Keyboard",
    img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
  },
  {
    name: "Mouse",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  }
];
  return (
    
    <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr",gap:"5px"}}>
    
    {
      arr.map((item)=>{
        return <Card imgSrc={item.img} name={item.name}/> 
      })
    }
     
    </div>


   
  )
}

export default App
