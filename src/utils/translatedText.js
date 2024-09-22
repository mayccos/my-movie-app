import { useParams } from "next/navigation";

// Objets contenant des traductions pour différentes langues
const translations = {
  en: {
    du: "From",
    au: "To",
    sortie: "Release date",
    filtre: "Filter",
    tri: "Sort by",
    popularité: "Popularity",
    note: "Note",
    numNote: "Number of note",
    recherche: "Search",
    inscription: "Signup",

    // Plus de traductions...
  },
  fr: {
    du: "Du",
    au: "Au",
    sortie: "Date de sortie",
    filtre: "Filtre",
    tri: "Trier par",
    popularité: "Popularité",
    note: "Note",
    numNote: "Numbre de notes",
    recherche: "Rechercher",
    inscription: "S'inscrire",

    // Plus de traductions...
  },
  // Plus de langues...
};

const traductionPage = (
  au,
  du,
  filtre,
  sortie,
  tri,
  popularité,
  note,
  numNote,
  recherche,
  inscription
) => {
  let text = [
    (du = ""),
    (au = ""),
    (sortie = ""),
    (filtre = ""),
    (tri = ""),
    (popularité = ""),
    (note = ""),
    (numNote = ""),
    (recherche = ""),
    (inscription = ""),
  ];
  const params = useParams();
  if (params.locale == "fr") {
    text = [
      (au = translations.fr.au),
      (du = translations.fr.du),
      (filtre = translations.fr.filtre),
      (sortie = translations.fr.sortie),
      (tri = translations.fr.tri),
      (popularité = translations.fr.popularité),
      (note = translations.fr.note),
      (numNote = translations.fr.numNote),
      (recherche = translations.fr.recherche),
      (inscription = translations.fr.inscription),
    ];
  } else {
    text = [
      (au = translations.en.au),
      (du = translations.en.du),
      (filtre = translations.en.filtre),
      (sortie = translations.en.sortie),
      (tri = translations.en.tri),
      (popularité = translations.en.popularité),
      (note = translations.en.note),
      (numNote = translations.en.numNote),
      (recherche = translations.en.recherche),
      (inscription = translations.en.inscription),
    ];
  }

  return text;
};
export default traductionPage;
