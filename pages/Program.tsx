import React, { useState } from 'react';
import { CURRICULUM } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle, FileText, Send, Calendar, Users, BarChart2 } from 'lucide-react';

export const Program: React.FC = () => {
  const [openModule, setOpenModule] = useState<string | null>(CURRICULUM[0].id);

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">A Transformative 8-Week Journey in Macroeconomic Analysis</h1>
          <h2 className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Master the skills African economies need most, ranging from monetary policy to economic modeling, and fiscal strategy to policy writing, delivered in an intensive, free online program designed for emerging African analysts.
          </h2>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive, Practical, Africa-Focused</h2>
            <div className="prose text-slate-600">
              <p className="mb-4">
                The Africa Macroeconomic Analysts Programme is an <strong>8-week intensive online training</strong> designed specifically for emerging African students who want to understand, analyze, and influence the economic forces shaping our continent.
              </p>
              <p className="mb-6">
                Unlike traditional economics courses, AMAP focuses on <strong>practical application</strong>, meaning you won't just learn theories, but you'll develop the real-world skills needed to write policy briefs, build economic models, and provide data-driven recommendations that inform decision-making.
              </p>
              <ul className="space-y-2 font-medium text-slate-800">
                <li>Format: Fully online and interactive</li>
                <li>Duration: 8 weeks (2 months)</li>
                <li>Cost: Completely free, with no tuition or hidden fees</li>
                <li>Next Cohort: February 2025</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">How AMAP Works</h3>
            <ul className="space-y-4">
               <li className="flex gap-3">
                 <Users className="h-6 w-6 text-brand-600 flex-shrink-0" />
                 <div>
                   <span className="font-bold text-slate-900">Expert-Led Sessions:</span>
                   <p className="text-sm text-slate-600">Learn directly from seasoned economists and policy practitioners.</p>
                 </div>
               </li>
               <li className="flex gap-3">
                 <Calendar className="h-6 w-6 text-brand-600 flex-shrink-0" />
                 <div>
                   <span className="font-bold text-slate-900">Interactive Learning:</span>
                   <p className="text-sm text-slate-600">Engage in discussions, case studies, and real-world problem-solving.</p>
                 </div>
               </li>
               <li className="flex gap-3">
                 <BarChart2 className="h-6 w-6 text-brand-600 flex-shrink-0" />
                 <div>
                   <span className="font-bold text-slate-900">Practical Assignments:</span>
                   <p className="text-sm text-slate-600">Weekly assessments and policy writing exercises that mirror real work.</p>
                 </div>
               </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Curriculum That Matters for Africa</h2>
            <p className="mt-4 text-slate-600">AMAP covers all aspects of macroeconomics with a specific focus on challenges and opportunities facing African economies.</p>
          </div>

          <div className="space-y-4">
            {CURRICULUM.map((module) => (
              <div key={module.id} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={openModule === module.id}
                >
                  <span className="text-lg font-bold text-slate-900 text-left">{module.title}</span>
                  {openModule === module.id ? (
                    <ChevronUp className="h-5 w-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  )}
                </button>
                {openModule === module.id && (
                  <div className="px-6 pb-6 bg-white animate-fade-in border-t border-slate-100 pt-4">
                    <p className="text-slate-600 mb-4">{module.description}</p>
                    <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wide mb-3">Key Topics:</h4>
                    <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start text-slate-700 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Skills You'll Gain</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               "Understand Macroeconomic Dynamics",
               "Analyze Economic Data",
               "Write Policy Recommendations",
               "Build Economic Models",
               "Think Critically",
               "Communicate Effectively"
             ].map((skill, idx) => (
               <div key={idx} className="flex items-start p-4 bg-brand-50 rounded-lg">
                 <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                 <span className="font-semibold text-brand-900">{skill}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Application Submission", desc: "Submit CV, cover letter, and behavioral questions via portal." },
              { title: "Initial Screening", desc: "Review for completeness and eligibility." },
              { title: "Holistic Evaluation", desc: "Assessed on academic background, critical thinking, and passion." },
              { title: "Selection & Diversity", desc: "Final selection balancing merit with diversity across regions." }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-2xl mb-6 mx-auto border-4 border-slate-800">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-24 bg-brand-700 text-white text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-brand-100 mb-8">
              Applications for our February 2025 cohort will open soon.
            </p>
            <div className="flex justify-center">
              <button className="px-10 py-4 bg-white text-brand-800 text-lg font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300">
                Join the Waitlist
              </button>
            </div>
         </div>
      </section>
    </div>
  );
};