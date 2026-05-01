import { Link } from '@/i18n/navigation'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nbatherun.wiki'
  const path = '/about'
  const title = 'About - NBA The Run'
  const description =
    'About NBA The Run fan guide: our mission, editorial approach, and contact information.'

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'NBA The Run',
      title,
      description,
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'NBA THE RUN',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About NBA THE RUN Wiki</h1>
          <p className="text-slate-300 text-lg mb-2">An unofficial fan-made guide for players</p>
          <p className="text-slate-400 text-sm">Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              NBA THE RUN Wiki exists to help players quickly find accurate, readable information about release updates,
              game modes, roster highlights, and core gameplay systems.
            </p>

            <h2>What We Cover</h2>
            <ul>
              <li>Release timing, platform availability, and major announcements</li>
              <li>3v3 systems, knockout flow, and gameplay fundamentals</li>
              <li>Official links for Steam, community channels, and trailers</li>
              <li>Beginner-friendly summaries for new players</li>
            </ul>

            <h2>Editorial Approach</h2>
            <p>
              We prioritize official sources and clearly separate confirmed information from community speculation. Pages
              are updated as new announcements become available.
            </p>

            <h2>Unofficial Status</h2>
            <p>
              This website is not affiliated with Play by Play Studios, the NBA, or the NBPA. All trademarks and game
              assets remain the property of their respective owners.
            </p>

            <h2>Contact</h2>
            <p>
              For corrections, feedback, or collaboration inquiries, email{' '}
              <a href="mailto:contact@nbatherun.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                contact@nbatherun.wiki
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
