import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from '../../utilities/images';
import styles from './ImageCarousel.module.css';

type Props = {
    selectedItem: number
}

function ImageCarousel(props: Props) {
    const { selectedItem } = props;

    return (
        <Carousel useKeyboardArrows={true} infiniteLoop={true} showThumbs={false} selectedItem={selectedItem}>
            {images.map((URL, index) => (
                <div className="slide" key={index}>
                    <img alt="sample_file" src={URL} key={index} className={styles.carouselImage} />
                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
