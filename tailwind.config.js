

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlueHover: "hsl(237, 14%, 26%)"
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage :{
        'dark-mode': "url('images/bg-desktop-dark.jpg')",
        'cross-btn': "url('images/icon-cross.svg')"
      }
    },
  },
  plugins: [],
}










// <!-- 

// <!DOCTYPE html>
// <html lang="en" class="dark">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
//   <title>Frontend Mentor | Todo app</title>
//   <link rel="stylesheet" href="./css/output.css">
//   <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
//   <script src="script.js" defer></script>
// </head>

// <body class="bg-[url('/images/bg-mobile-light.jpg')]  md:bg-[url('/images/bg-desktop-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] dark:md:bg-[url('/images/bg-desktop-dark.jpg')] dark:bg-veryDarkBlue dark:text-veryLightGray bg-no-repeat bg-cover">
//   <div class="max-w-md md:max-w-xl mx-auto my-16">
//     <header class="flex justify-between items-center  text-white">
//       <h1 class="text-xl leading-loose tracking-[12px] font-extrabold">TODO</h1>
//       <button id="theme-toggle" type="submit" class="">
//         <img id="theme-toggle-light-icon" src="./images/icon-sun.svg" alt="sun" class="hidden w-5 h-5 bg-contain">
//         <img id="theme-toggle-dark-icon" src="./images/icon-moon.svg" alt="moon" class="hidden">
//       </button>
//     </header>

//     <div id="form-control" class=" relative my-8">
//       <form action="" id="item-form">
//         <input id="task-input" type="text" class="w-full py-6 pl-16 pr-6 rounded-md focus:outline-none text-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:text-veryDarkGrayishBlue" placeholder="Create a new Todo">
//         <button class="absolute top-[22px] left-6 p-3 rounded-full border border-veryDarkGrayishBlue">
//         </button>
//       </form>
//     </div>

//     <ul id="tasks-list" class="my-12">
//       <li class="flex px-5 py-4 font-sm justify-between items-center bg-veryDarkDesaturatedBlue text-white md:px-6 md:py-6 border-b border-veryDarkGrayishBlue cursor-pointer">
//         <span class="flex items-center">
//           <button class="mr-4 p-3 rounded-full bg-transparent border-2 border-gray-600 hover:border-brightBlue">

//           </button>
//           Welcome to new World
//         </span>
//         <button>
//           <img src="./images/icon-cross.svg" alt="">
//         </button>
//       </li>
//       <li class="flex px-5 py-4 font-sm justify-between items-center bg-veryDarkDesaturatedBlue text-white md:px-6 md:py-6 border-b border-veryDarkGrayishBlue cursor-pointer">
//         <span class="flex items-center">
//           <button class="mr-4 p-3 rounded-full bg-transparent border-2 border-gray-600 hover:border-brightBlue">

//           </button>
//           Welcome to new World
//         </span>
//         <button>
//           <img src="./images/icon-cross.svg" alt="">
//         </button>
//       </li>
//       <li class="flex px-5 py-4 font-sm justify-between items-center bg-veryDarkDesaturatedBlue text-white md:px-6 md:py-6 border-b border-veryDarkGrayishBlue cursor-pointer">
//         <span class="flex items-center">
//           <button class="mr-4 p-3 rounded-full bg-transparent border-2 border-gray-600 hover:border-brightBlue">

//           </button>
//           Welcome to new World
//         </span>
//         <button>
//           <img src="./images/icon-cross.svg" alt="">
//         </button>
//       </li>
//       <li class="flex px-5 py-4 font-sm justify-between items-center bg-veryDarkDesaturatedBlue text-white md:px-6 md:py-6 border-b border-veryDarkGrayishBlue cursor-pointer">
//         <span class="flex items-center">
//           <button class="mr-4 p-3 rounded-full bg-transparent border-2 border-gray-600 hover:border-brightBlue">

//           </button>
//           Welcome to new World
//         </span>
//         <button>
//           <img src="./images/icon-cross.svg" alt="">
//         </button>
//       </li>
//     </ul>
//   </div>

// </body>

// </html> -->