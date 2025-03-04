import { AnimatePresence, motion } from 'motion/react';
import './Carousel.scss'
import { useCarousel } from './useCarousel';

export default function CarouselNew(props: {
    images: string[],
    selHeight: number,
    automatic: boolean,
    arrowColor?: string,
    interval: number
}) {
    const {
        images,
        selHeight,
        automatic,
        arrowColor = "black",
        interval } = props


    const { slides, currentSlideIndex, slide, handleMouseEnter, handleMouseLeave, back, next, goto } = useCarousel(images, interval, automatic)



    return (
        <div className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: selHeight + 'px' }}>
            <div className="carousel" >
                <AnimatePresence>
                    <motion.img key={`${slide}`} src={`${slide}`} initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }} className="slide fade" />
                </AnimatePresence>
                <a className="prev" style={{ color: arrowColor }} onClick={back}>&#10094;</a>
                <a className="next" style={{ color: arrowColor }} onClick={next}>&#10095;</a>
            </div>



            <div className="text-center">

                {slides?.map((item: string, index: number) => {
                    return (<span className={index === currentSlideIndex ? 'dot active' : 'dot'} key={index} onClick={() => goto(index)}></span>)
                })}


            </div>
        </div>
    )
}