function IFrameWidget(props) {
    
    return (<div >
       
        <iframe title="weatherORF" src={props.url} width="75%" height="75%"></iframe>
    </div>);
}

export default IFrameWidget;