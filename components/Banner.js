import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={"Soon"} />
      <BannerRowBottom title={"in Service."} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 2,
        }}
        className="row-col"
      >
        <span className="row-message">
          <span className="row-message__top">
            Join Pre-Sale WaitList
          </span>{" "}
          <br />
          <button 
              onClick={() => window.open('https://example.com', '_blank', 'noopener,noreferrer')}
              className="row-message__bottom" 
              style={{ backgroundColor: '#ff4500', border: 'none', padding: '10px 15px', color: 'white', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}
            >
              Join Now
          </button>
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
