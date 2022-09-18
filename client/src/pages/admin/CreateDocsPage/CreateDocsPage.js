import React, { useState } from "react";
import { usePost } from "../../../services/api";

const CreateDocsPage = () => {
    const [makeRequest, cancelRequest] = usePost();

    const [state, setState] = useState({
        form: {
            name: "",
            content: ""
        }
    });

    const handleFormInputChange = (e) => {
        const { id, value } = e.currentTarget;
        setState((oldState) => {
            const newState = { ...oldState };
            newState.form[id] = value;
            return newState;
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            name: state.form.name,
            content: state.form.content
        };

        try {
            const result = await makeRequest({
                endpoint: "/docs/create",
                payload: payload
            });
            console.log(result);
        } catch (error) {
            if (error.isCancelled) {
                return;
            }
            console.log(error);
        }
    };

    return (
        <div className="CreateDocsPage">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Doc Name</label>
                    <input id="name" type="text" value={state.form.name} onChange={handleFormInputChange} />
                </div>
                <div>
                    <label htmlFor="content">Doc Content</label>
                    <input id="content" type="text" value={state.form.content} onChange={handleFormInputChange} />
                </div>
                <input type="submit" value="create" />
            </form>
        </div>
    )
};

export default CreateDocsPage;