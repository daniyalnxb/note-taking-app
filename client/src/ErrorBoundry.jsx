import { Component } from "react";

const style = {
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem'
};

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }


    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        
    }

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <div style={style}>Something went wrong.</div>;
        }
    
        return this.props.children; 
    }
}

export default ErrorBoundry;
