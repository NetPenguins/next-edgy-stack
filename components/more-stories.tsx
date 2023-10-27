import PostPreview from './post-preview'

/**
 * Staggered reactive grid 
 *  row1: [wide] [slim]
 *  row2: [slim] [wide]
 *  row3: same as row 1 and so on...
 * @param param0 
 * @returns 
 */
export default function MoreStories({ posts }) {
  console.log(posts[0].node.tags.edges)
  return (
    <section>
      <div 
        className="grid grid-flow-row-dense pt-16 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-8"
      >
        {posts.map(({node}, index) => (
          <div
            key={index}
            className={`flex-1 ${
              index % 4 === 0 || index % 4 === 3 ? 'lg:col-span-4 md:col-span-3' : 'lg:col-span-3 md:col-span-3'
            }`}
          >
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
              seo={node.seo}
              tags={node.tags}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
