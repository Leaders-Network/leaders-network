import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Leaders Network | Technology Insights & Innovation',
  description: 'Discover the latest insights on enterprise technology, AI, cloud solutions, fintech innovations, and digital transformation from Leaders Network experts.',
  keywords: 'technology blog, enterprise software, AI insights, cloud computing, fintech, digital transformation, cybersecurity, data analytics',
  openGraph: {
    title: 'Leaders Network Blog - Technology Insights & Innovation Hub',
    description: 'Stay ahead with expert insights on AI, cloud computing, fintech, and enterprise technology solutions from industry leaders.',
    images: ['/images/blog-featured.jpg']
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}