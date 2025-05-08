# Cybersecurity Tools Hub

A responsive, accessible GitHub Pages site to showcase essential cybersecurity tools with detailed information, installation commands, and usage examples.

<!-- Add your own screenshot here once deployed -->

## Features

- 🌓 Light and dark mode with auto-detection of system preference
- 🔍 Search functionality for finding tools by name or description
- 🏷️ Category-based filtering system
- 📋 Copy-to-clipboard functionality for code snippets
- 📱 Mobile-friendly responsive design
- ♿ Accessible markup with ARIA labels
- 🔒 Security-focused with proper HTML sanitization and security headers
- 🚀 Automatic deployment via GitHub Actions

## Security Testing Environment

This site includes a dedicated security testing environment for practicing cybersecurity tools in a legal and controlled setting:

- **Isolated Test Page**: A separate page with deliberate vulnerabilities for educational purposes
- **Legal Authorization**: Clear statements authorizing security testing against this domain
- **Common Vulnerabilities**: Practice environment with XSS, SQL injection simulation, IDOR, and more
- **Tool-specific Scenarios**: Each vulnerability is paired with recommended tools for testing
- **Security Headers**: Implementation of best practices for web security
- **Standard Compliance**: Includes security.txt in .well-known directory

### Using the Test Environment

1. Navigate to the "Visit Testing Environment" link in the About section
2. Use the cybersecurity tools featured on the main page to test the vulnerabilities
3. Practice responsible security testing techniques in a legal environment
4. Reference the example commands in the tools section for specific testing scenarios

> **Note**: All security testing must be limited to this domain only and conducted responsibly.

## Live Demo

Visit the live site at: [https://TMHSDigtal.github.io/cybersec-tools-hub](https://TMHSDigtal.github.io/cybersec-tools-hub)

## Getting Started

### Prerequisites

- Git
- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/TMHSDigtal/cybersec-tools-hub.git
   cd cybersec-tools-hub
   ```

2. Open the project in your favorite code editor

3. For local testing, you can use any simple HTTP server:
   ```bash
   # Using Python 3
   python -m http.server
   
   # Using Node.js
   npx serve
   ```

4. Open your browser and navigate to `http://localhost:8000` or the appropriate port

## Adding New Tools

To add a new cybersecurity tool to the showcase:

1. Open `js/tools-data.js`

2. Add a new tool object to the `toolsData` array following this template:
   ```javascript
   {
     id: "tool-id", // Unique identifier, kebab-case
     name: "Tool Name",
     category: "category", // One of: network, forensics, pentest (or add new categories)
     categoryDisplay: "Category Display Name",
     description: "A detailed description of the tool.",
     installCommand: "Installation command(s) with OS variations",
     usageExample: "Basic usage examples with comments",
     documentationUrl: "https://link-to-official-docs.com"
   }
   ```

3. If you're adding a new category:
   - Add a new filter button in `index.html` under the `.filter-buttons` div
   - Update the CSS if needed in `css/styles.css`

## Customizing the Theme

### Colors and Variables

All colors and theme variables are defined in CSS variables at the top of `css/styles.css`. Modify these variables to change the look and feel of the site:

```css
:root {
  --primary-color: #1e88e5;
  --secondary-color: #4caf50;
  /* other variables */
}

[data-theme="dark"] {
  --primary-color: #42a5f5;
  --secondary-color: #66bb6a;
  /* dark theme variables */
}
```

### Logo and Branding

1. Replace the title in the header section of `index.html`
2. Add your own logo or icon files to the `images` directory
3. Update the CSS accordingly

## Deployment to GitHub Pages

This repository is set up for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Fork this repository or use it as a template
2. In your repository, go to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. Make sure your default branch is set to `main` (or update the workflow file if different)
5. Push changes to your main branch, and GitHub Actions will automatically deploy your site

### Manual Deployment

If you prefer to deploy manually:

1. Go to Settings > Pages
2. Set the source to "Deploy from a branch"
3. Select your main branch and the root directory
4. Click "Save"

## Security Considerations

This site implements several security best practices:

- Content Security Policy headers
- No external CDNs (all assets are self-hosted)
- Proper HTML sanitization to prevent XSS attacks
- Secure link attributes (rel="noopener noreferrer" for external links)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- All tools featured are open-source projects maintained by their respective communities
- Icons and design inspiration from various cybersecurity resources
- Built with vanilla HTML, CSS, and JavaScript - no frameworks or external dependencies