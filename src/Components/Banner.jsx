import { CiLinkedin } from "react-icons/ci";
import { FaDownload, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="md:grid md:grid-cols-9 mx-auto lg:h-96 md:h-auto flex flex-col-reverse">
      <div className="md:col-span-6 md:flex md:flex-row flex flex-col-reverse md:w-10/12 w-11/12 mx-auto">
        <div className="col-span-1 flex md:flex-col justify-center items-end gap-6 my-10">
          <a
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="200"
            href="https://www.linkedin.com/in/md-rifatul-islam"
          >
            <CiLinkedin className="w-7 h-7 hover:scale-110 duration-75" />
          </a>
          <a
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
            href="https://github.com/mdrifatul"
          >
            <FaGithub className="w-6 h-6 hover:scale-110 duration-75" />
          </a>
          <a 
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="400"
          href="https://www.facebook.com/rifatul0">
            <FaFacebook className="w-6 h-6 hover:scale-110 duration-75" />
          </a>
          <a
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="450"
          href="https://www.instagram.com/rifatul_islam0">
            <FaInstagram className="w-6 h-6 hover:scale-110 duration-75" />
          </a>
        </div>
        <div 
        className="lg:col-span-3 md:ml-10 mx-auto flex flex-col justify-center mt-10">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="200"
          className="text-3xl md:text-4xl font-bold">
            Mohammed Rifatul Islam
          </h1>
          <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
          className="text-2xl font-semibold my-4">Front End Developer</h2>
          <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="400"
          className="font-base text-gray-600">
            As a front-end developer, I meticulously blend creativity with
            technical finesse to build seamless and responsive web applications.
            I'm dedicated to implementing cutting-edge technologies, ensuring
            user interfaces that not only meet but exceed expectations.
          </p>
          <div data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="450">
            <a
              href="/public/resume of Mohammed Rifatul Islam.pdf"
              className="btn btn-sm mt-4 bg-black text-white"
              download
            >
              Resume <FaDownload />
            </a>
          </div>
        </div>
      </div>
      <div
      data-aos="zoom-out-up"
      data-aos-easing="linear"
      data-aos-duration="400"
      className="md:col-span-3 flex justify-center">
        <img
          className="h-[420px]"
          src="https://i.ibb.co/kKFmJsy/IMG-20220507-175339-1-removebg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
