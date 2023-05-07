import {createSlice} from '@reduxjs/toolkit';
import {downloadImageURL} from '../../../firebase/firebaseStorage';

const initialState = {
  imageURL: '',
  // imageFileName: '',
};

export const ImageUploadedSlice = createSlice({
  name: 'imageUploaded',
  initialState,
  reducers: {
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
    // setImageFileName: (state, action) => {
    //   state.imageFileName = action.payload;
    // },
  },
});

// export const getuploadedurl = filename => {
//   return async dispatch => {
//     const url = await downloadImageURL(filename);
//     dispatch(setImageURL(url));
//     console.log('url from redux*************', url);
//   };
// };

export const {setImageURL} = ImageUploadedSlice.actions;

export const ImageUploadedURL = state => state.imageUploaded.imageURL;

// export const ImageUploadedFileName = state => state.imageUploaded.imageFileName;

export default ImageUploadedSlice.reducer;
