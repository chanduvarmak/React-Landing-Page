import React, { useState } from 'react';
import './profile.css';
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
      className='card-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>{user.name}</h1>
      <div className="avatar-container">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        {isHovered && (
          <div className="hover-content">
            <p>Additional Content Here</p>
          </div>
        )}
      </div>
    </div>
      
    );
  }