import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'

export default function BlogNotFound() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Blog Post Not Found
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
              
              <div>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Or go to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FooterReveal />
    </div>
  )
}