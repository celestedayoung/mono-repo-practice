import { useQuery } from '@tanstack/react-query';
import { fetchWeather, WeatherData } from '@/app/_libs';

export const useFetchWeather = (lat: number, lon: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery<WeatherData>({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    enabled: isClient && !!lat && !!lon,
  });
};
