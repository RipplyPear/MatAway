browser.contextMenus.create({
   id: "hide-promo",
   title: "Hide promoted items",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
   if (info.menuItemId === "hide-promo") {
      browser.tabs.executeScript({
      file: "mataway.js",
   });
   }
});