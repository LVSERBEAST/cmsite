import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from './Images';
import styles from './ImageCarousel.module.css';

function ImageCarousel() {
    return (
        <Carousel useKeyboardArrows={true} infiniteLoop={true} showThumbs={false}>
            {images.map((URL, index) => (
                <div className="slide" key={index}>
                    <img alt="sample_file" src={URL} key={index} className={styles.carouselImage} />
                </div>
            ))}
        </Carousel>
    );
}
export default ImageCarousel;
