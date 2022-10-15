import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet, usePost } from "../../../services/api";
import { endpointsMap, routesMap } from "../../../routes";
import "./DocsEditPage.css";

const DocsEditPage = () => {
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
            await makeRequestDocsEditById({
                endpoint: endpointsMap.DOCS_EDIT_BY_ID(id),
                payload: payload
            });
        } catch (error) {
            if (error.isCancelled) {
                return;
            }
            console.log(error);
        }

        navigateFunc(-1); // Go Back
    };

    const handleBtnCancel = () => {
        navigateFunc(-1); // Go Back
    }

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
        <div className="DocsEditPage">
            <h1 className="DocsEditPage__title">Edit Document Page</h1>

            {state.doc != null && (
                <div className="DocsEditPage__doc">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control" id="name" type="text" value={state.form.name} onChange={handleFormInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" type="text" rows={18} value={state.form.content} onChange={handleFormInputChange} />
                        </div>
                        <button type="submit" className="globals__btn btn btn-primary me-1">Save</button>
                        <button type="button" className="globals__btn btn btn-secondary" onClick={handleBtnCancel}>Cancel</button>
                    </form>
                </div>
            )}

        </div>
    );
};

export default DocsEditPage;