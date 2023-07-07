import './Gallery.css'
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
        <div className='w-10/12 mx-auto my-16 lg:my-32 text-center'>
            <h2 className='text-3xl lg:text-6xl font-bold mb-8 lg:mb-20 text-amber-800'>Gallery Zone</h2>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 place-items-center bog'>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img1} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img2} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img3} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img4} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img5} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img6} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img7} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img8} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img9} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img10} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img11} alt="" />
                </div>
                <div className='img-hover-zoom border lg:border-2 border-amber-400'>
                    <img src={img12} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;