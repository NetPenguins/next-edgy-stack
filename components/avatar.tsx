import Image from 'next/image'
import { format } from 'path'

export default function Avatar({ author, date, readTime }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return (
    <div className="flex items-center text-center justify-center">
      <div className="w-9 h-9 relative mr-4">
        <Image
          src={author.node.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl text-gray-500">
        <a href={`/author/${author.node.slug}`}>
          <b>{name}</b>
        </a>, {formattedDate} • {readTime} min read</div>
    </div>
  )
}
