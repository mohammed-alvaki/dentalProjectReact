import React from 'react'
import '../../App.css'
function Card({ txt, name }) {
    return (
        <div class="pw-box">
            <div class="card text-center text-dark">
                <div class="top-part relative p-5 pb-16 overflow-hidden">
                    <div class="text-start mb-3">
                        <i class="fa-solid fa-quote-left fa-2xl"></i>
                    </div>
                    <p className='mb-3'>{txt}</p>
                    <div
                        class="avatar mx-auto flex justify-center items-center">
                        <i class="fa-solid fa-user text-white"></i>
                    </div>
                    <div class="text-end">
                        <i
                            class="fa-solid fa-quote-left fa-rotate-180 fa-2xl"></i>
                    </div>
                </div>
                <div class="bottom-part p-5">
                    <div class="stars">★★★★★</div>
                    <p class="author">{name}</p>
                </div>
            </div>
        </div>
    );
}



export default Card