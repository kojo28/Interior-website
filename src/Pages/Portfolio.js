import React from 'react';
import image1 from '../img/Portfolio/port-7.png'
import image2 from '../img/Portfolio/port-2.jpeg'
import image3 from '../img/Portfolio/port-6.jpg'
import image4 from '../img/Portfolio/port-3.jpeg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <section className = 'section'>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
                    <div className='flex flex-col lg:items-start'>
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-w-sm'>
                            Here at Jo's Interior we pride ourselves on
                            proritizing our client's sense of style and creating
                            a visual representation of what they find comforting.
                        <br />
                        <br />
                            Our mission is to bring your vision to fruition.
                        </p>
                        <Link to={'/Contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Contact Me</Link>
                    </div>
                    <div className='grid grid-cols-2 lg:gap-2'>
                        <div classname='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 translation-all duration-500' src={image1} alt='' 
                            />
                        </div>
                        <div classname='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 translation-all duration-500' src={image2} alt='' 
                            />
                        </div>
                        <div classname='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 translation-all duration-500' src={image3} alt='' 
                            />
                        </div>
                        <div classname='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 translation-all duration-500' src={image4} alt='' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;

