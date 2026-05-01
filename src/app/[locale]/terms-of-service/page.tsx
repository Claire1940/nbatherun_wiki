import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nbatherun.wiki'
  const path = '/terms-of-service'
  const title = 'Terms of Service - NBA The Run'
  const description =
    'Terms of Service for the NBA The Run fan guide website, including acceptable use, content disclaimer, and contact information.'

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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg mb-2">Rules and conditions for using this fan guide website</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to these Terms of Service. If you do not agree, please do not use
              the website.
            </p>

            <h2>2. Service Description</h2>
            <p>
              NBA The Run is an unofficial fan-made guide site that publishes gameplay information, news summaries, and
              reference content related to NBA THE RUN.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not attempt unauthorized access to site systems.</li>
              <li>Do not scrape or copy large portions of content for commercial reuse.</li>
              <li>Do not submit malicious code, spam, or abusive content.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Original text and site design belong to this fan guide. NBA THE RUN and related trademarks belong to their
              respective rights holders.
            </p>

            <h2>5. No Warranty</h2>
            <p>
              Content is provided “as is” for informational purposes. We do not guarantee completeness, accuracy, or
              uninterrupted availability.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for losses resulting from the use of this
              website or third-party links.
            </p>

            <h2>7. External Links</h2>
            <p>
              Links to Steam, Discord, YouTube, X, and official game pages are provided for convenience. We do not
              control third-party services.
            </p>

            <h2>8. Changes</h2>
            <p>
              We may update these terms at any time. Continued use of the website after updates means you accept the
              revised terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              Legal questions can be sent to{' '}
              <a href="mailto:legal@nbatherun.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                legal@nbatherun.wiki
              </a>
              .
            </p>

            <h2>10. Unofficial Status</h2>
            <p>
              This website is an independent fan project and is not affiliated with Play by Play Studios, the NBA, or
              the NBPA.
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
