

const CarouselItem = ({ item }) => {

  const { title, img, description , id } = item
  return (
 
      <div className="carousel-item">
     
        <img src={img} alt={title} className="carousel-img" key={id} />
      </div>
   
  )
}
export default CarouselItem
