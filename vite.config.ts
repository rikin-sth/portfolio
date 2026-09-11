import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// ---------------------------------------------------------------------------
// GitHub Pages configuration
// ---------------------------------------------------------------------------
// If you deploy this site to GitHub Pages at:
//   https://<USERNAME>.github.io/<REPOSITORY>/
// set REPO_NAME below to your repository name (e.g. "rikin-portfolio").
//
// If you deploy to a custom domain, or to https://<USERNAME>.github.io/
// (a "user/organization" site, not a project site), set REPO_NAME to "".
// ---------------------------------------------------------------------------
const REPO_NAME = 'portfolio'

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME ? `/${REPO_NAME}/` : '/',
})
