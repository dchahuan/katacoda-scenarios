## Configuration
Now that Stryker Mutator is successfully installed, it is time to set up the config file that suits your specific needs. If you simply want the basic default version of Stryker Mutator, then you can skip this step and move on to Step 3.

You start by first creating the config file and you can define your Stryker configuration as either a .js or .json file. (If you use a .js file, it should contain a NodeJS module that exports the configuration object)

Using a stryker.conf.json, it will look something like this:

    {
        "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
        "_comment": "Comments can be put inside `xxx_comment` properties."
    }

Using a stryker.conf.js, it will alternatively look something like this:

    /**
    * @type {import('@stryker-mutator/api/core').StrykerOptions}
    */
    module.exports = {
        // Your config here
    };

Now it is time to select your configuration options. See this <a href="https://stryker-mutator.io/docs/stryker-js/configuration">link</a> which details all possible configurations.

## Example .json Configuration that specifies running mocha tests with the mocha test runner.

    {
        "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
        "testRunner": "mocha",
        "coverageAnalysis": "perTest"
    }

## Example .js Configuration

    /**
    * @type {import('@stryker-mutator/api/core').StrykerOptions}
    */
    module.exports = {
    {
        "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
        "testRunner": "mocha",
        "coverageAnalysis": "perTest"
    }};