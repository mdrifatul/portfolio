
const Footer = () => {
  return (
    <div>
      <footer className="footer md:p-3 bg-neutral text-neutral-content flex md:flex-row justify-evenly flex-col">
        <nav className="mx-auto">Copyright © 2023 - All right reserved</nav>
        <nav className="flex text-white gap-5 capitalize text-md mx-auto">
          {/* <div className="grid grid-flow-col gap-4">
    </div> */}
          <a href="https://www.linkedin.com/in/md-rifatul-islam">
          {/* <CiLinkedin className="w-7 h-7"/> */}
          <p>Linkedin</p>
          </a>
          <a href="https://github.com/mdrifatul">
          {/* <FaGithub className="w-6 h-6"/> */}
          Github
          </a>
          <a href="https://www.facebook.com/rifatul0">
          {/* <FaFacebook className="w-6 h-6"/> */}
          Facebook
          </a>
          <a href="https://www.instagram.com/rifatul_islam0">
          {/* <FaInstagram className="w-6 h-6"/> */}
          Instagram
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
