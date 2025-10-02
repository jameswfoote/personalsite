'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    { title: "The Iliad", author: "Homer", cover: "https://pictures.abebooks.com/isbn/9780140275360-us-300.jpg", review: "The greatest war story ever told. Homer's treatment of honor, rage, and mortality established themes that still dominate Western literature." },
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
    { title: "Hackers & Painters", author: "Paul Graham", cover: "https://pictures.abebooks.com/isbn/9781449389550-us.jpg", review: "Graham's essays on programming and startups shaped a generation of entrepreneurs. His insights on wealth creation and technical elegance remain influential." },
    { title: "Zero to One", author: "Peter Thiel", cover: "https://pictures.abebooks.com/isbn/9780753555194-us.jpg", review: "Thiel's contrarian guide to building the future. His framework for thinking about competition and monopoly changed how startups approach markets." },
    { title: "The Fountainhead", author: "Ayn Rand", cover: "https://pictures.abebooks.com/isbn/9780452273337-us.jpg", review: "Rand's manifesto on individualism and integrity through the story of architect Howard Roark. A polarizing exploration of creative independence versus collective conformity." },
    { title: "The Singularity Is Nearer", author: "Ray Kurzweil", cover: "/covers/thesingularityisnearer.jpg", review: "Kurzweil's updated vision of the technological singularity. His predictions about the merger of human and artificial intelligence feel increasingly inevitable as AI capabilities explode." },
    { title: "Surely You're Joking, Mr. Feynman!", author: "Richard Feynman", cover: "https://upload.wikimedia.org/wikipedia/en/d/d2/SurelyYoureJokingMrFeynman.PNG", review: "Feynman's adventures showcase the playful curiosity that made him great. His approach to problem-solving transcends physics." },
    { title: "Meditations", author: "Marcus Aurelius", cover: "https://pictures.abebooks.com/isbn/9780812968255-us.jpg", review: "Marcus Aurelius' private thoughts on Stoic philosophy. Remarkable that a Roman emperor's diary remains the most practical guide to virtue." },
    { title: "The Psychology of Achievement", author: "Brian Tracy", cover: "/covers/psychologyofachievment.jpg", review: "Tracy's comprehensive guide to personal success and goal achievement. A practical framework for developing the mindset and habits that lead to extraordinary results." },
    { title: "Flow: The Psychology of Optimal Experience", author: "Mihaly Csikszentmihalyi", cover: "https://pictures.abebooks.com/isbn/9780061339202-us.jpg", review: "Csikszentmihalyi's groundbreaking research on happiness and peak performance. Essential reading for understanding how to achieve deep focus and fulfillment in work and life." },
    { title: "The King James Bible", author: "Various", cover: "https://pictures.abebooks.com/isbn/9780141441511-us.jpg", review: "The most influential book in English literature and Western civilization. Its language shaped Shakespeare, Milton, and countless others - a literary and spiritual cornerstone regardless of faith." },
    { title: "The Immortalist", author: "Alan Harrington", cover: "/covers/immortalistcover.jpeg", review: "Harrington's prescient 1969 manifesto declaring death an imposition to be overcome. A philosophical foundation for the modern longevity movement that anticipated transhumanism by decades." },
    { title: "The Science of Being Great", author: "Wallace D. Wattles", cover: "/covers/howtobeagenius.jpg", review: "Wattles' practical philosophy on achieving greatness through right thinking and action. A forgotten classic that predates and influences modern self-development literature with its focus on mental science and personal power." },
    { title: "Titan", author: "Ron Chernow", cover: "https://pictures.abebooks.com/isbn/9781400077304-us.jpg", review: "Chernow's masterful biography of John D. Rockefeller Sr. reveals the contradictions of America's most controversial tycoon - ruthless monopolist and pioneering philanthropist who reshaped modern capitalism." },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl" style={{ minHeight: '100vh', padding: '40px 30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: '#000000' }}>My Bookshelf</h1>
            <div className="text-sm sm:text-base" style={{ display: 'flex', gap: '15px' }}>
              <Link href="/" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Home</Link>
              <Link href="/publications" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Publications</Link>
              <Link href="/bookshelf" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>My Bookshelf</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveBook(index)}
              onMouseLeave={() => setActiveBook(null)}
            >
              <div className="aspect-[2/3] bg-gray-100 rounded shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-contain bg-gray-50"
                  loading="lazy"
                />
                {activeBook === index && (
                  <div className="absolute inset-0 bg-white/95 flex flex-col justify-center transition-opacity duration-300" style={{ padding: '15px' }}>
                    <h3 className="text-xs mb-1" style={{ color: '#000000', fontStyle: 'italic' }}>
                      {book.title}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: '#000000', fontSize: '10px' }}>
                      {book.author}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#000000', fontSize: '10px' }}>
                      {book.review}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}