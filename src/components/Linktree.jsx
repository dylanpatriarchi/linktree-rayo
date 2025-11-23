import React, { useState, useEffect } from 'react';
import { Globe, MessageSquare, Workflow, Calculator, Mail, ArrowUpRight, FileText, X } from 'lucide-react';
import LegalModal, { PrivacyContent, CookieContent } from './LegalModal';
import './Linktree.css';

// --- Configuration ---
const profile = {
  name: 'Rayo Consulting',
  bio: 'Tutti i nostri link, a portata di mano. Scopri i nostri servizi di consulenza e automazione.',
  imageUrl: '/logo.png', 
};

const links = [
  {
    name: 'Sito Web',
    url: 'https://www.rayo.consulting',
    icon: Globe,
  },
  {
    name: 'Apri P.IVA con Fiscozen (Sconto 50€)',
    url: 'https://www.fiscozen.it/invito313955',
    icon: FileText,
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

const CookieBanner = ({ onOpenPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare accetti la nostra{' '}
          <button 
            onClick={onOpenPolicy} 
            style={{
              background: 'none', 
              border: 'none', 
              padding: 0, 
              color: 'inherit', 
              textDecoration: 'underline', 
              cursor: 'pointer',
              font: 'inherit'
            }}
          >
            Cookie Policy
          </button>.
        </p>
        <button onClick={acceptCookies} className="cookie-btn">
          Accetta
        </button>
      </div>
    </div>
  );
};

const Linktree = () => {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'cookie' | null

  const openPrivacy = (e) => {
    e.preventDefault();
    setActiveModal('privacy');
  };

  const openCookie = (e) => {
    if (e) e.preventDefault();
    setActiveModal('cookie');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="page-wrapper">
      <div className="linktree-container">
        {/* Profile Section */}
        <header className="profile-section">
          <div className="brand-label">( 00-01 ) • Link</div>
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-content">
            <h1 className="profile-name">{profile.name}</h1>
            <p className="profile-bio">{profile.bio}</p>
          </div>
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
                <div className="link-content">
                  <div className="link-icon-wrapper">
                    <IconComponent size={20} />
                  </div>
                  <span className="link-text">{link.name}</span>
                </div>
                <ArrowUpRight className="link-arrow" size={20} />
              </a>
            );
          })}
        </main>
      </div>

      {/* Full Width Footer */}
      <footer className="footer-expanded">
        <div className="footer-container">
          <div className="footer-main-row">
            <div className="footer-brand-section">
              <span className="footer-label">AI Agency</span>
              <h2 className="footer-logo">Rayo.</h2>
              <div className="footer-contact">
                <p className="contact-number">+39 327 174 6038</p>
                <a href="mailto:info@rayo.consulting" className="contact-email">info@rayo.consulting</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="company-info">Rayo Consulting di Patriarchi Dylan, <strong>IT03988190546</strong></p>
            <div className="footer-legal">
              <a href="#" onClick={openPrivacy}>Privacy Policy</a>
              <a href="#" onClick={openCookie}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      <CookieBanner onOpenPolicy={openCookie} />
      
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <PrivacyContent />
      </LegalModal>

      <LegalModal 
        isOpen={activeModal === 'cookie'} 
        onClose={closeModal} 
        title="Cookie Policy"
      >
        <CookieContent />
      </LegalModal>
    </div>
  );
};

export default Linktree;
