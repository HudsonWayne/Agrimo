// components/LandingPage.tsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with blue overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Image.png" // replace with your background image path
          alt="Farm background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/50" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-green-400">🌱</span> grimo
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-green-400 cursor-pointer">HOME</li>
          <li className="hover:text-green-400 cursor-pointer">PAGES</li>
          <li className="hover:text-green-400 cursor-pointer">SERVICES</li>
          <li className="hover:text-green-400 cursor-pointer">PORTFOLIO</li>
          <li className="hover:text-green-400 cursor-pointer">BLOG</li>
          <li className="hover:text-green-400 cursor-pointer">CONTACT US</li>
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400">📞</span>
            <span>+1 (212) 255-511</span>
          </div>
          <span className="cursor-pointer hover:text-green-400">🔍</span>
          <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">
            Get In Touch ✈
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-24 text-white">
        <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wide mb-4 hover:bg-white hover:text-black transition">
          Believe in Quality!
        </button>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Quality Trust: <br /> Direct to the Farm
        </h1>

        <p className="text-lg max-w-xl mb-6">
          We all need a little space to grow. Give yourself the space you need
          to find your inner you.
        </p>

        <button className="bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition">
          Contact Us ✈
        </button>
      </div>
    </div>
  );
}
