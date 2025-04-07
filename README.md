# Resume

A modern resume built with Astro, featuring both web and PDF outputs. This project provides a clean, maintainable way to manage your resume with a single source of truth.

## Features

- 🚀 **Modern Web Version**
  - Built with Astro for fast performance
  - Responsive design that works on all devices
  - Clean, professional styling
  - Interactive links and modern layout

- 📄 **PDF Generation**
  - Automated PDF generation using Playwright
  - Matches traditional resume layout
  - Print-optimized styling
  - Single command to generate PDF

- 🛠 **Developer Experience**
  - TypeScript support
  - Hot module reloading in development
  - Easy to maintain and update
  - Clean project structure

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
Visit `http://localhost:4321` to see your resume.

### Generating PDF

Generate a PDF version of your resume:
```bash
npm run generate-pdf
```
The PDF will be saved as `resume.pdf` in the project root.

## Project Structure

```
resume/
├── src/
│   └── pages/
│       └── index.astro  # Main resume content and styling
├── generate-pdf.ts      # PDF generation script
├── package.json
└── tsconfig.json
```

## Customization

### Content
Edit `src/pages/index.astro` to update your resume content. The file includes:
- Personal information
- Summary
- Work experience
- Projects
- Skills
- Education

### Styling
The CSS is included in the `index.astro` file and features:
- Responsive design
- Print-specific styles
- Easy to customize variables

### PDF Generation
Adjust PDF settings in `generate-pdf.ts`:
- Page format
- Margins
- Scaling
- Other Playwright PDF options

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate-pdf` - Generate PDF version
- `npm run setup-pdf` - Install Playwright browser (run automatically when needed)

## Original Source

This project was migrated from a LaTeX-based resume to provide:
- Easier maintenance
- Web presence
- Automated PDF generation
- Modern development experience

## License

MIT License - feel free to use this for your own resume!
