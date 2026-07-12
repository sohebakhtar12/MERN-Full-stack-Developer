

function SaleWrapper({Children}) {
  return (
    <div className='relative'>
        <div className='absolute right-0 bg-red-400 text-white'>OnSale</div>
         {Children}
      
    </div>
  )
}

export default SaleWrapper
