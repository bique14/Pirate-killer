const removeAds = () => {
  const fbd = document.querySelectorAll(".filmborder");

  for (let i = 0; i < fbd.length - 3; i++) {
    fbd[i].remove();
  }
};

const removeSideBar = () => {
  document.querySelector("#sidebar").remove();
};

const removeBannerPopup = () => {
  document.querySelector("#banner-left").remove();
  document.querySelector("#ads_fox_bottom").remove();
};

removeAds();
removeSideBar();
removeBannerPopup();
