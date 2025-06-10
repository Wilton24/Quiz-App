export default function Button({children, ...props}){

  let className ="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-r-md border border-gray-600 transition duration-150 cursor-pointer";

  if(props.className){
    className = props.className;
  }

  return (
    <button {...props}
      className={className ? className : "bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-r-md border border-gray-600 transition duration-150 cursor-pointer"}>{children}
    </button>
  )
}