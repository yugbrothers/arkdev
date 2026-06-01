export default function TaskCard({
  task
}:{
  task:any
}){

  return(

    <div
      className="
      p-4
      rounded-xl
      bg-black/30
      border
      border-white/10
      mb-3
      "
    >

      <div className="font-bold">
        {task.title}
      </div>

      <div
        className="
        text-sm
        opacity-70
        mt-2
        "
      >
        {task.description}
      </div>

    </div>

  );

}
