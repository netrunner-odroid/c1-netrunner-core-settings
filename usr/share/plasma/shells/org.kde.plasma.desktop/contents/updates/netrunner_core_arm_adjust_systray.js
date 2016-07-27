pids = panelIds;
for (i = 0; i < pids.length; ++i) { //search through the panels
  panel = panelById(pids[i]);
  if (!panel) continue;
  ids = panel.widgetIds;
  for (j = 0; j < ids.length; ++j) { //search through the widgets for systray
    widget = panel.widgetById(ids[j]);
    if (!widget || widget.type != "org.kde.plasma.systemtray") {
      continue;
    }
    widget.currentConfigGroup = ["General"]
    widget.writeConfig("extraItems","org.kde.plasma.devicenotifier,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.volume,org.kde.discovernotifier,org.kde.plasma.diskquota")

  }
}
