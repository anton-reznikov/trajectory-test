import { IUpdateVehiclePayload, IVehicle } from "../../types";

import "./vehicleList.scss";
import { loadingStatusOptions } from "../../hooks";
import Spinner from "../ui/spinner";
import Error from "../ui/error";
import VehicleCard from "../vehicleCard/VehicleCard";
import NoListData from "../ui/NoListData";

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
  if (vehicles.length === 0) return <NoListData />;

  return (
    <div className="vehicle__list">
      {vehicles.map((vehicle) => (
        <VehicleCard
          deleteVehicle={handleDeleteVehicle}
          updateVehicle={handleUpdateVehicle}
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
};

export default VehicleList;
