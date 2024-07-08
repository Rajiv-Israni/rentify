import AdForm from "../components/Ads/AdForm";
import { insertAd } from "../core/util/database";

function AddAd({ navigation }) {
  async function createAdHandler(ad) {
    await insertAd(ad)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigation.navigate("AllAds", {
      ad,
    });
  }

  return <AdForm onCreateAd={createAdHandler} />;
}

export default AddAd;
