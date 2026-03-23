import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/Header";

// Next.js Image precisa de mock em ambiente jsdom
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe("Header", () => {
  it("renderiza o logo ETTIC Construction", () => {
    render(<Header />);
    expect(screen.getByAltText("ETTIC Construction")).toBeInTheDocument();
  });

  it("logo aponta para #home", () => {
    render(<Header />);
    const logoLink = screen.getByAltText("ETTIC Construction").closest("a");
    expect(logoLink).toHaveAttribute("href", "#home");
  });

  it("exibe todos os links de navegação desktop", () => {
    render(<Header />);
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("About Us")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Projects")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Services")[0]).toBeInTheDocument();
  });

  it("exibe o link 'Contact Us'", () => {
    render(<Header />);
    expect(screen.getAllByText("Contact Us")[0]).toBeInTheDocument();
  });

  it("link Contact Us aponta para #contact", () => {
    render(<Header />);
    const contactLinks = screen
      .getAllByText("Contact Us")
      .map((el) => el.closest("a"));
    expect(contactLinks[0]).toHaveAttribute("href", "#contact");
  });

  it("menu mobile está fechado inicialmente", () => {
    render(<Header />);
    // Deve haver apenas os links do desktop (aria-hidden em mobile)
    const allHomeLinks = screen.getAllByText("Home");
    expect(allHomeLinks).toHaveLength(1);
  });

  it("abre o menu mobile ao clicar no botão hambúrguer", () => {
    render(<Header />);
    const menuBtn = screen.getByLabelText("Menu");
    fireEvent.click(menuBtn);
    // Após abrir, deve haver 2 ocorrências de 'Home' (desktop + mobile)
    const allHomeLinks = screen.getAllByText("Home");
    expect(allHomeLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("botão hambúrguer tem aria-label 'Menu'", () => {
    render(<Header />);
    expect(screen.getByLabelText("Menu")).toBeInTheDocument();
  });
});
