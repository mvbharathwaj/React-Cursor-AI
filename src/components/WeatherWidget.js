import React, { useState, useEffect } from 'react';
import styles from './WeatherWidget.module.css';

/**
 * WeatherWidget component for displaying weather information and forecast.
 * @returns {JSX.Element} The rendered WeatherWidget component.
 */
function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock weather data - in a real app, this would be an API call
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock weather data
        const mockWeather = {
          location: 'Mumbai, India',
          temperature: 28,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 12,
          icon: '🌤️'
        };
        
        setWeather(mockWeather);
        setError(null);
      } catch (err) {
        setError('Failed to load weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  /**
   * Returns a color based on the temperature value.
   * @param {number} temp - The temperature in Celsius.
   * @returns {string} The color code for the temperature.
   */
  const getWeatherColor = (temp) => {
    if (temp > 30) return '#ff6b6b';
    if (temp > 20) return '#ffd93d';
    if (temp > 10) return '#6bcf7f';
    return '#74c0fc';
  };

  if (loading) {
    return (
      <div className={styles.weatherContainer}>
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
          <p>Loading weather...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.weatherContainer}>
        <div className={styles.errorMessage}>
          <p>⚠️ {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.weatherContainer}>
      <h3>🌤️ Weather</h3>
      
      <div className={styles.weatherMain}>
        <div className={styles.weatherIcon}>
          {weather.icon}
        </div>
        <div className={styles.weatherInfo}>
          <h2 className={styles.temperature} style={{ color: getWeatherColor(weather.temperature) }}>
            {weather.temperature}°C
          </h2>
          <p className={styles.condition}>{weather.condition}</p>
          <p className={styles.location}>{weather.location}</p>
        </div>
      </div>

      <div className={styles.weatherDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>💧 Humidity</span>
          <span className={styles.detailValue}>{weather.humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>💨 Wind</span>
          <span className={styles.detailValue}>{weather.windSpeed} km/h</span>
        </div>
      </div>

      <div className={styles.weatherForecast}>
        <h4>5-Day Forecast</h4>
        <div className={styles.forecastItems}>
          {[
            { day: 'Mon', temp: 29, icon: '☀️' },
            { day: 'Tue', temp: 27, icon: '🌤️' },
            { day: 'Wed', temp: 31, icon: '☀️' },
            { day: 'Thu', temp: 26, icon: '🌧️' },
            { day: 'Fri', temp: 28, icon: '⛅' }
          ].map((day, index) => (
            <div key={index} className={styles.forecastItem}>
              <span className={styles.forecastDay}>{day.day}</span>
              <span className={styles.forecastIcon}>{day.icon}</span>
              <span className={styles.forecastTemp}>{day.temp}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget; 