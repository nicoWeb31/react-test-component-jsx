import React, { Component } from 'react';
import "./imgitem.style.css";


class ImgItem extends Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 };


        //reference
        this.imagRef = React.createRef();
    }

    componentDidMount() {
        //attendedre que l'image soit charger pour recupérer la hauteur
        this.imagRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const heiht = this.imagRef.current.clientHeight;
        const span = Math.ceil(heiht / 10 );
        this.setState({ span })

    }



    render() {
        const { urls, description } = this.props.photo
        return (
            <div style={{ gridRowEnd: `span ${this.state.span} ` }}>
                <img src={urls.regular} alt={description} ref={this.imagRef} />
            </div>
        );
    }
}

export default ImgItem;