import { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

type ImageSliderProps = {
  url: string;
  limit: number;
}

type ImageDataItem = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}


const ImageSlider = ( { url, limit = 5 }: ImageSliderProps) => {
  const [images, setImages] = useState<ImageDataItem[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)

  const fetchImages = async (getUrl:string,) => {
    try {
      setLoading(true);

      const res = await fetch(`${getUrl}?limit=${limit}`)
      const data = await res.json();
      console.log(data[0].url);
      if(data) {
        setImages(data);
        console.log(images)
        setLoading(false);
      }

    } catch (error: unknown) {
      setErrorMsg(error.message)
      setLoading(false)
    }
    
  } 

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url])

  if (loading) {
    return <div>Loading Data: Please Wait!</div>
  }

  if (errorMsg !== null) {
    return <div>Error: {errorMsg} </div>
  }

  const handleSlideBack = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleSlideForward = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }
  
  const handleSelectImage = (getSelectedImage: number) => {
    setCurrentSlide(getSelectedImage)
  }

 return (
   <div className='relative flex justify-center items-center w-2/4 h-1/3'>
    <BsArrowLeftCircleFill onClick={handleSlideBack} className='absolute w-8 h-8 text-white drop-shadow-sm left-4'/>
    {images && images.length ? 
      images.map((imageItem) => (
        <div key={imageItem.id} style={ parseInt(imageItem.id) === currentSlide ? {display: 'block'} : {display: 'none' }}>
          <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className='rounded-lg shadow-md w-full h-full'
          />
        </div>
      ))
    : null}
    <BsArrowRightCircleFill onClick={handleSlideForward} className='absolute w-8 h-8 text-white drop-shadow-sm right-4'/>
    <span className='flex absolute bottom-4'>
      { images && images.length ?
        images.map((imageItem, index) => (
          <button
          className='bg-white h-4 w-4 rounded-full border-none outline-none mx-1 cursor-pointer'
          style={parseInt(imageItem.id) === currentSlide ? {opacity: 0.9} : {opacity: 0.4 }}
          type='button'
          key={index}
          onClick={() => handleSelectImage(index)}></button>
        ))
        : null
    }
    </span>
   </div>
 )
}

export default ImageSlider