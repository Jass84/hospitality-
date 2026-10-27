import { useMemo, useState } from 'react';

const collections = [
  {
    id: 'lobby',
    label: 'Lobby',
    title: 'Arrival Statements',
    tone: 'Bold welcome',
    size: 'Large format',
    notes: 'Command the first impression with grounded color, architectural shapes, and elegant contrast.',
    palette: 'Stone, amber, charcoal',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'guest-room',
    label: 'Guest Room',
    title: 'Quiet Retreats',
    tone: 'Soft pause',
    size: 'Medium format',
    notes: 'Use calm compositions that add depth without competing with textiles, lighting, or views.',
    palette: 'Oat, clay, linen',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    title: 'Evening Energy',
    tone: 'Layered warmth',
    size: 'Wide format',
    notes: 'Pick pieces that feel lively after dark and support a longer dwell time at the table.',
    palette: 'Wine, copper, espresso',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wellness',
    label: 'Wellness',
    title: 'Restorative Flow',
    tone: 'Breathing room',
    size: 'Soft format',
    notes: 'Favor open space, subtle movement, and low-contrast palettes that support relaxation.',
    palette: 'Moss, mist, bone',
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'co-work',
    label: 'Co-working',
    title: 'Focused Momentum',
    tone: 'Clean geometry',
    size: 'Series-ready',
    notes: 'Keep the look crisp and repeatable for flexible layouts, breakout zones, and meeting corridors.',
    palette: 'Ink, sand, eucalyptus',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'suite',
    label: 'Suite',
    title: 'Private Luxury',
    tone: 'Tailored calm',
    size: 'Statement pair',
    notes: 'Select quieter work with just enough detail to feel curated, intimate, and premium.',
    palette: 'Ivory, bronze, smoke',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];

const filters = [
  { id: 'all', label: 'All spaces' },
  ...collections.map((item) => ({ id: item.id, label: item.label }))
];

const themeSets = [
  ['#5b4638', '#35645f', '#a15c3c'],
  ['#744f3f', '#5a766c', '#b07b4d'],
  ['#2f3d40', '#8a5b3f', '#6f7f62']
];

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [saved, setSaved] = useState([]);
  const [theme, setTheme] = useState(themeSets[0]);
  const [heroImage, setHeroImage] = useState(collections[0].image);

  const visibleCollections = useMemo(
    () => (activeFilter === 'all' ? collections : collections.filter((item) => item.id === activeFilter)),
    [activeFilter]
  );

  const savedCount = saved.length;

  const toggleSaved = (id) => {
    setSaved((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const shuffleTheme = () => {
    const nextTheme = themeSets[Math.floor(Math.random() * themeSets.length)];
    const nextHero = collections[Math.floor(Math.random() * collections.length)].image;
    setTheme(nextTheme);
    setHeroImage(nextHero);
  };

  return (
    <div
      className="app-shell"
      style={{
        '--accent': theme[0],
        '--accent-2': theme[1],
        '--accent-3': theme[2]
      }}
    >
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <div>
          <p className="eyebrow">Hospitality trade selection</p>
          <h1>Curated art directions for premium guest experiences.</h1>
        </div>
        <a className="button button-ghost" href="#collections">
          Explore collections
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">For hotels, restaurants, lounges, and wellness spaces</p>
            <h2>Professional artwork selection that feels tailored to the property.</h2>
            <p className="lede">
              Browse a polished hospitality concept board with clear palettes, scale guidance, and
              room-specific recommendations. Save the strongest pieces and turn them into a concise
              client-ready shortlist.
            </p>
            <div className="hero-actions">
              <a className="button" href="#gallery">
                View gallery
              </a>
              <button className="button button-secondary" type="button" onClick={shuffleTheme}>
                Refresh mood
              </button>
            </div>
            <div className="hero-stats">
              <article>
                <strong>120+</strong>
                <span>hospitality-ready configurations</span>
              </article>
              <article>
                <strong>8 min</strong>
                <span>to build a presentation shortlist</span>
              </article>
              <article>
                <strong>6 spaces</strong>
                <span>lobby, suite, dining, wellness, and more</span>
              </article>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="hero-visual" style={{ '--hero-image': `url(${heroImage})` }}>
              <div className="hero-visual-overlay">
                <p className="eyebrow">Featured setting</p>
                <h3>Visual direction for premium guest spaces</h3>
                <span>
                  Rotate the mood to surface a new image and keep the presentation feeling current.
                </span>
              </div>
            </div>
            <div className="panel-card panel-card-primary">
              <p>Presentation focus</p>
              <h3>Lobby presence, suite calm, and restaurant warmth.</h3>
              <span>
                Balance bold first impressions with quieter supporting pieces for the rest of the
                property.
              </span>
            </div>
            <div className="panel-card panel-card-secondary">
              <p>Material direction</p>
              <h3>Stone, brass, walnut, and linen tones.</h3>
              <span>
                Keep the palette grounded so the artwork reads as part of the architecture.
              </span>
            </div>
          </aside>
        </section>

        <section className="controls reveal" aria-labelledby="gallery-title">
          <div>
            <p className="eyebrow">Curate by space</p>
            <h2 id="gallery-title">Choose a room type and narrow the selection.</h2>
          </div>
          <div className="filter-group" role="tablist" aria-label="Filter hospitality spaces">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${filter.id === activeFilter ? 'is-active' : ''}`}
                type="button"
                aria-pressed={filter.id === activeFilter}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="gallery-grid" id="gallery" aria-live="polite">
          {visibleCollections.map((space) => {
            const isSaved = saved.includes(space.id);

            return (
              <article className="gallery-card" key={space.id}>
                <div className="card-media">
                  <img src={space.image} alt={`${space.label} hospitality inspiration`} loading="lazy" />
                </div>
                <div className="card-top">
                  <div>
                    <p className="eyebrow">{space.label}</p>
                    <h3 className="card-title">{space.title}</h3>
                  </div>
                  <span className="card-pill">{space.tone}</span>
                </div>
                <div className="card-body">
                  <p className="card-copy">{space.notes}</p>
                  <div className="card-meta">
                    <div>
                      <strong>Palette</strong>
                      <span>{space.palette}</span>
                    </div>
                    <div>
                      <strong>Scale</strong>
                      <span>{space.size}</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <span>{space.tone} for {space.label.toLowerCase()} settings</span>
                  <button
                    className={`card-action ${isSaved ? 'is-saved' : ''}`}
                    type="button"
                    aria-pressed={isSaved}
                    onClick={() => toggleSaved(space.id)}
                  >
                    {isSaved ? '♥' : '♡'}
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        <section className="story-grid reveal" id="collections">
          <article>
            <p className="eyebrow">How it works</p>
            <h2>Make the selection process feel editorial and professional.</h2>
            <p>
              Start with the guest journey, then use the filters to create a tailored set for arrival,
              dining, circulation, and recovery spaces.
            </p>
          </article>
          <div className="story-steps">
            <div className="story-step">
              <span>01</span>
              <div>
                <h3>Choose the space</h3>
                <p>Filter by lobby, guest room, restaurant, wellness, or co-working intent.</p>
              </div>
            </div>
            <div className="story-step">
              <span>02</span>
              <div>
                <h3>Save the right pieces</h3>
                <p>Use the shortlist to keep the presentation focused and easy to review.</p>
              </div>
            </div>
            <div className="story-step">
              <span>03</span>
              <div>
                <h3>Present with context</h3>
                <p>Use the notes, palette, and size guidance to speed up approvals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-strip reveal">
          <blockquote>
            “The strongest hospitality artwork does not just fill a wall. It clarifies the mood of the stay.”
          </blockquote>
          <p>Built for designers, procurement teams, and hospitality buyers.</p>
        </section>

        <section className="cta-grid reveal">
          <div>
            <p className="eyebrow">Ready to shortlist</p>
            <h2>Turn a broad search into a polished concept in a few clicks.</h2>
          </div>
          <div className="cta-card">
            <p>Saved selections</p>
            <strong>{savedCount}</strong>
            <span>pieces ready for your next presentation</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;