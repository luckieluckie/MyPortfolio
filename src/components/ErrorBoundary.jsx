
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-white p-5">
                    <h2 className="text-3xl font-bold mb-4 text-red-500">Something went wrong.</h2>
                    <p className="mb-4 text-lg">The application crashed. See the console for more details.</p>
                    {this.state.error && (
                        <div className="bg-black-200 p-4 rounded border border-white/10 max-w-2xl overflow-auto text-sm font-mono text-left">
                            <p className="text-red-400 font-bold">{this.state.error.toString()}</p>
                            <br />
                            <pre className="text-gray-400 whitespace-pre-wrap">{this.state.errorInfo?.componentStack}</pre>
                        </div>
                    )}
                    <button
                        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition-colors"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
