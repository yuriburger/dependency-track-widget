export class DependencyTrackWidget {
  constructor(public WidgetHelpers) {}

  public load(widgetSettings) {
    return this.showWidget(widgetSettings);
  }

  public reload(widgetSettings) {
    return this.showWidget(widgetSettings);
  }

  private showWidget(widgetSettings) {
    const $title = $('h2.title');
    $title.text(widgetSettings.name);
    const $container = $('#deptrack-info-container');
    $container.empty();

    // Extract settings from widgetSettings.customSettings and ask user to configure one if none is found
    let settings = JSON.parse(widgetSettings.customSettings.data);
    if (
      !settings ||
      !settings.projectKey ||
      !settings.deptrackUrl ||
      !settings.deptrackApiKey
    ) {
      $container.append(
        $('<div>').text('Sorry nothing to show, please configure the settings')
      );
      return this.WidgetHelpers.WidgetStatusHelper.Success();
    }

    try {
      $.ajax({
        dataType: 'json',
        headers: {
          'X-Api-Key': settings.deptrackApiKey
        },
        url: settings.deptrackUrl + settings.projectKey
      }).done(function(data) {
        if (data) {
          $.each(data, function(i, val) {
            const unix_timestamp = val.metrics.lastOccurrence;
            const date = new Date(unix_timestamp);

            const formattedDate =
              date.getDate() +
              '-' +
              (date.getMonth() + 1) +
              '-' +
              date.getFullYear() +
              ' @ ' +
              date.getHours() +
              ':' +
              date.getMinutes();

            $container
              .append($('<div style="clear:both">').text(val.name))
              .append($('<div>').text(formattedDate))
              .append(
                $('<div class="metrics">')
                  .append(
                    $('<div>')
                      .addClass('box red')
                      .text(val.metrics.critical)
                  )
                  .append(
                    $('<div>')
                      .addClass('box orange')
                      .text(val.metrics.high)
                  )
                  .append(
                    $('<div>')
                      .addClass('box yellow')
                      .text(val.metrics.medium)
                  )
                  .append(
                    $('<div>')
                      .addClass('box green')
                      .text(val.metrics.low)
                  )
                  .append(
                    $('<div>')
                      .addClass('box grey')
                      .text(val.metrics.unassigned)
                  )
              );
          });
        }
      });
      return this.WidgetHelpers.WidgetStatusHelper.Success();
    } catch (e) {
      console.log(e);
    }
  }
}
