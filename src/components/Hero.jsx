import { Button } from "./Button";
import JohnDoe from "../assets/JohnDoe.png";
import UserFirst from "../assets/img-1.png";
import UserSecond from "../assets/img-2.png";
import UserThird from "../assets/img-3.png";
import UserFourth from "../assets/img-4.png";
import X from "../assets/logo-x.png";
import LinkedIn from "../assets/logo-in.png";
import GitHub from "../assets/logo-gh.png";

function Hero() {
  return (
    <div className="hero flex flex-col-reverse md:flex-row justify-between relative rounded-3xl text-left p-8 gap-8 mt-16">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-2xl md:text-4xl text text-white font-bold">
          Hi, I’m John
          <br />
          Software Engineer
        </h1>
        <p className="text-white opacity-70   text">
          Reference site aboutLorem Ipsum, giving information on its origins, as
          well as a random Lipsum generator.
        </p>
        <div className="flex flex-col-reverse md:flex-row  gap-8">
          <Button label="Contact me" />
          <div className="flex gap-8 items-center ">
            <div className="flex items-center">
              <img src={UserFirst} alt="User" className="-m-2" />
              <img src={UserSecond} alt="User" className="-m-2" />
              <img src={UserThird} alt="User" className="-m-2" />
              <img src={UserFourth} alt="User" className="-m-2" />
            </div>
            <p className="text-slate-300">+150K</p>
          </div>
        </div>

        <div className="flex">
          <a href="#">
            <img src={X} alt="X" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={GitHub} alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        <img
          className=" w-full h-[250px] object-cover md:w-[403px] md:h-[450px] rounded-2xl"
          src={JohnDoe}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export { Hero };
