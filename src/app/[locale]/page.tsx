import { getLatestArticles } from '@/lib/getLatestArticles'
import { buildModuleLinkMap } from '@/lib/buildModuleLinkMap'
import type { Language } from '@/lib/content'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import type { Locale } from '@/i18n/routing'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

const homeVideo = {
  videoId: 'DvgJugUaKWQ',
  title: 'NBA THE RUN | Official Gameplay Trailer',
  youtubeUrl: 'https://www.youtube.com/watch?v=DvgJugUaKWQ',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nbatherun.wiki'
  const heroImageUrl = new URL('/images/hero.webp', siteUrl).toString()
  const title = 'NBA THE RUN - Release Date, Roster & Gameplay Guide'
  const description =
    'NBA THE RUN guide covering release date, Steam beta, roster, 3v3 gameplay, platforms, system requirements, trailers, news, and beginner tips.'
  const url = locale === 'en' ? siteUrl : `${siteUrl}/${locale}`

  return {
    title,
    description,
    alternates: buildLanguageAlternates('/', locale as Locale, siteUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: 'NBA The Run',
      images: [
        {
          url: heroImageUrl,
          width: 1920,
          height: 1080,
          alt: 'NBA THE RUN - Official Hero Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImageUrl],
      creator: '@NBATHERUN',
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)
  const moduleLinkMap = await buildModuleLinkMap(locale as Language)

  return (
    <HomePageClient
      latestArticles={latestArticles}
      moduleLinkMap={moduleLinkMap}
      locale={locale}
      videoFeature={homeVideo}
    />
  )
}
