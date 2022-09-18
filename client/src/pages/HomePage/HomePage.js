import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesMap, endpointsMap } from "../../router";
import './HomePage.css';

// Services
import { useGet } from "../../services/api";

const HomePage = () => {
    const navigate = useNavigate();
    const [makeRequest, cancelRequest] = useGet();

    const [state, setState] = useState({
        docsArr: []
    });

    const handleClick = () => {
        navigate(routesMap.ADMIN_DOCS_CREATE);
    }

    useEffect(() => {
        const componentDidMount = async () => {
            let docsArr = [];

            try {
                docsArr = await makeRequest({ endpoint: endpointsMap.DOCS_ALL });
            } catch (error) {
                if (error.isCancelled) {
                    return;
                }
                console.log(error);
            }

            setState((oldState) => {
                const newState = { ...oldState };
                newState.docsArr = docsArr;
                return newState;
            });
        };

        componentDidMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="HomePage">
            {state.docsArr.map((item) => {
                return (
                    <div key={item._id}>
                        <a href={routesMap.DOCS_VIEW_PAGE(item._id)}>{item.name}</a>
                    </div>
                );
            })}
            <button onClick={handleClick}>Create Docs</button>
        </div>
    )
}

export default HomePage;