import React from 'react';
import './homepage.styles.scss';

import DirectoryMenu from '../../components/directory/directory-menu.component'

const Homepage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu></DirectoryMenu>
  </div>
);

export default Homepage;