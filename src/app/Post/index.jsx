import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Index extends Component {
    componentDidMount() {
        console.log('into post')
    }
    render() {
        return (
            <div>post</div>
        )
    }
}

function mapStateToProps(store) {
    // console.log(store)
    return {
        routing: store.routing
    }
}

export default connect(mapStateToProps)(Index)
// export default withRouter(Index)