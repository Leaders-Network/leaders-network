'use client'

interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="mt-12">
      <div 
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-p:leading-relaxed prose-p:mb-6
          prose-li:text-gray-700 dark:prose-li:text-gray-300
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-a:text-primary-600 dark:prose-a:text-primary-400
          prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-primary-500
          prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800
          prose-blockquote:py-4 prose-blockquote:px-6
          prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-code:bg-gray-100 dark:prose-code:bg-gray-800
          prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-code:text-sm prose-code:font-medium
          prose-pre:bg-gray-900 prose-pre:border
          prose-pre:border-gray-700 prose-pre:rounded-lg
          prose-img:rounded-lg prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}