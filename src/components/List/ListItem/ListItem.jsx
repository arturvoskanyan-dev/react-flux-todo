import React from 'react'
import {MdEdit, FaRegTrashCan, IoCheckbox} from "../../index"

export default function ListItem({ id, text}) {

    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                className="cursor-pointer"
            />
            <span className="flex-1 text-white font-bold truncate">{text}</span>
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                <MdEdit />
                <FaRegTrashCan onClick={() => remove(id)} />
            </div>
        </li>
    )
}
