import React from 'react';
import loadable from '@loadable/component';
import './App.css';

const Particles = loadable(() => import('react-particles-js'));

function App() {
  return (
    <div className="App">
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default App;
