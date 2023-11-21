export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Move: undefined;
  Notifications: undefined;
  Notification: undefined;
  Profile: undefined;
  Reports: undefined;
  ReportItem: undefined;
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
