import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routesMap, endpointsMap } from "../../../routes";
import './DocsPage.css';

// Types
import { allDocsArrType } from "../../../types/docs";

// Services
import { useGet } from "../../../services/api";

const DocsPage = () => {
    const navigate = useNavigate();
    const [makeRequest, cancelRequest] = useGet();

    const [state, setState] = useState<{[k: string]: allDocsArrType}>({
        allDocsArr: []
    });

    const handleClick = () => {
        const route: string = routesMap.ADMIN_DOCS_CREATE_PAGE;
        navigate(route);
    }

    useEffect(() => {
        const componentDidMount = async () => {
            let allDocsArr: allDocsArrType = [];

            try {
                allDocsArr = await makeRequest({ endpoint: endpointsMap.DOCS_ALL });
            } catch (error: any) {
                if (error.isCancelled) {
                    return;
                }
                console.log(error);
            }

            setState((oldState) => {
                const newState = { ...oldState };
                newState.allDocsArr = allDocsArr;
                return newState;
            });
        };

        componentDidMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="DocsPage">
            <h1 className="DocsPage__title">Docs Page</h1>
            {state.allDocsArr.map((item) => {
                return (
                    <div key={item._id}>
                        <Link to={routesMap.DOCS_VIEW_PAGE(item._id)}>{item.name}</Link>
                    </div>
                );
            })}
            <button onClick={handleClick}>Create Docs</button>
        </div>
    )
}

export default DocsPage;