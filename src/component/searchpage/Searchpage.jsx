import React from 'react';
import SearchMenu from './SearchMenu';
import './Searchpage.css'

function Searchpage() {
    return (
    <div className="Searchpage_BG snap-start">
        <div className="Searchpage_support">
            <div>
                <div className="Searchpage_text">passtival에서<br/>원하는 축제를<br/>찾아보세요</div>
            </div>
            <div className="Searchpage_menu_BG">
                <div className="Serchpage_menu">
                    <SearchMenu></SearchMenu>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Searchpage;