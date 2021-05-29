import React ,{useState, useEffect}from 'react'
import DisplayComment from './DisplayComment';

import axios from 'axios'
const Comment = () => {
    const [data, setData] = useState([])
    const [comment, setComment] = useState('')
    const [count,setCount] = useState(0)
    const [collapse, setCollapse] = useState(false)


    useEffect(() => {
        axios.get('https://jsonblob.com/api/fd64c808-c07c-11eb-a8c9-2f0c8cbd33b6').then((response) => {
          console.log(response.data.Comments)
          setData(response.data.Comments)
        })
    }, [])


    const handleComment = (e) =>{
      
        console.log(e.target.value);
       setComment(e.target.value)
    }
    const handleSubmit = () =>{
        setCount(count+1)
        setData([...data, {"comment" : comment,"edit":false}])
    }
    

    return (
        <div style={{paddingLeft:'50px', maxWidth:'75rem', margin:'0 auto'}}>
            <h1>Leave a comment</h1>
            <div class="d-flex" style={{padding:'50px 0'}}>
                <input type="text"  placeholder="enter comment" onChange={handleComment} />
                <button onClick={()=>handleSubmit()}>Submit Comment</button>
            </div>
            <button onClick={()=>setCollapse(!collapse)}>{collapse ? ("Collapse All Comments"): "Expand All Comments"}</button>
           { collapse && <DisplayComment data={data} setData={setData} ></DisplayComment>}
        </div>
        
    )
}

export default Comment

