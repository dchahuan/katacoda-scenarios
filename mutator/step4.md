Now that we have Stryker Mutator installed and learned how to change the config file, we can finally run the mutations. To do this we need to run the following command:
 
   stryker run
 
After you execute this command, you will start to see the log messages appear in the terminal. This includes the number of files to be scanned and the test being run. To run all of the mutations for this test suite it should take about 2 minutes.
 
After Stryker Mutator has finished we will need to refresh <strong>VSCODE</strong> to see the report it generated. The report is in <strong>reports/mutation/html/index.html </strong>. If you want to see this in your own browser, right click the file in Vscode and download it.
 
When you open the file, you will be greeted with the following display:
 
<img src="assets/entry_menu.png"/>
 
Here it shows you the average score of how your tests performed in respect to the number of mutants it was tested on. It also displays the number of blocks of code that were not covered by the tests. To see exactly what mutants and the corresponding lines where the mutant survives, you can click inside the file. This will be discussed in depth on the next step.
 
### *Note: The test suite report is bad because we only took a subset of their tests in order for it to run in an appropriate amount of time.