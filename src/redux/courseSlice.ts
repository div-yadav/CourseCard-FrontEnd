import { createSlice } from '@reduxjs/toolkit';

interface CourseState {
  title: string;
  price: string;
  rating: number;
  description: string;
}

const initialState: CourseState = {
  title: "Blender 3D Fundamentals",
  price: "$15.99",
  rating: 4.8,
  description: "Learn the basics of Blender 3D from scratch",
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourse(state, action) {
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.rating = action.payload.rating;
      state.description = action.payload.description;
    },
  },
});

export const { updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
