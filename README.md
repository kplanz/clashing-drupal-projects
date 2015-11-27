# Clashing Drupal Projects

*Did you ever had the problem that two of your many installed Drupal modules caused serious bugs on your site?* One can spend hours narrowing down the problem and finally finding out that some modules in their installed version are just incompatible. Instead of looking through endless issue queues there should be *one* place where you can find out if two or more Drupal projects (modules, themes, etc.) are incompatible. *This repository aims to be a start for such a centralized incompatibility database.*

> **NOTE**: *This is a work in progress and any input is welcome :) If you have any suggestions regarding the data format or the contribution workflow feel free to open an issue.*

## Data format

We will create YAML files for each incompatibility (aka *clash*).

Field  | Description
-----  | ------------
`projects`  | Array of projects, where the key is the project short name and the value is the version. *(Should we support version ranges?)*
`status`  | One of `active`, `resolved`. *(Do we need more?)*
`severity`  | One of `minor`, `major`, `critical`.
`issue`  | Link to a Drupal.org issue.
`note`  | Short description of the incompatibility (especially if there is no issue specified).



The file name will be the GitHub issue / pull request number.

**Example (1.yml)**
```yml
projects:
  - omega: 7.x-4.4
  - mailsystem: 7.x-2.34
status: active
severity: high
issue: https://www.drupal.org/node/2051135
note: 'Further information and patches can be found in the issue.'
```

This repository also contains a simple node script (`scripts/create_json.js`) to convert all the YAML files to a single JSON file. This may be useful to provide some kind of API in the future.  
It would be really cool if we then could implement some kind of website where one can search for modules and find incompatibilities.

I'm also planning to create a Drupal module which checks for possible incompatibilities in your Drupal installation.

## Contribute incompatibilities

There are two ways of reporting an incompatibility. Either create a GitHub issue and state all needed information there or create a pull request and simply provide the YAML file.

### Create an issue

1. Title: "Clash: *[module1]* + *[module2]* + ..."
2. Try to state all needed information (see [Data format](#data-format))

After the issue has been reviewed the corresponding yaml file will be committed.

### Create a pull request

1. Fork this repository
2. Create YAML file with filename `[PR#].yml` in folder `clashes`
3. Create pull request
