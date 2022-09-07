import React from "react"
import PropTypes from "prop-types"

class HeroName extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

// HeroName.PropTypes = {
//     name: PropTypes.string
// }

export default class Hero extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Hercules"
        }
    }

    render(){
        return <HeroName name={this.state.name}/>
    }
}
