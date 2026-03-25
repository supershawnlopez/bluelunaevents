# Blue Luna Static Deploy Build

## Why I chose this build
This version is static HTML/CSS/JS on purpose.
That means:
- cheaper and simpler to deploy
- no build headaches
- easy to inject into GitHub and Netlify
- fast to launch this week

## What you need to do
1. Open `config.js`
2. Paste your three Stripe deposit links:
   - essential
   - signature
   - luxe
3. Deploy the folder to GitHub or directly to Netlify

## Netlify notes
- This build is already Netlify-friendly
- The quote form uses Netlify Forms attributes
- After first deploy, Netlify should detect the form named `blue-luna-quote`

## What is included
- homepage
- custom quote page
- thank-you page
- Stripe-ready package buttons
- premium package-first structure
- Blue Luna logo assets
