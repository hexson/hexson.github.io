import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Index extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleClick() {
        console.log(111)
        this.props.dispatch(push('/post'))
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>hello</div>
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