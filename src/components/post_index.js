import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchData } from "../actions";


class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchData();
    }


    render() {
        return (
            <div>
               Post Index 
            </div>
        );
    }
}

export default connect(null, {fetchData})(PostIndex);