export default function PostTitle({ children }) {
  return (
    <h1
      className="
        text-6xl 
        font-sans
        md:text-5xl 
        lg:text-6xl 
        font-bold 
        tracking-tighter 
        leading-tight 
        md:leading-none 
        mb-12 
        text-center 
        md:text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
