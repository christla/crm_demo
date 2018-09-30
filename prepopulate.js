//This is only for the demo purposes
// prepopulating the data
(function(){
    var data;
    
    if ( JSON.parse(!localStorage.getItem('crm_demo_tomas')) ){
        data = [
            {"id":1,"avatar": "https://picsum.photos/120/120?image=1039", "title":"USS Potemkin",status:"NA",street:"12 Western Hill St",city: "Auckland", phone:"+64 021 6355423",email:"aa@example.com","notes":["Prototype for an advanced runabout designed","USS Vengeance - Developed by Khan Noonien","Ship on which James Kirk served as a phaser station operator"], date:"1538196063408"},
            {"id":2,"avatar": "https://picsum.photos/120/120?image=1016", "title":"USS Leyte Gulf",status:"PR",street:"10 East Road",city: "Wellington",phone:"+64 021 7299465",email:"","notes":["Taken to Mirror Universe by Tholians"], date:"1538196123517"},
            {"id":3,"avatar": "https://picsum.photos/120/120?image=912", "title":"Captain Mackenzie Calhoun",status:"CR",street:"123 WesternSt ",city: "New Plymouth",phone:"+64 022 8344231",email:"","notes":["All crew lost killed by alien disease except Captain","USS Yamato - NCC-71807 - Crew discovered Iconian artifacts but is infected by a computer virus that causes antimatter containment loss"], date:"1538196063408"},
            {"id":4,"avatar": "https://picsum.photos/120/120?image=876", "title":"Dikironium Cloud Creature",status:"PR",street:"123 Western Dr",city: "Sydney",phone:"+64 027 8565453",email:"","notes":["USS Potemkin - NCC-18253 - William Riker's assignment before his transfer to the USS Enterprise"], date:"1538196123517"}

        ];
        
        localStorage.setItem('crm_demo_tomas', JSON.stringify(data) );
    }
    console.log("DATA prepopulated", data);

})()