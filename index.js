let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8994, lng: -80.1862 },
    zoom: 18, 
    styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#38692d"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#989898"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#386c28"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fcfcfc"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#788c40"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "saturation": "-33"
            },
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7088b0"
            }
        ]
    }
]
    
    
  });
 const WUMark = new google.maps.Marker({
    position: { lat: 39.8994, lng: -80.1862 },
    map,
    title: "Waynesburg University",
    icon: "regroup.png" 
  });

 const westhall = new google.maps.Marker({
    position: { lat: 39.90042982503932, lng: -80.18630740689083 },
    map,
    title: "West Hall",
    icon: "shootingrange.png",
  });
 const westinfowindow = new google.maps.InfoWindow({
    content: "West Hall: 1/4 upper classmen dorms for women. Each room as their own AC and private bathrooms.",
  });
 
  westhall.addListener("click", () => {
    westinfowindow.open({
      anchor: westhall,
      map,
      shouldFocus: false,
    });
  });

 const easthall = new google.maps.Marker({
    position: { lat: 39.900378927083985, lng: -80.18552450610792 }, 
    map,
    title: "East Hall",
    icon: "shootingrange.png",
  });
 const eastinfowindow = new google.maps.InfoWindow({
    content: "East Hall: 1/4 upper classmen dorms for women. Each room as their own AC and private bathrooms.",
  });
 
  easthall.addListener("click", () => {
    eastinfowindow.open({
      anchor: easthall,
      map,
      shouldFocus: false,
    });
  });

const library = new google.maps.Marker({
    position: { lat: 39.89990565770013, lng: -80.18525628522721 },  
    map,
    title: "Eberly Library",
    icon: "chronometer.png",
  });
 const libraryinfowindow = new google.maps.InfoWindow({
    content: "Campus Library: Chalked full of books, computers and printers. Equipped with state of the art conference rooms perfect for playing Pokemon Go! with friends.",
  });
 
  library.addListener("click", () => {
    libraryinfowindow.open({
      anchor: library,
      map,
      shouldFocus: false,
    });
  });

  const buhl = new google.maps.Marker({
    position: { lat: 39.89937065357555, lng:  -80.18542794658629 },   
    map,
    title: "Buhl Hall",
    icon: "radio-control-model-car.png",
  });
 const buhlinfowindow = new google.maps.InfoWindow({
    content: "Buhl Hall: Home of the Department of Communication. Some Criminal Justice and History classes are also taught here.",
  });
 
  buhl.addListener("click", () => {
    buhlinfowindow.open({
      anchor: buhl,
      map,
      shouldFocus: false,
    });
  });

    const pollock = new google.maps.Marker({
    position: { lat: 39.89925542137458, lng:  -80.18495587783623 },   
    map,
    title: "Pollock Hall",
    icon: "shootingrange.png",
  });
 const pollockinfowindow = new google.maps.InfoWindow({
    content: "Pollock Hall:1/4 upper classmen dorms for women. Each room as their own AC and private bathrooms .",
  });
 
  pollock.addListener("click", () => {
    pollockinfowindow.open({
      anchor: pollock,
      map,
      shouldFocus: false,
    });
  });

  const thayer = new google.maps.Marker({
    position: { lat: 39.89948588558274, lng:  -80.18423168145829  },    
    map,
    title: "Thayer Hall",
    icon: "skilifting.png",
  });
 const thayerinfowindow = new google.maps.InfoWindow({
    content: "Thayer Hall: 1/2 of the underclassmen men's dorm rooms. They have shared bathrooms and universal heating. (NOT NEARLY AS AWESOME AS MARTIN)",
  });
 
  thayer.addListener("click", () => {
    thayerinfowindow.open({
      anchor: thayer,
      map,
      shouldFocus: false,
    });
  });

    const martin = new google.maps.Marker({
    position: { lat: 39.89816482130596, lng:  -80.18508998827657  },     
    map,
    title: "Martin Hall",
    icon: "skilifting.png",
  });
 const martininfowindow = new google.maps.InfoWindow({
    content: "Martin Hall: 1/2 of the underclassmen men's dorm rooms. They have shared bathrooms and universal heating. Includes a partially roofed porch with benches, two lounges that have ping pong, televisions, and vending machines.(WAY BETTER THAN THAYER AND ANYONE WHO DISAGREES IS WRONG)",
  });
 
  martin.addListener("click", () => {
    martininfowindow.open({
      anchor: martin,
      map,
      shouldFocus: false,
    });
  });

     const cred = new google.maps.Marker({
    position: { lat: 39.89811955073116, lng:  -80.18624333814306  },     
    map,
    title: "Center for Research and Economic Development",
    icon: "tebletennis.png",
  });
 const credinfowindow = new google.maps.InfoWindow({
    content: "CRED: Mostly business and math classes are taken here. Some science lectures take place here as well.",
  });
 
  cred.addListener("click", () => {
    credinfowindow.open({
      anchor: cred,
      map,
      shouldFocus: false,
    });
  });
