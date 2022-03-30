There are two routes to install Stryker mutation to your project. The easiest way to do it is installing the cli that automatically generates some of the files needed to run the mutation testing. So the first step is to check the node version, it needs to be over 12.17. You can check it with the following command:

    node -v

***NOTE: Katacoda does not support node over 12.16 so you need to manually install it in the terminal using the following commands. If your node is above 12.17 you can skip past these commands:

To install nvm
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
After a few seconds you need to open a new terminal, and run
	nvm install 16
nvm use 16 


After we check we have a compatible node version, we need to install the cli with the following command

    npm install -g stryker-cli

With the cli installed we can start the initialization process with:
stryker init

Here we are ask the following questions:

<ol>
  <li>
    Which package manage do you use (npm or yarn )
  </li>
  <li>
    If you are using angular, react or vue framework or none (We choose none for this tutorial)
  </li>
  <li>
    The testing framework (jest, mocha, cucumber, jasmin or karma). For this example we are choosing jest
  </li>
  <li>
    How would you like to see the report ( for this tutorial we don’t use the dashboard option)
  </li>

  <li>
   In what format would you like the config file (.json or .js) (This is personal preference we choose .js)
  </li>

</ol>  

Following this steps you already have the basic setup you need to run mutation testing.
