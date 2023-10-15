import React from 'react'
import {getDatabase,ref,set} from "firebase/database"
import { app } from './component/Firebase'


const db = getDatabase(app)

const Test = () => {
const putData= ()=>{
  set(ref(db,"user/chetan"),{
    id:1,
    name:"chetan",
    age:20,
  })
}

  return (
    <div>
      <h3>this is test react </h3>
      <button onClick={putData}>data</button>
    </div>
  )
}

export default Test
