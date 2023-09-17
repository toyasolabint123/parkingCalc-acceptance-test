$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("parkingCalc.feature");
formatter.feature({
  "line": 1,
  "name": "ParkingCalculator",
  "description": "",
  "id": "parkingcalculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create valet parking list",
  "description": "",
  "id": "parkingcalculator;create-valet-parking-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValetParking"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on valet parking list",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Calendar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user selects ValetTodayDate and \"\u003cValetEntryTime\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects ValetTomorrowDate and \"\u003cValetExitTime\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on radio button AM",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the estimated parking cost should be \"\u003cValetParkingRate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "parkingcalculator;create-valet-parking-list;",
  "rows": [
    {
      "cells": [
        "ValetEntryTime",
        "ValetExitTime",
        "ValetParkingRate"
      ],
      "line": 15,
      "id": "parkingcalculator;create-valet-parking-list;;1"
    },
    {
      "cells": [
        "17.10",
        "17.10",
        "18"
      ],
      "line": 16,
      "id": "parkingcalculator;create-valet-parking-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create valet parking list",
  "description": "",
  "id": "parkingcalculator;create-valet-parking-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValetParking"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on valet parking list",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Calendar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user selects ValetTodayDate and \"17.10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects ValetTomorrowDate and \"17.10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on radio button AM",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the estimated parking cost should be \"18\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "parkCalcSteps.userIsOnValetParkingList()"
});
formatter.result({
  "duration": 5260782500,
  "status": "passed"
});
formatter.match({
  "location": "parkCalcSteps.userClicksOnCalendar()"
});
formatter.result({
  "duration": 254430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.10",
      "offset": 33
    }
  ],
  "location": "parkCalcSteps.userSelectsValetTodayDateAnd(String)"
});
formatter.result({
  "duration": 93470900,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d114.0.5735.199)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_382-382\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a0d08a35c5103edff05c776036087f68, findElement {using\u003dcss selector, value\u003d/html/body/form/table/tbody/tr[7]/td[1]/font/b/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\toyas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55318}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55318/devtoo..., se:cdpVersion: 114.0.5735.199, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a0d08a35c5103edff05c776036087f68\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:199)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:132)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat uk.co.gamma.parkingCalc.stepDefinition.parkCalcSteps.userSelectsValetTodayDateAnd(parkCalcSteps.java:35)\r\n\tat ✽.And user selects ValetTodayDate and \"17.10\"(parkingCalc.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.10",
      "offset": 36
    }
  ],
  "location": "parkCalcSteps.userSelectsValetTomorrowDateAnd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parkCalcSteps.userClicksOnRadioButtonAM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parkCalcSteps.userClicksOnCalculateButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 38
    }
  ],
  "location": "parkCalcSteps.theEstimatedParkingCostShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
});