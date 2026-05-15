# Interactive College Workbook - Recruiting Dashboard

A modern, interactive lacrosse recruiting tracker built with React, Tailwind CSS, and Cloudflare Pages.

## 🎯 Features

- **Recruiting Checklist** - Track your recruiting journey with a progress bar
- **College Target List** - Manage and filter schools by fit, priority, and status
- **Quick Search** - Find schools, coaches, and notes instantly
- **Dynamic Metrics** - Real-time stats on target schools, contacted coaches, and interested programs
- **Editable Tables** - Update school information directly in the dashboard
- **Status Tracking** - Monitor communication with coaches (Researching → Offer/Spot)
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Riggsj12/interactive-college-workbook.git
cd interactive-college-workbook

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌍 Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to https://dash.cloudflare.com
3. Click **Pages** → **Create a project** → **Connect to Git**
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
6. Deploy!

Every push to `main` will trigger an automatic deployment.

### Option 2: Wrangler CLI

```bash
npm install -g @cloudflare/wrangler
wrangler login
npm run build
wrangler pages deploy dist
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── RecruitingDashboard.jsx   # Main dashboard component
│   ├── App.jsx                        # Root component
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Global styles
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS config
├── postcss.config.js                  # PostCSS config
├── index.html                         # HTML template
├── package.json                       # Dependencies
└── README.md                          # This file
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Cloudflare Pages** - Global hosting

## 📚 How to Use

### Add a School
1. Fill in the school name and division
2. Select fit level (Reach/Target/Likely)
3. Click **Add**

### Update Information
- Click any cell in the table to edit school details
- Changes save automatically

### Track Progress
- Click checklist items to mark them complete
- Progress bar updates in real-time

### Filter Schools
- Use the search box to find schools by name, coach, or notes
- Use the status dropdown to filter by communication stage

## 🎨 Customization

### Colors & Styling
Edit `tailwind.config.js` to customize colors and theme.

### Adding Features
Extend `RecruitingDashboard.jsx` with:
- Database integration (Cloudflare D1 or KV)
- User authentication
- Export to PDF/Excel
- Coach email templates
- Timeline visualization

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues
See `CLOUDFLARE_DEPLOYMENT.md` for detailed troubleshooting.

## 📝 License

MIT - Feel free to use this project for your recruiting needs!

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues for bugs or feature requests.

---

**Made with ❤️ for student-athletes** 🏑
