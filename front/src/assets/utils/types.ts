
export interface MapAlert {
  id: string | number;
  displayName: string;
  priority: string; // בדרך כלל Low, Medium, High או Critical
  lon: number; // קו אורך (longitude)
  lat: number; // קו רוחב (latitude)
}

export interface AlertsMapProps {
  alerts: MapAlert[];
  height?: number | string; // ברירת מחדל: 520. למפה חייב להיות גובה מוגדר
  className?: string;
}
