import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

// import Marquee from "../components/Marquee";
import Marquee from "react-fast-marquee";
// import Experience from "three/Experience";

import axios from "axios";
import qs from "qs";
import Pricing from "../components/Pricing";

export default function Home({ projects }) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <div className="container">
            <Header />
            <Banner />
            
            <Projects id="projects" projects={projects} />
            
            <Marquee
              className="marquee"
              gradient="false"
              gradientColor="pink"
              speed="120"
            >
              <span>
                We are Launching Soon — Stay Tuned — We are Launching Soon — Stay Tuned 
                —
              </span>
              <span>
                We are Launching Soon — Stay Tuned — We are Launching Soon — Stay Tuned 
                —
              </span>
            </Marquee>

            <About />

            {/* <Pricing /> */}

          </div>

          {/* <Marquee
              className="marquee"
              gradient="false"
              gradientColor="pink"
              speed="30"
            >
              <span className="waitlist-message">
                <span className="waitlist-heading">
                  Join Pre-Sale WaitList
                </span>
                <button 
                  onClick={() => window.open('https://forms.gle/mj251ndoMVKHupYU6', '_blank', 'noopener,noreferrer')}
                  className="waitlist-button"
                  style={{ 
                    backgroundColor: '#ba0d71', 
                    border: 'none', 
                    padding: '10px 15px', 
                    color: 'white', 
                    cursor: 'pointer', 
                    fontWeight: 'bold', 
                    borderRadius: '5px',
                    marginTop: '0px' 
                  }}
                >
                  Join Peachy Club
                </button>
              </span>
            </Marquee> */}

            <Marquee
              className="marqueewaitlist"
              gradient={false}
              gradientColor="pink"
              speed={15}
            >
              <span className="waitlist-message">
                <span className="waitlist-heading">Join Pre-Sale WaitList</span>
                <button 
                  onClick={() => window.open('https://forms.gle/mj251ndoMVKHupYU6', '_blank', 'noopener,noreferrer')}
                  className="waitlist-button"
                >
                  Join Peachy Club
                </button>
              </span>
            </Marquee>

          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}

Home.getInitialProps = async (ctx) => {
  const query = qs.stringify(
    {
      populate: {
        headerImage: {
          fields: ["name", "url", "formats"],
        },
        coverVideo: {
          fields: ["name", "url"],
        },
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects?${query}`
    );
    const projects = res.data;
    return { projects };
  } catch (error) {
    return { error };
  }
};
