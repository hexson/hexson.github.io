import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Index extends Component {
    componentDidMount() {
        const {
            nprogress
        } = this.props;
        nprogress.done();
    }
    handleClick() {
        console.log(111)
        this.props.dispatch(push('/post'))
    }
    render() {
        return (
            <div>index</div>
        )
    }
}

function mapStateToProps(store) {
    return {
        ...store
    }
}

export default connect(mapStateToProps)(Index)