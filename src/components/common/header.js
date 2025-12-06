
import {NavLink } from   'react-router-dom';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import {
 MobileOutlined ,
 MailOutlined ,
 FacebookFilled,
 TwitterSquareFilled,
 InstagramFilled,
 UserOutlined,
 MenuOutlined
} from '@ant-design/icons';

function AppHeader() {
   

     const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
    const onClose = () => {
      setOpen(false);
     
   }; 
    return(
        <div className ="container">
            {/*Topbar*/}
        <div className="topBar">
            <div className="contactInfo">
                <ul>
                    <li>< a href="tel:01 44567"><span> <MobileOutlined />+01 44567</span></a></li>
                    <li>< a href="mailto:grocery@gmail.com"><span><MailOutlined />Kirana12@gmail.com</span></a></li>

                </ul>
            </div>
            <div className='otherInfo'>
                <ul className='Social Media'>
<a href ='https://www.facebook.com'><FacebookFilled /></a>&nbsp;
<a href ='https://www.twitter.com'><TwitterSquareFilled /></a>&nbsp;
<a href ='https://www.instagram.com'><InstagramFilled /></a>&nbsp;
</ul>
                <button margin="2px"><UserOutlined />My Account</button>
            </div>
            </div>
            {/*Header*/}
            <div className='header separator'> 
                <div className='logo'>Kirana</div>
                <div className='mobileVisible'>
                    <Button type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
  title="Basic Drawer"
  placement="right"
  onClose={onClose}   // works now
  open={open}
>
         <nav>
                    <ul>
                        <li><NavLink onClick={onClose} to='/'>Home</NavLink></li>
                        <li><NavLink  onClick={onClose}  to='/shop'>Shop</NavLink></li>
                        <li><NavLink  onClick={onClose} to='/about'>About</NavLink></li>
                        <li><NavLink onClick={onClose}  to='/faq'>Faq</NavLink></li>
                        <li><NavLink  onClick={onClose} to='/contact'>Contact</NavLink></li>

                    </ul>
                </nav>
      </Drawer>
    
                </div>
                <nav className="mobileHidden">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/faq'>Faq</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>

                    </ul>
                </nav>

            </div>
        </div>
    )
}
export default AppHeader;