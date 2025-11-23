import React from 'react';
import { X } from 'lucide-react';
import './LegalModal.css';

const LegalModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export const PrivacyContent = () => (
  <div className="legal-text">
    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
    
    <h3>1. Titolare del Trattamento dei Dati</h3>
    <p>
      Rayo Consulting di Patriarchi Dylan<br />
      P.IVA: IT03988190546<br />
      Indirizzo email del Titolare: <a href="mailto:info@rayo.consulting">info@rayo.consulting</a>
    </p>

    <h3>2. Tipologie di Dati raccolti</h3>
    <p>
      Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Strumenti di Tracciamento; Dati di utilizzo.
    </p>
    <p>
      Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.
    </p>

    <h3>3. Modalità e luogo del trattamento dei Dati raccolti</h3>
    <p><strong>Modalità di trattamento</strong></p>
    <p>
      Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
      Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
    </p>

    <h3>4. Finalità del Trattamento dei Dati raccolti</h3>
    <p>
      I Dati dell’Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Visualizzazione di contenuti da piattaforme esterne e Statistica.
    </p>

    <h3>5. Dettagli sul trattamento dei Dati Personali</h3>
    
    <h4>Google Fonts (Google Ireland Limited)</h4>
    <p>
      Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Ireland Limited che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br />
      Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.<br />
      Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
    </p>

    <h4>Hosting ed infrastruttura backend</h4>
    <p>
      Questo tipo di servizi ha la funzione di ospitare Dati e file che permettono a questa Applicazione di funzionare, ne consentono la distribuzione e mettono a disposizione un'infrastruttura pronta all'uso per erogare specifiche funzionalità di questa Applicazione.
    </p>

    <h3>6. Diritti dell’Utente</h3>
    <p>
      Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l’Utente ha il diritto di:
    </p>
    <ul>
      <li>revocare il consenso in ogni momento;</li>
      <li>opporsi al trattamento dei propri Dati;</li>
      <li>accedere ai propri Dati;</li>
      <li>verificare e chiedere la rettificazione;</li>
      <li>ottenere la limitazione del trattamento;</li>
      <li>ottenere la cancellazione o rimozione dei propri Dati Personali;</li>
      <li>ricevere i propri Dati o farli trasferire ad altro titolare;</li>
      <li>proporre reclamo.</li>
    </ul>

    <h3>7. Modifiche a questa privacy policy</h3>
    <p>
      Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
    </p>
  </div>
);

export const CookieContent = () => (
  <div className="legal-text">
    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>

    <h3>Cookie Policy</h3>
    <p>
      Questa Applicazione fa utilizzo di Cookie. Per saperne di più e per prendere visione dell’informativa dettagliata, l’Utente può consultare la Cookie Policy.
    </p>

    <h3>Cosa sono i Cookie</h3>
    <p>
      I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
    </p>

    <h3>Tipologie di Cookie utilizzati da questo sito</h3>
    
    <h4>Cookie Tecnici</h4>
    <p>
      Questi cookie sono relativi ad attività strettamente necessarie al funzionamento del sito e all’erogazione del servizio.
      Utilizziamo cookie tecnici per salvare la preferenza di consenso ai cookie dell'utente (localStorage item: 'cookie-consent').
    </p>

    <h4>Cookie di Terze Parti</h4>
    <p>
      Attraverso questo sito vengono installati anche cookie gestiti da terze parti. Troverai di seguito alcune indicazioni, e un link alla privacy policy e al modulo di consenso di ciascuna di esse.
    </p>
    <ul>
      <li><strong>Google Fonts:</strong> Servizio di visualizzazione font. <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a></li>
    </ul>

    <h3>Gestione delle preferenze sui Cookie</h3>
    <p>
      L'utente può gestire le preferenze relative ai Cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato.
    </p>
  </div>
);

export default LegalModal;

