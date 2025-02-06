function Footer() {
  return (
    <footer className="mt-8 bg-gray-800 py-2 text-white m-b-2">
      <div className="text-sm text-gray-400 py-3 px-4">
        &copy; {new Date().getFullYear()} VVDScan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
