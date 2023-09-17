Feature: ParkingCalculator

  @ValetParking
  Scenario Outline: Create valet parking list
    Given user is on valet parking list
    When user clicks on Calendar
    And user selects ValetTodayDate and "<ValetEntryTime>"
    And user selects ValetTomorrowDate and "<ValetExitTime>"
    And user clicks on radio button AM
    And user clicks on Calculate button
    Then the estimated parking cost should be "<ValetParkingRate>"


    Examples:
      | ValetEntryTime | ValetExitTime | ValetParkingRate|
      | 17.10           | 17.10         |  18            |


