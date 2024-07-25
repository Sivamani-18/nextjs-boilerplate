import type { NextApiRequest, NextApiResponse } from 'next';

const posts = {
  'first-post': {
    title: 'First Post',
    content: 'This is the content of the first post.',
  },
  'second-post': {
    title: 'Second Post',
    content: 'This is the content of the second post.',
  },
};

type PostsType = typeof posts;
type PostSlug = keyof PostsType;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug === 'string' && slug in posts) {
    const post = posts[slug as PostSlug];
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}
