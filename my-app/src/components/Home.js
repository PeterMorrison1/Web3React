import React from "react";
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        let imgUrl = "http://www.randyconnolly.com/funwebdev/3rd/images/travel/large1600/9496792166.jpg";
        return(
            <div className="banner"
            style = {{ backgroundImage: `url(${imgUrl})`,                         
            height: '800px',                         
            backgroundSize: 'cover',                         
            backgroundPosition: 'center center',                         
            backgroundRepeat: 'no-repeat',               
            }}>
            <div>
                <h1>Travel Photos</h1>
                <h3>Upload and Share</h3>
                <p>
                    
                </p>
            </div>
            </div>
            
        )
    }
}