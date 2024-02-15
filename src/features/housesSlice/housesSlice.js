import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houses: [
    {
      id: 1,
      title: "Orchard House",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 570,
      beds: 3,
      baths: 3,
      sq_area: 2532,
    },
    {
      id: 2,
      title: "Meadow view",
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 770,
      beds: 4,
      baths: 3,
      sq_area: 1878,
    },
    {
      id: 3,
      title: "Scholl house",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=3392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 622,
      beds: 4,
      baths: 2,
      sq_area: 932,
    },
    {
      id: 4,
      title: "Orchard House",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 570,
      beds: 3,
      baths: 3,
      sq_area: 2532,
    },
    {
      id: 5,
      title: "Meadow view",
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 770,
      beds: 4,
      baths: 3,
      sq_area: 1878,
    },
    {
      id: 6,
      title: "Scholl house",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=3392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 622,
      beds: 4,
      baths: 2,
      sq_area: 932,
    },
    {
      id: 7,
      title: "Meadow view",
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 770,
      beds: 4,
      baths: 3,
      sq_area: 1878,
    },
    {
      id: 8,
      title: "Scholl house",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=3392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 622,
      beds: 4,
      baths: 2,
      sq_area: 932,
    },
  ],
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    showAll(state) {
      state.showAllHouses = !state.showAllHouses;
    },
  },
});

export const { showAll } = housesSlice.actions;
export default housesSlice.reducer;
