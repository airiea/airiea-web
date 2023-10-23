import {Card, CardBody, CardTitle} from "reactstrap";
import LabeledInfo from "../common/LabeledInfo";

const TaskView = ({ task }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h5" className="border-bottom pb-2 mb-4">Task Details</CardTitle>

            <LabeledInfo label="Task ID" value={task.task_id} />
            <LabeledInfo label="Entity ID" value={task.entity_id} />
            <LabeledInfo label="Agent Name" value={task.agent_name} />
            <LabeledInfo label="Task Count" value={task.task_count} />
            <LabeledInfo label="Text Input" value={task.text_input} />
            <LabeledInfo label="Text Output" value={task.text_output} />
            <LabeledInfo label="Status" value={task.status} />
            <LabeledInfo label="Error Code" value={task.error_code} />
            <LabeledInfo label="Error Message" value={task.error_message} />
            <LabeledInfo label="Created Date" value={task.created_date} />
            <LabeledInfo label="Updated Date" value={task.updated_date} />

        </CardBody>
    </Card>
);

export default TaskView;

