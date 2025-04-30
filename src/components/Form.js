import React from 'react';
import { useState } from "react";
import '../App.css';

function Form() {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    return (
        <form action="" onSubmit={(event) => {
            event.preventDefault();
        }}>
            <input className="mb-3 py-2 px-3 w-full" type="text" placeholder="Your Name" value={formValue.name} onChange={(event) => {
                setFormValue({ ...formValue, name: event.target.value });
            }} />
            <input className="mb-3 py-2 px-3 w-full" type="email" placeholder="Your Email" value={formValue.email} onChange={(event) => {
                setFormValue({ ...formValue, email: event.target.value });
            }} />
            <input className="mb-3 py-2 px-3 w-full" type="tel" placeholder="Phone Number" value={formValue.phone} onChange={(event) => {
                setFormValue({ ...formValue, phone: event.target.value });
            }} />
            <textarea className="mb-4 py-2 px-3 w-full" rows="3"
                placeholder="Your Message" value={formValue.message} onChange={(event) => {
                    setFormValue({ ...formValue, message: event.target.value });
                }}></textarea>
            <button className="btn-submit border-0 py-[12px] w-full text-white" type="submit">Request Consultation</button>
        </form>
    );
}

export default Form;
