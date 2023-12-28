<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->

# PictureHub

PictureHub is a social media application that allows users to share and explore pictures. This README provides an overview of the project structure and key components.

## Project Structure

The project is organized into several components and pages. Here's a brief overview of the main files and their functionalities:

### App.tsx

The main entry point for the application, defining the overall structure and routing. It uses React Router to manage navigation between different pages.

### SigninForm.tsx

Responsible for rendering the sign-in form. Uses React Hook Form for form management and validation. Communicates with the server to sign in the user and handles navigation after successful sign-in.

### SignupForm.tsx

Manages the sign-up form, utilizing React Hook Form for form handling and validation. Communicates with the server to create a new user account and signs in the user upon successful registration.

### RootLayout.tsx

Defines the root layout of the application, including the top bar, left sidebar, main content area (using React Router's Outlet), and a bottom bar.

## How to Run

1. Install dependencies: `npm install`
2. Run the application: `npm start`

Make sure to configure any environment variables and backend connections as needed.

## Dependencies

The project relies on various libraries and tools, including:

- React
- React Router
- React Hook Form
- Zod (for form validation)
- Lucide React (for icons)
- Tailwind CSS (for styling)

## Getting Started

To start working on the project:

1. Clone the repository: `git clone https://github.com/your-username/PictureHub.git`
2. Install dependencies: `npm install`
3. Create a `.env` file for environment-specific configurations.

## Contributing

If you'd like to contribute to PictureHub, please follow the standard Git flow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## Issues

If you encounter any issues or have suggestions for improvement, please create an issue on the GitHub repository.

Happy coding! 🚀
