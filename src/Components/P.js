import {Component} from "react";


class P extends Component {
    render() {
        return (
            <p>
                {this.props.Title} {this.props.num}

                <div>
                    And: 9 + 10 = {this.props.myFunc(11, 10)}
                </div>
            </p>
        );
    }
}

export default P;