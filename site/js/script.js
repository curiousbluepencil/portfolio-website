var content = document.getElementById('content');
var heading = document.createElement('h1');
heading.innerText = "This is the Gallery Page";
heading.setAttribute('style',"font-family:alice_in_wonderlandregular");
content.appendChild(heading)
var gallery = document.getElementById('gallery');

/*fetch('JSON/images.json').then(function(response) {
    response.json().then(function(json) {

        for(var i = 0; i < json.Images.length; i++){
            console.log(i);
            var divCol = document.createElement('div');
            divCol.class = "col"

            var image = document.createElement('img');
            var divCard = document.createElement('div');
            divCard.class = "card";
            divCard.style = "width:30%";

            var aImg = document.createElement('a');
            aImg.href = json.Images[i].URL;

            aImg.appendChild(image);

            var divCardBody = document.createElement('div');divCard.class = "card-body";
            var caption = document.createElement('h4');
            caption.innerText = json.Images[i].Caption;
            caption.style = "text-align:center";
            image.src = json.Images[i].URL;
            image.alt = json.Images[i].Caption;
            image.style = "width:100%";
            image.class = 'card-img-top';
            divCardBody.appendChild(caption);
            divCard.appendChild(aImg);
            divCard.appendChild(divCardBody);
            divCol.appendChild(divCard);
            gallery.appendChild(divCol);
        }

    });
});*/
