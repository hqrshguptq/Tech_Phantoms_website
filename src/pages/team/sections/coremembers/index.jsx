import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Holder from "../../components/holder/holder";

const DisplayTeams = (props) => {

    return (
        <center>
        <Grid container >
        
            {
                props.members.map((member) => (
                    <Grid item md={4} xs={12} lg={3} sm={12}>
                    <Holder id={member.id}
                        name={member.get("name")}
                        imageUrl={member.imageUrl}
                        githubUrl={member.get('github_profile')}
                        linkedinUrl={member.get('linkedin_profile')}
                        gender={member.get('gender')}
                        instagramUrl={member.get('instagram_profile')}
                        mediumUrl={member.get('medium_profile')}
                        /></Grid>
                ))
            }
        </Grid></center>

    )


}

DisplayTeams.propTypes={
        members:PropTypes.array
}


export default DisplayTeams;