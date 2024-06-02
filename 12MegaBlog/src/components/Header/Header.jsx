import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          {/* Toggle menu button for mobile */}
          <button
            className='block lg:hidden px-2 py-1 rounded focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {menuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>
          {/* Normal menu for larger screens */}
          <ul className='hidden lg:flex ml-auto'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 mx-2 duration-200 hover:bg-blue-100 rounded-full focus:bg-blue-100 font-bold'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-0 bg-gray-700 bg-opacity-80 z-50 ${menuOpen ? '' : 'hidden'}`}>
          <div className='flex flex-col h-full'>
            <button
              className='ml-auto mt-2 mr-2 p-2 rounded-full focus:outline-none'
              onClick={() => setMenuOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <ul className='flex flex-col mt-10 space-y-2'>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          navigate(item.slug);
                        }}
                        className='px-6 py-2 mx-2 duration-200 hover:bg-blue-100 rounded-full focus:bg-blue-100 font-bold'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
            </ul>
            {authStatus && (
              <ul>
                <li>
                  <LogoutBtn />
                </li>
              </ul>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
