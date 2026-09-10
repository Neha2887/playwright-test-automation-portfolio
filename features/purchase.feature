Feature: End-to-End Purchase Flow

  As a customer
  I want to complete a product purchase
  So that I can verify the complete shopping workflow

  Scenario: User completes a product purchase
    Given the user is on the login page
    When the user logs in with valid credentials
    And the user adds a product to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    And the user enters valid customer information
    And the user completes the order
    Then an order confirmation message should be displayed
