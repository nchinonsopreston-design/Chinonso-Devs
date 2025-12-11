import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { Lock, FileText, Video, Database, LogOut, Clock } from 'lucide-react';

export const Portal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => setIsAuthenticated(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-slate-100">
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-brand-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Scholar Portal</h2>
            <p className="text-slate-500 mt-2">Access resources and session recordings.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
                placeholder="scholar@amap.africa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-800 hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-400">Restricted to admitted scholars only.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://picsum.photos/seed/scholar1/100/100" alt="Profile" className="h-10 w-10 rounded-full border border-slate-300" />
            <div className="ml-3">
              <h1 className="text-lg font-bold text-slate-900">Welcome, Scholar</h1>
              <p className="text-xs text-slate-500">Cohort 2024</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-slate-600 hover:text-red-600 flex items-center"
          >
            <LogOut className="h-4 w-4 mr-1" /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Next Session Card */}
        <div className="bg-brand-900 rounded-xl p-6 text-white mb-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
           <div>
             <h2 className="text-lg font-semibold text-brand-100 uppercase tracking-wide text-xs">Next Live Session</h2>
             <p className="text-2xl font-bold mt-1">Advanced Time Series with Dr. Okonkwo</p>
             <div className="flex items-center mt-2 text-brand-200">
               <Clock className="h-4 w-4 mr-2" />
               <span>Thursday, Oct 26 • 14:00 GMT</span>
             </div>
           </div>
           <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors">
             Join Zoom Link
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resources List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Resource Library</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
              {RESOURCES.map((res) => (
                <div key={res.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-4 ${
                      res.type === 'PDF' ? 'bg-red-100 text-red-600' : 
                      res.type === 'Video' ? 'bg-blue-100 text-blue-600' : 
                      'bg-green-100 text-green-600'
                    }`}>
                      {res.type === 'PDF' && <FileText className="h-5 w-5" />}
                      {res.type === 'Video' && <Video className="h-5 w-5" />}
                      {res.type === 'Dataset' && <Database className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{res.title}</h3>
                      <p className="text-xs text-slate-500">Added: {res.date}</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-brand-600 hover:text-brand-800">Download</button>
                </div>
              ))}
              {/* Mock filler items */}
              <div className="p-4 text-center text-sm text-slate-400">
                View all 12 resources...
              </div>
            </div>
          </div>

          {/* Notices */}
          <div className="lg:col-span-1">
             <h2 className="text-xl font-bold text-slate-900 mb-4">Notices</h2>
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="block text-xs font-bold text-brand-600 mb-1">Assignment Due</span>
                    <p className="text-sm text-slate-700">Module 2 Policy Brief draft is due next Friday.</p>
                  </li>
                  <li className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="block text-xs font-bold text-brand-600 mb-1">New Mentor Added</span>
                    <p className="text-sm text-slate-700">Prof. Kojo has joined the Applied Econometrics track.</p>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};