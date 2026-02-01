import BlogHero from '@/components/BlogHero'
import BlogPosts from '@/components/BlogPosts'
import SectionHeader from '@/components/SectionHeader'

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Latest Articles" 
            subtitle="Stay updated with dental health tips and insights from our experts" 
          />
          <BlogPosts />
        </div>
      </section>
    </div>
  )
}
