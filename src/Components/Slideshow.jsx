import React, { useEffect, useState } from 'react'

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            image: "https://i.ibb.co/syLR9tf/Image1.png",
            alt: "Image 1"
        },
        {
            image: "https://i.ibb.co/3vJ48FF/Image2.png",
            alt: "Image 2"
        },
        {
            image: "https://i.ibb.co/FD9HKZH/Image3.png",
            alt: "Image 3"
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % slides.length)
        }, 2000);
        return () => clearInterval(intervalId);
    }, [slides.length])

    return (
        <img
            src={slides[index].image}
            alt={slides[index].alt}
            className=" rounded-lg  flex h-screen w-full items-center justify-center"
        />
    )
}

export default Slideshow