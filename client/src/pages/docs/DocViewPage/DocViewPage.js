import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../../../services/api";
import { routesMap, endpointsMap } from "../../../router";

const DocViewPage = () => {
    const paramsMap = useParams();
    const navigateFunc = useNavigate();

    const [makeRequest, cancelRequest] = useGet();

    const [state, setState] = useState({
        doc: null
    });

    const openEditPage = () => {
        const { id } = paramsMap;
        const link = routesMap.DOCS_EDIT_PAGE(id);
        navigateFunc(link);
    };

    useEffect(() => {
        const { id } = paramsMap;

        const componentDidMount = async () => {
            let doc = null;
            try {
                doc = await makeRequest({ endpoint: endpointsMap.DOCS_GET_BY_ID(id) });
            } catch (error) {
                if (error.isCancelled) {
                    return;
                }
            }
            setState((oldState) => {
                const newState = { ...oldState };
                newState.doc = doc;
                return newState;
            });
        };

        componentDidMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="DocViewPage">
            DocViewPage

            {state.doc != null && (
                <div className="DocViewPage__doc">
                    <div>{state.doc.name}</div>
                    <div>{state.doc.content}</div>
                    <button onClick={openEditPage}>edit</button>
                </div>
            )}

        </div>
    );
};

export default DocViewPage;