import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { curriculumData as calcABData } from '../data/calcABData';
import { curriculumData as calcBCData } from '../data/calcBCData'; 
import gsap from 'gsap';
import styles from './LessonsTab.module.css';

export default function LessonsTab() {
  const [courses, setCourses] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [isReady, setIsReady] = useState(false);

  const activeCat = searchParams.get('category') || 'all';
  const apSubCat = searchParams.get('subcategory') || 'all-ap';
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('classes')
        .select('*, lesson_categories(category_name)');
      if (data) {
        setCourses(data);
        setIsReady(true);
      }
    }
    load();
  }, []);

  // Sync up live text search input elements globally across DOM frames
  useEffect(() => {
    const globalSearchInput = document.querySelector('input[placeholder*="Search lessons"]') as HTMLInputElement;
    if (globalSearchInput) {
      globalSearchInput.value = searchQuery;
      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setSearchParams({ category: activeCat, subcategory: apSubCat, search: target.value });
      };
      globalSearchInput.addEventListener('input', handleInput);
      return () => globalSearchInput.removeEventListener('input', handleInput);
    }
  }, [searchQuery, activeCat, apSubCat, setSearchParams]);

  useLayoutEffect(() => {
    if (!isReady) return;

    const cards = gridRef.current?.querySelectorAll(`.${styles.courseCard}`);
    
    if (cards && cards.length > 0) {
      const tl = gsap.timeline();

      tl.set(cards, { opacity: 0, y: 30 });

      tl.to(cards, { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        stagger: 0.05, 
        ease: "power2.out",
        clearProps: "transform"
      });

      return () => {
        tl.kill();
      };
    }
  }, [isReady, activeCat, apSubCat, searchQuery]); 

  const getSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

  const updateFilters = (cat: string, sub: string) => {
    setSearchParams({ category: cat, subcategory: sub, search: searchQuery });
  };

  // STRICT MATRIX DATA FILTER ENGINE
  const filtered = courses.filter(c => {
    const catName = c.lesson_categories?.category_name || '';
    
    if (searchQuery && !c.class_title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    if (activeCat === 'ap') {
      if (!c.is_ap) return false;
      if (apSubCat === 'all-ap') return true;
      if (apSubCat === 'math') return catName === 'Math & Computer Science';
      if (apSubCat === 'science') return catName === 'Sciences';
      if (apSubCat === 'history') return catName === 'History & Social Sciences';
      if (apSubCat === 'english') return catName === 'English';
      return true;
    }
    
    if (c.is_ap) return false;
    if (activeCat === 'all') return true;
    return catName === activeCat;
  });

  return (
    <div className={styles.tabWorkspace}>
      <header className={styles.filterBar}>
        <button onClick={() => updateFilters('all', 'all-ap')} className={activeCat === 'all' ? styles.active : ''}>🌐 All</button>
        <button onClick={() => updateFilters('ap', 'all-ap')} className={activeCat === 'ap' ? styles.active : ''}>✦ AP Classes</button>
        <button onClick={() => updateFilters('English', 'all-ap')} className={activeCat === 'English' ? styles.active : ''}>📚 English</button>
        <button onClick={() => updateFilters('History & Social Sciences', 'all-ap')} className={activeCat === 'History & Social Sciences' ? styles.active : ''}>🌎 History</button>
        <button onClick={() => updateFilters('Math & Computer Science', 'all-ap')} className={activeCat === 'Math & Computer Science' ? styles.active : ''}>🧮 Math</button>
        <button onClick={() => updateFilters('Sciences', 'all-ap')} className={activeCat === 'Sciences' ? styles.active : ''}>🔬 Science</button>
      </header>

      {activeCat === 'ap' && (
        <div className={styles.subFilterTray}>
          {['all-ap', 'math', 'science', 'history', 'english'].map(s => (
            <button key={s} onClick={() => updateFilters('ap', s)} className={apSubCat === s ? styles.active : ''}>
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {searchQuery && (
        <div style={{ color: '#8b949e', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Showing results for search: <span style={{ color: '#58a6ff' }}>"{searchQuery}"</span>
        </div>
      )}

      <div 
        key={`${activeCat}-${apSubCat}-${searchQuery}`} 
        ref={gridRef} 
        className={styles.classesGrid}
        style={{ opacity: isReady ? 1 : 0 }}
      >
        {isReady && filtered.map(course => {
          const slug = getSlug(course.class_title);
          
          // 🌟 CONTENT AVAILABILITY CHECKER
          // Verifies if local structural curriculum data keys match this current map row item
          const hasData = slug.endsWith('ab') 
            ? (calcABData && Object.keys(calcABData).length > 0)
            : (slug.endsWith('bc') ? (calcBCData && Object.keys(calcBCData).length > 0) : false);

          return (
            <div 
              key={course.id} 
              className={`${styles.courseCard} ${!hasData ? styles.comingSoonCard : ''}`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <h3 className={styles.cardTitle}>{course.class_title}</h3>
              
              {hasData ? (
                <button 
                  type="button"
                  onClick={() => navigate(`/overview/${slug}`)} 
                  className={styles.startLink} 
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  Start Learning →
                </button>
              ) : (
                <span 
                  className={styles.comingSoonTag} 
                  style={{ 
                    color: '#8b949e', 
                    fontSize: '0.85rem', 
                    fontWeight: 500,
                    fontStyle: 'italic',
                    display: 'inline-block',
                    marginTop: 'auto'
                  }}
                >
                  ⏳ Coming Soon
                </span>
              )}
            </div>
          );
        })}
        {isReady && filtered.length === 0 && (
          <div style={{ color: '#8b949e', padding: '2rem' }}>No modules match current filter settings.</div>
        )}
      </div>
    </div>
  );
}