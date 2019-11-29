import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons' 

import './css/Social.css';

library.add(faGithub);
library.add(faLinkedinIn);

function Social() {
    return (
        <div className="social-btns">
            <a className="btn linkedin" href="https://www.linkedin.com/in/thomas-lacaze-165267153/">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            
            <a className="btn github" href="https://github.com/LacazeThomas">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <p>Made with react</p>
        </div>
    );
}

export default Social;
