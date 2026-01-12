import React, { useState, useEffect } from 'react';
import { Globe, MessageSquare, Workflow, Calculator, Mail, ArrowUpRight, FileText } from 'lucide-react';
import LegalModal, { PrivacyContent, CookieContent } from './LegalModal';

// --- Configuration ---
const profile = {
  name: 'Rayo Consulting',
  bio: 'Tutti i nostri link, a portata di mano. Scopri i nostri servizi di consulenza e automazione.',
  imageUrl: '/logo.svg',
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary text-center sm:text-left">
          Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare accetti la nostra{' '}
          <button
            onClick={onOpenPolicy}
            className="text-dark underline hover:text-primary transition-colors"
          >
            Cookie Policy
          </button>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
        >
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
    <div className="min-h-screen bg-white flex flex-col font-sans text-dark selection:bg-primary/10">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 h-24 bg-white/90 backdrop-blur-md z-40 flex items-center justify-center transition-all">
        <img src={profile.imageUrl} alt="Rayo Consulting" className="h-10 w-auto" />
      </header>

      <div className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-xl mx-auto">
          {/* Profile Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-dark mb-6 tracking-tighter leading-none">
              {profile.name}
            </h1>
            <p className="text-secondary text-xl md:text-2xl font-light tracking-wide leading-relaxed max-w-lg mx-auto">
              {profile.bio}
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-6 bg-white border border-gray-200 rounded-none hover:border-primary hover:z-10 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  <div className="flex items-center gap-6 relative z-10">
                    <IconComponent size={24} className="text-dark group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                    <span className="font-bold text-xl tracking-tight text-dark group-hover:text-primary transition-colors duration-300">{link.name}</span>
                  </div>
                  <ArrowUpRight className="text-gray-300 group-hover:text-primary transition-colors duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={24} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto space-y-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
              <img src={profile.imageUrl} alt="Rayo Consulting" className="h-8 w-auto mb-6" />
              <div className="space-y-1 text-sm font-medium text-secondary">
                <p className="text-dark font-bold">Rayo Consulting di Patriarchi Dylan</p>
                <p>P.IVA: 03988190546</p>
                <p>Vocabolo Marcheggiane 56/C</p>
                <p>Breccione Zona Industriale</p>
                <p>06012 Città di Castello (PG)</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-4 text-sm font-medium">
              <a href="mailto:info@rayo.consulting" className="text-dark hover:text-primary transition-colors text-lg">
                info@rayo.consulting
              </a>
              <div className="flex gap-6 text-secondary">
                <a href="#" onClick={openPrivacy} className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" onClick={openCookie} className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
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
