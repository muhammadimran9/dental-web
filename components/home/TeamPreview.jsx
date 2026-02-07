import Link from 'next/link'
import Button from '../ui/Button'
import TeamMemberCard from './TeamMemberCard'
import TeamPreviewHeader from './TeamPreviewHeader'
import { teamMembers } from './teamMembersData'

export default function TeamPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <TeamPreviewHeader />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/doctors">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              View All Team Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
