// Modal.js
import { useRef, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Modal = ({ children, onClose }) => {
  const modalRef = useRef();

  // Close modal if click is outside modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-4xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
