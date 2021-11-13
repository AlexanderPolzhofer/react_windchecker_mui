function IFrameWidget(props) {
    
    return (<div >
       
        <iframe title="weatherORF" src={props.url} width="75%" height="555px"></iframe>
    </div>);
}

export default IFrameWidget;