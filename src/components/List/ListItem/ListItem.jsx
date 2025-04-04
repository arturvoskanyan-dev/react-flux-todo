import React, {useState} from 'react'
import {MdEdit, FaRegTrashCan, IoCheckbox} from "../../index"

export default function ListItem({ id, text, completed, dispatch, isEdit}) {
    const [newText, setNewText] = useState(text);

    const edit = () => {
        dispatch({ type: "edit", payload: { id, newText, isEdit } })
    }

    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                value={completed}
                onChange={() => dispatch({type : "check", payload : id})}
                className="cursor-pointer"
            />
            {
                !isEdit
                    ? <span
                        onDoubleClick={() => dispatch({type : "edit", payload : {id, newText, isEdit}})}
                        className={`flex-1 ${completed ? "text-gray-500 line-through" : "text-white"} font-bold truncate`}>
                        {newText}
                    </span>
                    : <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className='p-2 flex-1 bg-transparent text-white rounded-2xl truncate shadow-input'
                    />
            }
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                {
                    !isEdit
                    ? <MdEdit onClick={edit} />
                    : <IoCheckbox onClick={edit} />
                }
                <FaRegTrashCan onClick={() => dispatch({type : "remove", payload : id})} />
            </div>
        </li>
    )
}
