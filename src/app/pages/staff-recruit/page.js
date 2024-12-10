import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='text-black'>
      <Navbar/>
      <div className="relative h-[200px] sm:h-[300px] w-full">
        <Image
          src="/images/career-employment.jpg"
          alt="Staff Recruitment Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl pt-20 sm:text-4xl font-bold text-white shadow-lg text-center px-4">Staff Recruitment</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">About Staff Recruitment</h2>
            <p className="mb-4 font-quicksand font-bold">
              Leaders Network offers Staff Recruitment as a service. We follow all the basic processes of identifying, attracting, interviewing, selecting, hiring, and onboarding employees. This makes us to hire the best and most appropriate staff for the positions required.
            </p>
          </div>
          <div className="w-full sm:w-1/3 relative h-[200px] sm:h-[250px]">
            <Image
              src="/images/abt-recruit.jpg"
              alt="About Recruitment"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        <section className="mb-12 flex flex-col sm:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Advertisement and Application Stage</h2>
            <p className="mb-4 font-quicksand font-bold">
              In the application stage, Leaders Network places adverts in major Social Media sites and employment seeking sites. We also have a pool of our resource staff working where we give them opportunities to suggest names of qualified friends or associates who may be interested in the position. One of our strong points starts with the building of our application forms where we normally add two or three questions relevant to each position which the candidates must answer in order to apply. Some of these questions could require simple Yes / No answers with the wrong answer automatically disqualifying a candidate.
            </p>
          </div>
          <div className="w-full sm:w-1/3 relative h-[200px] sm:h-[250px]">
            <Image
              src="/images/abt-recruit-2.jpg"
              alt="Advertisement Stage"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Resume screening</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 font-quicksand font-bold">
                After completing the application phase of the employee selection process, we now go to collection of resumes or CVs to sift through and filter those deemed suitable for a screening call.
              </p>
              <p className="mb-4 font-quicksand font-bold">
                At this stage we tabulate skills in an excel format with the various experiences of the candidates listed. This will make us to be able to match the requirements of the company with the individual qualifications of the candidates. Our software-assisted method is programmed to identify prime candidates with the requisite experience and qualification.
              </p>
            </div>
            <div className="relative h-[200px] sm:h-[300px]">
              <Image
                src="/images/resume-screening.jpg"
                alt="Resume Screening"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <p className="mb-4 font-quicksand font-bold">
            On many occasion, there may be hundreds or thousands of applicants for a single job and this method proves the best.
          </p>
          <p className="mb-4 font-quicksand font-bold">For example:</p>
          <ul className="list-disc pl-8 mb-4 font-quicksand font-bold">
            <li>If you're looking to fill a banking position, someone with a banking degree yet with little to no practical work experience might be suitable for a junior-level position.</li>
            <li>If you're looking for an insurance officer, someone who has already worked at several reputable insurance companies may be a good fit for top positions.</li>
          </ul>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="mb-8 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="relative h-[150px] sm:h-[200px] mb-4">
              <Image
                src="/images/screening-call.jpg"
                alt="Screening Call"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Screening call</h2>
            <p className="mb-4 font-quicksand font-bold">
              When we have zeroed down to shortlisted applicants, we place calls to these people. The purpose of this call is to establish whether the candidate is truly interested in the job and (at least) minimally qualified to do it successfully.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="relative h-[150px] sm:h-[200px] mb-4">
              <Image
                src="/images/skill-assesment.jpg"
                alt="Skill Assessment"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Skill Assessment test</h2>
            <p className="mb-4 font-quicksand font-bold">
              Based on the responses we have, we then sort the application into 3 categories namely "promising", "maybe", and "disqualified" groups. We then send a Skill Assessment Online test which is aptitude in nature to the Promising and Maybe groups.
            </p>
          </section>
        </div>

        <section className="mb-12">
          <div className="relative h-[200px] sm:h-[300px] mb-6">
            <Image
              src="/images/person-interview.jpg"
              alt="Interview Process"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">In-person interviewing</h2>
          <p className="mb-4 font-quicksand font-bold">
            Successful applicants from the Skilled Assessment test are invited for a face to face interview and if it is a Remote job, we can have interview on Video conferencing software which are cloud-based platforms that allows users to connect for video meetings, webinars, and live chat.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <section className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="relative h-[150px] mb-4">
              <Image
                src="/images/background-check.jpg"
                alt="Background Checks"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Background checks</h2>
            <p className="mb-4 font-quicksand font-bold">
              Leaders Network go ahead to reassure our clients by conducting background checks on the candidates we shortlist to make sure that they are reliable and don't pose risks to the company.
            </p>
          </section>

          <section className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="relative h-[150px] mb-4">
              <Image
                src="/images/reference-check.jpg"
                alt="Reference Checks"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Reference checks</h2>
            <p className="mb-4 font-quicksand font-bold">
              The final stages of the selection process is to check up on the references candidates put down on their form. In this way we will get feedback about their performance from people they have actually worked with in the past.
            </p>
          </section>

          <section className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="relative h-[150px] mb-4">
              <Image
                src="/images/job-offer.jpg"
                alt="Job Offer"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Decision and job offer</h2>
            <p className="mb-4 font-quicksand font-bold">
              After getting the required candidate, we give them an offer. We first call them to give them the good news and discuss employment terms.
            </p>
          </section>
        </div>

        <section className="mb-8">
          <div className="relative h-[200px] sm:h-[250px] mb-6">
            <Image
              src="/images/resumption.jpg"
              alt="Onboarding Process"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#EC5E2A]">Resumption</h2>
          <p className="mb-4 font-quicksand font-bold">In preparing time for the employee's arrival, we do the following:</p>
          <ul className="list-disc pl-8 mb-4 font-quicksand font-bold">
            <li>We send them a welcome email to get them excited and plan their first day for a smooth onboarding.</li>
            <li>We also inform rejected candidates that they didn't get the job.</li>
            <li>We discuss employment terms and ask for feedback. Salary, bonuses and working hours are all potential deal breakers.</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  )
}