
export default function ToDo() {
  return (
    <div className="flex-col items-center w-full h-full p-5 px-10 text-center">
      <h1 className="text-2xl pb-2">To Do</h1>
      <div>
        {/* <TodoItem text='running'/> */}
      </div>
      {/* <button onClick={AddTodo} className="bg-gray-300 font-bold text-xl w-10 rounded-b-full hover:bg-gray-500 active:bg-black">
        +
      </button> */}
    </div>
  );
}

// const TodoItem = ({text} : {text: string}) => {
//   return(
//     <div className="flex gap-5 border w-full p-1 px-3">
//       <input type="text" className="w-full">{text}</input>
//       <input type="checkbox" className=""/>
//     </div>
//   )
// }

// function AddTodo() {
  
// }
