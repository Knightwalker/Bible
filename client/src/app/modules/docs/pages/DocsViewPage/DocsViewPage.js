import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../../../../../services/api";
import { routesMap, endpointsMap } from "../../../../../routes";
import { replaceDomainKeywordUtil } from "../../../../../utils/docs";
import "./DocsViewPage.css";

const DocsViewPage = () => {
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
                doc.content = replaceDomainKeywordUtil(doc.content);
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
        <div className="DocsViewPage">
            {state.doc != null && (
                <div className="DocsViewPage__doc">
                    <h1 className="DocsViewPage__doc-title">{state.doc.name}</h1>
                    <div className="DocsViewPage__doc-content"
                        dangerouslySetInnerHTML={{ __html: state.doc.content }}
                    />
                    <div className="DocsViewPage__doc-footer">
                        <button className="globals__btn btn btn-primary me-1" type="button" onClick={openEditPage}>Edit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocsViewPage;