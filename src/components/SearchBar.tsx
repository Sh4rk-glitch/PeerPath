import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentQuery = searchParams.get('search') || '';
  const [localValue, setLocalValue] = useState(currentQuery);

  // Sync state if URL param updates externally
  useEffect(() => {
    setLocalValue(currentQuery);
  }, [currentQuery]);

  const handleSearchChange = (val: string) => {
    setLocalValue(val);
    
    // If user is not on the catalog directory tab view, seamlessly redirect them there
    if (location.pathname !== '/lessons') {
      navigate(`/lessons?category=all&subcategory=all-ap&search=${encodeURIComponent(val)}`);
    } else {
      // Otherwise, update existing tracking parameters dynamically
      const currentCat = searchParams.get('category') || 'all';
      const currentSub = searchParams.get('subcategory') || 'all-ap';
      setSearchParams({ category: currentCat, subcategory: currentSub, search: val });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }}>
        🔍
      </span>
      <input
        type="text"
        placeholder="Search lessons, formulas..."
        value={localValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        style={{
          width: '100%',
          background: '#0d111a',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '0.8rem 1rem 0.8rem 2.8rem',
          color: '#fff',
          fontSize: '0.95rem',
          outline: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#58a6ff';
          e.target.style.boxShadow = '0 0 0 3px rgba(88,166,255,0.15), 0 4px 20px rgba(0,0,0,0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#30363d';
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
      />
    </div>
  );
}