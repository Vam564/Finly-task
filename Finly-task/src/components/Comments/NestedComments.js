import React, { useState } from 'react'

const NestedComments = ({ data, setData }) => {

    const [editFlag, setEditFlag] = useState(false)
    const [isEditComment, setIsEditComment] = useState('')

    console.log(data)
    const handleEditComment = (e) => {

        console.log(e.target.value);

        setIsEditComment(e.target.value)
    }
    const handleEdit = (index, d) => {
        setData([...data.map((x, i) => {
            if (i == index) {

                x.edit = true

            }
            return x
        })])
        setEditFlag(true)
        setIsEditComment(d)
    }
    const handleDelete = (index, d) => {
        let arr = [...data]
        arr.splice(index, 1);
        setData(arr)
    }
    const handleEditedComment = (value) => {

        setData([...data.map((x, i) => {
            if (i == value) {


                x.comment = isEditComment
                x.edit = false

            }
            return x
        })])
        setEditFlag(false)

    }
    const handleReply = () => {

    }
    return (
        <div style={{marginLeft:"20px"}}>
            <ul>
                {

                    data && data.map((x, i) => (
                        x.edit ? (<>
                            <input type="text" value={isEditComment} placeholder="edit your comment" onChange={handleEditComment} /><button onClick={() => handleEditedComment(i)}>Submit</button>
                        </>) : (
                            <>
                                <li key={i}>{x.comment} <span onClick={() => handleEdit(i, x.comment)}>Edit</span> <span onClick={() => handleDelete(i, x.comment)}>Delete</span><span onClick={handleReply}>Reply</span></li>

                            </>
                        )
                    ))
                }
            </ul>
        </div>
    )
}

export default NestedComments
