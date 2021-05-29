import React,{useState}from 'react'
import NestedComments from './NestedComments'

const DisplayComment = ({data,setData}) => {
    
    const [editFlag,setEditFlag] = useState(false)
    const [isEditComment, setIsEditComment] = useState('')
    const [like, setLike] = useState(false)
    const [isReply, setIsReply] = useState('')
    const [replyComment, setReplyComment ] = useState('')
    const [userName,setUserName] =useState('')

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

const handleLike = (index, value) =>{
    setData([...data.map((x,i)=>{
        if(i == index){
           x.like = !x.like
        }
        return x
    })])
}
const handleReplyInput = (e) =>{
    setReplyComment(e.target.value)
}
const handleReplyInputSubmit = (id,index) =>{
    let new_id = Date.now();
    setData([...data.map((x,i)=>{
        if(x.id == id){

           x.nestedComments = [...x.nestedComments, {
            "id": new_id,
            "uname": "user"+new_id+" @"+userName,
            "comment": replyComment,
            "edit": false,
            "like": false
          }]
        }
        return x
    })])
    setIsReply('')
}
const handleReply = (id,index,userName) =>{
    setUserName(userName)
    setIsReply(id)
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
                            <small>{x.uname}</small><br></br>
                            <li key={i}>{ x.comment} <span class="edit" onClick={()=>handleEdit(i,x.comment)} >Edit</span> <span class= "delete" onClick={()=>handleDelete(i,x.comment)}>Delete</span><span class="like" onClick={()=>handleLike(i,x.comment)}>{x.like ? "Liked" : "Unliked"}</span><span className="reply" onClick={()=>handleReply(x.id,i,x.uname)}>Reply</span></li>  
                             <NestedComments data={data} nestedData={x.nestedComments} setData={setData} id={x.id} main_data_index={i} handleReply={handleReply}></NestedComments>
                             {
                                isReply == x.id && (<>
                                    <input type="text" value={replyComment} placeholder="Enter Reply" onChange={handleReplyInput}/><button onClick={()=>handleReplyInputSubmit(x.id,i)}>Submit</button>
                                </>)
                             }
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
