import { POSTS } from "../utils/data/posts";
import prisma from "../lib/connect";

console.log(POSTS);

const insertPosts = async () => {
  await prisma.post.updateMany({
    data: [
      // Add a colon (:) after 'data'

      {
        id: "1", // Converti en chaîne de caractères
        catSlug: "react",
        cat: "react",
        title: "React State Management: Choosing the Right Solution",
        image: "/react-state-management.jpg",
        content:
          "Explore different state management solutions in React and choose the one that fits your needs.",
        createdAt: new Date("2023-01-15T00:00:00Z"),
        view: 25,
        nbComments: 8,
        slug: "react-state-management-choosing-right-solution",
        userEmail: "john.reactdev@example.com", // Ajout d'un email fictif pour l'exemple
      },
      {
        id: "2",
        catSlug: "nextjs",
        cat: "nextjs",
        title: "Server-Side Rendering with Next.js: A Practical Guide",
        image: "/nextjs-ssr.jpg",
        content:
          "Learn how to implement server-side rendering in Next.js for improved performance and SEO.",
        createdAt: new Date("2023-02-02T00:00:00Z"),
        view: 18,
        nbComments: 5,
        slug: "server-side-rendering-nextjs-practical-guide",
        userEmail: "alice.nextjsdev@example.com",
      },
      {
        id: "3",
        catSlug: "react-native",
        cat: "react-native",
        title: "Building Cross-Platform Mobile Apps with React Native",
        image: "/react-native-cross-platform.jpg",
        content:
          "Step-by-step guide to building cross-platform mobile applications using React Native.",
        createdAt: new Date("2023-02-18T00:00:00Z"),
        view: 32,
        nbComments: 10,
        slug: "building-cross-platform-mobile-apps-react-native",
        userEmail: "bob.mobiledev@example.com",
      },
      {
        id: "4",
        catSlug: "css",
        cat: "css",
        title: "Advanced CSS Techniques for Modern Web Design",
        image: "/advanced-css-techniques.jpg",
        content:
          "Explore advanced CSS techniques to enhance the visual appeal and interactivity of your web designs.",
        createdAt: new Date("2023-03-05T00:00:00Z"),
        view: 22,
        nbComments: 7,
        slug: "advanced-css-techniques-modern-web-design",
        userEmail: "eva.cssdesigner@example.com",
      },
      {
        id: "5",
        catSlug: "javascript",
        cat: "javascript",
        title: "Mastering JavaScript Promises and Asynchronous Programming",
        image: "/javascript-promises-async.jpg",
        content:
          "In-depth tutorial on mastering JavaScript promises and asynchronous programming concepts.",
        createdAt: new Date("2023-03-20T00:00:00Z"),
        view: 28,
        nbComments: 6,
        slug: "mastering-javascript-promises-asynchronous-programming",
        userEmail: "peter.jsninja@example.com",
      },
      {
        id: "6",
        catSlug: "react",
        cat: "react",
        title: "Building Reusable React Components: Best Practices",
        image: "/reusable-react-components.jpg",
        content:
          "Best practices and tips for building reusable and maintainable React components in your projects.",
        createdAt: new Date("2023-04-10T00:00:00Z"),
        view: 35,
        nbComments: 9,
        slug: "building-reusable-react-components-best-practices",
        userEmail: "grace.reacter@example.com",
      },
      {
        id: "7",
        catSlug: "nextjs",
        cat: "nextjs",
        title: "Dynamic Routes in Next.js: A Comprehensive Guide",
        image: "/nextjs-dynamic-routes.jpg",
        content:
          "Comprehensive guide on implementing dynamic routes in Next.js for flexible page rendering.",
        createdAt: new Date("2023-04-25T00:00:00Z"),
        view: 19,
        nbComments: 4,
        slug: "dynamic-routes-nextjs-comprehensive-guide",
        userEmail: "david.nextjspro@example.com",
      },
      {
        id: "8",
        catSlug: "react-native",
        cat: "react-native",
        title: "State Management in React Native Apps: Redux vs. Context API",
        image: "/react-native-state-management.jpg",
        content:
          "Comparison of state management solutions, Redux and Context API, in React Native applications.",
        createdAt: new Date("2023-05-12T00:00:00Z"),
        view: 40,
        nbComments: 11,
        slug: "state-management-react-native-redux-context-api",
        userEmail: "mia.rndeveloper@example.com",
      },
      {
        id: "9",
        catSlug: "css",
        cat: "css",
        title: "Responsive Design Patterns with CSS Grid and Flexbox",
        image: "/responsive-design-css.jpg",
        content:
          "Explore responsive design patterns using CSS Grid and Flexbox for modern web layouts.",
        createdAt: new Date("2023-06-01T00:00:00Z"),
        view: 27,
        nbComments: 8,
        slug: "responsive-design-patterns-css-grid-flexbox",
        userEmail: "ryan.cssmaster@example.com",
      },
      {
        id: "10",
        catSlug: "javascript",
        cat: "javascript",
        title: "ES6+ Features Every JavaScript Developer Should Know",
        image: "/es6-javascript.jpg",
        content:
          "Overview of essential ES6+ features and how they can improve your JavaScript development.",
        createdAt: new Date("2023-06-18T00:00:00Z"),
        view: 33,
        nbComments: 10,
        slug: "es6-features-javascript-developers-should-know",
        userEmail: "sara.jsexplorer@example.com",
      },
      {
        id: "11",
        catSlug: "react",
        cat: "react",
        title: "React Hooks: A Deep Dive into Modern React State Management",
        image: "/react-hooks-deep-dive.jpg",
        content:
          "In-depth exploration of React Hooks and their role in modern React state management.",
        createdAt: new Date("2023-07-05T00:00:00Z"),
        view: 24,
        nbComments: 6,
        slug: "react-hooks-deep-dive-modern-react-state-management",
        userEmail: "tom.reacthooksfan@example.com",
      },
      {
        id: "12",
        catSlug: "nextjs",
        cat: "nextjs",
        title:
          "SEO Optimization in Next.js: Best Practices for Higher Rankings",
        image: "/nextjs-seo-optimization.jpg",
        content:
          "Best practices for optimizing your Next.js applications for search engines and higher rankings.",
        createdAt: new Date("2023-07-20T00:00:00Z"),
        view: 31,
        nbComments: 9,
        slug: "seo-optimization-nextjs-best-practices-higher-rankings",
        userEmail: "lily.nextjsseo@example.com",
      },
      {
        id: "13",
        catSlug: "react-native",
        cat: "react-native",
        title:
          "Navigation in React Native: Choosing the Right Navigation Library",
        image: "/react-native-navigation.jpg",
        content:
          "Guide to choosing the right navigation library for seamless navigation in React Native apps.",
        createdAt: new Date("2023-08-08T00:00:00Z"),
        view: 23,
        nbComments: 7,
        slug: "navigation-react-native-choosing-right-library",
        userEmail: "mike.rnnavigator@example.com",
      },
      {
        id: "14",
        catSlug: "css",
        cat: "css",
        title: "SASS and SCSS: Enhancing CSS with Preprocessors",
        image: "/sass-scss-css.jpg",
        content:
          "Introduction to SASS and SCSS and how they enhance CSS with variables, mixins, and more.",
        createdAt: new Date("2023-08-25T00:00:00Z"),
        view: 29,
        nbComments: 8,
        slug: "sass-scss-enhancing-css-preprocessors",
        userEmail: "diana.csspreprocessor@example.com",
      },
      {
        id: "15",
        catSlug: "javascript",
        cat: "javascript",
        title: "Modern JavaScript Tooling: Babel, Webpack, and Beyond",
        image: "/modern-javascript-tooling.jpg",
        content:
          "Exploring modern JavaScript tooling with Babel, Webpack, and other essential tools.",
        createdAt: new Date("2023-09-12T00:00:00Z"),
        view: 36,
        nbComments: 11,
        slug: "modern-javascript-tooling-babel-webpack-beyond",
        userEmail: "chris.jstoolingexpert@example.com",
      },
      {
        id: "16",
        catSlug: "react",
        cat: "react",
        title: "Testing React Components: A Comprehensive Guide",
        image: "/testing-react-components.jpg",
        content:
          "Comprehensive guide to testing React components effectively for robust and reliable code.",
        createdAt: new Date("2023-09-28T00:00:00Z"),
        view: 38,
        nbComments: 12,
        slug: "testing-react-components-comprehensive-guide",
        userEmail: "mark.reacttestingpro@example.com",
      },
      {
        id: "17",
        catSlug: "nextjs",
        cat: "nextjs",
        title:
          "Authentication in Next.js: Implementing Secure User Authentication",
        image: "/nextjs-authentication.jpg",
        content:
          "Implementing secure user authentication in Next.js applications for enhanced security.",
        createdAt: new Date("2023-10-15T00:00:00Z"),
        view: 34,
        nbComments: 10,
        slug: "authentication-nextjs-implementing-secure-user-authentication",
        userEmail: "olivia.nextauth@example.com",
      },
      {
        id: "18",
        catSlug: "react-native",
        cat: "react-native",
        title: "Optimizing React Native Apps for Performance: Best Practices",
        image: "/react-native-performance.jpg",
        content:
          "Best practices for optimizing React Native apps to deliver a high-performance user experience.",
        createdAt: new Date("2023-10-30T00:00:00Z"),
        view: 26,
        nbComments: 7,
        slug: "optimizing-react-native-apps-performance-best-practices",
        userEmail: "tim.rnperformance@example.com",
      },
      {
        id: "19",
        catSlug: "css",
        cat: "css",
        title: "CSS-in-JS: Styling React Applications with Styled Components",
        image: "/css-in-js-styled-components.jpg",
        content:
          "Introduction to CSS-in-JS and styling React applications with Styled Components for modular styling.",
        createdAt: new Date("2023-11-15T00:00:00Z"),
        view: 30,
        nbComments: 9,
        slug: "css-in-js-styling-react-applications-styled-components",
        userEmail: "victoria.cssinjs@example.com",
      },
      {
        id: "20",
        catSlug: "javascript",
        cat: "javascript",
        title: "Functional Programming in JavaScript: Principles and Practices",
        image: "/functional-programming-javascript.jpg",
        content:
          "Understanding the principles and practices of functional programming in JavaScript.",
        createdAt: new Date("2023-11-30T00:00:00Z"),
        view: 37,
        nbComments: 11,
        slug: "functional-programming-javascript-principles-practices",
        userEmail: "alex.functionaljs@example.com",
      },
    ],
  });
};

insertPosts();
