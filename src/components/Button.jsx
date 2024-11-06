// eslint-disable-next-line react/prop-types
const Button = ({ variant = 'full', children, onClick }) => {
    
    // Tailwind classes based on the variant prop
    const variantStyles = variant === 'full'
      ? "rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 " 
      : `rounded-full bg-white px-4 py-2 font-bold text-blue-700 hover:bg-gray-100 hover:text-blue-400`;
  
    return (
      <button
        className={` ${variantStyles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;