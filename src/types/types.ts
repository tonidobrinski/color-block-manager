export type Color = {
  name: string;
  hex: string;
}

export type Block = {
  id: string;
  color: string;
}

export type Person = {
  id: string;
  name: string;
  blocks: Block[];
}