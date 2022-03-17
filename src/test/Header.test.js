import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("render title in header", () => {
  render(<Header />);
  const title = screen.getByText(/Revel pics/i);
  expect(title).toBeTruthy();
});