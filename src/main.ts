import DependencyTrackWidget = require('./dependencyTrackWidget');

VSS.require(['TFS/Dashboards/WidgetHelpers'], WidgetHelpers => {
  WidgetHelpers.IncludeWidgetStyles();
  VSS.register('DependencyTrackWidget', () => {
    const dependencyTrackWidget = new DependencyTrackWidget.DependencyTrackWidget(
      WidgetHelpers
    );
    return dependencyTrackWidget;
  });
  VSS.notifyLoadSucceeded();
});
