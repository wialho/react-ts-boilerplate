import { useEffect, useState } from "react";
import { Col } from "../BaseStyledComponents/Col";
import { Row } from "../BaseStyledComponents/Row";
import { Wrapper } from "../BaseStyledComponents/Wrapper";

const Dashboard = () => {
    const [views, setViews] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <Wrapper>
            <p>Hello Dashboard</p>
        </Wrapper>
    );
}

export default Dashboard;