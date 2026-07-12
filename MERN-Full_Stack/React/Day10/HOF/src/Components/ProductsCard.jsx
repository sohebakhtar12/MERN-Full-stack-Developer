import React from 'react'

function ProductsCard({image,price,title}) {
  return (
          <div>
            <img src={image} alt="" />
            <div>
              <p>{title}</p>
              <p>{price}</p>
            </div>
          </div>
        )
}

export default ProductsCard
