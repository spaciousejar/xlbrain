import { loadSettings } from '@/sanity/loader/loadQuery'

export async function SiteFooter() {
  const initial = await loadSettings()

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground ">
        &copy; {new Date().getFullYear()} Xlbrain, Inc.
  <a href="" className="inline-block ml-2">GitHub</a>
  <a href="#" className="inline-block ml-2">X</a>

        </p>
      </div>
    </footer>
  )
}
