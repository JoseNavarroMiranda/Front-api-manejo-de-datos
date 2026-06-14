const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:w-full max-w-md">
        <h1 className="text-2xl font-bold text-Black text-center mb-8">
          Iniciar Sesión
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-md font-medium text-black">
              Username
            </label>
            <input
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
              type="password"
                className="mt-2 block w-full rounded-lg bg-transparent px-4 py-2.5 text-black border border-black/50
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white 
                       hover:bg-indigo-500 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
