'use client'
import './page.scss'
import Button from "../../components/Button/Button"

export default function CaseStudy() {


    function designSystemLink() {
        window.open('https://www.figma.com/design/JhyHuflMdoV9qNb7tXCyeU/User-Flow?node-id=193-27021&p=f&t=6FFOMm1s5oI2K6Z5-0')
    }


    return (
        <div className="design-container-cs">

            <div className="case-study">
                <div className="inner-container">
                    <h3 className="text-center white">Learning Management Case Study</h3>
                </div>
            </div>


            <div className="design-system-container">

                <div className="img-container">
                    <img style={{ maxWidth: 1024 }} src="/carousel-home/3.png" alt={''} />
                </div>
                <div className="button-container">


                </div>
            </div>


            <div className="cscopy-section">
                <div className="inner-container text-center">
                    <h3>The Challenge?</h3>
                    <p className='mb-12'>Our contract was ending with the 3rd party learning management system so we had 6 months to create our own product that could be viable and provide the basic needs of a learning management system.</p>
                </div>
                <div className="inner-container ">
                    <div className="col-container">
                        <div className="col">
                            <h5 className='font-bold'>User Journeys, Flows, and Views</h5>
                            <p className='p-2'>After conduction our competitive analysis and determining our business requirements for our inital launch we created Journeys and flows for our established user personas and focued on our admin/managers being able view already assigned and assign new employees to training.</p>
                            <p className='p-2'>From our multiple personas we created views and refined required data that needed to be accessed per role and proposed some updates to our filtering and actionbar components that could work across our personas.</p>
                            <p className='p-2'>We also created some new patterns and components for employees to view their assigned training and see a thumbnail, course description, and progress/status on due date.</p>
                        </div>
                        <div className="col center">
                            <img src="/design-section-3/journey.png"
                                alt={''} />
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col m-12 gap-6'>
                    <img src='/LearningCaseStudy/flow4.png' />
                    <img src='/LearningCaseStudy/views.png' />
                </div>
            </div>


            <div className="cscopy-section-alt">

                <div className="inner-container ">
                    <div className="col-container">
                        <div className="col center">
                            <img src="/LearningCaseStudy/learning1.png" style={{ marginTop: 24, maxWidth: 575 }}
                                alt={''} />
                        </div>
                        <div className="col">
                            <h5 className="white">Desktop, Responsive, and Our Mobile App</h5>
                            <p className="white p-2">Desktop is usually the priority but this time they wanted to iFrame these pages into our mobile app so we made sure to make every design responsive and outlined the new pattern updates for our action bar menu dropdown.</p>
                            <p className="white p-2">We also had to work out some issues with multiple side navs for the Admin/Managment users and prototyped small sections for the devs to understand user needs.</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="design-system-container">
                <p className="text-center white">Since time was a factor we utilized horizontal scrolling for our page layout stepped workflow section that worked on Mobile but was a compromise due to time constraints.</p>
                <div className="img-container">
                    <img className='desktop-image' style={{ maxWidth: 1248 }} src="/LearningCaseStudy/desktop-mobile-builder.png" alt={''} />
                </div>
                <div className="button-container">


                </div>
            </div>



            <div className="cscopy-section">
                <div className="inner-container text-center">
                    <h3>Development</h3>
                    <p>Since we had such a tight deadline and turn around we worked directly with the development team to hand off pages per flow and provide quick feedback and updated designs. We made sure we convereted our colors to variables and worked out the best system for that particular Dev so there wasn't any roadblocks. </p>

                    <div className="button-container">
                        <Button buttonClick={designSystemLink}>Figma Link</Button>

                    </div>
                </div>

            </div>


            <div className="design-system-container">
                <h3>The Result</h3>
                <p className='mb-24'>Development set up a Beta testing environment for both internal sales teams and identified clients. We recieved positive feedback on the experience and also feedback to improve the initial product while also getting feedback on future product needs to expand into a robust product for our many different company sizes and types.</p>

            </div>

        </div>
    )
}