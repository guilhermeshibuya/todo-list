import { Fragment, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import PageNavbar from "../components/PageNavbar";
import TaskList from "../components/TaskList";

export default function TasksScreen () {
    const [isFetching, setIsFetching] = useState(false);
    const [filter, setFilter] = useState("all");
    
    return (
        <Fragment>
            <PageNavbar />
            <PageHeader 
                setIsFetching={setIsFetching}
                setFilter={setFilter}
            />
            <TaskList 
                isFetching={isFetching}
                setIsFetching={setIsFetching}
                filter={filter}
            />
        </Fragment>
    );
}