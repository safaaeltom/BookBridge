function Header() {
  return (
    <div className="text-center mb-10 px-4 relative z-10 flex flex-col items-center">
      
      {/* Project Name */}
      <h1 className="text-7xl md:text-6xl font-extrabold leading-[1.4] cursor-pointer text-gray-100"
        style={{
          color: "white", // text is white
          textShadow: `
            2px 2px 6px rgba(0, 0, 0, 0.5),
            -2px -2px 6px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        BookBridge
      </h1>

      {/* Transparent box with project description */}
       <div className="w-full max-w-2xl bg-white/10 rounded-lg p-3 sm:p-4 md:p-6 mt-6">
        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
        BookBridge lets you share physical books for free across Africa.  
        Donate a book you no longer need, or get one for free — helping learners connect with real books.
      </p>
    </div>
    </div>
  );
}   

export default Header;