import AdForm from "../components/Ads/AdForm";

function AddAd({ navigation }) {
  function createAdHandler(place) {
    navigation.navigate("AllAds", {
      place,
    });
  }

  return <AdForm onCreateAd={createAdHandler} />;
}

export default AddAd;
