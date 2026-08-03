import { render, screen } from "@testing-library/react";
import ApplicationDrawer from "./ApplicationDrawer";
import { format } from "date-fns";

const onClose = vi.fn();

describe("applicationDrawer", () => {
  describe("add mode", () => {
    beforeEach(() => {
      vi.clearAllMocks();

      render(
        <ApplicationDrawer
          isOpen={true}
          mode="add"
          application={null}
          onClose={onClose}
        />
      );

      screen.debug();
    });

    it("Renders the add heading", () => {
      const header = screen.getByRole("heading", {
        level: 2,
        name: /add application/i
      });

      expect(header).toBeInTheDocument();
    });

    it("Renders empty form fields", () => {
      const companyInput = screen.getByRole("textbox", {
        name: /company/i
      });
      const roleInput = screen.getByRole("textbox", {
        name: /role/i
      });
      const statusInput = screen.getByRole("combobox", {
        name: /status/i
      });

      const appliedDate = screen.getByRole("button", {
        name: /applied date/i
      });
      const followupDate = screen.getByRole("button", {
        name: /Follow Up Date/i
      });

      const today = format(new Date(), "MMMM do, yyyy");

      expect(companyInput).toHaveDisplayValue("");
      expect(roleInput).toHaveDisplayValue("");
      expect(statusInput).toHaveDisplayValue(/applied/i);
      expect(appliedDate).toHaveTextContent(today);
      expect(followupDate).toHaveTextContent(/Pick a date/i);
    });

    it("Renders add application button", () => {
      const addButton = screen.getByRole("button", {
        name: /add application/i
      });
      expect(addButton).toBeInTheDocument();
    });
  });
  // describe("edit mode", () => {});
});

