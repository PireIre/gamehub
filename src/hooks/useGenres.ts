import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


export interface Genre {
  id: number,
  name: string, 
  image_background: string,
}

interface FetchGenresResponse {
  results: Genre[], 
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort()
  }, []);

  return {genres, error}
}

export default useGenres;
