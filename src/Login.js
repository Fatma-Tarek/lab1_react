import React from 'react';

class App2 extends React.Component {

    constructor(props){
        super();
        this.state={
            username:"fatima",
            password:"",
            email:""
            

        }
    } 
    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)

        });
        let resJson = await res.json();
        if(resJson.token){
            alert("Login success");
            localStorage.logged=true;
            this.props.rerenderParentCallback();
        }else{
            alert(resJson.error)
        }

    }

    
    toggleActive = (text) => {

        this.state.items.forEach((item) => item.active = false);
        let item = this.state.items.find(x => x.text == text);
        item.active = !item.active
        this.setState({ items: this.state.items });
        //this.forceUpdate();
    }


    render(){
        return <div>
            <h1>Login</h1>
            {/* onChange={this.setUserName} will send object here */}
            username:<input type="text" value={this.state.username} onChange={this.setInputValue} name="username"></input><br/>
            password:<input type="password" value={this.state.password} onChange={this.setInputValue} name="password"></input><br/>
            Email:<input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" /><br/>
            <button onClick={this.login}>Login</button>
            
        </div>
    }


}

class UserList extends React.Component {
    constructor(){
        super();
        this.state={
            users:[]
        };
    }

}
class UserView extends React.Component {
    constructor(){
        super();
    }
    render(){
        return <div>
            <img src={this.props.user.avatar} style={{width:100,height:100}} /><br/>
            <span>{this.props.user.first_name} {this.props.user.last_name}</span>
            <div>Email : {this.props.user.email}</div>
        </div>
    }
    
}
export default App2;