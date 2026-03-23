import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "@/app/components/Projects";

describe("Projects — Figma: grelha 2×2 + paginação (4 por página)", () => {
  it("em 'All' página 1 mostra os 4 projetos base na grade", () => {
    render(<Projects />);
    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
    expect(screen.getByText(/Baia Mall/i)).toBeInTheDocument();
    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.getByText("AGHA KHAN")).toBeInTheDocument();
    expect(screen.getByTestId("projects-grid").children).toHaveLength(4);
  });

  it("em 'All' exibe 5 bolinhas e botões Back/Next (20 projetos → 5 páginas)", () => {
    render(<Projects />);
    const dots = screen.getAllByTestId("pagination-dot");
    expect(dots).toHaveLength(5);
    expect(dots[0]).toHaveAttribute("data-active", "true");
    expect(screen.getByRole("button", { name: /back/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
  });

  it("All: Next mostra página 2 (Project 5–8) e 2ª bolinha ativa", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.queryByText("Radisson Hotel")).not.toBeInTheDocument();
    expect(screen.getByText("Project 5")).toBeInTheDocument();
    const dots = screen.getAllByTestId("pagination-dot");
    expect(dots[1]).toHaveAttribute("data-active", "true");
  });

  it("All: Back na página 2 volta aos 4 projetos base", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /back/i }));

    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
    expect(screen.getByTestId("projects-grid").children).toHaveLength(4);
  });

  it("filtro 'Commercial' reseta para página 1 e mostra até 4 cartões", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /filter by commercial/i }));

    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
    expect(screen.getByText(/Baia Mall/i)).toBeInTheDocument();
    expect(screen.queryByText("Southern Sun")).not.toBeInTheDocument();
    const grid = screen.getByTestId("projects-grid");
    expect(grid.children.length).toBeGreaterThanOrEqual(2);
    expect(grid.children.length).toBeLessThanOrEqual(4);
  });

  it("barra lateral: 'All' destacado no início", () => {
    render(<Projects />);
    expect(screen.getByRole("button", { name: /filter by all/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("Residential: filtro ativo e grelha só com residenciais da página atual", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: /filter by residential/i }));

    expect(screen.getByRole("button", { name: /filter by residential/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.queryByText("Radisson Hotel")).not.toBeInTheDocument();
  });

  it("voltar a 'All' após filtro mostra de novo os 4 primeiros projetos", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: /filter by commercial/i }));
    fireEvent.click(screen.getByRole("button", { name: /filter by all/i }));

    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.getByText("AGHA KHAN")).toBeInTheDocument();
    expect(screen.getByTestId("projects-grid").children).toHaveLength(4);
  });
});
