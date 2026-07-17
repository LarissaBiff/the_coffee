import { reactive } from "vue"

export const cafes = reactive([
    {
        id: 1,
        nome: 'Arabica',
        origem: "Ethiopia",
        descricao: "Smooth and aromatic, with sweet notes and balanced acidity. The most widely grown coffee bean in the world.",
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
        origem: "Brazil",
        descricao: "Strong body and intense flavor, with more caffeine and a pronounced bitterness. Ideal for those who enjoy a full-bodied coffee.",
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
        descricao: "Rare and exotic, with a floral and fruity aroma quite different from traditional beans.",
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
        descricao: "Tropical notes with mild acidity, often used to add complexity to blends.",
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