import { Fragment, useState } from "react";
import PageHeader from "../components/PageHeader";
import PageNavbar from "../components/PageNavbar";
import TaskList from "../components/TaskList";

export default function TasksScreen () {
    const [isFetching, setIsFetching] = useState(false);
    return (
        <Fragment>
            <PageNavbar />
            <PageHeader 
                setIsFetching={setIsFetching}
            />
            <TaskList 
                isFetching={isFetching}
                setIsFetching={setIsFetching}
            />
        </Fragment>
    );
}