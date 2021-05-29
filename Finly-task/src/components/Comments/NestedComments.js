import React, { useState } from 'react'

const NestedComments = ({ data,nestedData,id, setData,main_data_index ,handleReply}) => {

    const [editFlag, setEditFlag] = useState(false)
    const [isEditComment, setIsEditComment] = useState('')

    console.log(data)
    const handleEditComment = (e) => {

        console.log(e.target.value);

        setIsEditComment(e.target.value)
    }
    const handleEdit = (index, d) => {
        setData([...data.map((x, i) => {
            if (x.id == id) {
               x.nestedComments.map((y,i)=>{
                   if(i == index){
                       y.edit = true
                   }
               })
            }
            return x
        })])
        setEditFlag(true)
        setIsEditComment(d)
    }
    const handleDelete = (index, d) => {
       let arr = [...data]
        arr[main_data_index].nestedComments.splice(index,1)
        setData(arr)
    }
    const handleEditedCommentSubmit = (value) => {

        setData([...data.map((x, i) => {
            if (x.id == id) {
                x.nestedComments.map((y,i)=>{
                    if (i == value) {
                        y.comment = isEditComment
                        y.edit = false
        
                    }
                })
             }
           
            return x
        })])
        setEditFlag(false)

    }
    const handleLike = (value) =>{
        setData([...data.map((x,i)=>{
            if(x.id == id){
                x.nestedComments.map((y,i)=>{
                    if (i == value) {
                        y.like = !y.like
                    }
                })
            }
            return x
        })])
    }
    return (
        <div style={{marginLeft:"20px"}}>
            <ul>
                {

                    nestedData &&  nestedData.map((x, i) => (
                        x.edit ? (<>
                            <input type="text" value={isEditComment} placeholder="edit your comment" onChange={handleEditComment} /><button onClick={() => handleEditedCommentSubmit(i)}>Submit</button>
                        </>) : (
                            <>
                                <small>{x.uname}</small><br></br>
                                <li key={i}>{x.comment} <span onClick={() => handleEdit(i, x.comment)}>Edit</span> <span onClick={() => handleDelete(i, x.comment)}>Delete</span><span onClick={()=>handleLike(i)} style={{color:x.like ? 'green' : 'red'}}>{x.like ? "Liked" : "UnLiked"}</span><span className="reply" onClick={()=>handleReply(id,i,x.uname)}>Reply</span></li>

                            </>
                        )
                    ))
                }
            </ul>
        </div>
    )
}

export default NestedComments
