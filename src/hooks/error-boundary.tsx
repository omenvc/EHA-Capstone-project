import type { ErrorInfo, ReactNode } from "react";

import { Component } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: unknown;
  info: ErrorInfo | null;
};

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    let safeError = error;

    try {
      console.error("Error caught by ErrorBoundary:", error);
    }
    catch (_fallbackError) {
      console.error(
        _fallbackError,
        "Error caught by ErrorBoundary (stringified):",
        String(error),
      );
      safeError = { message: String(error) };
    }

    console.error("Component Stack:", info);
    this.setState({ error: safeError, info });
  }

  getErrorMessage(error: unknown): string {
    if (error instanceof Error && error.message) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }
    try {
      return JSON.stringify(error);
    }
    catch {
      return "An unknown error occurred.";
    }
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.getErrorMessage(this.state.error);

      return (
        <div
          className="flex items-center justify-center min-h-screen bg-gray-100 relative"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center p-6 md:p-8 lg:p-12 bg-white shadow-xl rounded-md w-11/12 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Something went wrong!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We encountered an issue while loading the page. Please try again
              later.
            </p>
            <pre
              className="text-sm text-destructive bg-secondary p-4 text-gray-500 rounded-md mb-6 overflow-x-auto whitespace-pre-wrap break-words"
              style={{ maxHeight: "200px" }}
            >
              Error Message:
              {" "}
              {errorMessage}
            </pre>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-primary transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
