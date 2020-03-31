## Dependency Track Widget

Widget to show the Dependency Track status for projects

### Quick steps to get started

1. Setup one or more projects with a tag in Dependency Track. This widgets shows information on all projects with this tag.

![](/static/images/screen4.png)

2. Edit your Azure DevOps dashboard
3. Select the Dependency Track Widget

![](/static/images/screen2.png)

4. Enter a title, a project tag, the URL for your Dependency Track server and an API key with at least the 'VIEW_PORTFOLIO' and 'VULNERABILITY_ANALYSIS' permissions. See the official Dependency Track [docs](https://docs.dependencytrack.org/) for more information.

![](/static/images/screen3.png)

5. Add and arrange one or more of the widgets on your dashboard.

### Known issue(s)

- CORS issue with the default configuration with the Dependency Track docker image: It returns an incorrect string of CORS Allowed Methods causing browsers to fail the CORS preflight check. Workaround: configure a correct string, i.e. "alpine.cors.allow.methods=GET, POST, PUT, DELETE, OPTIONS"
- Built using the VSS SDK: This widget was built using the "old" VSS SDK, because the "new" Azure DevOps SDK does not support widgets yet. More info: [Azure DevOps Extension Samples](https://github.com/microsoft/azure-devops-extension-sample).

### Learn More

The [source](https://github.com/yuriburger/dependency-track-widget) to this extension is available. Feel free to take, fork, and improve!

### Minimum supported environments

- Azure DevOps

### Feedback

Feedback welcome: add a review here or file any issues on GitHub [Issues](https://github.com/yuriburger/dependency-track-widget/issues).
