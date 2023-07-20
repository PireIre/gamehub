import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (genreId: number, platformId:number) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");


  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games?genres=" + genreId + "&platforms=" + platformId, {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort()
  }, [genreId, platformId]);

  return {games, error}
}

export default useGames;