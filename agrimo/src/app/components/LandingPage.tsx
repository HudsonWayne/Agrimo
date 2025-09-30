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
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Image
            src="/logo.png"
            alt="Agrimo Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {/* Active link */}
          <li className="flex items-center gap-2 cursor-pointer text-[#EDDD5E]">
            <span className="text-[#EDDD5E]">•</span> HOME
          </li>

          {/* Other links */}
          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <span className="text-white group-hover:text-green-400">•</span> PAGES
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <span className="text-white group-hover:text-green-400">•</span> SERVICES
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <span className="text-white group-hover:text-green-400">•</span> PORTFOLIO
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <span className="text-white group-hover:text-green-400">•</span> BLOG
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <span className="text-white group-hover:text-green-400">•</span> CONTACT US
          </li>
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

        {/* Custom-styled h1 */}
        <h1
          className="mb-4"
          style={{
            fontFamily: "Signika, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "100px",
            lineHeight: "100px",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}
        >
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
