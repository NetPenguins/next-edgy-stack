import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import PostListImage from './post-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  seo,
  tags,
  index
}) {

  return (
      <div className={`flex flex-col max-w-xlg mb-10`}>
        <div className="mb-5">
          {coverImage && (
            <PostListImage title={title} coverImage={coverImage} slug={slug}/>
          )}
        </div>
        <h3 className="text-2xl mb-3 leading-snug">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div
          className="text-md mb-4 text-gray-500"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="text-slate-700">
          <p className="text-md font-semibold">
          <Date dateString={date} /> {`· ${seo?.readingTime && `${seo.readingTime} min read`} · ${tags?.edges && `${tags?.edges[0].node.name}`}`}
          </p>
        </div>
      </div>
    )
}
