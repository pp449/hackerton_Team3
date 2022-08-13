import React from 'react';

function Footer() {
    return (
        <div className='flex justify-around w-full flex border-t-2 border-gray-100 py-6 '>
            <div className='text-slate-700 text-xs'>
                    Copyright © 2022 passtival officals Inc.    
            </div>
            <div className='text-slate-700 text-xs'>
                약관 | 개인정보취급방침 | FAQ
            </div>
        </div>
    )
}

export default Footer;