import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Reasons from "@/app/components/Reasons";

describe("Reasons (Mission / Vision / Values)", () => {
  it("renderiza os 3 cards", () => {
    render(<Reasons />);
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
    expect(screen.getByText("Our Values")).toBeInTheDocument();
  });

  it("card 'Our Mission' exibe descrição correta", () => {
    render(<Reasons />);
    expect(
      screen.getByText(/civil construction and topography/i)
    ).toBeInTheDocument();
  });

  it("card 'Our Vision' exibe descrição correta", () => {
    render(<Reasons />);
    expect(
      screen.getByText(/first choice in construction/i)
    ).toBeInTheDocument();
  });

  it("card 'Our Values' lista os valores", () => {
    render(<Reasons />);
    expect(screen.getByText(/Lead by example/i)).toBeInTheDocument();
    expect(screen.getByText(/Work as a team/i)).toBeInTheDocument();
    expect(screen.getByText(/Keep our promises/i)).toBeInTheDocument();
  });

  it("section tem id='reasons'", () => {
    render(<Reasons />);
    expect(document.getElementById("reasons")).toBeInTheDocument();
  });
});
