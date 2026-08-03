import { render, screen } from "@testing-library/react";
import ApplicationHeader from "./ApplicationHeader";
import userEvent from "@testing-library/user-event";

vi.mock("@/app/_components/ApplicationDrawer", () => ({
  default: () => <div data-testid="application-drawer" />
}));

const onAddNew = vi.fn();

beforeEach(() => {
  render(
    <ApplicationHeader
      onAddNew={onAddNew}
      isOpen={false}
      mode="add"
      application={null}
      onClose={vi.fn()}
    />
  );
});

describe("applicationHeader", () => {
  describe("rendering", () => {
    it("the page heading", () => {
      const header = screen.getByRole("heading", {
        level: 1,
        name: /my applications/i
      });

      expect(header).toBeInTheDocument();
    });

    it("calls onAddNew when the add application button is clicked", async () => {
      const user = userEvent.setup();

      const addButton = screen.getByRole("button", {
        name: /Add application/i
      });

      await user.click(addButton);

      expect(onAddNew).toHaveBeenCalledTimes(1);
    });
  });
});

