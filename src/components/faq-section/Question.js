import React from 'react'
import '../../App.css'
function Question({ title, desc }) {
    return (
        <div class="md:w-1/2 p-3">
            <div class="faq-content p-4 bg-white">
                <h3 class="faq-title mb-3">{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Question