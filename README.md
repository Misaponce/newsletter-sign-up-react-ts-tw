# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution is the same to [Newsletter sign-up form with success message challenge on Frontend Mentor](https://github.com/Misaponce/Newsletter-sign-up-form-frontend-mentor), however it was made using NextJs, TypeScript and Tailwind. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets//screenshots/screenshot.png)


### Links

- Solution URL: [-Github Repo](https://github.com/Misaponce/Newsletter-sign-up-form-frontend-mentor)
- Live Site URL: [-Live Site](https://misaponce.github.io/Newsletter-sign-up-form-frontend-mentor/)

## My process

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

### What I learned

I decided to submit this new solution to practice my React skills as well as get my hands into Tailwind and TypeScript since this is my first project working with both technologies.


```ts
```After lots of tutorials an ChatGPT questions, I was able to unerstand the usage of an Interface in TypeScript and here is an example.```
import { MouseEventHandler } from "react";

export interface CardProps {
    card_Title: string;
    card_Text: string;
    card_List?: string[];
    onSubmit?: MouseEventHandler<HTMLFormElement>;
    email?: string;
    // This is a generic type provided by React. It represents a function that can be used to update the state of a React component.
    setEmail?: React.Dispatch<React.SetStateAction<string>>;
}
```

### Continued development

Details, like form validation are missing but defenitely is something I have to take a look at, as well as having data transfer from one component to another. For this solution I used local storage to take the input email from one component to another and in that way being able to show it on the success card.

### Useful resources

- [Tailwind Docs](https://tailwindcss.com/docs/installation) - All question were answer here.
- [Next.js Docs](https://www.w3schools.com/) - Life changer to find very usefull information.


## Author

- Website - [Misael Ponce](https://portofolio-misaponce.vercel.app/)
- Frontend Mentor - [@Misaponce](https://www.frontendmentor.io/profile/Misaponce)

