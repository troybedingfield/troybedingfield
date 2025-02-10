import './Carousel.scss'
import { useCarousel } from './useCarousel';

export default function CarouselNew({ ...props }) {
    const {
        images,
        captions,
        selHeight,
        automatic,
        arrowColor = "black",
        interval } = props


    const { slides, currentSlideIndex, slide, isFirstSlide, isLastSlide, handleMouseEnter, handleMouseLeave, back, next, goto } = useCarousel(images, interval, automatic)



    return (
        <div className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: selHeight + 'px' }}>
            <div className="carousel" >

                <img src={`${slide}`} className="slide fade" />

                <a className="prev" style={{ color: arrowColor }} onClick={back}>&#10094;</a>
                <a className="next" style={{ color: arrowColor }} onClick={next}>&#10095;</a>
            </div>



            <div className="text-center">

                {slides && slides.map((item: any, index: number) => {
                    return (<span className={index === currentSlideIndex ? 'dot active' : 'dot'} key={index} onClick={() => goto(index)}></span>)
                })}


            </div>
        </div>
    )
}