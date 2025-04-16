import React from "react";
import Button from "./Button";


export default function Card({ project }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-opacity-40" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex gap-3">
          <Button href={project.github} variant="default">
            GitHub
          </Button>
          <Button href={project.website} variant="secondary">
            Website
          </Button>
        </div>
      </div>
    </div>
  );
}
