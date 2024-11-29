'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    // Handle subscription logic here
  };

  const featuredPosts = [
    {
      image: "/images/featured-1.jpg",
      tags: ["Design", "Idea", "Review"],
      title: "Perfection has to do with the\n end product",
      description: "Vestibulum vehicula dui venenatis neque tempor,\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    },
    {
      image: "/images/featured-2.jpg",
      tags: ["Creative", "Product", "Story"],
      title: "I'ts a new era in design,\nthere are no rules",
      description: "Quibus autem in rebus tanta obscuratio non fit,\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    },
    {
      image: "/images/featured-3.jpg",
      tags: ["Creating", "People", "Culture"],
      title: "New technology is not good or\n evil in and of itself",
      description: "Aenean eget urna aliquet, viverra orci quis,\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    },
    {
      image: "/images/featured-1.jpg",
      tags: ["Store", "Books", "Season"],
      title: "The difference is quality\n design.",
      description: "Vide, ne etiam menses! nisi forte eum dicis, qui,\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    },
    {
      image: "/images/featured-4.jpg",
      tags: ["Javascript", "Node js", "Tailwind"],
      title: "Problems are non stop signs,\n they are guidelines",
      description: "Nam in pretium dui. Phasellus dapibus, mi at molestie\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    },
    {
      image: "/images/featured-1.jpg",
      tags: ["Stylesheet", "Exams", "Netflix"],
      title: "Being unique is better than\n being perfect",
      description: "Nullam vel lectus vel velit pellentesque dignissim nec,\n accumsan iaculis sapien ornare. Sed at ante\n porta, ullamcorper massa eu, ullamcorper sapien."
    }
  ];

  return (
    <div className="text-[#EC5E2A] px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
      <div className="text-3xl sm:text-5xl md:text-7xl py-4 sm:py-6 md:py-8 font-bold">
        <h1 className="leading-tight">
          Hey, we are Leaders Network. See our thoughts, stories and ideas.
        </h1>
      </div>

      <div className="my-8 md:my-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-80">
            <input 
              className={`px-6 py-3 rounded-lg border-2 ${error ? 'border-red-500' : 'border-slate-300'} focus:border-slate-500 outline-none w-full transition-all duration-300 hover:shadow-md`}
              type="text" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="Your email address"
            />
            {error && <p className="text-red-500 text-sm mt-1">Please enter your email address</p>}
          </div>
          <button 
            onClick={handleSubscribe}
            className="rounded-lg px-8 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>

        <div>
          <p className="text-slate-600 text-base md:text-lg">Get the email newsletter and unlock access to members-only content and updates</p>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get started with our best stories</h2>

        <div className="space-x-4 md:space-x-8 flex overflow-x-auto pb-8 scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {featuredPosts.map((post, index) => (
            <div key={index} className="min-w-[280px] sm:min-w-[400px] md:min-w-[500px] snap-start transform transition-all duration-300 hover:scale-[0.98]">
              <Image
                width={500}
                height={500}
                className="rounded-2xl object-cover hover:opacity-90 transition-all duration-300 h-[200px] sm:h-[250px] md:h-[300px] shadow-md hover:shadow-xl"
                src={post.image}
                alt="hero-banner"
                priority
              />
              <div className="flex flex-wrap gap-2 mt-4 mb-3">
                {post.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="bg-slate-800 px-4 py-1 rounded-full text-white text-xs md:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">{tag}</p>
                ))}
              </div>
              <h2 className="text-xl text-[#EC5E2A] sm:text-2xl md:text-3xl font-bold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-base md:text-lg text-slate-600 line-clamp-3">{post.description}</p>
              <button className="bg-slate-800 text-white px-4 py-1 rounded-lg mt-4">Read More</button>
            </div>
          ))}
        </div>
      </div>

{/* Featured blog posts carousel section */}
    
      <div>
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-[#EC5E2A] ">
            See what we've written lately
          </h1>
        </div>

        <div className="space-x-6 md:space-x-8 flex overflow-x-auto pb-8 scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {[
            {
              image: "/images/recent-1.jpg",
              tags: ["Lifestyle", "People", "Review"],
              title: "Creating is a privilege but also a gift",
              description: "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            },
            {
              image: "/images/recent-2.jpg",
              tags: ["Software", "Backend", "Frontend"],
              title: "Every day, in every city and town across the country",
              description: "Morbi a facilisis lectus. Ut eu dapibus risus, id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            },
            {
              image: "/images/recent-3.jpg",
              tags: ["Softness", "Steeze", "Productivity"],
              title: "Your voice, your mind, your story, your vision",
              description: "Nullam auctor nisi non tortor porta, id dapibus lectus id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            },
            {
              image: "/images/recent-4.jpg",
              tags: ["Luxury", "Civilian", "Rich"],
              title: "The trick to getting more done is to have the freedom to roam around",
              description: "Cras hendrerit massa nec augue placerat id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            },
            {
              image: "/images/recent-5.jpg",
              tags: ["Lagos", "Island", "Lasgidi"],
              title: "I work best when my space is filled with inspiration",
              description: "Cras molestie ornare quam at semper. id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            },
            {
              image: "/images/recent-6.jpg",
              tags: ["City", "New york", "Dubai"],
              title: "Now we're getting somewhere perfect",
              description: "conubia nostra, per inceptos himenaeos. id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis"
            }
          ].map((post, index) => (
            <div key={index} className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] snap-start transform transition-all duration-300 hover:scale-[0.98]">
              <Image
                width={500}
                height={500}
                className="rounded-2xl object-cover hover:opacity-90 transition-all duration-300 h-[200px] sm:h-[250px] md:h-[300px] shadow-md hover:shadow-xl"
                src={post.image}
                alt="blog post image"
                priority
              />
              <div className="flex flex-wrap gap-2 mt-4 mb-3">
                {post.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="bg-slate-800 px-4 py-1 rounded-full text-white text-xs md:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">{tag}</p>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#EC5E2A] font-bold mb-3 line-clamp-2 hover:text-slate-700 transition-colors duration-300">{post.title}</h2>
              <p className="text-base md:text-lg text-slate-600 line-clamp-3">{post.description}</p>
              <button className="bg-slate-800 text-white px-4 py-1 rounded-lg mt-4">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}