import React from "react";
import { PublicLayout } from "../ui/layouts/PublicLayout";
import Auth from "./Auth/Auth";
import Registration from "./Registration/Registration";
import { PrivateLayout } from "../ui/layouts/PrivateLayout";
import TeamCatalog from "./TeamCatalog/TeamCatalog";
import TeamCard from "./TeamDetailCard/TeamCard";
import AddTeam from "./AddTeam/AddTeam";
import EditTeam from "./EditTeam/editTeam";
import AddPlayer from "./AddPlayer/AddPlayer";
import PlayerCatalog from "./PlayerCatalog/PlayerCatalog";
import PlayerCard from "./PlayerDetailCard/PlayerCard";
import EditPlayer from "./EditPlayr/editPlayer";
import { AdminLayout } from "../ui/layouts/Layout";
import { Page_404 } from "./Page_404/Page_404";

export const routers = [
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
    main: () => (
      <PrivateLayout>
        <TeamCard />
      </PrivateLayout>
    ),
  },
  {
    path: "/AddTeam",
    main: () => (
      <PrivateLayout>
        <AddTeam />
      </PrivateLayout>
    ),
  },
  {
    path: "/EditTeam/:teamID",
    main: () => (
      <PrivateLayout>
        <EditTeam />
      </PrivateLayout>
    ),
  },
  {
    path: "/AddPlayer",
    main: () => (
      <PrivateLayout>
        <AddPlayer />
      </PrivateLayout>
    ),
  },

  {
    path: "/PlayerCatalog",
    main: () => (
      <PrivateLayout>
        <PlayerCatalog />
      </PrivateLayout>
    ),
  },
  {
    path: "/PlayerCard/:playerID",
    main: () => (
      <PrivateLayout>
        <PlayerCard />
      </PrivateLayout>
    ),
  },
  {
    path: "/EditPlayer/:playerID",
    main: () => (
      <PrivateLayout>
        <EditPlayer />
      </PrivateLayout>
    ),
  },
  {
    path: "*",
    main: () => <Page_404 />,
  },
];
