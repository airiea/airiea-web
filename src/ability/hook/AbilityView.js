import {Card, CardBody, CardTitle} from "reactstrap";
import {FaCommentDots, FaFileAlt, FaPencilAlt, FaRegStar, FaTemperatureLow} from "react-icons/fa";
import LabeledInfo from "../../common/LabeledInfo";

const AbilityView = ({ ability }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h4" className="border-bottom pb-2 mb-4">Ability Details</CardTitle>

            <LabeledInfo icon={<FaRegStar className="text-primary mr-2" />} label="Ability Name" value={ability.ability_name} />
            <LabeledInfo icon={<FaCommentDots className="text-warning mr-2" />} label="Model Object" value={ability.model_object} />
            <LabeledInfo icon={<FaCommentDots className="text-warning mr-2" />} label="Model" value={ability.model} />
            <LabeledInfo icon={<FaPencilAlt className="text-info mr-2" />} label="Max Tokens" value={ability.max_tokens} />
            <LabeledInfo icon={<FaTemperatureLow className="text-success mr-2" />} label="Temperature" value={ability.temperature} />
            <LabeledInfo icon={<FaFileAlt className="text-secondary mr-2" />} label="Description" value={ability.description} />
            <LabeledInfo label="Response Requirement" value={ability.response_requirement} />
            <LabeledInfo label="Example Input" value={ability.example_input} />
            <LabeledInfo label="Example Output" value={ability.example_output} />
            <LabeledInfo label="Prompt Format" value={ability.prompt_format} />
            <LabeledInfo label="Response Delimiter" value={ability.response_delimiter} />
            <LabeledInfo label="Update Type" value={ability.update_type} />
            <LabeledInfo label="Update Delimiter" value={ability.update_delimiter} />
        </CardBody>
    </Card>
);

export default AbilityView;

