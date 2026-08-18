import { render, screen } from "@testing-library/react";
import { format } from "date-fns";

import FormMode from "./FormMode";

import userEvent from "@testing-library/user-event";

import createApplication from "@/test/createApplication";

const application = createApplication({
  company: "Microsoft",
  status: "APPLIED",
  role: "font end developer",
  platform: "LinkedIn",
  appliedDate: new Date("2026-07-01"),
  followupDate: new Date("2026-07-10")
});

const onClose = vi.fn();
// const onSubmit = vi.fn();

// describe("FormMode", () => {
//   /*add mode */
//   describe("add mode", () => {
//     beforeEach(() => {
//       vi.clearAllMocks();

//       render(<FormMode application={null} onClose={onClose} />);
//     });

// it("calls onsubmit when form is valid", async () => {
//   const user = userEvent.setup();

//   const companyInput = screen.getByRole("textbox", {
//     name: /company/i
//   });

//   const roleInput = screen.getByRole("textbox", {
//     name: /role/i
//   });

//   const statusInput = screen.getByRole("combobox", {
//     name: /status/i
//   });

//   const addButton = screen.getByRole("button", {
//     name: /add application/i
//   });

//   await user.type(companyInput, "Google");
//   await user.type(roleInput, "Frontend Engineer");
//   await user.click(statusInput);

//   await user.click(addButton);

//   screen.debug();

//   expect(onSubmit).toHaveBeenCalledTimes(1);
//   expect(onSubmit).toHaveBeenCalledWith(
//     expect.objectContaining({
//       company: "Google",
//       role: "Frontend Engineer",
//       status: "applied"
//     })
//   );
// });
//   });
// });

/*new formatted tests */

