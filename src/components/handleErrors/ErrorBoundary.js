import { Component } from "react";
import ErrorMessage from "./ErrorMessage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // States: to watch for any errors
  }

  static getDerivedStateFromError() {
    // Update the state
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // If an error occurs (if the state of this component has an error)
      return <ErrorMessage />;
    }

    return this.props.children; // If runs ok -> render all components inside <ErrorBoundary></ErrorBoundary>
  }
}
export default ErrorBoundary;
