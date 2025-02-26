export interface ModeChoice {
  label: string;
  value: string;
}

export const modesLoop = [
  { label: "Row", value: "Row" },
  { label: "Front Loop Only", value: "Front Loop Only" },
  { label: "Back Loop Only", value: "Back Loop Only" },
];

export const modesChain = [
  { label: "Chain", value: "Chain" },
  { label: "Single Crochet", value: "Single Crochet" },
  { label: "Half Double Crochet", value: "Half Double Crochet" },
  { label: "Double Crochet", value: "Double Crochet" },
  { label: "Treble Crochet", value: "Treble Crochet" },
  { label: "Slip Stitch", value: "Slip Stitch" },
];

export const modesRing = [
  { label: "Blank", value: "Blank" },
  { label: "Increase", value: "Increase" },
  { label: "Into Magic Ring", value: "Into Magic Ring" },
];
