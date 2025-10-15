import React from 'react';
import { Globe, MessageSquare, Workflow, Sparkles } from 'lucide-react';
import './Linktree.css';

const Linktree = () => {
  // Links configuration with icons
  const links = [
    {
      name: 'Sito Web',
      url: 'https://www.rayo.consulting',
      icon: Globe
    },
    {
      name: 'RayoChat',
      url: 'https://www.rayo.consulting/rayochat',
      icon: Sparkles
    },
    {
      name: 'ManyChat',
      url: 'https://manychat.partnerlinks.io/v4am4l16sm57',
      icon: MessageSquare
    },
    {
      name: 'n8n',
      url: 'https://n8n.partnerlinks.io/knihuwwcm4n4',
      icon: Workflow
    }
  ];

  return (
    <div className="linktree-container">
      {/* Orange glow decoration */}
      <div className="orange-glow"></div>
      
      {/* Main content */}
      <div className="content">
        <div className="title-section">
          <h1 className="main-title">Rayo Consulting</h1>
        </div>
        
        <div className="links-section">
          {/* Featured card with OpenGraph preview */}
          <a
            href={links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-card"
          >
            <div className="featured-preview">
              <img 
                src={`https://api.microlink.io/?url=${encodeURIComponent(links[0].url)}&screenshot=true&meta=false&embed=screenshot.url`}
                alt="Preview Rayo Consulting"
                className="og-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('fallback');
                  const icon = e.target.parentElement.querySelector('.preview-icon');
                  if (icon) icon.style.display = 'block';
                }}
              />
              <Globe size={64} className="preview-icon" />
            </div>
            <div className="featured-content">
              <h2 className="featured-title">{links[0].name}</h2>
              <p className="featured-description">
                Scopri i nostri servizi di consulenza e automazione per far crescere il tuo business
              </p>
            </div>
          </a>

          {/* Other links */}
          {links.slice(1).map((link, index) => {
            const IconComponent = link.icon;
            return (
              <div key={index + 1} className="link-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <IconComponent size={22} className="link-icon" />
                  <span className="link-text">{link.name}</span>
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="footer">
          <p>© 2025 Rayo Consulting. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
