import React from "react";

export default class ImageSlider extends React.Component {

    state = {
        images: [
            "https://i.pinimg.com/564x/04/24/13/04241308ecd4afeccba4d2ae99a80f69.jpg",
            "https://i.pinimg.com/564x/47/a1/aa/47a1aaeb768c42dc3ae1cbdae55d5eab.jpg",
            "https://i.pinimg.com/474x/19/fa/9d/19fa9dd85cde39ed3db8ace1d631bbea.jpg"
        ],
        //keep track of image index
        idx: 0
    };

    handleNext = () => {
        this.setState({
            idx: this.state.idx + 1
        });

    };

    handlePrev = () => {
        this.setState({
            idx: this.state.idx -1
        });
    };

    render() {
        return (
            <div> image slider
                <button onClick={this.handlePrev}>Previous</button>
                <img
                    style={{
                        width: 100,
                        height: 100
                    }}
                    src={this.state.images[this.state.idx]}></img>
                <button onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}