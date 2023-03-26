import { useState } from "react";


const Todoform = () => {
    const [text, setText] = useState("");

    const onFormsubmit = () => {

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
            />
        </form>

    )
}

export default Todoform;