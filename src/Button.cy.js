import React from "react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("works", () => {
    const stubbedAction = cy.stub().as("onClickAction");
    const buttonLabel = "Click me";
    cy.mount(<Button action={stubbedAction}>{buttonLabel}</Button>);
    cy.get("button").click();
    cy.get("button").contains(buttonLabel);
    cy.get("@onClickAction").should("have.been.calledOnce");
  });
});
