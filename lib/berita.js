import fs from "fs"
import path from "path"
import matter from "gray-matter"

const newsDirectory = path.join(process.cwd(), "berita")

export const getSortedNews = () => {
  // get directories name from /berita
  const filenames = fs.readdirSync(newsDirectory)

  // loop through all news and process it
  const allNews = filenames.map(filename => {
    // use directory name as an ID
    const id = filename.replace(/\.md$/, "")

    // read markdown as string
    const fullPath = path.join(newsDirectory, filename)
    const markdown = fs.readFileSync(fullPath, "utf8")

    // parse markdown using gray-matter
    const parsedMarkdown = matter(markdown)

    // return id and parsed markdown
    return {
      id,
      ...parsedMarkdown.data
    }
  })

  // sort by news date
  // return allNews
  return allNews.sort((a, b) => (a.date < b.date ? 1 : -1))
}
