import React from 'react'
import '../../App.css'
function Card({ icon, title, desc, b1, b2 }) {
    return (
        <div className="content p-6 my-4 h-full">
            <div className="icon flex justify-center items-center mb-4">
                {icon}
            </div>
            <h4 className='mb-2 text-2xl'>{title}</h4>
            <p className='mb-4'>{desc}</p>
            <p className="mb-1">{b1}</p>
            <p>{b2}</p>
        </div>
    );
}

export default Card