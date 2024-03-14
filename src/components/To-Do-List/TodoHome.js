import React from 'react'
import './ToDoList.css'
import Form from './Form';
import Header from './Header'
import TodoList from './TodoList';
function TodoHome() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null)

    const handleClearAll = () => {
        setTasks([]);
    }
    return (
        <div>
            <div className='app'>
                <Header />
                <div className='form'>
                    <Form
                        input={input}
                        setInput={setInput}
                        tasks={tasks}
                        setTasks={setTasks}
                        editTask={editTask}
                        setEditTask={setEditTask}
                    />
                </div>
                <div>
                    <button className='btn-clr-all' onClick={handleClearAll}>Clear All</button>
                </div>
                <div>
                    <TodoList tasks={tasks} setTasks={setTasks} setEditTask={setEditTask} />
                </div>
            </div>
        </div>
    )
}

export default TodoHome
