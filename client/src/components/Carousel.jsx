import CarouselItem from './CarouselItem'
import { carousel } from '../utils/links'
import { useState } from 'react'
import Wrapper from '../assets/wrappers/CarouselItem'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)


    const updateIndex =  (newIndex) => {
        if (newIndex < 0)  {
            newIndex=0;
        }else if (newIndex >= carousel.length) {
            newIndex = carousel.length -1
        }
        setActiveIndex(newIndex)
    }
  return (
    <Wrapper>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex*100}%)` }}
          
        >
          {carousel.map((item) => {
            const {id} = item
            return <CarouselItem item={item} key={id}/>
           
          })}
        </div>
        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex (activeIndex -1)
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <div className="indicators">
            {carousel.map((item, index) => {
              return (
                <button
                  className="indicator-buttons"
                  key={index}
                  onClick={() => updateIndex(index)}
                >
                  <span className={`material-symbols-outlined`}>
                    radio_button_
                    {index === activeIndex ? 'checked' : 'unchecked'}
                  </span>
                </button>
              )
            })}
          </div>{' '}
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1)
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Carousel
