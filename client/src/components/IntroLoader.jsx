import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const IntroLoader = ({onFinish}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 600);
          return 100;
        }
        return p + 1;
      });
    }, 20);

    return () => {
      document.body.style.overflow = "auto";
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="
    fixed inset-0 z-[9999]
    flex flex-col items-center justify-center
    bg-black/30
    backdrop-blur-xl
    backdrop-saturate-150
  "
      initial={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.8}}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
      >
        RISHI
      </motion.h1>

      <div className="w-64 h-[2px] bg-white/20 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white/90"
          style={{width: `${progress}%`}}
        />
      </div>

      <p className="mt-4 text-xs tracking-widest text-white/70">
        LOADING {progress}%
      </p>
    </motion.div>
  );
};

export default IntroLoader;
