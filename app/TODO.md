@ONA: 
- [ ] check je eens of localhost:8080/api/v1/musea ook werkt bij jou?

# App

- [ ] Tour screen
  - [ ]  Map (GoogleMapApi)
    1. "https://maps.googleapis.com/maps/api/geocode/json?&address="
    2. parse JSON & use animateToRegion to take to the location.
    3. use responseData.results[0].types[0] to set map zoom Level
      https://developers.google.com/places/supported_types
  - [ ] Tour overview
    - [ ] Tour detail
      - [ ] Start tour
        - [ ] **Camera**
        - [ ] **Badges** on completion
        - [ ] *QR-code*
        - [ ] *Geolocation*
      - [ ] Museum details

- [ ] Club screen
- [ ] Home
  - [ ] Badges
  - [ ] *User settings*

# Web-app
- [ ] Web-app for musea
  - [ ] Tour UI
    - [ ] Add tour
    - [ ] Edit tour
    - [ ] Remove tour
  - [ ] Edit museum info

# Database
- [ ] Create routes
  - [X] Tours
  - [X] Musea
  - [X] Users
  - [ ] Badges
  - [ ] Clubs

- [ ] Configure routes
  - [ ] Tours
  - [ ] Musea
  - [ ] Users
  - [ ] Badges
  - [ ] Clubs