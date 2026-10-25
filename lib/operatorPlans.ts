export type PlanModality = "Individual" | "Empresarial" | "Adesão";

export type OperatorOption = {
  modality: PlanModality;
  minimumLives: number;
  facts: string[];
  eligibilityNote?: string;
  copayChoices: string[];
};

export type OperatorPlan = {
  slug: string;
  name: string;
  logo: string;
  description: string;
  options: OperatorOption[];
};

export const operatorPlans: OperatorPlan[] = [
  {
    slug: "medsenior",
    name: "MedSênior",
    logo: "/images/medSenior.png",
    description:
      "Conheça as modalidades disponíveis da MedSênior e consulte as condições aplicáveis ao produto e ao perfil de contratação.",
    options: [
      {
        modality: "Individual",
        minimumLives: 1,
        facts: [
          "Abrangência regional ou nacional, conforme o produto.",
          "Cobertura ambulatorial + hospitalar com obstetrícia.",
          "Acomodação semiprivativa ou privativa, conforme o produto.",
          "Sem coparticipação, conforme as informações disponíveis.",
          "Odontológico não confirmado.",
        ],
        copayChoices: ["Sem coparticipação"],
      },
      {
        modality: "Empresarial",
        minimumLives: 1,
        facts: [
          "Abrangência regional ou nacional, conforme o produto.",
          "Cobertura ambulatorial + hospitalar com obstetrícia.",
          "Acomodação semiprivativa ou privativa, conforme o produto.",
          "Sem coparticipação, conforme as informações disponíveis.",
          "Odontológico não confirmado.",
        ],
        copayChoices: ["Sem coparticipação"],
      },
    ],
  },
  {
    slug: "hapvida",
    name: "Hapvida",
    logo: "/images/hapvida.png",
    description:
      "Consulte alternativas individuais e empresariais da Hapvida e confirme as condições disponíveis para sua região.",
    options: [
      {
        modality: "Individual",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
      {
        modality: "Empresarial",
        minimumLives: 2,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
    ],
  },
  {
    slug: "doctor-clin",
    name: "Doctor Clin",
    logo: "/images/doctorclin.png",
    description:
      "Veja as modalidades empresarial e por adesão da Doctor Clin. A disponibilidade e a elegibilidade devem ser confirmadas na cotação.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 2,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
      {
        modality: "Adesão",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        eligibilityNote:
          "A modalidade por adesão está sujeita à elegibilidade profissional ou associativa.",
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
    ],
  },
  {
    slug: "amil",
    name: "Amil",
    logo: "/images/amil-logo.png",
    description:
      "Consulte opções empresariais Amil e confirme as características e condições aplicáveis ao produto disponível.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 2,
        facts: [
          "Abrangência nacional.",
          "Cobertura ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Condições de odontológico devem ser confirmadas.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
    ],
  },
  {
    slug: "sulamerica",
    name: "SulAmérica",
    logo: "/images/sul_america-logo.png",
    description:
      "Conheça as possibilidades empresarial e por adesão da SulAmérica. As condições variam conforme o produto e a elegibilidade.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 3,
        facts: [
          "Abrangência nacional.",
          "Cobertura ambulatorial + hospitalar com obstetrícia ou hospitalar com obstetrícia, conforme o produto.",
          "Opções com ou sem coparticipação.",
          "Odontológico empresarial sujeito à confirmação.",
        ],
        copayChoices: [
          "Com coparticipação",
          "Sem coparticipação",
          "Quero comparar as opções",
        ],
      },
      {
        modality: "Adesão",
        minimumLives: 1,
        facts: [
          "Abrangência nacional.",
          "Cobertura ambulatorial + hospitalar com obstetrícia ou hospitalar com obstetrícia, conforme o produto.",
          "Coparticipação conforme as condições do produto.",
          "Odontológico não informado.",
        ],
        eligibilityNote:
          "A modalidade por adesão depende de elegibilidade profissional ou associativa.",
        copayChoices: ["Quero confirmar as condições"],
      },
    ],
  },
  {
    slug: "humana-saude",
    name: "Humana Saúde",
    logo: "/images/humana.png",
    description:
      "Consulte alternativas empresariais e por adesão da Humana Saúde, sujeitas à disponibilidade e aos critérios de elegibilidade.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial + hospitalar, com ou sem obstetrícia, conforme o produto.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
      {
        modality: "Adesão",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial + hospitalar, com ou sem obstetrícia, conforme o produto.",
          "Coparticipação total ou parcial.",
          "Odontológico não informado.",
        ],
        eligibilityNote: "A modalidade por adesão está sujeita à elegibilidade.",
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
    ],
  },
  {
    slug: "sulmed",
    name: "Sulmed",
    logo: "/images/sulmed.png",
    description:
      "Compare as modalidades empresarial e por adesão da Sulmed, confirmando as condições disponíveis para cada perfil.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total ou parcial.",
          "Odontológico opcional.",
        ],
        copayChoices: [
          "Coparticipação total",
          "Coparticipação parcial",
          "Quero comparar as opções",
        ],
      },
      {
        modality: "Adesão",
        minimumLives: 1,
        facts: [
          "Abrangência regional.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total.",
          "Odontológico não informado.",
        ],
        eligibilityNote:
          "A modalidade por adesão depende de elegibilidade profissional ou associativa.",
        copayChoices: ["Coparticipação total"],
      },
    ],
  },
  {
    slug: "unimed-porto-alegre",
    name: "Unimed Porto Alegre",
    logo: "/images/unimed.png",
    description:
      "Conheça alternativas empresariais da Unimed Porto Alegre e confirme as características do produto adequado à sua empresa.",
    options: [
      {
        modality: "Empresarial",
        minimumLives: 1,
        facts: [
          "Abrangência regional ou nacional, conforme o produto.",
          "Cobertura ambulatorial ou ambulatorial + hospitalar com obstetrícia.",
          "Coparticipação total.",
          "Odontológico opcional.",
        ],
        copayChoices: ["Coparticipação total"],
      },
    ],
  },
];

export function getOperatorPlan(slug: string) {
  return operatorPlans.find((operator) => operator.slug === slug);
}
