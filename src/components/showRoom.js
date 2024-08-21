import Single01 from '../images/Single01.jpg';
import Double01 from '../images/Double01.jpg';
import Single02 from '../images/Single02.jpg';
import Double02 from '../images/Double02.jpg';


export const showRoom = (roomType) => {
    const rooms = {
        single: [ 
          {
            info: "ห้องเดี่ยวสำหรับ 1 คน",
            price: 1000,
            image: [Single01],
        },
          {
            info: "ห้องเดี่ยวสำหรับ 1 คน",
            price: 1500,
            image: [Single02]
          }
        ],
        double: [
          {
            info: "ห้องคู่สำหรับ 2 คน",
            price: 2000,
            image: [Double01],
        },
          {
            info: "ห้องคู่สำหรับ 2 คน",
            price: 2500,
            image: [Double02],
          }
        ]
    };

    return rooms[roomType];
};
