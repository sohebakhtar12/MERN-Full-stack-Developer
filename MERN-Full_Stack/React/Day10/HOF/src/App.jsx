
import './App.css'
import ProductsCard from './Components/ProductsCard';
import SaleWrapper from './Components/SaleWrapper';

function App() {

const products = [
  {
    id: 2,
    title: "Samsung Galaxy S25",
    category: "Electronics",
    brand: "Samsung",
    price: 99999,
    rating: 4.8,
    stock: 20,
    onSale: false,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=2",
    description: "Premium Android smartphone."
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    category: "Headphones",
    brand: "Sony",
    price: 27999,
    rating: 4.8,
    stock: 18,
    onSale: true,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=3",
    description: "Noise cancelling wireless headphones."
  },
  {
    id: 4,
    title: "Boat Airdopes 311",
    category: "Earbuds",
    brand: "Boat",
    price: 1999,
    rating: 4.5,
    stock: 50,
    onSale: true,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=4",
    description: "Wireless earbuds with long battery."
  },
  {
    id: 5,
    title: "Nike Air Max",
    category: "Shoes",
    brand: "Nike",
    price: 8999,
    rating: 4.7,
    stock: 25,
    onSale: true,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=5",
    description: "Comfortable running shoes."
  },
  {
    id: 6,
    title: "Adidas Ultraboost",
    category: "Shoes",
    brand: "Adidas",
    price: 10999,
    rating: 4.8,
    stock: 16,
    onSale: false,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=6",
    description: "Premium sports shoes."
  },
  {
    id: 7,
    title: "Levi's Denim Jacket",
    category: "Fashion",
    brand: "Levi's",
    price: 4999,
    rating: 4.6,
    stock: 30,
    onSale: false,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=7",
    description: "Classic blue denim jacket."
  },
  {
    id: 8,
    title: "Puma Sports T-Shirt",
    category: "Fashion",
    brand: "Puma",
    price: 1499,
    rating: 4.5,
    stock: 60,
    onSale: true,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=8",
    description: "Comfortable cotton t-shirt."
  },
  {
    id: 9,
    title: "Dell Inspiron 15",
    category: "Laptop",
    brand: "Dell",
    price: 65999,
    rating: 4.6,
    stock: 12,
    onSale: false,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=9",
    description: "Powerful laptop for work."
  },
  {
    id: 10,
    title: "MacBook Air M4",
    category: "Laptop",
    brand: "Apple",
    price: 114999,
    rating: 4.9,
    stock: 10,
    onSale: true,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=10",
    description: "Apple M4 powered laptop."
  },
  {
    id: 11,
    title: "LG Smart TV 43\"",
    category: "TV",
    brand: "LG",
    price: 32999,
    rating: 4.7,
    stock: 8,
    onSale: true,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=11",
    description: "43-inch 4K Smart TV."
  },
  {
    id: 12,
    title: "Samsung Refrigerator",
    category: "Appliances",
    brand: "Samsung",
    price: 45999,
    rating: 4.7,
    stock: 6,
    onSale: false,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=12",
    description: "Double-door refrigerator."
  },
  {
    id: 13,
    title: "Canon EOS R50",
    category: "Camera",
    brand: "Canon",
    price: 74999,
    rating: 4.8,
    stock: 9,
    onSale: true,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=13",
    description: "Mirrorless camera."
  },
  {
    id: 14,
    title: "Casio G-Shock",
    category: "Watch",
    brand: "Casio",
    price: 7999,
    rating: 4.7,
    stock: 20,
    onSale: false,
    featured: false,
    inStock: true,
    image: "https://picsum.photos/300?random=14",
    description: "Durable sports watch."
  },
  {
    id: 15,
    title: "Apple Watch Series 10",
    category: "Watch",
    brand: "Apple",
    price: 45999,
    rating: 4.9,
    stock: 13,
    onSale: true,
    featured: true,
    inStock: true,
    image: "https://picsum.photos/300?random=15",
    description: "Premium smartwatch."
  }
];



  return (
  
    <div className='grid grid-cols-4'>
      {
        products.map((item)=>{
          if(item.onSale){
            return <SaleWrapper key={item.id}>
              onSale={item.onSale} title={item.title} image={item.image} price={item.price}
            </SaleWrapper>
          }

          return <ProductsCard onSale={item.onSale} title={item.title} image={item.image} price={item.price}/>
        })
      }


    </div>
         
  
  )
}

export default App
