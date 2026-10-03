import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='text-black'>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-[#EC5E2A] text-center">SDLC Method of Software Development</h1>
        
        <div className="mb-12 flex flex-col items-center">
          <Image
            src="/images/sdlc-overview.jpg"
            alt="SDLC Overview"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-8 w-full h-auto"
          />
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">About SDLC Method</h2>
          <p className="mb-4 max-w-3xl text-center text-sm lg:text-base dark:text-gray-300">Leaders Network utilizes Software Development Life Cycle (SDLC) which is a process used by the software industry to design, develop test and deploy high quality softwares.</p>
          <p className="mb-4 max-w-3xl text-center text-sm lg:text-base dark:text-gray-300">In the realm of software development, the Software Development Life Cycle (SDLC) is akin to the architectural plan or methodology used in house construction. It's a crucial process that outlines methodology for development cycles that create effective, high-quality software from concept to launch, and even thereafter. From initiation to the maintenance phase post-deployment, each phase presents distinct tasks and objectives.</p>
          <p className="mb-4 max-w-3xl text-center text-sm lg:text-base dark:text-gray-300">Using SDLC, Leaders Network have been able to produce a high-quality softwares that meets International standards.</p>
          <p className="mb-4 max-w-3xl text-center text-sm lg:text-base dark:text-gray-300">The following figure is a graphical representation of the various stages of a typical SDLC.</p>
          <p className="mb-4 max-w-3xl text-center text-sm lg:text-base dark:text-gray-300">A typical Software Development Life Cycle consists of the following stages</p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/planning.jpg"
            alt="Planning Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Conceptualisation Phase</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The conceptualization stage of software development is the initial phase of a project where the groundwork is laid for the software's purpose and direction. It's also known as the ideation stage. This can be done by the client or customer and it is the groundwork for pre development.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">During this conceptualization stage, the development team achieves the following:</p>
            <ul className="list-disc pl-8 mb-4 text-sm lg:text-base dark:text-gray-300">
              <li>Identifies a problem: The team works together to identify a problem to solve.</li>
              <li>Generates ideas: The team brainstorms and generates innovative ideas.</li>
              <li>Researches the market: The team conducts market research to align ideas with market demands.</li>
              <li>Clarifies engineering specifications: The team clarifies engineering specifications.</li>
              <li>Establishes function structures: The team establishes function structures.</li>
              <li>Identifies working principles: The team identifies and combines working principles.</li>
              <li>Evaluates concept variants: The team evaluates concept variants based on technical and economic criteria.</li>
              <li>Decides on a solution principle: The team decides on the solution principle</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Planning and Requirement Analysis</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The initial stage of software development, Planning, involves defining the software's purpose and scope, much like pinpointing our destination and plotting the best route. We uncover the tasks at hand during this phase and strategize for efficient execution.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The team collaborates to understand the end-users' needs and the goals the software should meet. Essentially, we ask, "What problem will this software solve?" and "What value will it offer to the user?"</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">A feasibility study also takes place during the Planning phase. Our Developers and product teams evaluate technical and financial challenges that might affect the software's development or success.</p>
          </div>
          <Image
            src="/images/conceptualization.jpg"
            alt="Conceptualization Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg md:order-1 w-full h-auto"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/architecture.jpg"
            alt="Architecture Design Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Defining Requirements</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">Once the requirement analysis is done, the next step is to clearly define and document the product requirements and get them approved from the customer or the market analysts. Leaders Network use an SRS (Software Requirement Specification) document which consists of all the product requirements to be designed and developed during the project life cycle.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">In this phase, the team is looking to answer, "What are the expectations of our users from our software?" This is called requirements gathering.</p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A] ">Designing the Product Architecture</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">Leaders SRS is the reference for our product architects to come out with the best architecture for the product to be developed. Based on the requirements specified in SRS, usually more than one design approach for the product architecture is proposed and documented in a DDS - Design Document Specification.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">This DDS is reviewed by all the important stakeholders and based on various parameters as risk assessment, product robustness, design modularity, budget and time constraints, the best design approach is selected for the product.</p>
          </div>
          <Image
            src="/images/defining-req.jpg"
            alt="Requirements Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg md:order-1 w-full h-auto"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/testing.jpg"
            alt="Testing Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Building or Developing the Product</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">In this stage of SDLC, the actual development starts and the product is built. The programming code is generated as per DDS during this stage. If the design is performed in a detailed and organized manner, code generation can be accomplished without much hassle.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">Developers must follow the coding guidelines defined by their organization and programming tools like compilers, interpreters, debuggers, etc. are used to generate the code.</p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Testing the Product</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The Testing phase of our SDLC Is a stringent quality inspection on a production line. It is when vulnerabilities are uncovered. Software testing involves a thorough examination of the software for any bugs or glitches that might have slipped through during coding.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The testing process begins by setting clear parameters in line with the software's requirements. This includes identifying the necessary software conditions, and outlining diverse scenarios to examine these conditions.</p>
          </div>
          <Image
            src="/images/development.jpg"
            alt="Development Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg md:order-1 w-full h-auto"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/maintenance.jpg"
            alt="Maintenance Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Deployment in the Market and Maintenance</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">At Leaders Network, the Deployment phase involves rolling out the meticulously tested and fine-tuned software to its end-users.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">A specific strategy is executed for the software's deployment to ensure minimal disruption to the user experience. Depending on the software and its audience, we might use different methods such as Big Bang, Blue-Green, or Canary deployments.</p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-[#EC5E2A]">Maintenance and operations</h2>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">The final stage of the software development life cycle is maintenance and operations. This is one of the most critical stages because it's when our hard work gets put to the test.</p>
            <p className="mb-4 text-sm lg:text-base dark:text-gray-300">Maintenance involves updating an existing software product to fix bugs and ensure reliability. It can also include adding new features or functionality to a current product.</p>
          </div>
          <Image
            src="/images/deployment.jpg"
            alt="Deployment Phase"
            width={500}
            height={300}
            className="rounded-lg shadow-lg md:order-1 w-full h-auto"
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}