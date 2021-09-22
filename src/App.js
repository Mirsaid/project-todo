
import { useState,useRef } from "react"
import TodoList from "./TodoList"

const App = () =>{

const [todo, settodo] = useState([])

const inputval = useRef(null);

const onFormSubmit = (e) => {
    // `current` points to the mounted text input element
    e.preventDefault()
    let inpval = inputval.current.value;
    inputval.current.value = ""
    let arr = [...todo]
    arr.push(inpval)
    settodo(arr)
  };



    return(
        
        
        // <div className="ui container">
        //     <div className="ui form">
        //         <div className="field">
        //             <form onSubmit={onFormSubmit}>
        //                 <label>TASKS</label>
                        
        //                 <input type="text" placeholder="type here.." className="form-control"  ref={inputval} />
        //                 {/* onChange={e => settodo(e.target.value)} */}
        //             </form>
        //        </div>
        //     </div>
        //             <div style={{marginTop:"20px", width:"100px"}}>
        //     {todo.map((text,index) => <div key={`todoitem${index}`}>{text}</div>)} 
        //             </div>           
        // </div>
        
        <div className="container">
        <h1 className="text-center">TODOS</h1>
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                    <form onSubmit={onFormSubmit}>                
                        <input type="text" placeholder="type here.." className="form-control"  ref={inputval} />
                        
                     </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        {todo.map((text,index) => <div key={`todoitem${index}`}>{text}</div>)}
        </div>
        </div>
    )

}

export default App