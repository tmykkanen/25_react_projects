import Accordion from './components/accordian/index.tsx'
import ImageSlider from './components/image-slider/ImageSlider.tsx'
import RandomColor from './components/random-color/index.tsx'
import StarRating from './components/star-rating/index.tsx'

const App = () => {
 return (
  <div className='app'>
    {/* Accordion Component */}
    {/* <Accordion /> */}

    {/* Random Color Component*/}
    {/* <RandomColor /> */}

    {/* Star Rating */}
    {/* <StarRating numOfStars={10}/> */}

    {/* Images Slider */}
    <ImageSlider url='https://picsum.photos/v2/list' limit={5}/>

  </div>
 )
}

export default App
