import { useEffect, useState } from "react";
import {
  IUpdateVehiclePayload,
  IVehicle,
  MapMarkers,
  SortingTypes,
} from "./types";
import { useHttp, useUpdateEffect } from "./hooks";
import VehicleList from "./components/vehicleList/VehicleList";

import SortVehicles from "./components/sortVehicles/SortVehicles";
import Map from "./components/map/Map";
import { Typography } from "@mui/material";

import "./App.scss";
function App() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [sortBy, setSortBy] = useState<SortingTypes | "">("");

  const { loadingStatus, request } = useHttp();

  useEffect(() => {
    request({
      url: "https://test.tspb.su/test-task/vehicles",
    }).then((data: IVehicle[]) => setVehicles(data));
  }, []);

  const handleDeleteVehicle = (id: number) => {
    const updatedState = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedState);
  };

  const handleUpdateVehicle = (id: number, payload: IUpdateVehiclePayload) => {
    const updatedState = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        vehicle = { ...vehicle, ...payload };
      }
      return vehicle;
    });

    setVehicles(updatedState);
    handleSortVehicles(sortBy as SortingTypes);
  };

  const handleSortVehicles = (type: SortingTypes) => {
    if (vehicles.length === 0) return;
    switch (type) {
      case "PriceHighToLow":
        setVehicles((prevState) => {
          const sortedState = prevState.sort((a: IVehicle, b: IVehicle) =>
            a.price < b.price ? 1 : -1
          );
          return [...sortedState];
        });
        break;
      case "PriceLowToHigh":
        setVehicles((prevState) => {
          const sortedState = prevState.sort((a: IVehicle, b: IVehicle) =>
            a.price > b.price ? 1 : -1
          );
          return [...sortedState];
        });
        break;
      case "YearNewToOld":
        setVehicles((prevState) => {
          const sortedState = prevState.sort((a: IVehicle, b: IVehicle) =>
            a.year < b.year ? 1 : -1
          );
          return [...sortedState];
        });
        break;

      case "YearOldToNew":
        setVehicles((prevState) => {
          const sortedState = prevState.sort((a: IVehicle, b: IVehicle) =>
            a.year > b.year ? 1 : -1
          );
          return [...sortedState];
        });
        break;
      default:
        return;
    }
  };

  useUpdateEffect(() => {
    handleSortVehicles(sortBy as SortingTypes);
  }, [sortBy]);

  const markers: MapMarkers[] = vehicles.map((vehicle) => {
    return {
      latitude: vehicle.latitude,
      longitude: vehicle.longitude,
      name: vehicle.name,
      model: vehicle.model,
    };
  });

  return (
    <>
      <main>
        <div className="container">
          <Typography marginTop="2rem" textAlign="center" variant="h3">
            Тестовое задание
          </Typography>
          <section>
            <Map markers={markers ?? []} />
          </section>
          <section>
            <SortVehicles
              handleSortVehicles={handleSortVehicles}
              setSortBy={setSortBy}
              sortBy={sortBy}
            />
          </section>
          <section>
            <VehicleList
              loadingStatus={loadingStatus}
              handleUpdateVehicle={handleUpdateVehicle}
              handleDeleteVehicle={handleDeleteVehicle}
              vehicles={vehicles}
            />
          </section>
        </div>
      </main>

      <footer className="footer" />
    </>
  );
}

export default App;
