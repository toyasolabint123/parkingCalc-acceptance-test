package uk.co.gamma.parkingCalc.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class parkCalcSteps {
    WebDriver driver;

    @Given("^user is on valet parking list$")
    public void userIsOnValetParkingList() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.shino.de/parkcalc/");
        Select s = new Select(driver.findElement(By.id("ParkingLot")));
        s.selectByValue("Valet");
    }

    @When("^user clicks on Calendar$")
    public void userClicksOnCalendar() {
        driver.findElement(By.cssSelector("body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > a > img")).click();
    }

    @And("^user selects ValetTodayDate and \"([^\"]*)\"$")
    public void userSelectsValetTodayDateAnd(String ValetEntryTime) throws Throwable {
        driver.findElement(By.cssSelector("/html/body/form/table/tbody/tr[7]/td[1]/font/b/a")).click();
        driver.findElement(By.id("StartingTime")).sendKeys(ValetEntryTime);
    }

    @And("^user selects ValetTomorrowDate and \"([^\"]*)\"$")
    public void userSelectsValetTomorrowDateAnd(String ValetExitTime) throws Throwable {
       driver.findElement(By.cssSelector("body > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > font > b > a")).click();
       driver.findElement(By.id("LeavingTime")).sendKeys(ValetExitTime);
    }

    @And("^user clicks on radio button AM$")
    public void userClicksOnRadioButtonAM() {
        driver.findElement(By.name("StartingTimeAMPM")).click();
    }

    @And("^user clicks on Calculate button$")
    public void userClicksOnCalculateButton() {
        driver.findElement(By.name("Submit")).click();
    }

    @Then("^the estimated parking cost should be \"([^\"]*)\"$")
    public void theEstimatedParkingCostShouldBe(String ValetParkingRate) throws Throwable {
        driver.findElement(By.xpath("/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b")).getAttribute(ValetParkingRate);
    }
}
