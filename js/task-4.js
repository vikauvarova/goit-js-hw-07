"use strict";

const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!formData.get('email') || !formData.get('password')) {
        alert('All form fields must be filled in');
    } else {
        const user = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        console.log(user);
        form.reset();
    }
})



