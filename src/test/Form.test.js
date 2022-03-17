import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("render elements in Form", () => {
  render(<Form />);
  const inputEl = screen.getByPlaceholderText(/Search by author/i);
  
  fireEvent.change(inputEl, {target: {value: ""}});
});
