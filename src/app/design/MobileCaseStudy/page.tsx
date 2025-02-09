'use client'
import './page.scss'
import Button from "../../components/Button/Button"

export default function CaseStudy() {


    function designSystemLink() {
        window.open('https://www.figma.com/design/b22FxF5JXuYgVxqpmv7tKK/Mobile-App?node-id=0-1&t=d45fVoAEGKEd2dgW-1')
    }


    return (
        <div className="design-container-cs">

            <div className="case-study">
                <div className="inner-container">
                    <h3 className="text-center white">Mobile App Case Study</h3>
                </div>
            </div>


            <div className="design-system-container">

                <div className="img-container">
                    <img style={{ maxWidth: 1024 }} src="/MobileCaseStudy/csimage1.png" alt={''} />
                </div>
                <div className="button-container">


                </div>
            </div>


            <div className="cscopy-section">
                <div className="inner-container text-center">
                    <h3 className='font-bold'>The Challenge?</h3>
                    <p>The company leadership approached our team and asked us to rethink and overhaul our mobile app based on
                        app store download and usage analytics to drive new downloads, improve engagment, and make it easier to
                        use. </p>
                </div>
                <div className="inner-container ">
                    <div className="col-container">
                        <div className="col">
                            <h5>Main Menu and Page Organization</h5>
                            <p>Our mobile app was originally built to match the minimally responsive web pages with all of the
                                pages and products listed in the menu causing a very long and overwhelming experience for users
                                to find what they need and make sense of where they need to go to access desired workflows. </p>
                            <p>We started by looking at analytics and user feedback on the most commonly used pages and
                                functions and put pages into content type buckets so we coul rethink the menu and product pieces
                                that the users cared about.</p>
                            <p>This also lead to us taking the mobile app and looking at keeping consistentcy with out brand
                                and web app so that it doesn&apos;t feel like a different product but also update the functionality
                                and design for a true mobile app experience.</p>
                        </div>
                        <div className="col center">
                            <img src="/MobileCaseStudy/csimage2.png" style={{ marginTop: 24, maxWidth: 300 }}
                                alt={''} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="cscopy-section-alt">

                <div className="inner-container ">
                    <div className="col-container">
                        <div className="col center">
                            <img src="/MobileCaseStudy/csimage3.png" style={{ marginTop: 24, maxWidth: 575 }}
                                alt={''} />
                        </div>
                        <div className="col">
                            <h5 className="white font-bold">New Main Menu and Submenu</h5>
                            <p className="white">Based on our research and industry standards we moved the main menu to the bottom,
                                made it persistent, and identified 5 section categories our products and pages fit into.</p>
                            <p className="white">We created a submenu based on our pill button from the web app that would allow us
                                to filter our pages within each section and tabs within the page content to break content into
                                smaller sections to minimize vertical swiping.</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="design-system-container">
                <p className="text-center white">We also consolidated pages into dashboard widgets that are swipable and can be
                    rearranged so users can see what is important to them and find info at a quick glance and conduct tasks
                    efficiently </p>
                <div className="img-container">
                    <img className='desktop-image' style={{ maxWidth: 1248 }} src="/MobileCaseStudy/csimage4.png" alt={''} />
                    <img className='mobile-image' style={{ maxWidth: 1248 }} src="/MobileCaseStudy/csimage4-mobile2.png" alt={''} />
                </div>
                <div className="button-container">


                </div>
            </div>



            <div className="cscopy-section">
                <div className="inner-container text-center">
                    <h3 className='font-bold'>The Prototype</h3>
                    <p>We created a high fidelity prototype to share with the internal stakeholders and from the positive
                        response and feedback the company stakeholder asked the mobile development to create a functional
                        prototype to beta test with companies and for a conference</p>
                    <div id="figma-mobile-container">
                        <iframe className="responsive-iframe"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb22FxF5JXuYgVxqpmv7tKK%2FMobile-App%3Fnode-id%3D13-1788%26node-type%3DFRAME%26t%3D5zthbLM8N1JDgfxh-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D13%253A1788%26hide-ui%3D1"
                            allowFullScreen></iframe>
                    </div>
                    <div className="button-container">
                        <Button buttonClick={designSystemLink}>Figma Link</Button>
                        {/* <tb-button (click)="MobileCaseStudyLink()">Figma Link</tb-button> */}
                    </div>
                </div>

            </div>


            <div className="design-system-container ">
                <h3>The Result</h3>
                <p className='mb-24'>The internal stakeholders and product managers have been pleased with the updates and are beta testing with
                    compaines and gathering data and relaying feedback as needed to both the UX and Development so we can
                    quickly turn around updates for further testing. The ease of use and paring down of pages and sections has
                    been a welcome change and the feedback has been this actually feels like a useful mobile application and not
                    a poor clone of the responsive mobile web app</p>

            </div>

        </div>
    )
}