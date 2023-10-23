import {Card, CardBody, CardTitle} from "reactstrap";
import {FaCalendarAlt, FaCommentDots, FaPencilAlt, FaRegStar} from "react-icons/fa";
import LabeledInfo from "../common/LabeledInfo";

const AgentView = ({ agent }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h4" className="border-bottom pb-2 mb-4">Agent Details</CardTitle>

            <LabeledInfo icon={<FaRegStar className="text-primary mr-2" />} label="Agent Name" value={agent.agent_name} />
            <LabeledInfo icon={<FaRegStar className="text-primary mr-2" />} label="Ability Name" value={agent.ability_name} />
            <LabeledInfo icon={<FaCommentDots className="text-warning mr-2" />} label="Agent Goal" value={agent.agent_goal} />
            <LabeledInfo icon={<FaPencilAlt className="text-info mr-2" />} label="Agent Role" value={agent.agent_role} />
            <LabeledInfo icon={<FaCalendarAlt className="text-success mr-2" />} label="Created Date" value={agent.created_date} />
            <LabeledInfo icon={<FaCalendarAlt className="text-success mr-2" />} label="Updated Date" value={agent.updated_date} />
        </CardBody>
    </Card>
);

export default AgentView;
