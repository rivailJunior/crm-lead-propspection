import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LeadProvider from "../contexts/lead-context";

export const everyThingWrapper = (props: any) => {
  return (
    <BrowserRouter>
      <LeadProvider {...props} />
    </BrowserRouter>
  );
};

export const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};
