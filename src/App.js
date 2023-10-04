import './App.css';
import MainComponent from './components/MainComponent';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ImageOfTheDay from './components/nasa/ImageOfTheDay';
import MarsWeather from './components/nasa/MarsWeather';
import SearchImage from './components/nasa/SearchImage';
import Patents from './components/nasa/Patents';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainComponent ><ImageOfTheDay /></MainComponent>,
    },
    {
      path: "/mars-weather",
      element: <MainComponent ><MarsWeather /></MainComponent>,
    },
    {
      path: "/search/:kw",
      element: <MainComponent ><SearchImage /></MainComponent>,
    },
    {
      path: "/patents/:patent",
      element: <MainComponent ><Patents /></MainComponent>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
