import React from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import { useStateValue } from './StateProvider';


function Header() {

  const [{user}] = useStateValue();

  return (
    <div className="header">
        <div className='header_left'>
            <Avatar
                    className="header_avataar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon/>
        </div>

        <div className='header_search'>
            <SearchSharpIcon/>
            <input placeholder='Search here'/>
        </div>
            
        <div className='header_right'>
            <HelpOutlineSharpIcon/>
        </div>
    </div>
  )
}

export default Header
