import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/action";


const Todoform = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormsubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');

    }

    const onInputchange = (e) => {
        setText(e.target.value);

    }

    return (
        <form className="form" onSubmit={onFormsubmit}>
            <input
                placeholder="Enter New Todo...."
                className="input"
                onChange={onInputchange} 
                value={text}
            />
        </form>

    )
}

export default Todoform;