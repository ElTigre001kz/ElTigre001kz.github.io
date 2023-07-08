var TimeResetADS = 180; // в секундах
var linkADS = 'https://eltigre001kz.github.io/AD.html'; // ссылка на рекламу
TimeResetADS *= 1000; // перевод в секунды(не трогать)
function resetADS()
{
for(var a_ads=0;a_ads<document.querySelectorAll(".ads").length;a_ads++)
{
document.querySelectorAll(".ads")[a_ads].innerHTML = '<iframe src="'+linkADS+'"></iframe>';
}
}
setInterval(resetADS, TimeResetADS);
