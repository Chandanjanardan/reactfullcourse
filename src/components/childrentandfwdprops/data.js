export const EXAMPLES = {
    components: {
      title: "components",
      description: "Components are the building blocks of a React application. A component encapsulates a piece of UI and logic in a reusable form. A simple functional component example is:",
      code: `function Welcome() {
        return <h1>Hello world!</h1>;
      }`,
    },
    JSX: {
      title: "JSX",
      description: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in your JavaScript files. JSX makes it easier to visualize the structure of the UI. Here's an example of JSX:",
      code: `const element = <h1>Hello, world!</h1>;`,
    },
    IMG: {
      title: "IMG",
      description: "In React, you can import images and use them in your components. This is how you can import and display an image:",
      code: `import logo from './logo.png';
  
      function LogoComponent() {
        return <img src={logo} alt="Logo" />;
      }`,
    },
  };
  
  console.log(EXAMPLES["JSX"])