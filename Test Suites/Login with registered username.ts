<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login with registered username</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>b6a5f579-b525-4dcb-b30e-0f07bdbc88c8</testSuiteGuid>
   <testCaseLink>
      <guid>56368ab4-b78e-4f7f-8545-b93b35e876bd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'bob@example.com'</defaultValue>
         <description></description>
         <id>489cddbc-bb70-4553-8fd8-9546688f9cfa</id>
         <masked>false</masked>
         <name>usernames</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC01 - Login with registered username - Positive</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9d7fc4e2-fbb2-4452-a22c-dd108a120517</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/usernames</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>9d7fc4e2-fbb2-4452-a22c-dd108a120517</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>usernames</value>
         <variableId>489cddbc-bb70-4553-8fd8-9546688f9cfa</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
