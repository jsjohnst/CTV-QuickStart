#!/bin/sh

echo "Beginning to install Yahoo! WDK..."
sudo dpkg -i `find /devwidgets -name "ywe-wdk_*_i386.deb"` || (echo "Install failed..."; exit;)
echo "Restarting gnome-panel to enable new start menu entries"
sudo killall gnome-panel
echo "Install completed!"
