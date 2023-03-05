import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
// import cvPdf from "../public/assets/pdf/Eric_N_CV.2023 .pdf";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  {/* <h6>Hello, I am</h6>  commented of 14.02.2023  */}
                  <h6>Hei, jeg er</h6>
                  {/* <h1 className="font-alt">Sergio Gadot</h1>  commented of 14.02.2023  */}
                  <h1 className="font-alt">Eric Nduwimana</h1>
                  <p className="lead">
                    {/* I Am Passionate <TypingAnimation />  commented of 14.02.2023 */}
                    Jeg er lidenskapelig <TypingAnimation />
                  </p>
                  <p className="desc">
                    {/* I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores. */}
                    Jeg brenner for nye IT løsninger og digitalisering, og er på
                    stadig jakt etter å utvikle kompetansen min som front-end
                    utvikler.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      {/* <Blog /> commente of 13.02.23*/}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
