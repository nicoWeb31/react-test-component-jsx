import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner"
class AppClassComponent extends React.Component {
//
        // this.state = {
        //     lat: null,
        //     errMessage:"",

        // };
    //}

    //ou
    state = {lat: null,errMessage:"" }

    
    posit = () => window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat :position.coords.latitude})
            ,
            (err)=>this.setState({errMessage : err.message})
            
        );

    componentDidMount(){
        this.posit();
    }    
        
    render() {
        const {lat,errMessage} = this.state

        return (
            <>
            <div>Season display</div>

            {errMessage && !lat && <div>Error :{errMessage}</div>}
            {!errMessage && lat && <SeasonDisplay lat={lat}/>}
            {!errMessage && !lat && <Spinner/>}


        </>
        );
    }
}

export default AppClassComponent;