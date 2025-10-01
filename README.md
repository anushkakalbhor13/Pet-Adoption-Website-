# AdoptaFurryBuddy - Pet Adoption Website

A beautiful and responsive pet adoption website built with HTML, CSS, and JavaScript.

## Features

- Browse pets available for adoption (Dogs, Cats, and Other Animals)
- Shopping cart for pet accessories and supplies
- Responsive design that works on all devices
- Interactive pet galleries with detailed information
- Contact form for inquiries
- Social media integration

## Files Structure

### Core Files (Required for deployment)
- `index.html` - Homepage
- `search.html` - Pet search page (converted from search.php)
- `shop.html` - Shop page (converted from shop.php)
- `cart.html` - Shopping cart page (converted from cart.php)
- `contact.html` - Contact us page (converted from contact us.php)
- `services.html` - Services page (converted from services.php)
- `login.html` - Login page (converted from login.php)
- `register.html` - Registration page (converted from register.php)
- `adoption_details.html` - Pet adoption details page
- `common.css` - Shared styles
- `common.js` - Shared JavaScript functions
- `data/` - Directory containing all images and media files

### Deployment Files
- `vercel.json` - Vercel deployment configuration
- `README.md` - This file

## Deployment Instructions

### Deploy to Vercel
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to [vercel.com](https://vercel.com)
4. Click "New Project"
5. Import your GitHub repository
6. Vercel will automatically detect it's a static site
7. Deploy!

### Deploy to Render
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to [render.com](https://render.com)
4. Click "New Static Site"
5. Connect your GitHub repository
6. Set the build command to: `# No build needed for static site`
7. Set the publish directory to: `./`
8. Deploy!

### Deploy to Netlify
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to [netlify.com](https://netlify.com)
4. Drag and drop your project folder or connect to GitHub
5. Deploy!

## Local Development

To run locally:
1. Open `index.html` in your web browser
2. For better development experience, use a local server like:
   - VS Code Live Server extension
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`

## Notes

- This is a static website (no backend database)
- All pet data is hardcoded in HTML
- Cart functionality uses localStorage
- Contact form shows alerts (no actual email sending)
- Images are stored in the `data/` directory

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Credits

Created for pet adoption and animal welfare purposes.