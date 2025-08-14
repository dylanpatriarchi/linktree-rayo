# Linktree Rayo - React

Un elegante linktree creato con React, caratterizzato da uno sfondo nero, un alone arancione gradient in basso a sinistra e bottoni con effetto liquid glass.

## 🎨 Caratteristiche

- **Design moderno**: Sfondo nero elegante con accenti arancioni
- **Effetto liquid glass**: Bottoni con effetto vetro smerigliato e backdrop-filter
- **Alone arancione**: Gradiente arancione animato in basso a sinistra
- **Responsive**: Ottimizzato per dispositivi mobili e desktop
- **Animazioni fluide**: Transizioni e animazioni CSS moderne

## 🚀 Installazione

1. Clona il repository:
```bash
git clone <repository-url>
cd linktree-rayo
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri il browser su `http://localhost:5173`

## 🛠️ Personalizzazione

### Modificare i link
Apri `src/components/Linktree.jsx` e modifica l'array `links`:

```javascript
const links = [
  {
    name: 'Il Tuo Nome',
    url: 'https://tuosito.com',
    icon: '🌐'
  },
  // Aggiungi altri link...
];
```

### Modificare i colori
Modifica i colori nel file `src/components/Linktree.css`:

- **Alone arancione**: Modifica i valori `rgba(255, 165, 0, ...)` 
- **Sfondo**: Cambia `background: #000`
- **Bottoni**: Modifica `rgba(255, 255, 255, 0.1)`

## 📱 Responsive Design

Il linktree è completamente responsive e si adatta automaticamente a:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (fino a 767px)

## 🎯 Tecnologie Utilizzate

- **React 18** - Framework JavaScript
- **Vite** - Build tool veloce
- **CSS3** - Stili avanzati con animazioni
- **Backdrop-filter** - Effetto glassmorphism

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 🤝 Contributi

Le pull request sono benvenute! Per modifiche importanti, apri prima una issue per discutere cosa vorresti cambiare.

---

Creato con ❤️ e React
