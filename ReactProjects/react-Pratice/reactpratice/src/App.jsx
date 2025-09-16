import { useState } from 'react'


const commentsList = [
  {
    uniqueNo: 1,
    name: 'Rahul',
    commentText: 'The ending is so good!',
  },
  {
    uniqueNo: 2,
    name: 'Floyd Miles',
    commentText: 'The attention to detail in the animation is amazing!',
  },
  {
    uniqueNo: 3,
    name: 'Jacob',
    commentText: 'The storytelling is fantastic, simple yet impactful!',
  },
  {
    uniqueNo: 4,
    name: 'Devon Lane',
    commentText: 'The soundtrack perfectly complements the animation!',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    // <ul>
    //   {commentsList.map(comment,index)=>
    //    return <li>{comment.name}</li>
    //   )}
    // </ul>
  
  )
}

export default App
