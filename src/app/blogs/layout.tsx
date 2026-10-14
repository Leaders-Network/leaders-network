import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Insights & Blog | Leaders Network',
  description: 'Explore thought leadership articles, technology insights, and industry expertise from Leaders Network — enterprise technology consultants in Nigeria and Africa.',
  keywords: 'technology blog Nigeria, enterprise software insights, digital transformation articles, IT consulting blog Africa',
  alternates: { canonical: 'https://www.eleadersnetwork.net/blogs' },
  openGraph: {
    title: 'Leaders Network Blog | Technology Insights',
    description: 'Expert insights on enterprise software, digital transformation, and technology consulting from Leaders Network.',
    url: 'https://www.eleadersnetwork.net/blogs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leaders Network Blog | Technology Insights',
    description: 'Expert insights on enterprise software, digital transformation, and technology consulting from Leaders Network.'
  }
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}