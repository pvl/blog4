import { PageLayout, SharedLayout } from "./quartz/cfg"
import { SimpleSlug } from "./quartz/util/path"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/plastic-labs/blog",
      "Discord Community": "https://discord.gg/plasticlabs",
      "plasticlabs.ai": "https://plasticlabs.ai"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if (a.file?.frontmatter?.date && b.file?.frontmatter?.date) {
          const parseDate = (dateStr: string) => {
            const [month, day, year] = dateStr.split('.')
            return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          }
          const aDate = parseDate(a.file.frontmatter.date as string)
          const bDate = parseDate(b.file.frontmatter.date as string)
          if (aDate < bDate) {
            return 1
          } else {
            return -1
          }
        }
        else if ((!a.file && !b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      }
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  // left: [],
  // beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if (a.file?.frontmatter?.date && b.file?.frontmatter?.date) {
          const parseDate = (dateStr: string) => {
            const [month, day, year] = dateStr.split('.')
            return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          }
          const aDate = parseDate(a.file.frontmatter.date as string)
          const bDate = parseDate(b.file.frontmatter.date as string)
          if (aDate < bDate) {
            return 1
          } else {
            return -1
          }
        }
        else if ((!a.file && !b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      }
    })),
  ],
  right: [],
}
