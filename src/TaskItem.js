import React from 'react';

class TaskItem extends React.Component {
    handleChangeCheckbox = (event) => {
        const task = this.props.task;
        task.isDone = event.target.checked;
        this.props.onChange(task);
    }

    render() { 
        const task = this.props.task;
        const dueDate = task.dueDate;
        let textStyle = "taskName";
        let dateStyle = "date";
        const today = new Date();
        if (task.isDone) {
            textStyle += " done";
            dateStyle += " done";
        } else if (new Date(dueDate) < today) {
            textStyle += " overdue";
            dateStyle += " overdue";
        }

        return (
            <div className="container">
                <input 
                    className="cbx" 
                    type="checkbox" 
                    onChange={this.handleChangeCheckbox}/>
                <label className={textStyle}>{task.taskName}</label>
                <label className={dateStyle}>{dueDate}</label>
            </div>
        );
    }
}

export default TaskItem;