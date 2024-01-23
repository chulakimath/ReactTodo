import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../contexts/';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();
    const myref=useRef();

    const add= (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false });
        setTodo('');
    }
    useEffect(()=>{
        myref.current.focus();
    },[])

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 focus:bg-slate-900"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                ref={myref}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm
