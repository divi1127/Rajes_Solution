import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, User, ArrowLeft, ArrowRight, CornerDownRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingPost, setReadingPost] = useState(null);

  useEffect(() => {
    document.title = "Technical Blog | SQL Server & ERP | Rajes Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Read our technical articles written by certified DBAs. Get tips on SQL Server query tuning, index optimization, ransomware defense, and custom ERP software.");
    }
  }, []);

  const categories = [
    'All',
    'SQL Server',
    'ERP',
    'Database Security',
    'Performance Tuning'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory || post.subCategory === selectedCategory);

  return (
    <div className="pt-24 py-12 bg-navy-50/20 dark:bg-navy-950/20">
      
      {readingPost ? (
        /* Blog Reader View */
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Back button */}
          <button
            onClick={() => setReadingPost(null)}
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-600 dark:text-navy-450 hover:text-gold-500 transition-colors mb-8 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>

          {/* Post Header */}
          <header className="mb-10 border-b border-navy-100 dark:border-navy-900 pb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gold-500 uppercase tracking-wider mb-4">
              <span className="bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">{readingPost.category}</span>
              <span className="text-navy-400">&bull;</span>
              <span>{readingPost.readTime}</span>
            </div>
            
            <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-navy-900 dark:text-white leading-tight mb-6">
              {readingPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-navy-500 dark:text-navy-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gold-500" />
                <span>{readingPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-500" />
                <span>{readingPost.date}</span>
              </div>
            </div>
          </header>

          {/* Post Body (rendered in standard clean layouts) */}
          <div className="prose prose-navy dark:prose-invert max-w-none text-navy-700 dark:text-navy-300 text-base sm:text-lg leading-relaxed space-y-6">
            {readingPost.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="font-sans font-bold text-xl sm:text-2xl text-navy-900 dark:text-white mt-8 mb-4 border-l-4 border-gold-500 pl-3">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('*')) {
                return (
                  <ul key={index} className="space-y-2 my-4 pl-6 list-disc">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="text-navy-600 dark:text-navy-300">
                        {item.replace('*', '').trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('```sql')) {
                return (
                  <pre key={index} className="p-5 bg-navy-900 text-emerald-400 font-mono text-xs sm:text-sm rounded-xl overflow-x-auto border border-navy-800 my-6 shadow-inner">
                    <code>
                      {paragraph.replace('```sql', '').replace('```', '').trim()}
                    </code>
                  </pre>
                );
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

          <div className="border-t border-navy-100 dark:border-navy-900 pt-8 mt-12">
            <button
              onClick={() => setReadingPost(null)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-white hover:bg-gold-500 hover:text-navy-950 transition-all focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles List
            </button>
          </div>
        </article>
      ) : (
        /* Blog Index View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <section className="text-center py-16">
            <h1 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">Knowledge Base</h1>
            <h2 className="font-sans font-black text-4xl sm:text-5xl text-navy-900 dark:text-white mb-6">
              Technical Insights &amp; Articles
            </h2>
            <p className="text-navy-600 dark:text-navy-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Optimization strategies, security audits, and systems architecture tutorials compiled by our certified engineers.
            </p>
          </section>

          {/* Category Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gold-500 text-navy-950 border-gold-500 shadow-md shadow-gold-500/10'
                    : 'bg-white dark:bg-navy-900 border-navy-200 dark:border-navy-800 text-navy-700 dark:text-navy-300 hover:border-gold-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <div 
                key={post.slug} 
                className="glass-card hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-navy-100/40 dark:border-navy-850"
              >
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-500 uppercase tracking-wider mb-4">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{post.category}</span>
                    <span className="text-navy-300 dark:text-navy-800">|</span>
                    <span className="text-navy-450">{post.readTime}</span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-navy-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 bg-navy-100/20 dark:bg-navy-900/30 border-t border-navy-100/30 dark:border-navy-800/30 rounded-b-2xl">
                  <button
                    onClick={() => setReadingPost(post)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-500 hover:text-gold-400 group/link transition-colors focus:outline-none cursor-pointer"
                  >
                    Read full article 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
