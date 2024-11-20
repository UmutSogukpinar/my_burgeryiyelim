import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const adress = `Yenibosna Merkez Mahallesi Ladin Sokak No:36 Town Ofis Kat:9
                  Bahçelievler / İstanbul`;
  const byEmail = `destek@kebanet.com`;
  const spaceChar = " ";
  const brandName = "Burger Yiyelim";

  const [currentLang, setCurrentLang] = useState("tr");

  const changeLang = (event) => {
    setCurrentLang(event.target.value);
  };

  const [dialogues, setDialogues] = useState({
    tr: {
      symbol: "TR",
      aboutUs: {
        parap1: `Keban Et 1976 yılında Keban Kasap olarak kuruldu. Butik bir kasap olmasına rağmen müşterilerine sunmuş olduğu ürünlerin katkısız ve lezzetli olmasından dolayı kısa sürede 'Et Ustası' ünvanının aldı. 41 yıldır iş hacmi, ürün yelpazesi, müşteriler, çalışanlar kısacası bir çok şey değişti. Ancak değişmeyen tek şey Keban Et'in sunduğu et ve et ürünlerinin lezzeti idi.`,
        parap2: `Keban Kasap müşterilerinden aldığı talepler ile kalitesini hiç bozmadan büyüyebilen nadir et üreticilerindendir. İlerleyen yıllarda gücünü müşterilerinin sadakat ve övgülerinden alarak üretim bandını genişletti.`,
        parap3: `Keban Kasap, one of the oldest butchers in Istanbul, continues its production at the Keban Et Integrated Facility, which has a 1500m² indoor area.`,
        parap4: `Until recently, Keban Kasap only produced ready-to-cook meat products. However, in line with its title of "Meat Master," it began producing ready-to-eat, cooked meat products. To allow people to taste real meat with additive-free flavor, the Et Yiyelim brand was created. This brand quickly won the approval of the public. Et Yiyelim restaurants became a favorite among customers with their unique products that carry distinct flavors.`,
        parap5: `Alongside its sincere family butcher tradition, Keban Et has always been a company that values modern developments. With this identity, in 2016, it launched the Burger Yiyelim brand through a local burger project. The difference of Burger Yiyelim was its burgers made from 100% additive-free and 100% beef.`,
        parap6: `The delicious patties of Burger Yiyelim are produced in Keban Et's hygienic, state-of-the-art production facilities, and they reach your taste buds directly from there. Since our patties are prepared at our main facility, Keban Entegre Et Tesisleri, we can offer you high-quality burgers at more affordable prices.`,
        parap7: `Our patties are certified TSE Halal.`,
        title1: `WHY AFFORDABLE PRICES?`,
        title2: `ARE YOUR PATTIES HALAL?`,
      },
      footer: {
        aboutUsC: "HAKKIMIZDA",
        aboutUs: "Hakkımızda",
        contactC: "İLETİŞİM",
        contact: "İletişim",
        contactUsC: "İLETİŞİM",
        menuC: "ÜRÜNLER",
        menu: "Ürünler",
        orderC: "ONLINE SİPARİŞ",
        linksC: "KURUMSAL",
        locationsC: "ŞUBELERİMİZ",
        rights: `Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web sitemizde
            bulunan fiyatlar şubelere, paket servis ve gel-al servise göre
            farklılık gösterebilmektedir. Burger Yiyelim tüm promosyonlar ve
            kampanyaları değiştirme ve sonlandırma hakkını saklı tutar.`,
        kebanet: {
          beforeLink: `Burger Yiyelim bir`,
          link: "Keban Et",
          afterLink: "kuruluşudur.",
        },
        clarification: "Aydınlatma Metni",
        franchiseApp: "Bayilik Başvurusu",
        hr: "İnsan Kaynakları",
        mLove: "Et Aşkı",
      },
    },
    eng: {
      symbol: "ENG",
      aboutUs: {
        parap1: `Keban Meat was established as Keban Kasap in 1976. Although it is a boutique butcher shop, it quickly earned the title of "Meat Master" due to the additive-free and delicious products it offered to its customers. Over the past 41 years, many things have changed, such as business volume, product range, customers, and employees. However, the one thing that has never changed is the taste of the meat and meat products that Keban Et provides.`,
        parap2: `Keban Kasap is one of the rare meat producers that has been able to grow without compromising its quality, thanks to the demands from its customers. In the following years, it expanded its production line by drawing strength from the loyalty and praise of its customers.`,
        parap3: `Keban Kasap müşterilerinden aldığı talepler ile kalitesini hiç bozmadan büyüyebilen nadir et üreticilerindendir. İlerleyen yıllarda gücünü müşterilerinin sadakat ve övgülerinden alarak üretim bandını genişletti.`,
        parap4: `Yakın zamana kadar sadece pişirmeye hazır et ürünleri üretmesine rağmen 'Et Ustası' ünvanına yakışır bir şekilde tüketime hazır, 
        pişirilmiş et ürünleri üretmeye başladı. Halkımızın gerçek et, katkısız lezzeti tatması için Et Yiyelim markasını oluşturdu. 
        Bu marka çok kısa sürede halkın beğenisini kazandı. Et Yiyelim lokantalarında, kendine has lezzetleri içerisinde barındıran ürünleri ile müşterilerin vazgeçilmezi arasında yer aldı.`,
        parap5: `Keban Et her zaman samimi aile kasabı çizgisinin yanında, modern gelişimlere de önem veren bir firma olmuştur. Bu kimliğiyle 2016 yılında yerli burger projesi ile Burger Yiyelim markasını oluşturdu. Burger Yiyelim'in farkı %100 katkısız %100 dana etinden yapılan burgerleri oldu.`,
        parap6: `Burger Yiyelim'in nefis köfteleri Keban Et'in hijyenik ve son teknoloji üretim tesislerinde üretilip oradan damaklarınıza kadar ulaşmakta. Köftelerimizi ana markamız olan Keban Entegre Et Tesisleri'nde hazırladığımız için sizlere daha uygun fiyata daha kaliteli burgerler sunabiliyoruz.`,
        parap7: `Köftelerimiz TSE Helal belgelidir.`,
        title1: `NEDEN UYGUN FİYAT?`,
        title2: `KÖFTELERİNİZ HELAL Mİ?`,
      },
      footer: {
        aboutUsC: "ABOUT US",
        aboutUs: "About us",
        contactC: "CONTACT",
        contact: "Contact",
        contactUsC: "CONTACT US",
        menuC: "MENU",
        menu: "Menu",
        orderC: "ORDER NOW",
        linksC: "LINKS",
        locationsC: "LOCATION",
        rights: `The sole proprietor of the Burger Yiyelim brand is Keban Et. 
                The prices available on our website may vary depending on the branch, delivery service, and take-out options. 
                Burger Yiyelim reserves the right to modify or terminate all promotions and campaigns at any time.`,
        kebanet: {
          beforeLink: `Burger Yiyelim is a subsidiary of`,
          link: "Keban Et",
          afterLink: ".",
        },
        clarification: "Clarification Text",
        franchiseApp: "Franchise Application",
        hr: "Human Resources",
        mLove: "Meat Love",
      },
    },
  });

  return (
    <div>
      <LanguageContext.Provider
        value={{
          dialogues,
          currentLang,
          spaceChar,
          adress,
          byEmail,
          changeLang,
          brandName,
        }}
      >
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

export default LanguageProvider;
