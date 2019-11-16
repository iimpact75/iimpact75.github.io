fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
           
            const prophets = jsonObject['prophets'];
            for (let i = 0; i < prophets.length; i++) {
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let birthd = document.createElement('p');
                let birthp = document.createElement('p');
                let image= document.createElement('img');
                

                name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                birthd.textContent = "Date of Birth: "+ prophets[i].birthdate; 
                birthp.textContent = "Place of Birth: "+prophets[i].birthplace;
                image.src = prophets[i].imageurl;
                
                card.appendChild(name);
                card.appendChild(birthd);
                card.appendChild(birthp);
                card.appendChild(image);
           
                document.querySelector('div.cards').appendChild(card);
            }});