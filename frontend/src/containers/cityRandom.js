import React, { Component } from 'react'

export default class cityRandom extends Component {

    handleClick = event => {
        event.preventDefault()

        const populationArray = PopulationArray.PopulationArray
        const environmentArray = EnivronemtnArray.EnvironementArray 
        const governmentArray = GovernmentArray.GovernmentArray 
        const importMaterialsArray = ImportArray.ImportArray
        const exportMaterialsArray = ExportsArray.ExportsArray 
        const armorerArray = ArmorerArray.ArmorerArray
        const weaponSmithArray = WeaponSmith.WeaponSmith
        const pointOfInterest1Array = PointOfInterest1.PointOfInterest1
        const pointOfInterest2Array = PointOfInterest2.PointOfInterest2
        const pointOfInterest3Array = PointOfInterest3.PointOfInterest3
        const suppliesArray = Supplies.Supplies
        const race1Array = RaceArray.RaceArray 
        const race2Array = RaceArray.RaceArray
        const race3Array = RaceArray.RaceArray
        const religion1Array = ReligionArray.ReligionArray
        const religion2Array = ReligionArray.ReligionArray
        const religion3Array = ReligionArray.ReligionArray
        const secretArray = SecretArray.SecretArray
        const darkSecretArray = DarkSecretArray.DarkSecretArray


        const RandomPopulation = populationArray[Math.floor(Math.random() * populationArray.length)]
        const RandomEnvironment = environmentArray[Math.floor(Math.random() * environmentArray.length)]
        const RandomGovernment = governmentArray[Math.floor(Math.random() * governmentArray.length)]
        const RandomImportMaterials = importMaterialsArray[Math.floor(Math.random() * importMaterialsArray.length)]
        const RandomExportMaterials = exportMaterialsArray[Math.floor(Math.random() * exportMaterialsArray.length)]
        const RandomArmorer = armorerArray[Math.floor(Math.random() * armorerArray.length)]
        const RandomWeaponSmith = weaponSmithArray[Math.floor(Math.random() * weaponSmithArray.length)]
        const RandomPointOfInterest1 = pointOfInterest1Array[Math.floor(Math.random() * pointOfInterest1Array.length)]
        const RandomPointOfInterest2 = pointOfInterest2Array[Math.floor(Math.random() * pointOfInterest2Array.length)]
        const RandomPointOfInterest3 = pointOfInterest3Array[Math.floor(Math.random() * pointOfInterest3Array.length)]
        const RandomSupplies = suppliesArray[Math.floor(Math.random() * suppliesArray.length)]
        const RandomRace1 = race1Array[Math.floor(Math.random() * race1Array.length)]
        const RandomRace2 = race2Array[Math.floor(Math.random() * race2Array.length)]
        const RandomRace3 = race3Array[Math.floor(Math.random() * race3Array.length)]
        const RandomReligion1 = religion1Array[Math.floor(Math.random() * religion1Array.length)]
        const RandomReligion2 = religion2Array[Math.floor(Math.random() * religion2Array.length)]
        const RandomReligion3 = religion2Array[Math.floor(Math.random() * religion3Array.length)]
        const RandomSecret = secretArray[Math.floor(Math.random() * secretArray.length)]
        const RandomDarkSecret = darkSecretArray[Math.floor(Math.random() * darkSecretArray.length)]

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
