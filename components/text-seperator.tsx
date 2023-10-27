export default function TextSeperator({text}) {
    return(
      <div className="flex items-center font-thin text-gray-500 pt-28">
        <div className="text-lg font-thinner mr-2">{text}</div>
        <div className="flex-1 h-px bg-gray-500"></div>
      </div>
    )
  }
  