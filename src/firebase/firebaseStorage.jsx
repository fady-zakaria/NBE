import {
  getStorage,
  uploadBytes,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import {createAlert} from '../components/Alerts/Alerts';

import {firebaseapp} from './firebaseDatabase';

const storage = getStorage(firebaseapp);

export const ImageUpload = async uri => {
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  const storageRef = ref(storage, `/AccountsImages/${filename}`);

  const response = await fetch(uri);
  const blob = await response.blob();

  if (blob) {
    // console.log('Uploading Image Response Blob:****************** : ', blob);
    const returnedvalue = uploadBytes(storageRef, blob).then(snapshot => {
      console.log('Uploaded a blob or file!');
      // dispatch(getuploadedurl(filename));
      const url = downloadImageURL(filename);
      return url;
    });
    // const uploadTask = uploadBytesResumable(storageRef, response);
    // return filename;
    // if (returnedvalue) {
    //   return filename;
    // }
    return returnedvalue;
  }
  //   console.log(
  //     'Uploading Image Response uri from firebase:****************** : ',
  //     filename,
  //   );

  //   console.log('Done');
};

export const downloadImageURL = async filename => {
  console.log('file name from firebase storage************', filename);

  const imageRef = ref(storage, `AccountsImages/${filename}`);

  // console.log('imageRef from firebase storage************', imageRef);
  // Get the download URL
  const imageURL = await getDownloadURL(imageRef)
    .then(url => {
      console.log('url from storage', url);
      return url;
    })
    .catch(error => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          createAlert("File doesn't exist");
          break;
        case 'storage/unauthorized':
          createAlert("User doesn't have permission to access the object");
          break;
        case 'storage/canceled':
          createAlert('User canceled the upload');
          break;
        case 'storage/unknown':
          createAlert('Unknown error occurred, inspect the server response');
          break;
      }
    });
  return imageURL;
};
