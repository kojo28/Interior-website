import React from 'react';
import aboutimage from '../img/About/about.jpeg'
import { Link } from 'react-router-dom'


const About = () => {
    return (
    <section className='section'>
        <div className="container mx-auto h-full relative">
            <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-y-hiddenl'>
                    <img className='overflow-hidden'src={aboutimage} alt='/' />
                </div>
                <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='h1'>About me</h1>
                    <p className='mb-12 max-w-sm'>
                        I built this projects using ReactJS and Tailwind CSS.
                    <br />
                    <br />
                        The purpose of this project was to familiarize myself with JSX and experiment with the react library,
                        Framer Motion. This project cemented my understanding of
                        routing between pages  and allowed me to gain a greater appreciation
                        for the succintness of Tailwind CSS.
                    </p>
                    <Link to={'/Portfolio'} className='btn'>Take a look at my work</Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;

