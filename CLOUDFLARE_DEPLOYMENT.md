# Deploying to Cloudflare Pages

## Prerequisites
- A Cloudflare account (free tier works great)
- Your GitHub repository connected to Cloudflare
- Node.js installed locally

## Step-by-Step Deployment

### Option 1: Using Cloudflare Pages Dashboard (Recommended for Beginners)

1. **Go to Cloudflare Dashboard**
   - Visit https://dash.cloudflare.com
   - Sign up or log in

2. **Connect Your GitHub Repository**
   - Click "Pages" in the left sidebar
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select the `Riggsj12/interactive-college-workbook` repository
   - Click "Begin setup"

3. **Configure Build Settings**
   - **Project name**: `interactive-college-workbook` (or custom)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)
   - Click "Save and Deploy"

4. **Wait for Deployment**
   - Cloudflare will automatically build and deploy your site
   - You'll get a URL like `https://interactive-college-workbook.pages.dev`

---

### Option 2: Using Wrangler CLI (For Advanced Users)

1. **Install Wrangler Globally**
   ```bash
   npm install -g @cloudflare/wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```
   - This opens a browser to authorize Wrangler
   - Copy the API token and paste it back in terminal

3. **Build Your Project**
   ```bash
   npm install
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist
   ```
   - Follow the prompts to create a project
   - Your site will be live instantly!

---

## Automatic Deployments (Recommended)

With Option 1 (GitHub integration), every time you push to `main`, Cloudflare automatically:
1. Pulls your code
2. Runs `npm run build`
3. Deploys the `dist` folder
4. Gives you a live URL

---

## After Deployment

### View Your Site
- **Default URL**: `https://interactive-college-workbook.pages.dev`
- Check deployment status in Cloudflare dashboard

### Add a Custom Domain (Optional)
1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain (requires domain to be on Cloudflare)

### Environment Variables (Optional)
If you need API keys or secrets:
1. In Cloudflare Pages settings → "Environment variables"
2. Add `API_KEY=your_value` etc.
3. Access via `import.meta.env.VITE_API_KEY`

---

## Troubleshooting

### Build Fails
- **Check logs** in Cloudflare dashboard
- Run `npm run build` locally to debug
- Ensure all dependencies are in `package.json`

### Blank Page After Deploy
- Check browser console for errors
- Verify `dist` folder has your files
- Try hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### Want to Use Workers (Serverless Backend)?
See the `wrangler.toml` file for Cloudflare Workers configuration. This allows you to:
- Create serverless functions
- Handle database operations
- Process forms
- etc.

---

## Next Steps

1. **Choose deployment method** (Option 1 recommended)
2. **Deploy your site**
3. **Test on the live URL**
4. **Add more features** (progress tracking, database, etc.)

Need help with any of these steps?
