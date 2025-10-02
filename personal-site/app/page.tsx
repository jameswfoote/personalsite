'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CollapsibleSection } from './components/CollapsibleSection';

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['about']));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl" style={{ minHeight: '100vh', padding: '40px 30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: '#000000' }}>James W. Foote</h1>
            <div className="text-sm sm:text-base" style={{ display: 'flex', gap: '15px' }}>
              <Link href="/" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Home</Link>
              <Link href="/publications" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Publications</Link>
              <Link href="/bookshelf" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>My Bookshelf</Link>
            </div>
          </div>
          <p className="text-sm sm:text-base" style={{ color: '#000000' }}>
            Computer Science Student at the University of British Columbia. I&apos;m a Canadian-American scientist, entrepreneur, and philosopher who builds companies at the intersection of AI and human biology.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <CollapsibleSection
            title="About"
            isExpanded={expandedSections.has('about')}
            onToggle={() => toggleSection('about')}
          >
            <div className="space-y-3 px-0 sm:px-5 text-sm sm:text-base" style={{ color: '#000000' }}>
              <p>
                I&apos;m a Computer Science student at the University of British Columbia, passionate about software development,
                artificial intelligence, and building innovative solutions to real-world problems.
              </p>
              <p>
                Currently focused on machine learning, distributed systems, and full-stack web development.
                I enjoy exploring the intersection of technology and creativity, building projects that make a meaningful impact.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring Vancouver&apos;s beautiful trails, reading about emerging technologies,
                or contributing to open-source projects.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Projects"
            isExpanded={expandedSections.has('projects')}
            onToggle={() => toggleSection('projects')}
          >
            <div className="space-y-3 px-0 sm:px-5 text-sm sm:text-base" style={{ color: '#000000' }}>
              <p>
                <span className="font-semibold">AI Research Assistant</span> - A machine learning-powered tool that helps
                researchers analyze and summarize academic papers using natural language processing.
              </p>
              <p>
                <span className="font-semibold">Campus Connect</span> - A web application that connects UBC students
                for study groups, project collaborations, and campus events.
              </p>
              <p>
                <span className="font-semibold">EcoTrack</span> - A mobile app that gamifies sustainable living by
                tracking carbon footprint and providing personalized recommendations.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Interests"
            isExpanded={expandedSections.has('interests')}
            onToggle={() => toggleSection('interests')}
          >
            <div className="space-y-3 px-0 sm:px-5 text-sm sm:text-base" style={{ color: '#000000' }}>
              <p>
                <span className="font-semibold">Technology:</span> Machine Learning, Cloud Computing, Blockchain,
                Quantum Computing
              </p>
              <p>
                <span className="font-semibold">Academic:</span> Algorithms, Computer Vision, Natural Language Processing,
                Human-Computer Interaction
              </p>
              <p>
                <span className="font-semibold">Personal:</span> Hiking, Photography, Chess, Science Fiction Literature,
                Sustainable Technology
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Contact"
            isExpanded={expandedSections.has('contact')}
            onToggle={() => toggleSection('contact')}
          >
            <div className="space-y-3 px-0 sm:px-5 text-sm sm:text-base" style={{ color: '#000000' }}>
              <p>Academic: jfoote01@student.ubc.ca</p>
              <p>Personal: jameswfoote@gmail.com</p>
              <p>Work: james@meeds.com</p>
            </div>
          </CollapsibleSection>

          <div className="pt-16 pb-10">
            <p className="text-sm sm:text-base" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jamesfoote"
              >
                GitHub
              </a>
              <a
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/jamesfoote"
              >
                LinkedIn
              </a>
              <a
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/jamesfoote"
              >
                Twitter
              </a>
              <a
                style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}
                href="/bookshelf"
              >
                My Bookshelf
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}