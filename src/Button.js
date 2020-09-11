import React from 'react';
import axios from 'axios';
import ImgList from './ImgList';

class Button extends React.Component {

    state = { images: [] };
     
    buttonclk = async(event) => {
        const response = await axios.get(this.props.link)
        this.setState({ images: response.data })
        
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonclk}>{this.props.text}</button>
                <div>
                
                    <ImgList data={this.state.images} />
                
                </div>
            </div>
        )
    }
}
export default Button;

