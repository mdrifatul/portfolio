
const Footer = () => {
  return (
    <div>
      <footer 
      className="footer md:p-3 bg-neutral text-neutral-content flex md:flex-row justify-evenly flex-col">
        <nav
        className="mx-auto">Copyright © 2023 - All right reserved</nav>
        <nav className="flex text-white gap-5 capitalize text-md mx-auto">
          <div>
          <a
          href="https://www.linkedin.com/in/md-rifatul-islam">
          <p>Linkedin</p>
          </a>
          </div>
          <a href="https://github.com/mdrifatul">
          Github
          </a>
          <a href="https://www.facebook.com/rifatul0">
          Facebook
          </a>
          <a href="https://www.instagram.com/rifatul_islam0">
          Instagram
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
