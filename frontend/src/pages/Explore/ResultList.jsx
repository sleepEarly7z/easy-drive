import { List } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";
const ResultList = (props) => {
    const { instructors } = props;

    // TODO modify this after implementing pagination
    const tempInstructors = instructors.slice(0, 4);

    return (
        <List>
            {tempInstructors.map((x) => {
                return <ProfileCard
                    key={x._id}
                    name={`${x.first_name} ${x.last_name}`}
                    location={x.city}
                    years={x.experience}
                    rate={x.rating}
                    imgSrc={x.photo}
                    instructorId={x._id}
                />
            })}
        </List>
    )
}

export default ResultList;