import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useSearchData} from "../common/UseSearchData";
import NavBar from "../common/NavBar";
import {Container, Spinner} from "reactstrap";
import ErrorAlert from "../common/ErrorAlert"; // Import the ErrorAlert component

// List of models - kept outside the component to avoid re-declaration on each render
const models = ["gpt-3.5-turbo", "gpt-4", "gpt-3.5-turbo-16k"];

function AgentChatComponent() {
    const { data: agents, loading, error } = useSearchData('/agent/search/list-all');

    //const filteredAgents = agents ? agents.filter(agent => agent.agent_name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    // States
    const [selectedAgent, setSelectedAgent] = useState("");
    const [knowledgeOptions, setKnowledgeOptions] = useState([]);
    const [selectedModel, setSelectedModel] = useState("");
    const [prompt, setPrompt] = useState("");
    const [responseDelimiter, setResponseDelimiter] = useState(",");
    const [temperature, setTemperature] = useState(0.7);
    const [maxTokens, setMaxTokens] = useState(150);
    const [knowledgeIds, setKnowledgeIds] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [responseContent, setResponseContent] = useState("");

    useEffect(() => {
        // Fetch knowledgeIds whenever the selectedAgent changes
        if (selectedAgent) {
            axios.get(`/knowledge/search/agent_name/${selectedAgent}`)
                .then(response => {
                    setKnowledgeOptions(response.data || []);
                })
                .catch(error => {
                    console.error("Error fetching knowledge IDs:", error);
                });
        }
    }, [selectedAgent]);

    // A function to handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const requestPayload = {
            agent_name: selectedAgent,
            model: selectedModel,
            response_delimiter: responseDelimiter,
            temperature: Number(temperature),
            max_tokens: Number(maxTokens),
            knowledge_ids: knowledgeIds,
            prompt: prompt
        };

        try {
            const response = await axios.post('/agent/chat', requestPayload);
            setResponseContent(response.data.content);
        } catch (err) {
            console.error("Error sending prompt:", err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-light">
            <NavBar />
            <Container className="py-5">
                {loading && <p className="text-center text-muted">Loading agents...</p>}
                <ErrorAlert message={error} />

                {agents && (
                    <div className="card p-5 shadow-lg rounded">
                        <h2 className="text-center mb-5 font-weight-bold">Agent Prompt</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="form-label font-weight-bold">Select Agent</label>
                                <select className="form-select form-control-lg" value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)}>
                                    <option value="">Select an agent</option>
                                    {agents.map(agent => (
                                        <option key={agent.agent_name} value={agent.agent_name}>{agent.agent_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="form-label font-weight-bold">Select Model</label>
                                <select className="form-select form-control-lg" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                                    <option value="">Select a model</option>
                                    {models.map(model => (
                                        <option key={model} value={model}>{model}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label font-weight-bold">Response Delimiter</label>
                                    <input type="text" className="form-control form-control-lg" value={responseDelimiter} onChange={(e) => setResponseDelimiter(e.target.value)} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label font-weight-bold">Temperature</label>
                                    <input type="number" step="0.01" className="form-control form-control-lg" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label font-weight-bold">Max Tokens</label>
                                    <input type="number" className="form-control form-control-lg" value={maxTokens} onChange={(e) => setMaxTokens(e.target.value)} />
                                </div>
                            </div>
                            {selectedAgent && (
                                <div className="mb-4">
                                    <label className="form-label font-weight-bold">Knowledge IDs</label>
                                    <select
                                        multiple
                                        className="form-select form-control-lg"
                                        value={knowledgeIds}
                                        onChange={(e) => {
                                            const selectedValues = Array.from(e.target.selectedOptions).map(option => option.value);
                                            setKnowledgeIds(selectedValues);
                                        }}
                                    >
                                        {knowledgeOptions.map(knowledge => (
                                            <option key={knowledge.knowledge_id} value={knowledge.knowledge_id}>
                                                {knowledge.knowledge_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="mb-5">
                                <label className="form-label font-weight-bold">Prompt</label>
                                <textarea rows="3" className="form-control form-control-lg" value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 py-2" disabled={submitting}>
                                    {submitting ? (
                                        <>
                                            <Spinner size="sm" color="light" className="me-2" /> Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {responseContent && (
                    <div className="mt-5 card p-5 shadow-lg rounded">
                        <h5 className="font-weight-bold mb-3">Response:</h5>
                        <p className="lead">{responseContent}</p>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AgentChatComponent;

