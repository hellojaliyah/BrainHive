import React, {Component} from "react";

class ResourceForm extends Component {
    state = {
        posternName: "",
        resourceAuthor: "",
        cohort: "",
        title: "",
    }
    state
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        });
    };

    render() {
        return (
        <div className="ResourceForm">
                <form style={styles.form} >
                {/* <label html="posterName">Your Name: </label> */}
                <input 
                style={styles.input}
                id="posterName" 
                type="text" 
                placeholder="Your Name" 
                value={this.state.posterName}
                onChange={this.handleChange}
                />
                <input 
                style={styles.input} 
                id="resourceAuthor" 
                type="text" 
                placeholder="Resource Author" 
                value={this.state.resourceAuthor}
                onChange={this.handleChange}
                />
                {/* dropmenu for author level */}
                <input 
                style={styles.input} 
                id="cohort" 
                type="text" 
                placeholder="Cohort #" 
                value={this.state.cohort}
                onChange={this.handleChange}
                />
                <input 
                style={styles.input} 
                id="title" 
                type="text" 
                placeholder="Resource Title" 
                value={this.state.title}
                onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

const styles = {
    form: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: '20%', 
        marginLeft: '20%',
        flexDirection: "column"
    },
    input : {
        width: "60%",
    }
}

export default ResourceForm;