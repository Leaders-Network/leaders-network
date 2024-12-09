import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='text-black bg-gradient-to-b from-white to-gray-50'>
      <Navbar/>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-[#EC5E2A]">Advertising on Social Media Platforms</h1>
        
        <section className="mb-16">
          <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
            Social media platforms are indispensable tools for modern communication, entertainment, and business marketing. They allow individuals and organizations to create, share, and engage with content that drives brand visibility, community interaction, and customer loyalty. Leveraging the right platforms tailored to your audience and objectives is the key to success in this digital age.
          </p>
          <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
            At Leaders Network, we specialize in providing cutting-edge Social Media Marketing solutions. By understanding our clients' unique needs, we develop bespoke strategies to maximize impact and ROI. Additionally, we provide content creation services for individuals or businesses that require high-quality content but may lack the time or expertise to produce it themselves.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-[#EC5E2A]">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-none space-y-4 bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-blue-600 text-2xl">•</span>
                <span className="text-gray-700">Facebook and Instagram: These are dominant platforms for general business marketing and community building.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-blue-600 text-2xl">•</span>
                <span className="text-gray-700">TikTok: Key for reaching younger, trend-driven audiences with short-form, viral content.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-blue-600 text-2xl">•</span>
                <span className="text-gray-700">LinkedIn: Essential for business-to-business marketing, professional networking, and career-related content.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-blue-600 text-2xl">•</span>
                <span className="text-gray-700">YouTube: The go-to platform for video content, ranging from tutorials to entertainment.</span>
              </li>
            </ul>
            <ul className="list-none space-y-4 bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-600 text-2xl">•</span>
                <span className="text-gray-700">Snapchat: Caters to niche communities, offering opportunities for more personalized engagement.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-600 text-2xl">•</span>
                <span className="text-gray-700">Twitter: A microblogging platform where users post short, text-based updates.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-600 text-2xl">•</span>
                <span className="text-gray-700">WhatsApp and Telegram: Ideal for direct communication and customer service.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-600 text-2xl">•</span>
                <span className="text-gray-700">Pinterest: Primarily used for inspiration, planning, and shopping.</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-600 text-2xl">•</span>
                <span className="text-gray-700">Email: This enables you to create a community, share content, and foster engagement.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[#EC5E2A]">Our Expertise Across Platforms</h2>
          
          <div className="space-y-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/Picture-1.jpg"
                  alt="Facebook Marketing"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#EC5E2A]">Facebook</h3>
                <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-700">
                  Leaders Network is experienced in all forms of Facebook advertising. Facebook is one of the largest and most established platforms with over 2.8 billion monthly active users. It offers unparalleled opportunities for businesses and individuals to connect with diverse audiences.
                </p>
                <h4 className="font-semibold mb-6 text-xl md:text-2xl text-[#EC5E2A]">Our Services Include:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Creating and managing engaging content for brand awareness
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Running targeted ad campaigns with the Facebook Ads Manager
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Creating and managing Facebook Pages and Groups
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Implementing retargeting strategies using Facebook Pixel
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Collaborating with influencers for amplified reach
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Hosting promotional contests and giveaways
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Leveraging Facebook Marketplace effectively
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600 text-2xl">→</span>
                    Tracking performance with Facebook Insights
                  </li>
                </ul>
              </div>
            </div>

            {/* Similar structure continues for other platforms... */}
            
            <div className="mt-20 bg-white p-6 md:p-10 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-[#EC5E2A]">Why Choose Leaders Network?</h2>
              <div className="relative h-[300px] md:h-[500px] w-full mb-8">
                <Image
                  src="/images/Picture-2.jpg"
                  alt="Why Choose Leaders Network"
                  fill
                  className="object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-700">
                At Leaders Network, we combine creativity, innovation, and analytics-driven approaches to provide exceptional social media marketing solutions. Our commitment to delivering high-quality, result-oriented strategies ensures your brand thrives in the competitive digital arena.
              </p>
              <p className="font-semibold text-lg md:text-xl text-center text-blue-600">
                Take the next step. Partner with Leaders Network to transform your social media presence into a dynamic driver of growth and success. Contact us today to get started.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}