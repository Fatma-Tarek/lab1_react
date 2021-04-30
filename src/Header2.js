import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
class Header extends React.Component{

    render(){
        let h1Style={
            display:"inline-block"
        }

        return <div>
            <img style={{width:100,height:100}} src={this.props.logo} />
            <h1 style={h1Style} >{this.props.title}</h1>
            <Menu items={this.props.menu} toggleActive={this.props.toggleActive} />
        </div>
    }
}

Header.defaultProps ={
    title:"Website Title"
}

Header.propTypes = {
    title:PropTypes.string
}

class Menu extends React.Component{

    constructor(props){
        super();
        
    }

    render(){
        return <div>
            {this.props.items.map((item,i)=>{
                return <Link key={item.text} style={{backgroundColor:item.active?"red":"green"}} onClick={()=>this.props.toggleActive(item.text)} to={item.link} > {item.text} |</Link>
            })}
        </div>
    }
}

Menu.defaultProps={
    items:[]
}

export {Header,Menu};
