import { useState } from 'react';
import {Dropdown, DropdownButton, Button} from 'react-bootstrap';

import './SearchMenu.css'

function SearchMenu() {

    let [FreeCharged, SetFreeCharged] = useState("유/무료");
    let [Month, SetMonth] = useState("개최월");
    let [Area, SetArea] = useState("개최 지역");

    return (
        <div className="SearchMenu_BG">
            <DropdownButton id="dropdown_button" title={Month}>
                <div id="dropdown_item">
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>1월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>2월</Dropdown.Item>
               <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>3월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>4월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>5월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>6월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>7월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>8월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>9월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>10월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>11월</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetMonth(e.target.textContent);
                }}>12월</Dropdown.Item>
                </div>
            </DropdownButton>
            
            <DropdownButton id="dropdown_button" title={Area}>
                <div id="dropdown_item">
                    <Dropdown.Item onClick={(e) => {
                        SetArea(e.target.textContent);
                    }}>북구</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => {
                        SetArea(e.target.textContent);
                    }}>금정구</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => {
                        SetArea(e.target.textContent);
                    }}>부산진구</Dropdown.Item>
                </div>
            </DropdownButton>

            <DropdownButton id="dropdown_button" title={FreeCharged}>
                <Dropdown.Item onClick={(e) => {
                    SetFreeCharged(e.target.textContent);
                }}>유료</Dropdown.Item>
                <Dropdown.Item onClick={(e) => {
                    SetFreeCharged(e.target.textContent);
                }}>무료</Dropdown.Item>
            </DropdownButton>

            <Button id="search_button">검색</Button>
        </div>
    );
}

export default SearchMenu;