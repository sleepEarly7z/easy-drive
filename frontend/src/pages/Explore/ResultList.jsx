import { Grid, Box } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";
import NewProfileCard from './ProfileCard';
const ResultList = (props) => {
    const { instructors } = props;

    // TODO modify this after implementing pagination
    const tempInstructors = instructors.slice(0, 20);

    // const recipes = useSelector(state => state.recipes.list);
    // TODO get instructors from global redux store quried results

    return (
        <Grid container
            rowSpacing={1}
            columnSpacing={2}>
            {instructors.map((x, index) => (
                <Grid item key={`${x._id}_${index}`} sx={{ minWidth: 300 }}>
                    <NewProfileCard
                        key={x._id}
                        id={x._id}
                        name={`${x.first_name} ${x.last_name}`}
                        location={x.city}
                        year={x.experience}
                        rating={x.rating}
                        language={x.language}
                        profileUrl={x.photo}
                        instructorId={x._id}
                    />
                </Grid>
            ))
            }
        </Grid >
    );
}

export default ResultList;
