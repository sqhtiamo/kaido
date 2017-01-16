import _QRCode from 'qrcode';

const path = './static/';

const QRCode = {
  save: async (id) => {
    const imgPath = `${path}${id}.png`;
    _QRCode.save(imgPath, imgPath, (error) => {
      if (error) {
        console.log(error);
        return '';
      }
      console.log('success');
      return imgPath;
    });
  },
};

export default QRCode;

