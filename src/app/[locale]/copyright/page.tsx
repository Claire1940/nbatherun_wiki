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
  const path = '/copyright'
  const title = 'Copyright Notice - NBA The Run'
  const description =
    'Copyright and attribution policy for NBA The Run fan guide content, including DMCA contact information.'

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

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Copyright Notice</h1>
          <p className="text-slate-300 text-lg mb-2">Ownership, attribution, and fair-use statement</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Site Content Ownership</h2>
            <p>
              © 2026 NBA THE RUN Wiki. Original editorial content on this website is protected by copyright.
            </p>

            <h2>2. Game Trademarks and Assets</h2>
            <p>
              NBA THE RUN, NBA, NBPA, and related names, logos, and media are property of their respective owners. This
              site is unofficial and uses references for commentary and informational purposes.
            </p>

            <h2>3. Fair Use</h2>
            <p>
              Any third-party images, names, or quotes are used in a limited, transformative, non-commercial context to
              help players understand game systems and updates.
            </p>

            <h2>4. Reuse Policy</h2>
            <ul>
              <li>You may share links to our pages freely.</li>
              <li>Short quotations are allowed with clear attribution.</li>
              <li>Full-copy reposting for commercial use is not permitted without written consent.</li>
            </ul>

            <h2>5. DMCA and Claims</h2>
            <p>
              If you believe content on this site infringes your rights, send a detailed notice to:
            </p>
            <p>
              <strong>DMCA:</strong>{' '}
              <a href="mailto:dmca@nbatherun.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                dmca@nbatherun.wiki
              </a>
              <br />
              <strong>General Copyright:</strong>{' '}
              <a href="mailto:copyright@nbatherun.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                copyright@nbatherun.wiki
              </a>
            </p>

            <h2>6. Response Timeline</h2>
            <p>
              We review legitimate notices as quickly as possible, typically within 7 business days.
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
