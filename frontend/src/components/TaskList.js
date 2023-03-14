import { useState, useEffect, Fragment } from "react";
import Task from "./Task";
import { getTasks, deleteTask, updateTask } from "../services/TaskServices";
import CreateModal from "./CreateModal";

export default function TaskList({isFetching, setIsFetching}) {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // const response = await fetch("http://localhost:5000/tasks");

            // if (!response.ok) {
            //     const message = `An error ocurred: ${response.statusText}`;
            //     window.alert(message);
            //     return;
            // }

            // const tasks = await response.json();
            // setTasks(tasks);
            const response = await getTasks();
            setTasks(response.data);
            setIsLoading(false);
        }

        fetchData();
    }, [isFetching]);

    const taskList = () => {
        return tasks.map(task => 
            <Task 
                key={task._id}
                task={task}
                deleteTask={delTask}
                editTask={editTask}
                updateCheck={updateCheckedTask}
                setIsFetching={setIsFetching}
            />
        );
    }

    const delTask = async (id) => {
        await deleteTask(id);

        const newTasks = tasks.filter(element => element._id !== id);
        setTasks(newTasks);
    }

    const editTask = (task) => {
        
        
        handleShow();
    }

    const updateCheckedTask = async (task) => {
        const newTask = task;


        await updateTask(task._id, newTask);
    }

    return (
        <Fragment>
            <div className="bg-secondary mx-5 py-3 rounded">
                {
                    isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        taskList()
                    )
                }
            </div>
            <CreateModal 
                show={showModal} 
                handleClose={handleClose}
            />
        </Fragment>
    );
}