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
  const path = '/privacy-policy'
  const title = 'Privacy Policy - NBA The Run'
  const description =
    'Privacy Policy for NBA The Run fan guide. Learn what data we collect, how analytics are used, and how to contact us.'

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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg mb-2">How we handle analytics and visitor data</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. What We Collect</h2>
            <p>
              NBA The Run is an unofficial fan-made guide site. We only collect limited technical data needed to run and
              improve the website.
            </p>
            <ul>
              <li>Basic device/browser information</li>
              <li>Page views and anonymized traffic analytics</li>
              <li>Language preference stored locally in your browser</li>
            </ul>

            <h2>2. How We Use Data</h2>
            <ul>
              <li>Maintain website availability and performance</li>
              <li>Understand which pages are useful to visitors</li>
              <li>Improve navigation and content quality</li>
              <li>Investigate and resolve technical errors</li>
            </ul>

            <h2>3. Third-Party Services</h2>
            <p>
              We may use analytics and hosting services to operate the site. These providers process technical telemetry
              under their own privacy policies.
            </p>

            <h2>4. External Links</h2>
            <p>
              This site links to third-party websites including Steam, the official NBA THE RUN site, Discord, and social
              platforms. We are not responsible for third-party privacy practices.
            </p>

            <h2>5. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you believe a child has
              provided personal data, contact us and we will remove it where possible.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We apply reasonable safeguards, but no internet service can guarantee absolute security.
            </p>

            <h2>7. Policy Updates</h2>
            <p>
              We may update this policy over time. The “Last Updated” date reflects the most recent revision.
            </p>

            <h2>8. Contact</h2>
            <p>
              Privacy questions can be sent to{' '}
              <a href="mailto:privacy@nbatherun.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                privacy@nbatherun.wiki
              </a>
              .
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              This is an unofficial fan resource. NBA THE RUN, NBA, and related marks are property of their respective
              owners.
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
