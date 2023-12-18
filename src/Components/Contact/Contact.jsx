import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";



const Contact = () => {
  return (
    <div className="lg:h-screen lg:mb-32 md:mb-20 w-10/12 mx-auto">
      <h1 className="text-5xl text-center font-semibold mt-20">Let's Work Together</h1>
      <div className="flex flex-col md:flex-row  mt-20 justify-around" >
      <div className="md:w-3/6 ">
        <div className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg">
        <MdOutlineEmail className="mx-auto text-2xl"/>
        <p className="text-lg">Email</p>
        <p className="text-md text-slate-700">mdrifatulislam08@gmail.com</p>
        </div>
        <div className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg my-5">
        <FaWhatsapp  className="mx-auto text-2xl"/>
        <p className="text-lg">Whatsapp</p>
        <p className="text-md text-slate-700">+8801309727771</p>
        </div>
        <div className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg">
        <RiMessengerLine  className="mx-auto text-2xl"/>
        <p className="text-lg">Messenger</p>
        <a className="text-md text-slate-700" href="https://www.facebook.com/rifatul0">rifat_islam</a>
        </div>
      </div>
      <div className="md:w-3/6 mx-auto my-10 md:my-0">
        <form className="">
          <input type="text" placeholder="Name" required className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg"/>
          <input type="email" placeholder="Email" className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg my-5" required />
          <textarea name="" placeholder="Message" className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg h-48"></textarea>
          <br />
          <button className="btn mt-3 bg-slate-900 text-white">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;