"use client"

// components/ImageSlider.js
import { useState } from 'react';

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const forward = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
    };

    return (
        <>
        
            <h1 className='text-center text-black text-3xl font-extrabold my-3 pt-5'>Our brands</h1>
            <p className='text-center text-gray-500 text-2xl lg:mx-56 px-10 my-3'>
                At GN Technologies, we offer top-quality brands spanning IT solutions and security systems.
                Our selection ensures exceptional performance and reliability, driven by continuous innovation
                to keep our clients competitive.
            </p>
            <main className="grid  place-content-center my-10">
                <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-black p-2 sm:p-4">
                    <div className="absolute right-5 top-5 z-10 rounded-full bg-black px-2 text-center text-sm text-white">
                        <span>{currentIndex + 1}</span>/<span>{images.length}</span>
                    </div>

                    <button
                        onClick={previous}
                        className="absolute left-5 top-1/2 z-10 flex  -translate-y-1/2 items-center justify-center rounded-full bg-gray-500 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className='bg-white'
                           width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </button>

                    <button
                        onClick={forward}
                        className="absolute right-5 top-1/2 z-10 flex  -translate-y-1/2 items-center justify-center rounded-full bg-gray-500 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className='bg-white'
                           width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>                    </button>

                    <div className="relative " style={{ width: '18rem',height:'20rem' }}>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 transition-opacity duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src={image} alt={`image-${index}`} className="rounded-sm" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ImageSlider;
