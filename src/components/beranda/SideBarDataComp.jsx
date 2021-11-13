import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

export const SideBarDataComp = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text' 
    },

    {
        title: 'Data',
        path: '/data',
        icon: <AiIcons.AiOutlineDatabase/>,
        cName: 'nav-text'
    },

    {
        title: 'Laporan',
        path: '/laporan',
        icon: <HiIcons.HiOutlineDocumentReport/>,
        cName: 'nav-text'
    },

    {
        title: 'Chart',
        path: '/chart',
        icon: <AiIcons.AiOutlineBarChart/>,
        cName: 'nav-text'
    },
]
