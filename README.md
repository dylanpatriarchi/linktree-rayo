# Linktree Rayo - React

A modern and elegant linktree built with React, featuring a clean white background, subtle geometric watermark pattern, and a featured OpenGraph preview card.

## 🎨 Features

- **Modern Design**: Clean white background with orange accents
- **Geometric Watermark**: Subtle pattern overlay for visual texture
- **OpenGraph Preview**: Featured card with live website screenshot
- **Lucide Icons**: Beautiful icons for each link
- **Responsive**: Optimized for mobile and desktop devices
- **Smooth Animations**: Modern CSS transitions and hover effects

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linktree-rayo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 🛠️ Customization

### Modify Links
Open `src/components/Linktree.jsx` and edit the `links` array:

```javascript
const links = [
  {
    name: 'Your Name',
    url: 'https://yoursite.com',
    icon: Globe
  },
  // Add more links...
];
```

### Modify Colors
Edit colors in `src/components/Linktree.css`:

- **Orange accent**: Change `rgba(255, 140, 0, ...)`
- **Background**: Modify `background: #ffffff`
- **Buttons**: Edit border and hover colors

### Featured Card
The first link in the array automatically becomes the featured card with OpenGraph preview. The preview is fetched dynamically using Microlink API.

## 📱 Responsive Design

The linktree is fully responsive and adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (up to 767px)

## 🎯 Technologies Used

- **React 18** - JavaScript framework
- **Vite** - Fast build tool
- **Lucide React** - Icon library
- **CSS3** - Advanced styling with animations
- **Microlink API** - OpenGraph preview generation

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

Built with ❤️ and React
