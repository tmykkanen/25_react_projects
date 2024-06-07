import { useEffect, useState } from 'react'

type ProductsProp = {
  id: number,
  thumbnail: string,
  title: string,
}

const LoadMore = () => {
 const [products, setProducts] = useState<ProductsProp[]>([])
 const [loading, setLoading] = useState(false)
 const [count, setCount] = useState(0)
 const [disableButton, setDisableButton] = useState(false)

 
 useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products/?limit=20&skip=${count === 0 ? 0 : count * 20}`)
        const data = await res.json()
        console.log(data.products[0])
      
        if (data && data.products && data.products.length) {
          setProducts((prev) => [...prev, ...data.products])
          setLoading(false)
        }
        
      } catch (error) {
        console.log(`ERR: ${error}`);
      }
      setLoading(false)
    }

    getProducts()
  }, [count])

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true)
  }, [products])

  if(loading) 
    return <div>Loading Data ! Please wait.</div>

  return (
   <div className='flex flex-col gap-5'>
    <div className='grid grid-cols-4 gap-2'>
    {
      products && products.length ?
      products.map((item) => (
      <div key={item.id} className='p-5 border-solid border border-white flex flex-col gap-2'>
        <img src={item.thumbnail} alt={item.title} className='w-48 h-48'/>
        <p>{item.title}</p>
      </div>))
      : null
    }
    </div>
    <div>
      <button disabled={disableButton} type='button' onClick={() => setCount(count + 1)} className='btn btn-primary'>Load More</button>
      {
        disableButton ? <p>You have reached 100 products</p> : null
      }
    </div>
   </div>
 )
}

export default LoadMore