# 🌦️ React Weather App

A weather application built with **React**, **Tailwind CSS**, **MUI**, **Maps JavaScript API** and **OpenWeather API**. It fetches real-time weather data based on the user's **current location** or a selected city and displays it with clean visuals and extra information such as **temperature, humidity, pressure, wind**, **visibility**, **sunrise/sunset**, and an embedded **map**.


## 🚀 Features

- 📍 Auto-detects your **current city** using Geolocation API + Reverse Geocoding.
- 🔍 **Searchable dropdown** to manually select a city (with autocomplete).
- 🌡️ Displays:
  - Temperature (min/max, feels-like)
  - Humidity, Pressure
  - Wind speed, direction, and gusts
  - Visibility (in kilometers)
  - Sunrise and Sunset time (based on location)
- 🕒 **Live clock and current date**
- 🗺️ Interactive **map** showing the location
  

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Material UI (MUI)**
- **Axios** for API requests
- **OpenWeather API**
- **Maps JavaScript API** from google cloud platform

## 🔑 Setup & Installation
1. **Clone the repo**:
     ```bash
         git clone
         cd weather_app
2. **Install Dependencies:**
      ```bash
        npm install
3. **Create your .env file with these variable:**
    - REACT_APP_OPEN_WEATHER_API_KEY = "open weather api key"
    - REACT_APP_MAPS_API_KEY = "google maps api key"
4. **Run your project:**
   ```bash
       npm start    


## 📸 Screenshots
![image](https://github.com/user-attachments/assets/3816f42d-d145-4a0f-ac16-f6ed6e893a62)

## 🌍 Data Source
Powered by the OpenWeather API

## 🧠 Future Enhancements
- 5-day weather forecast view
- Hourly forecast
- Dark/light theme toggle
- User preference storage (e.g. last selected city)
- Weather-based background visual

## ✨ Credits
Built by Adnan Shaik
