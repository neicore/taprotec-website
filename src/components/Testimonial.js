import React from 'react'
import { testimonial, testimonialContent } from '../styles/testimonial.module.css'

function Testimonial() {

    return (
        <section className={testimonial}>
            <i>Icon</i>
            <div className={testimonialContent}>
                <img src="#" alt="Client Image" />
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sunt ducimus, iure commodi quisquam reiciendis eius voluptatem, expedita sapiente tempora neque beatae cupiditate pariatur corporis voluptatum facilis veritatis nesciunt.</p>
                    <h3>— John Doe, CEO Acme Entreprises</h3>
                </div>
            </div>
            <i>Icon</i>
        </section>
    )
}

export default Testimonial
