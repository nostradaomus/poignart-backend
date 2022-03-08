import FormData from 'form-data';
import axios from 'axios';
import fs from 'fs';

export const postToPinata = (data: any) => {
  return axios
    .post(process.env.PINATA_URL, data, {
      headers: {
        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_SECRET_KEY
      }
    })
    .then(function (response: any) {
      const hash = response.data.IpfsHash;
      console.log('success, ipfsh hash: ', hash);
      return 'success';
    })
    .catch(function (error: Error) {
      console.log(error);
      return null;
    });
};

export const uploadToPinataAndCallContract = (
  address: string,
  filename: string
) => {
  const metadata = JSON.stringify({
    name: `${address}-nft.png`
  });
  const data = new FormData();
  data.append('pinataMetadata', metadata);
  data.append('file', fs.createReadStream(`./contracts/uploads/${filename}`));
  postToPinata(data);
};
