//This is only for the demo purposes
// prepopulating the data
(function(){
    var data;
    
    if ( JSON.parse(!localStorage.getItem('crm_demo_tomas')) ){
        data = [
            {"id":1,"avatar": "https://picsum.photos/120/120?image=1039", "title":"USS Potemkin",status:"NA",street:"Sector 001",city: "The Gamma Lane 12", phone:"+64 021 6355423",email:"aa@example.com","notes":["Prototype for an advanced runabout designed","USS Vengeance - Developed by Khan Noonien","Ship on which James Kirk served as a phaser station operator"], date:"1506750645000"},
            {"id":2,"avatar": "https://picsum.photos/120/120?image=1016", "title":"USS Leyte Gulf",status:"PR",street:"Galactic sector Road 002",city: "The Delta Quadrant",phone:"+64 021 7299465",email:"","notes":["Taken to Mirror Universe by Tholians"], date:"1502775045000"},
            {"id":3,"avatar": "https://picsum.photos/120/120?image=912", "title":"Captain Mackenzie Calhoun",status:"CR",street:"Romulan Neutral Zone St 12 ",city: "Alpha Quadrant",phone:"+64 022 8344231",email:"","notes":["All crew lost killed by alien disease except Captain","USS Yamato - NCC-71807 - Crew discovered Iconian artifacts but is infected by a computer virus that causes antimatter containment loss"], date:"1539581445000"},
            {"id":4,"avatar": "https://picsum.photos/120/120?image=876", "title":"Dikironium Cloud Creature",status:"PR",street:"123 Cytherian Drive",city: "Gamma Quadrant",phone:"+64 027 8565453",email:"","notes":["USS Potemkin - NCC-18253 - William Riker's assignment before his transfer to the USS Enterprise"], date:"1538196123517"},
            {"id":5,"avatar": "https://picsum.photos/120/120?image=945", "title":"USS Yamato - NCC-71807",status:"PR",street:"123 Enterprise Avenue",city: "Beta Quadrant",phone:"+64 027 8565453",email:"","notes":["Antimatter containment positive"], date:"1520828625000"},
            {"id":6,"avatar": "https://picsum.photos/120/120?image=856", "title":"The weapons must have disrupted our communicators",status:"PR",street:"1010 Khan Road",city: "Klingon Neutral Zone",phone:"+64 027 8565453",email:"","notes":["Detecting some unusual fluctuations in subspace frequencies."], date:"1545276225000"},
            {"id":7,"avatar": "https://picsum.photos/120/120?image=845", "title":"The shuttle has no power",status:"CR",street:"Deep Space 9",city: "Romulan Neutral Zone",phone:"+64 027 8565453",email:"","notes":["Tractor beam released"], date:"1442718765000"},
            {"id":8,"avatar": "https://picsum.photos/120/120?image=987", "title":"Communication is not possible",status:"NA",street:"12 Galactic center",city: "Buffer Zone",phone:"+64 027 8565453",email:"johnson.john@example.com","notes":["That's why the transporter's biofilters couldn't extract it"], date:"1262491970000"},
            {"id":9,"avatar": "https://picsum.photos/120/120?image=1023", "title":"Force field maintaining our hull integrity",status:"CR",street:"33 Klingon Terrace",city: "Organian Neutral Zone",phone:"+64 027 8565453",email:"","notes":["Their robes contain ultritium"], date:"1538196123517"}

        ];
        
        localStorage.setItem('crm_demo_tomas', JSON.stringify(data) );
    }
    console.log("DATA prepopulated", data);

})()