'use client'

import Image from "next/image";
import "./page.scss";
import Carousel from "./components/Carousel/Carousel";
import Button from "./components/Button/Button";
import { useRouter } from "next/navigation";
import Contact from "./components/Contact/Contact";
import Toast from "./components/Toast/Toast";
import TestButton from "./components/TestButton/TestButton";
import { motion, MotionConfig, useMotionTemplate, useMotionValue, animate } from "motion/react";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter()

  function goToReact() {
    window.open('https://troybedingfield.com')
  }

  const COLORS = ["#13FFAA", "#DD335C"];
  // const COLORS = ["#004F76", "#000000"];
  const PERCETAGES = ["20%", "75%"];
  const PERCETAGESSIZES = ["75%", "95%"];
  const color = useMotionValue(COLORS[0]);
  const percentage = useMotionValue(PERCETAGES[0]);
  const percentagesize = useMotionValue(PERCETAGESSIZES[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(${percentagesize}  ${percentagesize} at ${percentage} ${percentage}, #007DBA 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    animate(percentage, PERCETAGES, {
      ease: 'easeInOut',
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    animate(percentagesize, PERCETAGESSIZES, {
      ease: 'easeInOut',
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])

  return (


    <div className="home-container">
      {/* <section className="flex relative p-[48px]">

        <div
          className="home-top-text box-border gap-4 lg:gap-12 flex-col items-center lg:flex-row justify-center">
          <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
            <div className="profile flex relative justify-center max-w-[500px] max-h-[500px] h-[320px] w-[320px]">
              <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, }} className="profilePicContainer flex relative bg-radial-[at_25%_25%] from-white to-zinc-400 to-75% rounded-full aspect-square shadow-[#000000] drop-shadow-xl">
                <img className="max-w-[500px] max-h-[500px] rounded-full aspect-square object-cover shadow-[#000000] drop-shadow-xl bg-transparent" height={320}
                  width={320} src="/profile-pic.webp" />
              </motion.div>
            </div>
            <div className="profile flex flex-col relative text-center justify-center justify-items-center lg:justify-items-start lg:text-left lg:justify-start">
              <motion.h3 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.5, stiffness: 50, }} className="flex font-black text-center justify-center lg:justify-start lg:text-left">Experienced Front-End Developer and UX/UI Designer with a demonstrated
                history of working in the
                marketing
                and HR/Payroll
                industries.
              </motion.h3>
              <motion.h4 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 1, }} className="flex font-medium text-center justify-center lg:justify-start lg:text-left">Professional with a Bachelor&apos;s of fine art focused in Graphic Design from
                Georgia State
                University.</motion.h4>
              <motion.h5 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 1.5, }} className="flex font-bold items-center lg:items-left text-center justify-center justify-items-center lg:justify-items-left lg:justify-start lg:text-left">Skilled in HTML, CSS, JavaScript, TypeScript, React, Angular, Figma</motion.h5>
            </div>
          </MotionConfig>
        </div>

      </section> */}

      <motion.section style={{ backgroundImage }} className="flex relative p-[48px]">
        <div
          className="home-top-text box-border gap-4 lg:gap-12 flex-col items-center lg:flex-row justify-center">
          <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
            <div className="profile flex relative justify-center max-w-[500px] max-h-[500px] h-[320px] w-[320px]">
              <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, }} className="profilePicContainer flex relative bg-radial-[at_25%_25%] from-white to-zinc-400 to-75% rounded-full aspect-square shadow-[#000000] drop-shadow-xl">
                <img className="max-w-[500px] max-h-[500px] rounded-full aspect-square object-cover shadow-[#000000] drop-shadow-xl bg-transparent" height={320}
                  width={320} src="/profile-pic.webp" />
              </motion.div>
            </div>
            <div className="profile flex flex-col relative text-center justify-center justify-items-center lg:justify-items-start lg:text-left lg:justify-start">
              <motion.h3 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.5, stiffness: 50, }} className="flex font-black text-center justify-center lg:justify-start lg:text-left">Experienced Front-End Developer and UX/UI Designer with a demonstrated
                history of working in the
                marketing
                and HR/Payroll
                industries.
              </motion.h3>
              <motion.h4 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 1, }} className="flex font-medium text-center justify-center lg:justify-start lg:text-left">Professional with a Bachelor&apos;s of fine art focused in Graphic Design from
                Georgia State
                University.</motion.h4>
              <motion.h5 initial={{ opacity: 0, y: -20 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 1.5, }} className="flex font-bold items-center lg:items-left text-center justify-center justify-items-center lg:justify-items-left lg:justify-start lg:text-left">Skilled in HTML, CSS, JavaScript, TypeScript, Angular, React, Figma</motion.h5>
            </div>
          </MotionConfig>
        </div>
      </motion.section>



      <div className="figma-work flex relative text-center justify-center  p-[24px]">
        <div className="inner-container w-auto flex text-center relative justify-center">
          <motion.h5 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ maxWidth: 500 }}
            className="flex relative color-white font-bold text-center justify-center">Building the right team contributes to the success of a product and being able to bridge the gap between design and development can take a product to the next level.</motion.h5>


        </div>
      </div>



      <div className="saas-work flex relative p-[24px]">
        <div className="inner-container">
          <p className="text-center">Payroll/HR SaaS application:</p>
          <motion.div initial={{ opacity: 0, y: -20 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.2, ease: "easeInOut" }}>

            {/* <img src="troy-homepage-montage-01.webp" alt="saas-examples" width="100%" /> */}
            <Image src="/troy-homepage-montage-01.webp" alt="saas-examples" width="1107" height="532" sizes="((max-width: 768px) 100vw, (max-height: auto) 100vh )" style={{ objectFit: "contain" }} />
          </motion.div>
        </div>
      </div>

      <div className="component-example">
        <p className="text-center">Component Library Button Example:</p>
        <p className="text-center">To see the full example setup and documentation <br /><br /> <a
          href="https://troybedingfield.github.io/tb-ui/?path=/docs/components-button--docs" target="_blank"
          className="font24">Storybook Link</a></p>
        <br />

        <TestButton />
      </div>


      <div className="figma-work flex relative p-[24px]">
        <div className="inner-container">
          <p className="text-center">Workflow Designs and Design System Components from Figma</p>

          {/* <Carousel selHeight={800} images={['/carousel-home/4.webp', '/carousel-home/1.webp', '/carousel-home/2.webp', '/carousel-home/3.webp']} /> */}
          <Carousel selHeight={800} interval={6000} automatic images={['/carousel-home/4.webp', '/carousel-home/1.webp', '/carousel-home/2.webp', '/carousel-home/3.webp']} />

          <p className="text-center">Click to see more designs and prototypes of a user workflow</p>
          <div className="button-container">

            <Button buttonClick={() => router.push('/design')}>Design</Button>
          </div>
        </div>
      </div>


      <div className="marketing-work flex flex-col relative p-[36px]">
        <p className="text-center">Marketing site&apos;s I&apos;ve managed and/or built:</p>
        <div className="home-two-column">

          <div className="column1">
            <ul>
              <li>
                <a href="https://iloveicecreamcakes.com" target="_blank">iloveicecreamcakes.com</a>
              </li>
              <li>
                <a href="https://electrocore.com" target="_blank">electrocore.com</a>
              </li>
              <li>
                <a href="https://gammacore.com" target="_blank">gammacore.com</a>
              </li>
              <li>
                <a href="https://thiolaec.com" target="_blank">thiolaec.com</a>
              </li>
              <li>
                <a href="https://farmrich.com" target="_blank">farmrich.com</a>
              </li>

            </ul>
          </div>
          <div className="column2">
            <ul>
              <li>
                <a href="https://emflaza.com" target="_blank">emflaza.com</a>
              </li>
              <li>
                <a href="https://ptccares.com" target="_blank">ptccares.com</a>
              </li>
              <li>
                <a href="https://thiolaechcp.com" target="_blank">thiolaechcp.com</a>
              </li>
              <li>
                <a href="https://seapak.com" target="_blank">seapak.com</a>
              </li>
              <li>
                <a href="https://askewmarketing.com" target="_blank">askewmarketing.com</a>
              </li>

            </ul>
          </div>


        </div>

      </div>

      {/* <div className="angular-version">
        <div className="angular-inner-container">
          <p className="text-center">Click to see an Angular version of this site</p>
          <div className="button-container">

            <Button buttonClick={goToReact}>Angular</Button>
          </div>
        </div>
      </div> */}

      <div className="contact-form flex flex-col relative p-[36px]">
        <div className="form-inner-container">
          <Contact />

        </div>
      </div>


    </div>


  );
}
