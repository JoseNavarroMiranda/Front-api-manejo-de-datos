const Background = ({ children }) => {
  return (
    <div
      class="min-h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      {children}
    </div>
  );
};

export default Background;
