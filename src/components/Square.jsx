import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <button className="square">
                { this.props.value }
            </button>
        );
    };
}

export default Square;