import { QuestionnaireData } from '../types/questionnaire';

export const questionnaireData: QuestionnaireData = {
  sections: [
    {
      id: 1,
      title: "Gestion de la trésorerie",
      subtitle: "Cash Flow & Stabilité",
      questionCount: 5
    },
    {
      id: 2,
      title: "Budget & Planification financière",
      subtitle: "",
      questionCount: 5
    },
    {
      id: 3,
      title: "Fiscalité & rémunération personnelle",
      subtitle: "Québec",
      questionCount: 5
    },
    {
      id: 4,
      title: "Systèmes, processus et visibilité financière",
      subtitle: "",
      questionCount: 5
    }
  ],
  questions: [
    {
      id: "q1",
      text: "Votre entreprise vous verse-t-elle un salaire ou une rémunération régulière ?",
      section: 1,
      options: [
        { label: "Oui, un montant fixe et régulier chaque mois.", value: "A" },
        { label: "Oui, mais le montant ou la fréquence varient.", value: "B" },
        { label: "Rarement ou de manière irrégulière.", value: "C" },
        { label: "Jamais.", value: "D" }
      ]
    },
    {
      id: "q2",
      text: "Votre entreprise dispose-t-elle de suffisamment de liquidités pour couvrir ses dépenses opérationnelles pendant une période d'inactivité ou de faible revenu ?",
      section: 1,
      options: [
        { label: "Oui, plus de 6 mois de dépenses couvertes.", value: "A" },
        { label: "Oui, entre 3 et 6 mois de dépenses couvertes.", value: "B" },
        { label: "Oui, moins de 3 mois de dépenses couvertes.", value: "C" },
        { label: "Non, moins d'un mois de dépenses couvertes.", value: "D" }
      ]
    },
    {
      id: "q3",
      text: "Dans quelle mesure subissez-vous des retards de paiement importants de la part de vos clients ?",
      section: 1,
      options: [
        { label: "Jamais ou très rarement (moins de 5% des factures).", value: "A" },
        { label: "Occasionnellement (entre 5% et 20% des factures).", value: "B" },
        { label: "Fréquemment (plus de 20% des factures).", value: "C" },
        { label: "C'est un problème majeur qui affecte ma trésorerie.", value: "D" }
      ]
    },
    {
      id: "q4",
      text: "Disposez-vous d'un fonds d'urgence ou d'une réserve de trésorerie dédiée spécifiquement à votre entreprise, distincte de vos finances personnelles ?",
      section: 1,
      options: [
        { label: "Oui, un fonds clairement identifié et suffisant.", value: "A" },
        { label: "Oui, mais il est partiellement mélangé avec mes finances personnelles ou insuffisant.", value: "B" },
        { label: "Non, pas de fonds d'urgence dédié à l'entreprise.", value: "C" }
      ]
    },
    {
      id: "q5",
      text: "À quelle fréquence vérifiez-vous le solde bancaire et les mouvements de trésorerie de votre entreprise ?",
      section: 1,
      options: [
        { label: "Quotidiennement ou plusieurs fois par semaine.", value: "A" },
        { label: "Hebdomadairement.", value: "B" },
        { label: "Mensuellement.", value: "C" },
        { label: "Moins d'une fois par mois ou rarement.", value: "D" }
      ]
    },
    {
      id: "q6",
      text: "Établissez-vous un budget annuel détaillé pour votre entreprise ?",
      section: 2,
      options: [
        { label: "Oui, un budget détaillé avec des objectifs clairs.", value: "A" },
        { label: "Oui, un budget approximatif ou des prévisions générales.", value: "B" },
        { label: "Non, mais j'ai une idée des revenus et dépenses.", value: "C" },
        { label: "Non, je n'établis pas de budget.", value: "D" }
      ]
    },
    {
      id: "q7",
      text: "Comparez-vous régulièrement vos résultats financiers réels à vos prévisions budgétaires ?",
      section: 2,
      options: [
        { label: "Oui, mensuellement ou trimestriellement, avec des ajustements si nécessaire.", value: "A" },
        { label: "Occasionnellement, lorsque j'en ressens le besoin.", value: "B" },
        { label: "Rarement ou jamais.", value: "C" }
      ]
    },
    {
      id: "q8",
      text: "Effectuez-vous des prévisions de trésorerie à court terme (ex: 3 à 6 mois) pour anticiper les besoins et les surplus ?",
      section: 2,
      options: [
        { label: "Oui, régulièrement et de manière proactive.", value: "A" },
        { label: "Occasionnellement, en cas de besoin spécifique.", value: "B" },
        { label: "Rarement ou jamais.", value: "C" }
      ]
    },
    {
      id: "q9",
      text: "Avez-vous une connaissance précise de toutes vos dépenses fixes mensuelles (loyers, abonnements logiciels, salaires fixes, assurances, etc.) ?",
      section: 2,
      options: [
        { label: "Oui, je connais précisément toutes mes dépenses fixes.", value: "A" },
        { label: "Oui, la plupart, mais il y a quelques incertitudes.", value: "B" },
        { label: "Non, j'ai une estimation globale mais pas de détail précis.", value: "C" }
      ]
    },
    {
      id: "q10",
      text: "Savez-vous précisément combien vous coûte (en temps et argent) l'acquisition d'un nouveau client (Coût d'Acquisition Client - CAC) ?",
      section: 2,
      options: [
        { label: "Oui, je calcule et suis mon CAC régulièrement.", value: "A" },
        { label: "J'ai une estimation approximative de mon CAC.", value: "B" },
        { label: "Non, je n'ai pas cette information.", value: "C" }
      ]
    },
    {
      id: "q11",
      text: "Avez-vous une stratégie de rémunération personnelle (salaire, dividendes, combinaison) optimisée pour votre situation fiscale et financière ?",
      section: 3,
      options: [
        { label: "Oui, une stratégie claire et optimisée, définie avec un professionnel.", value: "A" },
        { label: "Oui, une stratégie de base, mais qui pourrait être améliorée.", value: "B" },
        { label: "Non, je n'ai pas de stratégie définie.", value: "C" }
      ]
    },
    {
      id: "q12",
      text: "Mettez-vous systématiquement de l'argent de côté pour vos obligations fiscales (TPS/TVQ, impôts personnels, acomptes provisionnels, etc.) ?",
      section: 3,
      options: [
        { label: "Oui, un montant précis est mis de côté chaque mois/trimestre.", value: "A" },
        { label: "Oui, mais le montant est parfois insuffisant ou irrégulier.", value: "B" },
        { label: "Rarement ou jamais, je gère au moment des échéances.", value: "C" }
      ]
    },
    {
      id: "q13",
      text: "Respectez-vous toujours les échéances fiscales (paiements et déclarations) sans stress ou urgence de dernière minute ?",
      section: 3,
      options: [
        { label: "Toujours, je suis bien organisé et anticipe les échéances.", value: "A" },
        { label: "Généralement, mais il arrive que je sois un peu juste.", value: "B" },
        { label: "Souvent en retard ou sous pression à l'approche des échéances.", value: "C" }
      ]
    },
    {
      id: "q14",
      text: "Travaillez-vous avec un professionnel comptable (comptable agréé, fiscaliste, technicien comptable) pour la gestion de vos obligations fiscales ?",
      section: 3,
      options: [
        { label: "Oui, je travaille avec un professionnel qualifié.", value: "A" },
        { label: "Non, je gère mes obligations fiscales seul(e).", value: "B" }
      ]
    },
    {
      id: "q15",
      text: "Avez-vous déjà rencontré des difficultés ou pénalités fiscales (retards, oublis, erreurs) ?",
      section: 3,
      options: [
        { label: "Jamais.", value: "A" },
        { label: "Occasionnellement, mais sans conséquences majeures.", value: "B" },
        { label: "Oui, cela m'est arrivé plusieurs fois et a eu des impacts.", value: "C" }
      ]
    },
    {
      id: "q16",
      text: "Utilisez-vous un logiciel comptable dédié (ex: QuickBooks, Xero, Wave, Acomba) pour suivre les finances de votre entreprise ?",
      section: 4,
      options: [
        { label: "Oui, et je l'utilise régulièrement et efficacement.", value: "A" },
        { label: "Oui, mais je ne l'utilise pas de manière optimale ou régulière.", value: "B" },
        { label: "Non, j'utilise des feuilles de calcul (Excel) ou aucun suivi structuré.", value: "C" }
      ]
    },
    {
      id: "q17",
      text: "Avez-vous une visibilité claire et en temps réel sur vos indicateurs financiers clés (ex: revenus, dépenses, marge brute, trésorerie disponible) ?",
      section: 4,
      options: [
        { label: "Très claire, je peux accéder à ces informations rapidement.", value: "A" },
        { label: "Partielle, je dois faire des recherches pour obtenir les chiffres.", value: "B" },
        { label: "Très faible, je ne sais pas où en sont mes indicateurs clés.", value: "C" }
      ]
    },
    {
      id: "q18",
      text: "À quelle fréquence vos données financières (transactions, factures, dépenses) sont-elles mises à jour dans votre système comptable ?",
      section: 4,
      options: [
        { label: "Quotidiennement ou hebdomadairement.", value: "A" },
        { label: "Mensuellement.", value: "B" },
        { label: "Trimestriellement ou moins fréquemment.", value: "C" }
      ]
    },
    {
      id: "q19",
      text: "Avez-vous documenté des procédures financières simples (ex: facturation, gestion des reçus, paiements fournisseurs) pour votre entreprise ?",
      section: 4,
      options: [
        { label: "Oui, des procédures claires et accessibles pour toutes les tâches financières.", value: "A" },
        { label: "Partiellement, certaines procédures sont documentées, d'autres non.", value: "B" },
        { label: "Non, les procédures sont informelles ou inexistantes.", value: "C" }
      ]
    },
    {
      id: "q20",
      text: "Globalement, avez-vous l'impression que vos processus et outils financiers actuels facilitent ou compliquent la gestion quotidienne de votre entreprise ?",
      section: 4,
      options: [
        { label: "Ils facilitent grandement la gestion.", value: "A" },
        { label: "Ils sont neutres, ni facilitateurs ni compliquants.", value: "B" },
        { label: "Ils compliquent fortement la gestion et sont une source de stress.", value: "C" }
      ]
    }
  ]
};