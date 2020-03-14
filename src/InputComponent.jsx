import React from 'react'

const InputComponent = () => {
    return (
        <div className="row">
            <div className="form-group col-9">
                <input type="text" placeholder="Add Tast" className="form-control" />
            </div>
            <div className="form-group col-3">
                <button className="btn btn-info"> + Add Task</button>
            </div>
        </div>
    )
}

export default InputComponent;