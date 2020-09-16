import React from 'react';


class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errMessage:""

        };
    }
    
    posit = () => window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                
                this.setState({lat :position.coords.latitude})
            },
            (err) => {
                console.log(err)
                this.setState({errMessage : err.message})
            }
        );

    componentDidMount(){
        this.posit();
    }    
        
    render() {

        return (
            <>
            <div>Season display</div>


            
                {
                    this.state.lat ? 
                    (
                        <p>latitude : {this.state.lat}</p>
                    ):
                    (
                        <>Error : {this.state.errMessage}</>
                    )
                }
            
        </>
        );
    }
}

export default SeasonDisplay;