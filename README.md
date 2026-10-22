# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

#### Desktop View

![](./Dekstop%20Screenshot.png)

#### Responsive Design

<img src="./Tablet Screenshto.png" style="height:20rem; width: auto">
<img src="./Mobile Screenshot.png" style="height:20rem; width: auto">

### Links

- Solution URL: [GitHub Repo](https://github.com/jonmc89/ping-coming-soon-page-master)
- Live Site URL: [Demo](https://jonmc89.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (For Client-Side form validation)
  For styles

### What I learned

Basic client side form validation for email.

```js
// Variables

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

// Form Validation

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value.trim();
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  if (!emailRegExp.test(emailValue)) {
    event.preventDefault();
    errorMessage.classList.add('error-message-show');
    emailInput.classList.add('input-error');
  }
});
```

### AI Collaboration

I did use AI (Microsoft Co-Pilot) to help troubleshoot after I had attempted to create the function myself, this was largly related to the JavaScript.

It was effective to helping find a simple typo in my logic and remove some HTML attributes that were affecting the runtime of the script on page load.

## Author

- Website - [JMWebDev](https://jonmckenziewebdev.co.uk/)
- Frontend Mentor - [@jonmc89](https://www.frontendmentor.io/profile/jonmc89)
- GitHub - [@jonmc89](https://github.com/jonmc89)
