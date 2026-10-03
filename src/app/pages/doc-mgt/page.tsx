import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  const implementationSteps = [
    {
      title: "Step 1: Consultancy to Identify Needs and Objectives",
      items: ["Assess Documents", "Available Tools", "Available Systems", "Solution preferences", "Define Objectives", "Consider Volume"],
      image: "/images/doc-mgt-2.jpg",
      alt: "Consultancy Process"
    },
    {
      title: "Step 2: Choose the right DMS Provider",
      sections: {
        options: ["Cloud-based solutions", "On-premise systems", "Custom-built systems"],
        systems: ["Google Drive", "Dropbox Business", "Microsoft OneDrive for Business", "DocuSign", "M-Files", "Box", "SharePoint", "ServiceNow", "Laserfiche"]
      },
      image: "/images/doc-mgt-3.jpg",
      alt: "DMS Providers Comparison"
    },
    {
      title: "Step 3: Document Storage & Retrieval",
      items: ["Secure cloud storage", "Easy document retrieval", "Version control", "Access management", "Document backup", "Search functionality"],
      image: "/images/doc-mgt-4.jpg",
      alt: "Storage & Retrieval"
    },
    {
      title: "Step 4: Document Upload and Indexing",
      items: ["Batch uploading", "Metadata tagging", "Document classification", "OCR processing", "Automated indexing"],
      image: "/images/doc-mgt-5.jpg",
      alt: "Upload & Indexing Process"
    },
    {
      title: "Step 5: Organize and Classify Documents",
      items: ["Folder structure setup", "Document categorization", "Tagging system", "Custom metadata fields", "Document linking"],
      image: "/images/doc-mgt-6.jpg",
      alt: "Organization System"
    },
    {
      title: "Step 6: Automate Business Processes",
      items: ["Workflow automation", "Document routing", "Approval processes", "Task management", "Integration with existing systems"],
      image: "/images/doc-mgt-7.jpg",
      alt: "Automation Workflow"
    },
    {
      title: "Step 7: Backup & Disaster Recovery",
      items: ["Regular backups", "Data redundancy", "Recovery protocols", "Security measures", "Business continuity planning"],
      image: "/images/doc-mgt-8.jpg",
      alt: "Backup System"
    },
    {
      title: "Step 8: Mobile Access and Integration",
      items: ["Mobile app access", "Cross-platform compatibility", "API integration", "Remote access security", "Offline capabilities"],
      image: "/images/doc-mgt-9.jpg",
      alt: "Mobile Access"
    },
    {
      title: "Step 9: User Support and Training",
      items: ["User training sessions", "Documentation and guides", "Technical support", "Best practices training", "Ongoing assistance"],
      image: "/images/doc-mgt-10.jpg",
      alt: "Training Process"
    },
    {
      title: "Step 10: Evaluation and Optimization",
      items: ["Performance monitoring", "Usage analytics", "System optimization", "Regular updates", "Continuous improvement"],
      image: "/images/doc-mgt-11.jpg",
      alt: "Evaluation Process"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#EC5E2A]">Document Management Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">About Leaders Document Management Service</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4 font-quicksand font-bold">Leaders Network offers Document Management Services (DMS) as a service with a clear strategy, a combination of technologies, processes, and support to help our clients effectively manage, store, and organize their documents.</p>
              <p className="text-gray-700 font-quicksand font-bold">Document Management Service (DMS) is a cloud-based solution that allows businesses to securely store, organize, manage, and share documents without the need to maintain on-premise infrastructure. This service is crucial for businesses looking to streamline document workflows, improve collaboration, and ensure regulatory compliance. DMS typically offers features such as version control, access control, cloud storage, and integration with other business tools.</p>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center relative">
              <Image src="/images/doc-mgt-1.jpg" alt="DMS Overview" fill className="object-cover rounded-lg"/>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Our 10 Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ol className="list-decimal pl-6">
                <li className="mb-2 font-quicksand font-bold">Consultations to Identify Needs and Objectives</li>
                <li className="mb-2 font-quicksand font-bold">Choosing the right DMS Provider</li>
                <li className="mb-2 font-quicksand font-bold">Document Storage & Retrieval</li>
                <li className="mb-2 font-quicksand font-bold">Document Upload and Indexing</li>
                <li className="mb-2 font-quicksand font-bold">Organise and classify documents</li>
                <li className="mb-2 font-quicksand font-bold">Automate Business Processes with Document Workflows</li>
                <li className="mb-2 font-quicksand font-bold">Backup & Disaster Recovery</li>
                <li className="mb-2 font-quicksand font-bold">Mobile Access and Integration</li>
                <li className="mb-2 font-quicksand font-bold">User Support and Training</li>
                <li className="mb-2 font-quicksand font-bold">Evaluation and Optimisation</li>
              </ol>
            </div>
            <div className=" bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center relative">
              <Image 
                src="/images/doc-system.jpg" 
                alt="Services Illustration" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Implementation Steps</h2>
          
          {implementationSteps.map((step, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#EC5E2A]">{step.title}</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  {step.sections ? (
                    <>
                      <h4 className="font-semibold mb-2 text-[#EC5E2A]">Available Options:</h4>
                      <ul className="list-disc pl-6 mb-4">
                        {step.sections.options.map((option, i) => (
                          <li key={i} className="font-quicksand font-bold">{option}</li>
                        ))}
                      </ul>
                      <h4 className="font-semibold mb-2 text-[#EC5E2A]">Popular Systems:</h4>
                      <ul className="list-disc pl-6">
                        {step.sections.systems.map((system, i) => (
                          <li key={i} className="font-quicksand font-bold">{system}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul className="list-disc pl-6">
                      {step.items.map((item, i) => (
                        <li key={i} className="font-quicksand font-bold">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="md:w-1/2 bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center relative">
                  <Image src={step.image} alt={step.alt} fill className="object-cover rounded-lg"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}