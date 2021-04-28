import React from "react";
import Auth from "../containers/Auth/Auth";
import Registration from "../containers/Registration/Registration";
import TeamCatalog from "../components/Catalog/TeamCatalog";
import AddTeam from "../components/AddTeam/AddTeam";
import TeamCard from "../components/TeamDetailCard/TeamCard";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import PlayerCatalog from "../components/Catalog/PlayerCatalog/PlayerCatalog";
import PlayerCard from "../components/PlayerDetailCard/PlayerCard";
import EditTeam from "../components/EditTeam/editTeam";
import { PublicLayout } from "../components/layouts/PublicLayout";
import { PrivateLayout } from "../components/layouts/PrivateLayout";
import EditPlayer from "../components/EditPlayr/editPlayer";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <PublicLayout>
        <Auth />
      </PublicLayout>
    ),
  },
  {
    path: "/login",
    exact: true,
    main: () => (
      <PublicLayout>
        <Auth />
      </PublicLayout>
    ),
  },
  {
    path: "/registration",
    exact: true,
    main: () => <Registration />,
  },
  {
    path: "/TeamCatalog",
    main: () => (
      <PrivateLayout>
        <TeamCatalog />
      </PrivateLayout>
    ),
  },
  {
    path: "/TeamCard/:teamID",
    main: () => <TeamCard />,
  },
  {
    path: "/AddTeam",
    main: () => <AddTeam />,
  },
  { path: "/EditTeam/:teamID", main: () => <EditTeam /> },
  {
    path: "/AddPlayer",
    main: () => <AddPlayer />,
  },

  { path: "/PlayerCatalog", main: () => <PlayerCatalog /> },
  {
    path: "/PlayerCard/:playerID",
    main: () => <PlayerCard />,
  },
  {
    path: "/EditPlayer/:playerID",
    main: () => <EditPlayer />,
  },
];
