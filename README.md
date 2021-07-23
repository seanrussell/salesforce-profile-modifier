# Salesforce Profile Modifier Extension 

[![Logo](./images/logo.png)](https://marketplace.visualstudio.com/items?itemName=SeanRussell.salesforce-profile-modifier)

**Note that this plugin is not officially supported by Salesforce. I created this extension to ease the repetitiveness of having to add metadata to profiles.**

Provides ability to add, edit, and remove Apex Class, Visualforce Page, Object, and Field metadata from salesforce profiles within an SFDX project structure. This extension requires users to have SalesforceDX CLI and also profile-modifier-plugin (run **sfdx plugins:install profile-modifier-plugin**) for SalesforceDX CLI.

![Demo](./images/demo.gif)

# Prerequisites

This vscode extension works only once you have installed Salesforce CLI and a profile-modifier-plugin (run **sfdx plugins:install profile-modifier-plugin** on your terminal) that has api for all the commands this extension leverages.

1. Install SalesforceDX CLI from https://developer.salesforce.com/tools/sfdxcli based on your operating system.
2. Install profile-modifier-plugin using the command `sfdx plugins:install profile-modifier-plugin`. Note that if you have already installed the plugin, then make sure to update to latest always using `sfdx plugins:update`
3. VScode version 1.56 and beyond
4. You have project workspace set up and have sfdx-project.json file in the root folder. 
5. Extension is shown in the right hand menu with the icon ![Logo](https://github.com/seanrussell/salesforce-profile-modifier/blob/master/images/preview.png)

# Features

 1. **Add, edit, or remove Apex class metadata from profiles**
 2. **Add, edit, or remove Visualforce Page metadata from profiles**
 3. **Add, edit, or remove Object metadata from profiles**
 4. **Add, edit, or remove Field metadata from profiles**

# UI Panel fields

* Action to take
    * This is a dropdown from which you select the action you want to perform: Add, Edit, or Delete metadata.

* Metadata to modify
    * This is a dropdown from which you select the type of metadata you want to add, edit or remove. Current available options are: Apex Class, Visualforce Page, Object, and Field.

* Metadata name
    * This is a text input where you enter the name of the metadata that is to be added, edited, or removed.

* Rename to
    * This is a text input where you enter the name of the metadata that you want the value in Metadata name (above) to be renamed to. This text input is only available when the Action to take (above) is Edit.

* Add object fields too?
    * This is a checkbox that indicates that you want to add all the fields of an object to the profile in addition to the object. By default, the extension will look in the package locations specified in the project sfdx-project.json file when looking for fields within an object to add. If checked, the fields that will be added will have readable and editable enabled. In addition, required fields and master detail fields will not be added.

* Permissions
    * This contains a list of checkboxes corresponding to the permissions available for objects and fields. Object metadata provides the ability to specify whether the object is readable, editable, creatable, deletable and whether you can view all records and modify all records. For fields, the available options are readable and editable.

* Enabled
    * This is a checkbox that indicates whether an Apex Class or Visualforce Page should be enabled. This is only available when the Metadata to modify is either Apex Class or Visualforce Page.

* Profile to modify
    * This refers to a list of multi-select boxes from which to select the names of the Salesforce profiles that are to be modified based on the values of the other options on the UI panel. The extension looks at the packages specified in sfdx-project.json in determining which profile folders and files display in the UI panel.

* Alphabetize
    * This is a checkbox that indicates whether or not the profile file xml elements should be alphabetized after the profile is modified. 

# Release Notes
### 0.0.1

1. Intial release of extension. Provides the ability to add, edit, and remove Apex class, Visualforce page, Object, and Field metadata from profiles

-----------------------------------------------------------------------------------------------------------

### For more information on the SFDX CLI plugin that this extension makes use of, please see:

* [Profile Modifier Plugin](https://github.com/seanrussell/profile-modifier-plugin)
