# Lotto Number Generator

## Overview

This is a simple, interactive web application to generate random lottery numbers. It's built using modern, framework-less web technologies (HTML, CSS, JavaScript) and follows the principles of modern web development, including the use of Web Components for modularity.

## Design and Features

### Visual Design
*   **Theme:** A clean, modern, and visually engaging design.
*   **Color Palette:** A vibrant and energetic color palette will be used.
*   **Typography:** Expressive and clear typography to enhance readability.
*   **Layout:** A responsive, mobile-first layout that works on all screen sizes.
*   **Interactivity:** Smooth animations and visual feedback on user interactions. Buttons and interactive elements will have a "glow" effect.
*   **Texture:** A subtle noise texture on the background for a premium feel.

### Features
*   **Number Generation:** Generate 6 unique random numbers between 1 and 45.
*   **Display:** Display the generated numbers in a visually appealing way.
*   **Responsive Design:** The application will be fully responsive and work on mobile and desktop devices.
*   **Web Component:** A custom element `<lotto-ball>` will be used to display each number, encapsulating its style and behavior.

## Implementation Plan

1.  **HTML (`index.html`):**
    *   Set up the basic structure of the application.
    *   Include a title, a button to trigger the number generation, and a container to display the results.
2.  **CSS (`style.css`):**
    *   Style the application with the defined color palette, typography, and layout.
    *   Add animations and effects for an interactive experience.
    *   Use CSS Variables for easy theming.
3.  **JavaScript (`main.js`):**
    *   Implement the logic for generating unique random numbers.
    *   Create a Web Component (`<lotto-ball>`) to display each generated number.
    *   Add an event listener to the "Generate" button to trigger the process.
