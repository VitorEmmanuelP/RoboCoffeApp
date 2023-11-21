export interface ProfileEntity {
  name: string;
  empresa: string;
  terreiros: number;
  cnpj: string;
}

export interface ProfileState {
  profile: ProfileEntity;
}
