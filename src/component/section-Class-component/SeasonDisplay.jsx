import React from 'react';


class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null
        };
    }
    
    posit = () => window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                
                this.setState({lat :position.coords.latitude})
            },
            (err) => console.log(err)
        );

    componentDidMount(){
        this.posit();
    }    
        
    render() {

        return (
            <>
            <div>Season display</div>
            <p>latitude :{this.state.lat} </p>
        </>
        );
    }
}

export default SeasonDisplay;