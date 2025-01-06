// Pricing Data
const pricingData = {
    "MyFascia-hoidot": {
        duration: "n. 60 min",
        price: "€80.00",
        vat: "ALV 0%"
    },
    "MyFascia Rentoutus -hoito": {
        duration: "n. 90 min",
        price: "€110.00",
        vat: "ALV 0%"
    },
    "Klassinen hieronta": {
        duration: "60 min",
        price: "€80.00",
        vat: "ALV 0%"
    },
    "Hermoratahieronta": {
        duration: "n. 90 min",
        price: "€110.00",
        vat: "Hinta sisältää ALV:n 25,5%"
    },
    "Matkalla itseen – valmennus (etä- tai lähipalvelu)": {
        duration: "n. 90 min",
        price: "€110.00",
        vat: "Hinta sisältää ALV:n 25,5%"
    },
    "TRE-ohjaus": {
        duration: "n. 60 min",
        price: "€80.00",
        vat: "Hinta sisältää ALV:n 25,5%"
    },
    "EMG Liikeanalyysi": {
        duration: "n. 60 min",
        price: "€100.00",
        vat: "Hinta sisältää ALV:n 25,5%"
    },
    "Firstbeat Life minimitilaus 6kk": {
        duration: "n 30 min",
        price: "€49/kk",
        vat: "Hinta sisältää ALV:n 25,5%"
    },
    "Henkilökohtainen valmennus": {
        duration: "Yksittäinen valmennuskerta (n. 60 min)",
        price: "€80.00",
        vat: "Hinnat sisältävät ALV:n 25,5 %"
    },
    "Koti- ja yrityskäynnit": {
        duration: "Veloitus sovitaan tapauskohtaisesti",
        price: "",
        vat: ""
    }
};

// Render Pricing Data
const pricingContent = document.getElementById("pricing-content");

for (const [service, details] of Object.entries(pricingData)) {
    const priceItem = document.createElement("div");
    priceItem.classList.add("price-item");

    const serviceInfo = document.createElement("div");
    serviceInfo.innerHTML = `<strong>${service}</strong><br>${details.duration}`;

    const priceInfo = document.createElement("div");
    priceInfo.innerHTML = `<strong>${details.price}</strong><br>${details.vat}`;

    priceItem.appendChild(serviceInfo);
    priceItem.appendChild(priceInfo);
    pricingContent.appendChild(priceItem);
}