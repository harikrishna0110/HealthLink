import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import FindDoctor from './FindDoctor';
import ServiceList from '../components/Services/ServiceList';

const TrialLoad=() => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])
  return (
    <>
      {loading && <Loader />}
     {!loading && <ServiceList />}
    </>
  );
}

export default TrialLoad;