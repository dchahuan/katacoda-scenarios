# Introduction

## What is mutation testing?
Mutation testing is a form of testing where testers change components of code to ensure that your tests are robust and are able to detect the changes. These changes are purposely creating bugs also known as mutants simply for the purpose of ensuring the quality of your test suite. It does not test the actual application.

These mutations are usually used for unit testing and the goal is for your tests to be able to detect all of the mutated code. Your test suite is run for each mutant and if the tests fail then the mutant is killed. On the contrary, if the tests succeed then the mutant survived. The more mutants that are killed, the more effective your tests are.

## Introducing Stryker Mutator:
Stryker Mutator is a tool that implements this mutation testing concept into your source code. The design of the tool allows you to implement mutation testing on three platforms as of now: Javascript (StrykerJS), C# (Stryker.NET), and Scala (Stryker4s).  

In this tutorial, we will focus on StrykerJS, but you can find more about the other two platforms here: <a href="https://stryker-mutator.io/docs/stryker-net/introduction ">Stryker.NET</a>, <a href="https://stryker-mutator.io/docs/stryker4s/getting-started">Stryker4s</a>

## Why Stryker Mutator matters for Devops:
Robust testing is vital for Devops and delivering high quality applications and services. Stryker Mutator plays a key role in ensuring the test suite written for your application is thoroughly testing all possible aspects of the project.

With Stryker Mutator, you are able to rapidly deliver reliable code with confidence. Both development and operation teams rely on quality testing throughout the life cycle and with this tool one is able to quantitatively know how effective their tests are.
