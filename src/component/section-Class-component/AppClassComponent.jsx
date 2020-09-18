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

    //-----------------//    
    componentDidMount(){
        this.posit();
    }
    

    //---------------------//
    renderContent = () =>{
        const {lat,errMessage} = this.state

        if(errMessage && !lat){
            return <div>Error :{errMessage}</div>
        }
        if(!errMessage && lat){
            return <SeasonDisplay lat={lat}/>
        }
        else{return <Spinner message="please accept location request !"/>}

    }
        
    render() {


        return (
            <>
            <div>Season display</div>

            {this.renderContent()}


        </>
        );
    }
}

export default AppClassComponent;