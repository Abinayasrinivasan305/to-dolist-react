
import './App.css';
import {useState} from "react";
import {Button,InputGroup,Toaster} from "@blueprintjs/core";

const AppToaster=Toaster.create({
  position:'top'
})
function App() {
  const [tasklist,setTasklist]=useState([])

  const [newtaskname,setNewtaskname]=useState("");



  function deletetask(taskname){
    setTasklist((tasklist)=>{
      return tasklist.filter((tasks)=> tasks.taskname!==taskname)
    })
    AppToaster.show({
      message:'Task deleted Successfully',
      intent:'success',
      timeout:3000
    })

  }

  function completetask(taskname) {
    const updatedTaskList = tasklist.map(task => {
      if (task.taskname === taskname) {
        return {
          ...task,
          completedstatus: "Completed"
        };
      }
      return task;
    });
  
    setTasklist(updatedTaskList);
    AppToaster.show(
      {
        message:'Task Completed successfully',
        intent:'success',
        timeout:3000
      })
  
  }

  function addtask(){
    const newtask={
        
         taskname:newtaskname,
         completedstatus:"Not Completed"
    }
    setTasklist([...tasklist,newtask]);
    AppToaster.show(
      {
        message:'Task added successfully',
        intent:'success',
        timeout:3000
      }
    )
    setNewtaskname("")
    
    }
  return (
    <div className="App">
      <h1> To-Do-List </h1>
      <thead>
    
        <th>TaskName</th>
        &nbsp;
        &nbsp;
        <th>Completed status</th>
        &nbsp;
        &nbsp;
        <th>Action</th>

        
      </thead>
      <tbody>
        
          {tasklist.map((tasks) => (
          <tr key={tasks.taskname}>
            
            <td>{tasks.taskname}</td>
            &nbsp;
            &nbsp;
            
            <td>{tasks.completedstatus}</td>
            &nbsp;
            &nbsp;
            <td>
            <Button intent='success' onClick={()=>completetask(tasks.taskname)}>Completed</Button>              
              &nbsp;
              <Button intent='danger' onClick={()=>deletetask(tasks.taskname)}>Delete</Button>

            </td>
        </tr>))
}
      </tbody>
      <tfoot>
        <tr>
          
          <td><InputGroup value={newtaskname} placeholder='Enter your task' onChange={(e)=>{setNewtaskname(e.target.value)}}/></td>
          &nbsp;
          &nbsp;
          <td><Button intent='primary' onClick={addtask}>Add your task</Button></td>
        </tr>
      </tfoot>

    </div>
  );
}

export default App;
