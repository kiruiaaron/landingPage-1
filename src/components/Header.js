import React from 'react'

const Header=()=> {
  return (
    <div className='header'>
        <div className='logo'>
            <hi>MovieCity</hi>
        </div>
      <nav className='navigation'>
        <ul>
            <li> <a href='/'>Movies</a></li>
            <li> <a href='/'>Category</a></li>
            <li> <a href='/'>About</a></li>
            <li> <a href='/'>Contact</a></li>
        </ul>
      </nav>
      <div className='btn'>
        < button type='button'>Login</button>
      </div>
    </div>
  );
}
export default Header;
