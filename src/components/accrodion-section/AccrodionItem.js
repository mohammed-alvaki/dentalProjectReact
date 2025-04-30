import React from 'react'
import '../../App.css'
function AccrodionItem({ question, answer }) {
    return (
        <div className="accordion-item ">
            <h5>{question}</h5>
            <p className='dark:text-gray-400'>{answer}</p>
        </div>
    )
}

export default AccrodionItem