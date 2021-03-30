mutation {
    addCategory(categoryName:"Mammal"){
      id
      categoryName
    }
  }
  
  mutation {
    addSpecies(speciesName:"Cat", category:"someCategoryId"){
      id
      speciesName
    }
  }
  
  mutation {
    addAnimal(animalName: "Frank", species: "someSpeciesId"){
      id
      animalName
    }
  }
  