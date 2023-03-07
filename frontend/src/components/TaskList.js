import { useState, useEffect, Fragment } from "react";
import Task from "./Task";
import {
    getTasks
} from "../services/TaskServices"

export default function TaskList({isFetching}) {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            />
        );
    }

    return (
        <Fragment>
            <div className="bg-danger">
                {
                    isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        taskList()
                    )
                }
            </div>
        </Fragment>
    )
}