import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("intial conditions", () => {
  render(<SummaryForm />);
  const termsCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const orderButton = screen.getByRole("button", { name: /confirm order/i });
  expect(termsCheckbox).not.toBeChecked();
  expect(orderButton).toBeDisabled();
});
test("testing terms checkbox and submit button", () => {
  render(<SummaryForm />);
  const termsCheckbox = screen.getByRole("checkbox");
  const orderButton = screen.getByRole("button");
  userEvent.click(termsCheckbox);
  expect(orderButton).toBeEnabled();
  userEvent.click(termsCheckbox);
  expect(orderButton).toBeDisabled();
});
test("popover responds to hover", async () => {
  render(<SummaryForm />);
  //popout starts out hidden
  const nullPopout = screen.queryByText(
    /no icecream will actually be delivered/i
  );
  expect(nullPopout).not.toBeInTheDocument();
  //popout appearns upon hovering terms and conditions
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  const popOut = screen.getByText(/no icecream will actually be delivered/i);
  expect(popOut).toBeInTheDocument();
  //popout disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no icecream will actually be delivered/i)
  );
  //   expect(nullPopoutAgain).not.toBeInTheDocument();
});
