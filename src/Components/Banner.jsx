import { CiLinkedin } from "react-icons/ci";
import { FaDownload, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

// const textVariants = {
//   initial:{
//     x: -500,
//     opacity: 0,
//   },
//   animate:{
//     x:0,
//     opacity: 1,
//     transition:{
//       duration: 1, 
//       straggerChildren: 0.1,
//     }
//   }
// }

// const sliderVariants = {
//   initial: { x: 0 },
//   animate: {
//      x: "-220%",
//      transition: {
//        repeat: Infinity,
//        repeatType: "mirror",
//        duration: 20,
//      },
//   },
// };

const Banner = () => {
  return (
    <div className="lg:grid lg:grid-cols-9 mx-auto lg:h-96 md:h-auto flex md:my-0 flex-col-reverse">
      <div className="col-span-6 md:flex md:flex-row flex flex-col-reverse md:w-10/12 w-11/12 mx-auto">
        <div className="col-span-1 flex md:flex-col justify-center items-end gap-6 my-10">
        <a href="https://www.linkedin.com/in/md-rifatul-islam">
          <CiLinkedin className="w-7 h-7"/>
          </a>
          <a href="https://github.com/mdrifatul">
          <FaGithub className="w-6 h-6"/>
          </a>
          <a href="https://www.facebook.com/rifatul0">
          <FaFacebook className="w-6 h-6"/>
          </a>
          <a href="https://www.instagram.com/rifatul_islam0">
          <FaInstagram className="w-6 h-6"/></a>
        </div>
        <div className="col-span-5 md:w-4/5 mx-auto flex flex-col justify-center mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">Mohammed Rifatul Islam</h1>
          <h2 className="text-2xl font-semibold my-4">Front End Developer</h2>
          <p className="font-base text-gray-600">
            As a front-end developer, I meticulously blend creativity with
            technical finesse to build seamless and responsive web applications.
            I'm dedicated to implementing cutting-edge technologies, ensuring
            user interfaces that not only meet but exceed expectations.
          </p>
          <div>
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
      {/* <motion.div
       className="absolute text-8xl md:text-9xl lg:text-[160px] bottom-0 text-gray-500 opacity-10 mb-7 " variants={sliderVariants} initial="initial"
       animate="animate" exit="exit">Web Developer</motion.div> */}
      <div 
      className="lg:col-span-3 flex flex-col justify-center mx-auto">
        <img
        className="h-[420px] mx-auto"
          src="/public/blackProfile1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
