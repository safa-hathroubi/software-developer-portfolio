<a name="readme-top"></a>

# Modern 3D Portfolio using React, Three.js and Typescript

![Modern 3D Portfolio using React, Three.js and Typescript](/.github/images/safa_portfolio_screenshot.png "Modern 3D Portfolio using React, Three.js and Typescript")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Learn More](#books-learn-more)
- [Deploy on Netlify](#page_with_curl-deploy-on-netlify)
- [Give A Star](#star-give-a-star)
- [Give A Star](#star-give-a-star)

</details>

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# email js configuration
VITE_APP_SERVICE_ID=XXXXXXXXXXXXXXXX
VITE_APP_TEMPLATE_ID=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_KEY=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

5. ### Service ID (Replace VITE_APP_SERVICE_ID):

- Visit the website where you are obtaining the service ID.
- Log in to your account or sign up if needed.
- Navigate to the section related to API keys or services.
- Find and copy the Service ID associated with your account.

6. ### Template ID (Replace VITE_APP_TEMPLATE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up if necessary.
- Access the section for email templates or integration.
- Locate the template you want to use and copy its Template ID.

7. ### EmailJS Public Key (Replace VITE_APP_EMAILJS_KEY):

- Go to the EmailJS website.
- Log in to your account or create one if you haven't.
- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

![Copy public key](/.github/images/emailjs_screenshot.png "Copy public key")

8. ### EmailJS Receiver (Replace VITE_APP_EMAILJS_RECEIVER):

- Choose the email address where you want to receive emails.
- If needed, create an email address or use an existing one.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Showcase your skills](/.github/images/technologies_screenshot_portfolio.png "Showcase your skills")

![Showcase your projects](/.github/images/projects_screenshot.png "Showcase your projects")

![Modern UI/UX](/.github/images/experience_screenshot.png "Modern UI/UX")

![Functional Contact form](/.github/images/contact_screenshot.png "Functional Contact form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://javascript.dev/ "Javascript")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies used in this Portfolio.

- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser): ^3.11.0
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^9.96.1
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^8.13.4
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^10.12.18
- [maath](https://www.npmjs.com/package/maath): ^0.10.7
- [react](https://www.npmjs.com/package/react): ^18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.2.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^6.21.3
- [react-tilt](https://www.npmjs.com/package/react-tilt): ^1.0.2
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): ^3.6.0
- [sonner](https://www.npmjs.com/package/sonner): ^1.3.1
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.1
- [three](https://www.npmjs.com/package/three): ^0.160.1
- [@types/react](https://www.npmjs.com/package/@types/react): ^18.2.48
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.2.18
- [@types/react-vertical-timeline-component](https://www.npmjs.com/package/@types/react-vertical-timeline-component): ^3.3.6
- [@types/tailwindcss](https://www.npmjs.com/package/@types/tailwindcss): ^3.1.0
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^4.0.3
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.17
- [postcss](https://www.npmjs.com/package/postcss): ^8.4.31
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.3
- [typescript](https://www.npmjs.com/package/typescript): ^5.3.3
- [vite](https://www.npmjs.com/package/vite): ^5.0.12


## :books: Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## :page_with_curl: Deploy on Netlify

The easiest way to deploy your Vite.js app is to use the [Netlify Platform](https://netlify.app).

Check out [Vite.js deployment documentation](https://vitejs.dev/guide/static-deploy) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## Credits

This project was originally started by [Sanidhya Kumar Verma](https://github.com/sanidhyy/3d-portfolio/). I took the initial version of the project and edited it to fit my personal needs and style, transforming it into my own thing.

Thank you to Sanidhya for the fantastic foundation!

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
