import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import HomePage from '@/components/home-page/HomePage'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import IntroPage from '@/components/intro'
const HomePagePreview = dynamic(
  () => import('@/components/home-page/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return (
      <><HomePagePreview
        initial={initial}
        params={{
          slug: '/',
        }} /><IntroPage /></>
    )
  }

  return <HomePage data={initial.data} />
}
