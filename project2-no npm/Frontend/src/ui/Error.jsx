function Error({ children }) {
  return (
    <div className="my-5 flex justify-center text-center">
      <p className="w-fit p-3 font-poppins text-red-600 shadow-primary">
        {children || 'Scan Faild, try again.'}
      </p>
    </div>
  );
}

export default Error;
