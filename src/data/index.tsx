

  export const mockPosts =  [
  {
    id: 1,
    title: "What is React? A Complete Beginner's Guide",
    description: `What is React?

React is an open-source JavaScript library developed by Facebook. It is used for building interactive user interfaces (UIs), especially for Single Page Applications.

Core Concepts
- Components: These are the building blocks in React. They are isolated and reusable pieces of the UI.
- State: This is data that can change over time within a component.
- Props: This is data passed from a parent component to a child component.

React follows a declarative approach, which makes the code easier to understand and debug.`,
    createdAt: "November 10, 2025",
    author: "Jane Doe",
    category: "React",
    image: "https://placehold.co/800x400/1e40af/ffffff?text=React+Basics"
  },
  {
    id: 2,
    title: "Top 5 VS Code Extensions for Developers",
    description: `VS Code Extensions for Productivity

Visual Studio Code is a favorite code editor for many, and its real power lies in its extensions. Here are 5 that will help you:

1. ESLint: For finding errors and standardizing code style in JavaScript and TypeScript.
2. Prettier - Code formatter: To automatically format your code on save. It saves a lot of time.
3. GitLens: Shows you Git history directly within the editor. Very useful for teamwork.
4. Live Server: To run a local development server with live reload for HTML/CSS/JS files.
5. Tailwind CSS IntelliSense: If you use Tailwind CSS (like this project), this extension gives you great autocompletion.`,
    createdAt: "November 08, 2025",
    author: "John Smith",
    category: "Dev Tools",
    image: "https://placehold.co/800x400/059669/ffffff?text=VS+Code+Tools"
  },
  {
    id: 3,
    title: "Understanding React Hooks: useState and useEffect",
    description: `Hooks: A Game Changer in React

Before Hooks, Functional Components were simple and stateless. Hooks allow us to use state and other React features in them.

1. useState
This is the Hook we use to add state to a functional component. When the state changes, React re-renders the component.

\`const [count, setCount] = useState(0);\`

Here, \`count\` is the state variable, and \`setCount\` is the function we use to update it.

2. useEffect
This is the Hook we use to handle "Side Effects." These are things that happen outside the normal flow of the component, such as:

- Fetching data from an API.
- Directly manipulating the DOM.
- Setting Timers or Intervals.

\`useEffect\` runs after the component is rendered to the screen.`,
    createdAt: "November 05, 2025",
    author: "Alice Johnson",
    category: "React",
    image: "https://placehold.co/800x400/9333ea/ffffff?text=React+Hooks"
  },
  {
    id: 4,
    title: "The Power of Asynchronous JavaScript: Async/Await",
    description: `Asynchronous JavaScript

Modern web development relies heavily on asynchronous operations (like fetching data). Understanding Promises and Async/Await is essential.

Promises:
A Promise is an object representing the eventual completion or failure of an asynchronous operation. They replaced messy callback hell.

Async/Await:
The \`async/await\` syntax is simply syntactic sugar built on top of Promises, making asynchronous code look and behave a little more like synchronous code. It greatly improves readability.

Example:
\`async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}\``,
    createdAt: "October 30, 2025",
    author: "Bob Miller",
    category: "JavaScript",
    image: "https://placehold.co/800x400/f59e0b/ffffff?text=Async%2FAwait"
  },
  {
    id: 5,
    title: "Introduction to Tailwind CSS for Rapid UI Development",
    description: `Why Tailwind CSS?

Tailwind CSS is a utility-first CSS framework. Unlike traditional frameworks like Bootstrap that offer pre-built components, Tailwind gives you low-level utility classes.

Utility-First:
Instead of writing custom CSS, you apply classes directly in your HTML (or JSX) like \`bg-blue-500\`, \`p-4\`, and \`shadow-xl\`.

Benefits:
- Speed: Faster development since you rarely leave your markup.
- Customization: Every design is unique; you are not locked into pre-defined component styles.
- Responsiveness: Easy to handle different screen sizes with prefixes like \`md:text-lg\` or \`lg:flex\`.`,
    createdAt: "October 25, 2025",
    author: "Charlie Brown",
    category: "CSS",
    image: "https://placehold.co/800x400/dc2626/ffffff?text=Tailwind+CSS"
  }
];
export const categories: string[] = ["JavaScript", "React", "Css"];

 export const searchMap: { [key: string]: string } = {
  "contact": "/contact",
  "allPosts": "/posts",
  "home": "/",
};
