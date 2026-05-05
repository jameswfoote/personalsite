'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Bookshelf() {
  const [activeBook, setActiveBook] = useState<number | null>(null);

  const books = [
    { title: "Simulacra and Simulation", author: "Jean Baudrillard", cover: "https://pictures.abebooks.com/isbn/9780472065219-us.jpg", review: "Baudrillard's prophetic vision of hyperreality feels more relevant than ever. His analysis of how symbols have replaced reality predicted our current digital age with uncanny accuracy." },
    { title: "Co-Intelligence", author: "Ethan Mollick", cover: "https://pictures.abebooks.com/isbn/9780593716717-us.jpg", review: "Mollick's essential guide to living and working with AI. A practical framework for understanding how to collaborate with artificial intelligence as a creative partner." },
    { title: "The Odyssey", author: "Homer", cover: "https://pictures.abebooks.com/isbn/9780140268867-us.jpg", review: "The archetypal hero's journey. Homer's epic remains the blueprint for every adventure story written since, yet its psychological depth still surprises." },
    { title: "Zeroism", author: "Bryan Johnson", cover: "/covers/zeroism.jpg", review: "Johnson's manifesto for radical life extension and human optimization. A blueprint for achieving 'don't die' through rigorous self-experimentation and biological monitoring." },
    { title: "The Infinite Game", author: "Simon Sinek", cover: "https://pictures.abebooks.com/isbn/9780735213500-us.jpg", review: "Sinek's powerful framework for understanding business and life. The distinction between finite and infinite games transforms how we think about competition, collaboration, and purpose." },
    { title: "American Prometheus", author: "Kai Bird & Martin J. Sherwin", cover: "https://pictures.abebooks.com/isbn/9780375726262-us.jpg", review: "The definitive biography of J. Robert Oppenheimer. A masterful portrait of genius, moral complexity, and the birth of the atomic age that reads like a Greek tragedy." },
    { title: "Regenesis", author: "George Church & Ed Regis", cover: "https://pictures.abebooks.com/isbn/9780465075706-us.jpg", review: "Church's visionary exploration of synthetic biology's potential. A roadmap for how we can reprogram life itself to solve humanity's greatest challenges." },
    { title: "The Count of Monte Cristo", author: "Alexandre Dumas", cover: "https://pictures.abebooks.com/isbn/9780140449266-us.jpg", review: "Dumas' ultimate tale of revenge and redemption. A masterclass in plotting where every thread connects, showing how patience and education can transform suffering into triumph." },
    { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", cover: "https://pictures.abebooks.com/isbn/9780465026562-us.jpg", review: "Hofstadter's playful exploration of consciousness, recursion, and meaning. A book that teaches you how to think about thinking itself." },
    { title: "Superintelligence", author: "Nick Bostrom", cover: "https://pictures.abebooks.com/isbn/9780199678112-us.jpg", review: "Bostrom's rigorous analysis of AI existential risk. Essential reading for understanding the potential trajectories of artificial general intelligence." },
    { title: "The Origin of Species", author: "Charles Darwin", cover: "https://pictures.abebooks.com/isbn/9780140432053-us.jpg", review: "Darwin's revolutionary theory of evolution by natural selection. The foundation of modern biology that fundamentally changed how we understand life and our place in nature." },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", cover: "https://pictures.abebooks.com/isbn/9780743264747-us.jpg", review: "Isaacson's masterful biography reveals Einstein's rebellious nature and relentless curiosity. A portrait of genius that shows how his scientific breakthroughs emerged from his personal struggles and philosophical questions." },
    { title: "For the New Intellectual", author: "Ayn Rand", cover: "https://pictures.abebooks.com/isbn/9780451163080-us-300.jpg", review: "Rand's philosophical manifesto calling on a new class of rational thinkers to reclaim reason from mysticism and brute force. A provocative distillation of her Objectivist ethics and the role of the mind in human progress." },
    { title: "The Wisdom of Life", author: "Arthur Schopenhauer", cover: "https://pictures.abebooks.com/isbn/9780486435503-us.jpg", review: "Schopenhauer's practical philosophy for living well. A pessimist's guide to happiness that paradoxically offers profound insights on contentment, health, and the art of living." },
    { title: "How to Be Free", author: "Epicurus", cover: "https://pictures.abebooks.com/isbn/9780691177717-us.jpg", review: "Ancient wisdom on achieving happiness through simple pleasures and freedom from anxiety. Epicurus shows that true freedom comes from understanding what we actually need versus what we merely desire." },
    { title: "Skunk Works", author: "Ben Rich", cover: "https://pictures.abebooks.com/isbn/9780316743006-us.jpg", review: "Inside look at Lockheed's secret aerospace projects. Rich's account shows how small teams with autonomy can achieve the impossible." },
    { title: "Atlas Shrugged", author: "Ayn Rand", cover: "https://pictures.abebooks.com/isbn/9780452286368-us.jpg", review: "Rand's controversial magnum opus. While philosophically polarizing, its influence on libertarian thought and Silicon Valley culture is undeniable." },
    { title: "Steve Jobs", author: "Walter Isaacson", cover: "https://pictures.abebooks.com/isbn/9781451648539-us.jpg", review: "Isaacson's definitive biography captures Jobs' complexity. The intersection of technology and liberal arts has never been embodied more fully." },
    { title: "Lifespan", author: "David Sinclair", cover: "https://pictures.abebooks.com/isbn/9781501191978-us.jpg", review: "Sinclair's groundbreaking research on why we age and why we don't have to. A compelling vision of a future where aging is a treatable disease, backed by cutting-edge science." },
    { title: "Stoner", author: "John Williams", cover: "https://pictures.abebooks.com/isbn/9781590171998-us.jpg", review: "Williams' quiet masterpiece about an unremarkable life made profound. A devastating portrait of stoic endurance and the small tragedies that define most lives." },
    { title: "I Saw Satan Fall Like Lightning", author: "René Girard", cover: "https://pictures.abebooks.com/isbn/9781570753190-us.jpg", review: "Girard's profound exploration of mimetic theory and scapegoating mechanisms. A revolutionary understanding of violence, religion, and the foundations of human culture." },
    { title: "The Extended Phenotype", author: "Richard Dawkins", cover: "https://pictures.abebooks.com/isbn/9780192880512-us.jpg", review: "Dawkins' revolutionary expansion of evolutionary theory beyond the body. Argues that genes influence extends to beaver dams, bird nests, and parasite manipulation - a paradigm shift in understanding evolution." },
    { title: "Little Black Stretchy Pants", author: "Chip Wilson", cover: "/covers/lululemon.png", review: "The founder's inside story of building Lululemon from a single Vancouver studio to a global phenomenon. Wilson's candid account of entrepreneurship, culture-building, and the business of lifestyle brands." },
    { title: "Nature", author: "Ralph Waldo Emerson", cover: "https://pictures.abebooks.com/isbn/9780142437629-us.jpg", review: "Emerson's transcendental masterwork on humanity's relationship with the natural world. A foundational text of American philosophy that reveals nature as both teacher and path to spiritual enlightenment." },
    { title: "Zero to One", author: "Peter Thiel", cover: "https://pictures.abebooks.com/isbn/9780753555194-us.jpg", review: "Thiel's contrarian guide to building the future. His framework for thinking about competition and monopoly changed how startups approach markets." },
    { title: "The Fountainhead", author: "Ayn Rand", cover: "https://pictures.abebooks.com/isbn/9780452273337-us.jpg", review: "Rand's manifesto on individualism and integrity through the story of architect Howard Roark. A polarizing exploration of creative independence versus collective conformity." },
    { title: "The Singularity Is Nearer", author: "Ray Kurzweil", cover: "/covers/thesingularityisnearer.jpg", review: "Kurzweil's updated vision of the technological singularity. His predictions about the merger of human and artificial intelligence feel increasingly inevitable as AI capabilities explode." },
    { title: "Surely You're Joking, Mr. Feynman!", author: "Richard Feynman", cover: "https://upload.wikimedia.org/wikipedia/en/d/d2/SurelyYoureJokingMrFeynman.PNG", review: "Feynman's adventures showcase the playful curiosity that made him great. His approach to problem-solving transcends physics." },
    { title: "Meditations", author: "Marcus Aurelius", cover: "https://pictures.abebooks.com/isbn/9780812968255-us.jpg", review: "Marcus Aurelius' private thoughts on Stoic philosophy. Remarkable that a Roman emperor's diary remains the most practical guide to virtue." },
    { title: "The Psychology of Achievement", author: "Brian Tracy", cover: "/covers/psychologyofachievment.jpg", review: "Tracy's comprehensive guide to personal success and goal achievement. A practical framework for developing the mindset and habits that lead to extraordinary results." },
    { title: "Flow: The Psychology of Optimal Experience", author: "Mihaly Csikszentmihalyi", cover: "https://pictures.abebooks.com/isbn/9780061339202-us.jpg", review: "Csikszentmihalyi's groundbreaking research on happiness and peak performance. Essential reading for understanding how to achieve deep focus and fulfillment in work and life." },
    { title: "In the Company of Heroes", author: "Michael J. Durant", cover: "/covers/9780451210609.jpeg", review: "Durant's gripping firsthand account of the Battle of Mogadishu and his capture after the Black Hawk Down incident. A raw, powerful story of courage, survival, and the brotherhood of soldiers in combat." },
    { title: "The Immortalist", author: "Alan Harrington", cover: "/covers/immortalistcover.jpeg", review: "Harrington's prescient 1969 manifesto declaring death an imposition to be overcome. A philosophical foundation for the modern longevity movement that anticipated transhumanism by decades." },
    { title: "The Science of Being Great", author: "Wallace D. Wattles", cover: "/covers/howtobeagenius.jpg", review: "Wattles' practical philosophy on achieving greatness through right thinking and action. A forgotten classic that predates and influences modern self-development literature with its focus on mental science and personal power." },
    { title: "Titan", author: "Ron Chernow", cover: "https://pictures.abebooks.com/isbn/9781400077304-us.jpg", review: "Chernow's masterful biography of John D. Rockefeller Sr. reveals the contradictions of America's most controversial tycoon - ruthless monopolist and pioneering philanthropist who reshaped modern capitalism." },
    { title: "The Double Helix", author: "James D. Watson", cover: "https://pictures.abebooks.com/isbn/9780743216302-us.jpg", review: "Watson's controversial first-hand account of discovering DNA's structure. A rare glimpse into the competitive, messy reality of scientific breakthroughs - showing that even world-changing discoveries emerge from ambition, luck, and human drama." },
    { title: "Deep Work", author: "Cal Newport", cover: "https://pictures.abebooks.com/isbn/9781455586691-us.jpg", review: "Newport's manifesto on the power of focused concentration in an age of distraction. Essential reading for anyone seeking to produce meaningful work in a world designed to fragment attention." },
    { title: "A Crack in Creation", author: "Jennifer Doudna", cover: "https://pictures.abebooks.com/isbn/9780544716940-us.jpg", review: "Doudna's insider account of discovering CRISPR gene editing. A Nobel laureate's perspective on the power and responsibility of rewriting the code of life itself." },
    { title: "Xenosystems", author: "Nick Land", cover: "https://pictures.abebooks.com/isbn/9781959403333-us.jpg", review: "Land's radical collection of blog posts exploring accelerationism, techno-capital, and the future of intelligence. Dense, provocative writing that treats capitalism as an inhuman evolutionary force reshaping reality itself." },
    { title: "Anthem", author: "Ayn Rand", cover: "https://pictures.abebooks.com/isbn/9780451191137-us.jpg", review: "Rand's dystopian novella about the rediscovery of individualism. A powerful meditation on the importance of the self in a collectivist world, condensing her philosophy into a brief, haunting fable." },
    { title: "Isaac Newton", author: "James Gleick", cover: "https://pictures.abebooks.com/isbn/9781400032952-us.jpg", review: "Gleick's elegant and concise biography of Isaac Newton. A masterful distillation of the complex, obsessive genius behind the scientific revolution - a man as consumed by alchemy and theology as by physics and mathematics." },
    { title: "The Big Picture", author: "Sean Carroll", cover: "https://pictures.abebooks.com/isbn/9780525954828-us.jpg", review: "Carroll's ambitious synthesis of physics, philosophy, and meaning. A poetic naturalist's guide to understanding reality from quantum fields to consciousness, arguing that we can find purpose in a universe without teleology." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 15px 0' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>James Foote</Link>
          </h1>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Home</Link>
            <Link href="/publications" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Publications</Link>
            <Link href="/bookshelf" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', borderBottom: '2px solid #000', paddingBottom: '2px' }}>My Bookshelf</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '40px', textAlign: 'center' }}>My Bookshelf</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
          {books.map((book, index) => (
            <div
              key={index}
              style={{ position: 'relative', cursor: 'pointer' }}
              onMouseEnter={() => setActiveBook(index)}
              onMouseLeave={() => setActiveBook(null)}
            >
              <div style={{ aspectRatio: '2/3', backgroundColor: '#f5f5f5', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                {activeBook === index && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(255,255,255,0.97)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '12px',
                    fontSize: '11px',
                    lineHeight: '1.4'
                  }}>
                    <h3 style={{ fontWeight: '600', marginBottom: '4px', fontStyle: 'italic' }}>
                      {book.title}
                    </h3>
                    <p style={{ marginBottom: '8px', color: '#666', fontSize: '10px' }}>
                      {book.author}
                    </p>
                    <p style={{ fontSize: '9px', color: '#333' }}>
                      {book.review}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ffffff', color: '#000', marginTop: '80px', padding: '40px 0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>Vancouver, British Columbia</p>
            <p style={{ fontSize: '14px', color: '#999' }}>
              <a href="mailto:jameswfoote@gmail.com" style={{ color: '#999', textDecoration: 'none' }}>jameswfoote@gmail.com</a>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '14px' }}>
            <a href="https://github.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>GitHub</a>
            <a href="https://linkedin.com/in/jamesfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://twitter.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}