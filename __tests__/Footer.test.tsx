import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";

describe("Footer", () => {
  it("renderiza o elemento footer", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("exibe o texto de copyright", () => {
    render(<Footer />);
    expect(
      screen.getByText(/ETTIC Company © 2025. All Rights Reserved/i)
    ).toBeInTheDocument();
  });

  it("exibe o texto 'PORTFOLIO'", () => {
    render(<Footer />);
    expect(screen.getByText("PORTFOLIO")).toBeInTheDocument();
  });

  it("footer tem background azul #0379B9", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveStyle({ backgroundColor: "#0379B9" });
  });

  it("texto de copyright é branco", () => {
    render(<Footer />);
    const copyright = screen.getByText(/All Rights Reserved/i);
    expect(copyright).toHaveStyle({ color: "#FFFFFF" });
  });
});
