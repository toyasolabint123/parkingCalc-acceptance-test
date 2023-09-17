package uk.co.gamma.parkingCalc.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature",
        glue = {"uk.co.gamma.parkingCalc.stepDefinition"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@ValetParking"}
)

public class TestRunner {
}
