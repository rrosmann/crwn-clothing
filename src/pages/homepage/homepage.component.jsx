import React from 'react';
// import './homepage.styles.scss';
import { HomepageContainer } from './homepage.styles';

import DirectoryMenu from '../../components/directory/directory-menu.component';

const Homepage = () => (
  <HomepageContainer className='homepage'>
    <h1>Welcome to crwn-clothing</h1>
    <DirectoryMenu></DirectoryMenu>
  </HomepageContainer>
);

export default Homepage;
