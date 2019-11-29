import React from 'react';
import './css/Text.css';
import Typical from 'react-typical';

function Text() {
  return (
    <div className="Text">
      <Typical
        steps={['Thomas LACAZE', 1500, 'Devops', 1500, 'EFREI\'s student', 1500, '❤️  Golang', 1000, '❤️ Docker', 3000]}
        loop={Infinity}
        wrapper="h2"
      />
    </div>
  );
}

export default Text;
