import React, { useState, useMemo } from 'react';
import { ALL_POSTS } from '../constants';
import { Search, Filter } from 'lucide-react';

export const Insights: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => {
      const matchesFilter = filter === 'All' || post.category === filter;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                            post.summary.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const categories = ['All', 'Policy Brief', 'Economic Analysis'];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
       <div className="bg-white border-b border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">African Economic Insights</h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Data-driven perspectives from our scholars and experts on the pressing issues facing the continent.
            </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
               <Filter className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                     filter === cat 
                     ? 'bg-brand-800 text-white' 
                     : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            
            <div className="relative w-full md:w-72">
               <input 
                 type="text" 
                 placeholder="Search insights..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
               />
               <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-800 text-xs font-bold rounded-full shadow-sm">
                         {post.category}
                       </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{post.title}</h2>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-center text-xs text-slate-500">
                       <span className="font-medium text-slate-700">{post.author}</span>
                       <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-slate-900">No articles found</h3>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
       </div>
    </div>
  );
};