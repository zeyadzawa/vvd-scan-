function Loader() {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <div className="absolute h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-purple-500"></div>
      <img
        src="../../loader-logo.jpg"
        className="h-28 w-28 rounded-full"
        alt=""
      />
    </div>
  );
}

export default Loader;
