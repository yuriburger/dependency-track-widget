VSS.require('TFS/Dashboards/WidgetHelpers', function(WidgetHelpers) {
  WidgetHelpers.IncludeWidgetConfigurationStyles();
  VSS.register('DependencyTrackWidget-Configuration', function() {
    const $projectKey = $('#project-picker-input');
    const $deptrackUrl = $('#deptrack-url-input');
    const $deptrackApiKey = $('#deptrack-api-key-input');

    return {
      load: function(widgetSettings, widgetConfigurationContext) {
        const settings = JSON.parse(widgetSettings.customSettings.data);

        function configurationChange() {
          const customSettings = {
            data: JSON.stringify({
              projectKey: $projectKey.val(),
              deptrackUrl: $deptrackUrl.val(),
              deptrackApiKey: $deptrackApiKey.val()
            })
          };
          const eventName = WidgetHelpers.WidgetEvent.ConfigurationChange;
          const eventArgs = WidgetHelpers.WidgetEvent.Args(customSettings);
          widgetConfigurationContext.notify(eventName, eventArgs);
        }

        if (settings) {
          if (settings.projectKey) {
            $projectKey.val(settings.projectKey);
          }
          if (settings.deptrackUrl) {
            $deptrackUrl.val(settings.deptrackUrl);
          }
          if (settings.deptrackApiKey) {
            $deptrackApiKey.val(settings.deptrackApiKey);
          }
        }
        $projectKey.on('change', function() {
          configurationChange();
        });
        $deptrackUrl.on('change', function() {
          configurationChange();
        });
        $deptrackApiKey.on('change', function() {
          configurationChange();
        });

        return WidgetHelpers.WidgetStatusHelper.Success();
      },
      onSave: function() {
        const customSettings = {
          data: JSON.stringify({
            projectKey: $projectKey.val(),
            deptrackUrl: $deptrackUrl.val(),
            deptrackApiKey: $deptrackApiKey.val()
          })
        };
        return WidgetHelpers.WidgetConfigurationSave.Valid(customSettings);
      }
    };
  });
  VSS.notifyLoadSucceeded();
});
