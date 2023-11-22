import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [alerted, setAlerted] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        const inputs = Array.from(e.target.querySelectorAll('input'));
        if (!alerted && inputs.some(input => input.value == '') || e.target.querySelector('textarea').value == '') {
            alert('Formu tam yazin');
            setAlerted(true);
        }
        else {
            alert("Cavabiniz qeyde alindi");
            inputs.forEach(f => {
                f.value = "";
            })
            e.target.querySelector('textarea').value = '';
        }
    }
    return (
        <div className='form'>
            <form action="sdf" onSubmit={submit}>
                <input type="text" placeholder="Your name.." />
                <input type="text" placeholder="Your surname.." />
                <input type="text" placeholder="Your phone number.." />
                <input type="email" placeholder="Your email.." />
                <textarea name="" id="" cols="91" rows="10"></textarea>
                <button >Send</button>
            </form>
        </div>
    )
}

export default Form