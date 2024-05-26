import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-purple-600 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <span className='mx-auto text-white text-lg font-bold'>READ BLOGS HERE</span>
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-purple-600 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <p className='text-white'>&copy; 2024 EzW blogs</p>
        </div>
      </footer>
    </div>
  );
}
