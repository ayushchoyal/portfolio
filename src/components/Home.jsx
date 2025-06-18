import React from 'react';
import my from '../assets/my.jpg';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black-100">
      <div className="flex flex-col md:flex-row items-center gap-10 p-4">
        <div>
          <img src={my} alt="Ayush Choyal" className="w-48 h-48 rounded-full shadow-lg" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Ayush Choyal 👋</h1>
          <p className="text-xl text-gray-700">MCA Student | Aspiring Software Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
