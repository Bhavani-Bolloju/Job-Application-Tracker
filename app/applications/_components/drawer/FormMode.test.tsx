import { render, screen } from "@testing-library/react";
// import ApplicationDrawer from "./ApplicationDrawer";
import { format } from "date-fns";

import userEvent from "@testing-library/user-event";

import createApplication from "@/test/factories/createApplication";

const application = createApplication({
  company: "Microsoft",
  status: "APPLIED",
  role: "font end developer",
  platform: "LinkedIn",
  appliedDate: new Date("2026-07-01"),
  followupDate: new Date("2026-07-10")
});

const onClose = vi.fn();
const onSubmit = vi.fn();

// describe("applicationDrawer", () => {
//   describe("add mode", () => {
//     beforeEach(() => {
//       vi.clearAllMocks();

//       render(
//         <ApplicationDrawer
//           isOpen={true}
//           mode="add"
//           application={null}
//           onClose={onClose}
//         />
//       );
//     });

//     describe("rendering", () => {
//       it("add heading", () => {
//         const header = screen.getByRole("heading", {
//           level: 2,
//           name: /add application/i
//         });

//         expect(header).toBeInTheDocument();
//       });

//       it("empty form fields", () => {
//         const companyInput = screen.getByRole("textbox", {
//           name: /company/i
//         });
//         const roleInput = screen.getByRole("textbox", {
//           name: /role/i
//         });
//         const statusInput = screen.getByRole("combobox", {
//           name: /status/i
//         });

//         const appliedDate = screen.getByRole("button", {
//           name: /applied date/i
//         });
//         const followupDate = screen.getByRole("button", {
//           name: /Follow Up Date/i
//         });

//         const today = format(new Date(), "MMMM do, yyyy");

//         expect(companyInput).toHaveDisplayValue("");
//         expect(roleInput).toHaveDisplayValue("");
//         expect(statusInput).toHaveDisplayValue(/applied/i);
//         expect(appliedDate).toHaveTextContent(today);
//         expect(followupDate).toHaveTextContent(/Pick a date/i);
//       });

//       it("add application button", () => {
//         const addButton = screen.getByRole("button", {
//           name: /add application/i
//         });
//         expect(addButton).toBeInTheDocument();
//       });
//     });

//     describe("user interaction", () => {
//       it("update company input", async () => {
//         const user = userEvent.setup();

//         const companyInput = screen.getByRole("textbox", {
//           name: /company/i
//         });

//         await user.type(companyInput, "Microchip");

//         expect(companyInput).toHaveDisplayValue("Microchip");
//       });

//       it("update status ", async () => {
//         const user = userEvent.setup();

//         const statusInput = screen.getByRole("combobox", {
//           name: /status/i
//         });

//         await user.click(statusInput);

//         expect(statusInput).toHaveTextContent(/APPLIED/i);
//       });

//       it("opens the applied date calendar", async () => {
//         const user = userEvent.setup();

//         const appliedDate = screen.getByRole("button", {
//           name: /applied date/i
//         });

//         await user.click(appliedDate);

//         const calendarGrid = screen.getByRole("grid");

//         expect(calendarGrid).toBeInTheDocument();
//       });

//       it("updates the applied date", async () => {
//         const user = userEvent.setup();

//         const appliedDate = screen.getByRole("button", {
//           name: /applied date/i
//         });

//         await user.click(appliedDate);

//         const july26 = screen.getByRole("button", {
//           name: /Sunday, July 26th, 2026/i
//         });

//         await user.click(july26);

//         expect(appliedDate).toHaveTextContent(/July 26th, 2026/i);
//       });

//       it("closes the drawer when cancel button is called", async () => {
//         const user = userEvent.setup();

//         const cancelButton = screen.getByRole("button", {
//           name: /cancel/i
//         });

//         await user.click(cancelButton);

//         expect(onClose).toHaveBeenCalledTimes(1);
//       });

//       it("calls onsubmit when form is valid", async () => {
//         const user = userEvent.setup();

//         const companyInput = screen.getByRole("textbox", {
//           name: /company/i
//         });

//         const roleInput = screen.getByRole("textbox", {
//           name: /role/i
//         });

//         const statusInput = screen.getByRole("combobox", {
//           name: /status/i
//         });

//         const addButton = screen.getByRole("button", {
//           name: /add application/i
//         });

//         await user.type(companyInput, "Google");
//         await user.type(roleInput, "Frontend Engineer");
//         await user.click(statusInput);

//         await user.click(addButton);

//         screen.debug();

//         expect(onSubmit).toHaveBeenCalledTimes(1)
//         // expect(onSubmit).toHaveBeenCalledWith(
//         //   expect.objectContaining({
//         //     company: "Google",
//         //     role: "Frontend Engineer",
//         //     status: "applied"
//         //   })
//         // );
//       });
//     });
//   });

//   // describe("edit mode", () => {
//   //   beforeEach(() => {
//   //     vi.clearAllMocks();

//   //     render(
//   //       <ApplicationDrawer
//   //         isOpen={true}
//   //         mode="edit"
//   //         application={application}
//   //         onClose={onClose}
//   //       />
//   //     );
//   //   });

//   //   describe("rendering", () => {
//   //     it("Renders the edit heading", () => {
//   //       const header = screen.getByRole("heading", {
//   //         level: 2,
//   //         name: /Microsoft/i
//   //       });

//   //       expect(header).toBeInTheDocument();
//   //     });
//   //     it("Renders Pre-filled form fields", () => {
//   //       const companyInput = screen.getByRole("textbox", {
//   //         name: /company/i
//   //       });
//   //       const roleInput = screen.getByRole("textbox", {
//   //         name: /role/i
//   //       });
//   //       const statusInput = screen.getByRole("combobox", {
//   //         name: /status/i
//   //       });

//   //       const appliedDateValue = format(
//   //         new Date("2026-07-01"),
//   //         "MMMM do, yyyy"
//   //       );
//   //       const followupDateValue = format(
//   //         new Date("2026-07-10"),
//   //         "MMMM do, yyyy"
//   //       );

//   //       const appliedDate = screen.getByRole("button", {
//   //         name: /applied date/i
//   //       });
//   //       const followupDate = screen.getByRole("button", {
//   //         name: /Follow Up Date/i
//   //       });

//   //       expect(companyInput).toHaveDisplayValue(/Microsoft/i);
//   //       expect(roleInput).toHaveDisplayValue(/font end developer/i);
//   //       expect(statusInput).toHaveDisplayValue(/APPLIED/i);
//   //       expect(appliedDate).toHaveTextContent(appliedDateValue);
//   //       expect(followupDate).toHaveTextContent(followupDateValue);
//   //     });
//   //     it("Renders the update application button", () => {
//   //       const addButton = screen.getByRole("button", {
//   //         name: /update/i
//   //       });
//   //       expect(addButton).toBeInTheDocument();
//   //     });
//   //   });
//   // });

//   describe("validation", () => {
//     beforeEach(() => {
//       vi.clearAllMocks();
//       render(
//         <ApplicationDrawer
//           isOpen={true}
//           mode="add"
//           application={null}
//           onClose={onClose}
//         />
//       );
//     });

//     it("shows an error when the company is empty", async () => {
//       const user = userEvent.setup();

//       const addButton = screen.getByRole("button", {
//         name: /add application/i
//       });

//       await user.click(addButton);

//       expect(screen.getByText(/company is required/i)).toBeInTheDocument();
//     });
//   });
// });




