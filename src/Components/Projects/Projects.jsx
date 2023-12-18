const Projects = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
            Projects
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly border rounded-lg border-gray-400 lg:w-10/12 mx-auto shadow-2xl">
        <div className="flex justify-center items-center">
          <a href="https://challengeforge-7ce2b.web.app">
            <img
              className="rounded-md w-80 md:w-64 py-5 ease-in hover:scale-105 duration-150"
              src="https://i.ibb.co/nP8rvB3/Web-capture-18-12-2023-131249-challengeforge-7ce2b-web-app.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col md:w-96 p-4 md:p-0 text-gray-700 md:my-10">
          <h1 className="text-2xl font-bold mb-2">ChallengeForge</h1>
          <p className="text-gray-600">
            Crafting a comprehensive contest hub, complete with front-end and
            back-end integration, empowering users to engage in diverse
            challenges while ensuring a secure, user-friendly experience.
          </p>
          <p className="font-semibold mt-2">
            React, MongoDB, Express, Nodejs, Tailwind, Firebase
          </p>
          <a
            href="https://challengeforge-7ce2b.web.app"
            className="btn btn-sm my-3 w-fit text-white bg-gray-800"
          >
            See Demo
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly border rounded-lg border-gray-400 lg:w-10/12 mx-auto shadow-2xl my-16 ">
        <div className="flex justify-center items-center">
          <a href="https://crave-67227.web.app">
            <img
              className="rounded-md w-80 md:w-64 py-5 ease-in hover:scale-105 duration-150"
              src="https://i.ibb.co/zHrHxg0/Web-capture-18-12-2023-1947-crave-67229-web-app.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col md:w-96 p-4 md:p-0 text-gray-700 md:my-10">
          <h1 className="text-2xl font-bold mb-2">Crave</h1>
          <p className="text-gray-600">
            A complete gastronomic platform equipped with front-end and back-end
            capabilities, facilitating users to effortlessly order food directly
            from the website.
          </p>
          <p>React, MongoDB, Express, Nodejs, Tailwind, Firebase</p>
          <p className="font-semibold mt-2">
            React, MongoDB, Express, Nodejs, Tailwind, Firebase
          </p>
          <a
            href="https://crave-67227.web.app"
            className="btn btn-sm my-3 w-fit text-white bg-gray-800"
          >
            See Demo
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly border rounded-lg border-gray-400 lg:w-10/12 mx-auto shadow-2xl ">
        <div className="flex justify-center items-center">
          <a href="https://drivewave-c7ec5.web.app">
            <img
              className="rounded-md w-80 md:w-64 py-5 ease-in hover:scale-105 duration-150"
              src="https://i.ibb.co/vQ6yBpH/Web-capture-9-12-2023-111433-drivewave-c7ec5-web-app.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col md:w-96 p-4 md:p-0 text-gray-700 md:mb-10">
          <h1 className="text-2xl font-bold mb-2">Crave</h1>
          <p className="text-gray-600">
            An integrated automotive marketplace offering a comprehensive
            full-stack solution for users to purchase vehicles directly through
            the website's interface.
          </p>
          <p>React, MongoDB, Express, Nodejs, Tailwind, Firebase</p>
          <p className="font-semibold mt-2">
            React, MongoDB, Express, Nodejs, Tailwind, Firebase
          </p>
          <a
            href="https://drivewave-c7ec5.web.app"
            className="btn btn-sm my-3 w-fit text-white bg-gray-800"
          >
            See Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
