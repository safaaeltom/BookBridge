function Header() {
  return (
    <div className="text-center mb-10 px-4 relative z-10">
      {/* Project Name */}
      <h1 className="text-6xl md:text-6xl font-extrabold leading-[1.4] cursor-pointer"
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
      <p className="mt-6 text-gray-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
        BookBridge lets you share physical books for free across Africa.  
        Donate a book you no longer need, or get one for free — helping learners connect with real books.
      </p>
    </div>
  );
}   

export default Header;