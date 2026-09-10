Feature: Shopping Cart

  As a logged-in user
  I want to add products to my cart
  So that I can purchase them later

  Scenario: Add a product to the shopping cart
    Given the user is successfully logged in
    And the Products page is displayed
    When the user adds the first available product to the cart
    Then the shopping cart badge should display "1"
