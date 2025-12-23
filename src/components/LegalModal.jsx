import React from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />

      <div
        className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col rounded-2xl shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50">
          <h2 className="text-2xl font-bold text-dark tracking-tight">{title}</h2>
          <button
            className="p-2 hover:bg-gray-50 rounded-full transition-colors text-secondary hover:text-dark"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="prose prose-sm max-w-none text-secondary leading-relaxed antialiased">
            {children}
          </div>
        </div>

        {/* Footer / Close Button */}
        <div className="p-4 border-t border-gray-50 flex justify-end bg-gray-50/30">
          <button
            onClick={onClose}
            className="bg-dark text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all active:scale-95"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyContent = () => (
  <div className="space-y-6 text-sm">
    <p><strong className="text-dark">Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">1. Titolare del Trattamento dei Dati</h3>
      <p>
        Rayo Consulting di Patriarchi Dylan<br />
        P.IVA: IT03988190546<br />
        Indirizzo email del Titolare: <a href="mailto:info@rayo.consulting" className="text-primary hover:underline">info@rayo.consulting</a>
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">2. Tipologie di Dati raccolti</h3>
      <p>
        Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Strumenti di Tracciamento; Dati di utilizzo.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">3. Modalità e luogo del trattamento</h3>
      <p>
        Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">4. Finalità del Trattamento</h3>
      <p>
        I Dati dell’Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">5. Dettagli sul trattamento</h3>
      <h4 className="font-bold text-dark mb-1">Google Fonts</h4>
      <p>
        Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Ireland Limited.
        Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.
      </p>
    </section>
  </div>
);

export const CookieContent = () => (
  <div className="space-y-6 text-sm">
    <p><strong className="text-dark">Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">Cookie Policy</h3>
      <p>
        Questa Applicazione fa utilizzo di Cookie per migliorare l'esperienza utente e garantire il corretto funzionamento del sito.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">Cosa sono i Cookie</h3>
      <p>
        I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-dark mb-2">Tipologie di Cookie utilizzati</h3>
      <h4 className="font-bold text-dark mb-1">Cookie Tecnici</h4>
      <p>
        Utilizziamo cookie tecnici per salvare la preferenza di consenso ai cookie dell'utente (localStorage).
      </p>
    </section>
  </div>
);

export default LegalModal;
