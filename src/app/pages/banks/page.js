import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
      <div className='text-black min-h-screen bg-gradient-to-b from-white to-gray-100'>
          <Navbar/>
          <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold mb-12 text-center text-[#EC5E2A] border-b-4 border-blue-500 pb-4 max-w-3xl mx-auto">Data Analysis in Banks</h1>
            
              <div className="mb-12 grid gap-8 max-w-7xl mx-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-09.jpg" alt="Fraud Detection" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Fraud Detection and Prevention</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Transaction Monitoring: Leaders Network can assist Banks use real-time data analysis to monitor and detect unusual transaction patterns that may indicate fraudulent activities.</li>
                              <li>Predictive Analytics for Fraud: By analyzing historical data and recognizing trends, Leaders Network can assist banks to predict potential fraud before it happens.</li>
                              <li>Risk Scoring: Banks use risk scoring algorithms that evaluate the likelihood of fraud or suspicious behavior based on customer profiles and past transaction data.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-10.jpg" alt="Credit Scoring" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Credit Scoring and Risk Management</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Credit Scoring Models: Leaders Network assist banks use data analysis to build and improve credit scoring models.</li>
                              <li>Risk Assessment: By analyzing financial statements, transaction histories, and external data sources.</li>
                              <li>Stress Testing: Data analysis tools are used to simulate different economic scenarios.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-11.jpg" alt="Customer Segmentation" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Customer Segmentation and Personalization</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Customer Profiling: Leaders Network assist Banks analyze transaction data to categorize customers.</li>
                              <li>Targeted Marketing: Leaders Network use data analysis to allow banks to run targeted marketing campaigns.</li>
                              <li>Customer Lifetime Value (CLV): Banks analyze customer data to predict the long-term value.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-12.jpg" alt="Operational Efficiency" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Operational Efficiency and Process Optimization</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Process Automation: Leaders Network use data analysis to identify inefficiencies in banking operations.</li>
                              <li>Optimizing Branch Operations: Banks analyze foot traffic data and transactional data.</li>
                              <li>Resource Allocation: Analyzing operational data helps banks optimize staffing.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-13.jpg" alt="Regulatory Compliance" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Regulatory Compliance and Reporting</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Anti-Money Laundering (AML) Compliance: Leaders Network assist banks use data analysis.</li>
                              <li>Know Your Customer (KYC): Data analysis helps banks manage and maintain up-to-date customer records.</li>
                              <li>Regulatory Reporting: Banks analyze financial data to ensure timely and accurate reporting.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-14.jpg" alt="Loan Default" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Loan Default Prediction and Credit Risk</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Loan Default Prediction: Leaders Network can assist in analyzing historical loan data.</li>
                              <li>Collateral Evaluation: Data analysis helps assess the value and risk.</li>
                              <li>Delinquency Management: Banks use data to identify customers at risk.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-15.jpg" alt="Market Analysis" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Market and Economic Analysis</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Market Trends: Leaders Network assist banks use data analysis to monitor and predict market trends.</li>
                              <li>Interest Rate Forecasting: Analyzing economic data helps banks forecast interest rate movements.</li>
                              <li>Global Risk Assessment: Banks analyze data from global markets.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-16.jpg" alt="Customer Service" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Customer Service and Experience</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Sentiment Analysis: Leaders assist banks analyze customer feedback.</li>
                              <li>Churn Prediction: We use data analysis to predict customer churn.</li>
                              <li>Chatbots and Virtual Assistants: AI-powered chatbots and virtual assistants use data analysis.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-8">
                      <div className="relative h-[400px] w-[500px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image src="/images/major-17.jpg" alt="Product Development" fill style={{objectFit: 'cover'}} className="transform hover:scale-105 transition-transform duration-500"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A] border-l-4 border-blue-500 pl-4">Data-Driven Product Development</h2>
                          <ul className="list-disc pl-6 space-y-3 text-gray-700">
                              <li>Identifying Customer Needs: Leaders Network assist banks to analyze customer behavior.</li>
                              <li>Product Performance: We use data analysis to help banks evaluate the performance.</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <p className="text-xl text-gray-700 italic text-center max-w-3xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
                  Data analysis in banks is crucial for enhancing operational efficiency, managing risk, improving customer experiences, and making informed business decisions.
              </p>
          </div>
          <Footer/>
      </div>
    )
}