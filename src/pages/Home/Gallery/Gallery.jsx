import img1 from '../../../assets/images/gallery/img1.png'
import img2 from '../../../assets/images/gallery/img2.png'
import img3 from '../../../assets/images/gallery/img3.png'
import img4 from '../../../assets/images/gallery/img4.png'
import img5 from '../../../assets/images/gallery/img5.png'
import img6 from '../../../assets/images/gallery/img6.png'
import img7 from '../../../assets/images/gallery/img7.png'
import img8 from '../../../assets/images/gallery/img8.png'
import img9 from '../../../assets/images/gallery/img9.png'
import img10 from '../../../assets/images/gallery/img10.png'
import img11 from '../../../assets/images/gallery/img11.png'
import img12 from '../../../assets/images/gallery/img12.png'

const Gallery = () => {
    return (
        <div className='w-10/12 mx-auto my-32 text-center'>
            <h2 className='text-6xl font-bold mb-14'>Gallery Zone</h2>
            <div className='grid grid-cols-4 gap-4 place-items-center border-0 lg:border-8 border-amber-600'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
        </div>
        </div>
    );
};

export default Gallery;