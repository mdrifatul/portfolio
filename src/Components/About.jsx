import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  return (
    <div className="flex h-screen my-20 w-11/12 mx-auto gap-10">
      {/* <div className="flex justify-center items-center w-3/6 px-5 text-ellipsis">
        <img className="h-96 w-fit rounded-lg" src="/public/blackProfile1.png" alt="" />
      </div> */}
      <div className="w-3/6 py-10">
        <div>
          <h1 className="text-3xl font-bold my-5">About Me</h1>
        <p>
          <span className="text-3xl">Hi,</span> I'm Mohammed Rifatul Islam, a dedicated front-end developer
          passionate about shaping user-centric digital solutions. Proficient in
          React, JavaScript, HTML, and CSS, I specialize in crafting engaging
          and responsive web interfaces. Leveraging React and JavaScript, I
          create dynamic and intuitive web applications while ensuring seamless
          design implementation using HTML and CSS. I'm committed to staying
          ahead in the dynamic tech landscape, eagerly embracing new tools to
          enhance my contributions to web development.
        </p>
        </div>
      </div>
      <div className='w-3/6 py-10'>
        <h1 className="text-3xl font-bold mb-5">Education</h1>
        <div className="p-5 border border-gray-200 rounded-t-lg font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Complete Web Developet</p></div>
        <div className="p-5 border border-gray-200 font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Bachelor of Science in Botany</p></div>
        <div className="p-5 border border-gray-200 rounded-b-lg font-semibold w-full hover:bg-slate-100 hover:scale-105 duration-100"><p className="flex text-2xl text-gray-600">Higher Secondary school</p></div>
        <div className="flex gap-5 w-3/6 ">
          <div className="p-5 bg-slate-100 w-fit my-5 rounded-lg font-semibold hover:bg-slate-200 shadow-lg hover:scale-105 duration-100"><p className="flex text-md"><MdOutlineMailOutline className="text-xl mt-1 mr-3 " />mdrifatulislam@gmail.com</p></div>
          <div className="p-5 bg-slate-100 hover:bg-slate-200 w-60 my-5 rounded-lg shadow-lg hover:scale-105 duration-100"><p className="flex text-md font-semibold"><IoCallOutline className="text-xl mt-1 mr-3 " /> +8801309727771</p></div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
