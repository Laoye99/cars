import React, { Component } from "react";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    render() {
        if(this.state.hasError) {
            return <h1> Ooops! </h1>
        }
    }
}

export default ErrorBoundary;