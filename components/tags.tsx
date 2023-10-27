// export default function Tags({ tags }) {
//   return (
//     <div className="max-w-2xl mx-auto">
//       <p className="mt-8 text-lg font-bold">
//         Tagged
//         {tags.edges.map((tag, index) => (
//           <span key={index} className="ml-4 font-normal">
//             {tag.node.name}
//           </span>
//         ))}
//       </p>
//     </div>
//   )
// }

export default function Tags({ tags }) {
  console.log(tags.edges)
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg">
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal inline-flex items-center px-3 py-0.5 rounded-full text-sm font-thin border border-khaki text-khaki hover:bg-khaki hover:text-black">
            {tag?.node?.name}
          </span>
        ))}
      </p>
    </div>
  )
}