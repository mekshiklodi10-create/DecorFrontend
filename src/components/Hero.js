import React from "react";

function Hero() {
  return (
    <header className="relative bg-gray-50">
      <div
        className="h-96 md:h-[36rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/header.jpeg')" }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent to-white/80 flex items-end">
          <div className="w-full p-6 md:p-12">
            <div className="max-w-5xl mx-auto rounded-xl p-8 backdrop-blur-sm bg-white/30 shadow-lg">
              <h1 className="text-5xl md:text-6xl font-light tracking-wide text-center text-[#111827] drop-shadow">
                Decor
                <span className="block text-4xl md:text-5xl font-semibold">Decor</span>
              </h1>
              <p className="mt-4 text-center text-sm md:text-base text-gray-700">
                Elegancë dhe magji në çdo detaj – nga dasmat e ëndrrave te ditëlindjet plot ngjyra dhe çdo moment i shtrenjtë.
              </p>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;