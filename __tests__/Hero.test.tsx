import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/Hero";

describe("Hero", () => {
  it("renderiza a section com id='home'", () => {
    render(<Hero />);
    expect(document.getElementById("home")).toBeInTheDocument();
  });

  it("exibe o texto principal do Figma", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Quality, Innovation, Professionalism/i)
    ).toBeInTheDocument();
  });

  it("exibe o botão 'Request your quotation'", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /request your quotation/i })
    ).toBeInTheDocument();
  });

  it("botão tem background laranja #E4791A", () => {
    render(<Hero />);
    const btn = screen.getByRole("button", { name: /request your quotation/i });
    expect(btn).toHaveStyle({ backgroundColor: "#E4791A" });
  });

  it("botão tem largura de 190px", () => {
    render(<Hero />);
    const btn = screen.getByRole("button", { name: /request your quotation/i });
    expect(btn).toHaveStyle({ width: "190px" });
  });

  it("texto tem font-weight 300 (Figma spec)", () => {
    render(<Hero />);
    const text = screen.getByText(/Quality, Innovation, Professionalism/i);
    expect(text).toHaveStyle({ fontWeight: 300 });
  });

  it("texto tem font-size 32px (Figma spec)", () => {
    render(<Hero />);
    const text = screen.getByText(/Quality, Innovation, Professionalism/i);
    expect(text).toHaveStyle({ fontSize: "32px" });
  });

  it("section tem altura de 474px", () => {
    render(<Hero />);
    const section = document.getElementById("home");
    expect(section).toHaveStyle({ height: "474px" });
  });
});
