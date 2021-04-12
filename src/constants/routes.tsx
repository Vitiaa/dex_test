import React from "react";
import Auth from "../containers/Auth/Auth";
import { LoginRoute } from "../components/LoginRoute";
import Registration from "../containers/Registration/Registration";
import TeamCatalog from "../components/Catalog/TeamCatalog";
import AddTeam from "../components/AddTeam/AddTeam";
import TeamCard from "../components/TeamDetailCard/TeamCard";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import PlayerCatalog from "../components/Catalog/PlayerCatalog/PlayerCatalog";
import PlayerCard from "../components/PlayerDetailCard/PlayerCard";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <LoginRoute>
        <Auth />
      </LoginRoute>
    ),
  },
  {
    path: "/login",
    exact: true,
    main: () => (
      <LoginRoute>
        <Auth />
      </LoginRoute>
    ),
  },
  {
    path: "/registration",
    exact: true,
    main: () => (
      <LoginRoute>
        <Registration />
      </LoginRoute>
    ),
  },
  {
    path: "/TeamCatalog",
    main: () => <TeamCatalog />,
  },
  {
    path: "/TeamCard/:teamID",
    main: () => <TeamCard />,
  },
  {
    path: "/AddTeam",
    main: () => <AddTeam />,
  },
  {
    path: "/AddPlayer",
    main: () => <AddPlayer />,
  },
  { path: "/PlayerCatalog", main: () => <PlayerCatalog /> },
  {
    path: "/PlayerCard/:playerID",
    main: () => <PlayerCard />,
  },
];
