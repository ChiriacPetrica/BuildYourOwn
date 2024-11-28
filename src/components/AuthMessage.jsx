const AuthMessage = ({ message, actionText, onActionClick }) => {
  return (
    <p className="text-center">
      {message}
      <span
        className="ml-1 cursor-pointer text-blue-600 hover:underline"
        onClick={onActionClick}
      >
        {actionText}
      </span>
    </p>
  );
};

export default AuthMessage;
