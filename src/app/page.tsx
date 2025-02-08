'use client'

import Image from "next/image";
import "./page.scss";
import Carousel from "./components/Carousel/Carousel";
import Button from "./components/Button/Button";
import { useRouter } from "next/navigation";
import Contact from "./components/Contact/Contact";
import Toast from "./components/Toast/Toast";
import TestButton from "./components/TestButton/TestButton";
import { motion, MotionConfig } from "motion/react";

export default function Home() {
  const router = useRouter()

  function goToReact() {
    window.open('https://troybedingfield.com')
  }


  return (


    <div className="home-container">
      <div
        className="home-top-text">
        <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
          <motion.h3 initial={{ opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, }} className="flex text-center font-black">Experienced Front-End Developer and UX/UI Designer with a demonstrated
            history of working in the
            marketing
            and HR/Payroll
            industries.
          </motion.h3>

          <motion.h4 initial={{ opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5, }} className="flex text-center justify-center font-medium">Professional with a Bachelor&apos;s of fine art focused in Graphic Design <br /> from
            Georgia State
            University.</motion.h4>

          <motion.h5 initial={{ opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 1, }} className="flex text-center justify-center font-bold">Skilled in HTML, CSS, JavaScript, TypeScript, Angular, React, Figma</motion.h5>

        </MotionConfig>




      </div>

      <div className="saas-work">
        <div className="inner-container">
          <p className="text-center">Payroll/HR SaaS application:</p>
          <motion.div initial={{ opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.2, ease: "easeInOut" }}>

            {/* <img src="troy-homepage-montage-01.png" alt="saas-examples" width="100%" /> */}
            <Image src="/troy-homepage-montage-01.png" alt="saas-examples" width="1107" height="532" sizes="((max-width: 768px) 100vw, (max-height: auto) 100vh )" style={{ objectFit: "contain" }} />
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


      <div className="figma-work">
        <div className="inner-container">
          <p className="text-center">Workflow Designs and Design System Components from Figma</p>

          <Carousel selHeight={800} images={['carousel-home/4.png', 'carousel-home/1.png', 'carousel-home/2.png', 'carousel-home/3.png']} />

          <p className="text-center">Click to see more designs and prototypes of a user workflow</p>
          <div className="button-container">

            <Button buttonClick={() => router.push('/design')}>Design</Button>
          </div>
        </div>
      </div>


      <div className="marketing-work">
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

      <div className="contact-form">
        <div className="form-inner-container">
          <Contact />

        </div>
      </div>


    </div>


  );
}
