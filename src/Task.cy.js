import React from "react";
import { Task } from "./Task";

describe("<Task />", () => {
  it("works", () => {
    const stubbedDelete = cy.stub().as('onDelete');
    const task = { _id: "1", title: "Do something" };
    cy.mount(<Task deleteTask={stubbedDelete} task={task} />);
    cy.get("div").contains("Task Description");
    cy.get("div").contains(task.title);
    cy.get("button").click();
    cy.get('@onDelete').should('have.been.calledOnce');
  });
});
