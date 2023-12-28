import axios from 'axios';
import React from 'react';

export default class ComponentWillMount extends React.PureComponent {
    constructor() {
			super();
        this.state = {
            name: '',
        }
    }

    // UNSAFE_componentWillMount () {
    //     axios.get('/api/user', {
    //         maxRedirects: 0
    //     }).then(res => {
    //         this.setState({ name: 'success' });
    //         console.log(res, 111111)
    //     }).catch(err => {
    //         this.setState({ name: 'error' });
    //         console.log(err, '--------------');
    //     })
    // }
    // TAG 

    render () {
        return (
            <div>我是一个class组件{this.state.name}</div>
        )
    }
}