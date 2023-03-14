$(document).ready(function(){
    $(".download-btn").on("click", function (event) {
        //РѕС‚РјРµРЅСЏРµРј СЃС‚Р°РЅРґР°СЂС‚РЅСѓСЋ РѕР±СЂР°Р±РѕС‚РєСѓ РЅР°Р¶Р°С‚РёСЏ РїРѕ СЃСЃС‹Р»РєРµ
        event.preventDefault();

        var link = document.createElement('a');
		link.setAttribute('href', document.querySelector('video').getAttribute('src'));
		link.setAttribute('download','download');
		onload=link.click();
    });
});
