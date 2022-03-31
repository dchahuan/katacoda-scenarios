There are two routes to install Stryker mutation to your project. The easiest way to do it is installing the cli that automatically generates some of the files needed to run the mutation testing. 

The first step is to check that the node version is over 12.17. You can check it with the following command:

    node -v

If your node version is not updated, you will need to update to a version over 12.17.

***NOTE: Katacoda does not support node over 12.16 so you need to manually install it in the terminal using the following commands. If your node is above 12.17 you can skip past these commands:

To install nvm run:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

Once that is finished you need to open a new terminal by clicking the +  next to ‘Terminal’, and run

    nvm install 16
    nvm use 16 


After we check we have a compatible node version, we need to install the cli with the following command

    npm install -g stryker-cli

With the cli installed we can start the initialization process with:

    stryker init

This brings up a window to initialize Stryker Mutator to your needs. It asks the following questions:

<ol>
  <li>
    Do you want to install Stryker locally: npm, yarn, no (We choose ‘npm’ for this tutorial)
  </li>
  <li>
    Are you using one of these frameworks? Then select a preset configuration.: angular-cli, create-react-app, vue-cli or None/Other (We choose ‘None’ for this tutorial)
  </li>
  <li>
    Which test runner do you want to use? : jest, mocha, jasmine, cucumber, karma, or command (We are choose ‘Jest’ for this tutorial)
  </li>
  <li>
    Which reporter(s) do you want to use?: html, clear-text, profess, dashboard (We select ‘dashboard’ for this tutorial)
  </li>
  <li>
    Which package manager do you want to use?: npm, yarn (We choose ‘npm’ for this tutorial)
  </li>
  <li>
    What file type do you want for your config file?: .json or .js (We choose ‘.js’ for this tutorial)
  </li>

</ol>  

After following these steps, you already have the basic setup needed to run Stryker Mutator.
