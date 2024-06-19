import { useEffect, useState } from "react";
import AdsList from "../components/Ads/AdsList";
import { useIsFocused } from "@react-navigation/native";

function AllAds({ route }) {
  const [loadedAds, setLoadedAds] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedAds((currAds) => [...currAds, route.params.ad]);
    }
  }, [isFocused, route]);

  return <AdsList ads={loadedAds} />;
}

export default AllAds;
