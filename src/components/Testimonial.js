import React from 'react'
import clientImage from'../images/client-image.jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { testimonial, testimonialContent, testimonialClientImage, testimonialWords } from '../styles/testimonial.module.css'

function Testimonial() {

    return (
        <section className={testimonial}>
            <FaChevronLeft size={50}/>
            <div className={testimonialContent}>
                <img src={clientImage} alt="Client" className={testimonialClientImage}/>
                <div className={testimonialWords}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sunt ducimus, iure commodi quisquam reiciendis eius voluptatem, expedita sapiente tempora neque beatae cupiditate pariatur corporis voluptatum facilis veritatis nesciunt.</p>
                    <h3>— John Doe, CEO Acme Entreprises</h3>
                </div>
            </div>
            <FaChevronRight size={50}/>
        </section>
    )
}

export default Testimonial