describe("FormMode", () => {
  /*rendering - add/edit */
  describe("rendering", () => {
    /* add mode*/
    describe("add mode", () => {
      beforeEach(() => {
        // render add mode
        render(<FormMode application={null} onClose={onClose} />);
      });

      it("renders empty text fields", () => {
        const companyInput = screen.getByRole("textbox", {
          name: /company/i
        });

        const roleInput = screen.getByRole("textbox", {
          name: /role/i
        });

        expect(companyInput).toHaveDisplayValue("");
        expect(roleInput).toHaveDisplayValue("");
      });

      it("renders default status", () => {
        const statusInput = screen.getByRole("combobox", {
          name: /status/i
        });

        expect(statusInput).toHaveDisplayValue(/applied/i);
      });

      it("renders today's applied date", () => {
        const appliedDate = screen.getByRole("button", {
          name: /applied date/i
        });

        const today = format(new Date(), "MMMM do, yyyy");

        expect(appliedDate).toHaveTextContent(today);
      });

      it("renders empty follow-up date", () => {
        const followupDate = screen.getByRole("button", {
          name: /Follow Up Date/i
        });

        expect(followupDate).toHaveTextContent(/Pick a date/i);
      });

      it("renders Add Application button", () => {
        const addButton = screen.getByRole("button", {
          name: /add application/i
        });
        expect(addButton).toBeInTheDocument();
      });
    });

    /* edit mode*/
    describe("edit mode", () => {
      beforeEach(() => {
        render(<FormMode application={application} onClose={onClose} />);
      });

      it("renders pre-filled text fields", () => {
        const companyInput = screen.getByRole("textbox", {
          name: /company/i
        });
        const roleInput = screen.getByRole("textbox", {
          name: /role/i
        });

        expect(companyInput).toHaveDisplayValue(/Microsoft/i);
        expect(roleInput).toHaveDisplayValue(/font end developer/i);
      });

      it("renders selected status", () => {
        const statusInput = screen.getByRole("combobox", {
          name: /status/i
        });
        expect(statusInput).toHaveDisplayValue(/APPLIED/i);
      });

      it("renders applied date", () => {
        const appliedDateValue = format(
          new Date("2026-07-01"),
          "MMMM do, yyyy"
        );
        const appliedDate = screen.getByRole("button", {
          name: /applied date/i
        });
        expect(appliedDate).toHaveTextContent(appliedDateValue);
      });

      it("renders follow-up date", () => {
        const followupDateValue = format(
          new Date("2026-07-10"),
          "MMMM do, yyyy"
        );

        const followupDate = screen.getByRole("button", {
          name: /Follow Up Date/i
        });
        expect(followupDate).toHaveTextContent(followupDateValue);
      });

      it("renders Update Application button", () => {
        const addButton = screen.getByRole("button", {
          name: /update/i
        });
        expect(addButton).toBeInTheDocument();
      });
    });
  });

  /*user interaction */
  describe("user interaction", () => {
    beforeEach(() => {
      // render add mode
      render(<FormMode application={null} onClose={onClose} />);
    });

    describe("text inputs", () => {
      it("updates company", async () => {
        const user = userEvent.setup();

        const companyInput = screen.getByRole("textbox", {
          name: /company/i
        });

        await user.type(companyInput, "Microchip");

        expect(companyInput).toHaveDisplayValue("Microchip");
      });

      // it("updates role");
    });

    describe("status", () => {
      it("update status", async () => {
        const user = userEvent.setup();

        const statusInput = screen.getByRole("combobox", {
          name: /status/i
        });
        screen.debug(statusInput);

        await user.click(statusInput);

        const option = await screen.findByRole("option", {
          name: /applied/i
        });
        await user.click(option);

        expect(statusInput).toHaveTextContent(/APPLIED/i);
      });
    });

    describe("applied date", () => {
      it("opens calendar", async () => {
        const user = userEvent.setup();

        const appliedDate = screen.getByRole("button", {
          name: /applied date/i
        });

        await user.click(appliedDate);

        const calendarGrid = screen.getByRole("grid");

        expect(calendarGrid).toBeInTheDocument();
      });

      it("updates applied date", async () => {
        const user = userEvent.setup();

        const appliedDate = screen.getByRole("button", {
          name: /applied date/i
        });

        await user.click(appliedDate);

        const july26 = screen.getByRole("button", {
          name: /Sunday, July 26th, 2026/i
        });

        await user.click(july26);

        expect(appliedDate).toHaveTextContent(/July 26th, 2026/i);
      });
    });

    // describe("follow-up date", () => {
    //   it("opens calendar");

    //   it("updates follow-up date");
    // });

    it("close dialog on cancel", async () => {
      const user = userEvent.setup();

      const cancelButton = screen.getByRole("button", {
        name: /cancel/i
      });

      await user.click(cancelButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  /*validation */
  describe("validation", () => {
    beforeEach(() => {
      // render add mode
      render(<FormMode application={null} onClose={onClose} />);
    });
    it("requires company", async () => {
      const user = userEvent.setup();

      const addButton = screen.getByRole("button", {
        name: /add application/i
      });

      await user.click(addButton);

      expect(screen.getByText(/company is required/i)).toBeInTheDocument();
    });

    // it("requires role");

    it("submits when form is valid", async () => {
      const user = userEvent.setup();

      const fetchMock = vi.spyOn(global, "fetch").mockResolvedValue({
        ok: true
      } as Response);

      const companyInput = screen.getByRole("textbox", {
        name: /company/i
      });
      const roleInput = screen.getByRole("textbox", {
        name: /role/i
      });

      const addButton = screen.getByRole("button", {
        name: /add application/i
      });

      await user.type(companyInput, "Microchip");
      await user.type(roleInput, "Font-end engineer");

      await user.click(addButton);

      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });

  /*submission */
  // describe("submission", () => {
  //   describe("add mode", () => {
  //     it("creates a new application");

  //     it("shows success toast");

  //     it("closes the drawer");

  //     it("shows error toast on failure");
  //   });

  //   describe("edit mode", () => {
  //     it("updates an application");

  //     it("shows success toast");

  //     it("closes the drawer");

  //     it("shows error toast on failure");
  //   });
  // });
});

