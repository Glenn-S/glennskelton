import React from 'react';
import Project from '../../components/Project';

const project1 = (
  <Project 
    key={0} 
    title="Arkanoid for Raspberry Pi" 
    projectLocation="https://github.com/Glenn-S/Arkanoid-for-Raspberry-Pi"
  >
    <p>
      An ARM Assembly version of the game Arkanoid written for Raspberry Pi and a SNES controller. This was a group
      project from university.
    </p>
  </Project>
);

const project2 = (
  <Project 
    key={1} 
    title="Particle Simulation" 
    projectLocation="https://github.com/Glenn-S/Particle-Simulation"
  >
    <p>
      A simulation of particle spring materials like cloth and jello written in C++ using OpenGl.
    </p>
  </Project>
);

const project3 = (
  <Project 
    key={2} 
    title="Hapty Bird" 
    projectLocation="https://github.com/Glenn-S/Hapty-Bird"
  >
    <p>
      A haptic version of the popular game Flappy Bird developed in use with two Novint Falcons. This was a group 
      project with Brandon Sieu.
    </p>
  </Project>
);

const project4 = (
  <Project 
    key={3} 
    title="Boid Simulation" 
    projectLocation="https://github.com/Glenn-S/Boid-Simulation"
  >
    <p>
      A boid simulation that demonstrates flocking behaviour using C++ and OpenGl.
    </p>
  </Project>
);

const project5 = (
  <Project 
    key={4} 
    title="Prank Proxy" 
    projectLocation="https://github.com/Glenn-S/Prank-Proxy"
  >
    <p>
      A proxy used to replace random letters in an html document when returned to the client. This was written 
      using C.
    </p>
  </Project>
);

const project6 = (
  <Project 
    key={5} 
    title="Virtual Orrery" 
    projectLocation="https://github.com/Glenn-S/Virtual-Orrery"
  >
    <p>
      A simulation of a small portion of the solar system using C++ and OpenGL in 3D.
    </p>
  </Project>
);

const project7 = (
  <Project 
    key={6} 
    title="Crypto Tweet" 
    projectLocation="https://github.com/Glenn-S/Crypto-Tweet"
  >
    <p>
      A client/server system for encrypting and decrypting 'Tweets' using C.
    </p>
  </Project>
);

const project8 = (
  <Project 
    key={7} 
    title="CPSC233 Project" 
    projectLocation="https://github.com/Glenn-S/CPSC233_Project"
  >
    <p>
      A top down game that allows a user to get treasure and fight monsters. This game was a group project and written
      in Java.
    </p>
  </Project>
);

const project9 = (
  <Project 
    key={8} 
    title="SNES Device Driver" 
    projectLocation="https://github.com/Glenn-S/SNES_Device_Driver"
  >
    <p>
      A device driver for running a SNES controller written in ARM Assembly.
    </p>
  </Project>
);

const project10 = (
  <Project 
    key={9} 
    title="Nextcloud RaspberryPI" 
    projectLocation="https://github.com/Glenn-S/nextcloud"
  >
    <p>
      A docker version configured to work on a RaspberryPI. Has nginx proxy setup to allow SSL/TLS.
    </p>
  </Project>
);


const projectList = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10
];

export default projectList;