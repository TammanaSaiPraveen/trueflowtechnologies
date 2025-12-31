# Trueflow Technologies - Frontend

React + Vite frontend application for Trueflow Technologies.

## Environment Variables

The application uses environment variables for API configuration. Create a `.env` file in the root directory:

```env
# Development API URL (local backend)
VITE_API_URL=http://localhost:5000/api
```

### For Production Deployment

When deploying to production, update the `VITE_API_URL` in your deployment platform's environment variables:

**Option 1: Same Domain (Recommended)**
If your frontend and backend are on the same domain:
```env
VITE_API_URL=/api
```

**Option 2: Different Domain**
If your backend is on a different domain:
```env
VITE_API_URL=https://api.yourdomain.com/api
```

### Setting Environment Variables

**Vercel:**
- Go to Project Settings → Environment Variables
- Add `VITE_API_URL` with your production API URL

**Netlify:**
- Go to Site Settings → Environment Variables
- Add `VITE_API_URL` with your production API URL

**Other Platforms:**
- Set `VITE_API_URL` as an environment variable before building
- The variable will be embedded at build time

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Notes

- Environment variables prefixed with `VITE_` are exposed to the client-side code
- The API URL is determined dynamically based on the environment
- In development, it defaults to `http://localhost:5000/api`
- In production without `VITE_API_URL`, it uses `/api` (relative URL)
