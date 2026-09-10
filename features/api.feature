Feature: REST API Validation

  As a QA engineer
  I want to validate backend API endpoints
  So that I can verify service functionality independently of the UI

  Scenario: Retrieve a resource successfully
    Given the API service is available
    When a GET request is sent to retrieve a resource
    Then the response status code should be 200
    And the response body should contain the expected resource information

  Scenario: Create a new resource successfully
    Given the API service is available
    And a valid request payload is prepared
    When a POST request is sent to create a resource
    Then the response should indicate successful creation
    And the response body should contain the submitted data
