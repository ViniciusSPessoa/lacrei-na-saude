import profissional1 from "./médico01.jpg"
import profissional2 from "./médico02.jpg"
import profissional3 from "./médico03.jpg"
import profissional4 from "./médico04.jpg"
import profissional5 from "./médico05.jpg"
import profissional6 from "./médico06.jpg"

export const profissionais = [
    {   id: 1,
        nome: "Dra. Beatriz Santos",
        especialidade: "Ginecologia e Obstetrícia",
        categoria: "Ginecologia",
        foto: profissional1,
        selo: "atendimento trans-friendly",
        pronomes: "Ela/Dela",
        localizacao: "São Paulo, SP",
        avaliacao: 4.9,
        totalAvaliacoes: 124,
        atendimento: "Um espaço de cuidado integral à saúde ginecológica e reprodutiva, pautado na escuta sensível, no respeito à autonomia corporal e nas decisões compartilhadas. Cada etapa do cuidado é conduzida sem julgamentos, respeitando a identidade, as necessidades e as escolhas de cada pessoa.",

        servico: [
            "Saúde Trans",
            "Hormonização",
            "Pré-natal Inclusivo",
            "Ginecologia Geral"
        ],

        experiencia: [
            "+15 anos de prática clínica",
            "Mestra em Saúde Pública (USP)",
            "Consultora em Políticas de Diversidade"
        ],

        descricao: "Acredito que o cuidado em saúde deve ser um espaço de liberdade, segurança e acolhimento. Minha prática é fundamentada no respeito à identidade de gênero, à orientação sexual e à diversidade corporal. Ofereço acompanhamento ginecológico individualizado, orientação em saúde sexual e reprodutiva e assistência obstétrica inclusiva, sempre respeitando as necessidades e decisões de cada paciente.",

        valores: [
            "Acolhimento Real",
            "Ética e Ciência",
            "Privacidade Total"
        ],

        avaliacoes: [
            {
                texto: "O atendimento foi acolhedor e respeitoso. Senti que minhas dúvidas foram ouvidas e que minhas decisões foram consideradas durante toda a consulta.",
                autor: "Lucas R.",
                data: "Há 2 semanas"
            },
            {
                texto: "Recebi explicações claras e cuidadosas sobre minha saúde. Foi uma experiência positiva, com muita atenção e respeito.",
                autor: "Mariana G.",
                data: "Há 1 mês"
            }
        ]
    },

    {   id: 2,
        nome: "Dra. Ester Carvalho",
        especialidade: "Odontologia",
        categoria: "Odontologia",
        foto: profissional2,
        selo: "atendimento trans-friendly",
        pronomes: "Ela/Dela",
        localizacao: "Belém, PA",
        avaliacao: 4.8,
        totalAvaliacoes: 96,
        atendimento: "Um ambiente acolhedor dedicado à saúde bucal, onde o cuidado é conduzido com empatia, atenção individualizada e respeito às particularidades de cada paciente. Aqui, você encontra um atendimento livre de estigmas, com orientações claras e foco no seu conforto, bem-estar e qualidade de vida.",

        servico: [
            "Prevenção e Higiene Bucal",
            "Restaurações Dentárias",
            "Limpeza e Profilaxia",
            "Avaliação Odontológica"
        ],

        experiencia: [
            "+10 anos de atuação em Odontologia",
            "Experiência em prevenção e promoção da saúde bucal",
            "Atendimento odontológico individualizado"
        ],

        descricao: "Acredito que o cuidado odontológico deve acontecer em um ambiente seguro, acessível e livre de julgamentos. Meu objetivo é proporcionar uma experiência acolhedora, explicando cada etapa do tratamento e respeitando as necessidades individuais de cada paciente. Trabalho com foco na prevenção, na saúde bucal e na construção de uma relação de confiança, promovendo conforto, autonomia e bem-estar durante o atendimento.",

        valores: [
            "Respeito à Diversidade",
            "Prevenção e Cuidado",
            "Conforto e Confiança"
        ],

        avaliacoes: [
            {
                texto: "Fui atendida com muita atenção e respeito. A profissional explicou os procedimentos antes de realizá-los e me deixou tranquila durante a consulta.",
                autor: "Juliana M.",
                data: "Há 2 semanas"
            },
            {
                texto: "Gostei muito do acolhimento e da clareza das orientações sobre higiene bucal. O atendimento foi cuidadoso do início ao fim.",
                autor: "Rafael C.",
                data: "Há 1 mês"
            }
        ]
    },

    {   id: 3,
        nome: "Dra. Carolina Oliveira",
        especialidade: "Endocrinologia",
        categoria: "Endocrinologia",
        foto: profissional3,
        selo: "atendimento Inclusivo",
        pronomes: "Ela/Dela",
        localizacao: "Belém, PA",
        avaliacao: 4.9,
        totalAvaliacoes: 163,
        atendimento: "Um espaço de cuidado integral voltado à saúde hormonal e metabólica, fundamentado na escuta atenta, na investigação cuidadosa e em decisões compartilhadas. O acompanhamento considera as particularidades de cada organismo, abrangendo condições como diabetes, alterações da tireoide e necessidades relacionadas à hormonização. Cada pessoa é acolhida com respeito, recebendo orientações claras e um plano de cuidado individualizado, sem discriminação ou julgamentos.",

        servico: [
            "Distúrbios da Tireoide",
            "Obesidade e Saúde Metabólica",
            "Reposição Hormonal",
            "Avaliação de Distúrbios Endócrinos"
        ],

        experiencia: [
            "+14 anos de experiência clínica",
            "Atuação em Endocrinologia e Metabologia",
            "Atualização contínua em doenças hormonais e metabólicas"
        ],

        descricao: "Meu compromisso é oferecer um atendimento acolhedor e individualizado, compreendendo que cada paciente possui necessidades e objetivos únicos. Trabalho com foco na prevenção, na investigação de alterações hormonais e metabólicas e no acompanhamento de condições como diabetes e doenças da tireoide. Busco construir planos de cuidado personalizados, baseados em evidências científicas e no diálogo, respeitando a autonomia e a realidade de cada pessoa.",

        valores: [
            "Cuidado Individualizado",
            "Ciência e Atualização",
            "Ética e Confiança"
        ],

        avaliacoes: [
            {
                texto: "Recebi explicações claras sobre minha condição e sobre as possibilidades de tratamento. A consulta foi atenciosa e minhas dúvidas foram consideradas.",
                autor: "Ricardo S.",
                data: "Há 3 semanas"
            },
            {
                texto: "Gostei da atenção aos detalhes e da forma cuidadosa como minhas preocupações foram abordadas. Saí da consulta entendendo melhor os próximos passos.",
                autor: "Fernanda L.",
                data: "Há 1 mês"
            }
        ]
    },

    {   id: 4,
        nome: "Dra. Maria Silva",
        especialidade: "Nutrição",
        categoria: "Nutrição",
        foto: profissional4,
        selo: "atendimento Inclusivo",
        pronomes: "Ela/Dela",
        localizacao: "Manaus, AM",
        avaliacao: 4.8,
        totalAvaliacoes: 112,
        atendimento: "Um espaço de acolhimento e educação alimentar que valoriza a relação saudável com a comida, o respeito à diversidade corporal e o bem-estar individual. O acompanhamento nutricional considera a rotina, a cultura alimentar, as preferências e as necessidades de cada pessoa, sem imposição de padrões estéticos ou restrições desnecessárias. Aqui, o cuidado é construído em conjunto, com orientações realistas, respeito às escolhas e uma abordagem livre de culpa e julgamentos.",

        servico: [
            "Reeducação Alimentar",
            "Nutrição Clínica",
            "Planejamento Alimentar Individualizado",
            "Nutrição e Saúde Metabólica"
        ],

        experiencia: [
            "+11 anos de atuação em Nutrição",
            "Experiência em acompanhamento nutricional individualizado",
            "Atuação em educação alimentar e promoção da saúde"
        ],

        descricao: "Acredito que a alimentação deve ser uma fonte de saúde, prazer e bem-estar, e não de culpa ou restrições desnecessárias. Meu atendimento considera a rotina, a cultura alimentar, as preferências e as necessidades de cada pessoa. Desenvolvo estratégias nutricionais individualizadas e sustentáveis, com orientações baseadas em evidências científicas, respeitando a diversidade corporal e promovendo uma relação mais equilibrada com a alimentação.",

        valores: [
            "Alimentação sem Julgamentos",
            "Equilíbrio e Bem-Estar",
            "Respeito à Individualidade"
        ],

        avaliacoes: [
            {
                texto: "Recebi orientações que fazem sentido para minha rotina, sem dietas impossíveis de seguir. O atendimento foi respeitoso e bastante esclarecedor.",
                autor: "Patrícia L.",
                data: "Há 2 semanas"
            },
            {
                texto: "Aprendi a olhar para minha alimentação de uma forma mais equilibrada. Gostei de participar das decisões e de ter minhas preferências respeitadas.",
                autor: "André F.",
                data: "Há 1 mês"
            }
        ]
    },

    {   id: 5,
        nome: "Dr. Marcos Oliveira",
        especialidade: "Psicologia Clínica",
        categoria: "Psicologia",
        foto: profissional5,
        selo: "Neurodivergente-friendly",
        pronomes: "Ele/Dele",
        localizacao: "Rio de Janeiro, RJ",
        avaliacao: 4.9,
        totalAvaliacoes: 187,
        atendimento: "Um refúgio de escuta e acolhimento emocional, construído sobre a confiança, o respeito à individualidade e o sigilo profissional. A psicoterapia oferece um espaço seguro para compreender emoções, enfrentar desafios, desenvolver estratégias para lidar com a ansiedade e fortalecer a saúde mental. Cada processo respeita a história, os limites e o ritmo de cada pessoa, valorizando a diversidade e promovendo o autoconhecimento sem estigmas ou julgamentos.",

        servico: [
            "Ansiedade e Estresse",
            "Depressão",
            "Terapia Cognitivo-Comportamental (TCC)",
            "Relacionamentos e Desenvolvimento Pessoal"
        ],

        experiencia: [
            "+12 anos de atuação clínica",
            "Atuação em abordagens psicoterapêuticas baseadas em evidências",
            "Experiência em acompanhamento individual e desenvolvimento emocional"
        ],

        descricao: "Acredito que a psicoterapia é um espaço de escuta, acolhimento e transformação. Meu objetivo é oferecer um ambiente seguro, livre de julgamentos, onde cada pessoa possa compreender suas emoções, desenvolver estratégias para enfrentar desafios e fortalecer sua saúde mental. O atendimento é personalizado, respeitando a individualidade, os valores e o ritmo de cada paciente, com compromisso com a ética profissional, o sigilo e as práticas respaldadas pela ciência.",

        valores: [
            "Escuta Ativa",
            "Ética Profissional",
            "Sigilo e Confidencialidade"
        ],

        avaliacoes: [
            {
                texto: "Desde as primeiras sessões me senti acolhido e compreendido. O acompanhamento me ajudou a refletir sobre minhas dificuldades e a desenvolver novas estratégias para lidar com a ansiedade.",
                autor: "Ana P.",
                data: "Há 2 semanas"
            },
            {
                texto: "O atendimento é atencioso e respeitoso. Tenho conseguido compreender melhor minhas emoções e trabalhar questões importantes para meu desenvolvimento pessoal.",
                autor: "Carlos M.",
                data: "Há 1 mês"
            }
        ]
    },

    {   id: 6,
        nome: "Dr. Carlos Carvalho",
        especialidade: "Dermatologia",
        categoria: "Dermatologia",
        foto: profissional6,
        selo: "atendimento trans-friendly",
        pronomes: "Ele/Dele",
        localizacao: "São Paulo, SP",
        avaliacao: 4.8,
        totalAvaliacoes: 138,
        atendimento: "Um espaço de cuidado dermatológico que valoriza a saúde da pele, o bem-estar e o respeito à diversidade corporal. O atendimento contempla a avaliação individualizada de condições como acne e rosácea, a prevenção de lesões cutâneas e os cuidados com a pele em diferentes fases da vida. Cada orientação é oferecida com clareza, considerando as necessidades e características de cada paciente, em um ambiente acolhedor, inclusivo e livre de preconceitos.",

        servico: [
            "Avaliação e Cuidados com a Pele",
            "Dermatologia Clínica",
            "Prevenção e Rastreamento de Lesões Cutâneas",
            "Saúde da Pele em Diferentes Fases da Vida"
        ],

        experiencia: [
            "+13 anos de atuação em Dermatologia",
            "Experiência em prevenção e tratamento de condições dermatológicas",
            "Atualização contínua em cuidados clínicos com a pele"
        ],

        descricao: "Acredito que o cuidado dermatológico deve considerar a saúde, o conforto e a individualidade de cada pessoa. Ofereço atendimento acolhedor e respeitoso, com avaliação cuidadosa das necessidades da pele e explicações claras sobre as opções de cuidado. Meu trabalho prioriza a prevenção, o diagnóstico responsável e a definição conjunta de condutas, sempre com base em evidências científicas e respeito à diversidade.",

        valores: [
            "Respeito à Individualidade",
            "Prevenção e Segurança",
            "Transparência no Cuidado"
        ],

        avaliacoes: [
            {
                texto: "O médico explicou as possibilidades de cuidado com clareza e respondeu às minhas dúvidas sem pressa. Me senti respeitado durante toda a consulta.",
                autor: "Thiago R.",
                data: "Há 2 semanas"
            },
            {
                texto: "Atendimento atencioso e orientações bem explicadas. Gostei de entender as opções de tratamento e os cuidados necessários para minha pele.",
                autor: "Beatriz N.",
                data: "Há 1 mês"
            }
        ]
    }
];