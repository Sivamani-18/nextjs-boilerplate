# Next.js Boilerplate

This is a boilerplate project for building a Next.js application with TypeScript, Tailwind CSS, dynamic routes, and theme toggling (light/dark mode).

## Demo
- <a href="https://sivamani-18.github.io/nextjs-boilerplate/" target="_blank">Example Demo Link</a>

## Features

- [Next.js](https://nextjs.org/) - The React framework for production.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- Dynamic routes for blog posts.
- Light and Dark mode theme toggling.
- Loader displayed during theme transitions

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sivamani-18/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
my-next-app/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   ├── password/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── NavMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Loader.tsx
│   │   └── ThemeToggle.tsx
│   └── theme/
│       └── useTheme.ts
├── pages/
│   ├── api/
│   │   └── posts/
│   │       └── [slug].ts
├── public/
├── styles/
│   └── tailwind.css
├── tailwind.config.js
├── tsconfig.json
└── ...
```

### Implementing Features

#### Theme Toggle

The theme toggle is implemented using the `ThemeToggle` component, which switches between light and dark modes. It uses local storage to persist the theme preference across sessions.

#### Loader

A loader is displayed while the theme is being applied. This ensures a smooth user experience during theme transitions.

### Customization

#### Tailwind CSS Configuration

You can customize Tailwind CSS by modifying the `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1DA1F2',
          dark: '#0D6EFD',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
```

### Adding New Pages

To add new pages, create a new directory or file in the `app` directory. For example, to add a new settings page under the dashboard:

1. Create a new directory: `app/dashboard/settings/new-page`.
2. Add a `page.tsx` file inside this directory with your component code.

```tsx
// app/dashboard/settings/new-page/page.tsx
import React from 'react';

const NewPage = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
```

### API Routes

API routes can be created in the `pages/api` directory. For example, the blog post data fetching is handled by an API route:

```ts
// pages/api/posts/[slug].ts
import type { NextApiRequest, NextApiResponse } from 'next';

const posts = {
  'first-post': { title: 'First Post', content: 'This is the content of the first post.' },
  'second-post': { title: 'Second Post', content: 'This is the content of the second post.' },
};

type PostsType = typeof posts;
type PostSlug = keyof PostsType;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug === 'string' && (slug in posts)) {
    const post = posts[slug as PostSlug];
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}
```

## License

This project is licensed under the MIT License.
