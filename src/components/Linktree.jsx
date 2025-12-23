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
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-primary/20">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-sm z-40 flex items-center justify-center border-b border-transparent hover:border-gray-100 transition-colors">
        <img src={profile.imageUrl} alt="Rayo Consulting" className="h-8 w-auto grayscale brightness-0" />
      </header>

      <div className="flex-grow pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          {/* Profile Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-secondary text-lg max-w-md mx-auto leading-relaxed">
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
                  className="group flex items-center justify-between bg-primary text-white p-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-md group-hover:bg-white/20 transition-colors">
                      <IconComponent size={20} />
                    </div>
                    <span className="font-medium text-lg">{link.name}</span>
                  </div>
                  <ArrowUpRight className="opacity-60 group-hover:opacity-100 transition-opacity" size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 py-12 px-6 bg-white">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src={profile.imageUrl} alt="Rayo Consulting" className="h-6 w-auto grayscale brightness-0 opacity-50" />

            <div className="space-y-2 text-xs text-secondary uppercase tracking-widest">
              <p className="font-bold text-dark opacity-100">Rayo Consulting di Patriarchi Dylan</p>
              <p>P.IVA: 03988190546</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-secondary">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-dark uppercase tracking-wider mb-2">Sedi</p>
              <p>Vocabolo Marcheggiane 56/C</p>
              <p>Breccione Zona Industriale</p>
              <p>Città di Castello (PG)</p>
            </div>
            <div className="space-y-1 text-center sm:text-right flex flex-col sm:items-end">
              <p className="font-bold text-dark uppercase tracking-wider mb-2">Contatti</p>
              <a href="mailto:info@rayo.consulting" className="hover:text-primary transition-colors">
                info@rayo.consulting
              </a>
              <div className="pt-4 flex items-center justify-center sm:justify-end gap-4">
                <a href="#" onClick={openPrivacy} className="hover:text-primary transition-colors">Privacy Policy</a>
                <span className="opacity-30">•</span>
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
