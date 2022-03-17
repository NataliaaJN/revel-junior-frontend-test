import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders button", () => {
  render(<Button />);
  const btnEl = screen.getByRole("button", { name: /Load more/i });
  fireEvent.click(btnEl);
});
