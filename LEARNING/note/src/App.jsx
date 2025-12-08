import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(" ");
  const [detail, setDetail] = useState(" ");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask= [...task]               //this is set to store old task which are submitted before
    copyTask.push({title,detail})
    setTask(copyTask)
    console.log(copyTask);
    
    setTitle("");
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1)

    setTask(copyTask )
  }
// in the returning div we can also add bg as img by this code bg-[url(''img address)]
  return (
    <>
      <div className="h-screen lg:flex text-white bg-black h-screen w-full">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col justify-between text-white p-10"
        >
          <div className="flex flex-col p-10 gap-4">
            <input
              type="text"
              placeholder="Enter the heading"
              className="font-medium p-5 border-2 border-amber-500 rounded-2xl"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />

            <br></br>

            <textarea
              className="font-medium p-5 h-60 border-2 border-amber-300 rounded-2xl"
              name=""
              placeholder="Describe your heading"
              value={detail}
              onChange={(e)=>{
                setDetail(e.target.value)
              }}
            ></textarea>
            <button className="bg-white active:bg-gray-500 active:scale-95 text-5xl text-black py-10 m-10 mt-20 border-6 border-gray-600 rounded-b-md">
              Add Notes
            </button>
          </div>
        </form>

        <div className="lg:w-1/2 lg:border-l-2 border-white p-10">
          <h1 className="text-4xl font-bold text-white">Recent Notes</h1>
          <div className="flex flex-wrap items-start justify-items-start gap-5 mt-5 h-full overflow-auto">
            {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col text-black p-4 h-62 w-50 bg-white rounded-2xl ">
                <div>
                <h3 className="leading-tight text-2xl font-bold">{elem.title}</h3> 
                <p className="m-2 leading-tight font-medium text-xl text-black ">{elem.detail}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                } } className="bg-red-500 text-white font-bold rounded-xl active:scale-95 text-xl py-1">DELETE</button>
              </div>
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
