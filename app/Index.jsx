import React, { PropTypes } from "react";
import { connect } from "react-redux";
import ActionCheckCircle from "material-ui/svg-icons/action/check-circle";
import Divider from "material-ui/Divider";

import IndexUser from "./IndexUser";
import IndexGuest from "./IndexGuest";

const styles = {
  indexDiv: {
    padding: "0 20px",
  },
  logo: {
    width: 120,
    height: 120,
    color: "#4DD0E1",
  },
};

class Index extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div style={styles.indexDiv}>
        <ActionCheckCircle style={styles.logo} />
        {user && <IndexUser userName={this.props.user.username} />}
        {!user && <IndexGuest />}
        <br />
        <Divider />
        <p>
          Created in 2023 by <strong>vishal aggarwal</strong>{" "}
          (Vishal1543.be21@chitkara.edu.in)
        </p>
        <p>
          View or download the code for this project on <a href="#">Github</a>.
        </p>
        <Divider />
        <h4>Main Technologies</h4>
        <p>
          <strong>Client:</strong> React, Redux, React-Router, Material UI
        </p>
        <p>
          <strong>Server:</strong> Node/Express, Mongoose, Passport
        </p>
      </div>
    );
  }
}
Index.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Index);
