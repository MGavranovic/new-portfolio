function Navbar() {
  return (
    <div className="w-vw h-12 border-2 border-green-700 ">
      <div className="w-vw h-12 flex justify-between items-center">
        <p className="pl-2">LOGO</p>
        <div className="flex w-60 justify-between pr-2">
          <p>about</p>
          <p>projects</p>
          <p>skills</p>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
