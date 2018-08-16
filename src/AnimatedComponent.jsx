import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import queryString from 'query-string';
import './animatedComponent.css';
import { User } from './User';

export class AnimatedComponent extends Component {
    constructor(props) {
        super(props);

        this.queries = queryString.parse(props.location.search);

        this.state = {
            isMounted: true,
            isVisible: false,
            isAnimatable: ("animate" in this.queries)
        }

    }

    componentWillMount() {
        if (this.state.isAnimatable) {
            this.props.history.push({
                search: ""
            });
        }

        console.log("Mounted");
    }

    handleClick = () => {
        this.setState({isMounted: false});
    }
    
    handleEntered = () => {
        this.setState({isVisible: true});
    }
    
    handleExit = () => {
        this.setState({
            isVisible: false,
            isAnimatable: true
        });
    }

    handleExited = () => {
        this.props.history.push("/users");
    }

    render() {
        console.log("Render", this.props);
        return (
            <Transition in={this.state.isMounted} appear={true} timeout={{enter: 0, exit: 130}} onEntered={this.handleEntered} onExit={this.handleExit} onExited={this.handleExited}>
                {status => (
                    <div>
                        <h1>{status}</h1>
                        <div className={"drawer" + (this.state.isVisible ? " visible" : "") + (this.state.isAnimatable ? " animatable" : "")}>
                            <User name={this.props.match.params.userID} />
                            <button onClick={this.handleClick}>Back</button>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

export default AnimatedComponent;