import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'MyMenus',
        path: '/menus',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Menu Builder',
        path: '/menu-build',
        icon: <IoIcons.IoIosBuild />,
        cName: 'nav-text'
    },

    {
        title: 'Designer',
        path: '/design',
        icon: <AiIcons.AiOutlineLayout />,
        cName: 'nav-text'
    }
];