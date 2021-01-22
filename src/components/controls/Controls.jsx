import React from 'react';
import { connect } from 'react-redux';
import '../../css/Controls.css'
import { updateCss } from '../../redux/actions/preview';
import Sizing from './Sizing';
import Borders from './Borders';


class Controls extends React.Component{
    constructor(props){
        super(props);
    }

    updateCss = (keyValue) =>{
        console.info(keyValue)
        this.props.updateCss(keyValue);
    }

    componentWillMount(){
        console.info('Controls.jsx will mount');
        console.info(this.props);  
    }

    render(){
        const css = this.props.preview;
        return (<>
            <h2>Controls</h2>
            <Sizing currentWidth={css.width} updateWidth={this.updateCss} 
            currentHeight={css.height} updateHeight={this.updateCss} />

            <Borders 
            borderWidth={css.borderWidth} updateBorderWidth={this.updateCss} 
            updateBorderStyle={this.updateCss}
            updateBorderColor={this.updateCss}/>

        </>);
    }
}

const mapStateToProps = state => {
    const preview = state.preview
    return {
        preview
    }
}
const mapDispatchToProps = () => {
    return {
        updateCss
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Controls)