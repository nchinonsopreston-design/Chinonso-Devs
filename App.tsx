import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Program } from './pages/Program';
import { Insights } from './pages/Insights';
import { Portal } from './pages/Portal';
import { Page } from './types';
import { Mail, MapPin, Phone } from 'lucide-react';
import { TEAM } from './constants';

const About = () => (
  <div className="w-full">
    {/* Hero */}
    <div className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Africa's Economic Intelligence</h1>
        <p className="text-xl text-slate-300">
          AMAP exists to transform how emerging African students understand, analyze, and respond to the macroeconomic forces shaping our continent's future.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Our Story */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story: Why AMAP Was Founded</h2>
        <div className="prose prose-lg text-slate-600 max-w-none">
          <p>
            Africa's economic potential is undeniable. With the world's youngest population, abundant natural resources, and growing regional integration, our continent is poised for unprecedented growth. Yet, this potential can only be realized with skilled economic analysts who understand the unique challenges and opportunities facing African nations.
          </p>
          <p className="font-semibold text-slate-800 mt-4">
            AMAP was founded on a simple but powerful belief: Africa's economic future must be shaped by Africans.
          </p>
          <p>
            Too often, critical economic decisions affecting our communities are made without sufficient input from homegrown analysts who deeply understand local contexts. We created AMAP to close this gap by equipping a new generation of African students with world-class macroeconomic analysis skills, grounded in African realities and global best practices.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20 bg-slate-50 p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Excellence</h3>
             <p className="text-slate-600">We maintain the highest standards in curriculum design, facilitator selection, and scholar development.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Pan-African Unity</h3>
             <p className="text-slate-600">We celebrate Africa's diversity while fostering collaboration and knowledge-sharing across all 54 nations.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Practical Impact</h3>
             <p className="text-slate-600">Our focus is on real-world application, fostering skills that translate directly into policy impact and economic transformation.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Accessibility</h3>
             <p className="text-slate-600">Economic education should not be a privilege. AMAP is free and accessible to talented students regardless of financial background.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Data-Driven Thinking</h3>
             <p className="text-slate-600">We train scholars to base their analysis and recommendations on empirical evidence, not assumptions.</p>
           </div>
           <div>
             <h3 className="font-bold text-xl text-brand-800 mb-2">Ethical Leadership</h3>
             <p className="text-slate-600">We cultivate analysts who understand their responsibility to serve the public good.</p>
           </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">The Pioneers Behind AMAP</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Meet the dedicated team of leaders, educators, and visionaries working to transform economic education across Africa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover border-2 border-brand-100 flex-shrink-0" />
               <div>
                 <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                 <p className="text-brand-600 font-medium text-sm mb-3">{member.role}</p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-3">{member.bio}</p>
                 {member.email && (
                   <a href={`mailto:${member.email}`} className="text-xs text-slate-400 hover:text-brand-600 flex items-center">
                     <Mail className="h-3 w-3 mr-1" /> {member.email}
                   </a>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-slate-50 p-8 rounded-xl">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <div className="flex items-center text-slate-600">
            <Mail className="h-5 w-5 mr-3 text-brand-600" />
            <span>amapprogram2025@gmail.com</span>
          </div>
          <div className="flex items-center text-slate-600">
             <MapPin className="h-5 w-5 mr-3 text-brand-600" />
            <span>Fully Remote / Online</span>
          </div>
          <p className="text-sm text-slate-500 mt-4">
             Interested in partnering with AMAP or joining our Advisory Board? We'd love to hear from you.
          </p>
        </div>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
        <textarea placeholder="Message" rows={4} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"></textarea>
        <button className="w-full bg-brand-800 text-white font-bold py-3 rounded-lg hover:bg-brand-900 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Program: return <Program />;
      case Page.Insights: return <Insights />;
      case Page.Portal: return <Portal />;
      case Page.About: return <About />;
      case Page.Contact: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;