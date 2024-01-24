const ads = document.getElementsByClassName("card-item card-standard js-product-data js-card-ads-listing card-ads-listing");
for (let i = 0; i < ads.length; i++) {
   ads[i].style.display = "none";
   console.log(ads[i]);
}