# 🎨 Relaxo

> Building stuff on the internet

A modern, interactive personal portfolio and profile site with Discord integration and real-time activity display.

## ✨ Features

- **Hero Section** - Eye-catching landing area with avatar, name, bio, and social links
- **Discord Integration** - Live Discord presence display showing:
  - User status (online/offline)
  - Current activity & rich presence
  - Currently playing games
  - Spotify track information with album art
  - Server affiliations and badges
- **Project Showcase** - Responsive grid layout for displaying your projects
- **Custom Cursor** - Interactive cursor effects with mouse glow animation
- **Copy Feedback** - Toast notifications for interactive elements
- **Responsive Design** - Mobile-friendly interface that works on all devices

## 🛠️ Tech Stack

- **HTML** (10.8%) - Semantic markup and structure
- **CSS** (37.5%) - Styling, animations, and responsive design
- **JavaScript** (51.7%) - Dynamic rendering, API integration, and interactions

## 📁 Project Structure

```
relaxo.gay/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── config.js       # Configuration settings
│   ├── icons.js        # Icon utilities
│   ├── render.js       # DOM rendering logic
│   ├── lanyard.js      # Discord Lanyard API integration
│   └── main.js         # Application entry point
├── img/                # Image assets
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/RelaxoGIT/relaxo.gay.git
   cd relaxo.gay
   ```

2. **Customize Configuration**
   - Edit `js/config.js` with your personal information
   - Add your projects and social links
   - Configure Discord integration settings

3. **Add Your Content**
   - Replace avatar image in `img/`
   - Update project data in the configuration
   - Customize styling in `css/style.css`

4. **Deploy**
   - Push to GitHub and enable GitHub Pages
   - Site will be live at `https://relaxo.gay`

## 🔗 Discord Integration

The site uses [Lanyard API](https://lanyard.rest/) to display your Discord presence in real-time. No additional setup required—just update your Lanyard configuration.

## 🎯 Customization

- **Hero Section**: Update the `s-initial`, `s-name`, `s-bio` elements
- **Projects Grid**: Modify the project data in your config
- **Colors & Fonts**: Edit `css/style.css` to match your brand
- **Interactions**: Customize animation effects and cursor behavior in `js/`

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

Made with ❤️ by [RelaxoGIT](https://github.com/RelaxoGIT)