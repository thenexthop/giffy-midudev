import { useState, useEffect } from 'react';

// services
import getTrendingTerms from '../services/getTrendingTerms.service';

// components
import Category from '../components/Category/Category';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {

    const fetchTrends = async () => {
      
      const trendings = await getTrendingTerms();
      setTrends(trendings);

    };

    fetchTrends();
  }, []);

  return (
    <>
      {
        trends && trends?.length > 0 
          ? (
            <Category name={"Tendencias"} options={trends} />
          ) : (
            <h2>No Trendings...</h2>
          )
      }
    </>
  );
}