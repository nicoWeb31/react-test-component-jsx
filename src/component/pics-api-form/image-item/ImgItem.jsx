import React, { Component } from 'react';
import "./imgitem.style.css";


class ImgItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };


        //reference
        this.imagRef = React.createRef();
    }

    componentDidMount(){
        
    }



    render() {
        const {urls, description} = this.props.photo
        return (
            <>
            <img src={urls.regular} alt={description} ref={this.imagRef}/>
    </>
        );
    }
}

export default ImgItem;