import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q7njoam",
        "template_87pp00j",
        form.current,
        "sFFcWSn4w_Yhebe_W"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success('Message send successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:h-screen lg:mb-32 md:mb-20 w-10/12 mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="200"
        className="text-5xl text-center font-semibold mt-20"
      >
        Let's Work Together
      </h1>
      <div className="flex flex-col md:flex-row  mt-20 justify-around">
        <div className="md:w-3/6 ">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="350"
            className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg"
          >
            <MdOutlineEmail className="mx-auto text-2xl" />
            <p className="text-lg">Email</p>
            <p className="text-md text-slate-700">mdrifatulislam08@gmail.com</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="400"
            className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg my-5"
          >
            <FaWhatsapp className="mx-auto text-2xl" />
            <p className="text-lg">Whatsapp</p>
            <p className="text-md text-slate-700">+8801309727771</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="420"
            className="p-6 bg-slate-100 shadow-md w-60 text-center mx-auto rounded-lg"
          >
            <RiMessengerLine className="mx-auto text-2xl" />
            <p className="text-lg">Messenger</p>
            <a
              className="text-md text-slate-700"
              href="https://www.facebook.com/rifatul0"
            >
              rifat_islam
            </a>
          </div>
        </div>
        <div className="md:w-3/6 mx-auto my-10 md:my-0">
          <form ref={form} onSubmit={sendEmail}>
            <input
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="300"
              type="text"
              placeholder="Name"
              required
              className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg"
              name="from_name"
            />
            <input
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="350"
              type="email"
              placeholder="Email"
              className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg my-5"
              required
              name="from_email"
            />
            <textarea
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="400"
              placeholder="Message"
              className="w-80 outline-none border-1 p-4 bg-slate-200 rounded-lg h-48"
              name="message"
            ></textarea>
            <br />
            <button
              type="submit"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="420"
              className="btn mt-3 bg-slate-900 text-white"
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
