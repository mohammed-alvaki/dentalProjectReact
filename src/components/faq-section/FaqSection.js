import React from 'react'
import '../../App.css'
import Question from './Question'
function FaqSection() {

    const questions = [
        {
            id: 1,
            title: "How long does the implant procedure take?",
            desc: "The entire process typically takes 3-6 months. The initial surgery takes 1-2 hours, followed by a healing period before the final crown is placed."
        },
        {
            id: 2,
            title: "How long do dental implants last?",
            desc: "With proper care and maintenance, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear."
        },
        {
            id: 3,
            title: "Is the procedure painful?",
            desc: "No, the procedure is performed under local anesthesia or sedation. Most patients report minimal discomfort during recovery, easily managed with over-the-counter pain medication."
        },
        {
            id: 4,
            title: "What is the recovery time?",
            desc: "Most patients return to work within 1-2 days. Complete healing of the implant site takes 3-6 months, during which the implant integrates with your bone."
        },
        {
            id: 5,
            title: "Are dental implants covered by insurance?",
            desc: "Care for implants just like natural teeth: brush twice daily, floss regularly, and maintain regular dental check-ups. No special cleaning products are required."
        },
        {
            id: 6,
            title: "How do I care for my dental implants?",
            desc: "Care for implants just like natural teeth: brush twice daily, floss regularly, and maintain regular dental check-ups. No special cleaning products required."
        }
    ]
    return (
        <section id="faq-section" className="px-3 px-sm-5 px-xl-0">
            <div class="w-full">
                <div class="flex justify-center">
                    <div class="xl:w-10/12">
                        <div class="flex justify-center">
                            <div class="sm:w-11/12 md:w-10/12 lg:w-6/12">
                                <div class="text-center mb-5 px-3">
                                    <h2 class="title font-bold">Frequently Asked Questions</h2>
                                    <p class="txt">Get answers to common questions about dental implants</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            {questions.map((question) => <Question title={question.title} desc={question.desc} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection