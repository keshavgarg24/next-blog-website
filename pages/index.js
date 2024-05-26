import { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import SearchBar from '../components/SearchBar';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const session = useSession();

  // Filter posts based on search query
  const filteredPosts = posts.filter(post =>
    post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='relative'>
      <header className='bg-purple-600 py-4 px-8 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>EasyWrite Blogs</h1>
        {session.data ? (
          <button className='border border-black px-4 py-2 rounded-md' onClick={signOut}>Logout</button>
        ) : (
          <button className='border border-black px-4 py-2 rounded-md' onClick={signIn}>Login</button>
        )}
      </header>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {filteredPosts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
