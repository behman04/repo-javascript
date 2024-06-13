console.log("ATM uygulamasina xos gelmisiniz");
function atm() {
  let hesab = 1000;
  let deneme = 0;
  const maxcehd = 3;
  let asagi = "\r\n";
  let metn =
    "1-Balans goster" +
    asagi +
    "2-Nagdlasdir" +
    asagi +
    "3-Hesab melumatlari" +
    asagi +
    "4-Cixis" +
    asagi +
    "Bir secim edin";

  while (deneme < maxcehd) {
    let password = prompt("sifrenizi daxil edin: ");
    if (password == 1998) {
      console.log("Ugurlu giris edildi");

      let secim = prompt(metn);
      switch (secim) {
        case "1":
          alert("Balans: " + hesab + " AZN");

          break;
        case "2":
          let money = Number(prompt("meblegi yazin: "));
          console.log("Hesabinizdan " + money + " AZN cixarilmisdir.");

          console.log("Qalan Mebleg " + (hesab - money) + " AZN");
          break;
        case "3":
          alert("Ad: Behman" + asagi + "Soyad:Imanov");
        case "4":
          console.log("Hesabinizdan cixildi");
        default:
          alert(" Yeniden basladin ve dogru butonu basin");

          break;
      }

      break;
    } else {
      deneme++;
      console.log(
        "sifre yanlisdir.yeniden cehd edin. Qalan giris sayisi: " +
          (maxcehd - deneme)
      );
    }
    if (deneme === maxcehd) {
      console.log("3 defe yanlis sifre daxil etdiniz kartiniz bloklandi");
    }
  }
}

atm();
