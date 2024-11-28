import React from 'react';
import '../assets/styles/Menu_select.css';

const Menu_select = () => {
  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: true },
    { title: "Common", isHeader: false },
    { title: "Abu Dhabi T10", isHeader: false },
    { title: "ICC Men's T20 WC Asia Qualifier", isHeader: false },
    { title: "Indian Premier League", isHeader: false },
    { title: "One Day Internationals", isHeader: false },
    { title: "Sheffield Shield", isHeader: false },
    { title: "Test Matches", isHeader: false },
    { title: "Test Matches Series Markets", isHeader: false },
    { title: "Twenty20 Big Bash", isHeader: false },
    { title: "WBBL", isHeader: false },
    { title: "Womens International Twenty20 Matches", isHeader: false },
    { title: "Womens One Day Internationals", isHeader: false },
    { title: "Others", isHeader: false },
  ];

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
