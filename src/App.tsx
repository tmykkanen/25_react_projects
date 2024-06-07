/* eslint-disable @typescript-eslint/no-unused-vars */
// import Accordion from './components/accordion/index.tsx'
// import ImageSlider from './components/image-slider/ImageSlider.tsx'
// import LoadMore from './components/load-more/LoadMore.tsx'
// import RandomColor from './components/random-color/index.tsx'
// import StarRating from './components/star-rating/index.tsx'
import TreeView from './components/tree-view/TreeView.tsx'
import menus from './components/tree-view/data.ts' 

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
    {/* <ImageSlider url='https://picsum.photos/v2/list' limit={5}/> */}

    {/* Load More Button */}
    {/* <LoadMore /> */}

    {/* Tree View */}
    <TreeView menus={menus}/>

  </div>
 )
}

export default App
