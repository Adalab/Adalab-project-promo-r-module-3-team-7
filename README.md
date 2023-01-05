# Project's title: Awesome Profile Cards: a refactor of an existing page

## Description

Welcome to the profile card factory place! If you came to this site, you'll probably be looking for a good way of creating personalized cards for different aspects of your life and even share it in Twitter!

The objetive of this project is to refactor an existing and functioning page (http://beta.adalab.es/project-promo-r-module-2-team-9/), redoing the code to work with React instead of JS, and creting our own server and API to manage the data, as well as a DDBB.

Which are the improvements in relation to the previous page?

- The card is more shareable and you can use it whenever you want with the link, as it is permanent thanks to the DDBB.
- The agility and speed in the creation of the card, in the case a lot of people is using it.
- The maintenance of the page and its modifications are easier thanks to React and its components.

## Technologies

This web page was made using HTML5, SaSS, JSX, React, localStorage, ExpressJS, NodeJS, SQLite and EJS.

Please, take into account that all HTML, SaSS and React files are divided in partials and they are named the same so it is easier to loof for the code. All of them have descriptive names according to the place of the page they are developing or working on.

## Table of contents and How to Use the Project

### FrontEnd vs BackEnd

This project is build over two different projects.

- In root ('src', 'views' folders) you can find the server data and the DDBB data (BackEnd).
- In 'web' folder there is all the information for the FrontEnd development and the appeareance of the web page (FrontEnd).

### Main landing

It is the welcoming page, you should click on 'Comenzar'('Start') to go the create cards page. All the other elements are static.

### Create card landing

On the left, you can see a toggled form that covers all the options you have to modified and personalized your card. This form can only open one section at a time, and to close one, you need to open another.

The sections are:

- 'Diseña'('Design'): you can choose between 3 different palettes.
- 'Rellena'('Fill'): you need to fill all the boxes so the information in your cards is updated. All fields are compulsory except the telephone number ('Teléfono').NOTE: you can add either an image or a GIF that represents you for your card. NOTE: in LinkedIn and GitHub boxes, you only need to add your profile, not the complete url.
- 'Comparte'('Share'): allows you to create your card in two different ways: by giving you an url to share everywhere you like, or by creating for you a new twit in you Twitter account ready to be sent. If there is anything wrong with your information that you didn't detected before, this won't create your card, but to reopened the 'Rellena' section so you can fix it.

On the right, there is the preview, that means that you can see how is your card looking at any moment of the developing process. Together with this, you can always click the reset button if you are unhappy an restart everything.

As this page works with localStorage, don't you be worry if your cards is reloaded against your will, because all the information you added, will be there when you come back :)

## How to install the project

If you want to download this project, you'll need to:

1. Clone all files in this repository
2. Open two different terminals:

- In root: run 'npm install'
- In 'web' folder: run 'npm install'
  After this step, you will have created new_modules folder in each of the folders you have open a terminal. This will allow you to use the page.

3. Continue with the two terminals:
   a. In root: run 'npm run dev' to lunch the server (production)
   b. In 'web' folder: run 'npm start' to lunch the FrontEnd (development)
4. You can now play.

## Credits

This web page is created by Raquel, Tatiana, Bárbara and Laura under the Adalab supervision.

## Thanks to

You, user! We're very grateful that you are using our page, so we only want you to enjoy yourself using it, as well as we did developing it!

Now, hands to the job!
