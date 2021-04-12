        var index = 0;
        const images = [{
                "name": 'imageFeature',
                "src": 'assets/images/products/imageFeatures.svg'
            },
            {
                "name": 'imageProperties',
                "src": 'assets/images/products/imageProperties.svg'
            },
            {
                "name": 'imageText',
                "src": 'assets/images/products/imageText.svg'
            },
            {
                "name": 'visualSearch',
                "src": 'assets/images/products/visualSearch.svg'
            },
            {
                "name": 'quality',
                "src": 'assets/images/products/Quality.svg'
            },
            {
                "name": 'enhancement',
                "src": 'assets/images/products/enhancement.svg'
            }
        ];
        document.getElementById("scan").src = images[0].src;
        setInterval(function () {
            let descriptionList = Array.from(document.getElementsByClassName('list'));
            descriptionList.forEach(element => element.classList.remove('active'));
            index = index + 1;
            index = (index % images.length);
            document.getElementById("scan").src = images[index].src;
            descriptionList.forEach(element => {
                if (element.id == images[index].name) {
                    element.classList.add('active');
                }
            });
        }, 3000)