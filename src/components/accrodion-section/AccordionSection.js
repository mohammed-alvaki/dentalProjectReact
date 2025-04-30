import React from 'react';
import '../../App.css';
import { Accordion } from "flowbite-react";

function AccordionSection() {
    const accordionData = [
        {
            question: "Question 1",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        },
        {
            question: "Question 2",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        },
        {
            question: "Question 3",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        },
        {
            question: "Question 4",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        }
    ];

    return (
        <section id="faq-accordion-section" className="px-3 md:px-0 md:mb-12">
            <div className="w-full">
                <div className="flex justify-center">
                    <div className="md:w-1/2">
                        <div className="accordion-part px-3 sm:px-6 lg:px-10 xl:px-16 py-16">
                            <h2 className="title text-center font-bold">Frequently Asked Questions</h2>
                            <p className="txt text-center mb-8 px-3 md:px-0">
                                Get answers to common questions about dental implants
                            </p>

                            <Accordion className='border-none divide-none space-y-1 max-w-[370px] md:max-w-full mx-auto' collapseAll>
                                {accordionData.map((item, index) => (
                                    <Accordion.Panel key={index}>
                                        <Accordion.Title className='bg-white data-[open=true]:shadow-none hover:bg-blue-200 md:hover:bg-blue-100 text-gray-800 focus:ring-0 border-none rounded-lg'>{item.question}</Accordion.Title>
                                        <Accordion.Content className='bg-gray-50 md:bg-slate-100 text-gray-500'>
                                            <p>{item.answer}</p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                ))}
                            </Accordion>

                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <div className="img-cont h-full flex items-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccordionSection;
