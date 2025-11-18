import React from 'react';
import { Globe, MessageSquare, Workflow, Sparkles, Calculator, Mail } from 'lucide-react';
import './Linktree.css';

// --- Configuration ---
const profile = {
  name: 'Rayo Consulting',
  bio: 'Tutti i nostri link, a portata di mano. Scopri i nostri servizi di consulenza e automazione per far crescere il tuo business.',
  // IMPORTANT: Replace with a direct link to your profile picture
  imageUrl: '/logo.png', 
};

const links = [
  {
    name: 'Sito Web',
    url: 'https://www.rayo.consulting',
    icon: Globe,
  },
  {
    name: 'Quanto perdi non implementando l\'ai?',
    url: 'https://aicalculator.rayo.consulting/',
    icon: Calculator,
  },
  {
    name: 'Newsletter',
    url: 'https://newsletter.rayo.consulting/',
    icon: Mail,
  },
  {
    name: 'ManyChat',
    url: 'https://manychat.partnerlinks.io/v4am4l16sm57',
    icon: MessageSquare,
  },
  {
    name: 'n8n',
    url: 'https://n8n.partnerlinks.io/knihuwwcm4n4',
    icon: Workflow,
  },
];
// ---------------------

const Linktree = () => {
  return (
    <div className="linktree-container">
      {/* Profile Section */}
      <header className="profile-section">
        <img
          src={profile.imageUrl}
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-bio">{profile.bio}</p>
      </header>

      {/* Links Section */}
      <main className="links-section">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">
                <IconComponent size={24} />
              </div>
              <span className="link-text">{link.name}</span>
            </a>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Rayo Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Linktree;
