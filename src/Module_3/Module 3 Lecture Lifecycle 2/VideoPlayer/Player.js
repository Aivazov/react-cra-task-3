import { Component } from "react";

export class Player extends Component {
    state = {
        isVideoLoaded: false,
    }

    componentDidMount(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.setState({ isVideoLoaded: false })
        }
    }

    render() {
        const { isVideoLoaded } = this.state;
				const { url } = this.props;
				const showLoader = url && !isVideoLoaded;
				const playerWidth = isVideoLoaded ? '100%' : 0;
				const playerHeight = isVideoLoaded ? '100%' : 0;
    }

    return (
      <>
        {showLoader && <h2>Loading video...</h2>}
        {url && (
          <StyledPlayer url={url} width={playerWidth} height={playerHeight} onReady={() => this.setState({isVideoLoaded: true})} controls />
        )}
      </>
    );
}