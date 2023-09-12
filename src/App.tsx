import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

interface User{
  id:number,
  name:string
}
function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error,setError]= useState('')

useEffect(()=>{
  axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res)=>setUsers(res.data))
  .catch((err)=>setError(err.message))
},[])
  return (
    <>
      {error &&<p className="text-danger">{error}</p>}
      <ul>
        {users.map((user)=><li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default App
