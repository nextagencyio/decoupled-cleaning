import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_TESTIMONIALS } from '@/lib/queries'
import { TestimonialsData } from '@/lib/types'
import Header from '../components/Header'
import TestimonialCard from '../components/TestimonialCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Testimonials | Sparkle & Shine Cleaning',
  description: 'See what our happy clients have to say.',
}

async function getTestimonials() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_TESTIMONIALS, { first: 50 })
    return data?.nodeTestimonials?.nodes || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export default async function TestimonialsPage() {
  const items = await getTestimonials()

  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <section className="relative bg-primary-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary-500 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-primary-400 rounded-3xl opacity-25 animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hear from our satisfied clients about their sparkling clean experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Testimonials Yet</h2>
              <p className="text-gray-500">
                Testimonials will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
