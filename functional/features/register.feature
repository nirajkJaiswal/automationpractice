Feature: User Registration

  Scenario Outline: As a new user, I can register 

    Given I am on the login page
    When I register with unique email id
    Then I should see a flash message saying <message>
      
