let wordGuess = [
  {
    id: 1,
    Vocabulary: "polar",
    Definition: "Molecule with partial charges. Mixes with water.",
  },
  {
    id: 2,
    Vocabulary: "nonpolar",
    Definition: "No partial charges. Do not mix with water.",
  },
  {
    id: 3,
    Vocabulary: "electronegativity",
    Definition: "Attraction of an atom for electrons in a covalent bond.",
  },
  {
    id: 4,
    Vocabulary: "cohesion",
    Definition: "Water molecules sticking to each other.",
  },
  {
    id: 5,
    Vocabulary: "adhesion",
    Definition: "Water molecules sticking to other surfaces.",
  },
  {
    id: 6,
    Vocabulary: "solute",
    Definition: "Something dissolved in a solution.",
  },
  {
    id: 7,
    Vocabulary: "solvent",
    Definition: "Dissolving agent of a solution.",
  },
  {
    id: 8,
    Vocabulary: "isomers",
    Definition: "Same atoms but different arrangement.",
  },
  {
    id: 9,
    Vocabulary: "structural isomers",
    Definition: "Differ in arrangement of atoms.",
  },
  {
    id: 10,
    Vocabulary: "geometric isomer",
    Definition: "Differ in arrangement around a double bond.",
  },
  {
    id: 11,
    Vocabulary: "enantiomers",
    Definition: "Structures that are like a mirror-image.",
  },
  {
    id: 12,
    Vocabulary: "alpha glucose",
    Definition: "Monomer for starch and glycogen.",
  },
  {
    id: 13,
    Vocabulary: "beta glucose",
    Definition: "Monomer for cellulose and chitin.",
  },
  {
    id: 14,
    Vocabulary: "cellulose",
    Definition: "Carbohydrate component of plant cell walls.",
  },
  {
    id: 15,
    Vocabulary: "starch",
    Definition: "Storage polysaccharide of plants.",
  },
  {
    id: 16,
    Vocabulary: "glycogen",
    Definition: "Extremely branched polymer of glucose.",
  },
  {
    id: 17,
    Vocabulary: "chitin",
    Definition:
      "Polysaccharide found in arthropod exoskeletons and fungal cell walls.",
  },
  {
    id: 18,
    Vocabulary: "tryiacylglycerol",
    Definition: "Glycerol and three fatty acids.",
  },
  {
    id: 19,
    Vocabulary: "steroids",
    Definition: "Made of four rings of carbon.",
  },
  {
    id: 20,
    Vocabulary: "cholesterol",
    Definition: "Steroid common in cell membranes, also in many hormones.",
  },
  {
    id: 21,
    Vocabulary: "peptide bond",
    Definition: "Bonds that connect amino acids.",
  },
  {
    id: 22,
    Vocabulary: "Fredrick Sanger",
    Definition: "Determined amino acid sequence of proteins.",
  },
  {
    id: 23,
    Vocabulary: "disulphide bridges",
    Definition: "Reinforce tertiary structure.",
  },
  {
    id: 24,
    Vocabulary: "primary structure",
    Definition: "Chain of amino acids.",
  },
  {
    id: 25,
    Vocabulary: "secondary structure",
    Definition: "Either an alpha helix or beta pleated sheet.",
  },
  {
    id: 26,
    Vocabulary: "tertiary structure",
    Definition: "Results from interactions between side chains.",
  },
  {
    id: 27,
    Vocabulary: "quaternary structure",
    Definition: "Results from two or more polypeptide subunits.",
  },
  {
    id: 28,
    Vocabulary: "purines",
    Definition: "Bases with a double-ring structure.",
  },
  {
    id: 29,
    Vocabulary: "pyrimidines",
    Definition: "Bases with a single-ring structure.",
  },
  {
    id: 30,
    Vocabulary: "phosphodiester bonds",
    Definition:
      "Bonds between phosphate group and pentose sugar in nucleic acids.",
  },
  {
    id: 31,
    Vocabulary: "synthesis",
    Definition: "To put together.",
  },
  {
    id: 32,
    Vocabulary: "digestion",
    Definition: "To break apart.",
  },
  {
    id: 33,
    Vocabulary: "dehydration synthesis",
    Definition:
      "Condensation reaction where molecules are connected by loss of a water molecule.",
  },
  {
    id: 34,
    Vocabulary: "hydrolysis",
    Definition:
      "Reaction where water split into \u000btwo hydrogens and one oxygen; this breaks a polymer.",
  },
  {
    id: 35,
    Vocabulary: "anabolism",
    Definition:
      "Metabolic pathways that construct molecules, requiring energy.",
  },
  {
    id: 36,
    Vocabulary: "catabolism",
    Definition:
      "Metabolic pathways that break down molecules, releasing energy.",
  },
  {
    id: 37,
    Vocabulary: "natural selection",
    Definition:
      "A population can change over time if individuals with more fit traits leave more offspring than less fit individuals.",
  },
  {
    id: 38,
    Vocabulary: "evolutionary adaptation",
    Definition:
      "An accumulation of inherited characteristics that enhance organisms' ability to survive and reproduce in specific environments.",
  },
  {
    id: 39,
    Vocabulary: "artificial selection",
    Definition:
      "Humans modifying species for desired traits through selective breeding.",
  },
  {
    id: 40,
    Vocabulary: "decent with modification",
    Definition: "Darwin's way of referring to evolution.",
  },
  {
    id: 41,
    Vocabulary: "MRSA",
    Definition: "Methicillin-resistant Staphylococcus aureus.",
  },
  {
    id: 42,
    Vocabulary: "fitness",
    Definition:
      "Individuals whose inherited traits confer an advantage have a better chance of surviving in a given environment and will leave more offspring.",
  },
  {
    id: 43,
    Vocabulary: "homology",
    Definition: "Similarity resulting from common ancestry.",
  },
  {
    id: 44,
    Vocabulary: "homologous structures",
    Definition:
      "Same structure, different function. Comes from common ancestor.",
  },
  {
    id: 45,
    Vocabulary: "comparative embryology",
    Definition: "Embryos of vertebrates share many anatomical homologies.",
  },
  {
    id: 46,
    Vocabulary: "vestigial structures",
    Definition:
      "Are little or no importance to organism, but remain from an ancestor.",
  },
  {
    id: 47,
    Vocabulary: "biogeography",
    Definition: "Geographic distribution of species.",
  },
  {
    id: 48,
    Vocabulary: "microevolution",
    Definition:
      "Change in genetic makeup of a population from generation to generation.",
  },
];
function randomWord() {
  return wordGuess[Math.floor(Math.random() * wordGuess.length)];
}
export { randomWord };
