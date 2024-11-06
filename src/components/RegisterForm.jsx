
const RegisterForm = () => {
    return (
      <form className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600" 
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">
          Register
        </button>
      </form>
    );
  };
  
  export default RegisterForm;
  