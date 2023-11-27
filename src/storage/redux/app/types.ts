export interface AppState {
  loading: boolean;
  search: string;
  filter: boolean;
  profileUrl: string;
  userDados: UserProps;
}

export type UserProps = {
  nome: string;
  empresa: string;
  id: string;
  profileUrl: string;
  cnpj: string;
  terrenos: string;
};
