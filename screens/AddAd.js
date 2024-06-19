import AdForm from "../components/Ads/AdForm";

function AddAd({ navigation }) {
  function createAdHandler(ad) {
    navigation.navigate("AllAds", {
      ad,
    });
  }

  return <AdForm onCreateAd={createAdHandler} />;
}

export default AddAd;
