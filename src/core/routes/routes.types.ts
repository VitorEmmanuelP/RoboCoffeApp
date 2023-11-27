export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Move: MoveProps;
  Notifications: undefined;
  Notification: NotificationProps;
  Profile: undefined;
  Reports: undefined;
  ReportItem: Dados;
  Tabs: undefined;
  AddTerrain: undefined;
  Terreiros: undefined;
  Terreiro: TerreitoProps;
  CriarRelatorio: undefined;
};

type TerreitoProps = {
  data: {
    id: string;
    idTerreiro: string;
    status: string;
    on: boolean;
  };
};
type MoveProps = {
  data: {
    id: string;
    idTerreiro: string;
  };
};

type NotificationProps = {
  data: {
    id: string;
    idTerreiro: string;
    data: string;
    text: string;
    title: string;
  };
};
type Dados = {
  data: {
    id: string;
    criador: string;
    funcionamento: string;
    data: string;
    terreno: string;
  };
};
