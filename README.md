# Salesforce Profile Modifier Extension 

[![Logo](./images/logo.png)](https://marketplace.visualstudio.com/items?itemName=SeanRussell.salesforce-profile-modifier)

**Note that this is not official from Salesforce. I created this extension to help my own development workflow for more easily modifying salesforce profile metadata files.**

Provides ability to add, edit, and remove Apex Class, Visualforce Page, Object, and Field metadata from salesforce profiles within an SFDX project structure. This extension requires users to have SalesforceDX CLI and also profile-modifier-plugin(run **sfdx plugins:install profile-modifier-plugin**) for SalesforceDX CLI.

# Requirements

This vscode extension works only once you have installed Salesforce CLI and a profile-modifier-plugin(run **sfdx plugins:install profile-modifier-plugin** on your terminal) that has api for all the commands this extension leverages.

1. Install SalesforceDX CLI from https://developer.salesforce.com/tools/sfdxcli based on your operating system.
2. Install profile-modifier-plugin using the command `sfdx plugins:install profile-modifier-plugin`.Note if you have already then make sure to update to latest always using `sfdx plugins:update`
3. VScode version 1.30 and beyond
4. You have project workspace set up and have sfdx-project.json file in the root folder. 
5. Extension activation is shown in footer with a rocket symbol. Once extension is active authorize the project if you havent and enjoy faster deploys

# Features

1. **Add, edit, or remove Apex class metadata from profiles**
    ![Logo](./images/addclass.png)

2. **Add, edit, or remove Visualforce Page metadata from profiles**
    ![Logo](./images/addpage.png)

3. **Add, edit, or remove Object metadata from profiles**
    ![Logo](./images/addobject.png)

4. **Add, edit, or remove Field metadata from profiles**
    ![Logo](./images/addfield.png)

# Release Notes
### 0.0.1

1. Provides the ability to add, edit, and remove Apex class, Visualforce page, Object, and Field metadata from profiles

-----------------------------------------------------------------------------------------------------------

### For more information and contribution to project visit the below repositories and use issues tab to log any feedback or issues.

* [Profile Modifier Plugin](https://github.com/seanrussell/profile-modifier-plugin)
