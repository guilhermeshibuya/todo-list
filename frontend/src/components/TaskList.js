import { useState, useEffect, Fragment } from "react";
import { getTasks, deleteTask } from "../services/TaskServices";
import Task from "./Task";

export default function TaskList({isFetching, setIsFetching, filter}) {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await getTasks();
            setTasks(response.data);
            setIsLoading(false);
        }

        fetchData();
    }, [isFetching, filter]);

    const taskList = () => {
        const filteredTasks = tasks.filter(task => {
            if (filter === "incomplete") {
                return !task.done;
            } else if (filter === "completed") {
                return task.done;
            } else {
                return task;
            }
        });
        return filteredTasks.map( task =>
            <Task 
                key={task._id}
                task={task}
                deleteTask={delTask}
                setIsFetching={setIsFetching}
            />
        );
    }

    const delTask = async (id) => {
        await deleteTask(id);

        const newTasks = tasks.filter(element => element._id !== id);
        setTasks(newTasks);
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
        </Fragment>
    );
}