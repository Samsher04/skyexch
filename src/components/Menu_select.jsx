import React from 'react';
import '../assets/styles/Menu_select.css';

const Menu_select = ({menuItems}) => {


  return (
    <div className="Menu-select-box">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={item.isHeader ? 'menu-header' : 'menu-item'}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu_select;
