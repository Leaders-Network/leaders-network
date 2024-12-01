import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='text-black'>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Staff Recruitment</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">About Staff Recruitment</h2>
          <p className="mb-4">
            Leaders Network offers Staff Recruitment as a service. We follow all the basic processes of identifying, attracting, interviewing, selecting, hiring, and onboarding employees. This makes us to hire the best and most appropriate staff for the positions required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Advertisement and Application Stage</h2>
          <p className="mb-4">
            In the application stage, Leaders Network places adverts in major Social Media sites and employment seeking sites. We also have a pool of our resource staff working where we give them opportunities to suggest names of qualified friends or associates who may be interested in the position. One of our strong points starts with the building of our application forms where we normally add two or three questions relevant to each position which the candidates must answer in order to apply. Some of these questions could require simple Yes / No answers with the wrong answer automatically disqualifying a candidate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Resume screening</h2>
          <p className="mb-4">
            After completing the application phase of the employee selection process, we now go to collection of resumes or CVs to sift through and filter those deemed suitable for a screening call.
          </p>
          <p className="mb-4">
            At this stage we tabulate skills in an excel format with the various experiences of the candidates listed. This will make us to be able to match the requirements of the company with the individual qualifications of the candidates. Our software-assisted method is programmed to identify prime candidates with the requisite experience and qualification.
          </p>
          <p className="mb-4">
            On many occasion, there may be hundreds or thousands of applicants for a single job and this method proves the best.
          </p>
          <p className="mb-4">For example:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>If you're looking to fill a banking position, someone with a banking degree yet with little to no practical work experience might be suitable for a junior-level position.</li>
            <li>If you're looking for an insurance officer, someone who has already worked at several reputable insurance companies may be a good fit for top positions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Screening call</h2>
          <p className="mb-4">
            When we have zeroed down to shortlisted applicants, we place calls to these people. The purpose of this call is to establish whether the candidate is truly interested in the job and (at least) minimally qualified to do it successfully. This way, only the best applicants will go to the next, stricter (and more expensive) hiring stages, like assessments and in-person interviews, saving our team time and money.
          </p>
          <p className="mb-4">We talk to them based on the requirements of the hiring company such as:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Are you able to start work within the month?</li>
            <li>Can you relocate if need be?</li>
            <li>Do you prefer Full time, hybrid or remote jobs</li>
            <li>When could you start if you were offered the job?</li>
            <li>Would you be comfortable if you have to travel on assignments?</li>
            <li>How much money would you like to earn in this position</li>
            <li>What did you find most interesting in the job description?</li>
            <li>What interests you about our company?</li>
            <li>Tell me about this two-year gap in your resume?</li>
            <li>Why do you want to leave your current position?</li>
            <li>Where do you see yourself in 3, 5 or 10 years' time</li>
          </ul>
          <p className="mb-4">All these questions made during the call gives us opportunities for further assessment</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Skill Assessment test</h2>
          <p className="mb-4">
            Based on the responses we have, we then sort the application into 3 categories namely "promising", "maybe", and "disqualified" groups. We then send a Skill Assessment Online test which is aptitude in nature to the Promising and Maybe groups to test personality, intelligence, speed, knowledge, etc.
          </p>
          <p className="mb-4">
            We normally give them like 2 or 3 days to do this test because we are conscious of their time too. Now those who are successful will be invited for In-person interview.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">In-person interviewing</h2>
          <p className="mb-4">
            Successful applicants from the Skilled Assessment test are invited for a face to face interview and if it is a Remote job, we can have interview on Video conferencing software which are cloud-based platforms that allows users to connect for video meetings, webinars, and live chat. We can use Zoom, Google Meet or Microsoft Teams.
          </p>
          <p className="mb-4">We normally ask a mix of questions such as the following:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Role-specific questions, to evaluate candidates' knowledge and experience</li>
            <li>Soft skills questions, to identify candidates who are good not just on paper</li>
            <li>Situational questions, to learn how candidates would address different scenarios and issues that may arise on the job</li>
            <li>Behavioral questions, to discover how candidates have previously handled professional challenges</li>
            <li>Cultural fit questions that will help us pick these candidates who are more likely to thrive in the work environment</li>
            <li>Career goals questions, to find candidates whose professional goals align with the business objectives</li>
            <li>Collaboration questions, to identify team players</li>
            <li>Adaptability questions, to learn which candidates are more flexible and will have a smooth transition to their new role if hired</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Background checks</h2>
          <p className="mb-4">
            Leaders Network go ahead to reassure our clients by conducting background checks on the candidates we shortlist to make sure that they are reliable and don't pose risks to the company.
          </p>
          <p className="mb-4">There are several types of background checks including:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Confirmation of house address</li>
            <li>Confirmation of former office</li>
            <li>Check for Criminal records</li>
            <li>Verification reports (e.g. identity, education, work history, etc.)</li>
            <li>Health tests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Reference checks</h2>
          <p className="mb-4">
            The final stages of the selection process is to check up on the references candidates put down on their form. In this way we will get feedback about their performance from people they have actually worked with in the past, such as former managers, former colleagues or business partners and clients. We usually ask our candidates to provide contact details from former employers and coworkers.
          </p>
          <p className="mb-4">
            We normally send an introductory email to introduce the company and explain why we want this information. This way, we normally schedule a call where we will discuss in more detail.
          </p>
          <p className="mb-4">During reference checks, we will achieve the following:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Confirm what candidates have already told you</li>
            <li>Learn how candidates use their skills on the job</li>
            <li>Discover potential weaknesses or lack of practical experience</li>
            <li>Understand how candidates behave in the work environment (e.g. if they're punctual, if they receive feedback well, etc.)</li>
          </ul>
          <p className="mb-4">Some list of targeted questions we ask are such as:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>When did the candidate work at your company and what was their job title?</li>
            <li>What were the candidate main responsibilities?</li>
            <li>Could you mention one or two group projects the candidate was involved in? What was their role and how did they collaborate with their colleagues?</li>
            <li>Do you think the candidate could take on a more senior role? Why or why not?</li>
            <li>Given the opportunity, would you rehire the candidate?</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Decision and job offer</h2>
          <p className="mb-4">After getting the required candidate, we give them an offer. The offer consist of the following:</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Informal verbal offer.</li>
            <li>We first of all call them to give them the good news and get a hint as to whether they're going to accept or reject your offer. We also give them the opportunity to "think on it" so they don't feel pressured to give an answer right away.</li>
            <li>When a candidate accepts the job offer a hiring cycle ends successfully.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#EC5E2A]">Resumption</h2>
          <p className="mb-4">In preparing time for the employee's arrival, we do the following:</p>
          <ul className="list-disc pl-8 mb-4">
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