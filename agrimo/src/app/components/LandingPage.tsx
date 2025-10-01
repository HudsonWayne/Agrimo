"use client"; // Make this a client component

// components/LandingPage.tsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden m-[20px] rounded-[40px]">

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
            width={90}
            height={90}
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

          <div className="black bg-white">
            <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">
              Get In Touch ✈
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-24 text-white ml-[130px]">
        <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wide mb-4 hover:bg-white hover:text-black transition animate-bounce-slow">
          Believe in Quality!
        </button>

        {/* Custom-styled h1 */}
        <h1
          className="mb-4 animate-move-text"
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

        {/* Styled HR */}
        <hr className="bg-white h-0.5 w-[700px] border-none mb-6" />

        <p className="text-lg max-w-xl mb-6 animate-move-text">
          We all need a little space to grow. Give yourself the space you need
          to find your inner you.
        </p>

        <button className="glow-button bg-white text-black rounded-full px-6 py-3 shadow-md transition duration-500">
          Contact Us ✈
        </button>
      </div>

      <style jsx>{`
        .black {
          height: 100px;
          width: 200px;
          margin-top: -25px;
          margin-left: 80px; /* ✅ reads margin-left here */

          display: flex;
          justify-content: center;
          align-items: center;

          border-top-right-radius: 40px;
          border-bottom-left-radius: 40px;

          background-color: white;
        }

        /* Text movement animation */
        @keyframes moveText {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-move-text {
          animation: moveText 3s ease-in-out infinite;
        }

        /* Button glowing animation */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 15px #ffe600;
          }
          50% {
            box-shadow: 0 0 35px #ffe600;
          }
        }

        .glow-button {
          animation: glow 2s infinite;
        }

        /* Optional slower bounce for small button */
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }
      `}</style>
    </div>
  );
}
