import { useEffect, useState } from "react";
import AdsList from "../components/Ads/AdsList";
import { useIsFocused } from "@react-navigation/native";
import { fetchAds } from "../core/util/database";

function AllAds({ route }) {
  const [loadedAds, setLoadedAds] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadAds() {
      const ads = await fetchAds();
      setLoadedAds(ads);
    }
    if (isFocused) {
      loadAds();
      // setLoadedAds((currAds) => [...currAds, route.params.ad]);
    }
  }, [isFocused]);

  return <AdsList ads={loadedAds} />;
}

export default AllAds;
