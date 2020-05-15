import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TaskListController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            taskName: '',
            dueDate: '',
            tasks: []
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeText(event) {
        this.setState({ taskName: event.target.value});
    }

    handleChangeDate(event) {
        this.setState({ dueDate: event.target.value});
    }

    handleAddValue(event) {
        var taskName = this.state.taskName;
        if (taskName.length === 0) {
            alert('Task name cannot be empty.');
            return;
        }

        if (this.state.dueDate === '') {
            alert('Due date cannot be null.');
            return;
        }

        var tasks = this.state.tasks.slice();
        tasks.push({
            id: this.state.tasks.length + 1,
            value: taskName, 
            isDone: false, 
            dueDate: this.state.dueDate});
        this.setState({
            tasks: tasks,
            taskName: ''
        });
    }

    render() {
        return (
            <div>
                <AddTaskForm 
                    handleChangeText={this.handleChangeText} 
                    handleAddValue={this.handleAddValue} 
                    handleChangeDate={this.handleChangeDate}
                    taskName={this.state.taskName} 
                    dueDate={this.state.dueDate}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

function AddTaskForm(props) {
    return (
        <div className="form">
            <div>
                <label className="formLabel">Task name: </label>
                <input 
                    type="text" 
                    onChange={props.handleChangeText} 
                    value={props.taskName}/>
            </div>
            <div>
                <label className="formLabel">Due date: </label>
                <input 
                    type="date" 
                    onChange={props.handleChangeDate}/>
            </div>
            <div>
            <button 
                className="addTaskButton" 
                onClick={props.handleAddValue}>
                    Add task
                </button>
            </div>
        </div>
        
    );
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.state = { tasks: props.tasks};
    }

    handleChangeCheckbox(task, e) {
        this.setState({isChange:true});
        this.props.tasks.find(x => x.id === task.id).isDone = e.target.checked;
    }

    render() {
        let tasks = this.props.tasks;
        tasks.sort(compare);
            
        const listItems = tasks.map((task) => 
            <TaskItem 
                key={task.id} 
                task={task} 
                handleChangeCheckbox={(e) => this.handleChangeCheckbox(task, e)}
            />
        );
        return (
            <div>
                <div className="container header">
                    <label className="cbx">IsDone</label>
                    <label className="taskName">Task name</label>
                    <label className="date">Due date</label>
                </div>
                {listItems}
            </div>
        );
    }
}

function TaskItem(props) {
        const task = props.task;
        const dueDate = task.dueDate.toString();
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
                    onChange={props.handleChangeCheckbox}/>
                <label className={textStyle}>{task.value}</label>
                <label className={dateStyle}>{dueDate}</label>
            </div>
        );
}

function compare(a, b) {
    const aDate = new Date(a.dueDate);
    const bDate = new Date(b.dueDate);
    if (a.isDone && !b.isDone) {
        return 1;
    }
    if (!a.isDone && b.isDone) {
        return - 1;
    }
    if (aDate > bDate) {
        return 1;
    }
    if (aDate < bDate) {
        return -1;
    }
    return 0;
}





ReactDOM.render(<TaskListController />, document.getElementById('root'));