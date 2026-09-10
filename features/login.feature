Feature: User Login

  As a user
  I want to log in to the application
  So that I can access the products page

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username
    And the user enters a valid password
    And the user clicks the Login button
    Then the user should be redirected to the Products page
    And the Products page should be displayed

  Scenario: Login fails with invalid credentials
    Given the user is on the login page
    When the user enters an invalid username
    And the user enters an invalid password
    And the user clicks the Login button
    Then an authentication error message should be displayed
