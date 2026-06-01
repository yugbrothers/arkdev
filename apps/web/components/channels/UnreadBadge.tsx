export default function UnreadBadge(){

  const count =
    Math.floor(
      Math.random()*9
    );

  if(count===0)
    return null;

  return(

    <div
      className="
      ml-auto
      px-2
      py-1
      text-xs
      rounded-full
      bg-red-500
      text-white
      "
    >
      {count}
    </div>

  );

}
