import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AnimatePresence, motion } from 'motion/react';
import { Spotlight } from '../Spotlights';
import Layout from '../Layout/Layout';
import roboservice from '../assets/logo/ROBO SERVICEs.png';
import davlatAka from '../assets/logo/tarh.png';
import LazyImage from '../components/LazyImage';
const App = () => {
  const navigate = useNavigate();

  const [itsFirstTime, setItsFirstime] = useState(
    !sessionStorage.getItem('firstTime')
  );
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    sessionStorage.setItem('firstTime', `${!itsFirstTime}`);
    setTimeout(() => {
      setItsFirstime(false);
    }, 3500);
  }, [itsFirstTime, navigate, user]);

  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Ekran fullscreen rejimida ekanligini tekshirish uchun
  const checkFullScreen = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  // Fullscreen rejimini o'zgartirganda eshituvchi qo'shish
  useEffect(() => {
    document.addEventListener('fullscreenchange', checkFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen);
    };
  }, []);

  // Fullscreen rejimiga o'tish funksiyasi
  const goToFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <AnimatePresence mode="sync">
      {itsFirstTime ? (
        <motion.div
          key="loadingScreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, background: 'black' }}
          transition={{ duration: 0.1 }}
          className=" min-w-[1820px] min-h-[1080px] w-screen mx-auto bg-black text-white   overflow-hidden"
        >
          <Spotlight />
          <motion.div
            layoutId="container"
            className="relative min-w-[1820px] min-h-[1080px] w-screen flex items-center justify-center z-10 mx-auto   p-4 pt-20 md:pt-0"
          >
            <motion.div layoutId="content">
              <motion.h1
                layoutId="title"
                className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
              >
                Boulevard <br /> RoboService{' '}
                <span className="font-light">x</span> Akaikumogo.
              </motion.h1>

              <motion.div
                layoutId="buttonContainer"
                className="flex items-center justify-center"
              ></motion.div>
              <motion.div
                layoutId="logo"
                className="flex items-center justify-evenly gap-4"
              >
                <LazyImage
                  image={roboservice}
                  className="h-50 w-50 rounded-full object-cover"
                />
                <LazyImage image={davlatAka} className="h-50  " />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : isFullScreen ? (
        <Layout />
      ) : (
        <motion.div
          key="loadingScreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, background: 'black' }}
          transition={{ duration: 0.1 }}
          className="min-w-[1820px] min-h-[1080px] w-screen mx-auto bg-black text-white   overflow-hidden"
        >
          <Spotlight />
          <motion.div
            layoutId="container"
            className="relative min-w-[1820px] min-h-[1080px] w-screen flex items-center justify-center z-10 mx-auto pt-20 md:pt-0"
          >
            <motion.div layoutId="content">
              <motion.h1
                layoutId="title"
                className="bg-opacity-50  my-2 py-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
              >
                Boulevard <br /> RoboService{' '}
                <span className="font-light">x</span> Akaikumogo.
              </motion.h1>
              <motion.div
                layoutId="buttonContainer"
                className="flex items-center justify-center"
              >
                <motion.button
                  onClick={goToFullScreen}
                  className="mt-4 mx-auto cursor-pointer rounded-md bg-neutral-50 px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-neutral-900/10 hover:ring-neutral-900/20"
                >
                  Fullscreen
                </motion.button>
              </motion.div>{' '}
              <motion.div
                layoutId="logo"
                className="flex items-center justify-evenly gap-4"
              >
                <LazyImage
                  image={roboservice}
                  className="h-50 w-50 rounded-full object-cover"
                />
                <LazyImage image={davlatAka} className="h-50  " />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
