import React, { Component } from 'react'

export default class Image extends Component {

    render() {
        return(
            <div>
        
                <img 
                style={{width: 800}} 
                src={this.props.imgUrl}>
                    
                </img>
        
            </div>
        )
    }    
}




// export default function Image(props) {

    
//         return(
//             <div>
        
//                 <img 
//                 style={{width: 800}} 
//                 src={props.imgUrl}>
                    
//                 </img>
        
//             </div>
//         )
      
// }