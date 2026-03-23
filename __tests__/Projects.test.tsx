import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "@/app/components/Projects";

describe("Projects — All vs filtro + paginação", () => {
  // ── Modo "All": todos os projetos, sem paginação ─────────────────────────

  it("em 'All' exibe os 4 projetos na grade", () => {
    render(<Projects />);
    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
    expect(screen.getByText(/Baia Mall/i)).toBeInTheDocument();
    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.getByText("AGHA KHAN")).toBeInTheDocument();
  });

  it("em 'All' não exibe bolinhas de paginação", () => {
    render(<Projects />);
    expect(screen.queryAllByTestId("pagination-dot")).toHaveLength(0);
  });

  it("em 'All' não exibe botões Back nem Next", () => {
    render(<Projects />);
    expect(screen.queryByRole("button", { name: /back/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /next/i })).toBeNull();
  });

  it("barra lateral mantém 'All' destacado no início", () => {
    render(<Projects />);
    const allRow = screen.getByText("All").closest("div");
    expect(allRow).toBeTruthy();
    const indicator = allRow?.querySelector("div");
    expect(indicator).toHaveStyle({ backgroundColor: "rgb(41, 71, 169)" });
  });

  // ── Filtro Commercial: 2 projetos + paginação ─────────────────────────────

  it("ao clicar 'Commercial' mostra só o 1º comercial e 2 bolinhas", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Commercial"));

    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
    expect(screen.queryByText("Southern Sun")).not.toBeInTheDocument();
    const dots = screen.getAllByTestId("pagination-dot");
    expect(dots).toHaveLength(2);
    expect(dots[0]).toHaveAttribute("data-active", "true");
  });

  it("Commercial: Next mostra Baia Mall e destaca 2ª bolinha", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Commercial"));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.getByText(/Baia Mall/i)).toBeInTheDocument();
    expect(screen.queryByText("Radisson Hotel")).not.toBeInTheDocument();
    const dots = screen.getAllByTestId("pagination-dot");
    expect(dots[1]).toHaveAttribute("data-active", "true");
  });

  it("Commercial: barra lateral mantém 'Commercial' destacado ao usar Next", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Commercial"));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    const commercialRow = screen.getByText("Commercial").closest("div");
    const indicator = commercialRow?.querySelector("div");
    expect(indicator).toHaveStyle({ backgroundColor: "rgb(41, 71, 169)" });
  });

  it("Commercial: Back volta ao primeiro projeto", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Commercial"));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /back/i }));

    expect(screen.getByText("Radisson Hotel")).toBeInTheDocument();
  });

  // ── Filtro com 1 projeto: sem paginação ──────────────────────────────────

  it("Residential: um projeto, sem bolinhas nem Back/Next", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Residential"));

    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.queryAllByTestId("pagination-dot")).toHaveLength(0);
    expect(screen.queryByRole("button", { name: /back/i })).toBeNull();
  });

  it("Other: um projeto, sem paginação", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Other"));

    expect(screen.getByText("AGHA KHAN")).toBeInTheDocument();
    expect(screen.queryAllByTestId("pagination-dot")).toHaveLength(0);
  });

  // ── Voltar para All ─────────────────────────────────────────────────────

  it("após filtrar, clicar 'All' volta a mostrar os 4 projetos", () => {
    render(<Projects />);
    fireEvent.click(screen.getByText("Commercial"));
    expect(screen.queryByText("Southern Sun")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("All"));

    expect(screen.getByText("Southern Sun")).toBeInTheDocument();
    expect(screen.getByText("AGHA KHAN")).toBeInTheDocument();
    expect(screen.queryAllByTestId("pagination-dot")).toHaveLength(0);
  });
});
