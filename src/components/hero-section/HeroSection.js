import React, { useState } from 'react';
import '../../App.css';
import Form from '../Form';
import { Modal } from "flowbite-react";
function HeroSection() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <section id='hero-section'>
                <div className='max-w-full'>
                    <div className='flex justify-center'>
                        <div className='xl:w-10/12 px-2 xl:px-0'>
                            <div className='flex flex-wrap'>
                                <div className='md:w-1/2 px-2'>
                                    <div className='flex items-center h-full'>
                                        <div>
                                            <h6 className='sub-title p-4 bg-white mb-3'>
                                                Advanced Dental Care
                                            </h6>
                                            <h1 className='main-title fs-title font-bold'>
                                                Restore Your Perfect Smile With Modern Implants
                                            </h1>
                                            <p className="txt mb-4">
                                                Experience the confidence of a natural-looking smile with our
                                                state-of-the-art dental implant solutions. Starting at $2,999 per implant.
                                            </p>
                                            <div className="mb-4 flex flex-col sm:flex-row gap-3">
                                                <button type="button"
                                                    className="left-btn decoration-none px-6 py-4 text-white text-center block"
                                                    onClick={() => setOpenModal(true)}>Free
                                                    Consultation</button>
                                                <button type="button"
                                                    className="right-btn decoration-none px-6 py-4 bg-white text-center block">
                                                    View Patient Results
                                                </button>
                                            </div>
                                            <div className='flex items-center mb-5 md:mb-0'>
                                                <img className='prof-img' src={'./imgs/prof.jpg'} alt='img' />
                                                <img className='prof-img' src={'./imgs/prof.jpg'} alt='img' />
                                                <img className='prof-img' src={'./imgs/prof.jpg'} alt='img' />
                                                <span className="ml-1 md:ml-4">
                                                    <strong>500+</strong> Successful Implants
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-1/2 px-2'>
                                    <div className='flex items-center h-full'>
                                        <div className='img-cont overflow-hidden'>
                                            <img className='max-w-full h-auto' src={'./imgs/ai-img.jpg'} alt='img' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={openModal} onClose={() => setOpenModal(false)} dismissible size="md" position='top-center' style={{ height: 'auto' }}>
                    <Modal.Header className='py-[10px] items-center'><h2 className='font-bold'>Contact us</h2></Modal.Header>
                    <Modal.Body className='px-3'>
                        <Form />
                    </Modal.Body>
                </Modal>
            </section>
        </>
    );
}

export default HeroSection;
