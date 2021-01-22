import React from 'react';
import { connect } from 'react-redux';
import '../css/Preview.css'
import { updateCss } from '../redux/actions/preview';

class Preview extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.info('Preview.jsx will mount');
        console.info(this.props)   
    }

    render(){
        return (<>
        <h1>Preview</h1>
        <div id="preview-container">
            <div id="preview" style={this.props.preview}>
                This is the preview container.
            </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps())(Preview)