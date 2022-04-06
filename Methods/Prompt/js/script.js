var yas;

yas= Number(prompt("Yaşınızı giriniz: "));

function Prompt()
{
if(yas<18)
{
    alert("Siteye giriş izniniz yok !!!");
}
else
{
    alert("Giriş başarılı !");
}
}
Prompt();