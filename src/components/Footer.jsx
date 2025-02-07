import X from "../assets/logo-x.png";
import LinkedIn from "../assets/logo-in.png";
import GitHub from "../assets/logo-gh.png";
function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-[80px] justify-center items-center bg-black text-white">
      <p className=" opacity-70">© 2025 Personal Showcase</p>
      <div className="flex justify-center flex-wrap items-center gap-8">
        <ul className="flex gap-8 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <span className="hidden md:block opacity-40">|</span>
        <div className="flex gap-8">
          <img src={X} alt="X" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={GitHub} alt="GitHub" />
        </div>
      </div>
    </div>
  );
}

export { Footer };
