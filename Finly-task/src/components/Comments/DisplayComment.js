import React,{useState}from 'react'
import NestedComments from './NestedComments'

const DisplayComment = ({data,setData}) => {
    
    const [editFlag,setEditFlag] = useState(false)
    const [isEditComment, setIsEditComment] = useState('')
    const [like, setLike] = useState(false)

console.log(data)
const handleEditComment = (e) =>{
      
    console.log(e.target.value);
  
    setIsEditComment(e.target.value)
}
const handleEdit = (index,d) =>{
    setData([...data.map((x,i)=>{
        if(i == index){
            x.edit = true
        }
        return x
    })])
    setEditFlag(true)
    setIsEditComment(d)
}
const handleDelete = (index,d) =>{
    let arr = [...data]
    arr.splice(index,1);
    setData(arr)
}
const handleEditedComment = (value) =>{
    
    setData([...data.map((x,i)=>{
        if(i == value){
            x.comment = isEditComment
            x.edit = false
        }
        return x
    })])
    setEditFlag(false)
    
}

const handleReply = (index, value) =>{
    setData([...data.map((x,i)=>{
        if(i == index){
           x.like = !x.like
        }
        return x
    })])
}
    return (
        <div className="">
            <ul>
            {
                
                data.map((x,i) => (
                    x.edit ? (<>
                        <input type="text" value={isEditComment} placeholder="edit your comment" onChange={handleEditComment}/><button onClick={()=>handleEditedComment(i)}>Submit</button>
                    </>) : (
                        <>
                            <li key={i}>{ x.comment} <span class="edit" onClick={()=>handleEdit(i,x.comment)} >Edit</span> <span class= "delete" onClick={()=>handleDelete(i,x.comment)}>Delete</span><span class="like" onClick={()=>handleReply(i,x.comment)}>{x.like ? "Liked" : "Unliked"}</span></li>  
                             <NestedComments data={x.nestedComments} setData={setData} ></NestedComments>
                             <hr></hr>
                        </>
                    )
                ))
            }
            </ul>
        </div>
    )
}

export default DisplayComment
