import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: 'program' | 'event' | 'page';
}

const SmartSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // All searchable content
  const searchableContent: SearchResult[] = [
    // Programs
    { title: 'Youth Leadership Program', description: 'Nurturing the boundless potential of our youth', path: '/youth-leadership', category: 'program' },
    { title: 'New Breed Women of Substance', description: 'Empowering women to become strong, self-driven individuals', path: '/new-breed-women-of-substance', category: 'program' },
    { title: 'Capital G-Girls', description: 'Mentorship and training program for young girls', path: '/capital-g-girls', category: 'program' },
    { title: 'Heart-Wise Seniors', description: 'Creating a secure and inclusive haven for seniors', path: '/heart-wise-seniors', category: 'program' },
    { title: 'Children Summer Camp', description: 'Affordable and enchanting summer camp for children', path: '/children-summer-camp', category: 'program' },
    { title: 'Sankofa Royale Awards', description: 'Celebrating the black community across various sectors', path: '/sankofa-royale-awards', category: 'program' },
    { title: 'Food Bank', description: 'Access to nutritious food for our community', path: '/food-bank', category: 'program' },
    { title: 'Women Empowerment', description: 'Equipping women with skills and confidence', path: '/women-empowerment', category: 'program' },
    { title: 'JavaScript Program', description: 'Bridging the diversity gap in tech sector', path: '/javascript-program', category: 'program' },
    { title: 'Financial Literacy', description: 'Guiding path to financial well-being', path: '/financial-literacy', category: 'program' },
    { title: 'Cultural Events', description: 'Celebrating culture and diversity', path: '/cultural-events', category: 'program' },
    { title: 'Mental Health', description: 'Eradicating stigma surrounding mental illnesses', path: '/mental-health', category: 'program' },
    { title: 'Newcomers Settlement Program', description: 'Supporting newcomers in their new journey', path: '/newcomers-settlement-program', category: 'program' },
    { title: 'Project and Evaluation', description: 'Bringing impactful projects to life', path: '/project-and-evaluation', category: 'program' },
    
    // Pages
    { title: 'About CAWAP', description: 'Learn about our mission and vision', path: '/about', category: 'page' },
    { title: 'Contact Us', description: 'Get in touch with our team', path: '/contact', category: 'page' },
    { title: 'Donate', description: 'Support our programs and initiatives', path: '/donate', category: 'page' },
    { title: 'Gallery', description: 'View photos from our events and programs', path: '/gallery', category: 'page' },
    { title: 'All Programs', description: 'Browse all our programs', path: '/programs', category: 'page' },
    
    // Events
    { title: 'Upcoming Events', description: 'See what\'s coming up', path: '/upcoming-events', category: 'event' },
    { title: 'Past Events', description: 'View our event history', path: '/past-events', category: 'event' },
    { title: 'Christmas Event', description: 'Annual Christmas celebration', path: '/christmas-event', category: 'event' }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cawap_recent_searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle keyboard shortcuts (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = searchableContent.filter(item => 
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery)
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('cawap_recent_searches', JSON.stringify(updated));

    // Navigate
    navigate(result.path);
    setIsOpen(false);
    setQuery('');
  };

  // Handle recent search click
  const handleRecentClick = (search: string) => {
    setQuery(search);
    inputRef.current?.focus();
  };

  // Clear recent searches
  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('cawap_recent_searches');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'program': return 'ri-folder-line';
      case 'event': return 'ri-calendar-event-line';
      case 'page': return 'ri-file-text-line';
      default: return 'ri-file-line';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'program': return 'text-[#3c1053]';
      case 'event': return 'text-[#c9b037]';
      case 'page': return 'text-gray-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white transition-all duration-300 cursor-pointer group shadow-md border border-gray-200"
        aria-label="Search"
      >
        <i className="ri-search-line text-lg text-[#3c1053]"></i>
        <span className="hidden md:inline text-sm text-gray-800 font-medium">Search</span>
        <span className="hidden lg:inline text-xs text-gray-600 ml-2 px-2 py-0.5 rounded bg-gray-100">
          Ctrl+K
        </span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Search Container */}
          <div 
            ref={searchRef}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
              <i className="ri-search-line text-2xl text-gray-400"></i>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search programs, events, resources..."
                className="flex-1 text-lg outline-none text-gray-800 placeholder-gray-400"
                autoComplete="off"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-400"></i>
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query === '' && recentSearches.length > 0 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase">Recent Searches</h3>
                    <button
                      onClick={clearRecent}
                      className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentClick(search)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-left"
                      >
                        <i className="ri-history-line text-gray-400"></i>
                        <span className="text-sm text-gray-700">{search}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query !== '' && results.length === 0 && (
                <div className="p-12 text-center">
                  <i className="ri-search-line text-5xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">No results found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-2">Try different keywords</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-2">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className={`w-full flex items-start gap-4 px-4 py-3 rounded-lg transition-all cursor-pointer text-left ${
                        index === selectedIndex
                          ? 'bg-[#3c1053]/5 border-l-4 border-[#3c1053]'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${getCategoryColor(result.category)}`}>
                        <i className={`${getCategoryIcon(result.category)} text-xl`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-1">{result.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{result.description}</p>
                        <span className="inline-block mt-1 text-xs text-gray-400 capitalize">
                          {result.category}
                        </span>
                      </div>
                      {index === selectedIndex && (
                        <i className="ri-corner-down-left-line text-gray-400 flex-shrink-0"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-300">↑</kbd>
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-300">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-300">Enter</kbd>
                  Select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white rounded border border-gray-300">Esc</kbd>
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartSearch;
