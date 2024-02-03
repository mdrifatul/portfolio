import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  return (
      <div className="grid grid-cols-2 lg:h-screen md:my-16 w-11/12 mx-auto gap-10">
      <div className="py-10">
          <h1
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="300"
          className="text-4xl font-bold mt-3 mb-10">About Me</h1>
        <p data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="400">
          <span className="text-3xl">Hi,</span> I am Mohammed Rifatul Islam, a dedicated front-end developer
          passionate about shaping user-centric digital solutions. Proficient in
          React, JavaScript, HTML, and CSS, I specialize in crafting engaging
          and responsive web interfaces. Leveraging React and JavaScript, I
          create dynamic and intuitive web applications while ensuring seamless
          design implementation using HTML and CSS. I am committed to staying
          ahead in the dynamic tech landscape, eagerly embracing new tools to
          enhance my contributions to web development.
        </p>

      </div>
      <div className='lg:my-14'>
        <h1 
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="400"
        className="text-3xl font-bold mb-5">Education</h1>
        <div
        data-aos="fade-up"
        className="p-5 border border-gray-200 rounded-t-lg font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Complete Web Developet</p></div>
        <div
        data-aos="fade-up"
        className="p-5 border border-gray-200 font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Bachelor of Science in Botany</p></div>
        <div
        data-aos="fade-up"
        className="p-5 border border-gray-200 rounded-b-lg font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Higher Secondary school</p></div>
        <div className="flex md:gap-2 w-full flex-col lg:flex-row md:mt-5 lg:mt-0">
        {/* <div className="flex md:mt-5 lg:mt-0"> */}
          <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="480"
          className="p-4 bg-slate-100 w-fit lg:my-5 rounded-lg font-semibold hover:bg-slate-200 shadow-lg hover:scale-105 duration-100 mt-5 md:mt-0"><p className="flex text-md"><MdOutlineMailOutline className="text-xl mt-1 mr-3 " />mdrifatulislam@gmail.com</p></div>
          <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="p-4 bg-slate-100 hover:bg-slate-200 w-fit lg:my-5 rounded-lg shadow-lg hover:scale-105 duration-100 mt-5 md:mt-0"><p className="flex text-md font-semibold"><IoCallOutline className="text-xl mt-1 mr-3 " /> +8801309727771</p></div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
