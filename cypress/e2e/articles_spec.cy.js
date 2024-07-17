import { MOST_POPULAR_ARTICLES_URL } from "../../src/utils/constants";

describe("Article List", () => {
  beforeEach(() => {
    // Intercept API call to mock response
    cy.intercept(
      "GET",
      `${MOST_POPULAR_ARTICLES_URL}${process.env.REACT_APP_API_SECRET_KEY}`,
      {
        fixture: "most_popular_articles.json",
      },
    ).as("getMostPopularArticles");
    cy.visit("/");
  });

  it("should display list of articles and show details on click", () => {
    // Wait for the API call to complete and check if articles are displayed
    cy.wait("@getMostPopularArticles").then(() => {
      cy.get(".list-group").find(".list-group-item").should("have.length", 3);
      // Click on an article to select it
      cy.contains("Title 1").click();
      cy.contains("Description 1").should("exist");

      // Click on another article to select it
      cy.contains("Title 2").click();
      cy.contains("Description 2").should("exist");
    });
  });
});
