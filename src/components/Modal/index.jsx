import React from 'react';

import Buttons from './Buttons.jsx';
import Content from './Content.jsx';
import Title from './Title.jsx';

function Modal({show, onClose, children, className = ''}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative bg-white rounded-3xl shadow-2xl p-6 text-center min-w-[450px] max-h-[500px] overflow-auto ${className}`}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
}

Modal.Title = Title;
Modal.Content = Content;
Modal.Buttons = Buttons;

export default Modal;
