import React from 'react'
import '../../App.css'
import Review from './Review.js'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Testimonials() {

    const reviwContent = [
        {
            id: 1,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        },
        {
            id: 2,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        }, {
            id: 3,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        }, {
            id: 4,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        }, {
            id: 5,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        },
        {
            id: 6,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        },
        {
            id: 7,
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut sint explicabo labore aliquam vitae ut est repellat repellendus veniam voluptatem soluta distinctio ex alias neque.",
            name: "Sr. John Doe",
        }
    ];

    return (
        <section id="testimonial-section" className="px-3 sm:px-5 xl:px-0">
            <div className="w-full xl:w-11/12 mx-auto px-6">
                <div className="flex justify-center">
                    <div className="sm:w-11/12 md:w-10/12 lg:w-5/12">
                        <div className="text-center mb-5">
                            <h2 className="title font-bold">Why Choose Our Dental Implants?</h2>
                            <p className="txt">Experience the gold standard in dental implant technology with our
                                comprehensive
                                care
                                approach</p>
                        </div>
                    </div>
                </div>

                <div className="w-full block md:flex">
                    <div className="w-1/12 hidden md:block">
                        <div
                            className="pw-new-prev3 right-arrow text-end mr-3 hidden md:flex justify-end items-center h-full">
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>
                    </div>
                    <div className="md:w-10/12">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            grabCursor={true}
                            pagination={{ el: ".pw-new-pagination3", clickable: true }}
                            navigation={{ nextEl: ".pw-new-next3", prevEl: ".pw-new-prev3" }}
                            breakpoints={{
                                400: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 15,
                                },
                                550: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 15,
                                },
                                992: {
                                    slidesPerView: 3.4,
                                    spaceBetween: 15,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 25
                                }
                            }}

                        >
                            {reviwContent.map((review) => (
                                <SwiperSlide key={review.id}>
                                    <Review name={review.name} txt={review.txt} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-1/12 hidden md:block">
                        <div
                            className="pw-new-next3 left-arrow ml-3 text-start hidden md:flex items-center justify-start h-full">
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-3">
                    <div className="flex justify-between items-center">
                        <div className="pw-new-prev3 cursor-pointer md:hidden">
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>

                        <div className="text-center flex items-center justify-center md:mx-auto md:mt-4">
                            <div className="pw-new-pagination3"></div>
                        </div>

                        <div className="pw-new-next3 cursor-pointe md:hidden">
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials