var TimeResetBranding = 30; // в секундах
var linkBranding = 'https://eltigre001kz.github.io/Branding.html'; // ссылка на рекламу
TimeResetBranding *= 1000; // перевод в секунды(не трогать)
function resetBranding()
{
for(var a_branding=0;a_branding<document.querySelectorAll(".branding").length;a_branding++)
{
document.querySelectorAll(".branding")[a_branding].innerHTML = '<iframe src="'+linkBranding+'"></iframe>';
}
}
setInterval(resetBranding, TimeResetBranding);
