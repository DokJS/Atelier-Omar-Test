import ErrorFallback from "../ErrorFallback";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ErrorFallback", () => {
    it("should render error message", () => {
        const error = "Error message";
        const resetErrorBoundary = jest.fn();
        render(
            <ErrorFallback
                error={error}
                resetErrorBoundary={resetErrorBoundary}
            />
        );
        expect(screen.getByText(error)).toBeInTheDocument();
    });
    it("should call resetErrorBoundary when button is clicked", () => {
        const error = "Error message";
        const resetErrorBoundary = jest.fn();
        render(
            <ErrorFallback
                error={error}
                resetErrorBoundary={resetErrorBoundary}
            />
        );
        userEvent.click(screen.getByRole("button"));
        expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
    });
} )