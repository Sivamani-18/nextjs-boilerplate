import { notFound } from 'next/navigation';

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

type Params = {
  params: {
    slug: string;
  };
};

type Post = {
  title: string;
  content: string;
};

type PostsType = typeof posts;
type PostSlug = keyof PostsType;

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: Params) {
  const post = posts[params.slug as PostSlug];

  if (!post) {
    notFound();
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      <p className='mt-4'>{post.content}</p>
    </div>
  );
}
