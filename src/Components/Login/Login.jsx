import { useState } from "react";
import { loginService } from "../../Service/loginService";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


import Background from "../Background/Background";



const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password,  setPassword] = useState ("");
  const [loading, setLoading] = useState (false);
  const [error, setError] = useState (null);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try{
      
      const data = await loginService(username , password);
      
      localStorage.setItem("token", data.access_token);
      
      const decodedToken = jwtDecode(data.access_token);

      const role = decodedToken.role;
      
      if (role == "editor"){
        navigate("/dashboard");
      }else if (role == "admin"){
        navigate("/admin");
      }else if(role == "viewer"){
        navigate ("/viewer");
      }

    }catch (err){
      setError(err.message)
    }finally{
      setLoading(false);
    }

  };



  return (
    <Background>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:w-full max-w-md">
        <h1 className="text-2xl font-bold text-Black text-center mb-8">
          Iniciar Sesión
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-md font-medium text-black">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="mt-2 block w-full rounded-lg bg-transparent px-4 py-2.5 text-black border border-black/50
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-black">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
                className="mt-2 block w-full rounded-lg bg-transparent px-4 py-2.5 text-black border border-black/50
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {error && (<p className="text-red-500 text-sm text-center">{error}</p>)}
          </div>
          <button
            disable="false"
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white 
                       hover:bg-indigo-500 transition-colors"
          >
            {loading ? "Ingresando...": "Sing in"}
          </button>
        </form>
      </div>
    </div>
  </Background>
  );
};

export default Login;
