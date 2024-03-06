import React from "react";
import  ReactDOM  from "react-dom/client";

const Header=()=>{
    return (
        
        <div id="head">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTBwAo1vxN_WnGjcqSnwO0noapn4KPZzwuw&usqp=CAU" alt="img" height="50px" width="200px"/>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurants=[
    {
    "info": {
    "id": "254126",
    "name": "McDonald's",
    "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
    "locality": "Metropolis Mall",
    "areaName": "Hari Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.4,
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-metropolis-mall-hari-nagar-hisar-254126",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "223399",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Eminent Mall",
    "areaName": "Mehta Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-eminent-mall-mehta-nagar-hisar-223399",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "394831",
    "name": "7th Heaven",
    "cloudinaryImageId": "c2ak3xhia6bsbcwmj2ov",
    "locality": "Mall Road",
    "areaName": "Hari Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "19",
    "avgRatingString": "4.4",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/7th-heaven-mall-road-hari-nagar-hisar-394831",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "324012",
    "name": "Da Pizza Inn",
    "cloudinaryImageId": "x6s8tvaggddz4do1w8c2",
    "locality": "Town Park",
    "areaName": "Hari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "American",
    "Beverages"
    ],
    "avgRating": 3.9,
    "veg": true,
    "parentId": "67441",
    "avgRatingString": "3.9",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/da-pizza-inn-town-park-hari-nagar-hisar-324012",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "154508",
    "name": "Prime Pizza",
    "cloudinaryImageId": "l6rj6ixap1zlahbwkfqf",
    "locality": "Sector 13",
    "areaName": "Hari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "American",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "161142",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/prime-pizza-sector-13-hari-nagar-hisar-154508",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "184822",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "Urban Estate",
    "areaName": "Hari Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Fast Food",
    "Healthy Food",
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "parentId": "2",
    "avgRatingString": "4.1",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 21:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-urban-estate-hari-nagar-hisar-184822",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "746547",
    "name": "PIZZA CHOICE",
    "cloudinaryImageId": "6098205c237914375b56cf483f516b70",
    "locality": "Delhi Road",
    "areaName": "Hisar Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Pizzas",
    "American",
    "Beverages",
    "Fast Food"
    ],
    "avgRating": 4.2,
    "parentId": "158448",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-choice-delhi-road-hisar-locality-hisar-746547",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "697915",
    "name": "The Waffle Co.",
    "cloudinaryImageId": "071e0edaa41c1060d6f3a62b25a38deb",
    "locality": "Near Petrol Pump",
    "areaName": "Hari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Bakery",
    "Beverages",
    "Cafe"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "5143",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-waffle-co-near-petrol-pump-hari-nagar-hisar-697915",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "156460",
    "name": "Madras Cafe",
    "cloudinaryImageId": "rql1a99s4t6zjwivzyzj",
    "locality": "Pla Market",
    "areaName": "PLA Market",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "612",
    "avgRatingString": "4.3",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 22:15:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/madras-cafe-pla-market-hisar-156460",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "155792",
    "name": "Pizza Wings",
    "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
    "locality": "Pla Market",
    "areaName": "Police Line Area",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "rolls",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "159048",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-wings-pla-market-police-line-area-hisar-155792",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "154318",
    "name": "Pizza Cafe",
    "cloudinaryImageId": "wy9lhve8ziwfvxf7lybb",
    "locality": "Jindal Chowk",
    "areaName": "Hari Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "American",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "719",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 3.8,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "3.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 21:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-cafe-jindal-chowk-hari-nagar-hisar-154318",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "413066",
    "name": "Sardarji Malai Chaap Wale",
    "cloudinaryImageId": "jnsd1w6jpw10u8qwz6mr",
    "locality": "Pla Market",
    "areaName": "Hari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Tandoor",
    "Snacks",
    "Thalis"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "2007",
    "avgRatingString": "4.0",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sardarji-malai-chaap-wale-pla-market-hari-nagar-hisar-413066",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "575734",
    "name": "Barista Coffee",
    "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
    "locality": "Eminent Mall",
    "areaName": "Hari Nagar",
    "costForTwo": "₹100 for two",
    "cuisines": [
    "Beverages",
    "Snacks",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2359",
    "avgRatingString": "4.4",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barista-coffee-eminent-mall-hari-nagar-hisar-575734",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "419721",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
    "locality": "Eminent Mall",
    "areaName": "Hari Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 35,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
    "shortDescription": "Free Delivery",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
    "shortDescription": "Free Delivery"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-eminent-mall-hari-nagar-hisar-419721",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "684455",
    "name": "Nagpal's Chole Bhature",
    "cloudinaryImageId": "dc6b072f4f51d622b96154f8d9bac78e",
    "locality": "Red Cross Market Parking",
    "areaName": "Hari Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Beverages",
    "Indian"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "251364",
    "avgRatingString": "4.0",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nagpals-chole-bhature-red-cross-market-parking-hari-nagar-hisar-684455",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "637225",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "nwmbe9p0yeczjglapss8",
    "locality": "Red square Market",
    "areaName": "Hari Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "18 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-red-square-market-hari-nagar-hisar-637225",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "321601",
    "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
    "cloudinaryImageId": "xlea6cy8to9g0lfvw6pu",
    "locality": "Palam Vihar",
    "areaName": "Hari Nagar",
    "costForTwo": "₹100 for two",
    "cuisines": [
    "Desserts",
    "Ice Cream",
    "Ice Cream Cakes"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "582",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 4.4,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "4.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-palam-vihar-hari-nagar-hisar-321601",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "752893",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    "locality": "HISSAR",
    "areaName": "PLA MARKET",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "2233",
    "avgRatingString": "4.5",
    "totalRatingsString": "20+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-hissar-pla-market-hisar-752893",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "414165",
    "name": "Giani",
    "cloudinaryImageId": "im6obnqsuuyoocrohdgy",
    "locality": "Sector14",
    "areaName": "Hari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Ice Cream"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "415",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:17:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/giani-sector14-hari-nagar-hisar-414165",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "155751",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "Pla Market",
    "areaName": "Hari Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "5588",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-06 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-pla-market-hari-nagar-hisar-155751",
    "type": "WEBLINK"
    }
    }
    ];  

const RestroCard=(props)=>{
    const {restCard}=props;
    const {cloudinaryImageId,name,avgRating,costForTwo,sla,cuisines}=restCard.info;
    return(
    <div id="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="dish" />
        <h4 className="info" id="restname">{name}</h4>
        <div id="ratdil">
        <h4 className="info" id="rating">{avgRating} &#9733;</h4>
        <h4 className="info" id="dilTime">{sla.deliveryTime}mins</h4>
        </div>
        <h4 className="info" id="forTwo">{costForTwo}</h4>
        <h3 className="info" id="cuisines">{cuisines.join(", ")}</h3>
    </div>)
}

const AppBody=()=>{
    return(
    <>
    <div id="search">
        <input type="text" placeholder="search for food and restaurent"></input>
        <button>search</button>
    </div>
    <div id="cardcon">
    <div id="cardConatiner">
    {
        restaurants.map((carditem)=> (
        <RestroCard key={carditem.info.id} restCard={carditem}/>
        ))
    }

    </div>
    </div>
    </>)
}



const FoodApp=()=>(
    <>
    <Header/>
    <AppBody/>
    </>
)


const root =ReactDOM.createRoot(document.getElementById("div1"));
root.render(<FoodApp/>);



