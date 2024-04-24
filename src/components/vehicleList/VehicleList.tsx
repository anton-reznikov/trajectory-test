import { IUpdateVehiclePayload, IVehicle } from "../../types";

import { loadingStatusOptions } from "../../hooks";
import Spinner from "../ui/spinner";
import Error from "../ui/error";
import VehicleCard from "../vehicleCard/VehicleCard";
import "./vehicleList.scss";
import { Typography } from "@mui/material";

type VehiclesListProps = {
  handleDeleteVehicle: (id: number) => void;
  handleUpdateVehicle: (id: number, payload: IUpdateVehiclePayload) => void;
  vehicles: IVehicle[];
  loadingStatus: loadingStatusOptions;
};

const VehicleList = ({
  vehicles,
  handleDeleteVehicle,
  handleUpdateVehicle,
  loadingStatus,
}: VehiclesListProps) => {
  if (loadingStatus === "loading") return <Spinner />;
  if (loadingStatus === "error") return <Error />;

  return (
    <div className="vehicle__list">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <VehicleCard
            deleteVehicle={handleDeleteVehicle}
            updateVehicle={handleUpdateVehicle}
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))
      ) : (
        <div className="vehicle__list-empty">
          <Typography textAlign="center" variant="h4">
            Автомобили не найдены
          </Typography>
        </div>
      )}
    </div>
  );
};

export default VehicleList;
