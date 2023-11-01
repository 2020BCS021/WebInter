import React from 'react';
const About = () => {
    const imageUrl = "https://images.ctfassets.net/2d5q1td6cyxq/7gcUUKepYRaTxlLcWpYE9m/4c98139ef8ed89d483cffc076d61d5c1/RST_RS_0581_KB_05_sRGB_Large__1_.jpg?w=1016&h=678&fm=avif&q=85&fit=scale";
  return (
<>
    <div className="max-w-[1240px] mx-auto">
    <div className="w-full ">
      <img
        src={imageUrl}
        alt="Description of the image"
        className="w-full h-50 md:h-100 lg:h-100 xl:h-100"
      />
    </div>  



    
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-4">What is an Online Food Ordering System?</h1>
      <p className="text-gray-700">
        An online ordering system is software that lets your restaurant accept and manage orders placed online. An online food ordering system generally has two components – a website or app that allows customers to view the menu and place an order, and an admin interface that enables the restaurant to receive and fulfill customer orders.
      </p>

      <p className="text-gray-700 mt-4">
        Online food ordering systems are a great option for restaurants looking to respond to a rapidly changing operating environment – and most are relatively easy to set up. If you’ve been considering adding an online sales channel to your restaurant but you’re not sure where to start, read on for insights and tips on choosing the right online ordering system for your business.
      </p>
    </div>

<div >
<div className="p-4 md:p-8 lg:p-12  bg-gray-50">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Installation</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">1. Create your project</h6>
          <p>Start by creating a new React project with Create React App v5.0+.</p>
          <code>npx create-react-app my-project</code>
          <br/>
          <code>cd my-project</code>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 lg:pl-8">
          <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">2. Install Tailwind CSS</h6>
          <p>Create your project. Start by creating a new React project with Create React App v5.0+ if you don't have one already set up.</p>
          <code>npx create-react-app my-project</code>
          <br/>
          <code>cd my-project</code>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full md:w-1/2">
          <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">3. Configure your template paths</h6>
          <p>Add the paths to all of your template files in your tailwind.config.js file.</p>
          <p>
          Update like this in "tailwind.config.js"
          <br/>
         "content: [
         "./src/**/*.{"js,jsx,ts,tsx"}",
        ],"

          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 lg:pl-8">
          <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">4. Add the Tailwind directives to your CSS</h6>
          <p>Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.</p>
        </div>
      </div>
      <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4">5. Start your build process</h6>
      <p>Run your build process with "npm run start".</p>
    </div>
    
    </div>

    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Main Concepts of React</h1>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Components</h2>
        <p className="text-gray-700">
          React is all about building user interfaces with reusable components. Components can be thought of as building blocks of your application. They encapsulate the UI logic and can be composed to create complex UIs.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Virtual DOM</h2>
        <p className="text-gray-700">
          React uses a virtual representation of the DOM for efficient rendering. It calculates the most efficient way to update the actual DOM, reducing the need for direct manipulation. This enhances performance by minimizing unnecessary updates to the DOM.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">State and Props</h2>
        <p className="text-gray-700">
          Components can have both state and props. State represents the internal data of a component, allowing it to manage its own data and re-render when the state changes. Props, on the other hand, are used for passing data from parent to child components, making it easy to share data and configure child components.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Unidirectional Data Flow</h2>
        <p className="text-gray-700">
          Data in a React app flows in one direction, from parent to child. This makes it easier to understand how data changes affect the application's state and leads to predictable behavior.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Lifecycle Methods</h2>
        <p className="text-gray-700">
          React components have lifecycle methods that allow you to hook into different stages of a component's existence, like when it's created, updated, or destroyed. These methods provide opportunities to perform setup and cleanup tasks.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">JSX</h2>
        <p className="text-gray-700">
          JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's used to describe what the UI should look like and makes the component structure more readable.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">React Router</h2>
        <p className="text-gray-700">
          For single-page applications, React Router is used to manage routing and navigation. It allows you to switch between different views or components, enabling a seamless user experience with client-side routing.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">State Management</h2>
        <p className="text-gray-700">
          While React has its built-in state management, more complex applications often use external libraries like Redux or MobX for global state management. These libraries provide a centralized way to manage and update application-wide state.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Hooks</h2>
        <p className="text-gray-700">
          Introduced in React 16.8, hooks allow you to use state and other React features in functional components, making it easier to reuse stateful logic. Hooks like useState and useEffect provide a more concise and flexible way to work with component logic.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Conditional Rendering</h2>
        <p className="text-gray-700">
          You can conditionally render components or elements based on data or user interactions, making your app dynamic and interactive. This enables you to show or hide content based on specific conditions.
        </p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">API Integration</h2>
        <p className="text-gray-700">
          React applications often need to fetch data from external sources, like RESTful APIs. This involves making HTTP requests to retrieve or send data. Popular libraries like Axios or the built-in fetch API are used to interact with these APIs. React components can then use the retrieved data to update their state, rendering dynamic content from the API responses.
        </p>
      </div>
    </div>
    <div className="bg-gray-50 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Reference</h1>
      <p>
        <a
          href="https://legacy.reactjs.org/docs/getting-started.html"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          React
        </a>
        <br/>
        <a
          href="https://tailwindcss.com/docs/guides/create-react-app"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Tailwind
        </a>
      </p>
    </div>
    </div>
    </>
  )}
  export default About;