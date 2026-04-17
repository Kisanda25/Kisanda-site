export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-[#1f2937]">KISANDA.</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-[#1695b1]">Home</a>
          <a href="#services" className="hover:text-[#1695b1]">Services</a>
          <a href="#contact" className="hover:text-[#1695b1]">Contact</a>
        </div>
        <a href="#contact" className="bg-[#1695b1] text-white px-4 py-2 rounded-full">
          Book
        </a>
      </div>
    </nav>
  );
}