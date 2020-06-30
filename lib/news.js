import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

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
  return allNews.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getAllNewsId = () => {
  const filenames = fs.readdirSync(newsDirectory)
  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, "")
      }
    }
  })
}

export const getNewsData = async id => {
  // get fullpath of markdown matching the id
  const fullPath = path.join(newsDirectory, `${id}.md`)

  // parse it to string
  const markdown = fs.readFileSync(fullPath, "utf8")

  // parse it again using gray-matter
  const parsedMarkdown = matter(markdown)

  // parse to html using remark
  const parsedHtml = await remark().use(html).process(parsedMarkdown.content)
  const htmlString = parsedHtml.toString()

  // combine the data with the id
  return {
    id,
    htmlString,
    ...parsedMarkdown.data
  }
}
