import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe("Greetings Components Tests", () => {
  test("renders Hello World as a text", () => {
    render(<Greetings />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
