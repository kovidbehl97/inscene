var dropdownLi = document.querySelectorAll('.dropdown');
var oldVersion = document.querySelectorAll('.tryDemo_oldVersion')
var keyPointsSelector = document.querySelectorAll('.tryDemo_tabs-kp')[0]
var jsonRespSelector = document.querySelectorAll('.tryDemo_tabs-jr')[0]
var keyPoints = document.querySelectorAll('.tryDemo_f100')[0]
var jsonResp = document.querySelectorAll('.tryDemo_f200')[0]
var jsonResponse = {
        "Labels": [
          "Shower Area(Alcove, Corner, Enclosure.Sliding-Door)",
          "Cabinet(Finish.White, Style.Slab)",
          "Drawers",
          "Sink-Bathroom(Under-Mount)",
          "Recessed Light",
          "Soap Dispenser",
          "Mirror",
          "Flooring(Type.Tile)",
          "Powder Area",
          "Wall Lights",
          "Faucet",
          "Bathroom-Countertop(Plain)",
          "Planter",
          "Window(Double)",
          "Wall-Color(Beige)"
        ],
        "Objects": [
          {
            "MainLabel": "shower area",
            "Prob": 0.999,
            "SubLabels": [
              {
                "Prob": 0.999,
                "Tag": "enclosure.sliding-door"
              },
              {
                "Prob": 0.818,
                "Tag": "corner"
              },
              {
                "Prob": 0.652,
                "Tag": "alcove"
              }
            ],
            "Xmax": 216,
            "Xmin": 0,
            "Ymax": 422,
            "Ymin": 30
          },
          {
            "MainLabel": "cabinet",
            "Prob": 0.998,
            "SubLabels": [
              {
                "Prob": 0.998,
                "Tag": "style.slab"
              },
              {
                "Prob": 0.962,
                "Tag": "finish.white"
              }
            ],
            "Xmax": 309,
            "Xmin": 222,
            "Ymax": 365,
            "Ymin": 251
          },
          {
            "MainLabel": "drawers",
            "Prob": 0.995,
            "Xmax": 384,
            "Xmin": 306,
            "Ymax": 395,
            "Ymin": 262
          },
          {
            "MainLabel": "sink-bathroom",
            "Prob": 0.99,
            "SubLabels": [
              {
                "Prob": 0.99,
                "Tag": "under-mount"
              }
            ],
            "Xmax": 329,
            "Xmin": 266,
            "Ymax": 245,
            "Ymin": 222
          },
          {
            "MainLabel": "recessed light",
            "Prob": 0.981,
            "Xmax": 60,
            "Xmin": 24,
            "Ymax": 22,
            "Ymin": 2
          },
          {
            "MainLabel": "soap dispenser",
            "Prob": 0.978,
            "Xmax": 522,
            "Xmin": 499,
            "Ymax": 260,
            "Ymin": 215
          },
          {
            "MainLabel": "mirror",
            "Prob": 0.964,
            "Xmax": 545,
            "Xmin": 392,
            "Ymax": 250,
            "Ymin": 33
          },
          {
            "MainLabel": "mirror",
            "Prob": 0.96,
            "Xmax": 353,
            "Xmin": 278,
            "Ymax": 227,
            "Ymin": 60
          },
          {
            "MainLabel": "flooring",
            "Prob": 0.96,
            "SubLabels": [
              {
                "Prob": 0.96,
                "Tag": "type.tile"
              }
            ],
            "Xmax": 475,
            "Xmin": 21,
            "Ymax": 439,
            "Ymin": 321
          },
          {
            "MainLabel": "powder area",
            "Prob": 0.954,
            "Xmax": 561,
            "Xmin": 200,
            "Ymax": 433,
            "Ymin": 208
          },
          {
            "MainLabel": "cabinet",
            "Prob": 0.949,
            "SubLabels": [
              {
                "Prob": 0.949,
                "Tag": "style.slab"
              },
              {
                "Prob": 0.907,
                "Tag": "finish.white"
              }
            ],
            "Xmax": 557,
            "Xmin": 394,
            "Ymax": 440,
            "Ymin": 301
          },
          {
            "MainLabel": "wall lights",
            "Prob": 0.949,
            "Xmax": 385,
            "Xmin": 359,
            "Ymax": 170,
            "Ymin": 101
          },
          {
            "MainLabel": "sink-bathroom",
            "Prob": 0.938,
            "SubLabels": [
              {
                "Prob": 0.938,
                "Tag": "under-mount"
              }
            ],
            "Xmax": 490,
            "Xmin": 404,
            "Ymax": 273,
            "Ymin": 243
          },
          {
            "MainLabel": "faucet",
            "Prob": 0.921,
            "Xmax": 484,
            "Xmin": 441,
            "Ymax": 253,
            "Ymin": 215
          },
          {
            "MainLabel": "drawers",
            "Prob": 0.899,
            "Xmax": 380,
            "Xmin": 308,
            "Ymax": 294,
            "Ymin": 250
          },
          {
            "MainLabel": "bathroom-countertop",
            "Prob": 0.862,
            "SubLabels": [
              {
                "Prob": 0.862,
                "Tag": "plain"
              }
            ],
            "Xmax": 578,
            "Xmin": 209,
            "Ymax": 312,
            "Ymin": 209
          },
          {
            "MainLabel": "planter",
            "Prob": 0.82,
            "Xmax": 300,
            "Xmin": 278,
            "Ymax": 217,
            "Ymin": 170
          },
          {
            "MainLabel": "window",
            "Prob": 0.764,
            "SubLabels": [
              {
                "Prob": 0.764,
                "Tag": "double"
              }
            ],
            "Xmax": 492,
            "Xmin": 432,
            "Ymax": 195,
            "Ymin": 115
          },
          {
            "MainLabel": "wall-color",
            "Prob": 0.688,
            "SubLabels": [
              {
                "Prob": 0.688,
                "Tag": "beige"
              }
            ],
            "Xmax": 585,
            "Xmin": 0,
            "Ymax": 440,
            "Ymin": 0
          }
        ],
        "MetaTags": {
          "bath-accessory": [
            "soap-dispenser"
          ],
          "decor": [
            "mirror",
            "planter"
          ],
          "faucet": [
            "kitchen-faucet"
          ],
          "furniture": [
            "drawers"
          ],
          "lighting": [
            "recessed",
            "wall-mounted"
          ],
          "shower": [
            "corner"
          ],
          "wall-color": [
            "beige"
          ]
        },
        "DateTime": "Thu Oct 29 10:53:03 2020",
        "Status": 1
}
var jsonContent = JSON.stringify(jsonResponse);
document.getElementsByClassName('tryDemo_f200')[0].innerHTML = jsonContent


dropdownLi.forEach((li)=>{
    li.addEventListener('click',()=>{
        li.classList.toggle('active');
    })
})

oldVersion.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle('active')
    })
})

keyPointsSelector.addEventListener('click',()=>{
        keyPoints.classList.add('active')
        keyPoints.classList.remove('inactive')
        jsonResp.classList.remove('active')
        jsonResp.classList.add('inactive')
    })

jsonRespSelector.addEventListener('click',()=>{
        keyPoints.classList.remove('active')
        keyPoints.classList.add('inactive')
        jsonResp.classList.add('active')
        jsonResp.classList.remove('inactive')
    })

