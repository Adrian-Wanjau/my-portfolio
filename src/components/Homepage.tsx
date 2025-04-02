import { Header } from './Header';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';
export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Header 
        name="Adrian Wanjau"
        title="Full Stack Software Developer"
        ctaText="View My Work"
        ctaLink="/projects"
      />
      
      {/* Featured Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What I Bring to the Table</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<HiOutlineCode className="w-10 h-10" />}
              title="Technical Expertise"
              description="Proficient in modern web technologies including React, Node.js, and TypeScript with a focus on building scalable applications."
            />
            <SkillCard 
              icon={<HiOutlineLightBulb className="w-10 h-10" />}
              title="Problem Solving"
              description="Analytical thinker with a knack for finding elegant solutions to complex problems through creative approaches."
            />
            <SkillCard 
              icon={<HiOutlineSparkles className="w-10 h-10" />}
              title="User-Centered Design"
              description="Passionate about creating intuitive, accessible interfaces that provide exceptional user experiences."
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </a>
            <a 
              href="/resume" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component
function SkillCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}