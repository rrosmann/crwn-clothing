import React from 'react';
import './directory-menu.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import { sectionsSelector } from '../../redux/directory-menu/directory-menu.selectors';

const DirectoryMenu = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector,
});

export default connect(mapStateToProps)(DirectoryMenu);
