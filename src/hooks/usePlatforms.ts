import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Platform } from "./useGames"

interface FetchPlatformResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");


  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchPlatformResponse>("/platforms/lists/parents", {signal: controller.signal})
      .then((res) => setPlatforms(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort()
  }, []);

  return {platforms, error}
}

export default usePlatforms;