import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super()
        this.setstate= {data: {}}
    }
    
    componentDidMount(){
        fetch('https://api.github.com/user/GabrielGaiatto/repos')
        .then((response) => {response.json()} )
        .then( (data) => {this.setState({data: data})} )
    }
    
    render(){
        return (
        <div>Nome de usuário: {this.state.data.login}</div>
        );
    }
}

export default Login;