export interface Dto {
  id: string,
  name: string,
  description: string,
  title: string,
}

export interface State {
  active: Dto | null,
  list: Dto[],
}