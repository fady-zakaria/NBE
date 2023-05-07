// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
// import {ImageBox} from './UploadImage.styles';
// import {camera} from '../../constants/imgs';

// const UploadImage = () => {
//   const [image, setImage] = useState(null);
//   //   const [uploading, setUploading] = useState(false);
//   //   const [transferred, setTransferred] = useState(0);

//   const selectImage = () => {
//     const options = {
//       maxWidth: 2000,
//       maxHeight: 2000,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = {uri: response.uri};
//         console.log('Uploading Image Uri: ', source);
//         setImage(source);
//       }
//     });
//   };
//   return (
//     <TouchableOpacity onPress={selectImage}>
//       <ImageBox>
//         <Image source={camera} />
//       </ImageBox>
//     </TouchableOpacity>
//   );
// };

// export default UploadImage;

// const styles = StyleSheet.create({});
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import {ImageBox} from './UploadImage.styles';
import {camera} from '../../constants/imgs';
import {useSelector, useDispatch} from 'react-redux';
// import {ImageUpload} from '../../firebase/firebaseDatabase';
import {downloadImageURL, ImageUpload} from '../../firebase/firebaseStorage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {setImageURL} from '../../redux/features/ImageUploadedData/ImageUploadedSlice';

const UploadImage = () => {
  const [imageSource, setImageSource] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();
  // const upload = async ImageUri => {
  //   setLoading(true);
  //   const response = await fetch(ImageUri);
  //   ImageUpload(ImageUri, response);
  //   // console.log('Uploading Image Response:****************** : ', response);
  //   // console.log('Uploading Image Response Blob:****************** : ', blob);

  //   // const {uri} = imageSource;
  //   // const filename = uri.substring(uri.lastIndexOf('/') + 1);
  // };

  const selectImage = async () => {
    const options = {
      mediaType: 'photo', // We can specify whether we need only Images or Videos
      allowsEditing: true,
      // aspect: [4, 3],
      // maxWidth: 100,
      // maxHeight: 100,
      quality: 1, // 0 means compress for small size, 1 means compress for maximum quality
    };
    let result = await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        // } else if (response.customButton) {
        //   console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(
          'response form image Picker **************************',
          response.assets,
        );

        const source = response?.assets[0];
        console.log('Uploading Image Sours: ', source);
        setImageSource(source);
        console.log('Uploading Image Uri: ', source.uri);
        // return source.uri;
      }
    });
    // upload();
    setLoading(true);
    if (result) {
      console.log('result*************************', result.assets[0].uri);
      // const response = await fetch(result.uri);
      // const blob = await response.blob();
      const uploadedurl = await ImageUpload(result.assets[0].uri);
      if (uploadedurl) {
        setLoading(false);
        console.log('file (url)******************', uploadedurl);
        dispatch(setImageURL(uploadedurl));

        // dispatch(getuploadedurl(fileName));

        // setFileName(uploadedFileName);
        // const url = await downloadImageURL(uploadedFileName);
        // console.log(
        //   'url from upload image *************************************',
        //   url,
        // );
      }
      // console.log('Uploading Image Response:****************** : ', response);
    }
    // const response = await fetch(ImageUri);
    // console.log('result form image Picker **************************', result);
  };

  return (
    <>
      <TouchableOpacity onPress={selectImage}>
        <ImageBox>
          {imageSource ? (
            loading ? (
              <LoadingSpinner />
            ) : (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                }}
                source={imageSource}
              />
            )
          ) : (
            <Image source={camera} />
          )}
        </ImageBox>
      </TouchableOpacity>
    </>
  );
};

export default UploadImage;

const styles = StyleSheet.create({});
