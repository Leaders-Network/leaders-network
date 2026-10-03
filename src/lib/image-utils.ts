// Utility functions for image handling and fallbacks

export function generatePlaceholderImage(
  text: string,
  width: number = 400,
  height: number = 300,
  backgroundColor: string = '#f3f4f6',
  textColor: string = '#6b7280'
): string {
  // Create a data URL for a simple placeholder image
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null
  
  if (!canvas) {
    // Server-side fallback - return a placeholder service URL
    return `https://via.placeholder.com/${width}x${height}/${backgroundColor.slice(1)}/${textColor.slice(1)}?text=${encodeURIComponent(text)}`
  }

  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (!ctx) {
    return `https://via.placeholder.com/${width}x${height}/${backgroundColor.slice(1)}/${textColor.slice(1)}?text=${encodeURIComponent(text)}`
  }

  // Fill background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)
  
  // Draw text
  ctx.fillStyle = textColor
  ctx.font = `${Math.min(width, height) / 8}px Inter, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, width / 2, height / 2)
  
  return canvas.toDataURL()
}

export function getImageFallback(category: string): string {
  const fallbacks: Record<string, string> = {
    'ai-ml': '/images/data-analysis.jpg',
    'cloud': '/images/aws.png',
    'fintech': '/images/mobile-app-development.avif',
    'security': '/images/architecture.jpg',
    'analytics': '/images/data-analysis-img.jpg',
    'business': '/images/software-development.png',
    'technology': '/images/programming.jpg',
    'default': '/images/featured-1.jpg'
  }
  
  return fallbacks[category] || fallbacks.default
}

export function getAuthorFallback(authorId: string): string {
  const fallbacks: Record<string, string> = {
    'andrew-gold': '/images/Picture-1.jpg',
    'sarah-chen': '/images/Picture-2.jpg', 
    'michael-rodriguez': '/images/Picture 3.jpg',
    'default': '/images/Picture 1.jpg'
  }
  
  return fallbacks[authorId] || fallbacks.default
}