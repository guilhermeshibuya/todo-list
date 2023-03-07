import { Fragment } from "react";
import PageHeader from "../components/PageHeader";
import PageNavbar from "../components/PageNavbar";

export default function HomeScreen () {
    return (
        <Fragment>
            <PageNavbar />
            <PageHeader />
        </Fragment>
    );
}