'use client'
import { useState } from 'react'
import Button from '../components/Button/Button'
import './page.scss'
import Carousel from '../components/Carousel/Carousel';
import Toast from '../components/Toast/Toast';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

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

    return (
        <div className="design-container">

            <div className="design-system-container">
                <h3 className="text-center">Mobile App Case Study</h3>
                <div className="img-container">
                    <img style={{ maxWidth: 1024, width: '100%' }} src="casestudy/csimage1.png" alt={''} />
                </div>
                <div className="button-container">
                    <Button color="secondary" buttonClick={() => router.push('/design/casestudy')}>View Case Study</Button>

                </div>
            </div>

            <div className="design-system-container">
                <h3 className="text-center">Design system I created and managed in Figma</h3>
                <div className="inner-carousel-container">
                    <Carousel selHeight={500} images={['design-section-1/2.png', 'design-section-1/4.png', 'design-section-1/3.png']} />
                </div>
            </div>



            <div className="figma-work">
                <div className="inner-container">
                    <p className="text-center">Built out all our assets and components in Figma to match what we defined in our
                        styleguide and built them to match how they are built in code and setup the same properties and added
                        code
                        snippets so the design and development can match and be consistent</p>
                    <Button buttonClick={designSystemLink}>Figma Link</Button>
                </div>
            </div>

            <div className="design-top-section">
                <h3 className="text-center">Figma design screens of a user workflow</h3>
                <div className="inner-carousel-container top-section">
                    <Carousel selHeight={500} images={['design-section-2/1.png', 'design-section-2/2.png', 'design-section-2/3.png', 'design-section-2/4.png', 'design-section-2/5.png', 'design-section-2/6.png', 'design-section-2/7.png', 'design-section-2/8.png']} />
                </div>

                <div className="user-flow-container">
                    <div className="inner-container">
                        <p className="text-center">Created responsive designs and setup prototypes for a user flow with another designer
                            for a new product we were working on while building out the design system so we could refine and add
                            components and prototyping sections to make it easier for the UX team to create in Figma </p>
                        <Button buttonClick={userFlowLink}>Figma Link</Button>
                    </div>
                </div>

            </div>


            <div className="figma-work">
                <div className="inner-container">
                    <div className="text-center">
                        <p>Click to see Figma Prototypes</p>
                        <div className="button-container">
                            <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewDesktop}>Desktop</Button>
                            <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewTablet}>Tablet</Button>
                            <Button minWidth={75} customBGColor="#1abcfe" buttonClick={viewMobile}>Mobile</Button>
                        </div>
                    </div>
                    {showDesktop && <div id="figma-desktop-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D15-25105%26t%3DMMN3ouwtJn7PuhZv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D6%253A12504%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                    {showTablet && <div id="figma-mobile-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D47-60563%26t%3DVwa3RZsSxcq3pG5x-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D47%253A69285%26starting-point-node-id%3D47%253A57686%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                    {showMobile && <div id="figma-tablet-container" >
                        <iframe className=" responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D159-18892%26t%3DExZiCGue67PITuAv-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D159%253A18891%26starting-point-node-id%3D159%253A18892%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>}
                </div>
            </div>





            <div className="journeyAndFlows top-section">
                <h3 className="text-center">Figma user journey and user flows</h3>
                <div className="inner-carousel-container top-section">
                    <Carousel selHeight={500} images={['design-section-3/journey.png', 'design-section-3/group1.png', 'design-section-3/group2.png', 'design-section-3/group3.png']} />
                </div>

            </div>

            <div className="figma-work bottom-container">
                <div className="inner-container">
                    <p className="text-center">Click to see user journey with user flows</p>
                    <Button buttonClick={userJourneyLink}>Figma Link</Button>
                </div>
            </div>



        </div>
    )

}