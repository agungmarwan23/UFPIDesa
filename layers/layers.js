var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DesaTinggi_1 = new ol.format.GeoJSON();
var features_DesaTinggi_1 = format_DesaTinggi_1.readFeatures(json_DesaTinggi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaTinggi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaTinggi_1.addFeatures(features_DesaTinggi_1);
var lyr_DesaTinggi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaTinggi_1, 
                style: style_DesaTinggi_1,
                popuplayertitle: 'Desa Tinggi',
                interactive: true,
    title: 'Desa Tinggi<br />\
    <img src="styles/legend/DesaTinggi_1_0.png" /> Tinggi<br />' });
var format_DesaSedang_2 = new ol.format.GeoJSON();
var features_DesaSedang_2 = format_DesaSedang_2.readFeatures(json_DesaSedang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaSedang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaSedang_2.addFeatures(features_DesaSedang_2);
var lyr_DesaSedang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaSedang_2, 
                style: style_DesaSedang_2,
                popuplayertitle: 'Desa Sedang',
                interactive: true,
    title: 'Desa Sedang<br />\
    <img src="styles/legend/DesaSedang_2_0.png" /> Sedang<br />' });
var format_DesaRendah_3 = new ol.format.GeoJSON();
var features_DesaRendah_3 = format_DesaRendah_3.readFeatures(json_DesaRendah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaRendah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaRendah_3.addFeatures(features_DesaRendah_3);
var lyr_DesaRendah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaRendah_3, 
                style: style_DesaRendah_3,
                popuplayertitle: 'Desa Rendah',
                interactive: true,
    title: 'Desa Rendah<br />\
    <img src="styles/legend/DesaRendah_3_0.png" /> Rendah<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_DesaTinggi_1.setVisible(true);lyr_DesaSedang_2.setVisible(true);lyr_DesaRendah_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DesaTinggi_1,lyr_DesaSedang_2,lyr_DesaRendah_3];
lyr_DesaTinggi_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', 'Kategori UFPI': 'Kategori UFPI', });
lyr_DesaSedang_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', 'Kategori UFPI': 'Kategori UFPI', });
lyr_DesaRendah_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', 'Kategori UFPI': 'Kategori UFPI', });
lyr_DesaTinggi_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', 'Kategori UFPI': 'TextEdit', });
lyr_DesaSedang_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', 'Kategori UFPI': 'TextEdit', });
lyr_DesaRendah_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', 'Kategori UFPI': 'TextEdit', });
lyr_DesaTinggi_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'inline label - visible with data', 'kode_klasifikasi': 'hidden field', 'Kategori UFPI': 'inline label - visible with data', });
lyr_DesaSedang_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'inline label - visible with data', 'kode_klasifikasi': 'hidden field', 'Kategori UFPI': 'inline label - visible with data', });
lyr_DesaRendah_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'inline label - visible with data', 'kode_klasifikasi': 'hidden field', 'Kategori UFPI': 'inline label - visible with data', });
lyr_DesaRendah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});