const stewart = new google.maps.Marker({
    position: { lat: 39.89795904575366, lng:  -80.18661348295845 },      
    map,
    title: "Stewart",
    icon: "glasswater.png",
  });
   const stewartinfowindow = new google.maps.InfoWindow({
    content: "Stewart: The science capital of Waynesburg. Equipped with numerous labs for numerous purposes. Also includes a simulation lab for nursing majors",
  });
 
  stewart.addListener("click", () => {
    stewartinfowindow.open({
      anchor: stewart,
      map,
      shouldFocus: false,
    });
  });

  const rudy = new google.maps.Marker({
    position: { lat: 39.898107204207776, lng:  -80.18755225604096  },      
    map,
    title: "Rudy Marisa Field House",
    icon: "basketball.png",
  });
   const rudyinfowindow = new google.maps.InfoWindow({
    content: "The Gym: Holds two basketball courts, locker rooms for football, soccer, cross counrty and volleyball.",
  });
 
  rudy.addListener("click", () => {
    rudyinfowindow.open({
      anchor: rudy,
      map,
      shouldFocus: false,
    });
  });

const southhall = new google.maps.Marker({
    position: { lat: 39.90029630573666, lng: -80.18592989074104 }, 
    map,
    title: "southhall Hall",
    icon: "shootingrange.png",
  });



  const chapelCoords = [
    { lat: 39.9009427417313, lng: -80.18731034027445}, 
    { lat: 39.900938065808226, lng: -80.18702774879885 },
    { lat: 39.90050494732823, lng: -80.18703859838428 },  
    { lat: 39.900513870840534, lng: -80.1873229333918 },
    { lat: 39.90094418105377, lng: -80.18730613177772 },
  ];
  const chapelpolygon = new google.maps.Polygon({
    paths: chapelCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  const wileyCoords = [
     { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 },
  ];
  const wileypolygon = new google.maps.Polygon({
    paths: wileyCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  const gpacCoords = [
     { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

  ;
  const gpacpolygon = new google.maps.Polygon({
    paths: gpacCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

        const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
    });
        const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458} ];
  const pollockPolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,

  });

  const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];

  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
   strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
  const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
  const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
  const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];
   // Construct the polygon.
  const willisonpolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
});
  const eberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
   strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];
    const fieldhousePolygon = new google.maps.Polygon({
    paths: fieldhouseCoords,
   strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
      const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
     strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
      strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
const CafCoords = [

{lat: 39.900203456792106, lng: -80.18817887398245},

{lat: 39.900590052054156, lng: -80.18815381174599},

{lat: 39.90067519885253, lng: -80.18808489059572},

{lat: 39.900671765515945, lng: -80.18796763513225},

{lat: 39.900573572016434, lng: -80.18770358656951},

{lat: 39.90018903667797, lng: -80.18772506848647},

];
const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
      strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
const theNest = [
    {lat: 39.89821420734463, lng: -80.18518654779363},  
    {lat: 39.89811955073925, lng: -80.1851758189584},  
    {lat: 39.89809485769026, lng: -80.18503634410044}, 
    {lat: 39.89821420734463, lng: -80.18504170851806},  
    {lat: 39.898205976340655, lng: -80.18517045454081}, 

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  nestPolygon.setMap(map);

const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

const BuhlhallPolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}
    ];
const StoverPolygon = new google.maps.Polygon({
    paths: StoverCoords,
  strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
const millerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];
      const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
});

const infowindow = new google.maps.InfoWindow({
    content: "Waynesburg University",

  });
millerPolygon.setMap(map);
BuhlhallPolygon.setMap(map);
CafPolygon.setMap(map);
CREDPolygon.setMap(map);
hannaPolygon.setMap(map);
fieldhousePolygon.setMap(map);
eberlyPolygon.setMap(map);
willisonpolygon.setMap(map);
eastpolygon.setMap(map);
westpolygon.setMap(map);
southpolygon.setMap(map);
 stewartpolygon.setMap(map);
 pollockPolygon.setMap(map);
 ThayerPolygon.setMap(map);
  gpacpolygon.setMap(map);
  chapelpolygon.setMap(map);
  wileypolygon.setMap(map);
  WUMark.addListener("click", () => {
    infowindow.open({
      anchor: WUMark,
      map,
      shouldFocus: false,




    });
  });

    WUMark.addListener("click", () => {
    infowindow.open({
      anchor: WUMark,
      map,
      shouldFocus: false,




    });
  });
 const southinfowindow = new google.maps.InfoWindow({
    content: "South Hall: 1/4 upper classmen dorms for women. Each room as their own AC and private bathrooms.",
 
 });
 
  southhall.addListener("click", () => {
    southinfowindow.open({
      anchor: southhall,
      map,
      shouldFocus: false,
    });
  });
}
