import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./App.css"
export default function App() {
const [Todo,setTodo] =useState([])
const [items,setItems] =useState([])
const [editMode,setEditMode]=useState(false)
const [edit,setEdit]=useState(false)
const itemEvent=(event)=>{
  setTodo(event.target.value)
}
const listItems=()=>{
  setItems((prev)=>{
    return[...prev,Todo]
  });
  setTodo("")
}
const deleteTodo=(index)=>{
  // console.log("value",value)
  //let  newItems=[...items]
  console.log('index',index)
  let  newItems  = items.filter(item=>{
    if (item===index) return false 
    return true
  })
 //  newItems.splice(index,1)
  console.log(" newItems", newItems)
  //setTodo( newItems)
  setItems( newItems)
}
const updateData=()=>{
  let task=[...Todo]
  Todo[edit]=items
  setItems(task)
  setTodo("")
  setEdit(false)
}
const editData=(value,index)=>{
console.log(value,"value")
setItems(value)
setEditMode(true)
}
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div className='header'>
        <h1 >Todo-List</h1>
        </div>
        <div>
          <input onChange={itemEvent} value={Todo} type='text' placeholder='Enter a Todo'/>
          {editMode ? (
            <button onClick={updateData}>Update</button>
          ) :
            <button onClick={listItems} className='button-add' type='submit'>Add</button>
          }
            <br/> 
          <div className='list'>
          <ol>
              {items.map((value)=>{
                return <div key={value}>
                <li>{value}</li>    
                <button onClick={()=>deleteTodo(value)
                }>
                {<DeleteIcon/>}</button>
                <button className='button-edit' onClick={() => editData(value)}>{<EditIcon/>}</button>
                </div>                   
                })
              }
          </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

  