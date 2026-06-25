The code for solutionoffice247.com.

## Static export for Hostinger shared hosting

This project is configured for a static Next.js export.

```bash
npm install
npm run build
```

After the build finishes, upload the contents of the `out` folder to Hostinger's `public_html` folder.

Notes:

- Do not upload `.next` for shared hosting.
- Blog pages are generated at build time from Sanity, so rebuild and re-upload after publishing new posts.
- The contact and plan forms submit from the browser to the existing backend endpoint.
