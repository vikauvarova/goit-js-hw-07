"use strict";

const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
    } else {
        const user = {
            email: email,
            password: password 
        };
        console.log(user);
        form.reset();
    }
})



