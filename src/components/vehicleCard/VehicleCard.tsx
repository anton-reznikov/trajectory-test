import { ChangeEvent, FormEvent, memo, useState } from "react";
import { IUpdateVehiclePayload, IVehicle } from "../../types";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import "./vehicleCard.scss";
type VehicleCardProps = {
  vehicle: IVehicle;
  deleteVehicle: (id: number) => void;
  updateVehicle: (id: number, payload: IUpdateVehiclePayload) => void;
};

const VehicleCard = memo(
  ({ vehicle, deleteVehicle, updateVehicle }: VehicleCardProps) => {
    const { id, name, model, year, color, price, latitude, longitude } =
      vehicle;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const [formState, setFormState] = useState({
      name,
      model,
      price,
    });

    const handleModalClose = () => {
      setIsOpenModal(false);

      setFormState((prev) => ({
        ...prev,
        name,
        model,
        price,
      }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formState.name || !formState.model || formState.price <= 0) {
        return;
      }
      updateVehicle(id, {
        name: formState.name,
        model: formState.model,
        price: formState.price,
      });
      setIsOpenModal(false);
    };

    return (
      <>
        <Card className="vehicle__card" sx={{ maxHeight: "fit-content" }}>
          <CardContent sx={{ wordWrap: "break-word" }}>
            <Typography>Марка: {name}</Typography>
            <Typography>Модель: {model}</Typography>
            <Typography>Год производства: {year}</Typography>
            <Typography>Цвет: {color}</Typography>
            <Typography>Цена: {price}$</Typography>
            <Typography>Широта: {latitude}</Typography>
            <Typography>Долгота: {longitude}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-around" }}>
            <Button onClick={() => setIsOpenModal(true)}>Изменить</Button>
            <Button onClick={() => deleteVehicle(id)} color="error">
              Удалить
            </Button>
          </CardActions>
        </Card>
        <Dialog open={isOpenModal} onClose={handleModalClose}>
          <DialogTitle>Редактировать автомобиль</DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "2rem",
              }}
              component="form"
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <TextField
                sx={{ marginTop: "5px" }}
                type="text"
                value={formState.name}
                id="name"
                name="name"
                variant="outlined"
                label="Марка"
                onChange={handleChange}
                error={!formState.name}
              />
              <TextField
                value={formState.model}
                id="model"
                name="model"
                variant="outlined"
                type="text"
                label="Модель"
                onChange={handleChange}
                error={!formState.model}
              />
              <TextField
                value={formState.price}
                id="price"
                name="price"
                variant="outlined"
                type="number"
                label="Цена"
                onChange={handleChange}
                error={formState.price <= 0}
              />
              <DialogActions>
                <Button type="submit">Подтвердить</Button>
                <Button onClick={handleModalClose} color="error">
                  Отмена
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    );
  }
);

export default VehicleCard;
