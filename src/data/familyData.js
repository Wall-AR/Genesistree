const familyData = {
    members: [
      {
        id: 1,
        name: "Luiz Flávio de Souza Rodrigues",
        image: "luiz.jpg",
        birthDate: "15/05/1960",
        profession: "Engenheiro",
        spouseId: 2,
        parentIds: []
      },
      {
        id: 2,
        name: "Noeli da Conceição Barreto de Araújo",
        image: "noeli.jpg",
        birthDate: "22/09/1962",
        profession: "Professora",
        spouseId: 1,
        parentIds: []
      },
      {
        id: 3,
        name: "Wallace",
        image: "wallace.jpg",
        birthDate: "10/03/1985",
        profession: "Desenvolvedor",
        spouseId: null,
        parentIds: [1, 2]
      },
      {
        id: 4,
        name: "Michael",
        image: "michael.jpg",
        birthDate: "05/07/1987",
        profession: "Médico",
        spouseId: null,
        parentIds: [1, 2]
      },
      {
        id: 5,
        name: "Luiz",
        image: "luiz_jr.jpg",
        birthDate: "18/11/1989",
        profession: "Advogado",
        spouseId: null,
        parentIds: [1, 2]
      },
      {
        id: 6,
        name: "Victor",
        image: "victor.jpg",
        birthDate: "30/01/1992",
        profession: "Arquiteto",
        spouseId: null,
        parentIds: [1, 2]
      }
    ]
  };
  
  export default familyData;