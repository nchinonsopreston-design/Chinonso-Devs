import React from 'react';
import { Page, TeamMember, Partner } from '../types';
import { ArrowRight, BarChart2, CheckCircle, Globe, Users, Laptop, Briefcase, ChevronRight } from 'lucide-react';
import { RECENT_POSTS, PARTNERS, CURRICULUM } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://res.cloudinary.com/dttoqt6w7/video/upload/v1765422243/Generated_File_December_11_2025_-_4_02AM_lv4rts.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Empowering Africa's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-100">
              Next Generation of Economic Analysts
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            A free, intensive 8-week online program equipping emerging African students with advanced macroeconomic analysis skills, policy expertise, and data-driven insights to transform our continent's economic future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate(Page.Contact)}
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Notified for Next Cohort
            </button>
            <button
              onClick={() => onNavigate(Page.Program)}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Learn More About AMAP
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-brand-800 mb-4 uppercase tracking-wide">Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To equip emerging African students with advanced skills in macroeconomic analysis, data-driven policy insights, and economic intelligence, empowering students to think critically about global and Economic issues and their implication for governments and societies.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-brand-800 mb-4 uppercase tracking-wide">Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To empower emerging African students with the technical expertise, critical thinking skills and data-driven analytical tools required to understand, interpret and respond to macroeconomic trends shaping Africa and local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMAP Matters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             <img src="https://picsum.photos/seed/africa_map_data/800/600" alt="Africa economic growth" className="rounded-2xl shadow-xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Africa Needs Economic Analysts Now</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Africa stands at a critical economic crossroads. With a young, dynamic population and rapidly evolving economies, our continent needs skilled analysts who understand the complexities of monetary policy, fiscal strategies, external sector dynamics, and sustainable development.
              </p>
              <p>
                AMAP bridges the gap between academic theory and real-world economic challenges, preparing scholars to become the policy advisors, researchers, and economic thought leaders Africa needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Makes AMAP Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { icon: CheckCircle, title: "100% Free", desc: "No tuition fees. Selection based purely on merit and commitment to Africa's economic future." },
               { icon: Globe, title: "Pan-African Community", desc: "Connect with fellow emerging economists from across all African nations in a collaborative learning environment." },
               { icon: Users, title: "Expert-Led Sessions", desc: "Learn from seasoned economists, policy experts, and practitioners with real-world experience." },
               { icon: BarChart2, title: "Practical Skills", desc: "Gain hands-on experience in economic modeling, policy writing, and data-driven analysis rather than just theory." },
               { icon: Laptop, title: "Online & Flexible", desc: "Access world-class training from anywhere in Africa through our fully online, interactive 8-week program." },
               { icon: Briefcase, title: "Career Advancement", desc: "Position yourself as a thought leader in African economics with skills that open doors in government, NGOs, and private sector." }
             ].map((item, idx) => (
               <div key={idx} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                 <item.icon className="h-10 w-10 text-brand-600 mb-4" />
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Program Structure Overview */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">An Intensive 8-Week Journey</h2>
              <p className="text-brand-100 mb-8 text-lg">
                Our comprehensive curriculum covers all aspects of macroeconomics relevant to African economies:
              </p>
              <ul className="space-y-4">
                {CURRICULUM.map((mod, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold mt-1 mr-3">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="font-bold block text-white">{mod.title}</span>
                      <span className="text-sm text-brand-200">{mod.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button onClick={() => onNavigate(Page.Program)} className="text-white font-semibold underline hover:text-brand-200">
                  View Full Curriculum Details &rarr;
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
               {/* Visual placeholder for Infographic */}
               <div className="w-80 h-80 rounded-full border-4 border-brand-700 flex items-center justify-center relative bg-brand-800">
                  <div className="text-center p-6">
                    <p className="text-4xl font-bold text-white mb-2">8</p>
                    <p className="text-xl text-brand-200">Weeks</p>
                    <p className="text-sm text-brand-300 mt-2">Intensive Online Training</p>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-brand-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
                    Feb 2025 Cohort
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Join Africa's Economic Analysts Community</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We are looking for emerging African students (undergraduates, graduates, early-career professionals) passionate about understanding and shaping Africa's economic future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Selection Criteria</h3>
                <p className="text-slate-600 text-sm">Strong academic background, commitment to the 8-week program, and ability to think critically.</p>
             </div>
             <div className="p-6 border-l border-r border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Requirements</h3>
                <p className="text-slate-600 text-sm">Updated CV/Resume, Compelling Cover Letter, and Behavioral Assessment Responses.</p>
             </div>
             <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cohort Size</h3>
                <p className="text-slate-600 text-sm">Maximum 100 scholars selected per cohort to ensure quality mentorship.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Get Notified CTA */}
      <section className="py-16 bg-brand-50 border-t border-brand-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Be First to Know When Applications Open</h2>
          <p className="text-lg text-brand-700 mb-8">
            Our next cohort begins in <span className="font-bold">February 2025</span>. Join our waitlist to receive early notification and exclusive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-brand-200 focus:ring-2 focus:ring-brand-500 outline-none" />
            <button className="px-6 py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 shadow-md transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Our Partners in Economic Excellence</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {PARTNERS.map((p) => (
                <div key={p.id} className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                   <img src={p.logoUrl} alt={p.name} className="h-10 w-auto" />
                </div>
              ))}
           </div>
           <p className="text-center text-xs text-slate-400 mt-8">We're building partnerships with leading economic institutions across Africa. Interested? Contact us.</p>
        </div>
      </section>
    </div>
  );
};