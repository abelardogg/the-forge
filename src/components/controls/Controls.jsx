import React from 'react';
import { connect } from 'react-redux';
import { updateBorder } from '../../redux/actions/preview';
import Sizing from './Sizing';

class Controls extends React.Component{
    constructor(props){
        super(props);
    }

    getArchive = () => {
        // TODO implement endpoint call
        return null;
    }

    componentWillMount(){
        console.info('Cart.jsx will mount');
        console.info(this.props)   
    }

    render(){
        return (<>
            <h2>Controls</h2>
            <Sizing/>
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
        updateBorder
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Controls)