const Header = () => {
  return (
    <div className=" bg-green-100">
      <section class="hero-section ">
        <div>
          <div className="space-y-2">
            <h4 title="Hello Buddy" className="text-gray-600 font-semibold">
              Hi <span class="waving-hand text-2xl">👋</span> My name is,
            </h4>
            <h2 class="hero-section-title">
              <span class="logo-name">Dinesh S </span>
            </h2>

            <h2 class="hero-section-title">
              <span className="text-blue-400">I build things for the web.</span>
            </h2>
            <p class="hero-section-desc" className="text-gray-600">
              A Frontend focused web developer building the frontend of websites
              and web applications that leads to the success of the overall
              product and currently learning new things.I particularly enjoy
              making coding a delightful and interactive experience, bringing a
              touch of fun to every project.
            </p>
          </div>

          <div className="text-white font-semibold  space-x-10 mt-7 mb-5">
            <button className="bg-gray-500 p-3 rounded-lg hover:bg-gray-700">
              Hire Me
            </button>
            <button className="bg-gray-500 p-3 rounded-lg hover:bg-gray-700">
              Download CV
            </button>
          </div>
        </div>

        <div class="hero-img">
          <img src="https://www.epeopleonline.com/wp-content/uploads/img/wd1.png" />
        </div>
      </section>
    </div>
  );
};
export default Header;
