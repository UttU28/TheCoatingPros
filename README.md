# The Coating Pros TX

This is a static website for The Coating Pros TX, optimized for deployment on Netlify.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Deploying to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Select your repository and follow the instructions
5. Netlify will automatically detect the build settings from netlify.toml

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install netlify-cli -g`
2. Login to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Deploy your site: `netlify deploy --prod`

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally 