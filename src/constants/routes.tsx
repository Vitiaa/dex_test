import React from "react";
import { PublicLayout } from "../components/layouts/PublicLayout";
import Auth from "../components/Auth/Auth";
import Registration from "../components/Registration/Registration";
import { PrivateLayout } from "../components/layouts/PrivateLayout";
import TeamCatalog from "../components/Team/TeamCatalog/TeamCatalog";
import TeamCard from "../components/Team/TeamDetailCard/TeamCard";
import AddTeam from "../components/Team/AddTeam/AddTeam";
import EditTeam from "../components/Team/EditTeam/editTeam";
import AddPlayer from "../components/Player/AddPlayer/AddPlayer";
import PlayerCatalog from "../components/Player/PlayerCatalog/PlayerCatalog";
import PlayerCard from "../components/Player/PlayerDetailCard/PlayerCard";
import EditPlayer from "../components/Player/EditPlayr/editPlayer";

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
