import React from 'react';
import { connect } from 'react-redux';
import { updateBorder } from '../redux/actions/preview'

class Preview extends React.Component{
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
        return (<div id="preview-container">
            <div id="preview" style={this.props.preview}>
                This is the preview container.
            </div>
        </div>);
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
export default connect(mapStateToProps, mapDispatchToProps())(Preview)