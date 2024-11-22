import React from 'react';

function Menu({ options, selectedOption, onSelect }) {
  return (
    <div className="menu-container">
      <input type="text" placeholder="Pesquisar" />
      <ul className="options">
        {options.map((option) => (
          <li
            key={option.value}
            className={selectedOption === option.value ? 'selected' : ''}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <button className="toggle-button">
        {/* Ícone para abrir/fechar o menu */}
      </button>
    </div>
  );
}