/* =========================================
   BHARATXPLORE DASHBOARD JAVASCRIPT
========================================= */


/* =========================================
   CONSTANTS
========================================= */

const locationKey = "bharatxploreLocation";


/* =========================================
   CREATE BACKGROUND PARTICLES
========================================= */

function createParticles() {

    const container = document.getElementById("particles");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    for (let index = 0; index < 28; index += 1) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left = `${Math.random() * 100}vw`;

        particle.style.top = `${Math.random() * 100}vh`;

        particle.style.animationDuration =
            `${14 + Math.random() * 16}s`;

        particle.style.animationDelay =
            `${Math.random() * -20}s`;

        container.appendChild(particle);
    }
}


/* =========================================
   CUSTOMIZE INDIA MAP
========================================= */

function customizeMap() {

    if (
        typeof simplemaps_countrymap_mapdata === "undefined"
    ) {
        return;
    }

    const mapData =
        simplemaps_countrymap_mapdata;

    const settings =
        mapData.main_settings;


    /* General map settings */

    settings.state_color = "#27364b";

    settings.state_hover_color = "#ffffff";

    settings.border_color = "#06070a";

    settings.border_size = 1.3;

    settings.label_color = "#ffffff";

    settings.label_hover_color = "#06070a";

    settings.label_font = "'Manrope', sans-serif";

    settings.label_size = 10;

    settings.label_display = "all";


    /* Disable map zoom */

    settings.zoom = "no";

    settings.manual_zoom = "no";

    settings.all_states_zoomable = "no";


    /* Popup settings */

    settings.popup_color = "#16171c";

    settings.popup_opacity = 0.98;

    settings.popup_shadow = 1;

    settings.popup_corners = 12;


    /* Different colors for states */

    const stateColors = [
        "#27364b",
        "#303b52",
        "#38445a",
        "#2d4850",
        "#34465a",
        "#3d4d61"
    ];


    if (mapData.state_specific) {

        Object.values(mapData.state_specific)
            .forEach((state, index) => {

                state.color =
                    stateColors[index % stateColors.length];

                state.hover_color = "#ffffff";

                state.label_color = "#ffffff";

                state.label_hover_color = "#06070a";

            });

    }
}


/* =========================================
   LOCATION LABEL
========================================= */

function updateLocationLabel(text) {

    const locationText =
        document.getElementById("locationText");

    if (!locationText) {
        return;
    }

    locationText.textContent = text;
}


/* =========================================
   REQUEST USER LOCATION
========================================= */

function requestLocation() {

    const savedLocation =
        localStorage.getItem(locationKey);


    /* Use saved location if available */

    if (savedLocation) {

        try {

            const location =
                JSON.parse(savedLocation);

            updateLocationLabel(
                `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`
            );

            return;

        } catch (error) {

            localStorage.removeItem(locationKey);

        }
    }


    /* Check browser support */

    if (!navigator.geolocation) {

        updateLocationLabel(
            "Location unavailable"
        );

        return;
    }


    updateLocationLabel(
        "Requesting your location..."
    );


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const location = {

                latitude: position.coords.latitude,

                longitude: position.coords.longitude

            };


            localStorage.setItem(
                locationKey,
                JSON.stringify(location)
            );


            updateLocationLabel(
                `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`
            );

        },

        function () {

            updateLocationLabel(
                "Location permission needed"
            );

        },

        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 300000

        }

    );
}


/* =========================================
   SHOW DEMO POPUP
========================================= */

function showDemo(
    title,
    text = "This experience is ready for the next step."
) {

    const overlay =
        document.getElementById("demoOverlay");

    const titleElement =
        document.getElementById("demoTitle");

    const textElement =
        document.getElementById("demoText");


    if (!overlay || !titleElement || !textElement) {
        return;
    }


    titleElement.textContent = title;

    textElement.textContent = text;

    overlay.hidden = false;
}


/* =========================================
   CLOSE DEMO POPUP
========================================= */

