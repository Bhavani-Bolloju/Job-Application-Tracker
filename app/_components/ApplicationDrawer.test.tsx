import { render, screen } from "@testing-library/react";
import ApplicationDrawer from "./ApplicationDrawer";



import createApplication from "@/test/createApplication";

import FormMode from "../applications/_components/drawer/FormMode";

vi.mock("../applications/_components/drawer/FormMode", () => ({
  default: vi.fn(() => <div>Mock FormMode</div>)
}));

const application = createApplication({
  company: "Microsoft",
  status: "APPLIED",
  role: "font end developer",
  platform: "LinkedIn",
  appliedDate: new Date("2026-07-01"),
  followupDate: new Date("2026-07-10")
});

const onClose = vi.fn();

const mockedFormMode = vi.mocked(FormMode)



describe("applicationDrawer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("Renders the add heading in add mode", () => {
    render(
      <ApplicationDrawer
        isOpen={true}
        mode="add"
        application={null}
        onClose={onClose}
      />
    );

    const header = screen.getByRole("heading", {
      level: 2,
      name: /add application/i
    });

    expect(header).toBeInTheDocument();
  });

  it("Renders the edit heading in edit mode", () => {
    render(
      <ApplicationDrawer
        isOpen={true}
        mode="edit"
        application={application}
        onClose={onClose}
      />
    );

    const header = screen.getByRole("heading", {
      level: 2,
      name: /Microsoft/i
    });

    expect(header).toBeInTheDocument();
  });

  it("passes props to the form component", () => {
    render(
      <ApplicationDrawer
        isOpen={true}
        mode="edit"
        application={application}
        onClose={onClose}
      />
    );

    expect(mockedFormMode.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        application,
        onClose
      })
    );
  });
});






