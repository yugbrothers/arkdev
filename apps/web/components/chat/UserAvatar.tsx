export default function UserAvatar({
  name
}:{
  name:string
}){

  return(

    <div
      className="
      w-10
      h-10
      rounded-full
      bg-blue-500/20
      flex
      items-center
      justify-center
      font-bold
      "
    >
      {name.charAt(0)}
    </div>

  );

}
