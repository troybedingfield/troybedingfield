'use client'

import Image from "next/image";
import "./page.scss";
import Carousel from "./components/Carousel/Carousel";
import Button from "./components/Button/Button";
import { useRouter } from "next/navigation";
import Contact from "./components/Contact/Contact";
import Toast from "./components/Toast/Toast";
import TestButton from "./components/TestButton/TestButton";

export default function Home() {
  const router = useRouter()

  function goToReact() {
    window.open('https://troybedingfield.com')
  }


  return (


    <div className="home-container">
      <div className="home-top-text">

        <h3 className="text-center font-black">Experienced Front-End Developer and UX/UI Designer with a demonstrated
          history of working in the
          marketing
          and payroll
          industries.
        </h3>

        <h4 className="text-center font-bold">Skilled in HTML, CSS, JavaScript, TypeScript, Angular, Figma</h4>

        <h5 className="text-center font-regular">Also have experience with .NET, PHP, WordPress, Drupal</h5>

        <h4 className="text-center font-medium">Professional with a Bachelor&apos;s of fine art focused in Graphic Design from
          Georgia State
          University.</h4>


      </div>

      <div className="saas-work">
        <div className="inner-container">
          <p className="text-center">Payroll/HR SaaS application:</p>
          <img src="troy-homepage-montage-01.png" alt="saas-examples" />
        </div>
      </div>

      <div className="component-example">
        <p className="text-center">Component Library Button Example:</p>
        <p className="text-center">To see the full example setup and documentation <br /><br /> <a
          href="https://troybedingfield.github.io/react-storybook/?path=/docs/app-components-button--docs" target="_blank"
          className="font24">Storybook Link</a></p>
        <br />

        <TestButton />
      </div>


      <div className="figma-work">
        <div className="inner-container">
          <p className="text-center">Workflow Designs and Design System Components from Figma</p>

          <Carousel automatic="true" interval="5000" selHeight={800} images={['carousel-home/4.png', 'carousel-home/1.png', 'carousel-home/2.png', 'carousel-home/3.png']} />

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

      <div className="angular-version">
        <div className="angular-inner-container">
          <p className="text-center">Click to see an Angular version of this site</p>
          <div className="button-container">

            <Button buttonClick={goToReact}>Angular</Button>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="form-inner-container">
          <Contact />

        </div>
      </div>


    </div>


  );
}
