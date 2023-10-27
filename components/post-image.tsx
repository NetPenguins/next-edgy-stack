import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
}

export default function PostListImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={1000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      // className={cn('shadow-small', {
      //   'hover:shadow-medium transition-shadow duration-200': slug,
      // })}
      className={' max-h-56 max-w-full m-0 mx-auto object-cover'}
    />
  )
  return (
    <div className="m-0 mx-auto">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
