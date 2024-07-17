describe("Articles List and Details", () => {
  const articles = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
  ];

  it("should display list of articles and show details on click", () => {
    cy.visit("/"); // Assuming your app starts at root URL

    // Verify list of articles
    cy.get(".list-group-item").should("have.length", articles.length);
    articles.forEach((article) => {
      cy.contains(article.title).should("exist");
    });

    // Click on an article to select it
    cy.contains("Article 1").click();
    cy.contains("Article 1").should("have.class", "active"); // Assuming active class is added on selection
    cy.contains("Content of Article 1").should("exist");

    // Click on another article to select it
    cy.contains("Article 2").click();
    cy.contains("Article 2").should("have.class", "active");
    cy.contains("Content of Article 2").should("exist");
  });
});
