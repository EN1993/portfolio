import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          {/* <h3>My Portfolio.</h3>  commented of 15.02.2023 */}
          <h3>Min Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("design")}`}
              onClick={handleFilterKeyChange("design")}
              data-filter=".design"
            >
              Design
            </li>
            <li
              className={`c-pointer ${activeBtn("utvikling")}`}
              onClick={handleFilterKeyChange("utvikling")}
              data-filter=".utvikling"
            >
              {/* Photoshop commented of 15.02.2023 */}
              Utvikling
            </li>
            {/* <li
              className={`c-pointer ${activeBtn("fashion")}`}
              onClick={handleFilterKeyChange("fashion")}
              data-filter=".fashion"
            >
              Fashion
            </li>
            <li
              className={`c-pointer ${activeBtn("product")}`}
              onClick={handleFilterKeyChange("product")}
              data-filter=".product"
            >
              Product
            </li>  commented of 15.02.2023  */}
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item  design ">
            <div className="portfolio-box-01 product">
              <a
                href="https://xd.adobe.com/view/f7e7c3ef-6dbb-4c16-aaca-b567401b3011-a2b4/"
                className="gallery-link"
                rel="opener"
              >
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">
                    Holidaze Design
                  </h5>
                  <span>B & Bs Hotel</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/m-portfolio-1.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="https://xd.adobe.com/view/f7e7c3ef-6dbb-4c16-aaca-b567401b3011-a2b4/"
                      className="gallery-link"
                      rel="opener"
                      target="-blank"
                    >
                      <span className="ti-plus" />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item utvikling ">
            <div className="portfolio-box-01 product">
              <a
                href="https://greatings.netlify.app/"
                target="-blank"
                rel="opener"
              >
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">
                    Holidaze webside
                  </h5>
                  <span>B & Bs Hotel</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/holidazeW.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="https://greatings.netlify.app/"
                      target="-blank"
                      rel="opener"
                      className="gallery-link"
                    >
                      <span className="ti-plus" />
                    </a>
                  </div>
                  <span className="git-cta">
                    <a
                      href=" https://github.com/Noroff-FEU-Assignments/project-exam-2-en1993"
                      target="-blank"
                      rel="opener"
                    >
                      Git
                    </a>
                  </span>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* <div className="grid-item product design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Skole portfolio</h5>
                <span>portfolio</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-3.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          {/* grid item */}
          <div className="grid-item  utvikling">
            <div className="portfolio-box-01 product">
              <a
                href="https://competent-bohr-d51278.netlify.app/index.html"
                rel="opener"
                target="-blank"
              >
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">
                    Word Travel Webside
                  </h5>
                  <span>Reising Blog</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/netlifywt.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a href="" className="gallery-link">
                      <span className="ti-plus" />
                    </a>
                  </div>
                  <span className="git-cta">
                    <a
                      href="https://github.com/Noroff-FEU-Assignments/project-exam-1-EN1993"
                      target="-blank"
                      rel="opener"
                    >
                      Git
                    </a>
                  </span>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item design ">
            <div className="portfolio-box-01 product">
              <a
                href="https://xd.adobe.com/view/15b68bbb-3576-45dc-bbb5-1694e08d7d2e-40e5/"
                rel="opener"
                target="-blank"
              >
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">Word Travel</h5>
                  <span>Reising Blog</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/wtD.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="https://xd.adobe.com/view/15b68bbb-3576-45dc-bbb5-1694e08d7d2e-40e5/"
                      rel="opener"
                      target="-blank"
                      className="gallery-link"
                    >
                      <span className="ti-plus" />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* <div className="grid-item product utvikling">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Utvikling 3</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-6.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          <div className="grid-item utvikling">
            <div className="portfolio-box-01 product ">
              <a href="https://pedantic-swartz-28b076.netlify.app/about.htm">
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">
                    Community Science Museum Webside
                  </h5>
                  <span>Forskning Museum</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/netlifycs.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="static/img/m-portfolio-6.jpg"
                      className="gallery-link"
                    >
                      <span className="ti-plus" />
                    </a>
                  </div>
                  <span className="git-cta">
                    <a
                      href="https://github.com/EN1993/Website_Community-Science-Museum"
                      target="-blank"
                      rel="opener"
                    >
                      Git
                    </a>
                  </span>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* <div className="grid-item fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-7.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-7.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          {/* grid item */}
          <div className="grid-item design">
            <div className="portfolio-box-01  product">
              <a
                href="https://xd.adobe.com/view/031afcdb-0828-44eb-990c-c677d566a854-5649/"
                rel="opener"
                target="-blank"
              >
                <div className="portfolio-info">
                  <h5 className="white-color font-weight-bold">
                    Community Science Museum
                  </h5>
                  <span>Forskinings Museum</span>
                </div>
                <div className="portfolio-img">
                  <img src="static/img/csD.jpg" title="" alt="" />
                  <div className="portfolio-icon">
                    <a
                      href="https://xd.adobe.com/view/031afcdb-0828-44eb-990c-c677d566a854-5649/"
                      rel="opener"
                      target="-blank"
                      className="gallery-link"
                    >
                      <span className="ti-plus" />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* <div className="grid-item fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-9.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-9.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
