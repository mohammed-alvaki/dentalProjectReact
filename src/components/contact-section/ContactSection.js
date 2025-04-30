import React from 'react'
import '../../App.css'
import Form from '../Form'
function ContactSection() {

    return (
        <section id="contact-section">
            <div className="contact-part">
                <div className="w-full">
                    <div className="flex flex-wrap justify-center">
                        <div className='w-full md:w-6/12 md:order-2'>
                            <div
                                className="contact py-10 text-center px-6 sm:px-10 flex flex-col justify-center h-full md:order-2">
                                <h2 className="title font-bold mb-4 text-center">Get Your Free Consultation</h2>
                                <Form />
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 md:order-1">
                            <div className="img-cont">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection