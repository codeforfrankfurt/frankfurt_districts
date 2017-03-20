Frankfurt statistics by district.

https://codeforfrankfurt.github.io/frankfurt_districts/

Experiments with visualization of open data per district available at http://daten.frankfurt.de

Built during Open Data Hackathon 2017 at Frankfurt http://hackfrankfurt.org/


# Why
Just experimenting for now. 

Possible practical use: service for choosing a perfect district to live (Tinder for districts!)

# How to use
1. Open https://codeforfrankfurt.github.io/frankfurt_districts/
2. Click on one of the parameters on the right. You will see colored districts on the left. Darker color means selected parameter is higher in this district.
3. Click on any district to see its value plus some info about this district (Only for Altstadt, Nordend, Bergen-Enkheim, Niederrad)

# TODO
1.add more data
- ~~voters for different partie~~
- more from bevoelkerung data set
- trees
- prices
- traffic jams
- bars (parse from foursquare)
- data parsed from Airbnb
- ... ?

2.Styling and usability
- leaflet
- hover effects
- remove unclickable areas on map
- ~~split paramters by group~~

3.Help text and about section

4.Add info and links immobilienscout24 for each district

# How to run locally
```
npm i
npm start
```

# Contributors:
Alexander Nosov

Anastasia Lovchikova
