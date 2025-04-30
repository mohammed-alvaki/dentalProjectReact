import React from 'react'
import '../../App.css'
import Card from './Card.js'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Benefits() {

    const cardsContent = [
        {
            icon: <i className="fa-solid fa-tooth fa-2xl text-white"></i>,
            title: "Lifetime Guarantee",
            desc: "Our premium implants include a lifetime warranty, keeping yours safe always.",
            b1: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Titanium Construction
                </>
            ),
            b2: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Natural Look & Feel
                </>
            )
        },
        {
            icon: <i className="fa-regular fa-face-smile-beam fa-2xl text-white"></i>,
            title: "Painless Procedure",
            desc: "Advanced sedation and gentle methods provide a calm, stress-free visit.",
            b1: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Sedation Options
                </>
            ),
            b2: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Quick Recovery
                </>
            )
        },
        {
            icon: <i className="fa-solid fa-shield-halved fa-2xl text-white"></i>,
            title: "Expert Care Team",
            desc: "Our premium implants include a lifetime warranty, keeping yours safe always.",
            b1: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Titanium Construction
                </>
            ),
            b2: (
                <>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i> Natural Look & Feel
                </>
            )
        }
    ];

    return (
        <section id="benefits-section" className="px-3">
            <div className="w-full">
                <div className="flex justify-center">
                    <div className="sm:w-11/12 md:w-10/12 lg:w-5/12">
                        <div className="text-center mb-5 px-3">
                            <h2 className="title font-bold">Why Choose Our Dental Implants?</h2>
                            <p className="txt">Experience the gold standard in dental implant technology with our
                                comprehensive
                                care
                                approach</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex px-4 sm:px-6 md:px-3">
                    <div className="w-1/12 hidden md:block xl:hidden">
                        <div
                            className="pw-new-prev1 right-arrow text-end mr-3 hidden md:flex justify-end items-center h-full">
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>
                    </div>
                    <div className="md:w-10/12 mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            grabCursor={true}
                            pagination={{ el: ".pw-new-pagination1", clickable: true }}
                            navigation={{ nextEl: ".pw-new-next1", prevEl: ".pw-new-prev1" }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 25
                                }
                            }}

                        >
                            {cardsContent.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card icon={item.icon} title={item.title} desc={item.desc} b1={item.b1} b2={item.b2} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-1/12 hidden md:block xl:hidden">
                        <div
                            className="pw-new-next1 left-arrow ml-3 text-start hidden md:flex items-center justify-start h-full">
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 md:px-3">
                    <div className="flex justify-between items-center">
                        <div className="pw-new-prev1 cursor-pointer md:hidden">
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>

                        <div className="text-center flex items-center justify-center md:mx-auto md:mt-4">
                            <div className="pw-new-pagination1"></div>
                        </div>

                        <div className="pw-new-next1 cursor-pointe md:hidden">
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits