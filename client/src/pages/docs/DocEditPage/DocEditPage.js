import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet, usePost } from "../../../services/api";
import { endpointsMap, routesMap } from "../../../router";

const DocEditPage = () => {
    const paramsMap = useParams();
    const navigateFunc = useNavigate();

    const [makeRequest, cancelRequest] = useGet();
    const [makeRequestDocsEditById, cancelRequestDocsEditById] = usePost();

    const [state, setState] = useState({
        form: {
            name: "",
            content: ""
        },
        doc: null
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { id } = paramsMap;

        const payload = {
            name: state.form.name,
            content: state.form.content
        };

        try {
            debugger;
            const result = await makeRequestDocsEditById({
                endpoint: endpointsMap.DOCS_EDIT_BY_ID(id),
                payload: payload
            });
            console.log(result);
        } catch (error) {
            if (error.isCancelled) {
                return;
            }
            console.log(error);
        }

        const link = routesMap.DOCS_VIEW_PAGE(id);
        navigateFunc(link);
    };

    const handleFormInputChange = (e) => {
        const { id, value } = e.currentTarget;
        setState((oldState) => {
            const newState = { ...oldState };
            newState.form[id] = value;
            return newState;
        });
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
                newState.form.name = doc.name;
                newState.form.content = doc.content;
                return newState;
            });
        };

        componentDidMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="DocEditPage">
            DocEditPage

            {state.doc != null && (
                <div className="DocEditPage__doc">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="name">Doc Name</label>
                            <input id="name" type="text" value={state.form.name} onChange={handleFormInputChange} />
                        </div>
                        <div>
                            <label htmlFor="content">Doc Content</label>
                            <textarea id="content" type="text" value={state.form.content} onChange={handleFormInputChange} />
                        </div>
                        <input type="submit" value="edit" />
                    </form>
                </div>
            )}

        </div>
    );
};

export default DocEditPage;