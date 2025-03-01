'use client'
import { useState } from 'react'
import Button from '../components/Button/Button'
import './page.scss'
import Carousel from '../components/Carousel/Carousel';
import Toast from '../components/Toast/Toast';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { motion, MotionConfig } from 'motion/react';

export default function Design() {
    const router = useRouter()
    const [showDesktop, setShowDesktop] = useState(false);
    const [showTablet, setShowTablet] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    function viewDesktop() {
        setShowDesktop(showDesktop => !showDesktop);
        setShowTablet(false);
        setShowMobile(false);
    }

    function viewTablet() {
        setShowDesktop(false);
        setShowTablet(showTablet => !showTablet);
        setShowMobile(false);
    }

    function viewMobile() {
        setShowDesktop(false);
        setShowTablet(false);
        setShowMobile(showMobile => !showMobile);
    }

    function userFlowLink() {
        window.open('https://www.figma.com/design/JhyHuflMdoV9qNb7tXCyeU/User-Flow?node-id=193-27021&t=FHbdYcUXeDaHUdGM-1')
    }
    function userJourneyLink() {
        window.open('https://www.figma.com/design/CmmNz4sHeCNusCYu9HByHo/User-Journey-and-Flow?node-id=0-1&t=e3uLcWoGPcL0L5sn-1')
    }
    function designSystemLink() {
        window.open('https://www.figma.com/design/rOj7ptt7KWZOZdNt2cen4n/Design-System?node-id=1-26&t=GDn677E0etS2kMeb-1')
    }
    function styleguideLink() {
        window.open('https://style-guide.troybedingfield.com/')
    }

    return (
        <div className="design-container">
            <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
                <div className="design-system-container">
                    <motion.h3 initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, }} className="text-center">Mobile App Case Study</motion.h3>
                    <div className="img-container mb-6">
                        <motion.img initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, }} style={{ maxWidth: 1024, width: '100%' }} src="/MobileCaseStudy/csimage1.webp" alt={''} />
                    </div>
                    <div className="button-container">
                        <Button color="secondary" buttonClick={() => router.push('/design/MobileCaseStudy')}>View Case Study</Button>

                    </div>
                </div>
                <div className="figma-work">
                    <div className='inner-container'>
                        <motion.h3 initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, }} className="text-center">Learning Management Case Study</motion.h3>
                        <div className="img-container mb-6">
                            <motion.img initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 50, }} style={{ maxWidth: 1024, width: '100%' }} src="/carousel-home/3.webp" alt={''} />
                        </div>
                        <div className="button-container">
                            <Button color="secondary" buttonClick={() => router.push('/design/LearningCaseStudy')}>View Case Study</Button>
                        </div>
                    </div>
                </div>
            </MotionConfig>

            <div className="design-system-container">

                <div className='research flex relative flex-col items-center pb-24'>
                    <h3 className="text-center">Research</h3>
                    <p>We used Airtable to organize feedback and display it in a way that generates valuable insights.</p>
                    <img src="/airtable-research.webp" width={800} alt="" />
                </div>


            </div>



            <div className="figma-work">
                <div className="inner-container">
                    <div className='pb-12'>
                        <h3 className="text-center">Design system</h3>
                        <p className="text-center">Design systems are important and should be easily accessible and well documented for the entire company to consume. I created and managed our internal style guide, component and pattern library, and contributed to our documentation while working with all of our cross functional teams to ensure everyone was aware and had input.</p>
                    </div>

                    <div>
                        <h3>Component & pattern Library</h3>
                    </div>
                    <div className="inner-carousel-container">
                        <Carousel selHeight={500} interval={6000} automatic images={['/design-section-1/2.webp', '/design-section-1/4.webp', '/design-section-1/3.webp']} />
                    </div>

                    {/* <p className="text-center">Built and managed our component and pattern library in Figma to match what we defined in our
                        styleguide and built them to match how they are built in code and setup the same properties and added
                        code
                        snippets so the design and development can match and be consistent</p> */}
                    <div className='mx-auto'>

                        <Button classNames='w-auto' buttonClick={designSystemLink}>Figma Link</Button>
                    </div>

                    <div>

                    </div>

                    <div className='mt-12'>
                        <h3>Style Guide</h3>
                    </div>
                    <div>
                        <Image src="/style-guide.png" alt="style guide" width="1107" height="532" sizes="((max-width: 568px) 100vw, (max-height: auto) 100vh )" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='mx-auto'>

                        <Button classNames='w-auto' buttonClick={styleguideLink}>Style Guide Link</Button>
                    </div>

                    {/* <p className="text-center">Built and managed our component and pattern library in Figma to match what we defined in our
                        styleguide and built them to match how they are built in code and setup the same properties and added
                        code
                        snippets so the design and development can match and be consistent</p>
                    <Button buttonClick={designSystemLink}>Figma Link</Button> */}
                </div>
            </div>

            <div className="design-top-section">
                <h3 className="text-center">User Journey & flows</h3>
                <p className='text-center max-w-[800px] mx-auto'>User journeys & Flows help all teams understand the requirements and problem that needs to be solved for the user. I created a journey and flows for a manager to add courses and see who has completed them for a Learning Management System.</p>
                <div className="inner-carousel-container top-section">
                    <Carousel selHeight={500} interval={6000} automatic images={['design-section-3/journey.webp', 'design-section-3/group1.webp', 'design-section-3/group2.webp', 'design-section-3/group3.webp', '/design-section-2/1.webp', '/design-section-2/2.webp', '/design-section-2/3.webp', '/design-section-2/4.webp', '/design-section-2/5.webp', '/design-section-2/6.webp', '/design-section-2/7.webp', '/design-section-2/8.webp']} />
                </div>

                <div className="user-flow-container">
                    <div className="inner-container">
                        {/* <p className="text-center">Created responsive designs and setup prototypes for a user flow with another designer
                            for a new product we were working on while building out the design system so we could refine and add
                            components and prototyping sections to make it easier for the UX team to create in Figma </p> */}
                        <Button buttonClick={userFlowLink}>Figma Link</Button>
                    </div>
                </div>

            </div>


            <div className="figma-work">
                <div className="inner-container pb-6">
                    <div className='pb-6'>
                        <h3 className="text-center">Prototypes</h3>
                        <p className="text-center">Protoypes play and important role in showing the experience and interactions of a product and helps cross functional teams get a better understading of the use and feel of a new feature or product</p>
                    </div>
                    <div className="text-center">
                        <p>Click to see Figma Prototypes</p>
                        <div className="button-container flex gap-4 pb-6">
                            {showDesktop ? <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewDesktop}>close</Button> : <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewDesktop}>Desktop</Button>}
                            {showTablet ? <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewTablet}>close</Button> : <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewTablet}>Tablet</Button>}
                            {showMobile ? <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewMobile}>close</Button> : <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewMobile}>Mobile</Button>}
                        </div>
                    </div>

                    {showDesktop && <div id="figma-desktop-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D15-25105%26t%3DMMN3ouwtJn7PuhZv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D6%253A12504%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                    {showMobile && <div id="figma-mobile-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D47-60563%26t%3DVwa3RZsSxcq3pG5x-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D47%253A69285%26starting-point-node-id%3D47%253A57686%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                    {showTablet && <div id="figma-tablet-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D159-18892%26t%3DExZiCGue67PITuAv-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D159%253A18891%26starting-point-node-id%3D159%253A18892%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                </div>
            </div>








            {/* <div className="journeyAndFlows top-section">
                <h3 className="text-center">Figma user journey and user flows</h3>
                <div className="inner-carousel-container top-section">
                    <Carousel arrowColor='white' selHeight={500} interval={6000} automatic images={['design-section-3/journey.webp', 'design-section-3/group1.webp', 'design-section-3/group2.webp', 'design-section-3/group3.webp']} />
                </div>

            </div>

            <div className="figma-work bottom-container">
                <div className="inner-container">
                    <p className="text-center">Click to see user journey with user flows</p>
                    <Button buttonClick={userJourneyLink}>Figma Link</Button>
                </div>
            </div> */}



        </div>
    )

}