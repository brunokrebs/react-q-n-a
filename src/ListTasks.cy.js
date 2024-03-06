import React from "react";
import { ListTasks } from "./ListTasks";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("<ListTasks />", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/", {
      statusCode: 200,
      body: [
        {
          _id: "1709684503541",
          title: "asdfasdf",
          effort: "111",
          archived: true,
        },
        {
          _id: "1709686683415",
          title: "buy stuff",
          effort: "500",
          archived: true,
        },
        {
          _id: "1709686796353",
          title: "nice",
          effort: "100",
          archived: false,
        },
      ],
    }).as("getResource");
  });

  it("renders", () => {
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <ListTasks />
      </QueryClientProvider>,
    );
  });
});
