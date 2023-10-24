import {Card, CardBody, CardTitle} from "reactstrap";
import LabeledInfo from "../../common/LabeledInfo";

const KnowledgeView = ({ knowledge }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h5" className="border-bottom pb-2 mb-4">Knowledge Details</CardTitle>

            <LabeledInfo label="Knowledge ID" value={knowledge.knowledge_id} />
            <LabeledInfo label="Agent Name" value={knowledge.agent_name} />
            <LabeledInfo label="Entity ID" value={knowledge.entity_id} />
            <LabeledInfo label="Content" value={knowledge.content} />
            <LabeledInfo label="Created Date" value={knowledge.created_date} />
            <LabeledInfo label="Updated Date" value={knowledge.updated_date} />

        </CardBody>
    </Card>
);

export default KnowledgeView;
