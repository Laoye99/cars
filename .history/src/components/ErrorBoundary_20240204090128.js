import React, { Component } from "react";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    render() {
        if(this.state.hasError) {}
    }
}

export default ErrorBoundary;