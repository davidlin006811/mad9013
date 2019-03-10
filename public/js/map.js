function initialize() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(37.97918, 23.71665), 13);
        map.setUIToDefault();
    }
}