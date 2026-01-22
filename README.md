# 3D Developer Portfolio

A modern, interactive developer portfolio website built with React, Three.js, and TailwindCSS. Features immersive 3D elements, smooth animations, and a responsive design to showcase projects and skills.

## 🚀 Features

- **3D Hero Section**: Interactive 3D elements using React Three Fiber.
- **Responsive Design**: Fully optimized for all devices provided by TailwindCSS.
- **Smooth Animations**: powered by GSAP and Framer Motion (if applicable).
- **Contact Form**: Functional email integration via EmailJS.
- **Modern UI/UX**: Clean, dark-themed aesthetic with glassmorphism effects.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [Drei](https://github.com/pmndrs/drei)
- **Animations**: [GSAP](https://gsap.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/luckieluckie/MyPortfolio.git
    cd MyPortfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *(Note: The project comes with a `.env.example` reference if available)*

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🚀 Deployment

This project handles environmental variables for deployment. Ensure you add your variables to your hosting platform (e.g., Vercel, Netlify).

## 📄 License

This project is licensed under the MIT License.