function closeDemo() {

    const overlay =
        document.getElementById("demoOverlay");

    if (!overlay) {
        return;
    }

    overlay.hidden = true;
}


/* =========================================
   STATE CLICK HANDLING
========================================= */

function bindStateClicks() {

    const map =
        document.getElementById("map");

    if (!map) {
        return;
    }


    function bindStates() {

        if (
            typeof simplemaps_countrymap_mapdata ===
            "undefined"
        ) {
            return;
        }


        const stateData =
            simplemaps_countrymap_mapdata.state_specific;


        map.querySelectorAll("[id]")
            .forEach(function (element) {


                /* Match state IDs such as INAP, INTG, INKA */

                if (
                    !/^IN[A-Z]{2}$/.test(element.id)
                ) {
                    return;
                }


                /* Prevent duplicate event listeners */

                if (element.dataset.bxBound === "true") {
                    return;
                }


                element.dataset.bxBound = "true";


                element.addEventListener(
                    "click",
                    function () {

                        const state =
                            stateData[element.id];

                        const stateName =
                            state && state.name
                                ? state.name
                                : "Selected State";


                        showDemo(

                            stateName,

                            `Welcome to ${stateName}. Explore tourist places, districts, villages, hotels, restaurants, transport and nearby services.`

                        );

                    }
                );

            });

    }


    /* Try immediately */

    bindStates();


    /* SimpleMaps creates SVG elements dynamically */

    const observer =
        new MutationObserver(function () {

            bindStates();

        });


    observer.observe(

        map,

        {
            childList: true,
            subtree: true
        }

    );

}


/* =========================================
   FEATURE CARD ACTIONS
========================================= */

function bindFeatureButtons() {

    const featureButtons =
        document.querySelectorAll(".feature-button");


    featureButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const feature =
                    button.dataset.feature;


                if (feature === "AI Mode") {

                    showDemo(

                        "AI Mode",

                        "Use the AI destiny teller, voice translator, budget planner, crowd alerts, weather updates, movement guidance and shelter information."

                    );

                }


                else if (feature === "QR") {

                    showDemo(

                        "QR",

                        "Scan temple, hotel, restaurant and street-vendor QR codes to verify services, view food ingredients in your language and receive tourism badges."

                    );

                }


                else if (feature === "Wallet") {

                    showDemo(

                        "Wallet",

                        "The FX Pass is designed to support multi-currency payments, currency conversion and local INR transactions through authorized payment integrations."

                    );

                }


                else if (feature === "SOS") {

                    showDemo(

                        "SOS",

                        "Use the emergency button to share your location and alert configured emergency contacts. Emergency-service integration requires authorized services or APIs."

                    );

                }


                else if (feature === "Travel") {

                    showDemo(

                        "Travel",

                        "Plan trips and explore train, flight, bus, cab, auto, metro, hotel and local transport information from one travel hub."

                    );

                }


                else {

                    showDemo(

                        feature,

                        "This feature is ready for the next development stage."

                    );

                }

            }
        );

    });

}


/* =========================================
   BIND POPUP EVENTS
========================================= */

function bindPopupEvents() {

    const closeButton =
        document.getElementById("closeDemo");

    const overlay =
        document.getElementById("demoOverlay");


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeDemo
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === overlay
                ) {

                    closeDemo();

                }

            }
        );

    }


    /* Close popup using Escape key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeDemo();

            }

        }
    );

}


/* =========================================
   INITIALIZE DASHBOARD
========================================= */

function initializeDashboard() {

    createParticles();

    requestLocation();

    bindStateClicks();

    bindFeatureButtons();

    bindPopupEvents();


    const locateButton =
        document.getElementById("locateButton");


    if (locateButton) {

        locateButton.addEventListener(
            "click",
            requestLocation
        );

    }

}


/* =========================================
   START
========================================= */

customizeMap();


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeDashboard
    );

} else {

    initializeDashboard();

}