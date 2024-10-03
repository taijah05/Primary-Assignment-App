function searchISE() {
    var selectedLocation = document.getElementById("locationChoice").value;

    switch(selectedLocation.toLowerCase()) {
        case "bidmc" :
            modalityAndManufacture();
            break;
        case "bidn" :
            modalityAndManufacture();
            break;
        case "bidc" :
            modalityAndManufacture();
            break;
        case "chestnut hill" :
            modalityAndManufacture();
            break;
        case "mount auburn" :
            mah();
            break;
            case "nebh" :
            modalityAndManufacture();
            break;
        case "lahey" :
            lahey();
            break;
        case "lahey peabody" :
            winchester();
            break;
        case "lexington" :
            lahey();
            break;
        case "winchester" :
            winchester();
            break;
        case "unicorn park" :
            winchester();
            break;
        case "plymouth" :
            modalityAndManufacture();
            break;
                
    }
}

function modalityAndManufacture() {
    var modality = document.getElementById("modalityChoice").value;
    var manufacture = document.getElementById("manufactureChoice").value;
    
        if (modality == "ultrasound" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Mariam";
            document.getElementById("secondaryISE").innerHTML = "Hiram";
        }
        else if (modality == "ultrasound" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Mariam";
            document.getElementById("secondaryISE").innerHTML = "Hiram";
        }
        else if (modality == "ultrasound" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Mariam";
            document.getElementById("secondaryISE").innerHTML = "Hiram";
        }
        else if (modality == "xray" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "xray" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "xray" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "ct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML ="Sam";
        }
        else if (modality == "ct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "ct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "mr" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "mr" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "mr" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "cathlab" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "cathlab" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "cathlab" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "injector" && manufacture == "bayer") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "mammo" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Mariam";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "carm" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Mariam";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "carm" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "carm" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Jerome";
        }
        else if (modality == "trophon" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "trophon2" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "petct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "petct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "nucmed" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "nucmed" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "nucmed" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "injector" && manufacture !== "bayer") {
            alert("Invalid Selection");
        }
        else if (modality == "mammo" && manufacture !== "hologic") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon2" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon2" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "injector" && manufacture == "bayer") {
            alert("Invalid Selection");
        }

}

function mah() {
    var modality = document.getElementById("modalityChoice").value;
    var manufacture = document.getElementById("manufactureChoice").value;
    
        if (modality == "ultrasound" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "ultrasound" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "ultrasound" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "xray" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "xray" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "xray" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "ct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML ="Sam";
        }
        else if (modality == "ct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "ct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "mr" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "mr" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "mr" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "cathlab" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "cathlab" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "cathlab" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "injector" && manufacture == "bayer") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "mammo" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "carm" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "carm" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "carm" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Mariam";
        }
        else if (modality == "trophon" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sam";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "trophon2" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "petct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "petct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "nucmed" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "nucmed" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Amir";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "nucmed" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Josh";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "injector" && manufacture !== "bayer") {
            alert("Invalid Selection");
        }
        else if (modality == "mammo" && manufacture !== "hologic") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon2" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon2" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "injector" && manufacture == "bayer") {
            alert("Invalid Selection");
        }

}

function lahey() {
    var modality = document.getElementById("modalityChoice").value;
    var manufacture = document.getElementById("manufactureChoice").value;
    
        if (modality == "ultrasound" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Jerome";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "ultrasound" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Jerome";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "ultrasound" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Jerome";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "xray" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "xray" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "xray" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "ct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML ="Sohal";
        }
        else if (modality == "ct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "ct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "mr" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "mr" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "mr" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "cathlab" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Steve";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "cathlab" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "cathlab" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "injector" && manufacture == "bayer") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "mammo" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "carm" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "carm" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "carm" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "trophon" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "trophon2" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "petct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "nucmed" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "nucmed" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "nucmed" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "injector" && manufacture !== "bayer") {
            alert("Invalid Selection");
        }
        else if (modality == "mammo" && manufacture !== "hologic") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon2" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon2" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "injector" && manufacture == "bayer") {
            alert("Invalid Selection");
        }
}

function winchester() {
    var modality = document.getElementById("modalityChoice").value;
    var manufacture = document.getElementById("manufactureChoice").value;
    
        if (modality == "ultrasound" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Jerome";
        }
        else if (modality == "ultrasound" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Jerome";
        }
        else if (modality == "ultrasound" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Jerome";
        }
        else if (modality == "xray" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "xray" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "xray" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "ct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML ="Sohal";
        }
        else if (modality == "ct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Amir";
        }
        else if (modality == "ct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "mr" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "mr" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "mr" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Hiram";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "cathlab" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "cathlab" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "cathlab" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Steven";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "injector" && manufacture == "bayer") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "mammo" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "carm" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "carm" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "carm" && manufacture == "hologic") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "trophon" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Sam";
        }
        else if (modality == "trophon2" && manufacture == "nanosonics") {
            document.getElementById("primaryISE").innerHTML = "Sohal";
            document.getElementById("secondaryISE").innerHTML = "Josh";
        }
        else if (modality == "petct" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "petct" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Patrick";
        }
        else if (modality == "nucmed" && manufacture == "ge") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "nucmed" && manufacture == "philips") {
            document.getElementById("primaryISE").innerHTML = "Stevenson";
            document.getElementById("secondaryISE").innerHTML = "Sohal";
        }
        else if (modality == "nucmed" && manufacture == "siemens") {
            document.getElementById("primaryISE").innerHTML = "Patrick";
            document.getElementById("secondaryISE").innerHTML = "Stevenson";
        }
        else if (modality == "injector" && manufacture !== "bayer") {
            alert("Invalid Selection");
        }
        else if (modality == "mammo" && manufacture !== "hologic") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality == "trophon2" && manufacture !== "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon2" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "trophon" && manufacture == "nanosonics") {
            alert("Invalid Selection");
        }
        else if (modality !== "injector" && manufacture == "bayer") {
            alert("Invalid Selection");
        }
    }