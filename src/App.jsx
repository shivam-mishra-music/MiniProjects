import React from "react";
import Card from "./components/Card";
import { motion } from "framer-motion";
import tictactoeImg from "./assets/tictactoe.jpg";
import todoImg from "./assets/to-do-list.webp";
import gameImg from "./assets/2048-img.jpg";

const projects = [
  {
    title: "Tic-Tac-Toe",
    description: "Get real-time weather updates using OpenWeather API.",
    github: "https://github.com/shivam-mishra-music/myTicTacToe",
    website: "https://shivam-mishra-music.github.io/myTicTacToe/",
    image: tictactoeImg,
  },
  {
    title: "To-Do List",
    description: "A clean to-do list to manage daily tasks.",
    github: "https://github.com/yourusername/todo-list",
    website: "https://yourtodolist.com",
    image: todoImg,
  },
  {
    title: "2048 game",
    description: "It's a interesting pzzle game",
    github: "https://github.com/yourusername/currency-converter",
    website: "https://yourcurrencyconverter.com",
    image: gameImg,
  },
  {
    title: "Capstone Project",
    description: "It just was a simple college assignment.",
    github: "https://github.com/shivam-mishra-music/capstone-2024",
    website: "https://shivammishracapstone.netlify.app/",
    image: gameImg,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-200 text-white px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mini Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
