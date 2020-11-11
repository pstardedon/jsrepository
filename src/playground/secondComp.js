import React from 'react';
import './style.css'
import faker from 'faker'
function SecondComp(props) {
    return (
        
        
        <div className = 'container'>
        <div className = 'container-img'>
        <a>
        <img src={faker.image.avatar()} alt='res'></img>
        </a>
        </div>
        <div className = 'container-content'>
        
        <div className = 'containernameandate'>
        <div className = 'container-name'> Matt  </div>
        <div className = 'container-date'> Today at 5:42PM  </div>
        </div>

        <div className = 'container-body'> How artistic!  </div>
        <div className = 'container-reply'> Reply  </div>
        </div>
        </div>
    );
}

export default SecondComp;