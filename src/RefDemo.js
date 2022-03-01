
import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.myFirstRef = React.createRef()
        this.secondRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.myFirstRef)
        this.myFirstRef.current.value = "Random Text"
        this.secondRef.current.focus()
    }

    render() {
        return (
            <div>
                <input  ref={this.myFirstRef} type="text"/>
                <input  ref={this.secondRef} type="password"/>
            </div>
        );
    }
}

export default RefDemo;