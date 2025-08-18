import React from 'react';
import './Linktree.css';

const Linktree = () => {
  const links = [
    {
      name: 'Sito Web',
      url: 'https://www.rayo.consulting'
    },
    {
      name: 'Newsletter',
      url: 'https://www.rayo.consulting/newsletter'
    },
    {
      name: 'ManyChat',
      url: 'https://manychat.partnerlinks.io/v4am4l16sm57'
    },
    {
      name: 'n8n',
      url: 'https://n8n.partnerlinks.io/knihuwwcm4n4'
    }
  ];

  return (
    <div className="linktree-container">
      {/* Alone arancione gradient in basso a sinistra */}
      <div className="orange-glow"></div>
      
      {/* Contenuto principale */}
      <div className="content">
        <div className="title-section">
          <h1 className="main-title">Links Rayo Consulting</h1>
        </div>
        
        <div className="links-section">
          {links.map((link, index) => (
            <div key={index} className="link-item">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <div className="liquid-inner"></div>
                <span className="link-text">{link.name}</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="footer">
          <p>Creato con ❤️ da Rayo Consulting</p>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
