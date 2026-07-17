import { reactive } from "vue"

export const cafes = reactive([
    {
        id: 1,
        nome: ' Arabica',
        origem: "Ethiopia",
        avaliado: false,
        media: 8.7,
        minha_media: null,
        notas:{
            aroma: 0,
            docura: 0,
            acidez: 0,
            corpo: 0,
            finalizacao: 0,
        }
    },
    {
        id: 2,
        nome: 'Robusta',
        origem: " Brazil",
        avaliado: false,
        media: 8.3,
        minha_media: null,
        notas:{
            aroma: 0,
            docura: 0,
            acidez: 0,
            corpo: 0,
            finalizacao: 0,
        }
    },
    {
        id: 3,
        nome: 'Liberica',
        origem: "Malaysia",
        avaliado: false,
        media: 7.9,
        minha_media: null,
        notas:{
            aroma: 0,
            docura: 0,
            acidez: 0,
            corpo: 0,
            finalizacao: 0,
        }
    },
    {
        id: 4,
        nome: 'Excelsa',
        origem: "Indonesia",
        avaliado: false,
        media: 7.2,
        minha_media: null,
        notas:{
            aroma: 0,
            docura: 0,
            acidez: 0,
            corpo: 0,
            finalizacao: 0,
        }
    },
])