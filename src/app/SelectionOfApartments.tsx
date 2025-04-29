import { useEffect, useState } from 'react';
import background from '../assets/Yellow bloks/back.png';
import yellow1 from '../assets/Yellow bloks/1-blok.png';
import yellow2 from '../assets/Yellow bloks/2-blok.png';
import yellow3 from '../assets/Yellow bloks/3-blok.png';
import yellow4 from '../assets/Yellow bloks/4-blok.png';

//1-block 1-etaj
import b1f1r1 from '../assets/plans/1 blok/1-etaj/1.png';
import b1f1r2 from '../assets/plans/1 blok/1-etaj/2.png';
import b1f1r3 from '../assets/plans/1 blok/1-etaj/3.png';
import b1f1r4 from '../assets/plans/1 blok/1-etaj/4.png';
import b1f1r5 from '../assets/plans/1 blok/1-etaj/5.png';
import b1f1r6 from '../assets/plans/1 blok/1-etaj/6.png';
import etaj11 from '../assets/plans/1 blok/1-etaj/etaj.png';
//1-block 2-etaj
import b1f2r1 from '../assets/plans/1 blok/2-7- etaj/1.png';
import b1f2r2 from '../assets/plans/1 blok/2-7- etaj/2.png';
import b1f2r3 from '../assets/plans/1 blok/2-7- etaj/3.png';
import b1f2r4 from '../assets/plans/1 blok/2-7- etaj/4.png';
import b1f2r5 from '../assets/plans/1 blok/2-7- etaj/5.png';
import b1f2r6 from '../assets/plans/1 blok/2-7- etaj/6.png';
import etaj12 from '../assets/plans/1 blok/2-7- etaj/etaj.png';
//2-block 1-etaj
import b2f1r1 from '../assets/plans/2 blok/1-etaj/1.png';
import b2f1r2 from '../assets/plans/2 blok/1-etaj/2.png';
import b2f1r3 from '../assets/plans/2 blok/1-etaj/3.png';
import b2f1r4 from '../assets/plans/2 blok/1-etaj/4.png';
import b2f1r5 from '../assets/plans/2 blok/1-etaj/5.png';
import b2f1r6 from '../assets/plans/2 blok/1-etaj/6.png';
import b2f1r7 from '../assets/plans/2 blok/1-etaj/7.png';
import b2f1r8 from '../assets/plans/2 blok/1-etaj/8.png';
import b2f1r9 from '../assets/plans/2 blok/1-etaj/9.png';
import b2f1r10 from '../assets/plans/2 blok/1-etaj/10.png';
import etaj21 from '../assets/plans/2 blok/1-etaj/etaj.png';
//1-block 2-etaj
import b2f2r1 from '../assets/plans/2 blok/2-7- etaj/1.png';
import b2f2r2 from '../assets/plans/2 blok/2-7- etaj/2.png';
import b2f2r3 from '../assets/plans/2 blok/2-7- etaj/3.png';
import b2f2r4 from '../assets/plans/2 blok/2-7- etaj/4.png';
import b2f2r5 from '../assets/plans/2 blok/2-7- etaj/5.png';
import b2f2r6 from '../assets/plans/2 blok/2-7- etaj/6.png';
import b2f2r7 from '../assets/plans/2 blok/2-7- etaj/7.png';
import b2f2r8 from '../assets/plans/2 blok/2-7- etaj/8.png';
import b2f2r9 from '../assets/plans/2 blok/2-7- etaj/9.png';
import b2f2r10 from '../assets/plans/2 blok/2-7- etaj/10.png';
import etaj22 from '../assets/plans/2 blok/2-7- etaj/etaj.png';
//4-block 1-etaj
import b4f1r1 from '../assets/plans/4 blok/1-etaj/1.png';
import b4f1r2 from '../assets/plans/4 blok/1-etaj/2.png';
import b4f1r3 from '../assets/plans/4 blok/1-etaj/3.png';
import b4f1r4 from '../assets/plans/4 blok/1-etaj/4.png';
import b4f1r5 from '../assets/plans/4 blok/1-etaj/5.png';
import b4f1r6 from '../assets/plans/4 blok/1-etaj/6.png';
import etaj41 from '../assets/plans/4 blok/1-etaj/etaj.png';
//4-block 2-etaj
import b4f2r1 from '../assets/plans/4 blok/2-7- etaj/1.png';
import b4f2r2 from '../assets/plans/4 blok/2-7- etaj/2.png';
import b4f2r3 from '../assets/plans/4 blok/2-7- etaj/3.png';
import b4f2r4 from '../assets/plans/4 blok/2-7- etaj/4.png';
import b4f2r5 from '../assets/plans/4 blok/2-7- etaj/5.png';
import b4f2r6 from '../assets/plans/4 blok/2-7- etaj/6.png';
import etaj42 from '../assets/plans/4 blok/2-7- etaj/etaj.png';
//3-block 1-etaj
import b3f1r1 from '../assets/plans/3 blok/1-etaj/1.png';
import b3f1r2 from '../assets/plans/3 blok/1-etaj/2.png';
import b3f1r3 from '../assets/plans/3 blok/1-etaj/3.png';
import b3f1r4 from '../assets/plans/3 blok/1-etaj/4.png';
import b3f1r5 from '../assets/plans/3 blok/1-etaj/5.png';
import b3f1r6 from '../assets/plans/3 blok/1-etaj/6.png';
import b3f1r7 from '../assets/plans/3 blok/1-etaj/7.png';
import b3f1r8 from '../assets/plans/3 blok/1-etaj/8.png';
import b3f1r9 from '../assets/plans/3 blok/1-etaj/9.png';
import b3f1r10 from '../assets/plans/3 blok/1-etaj/10.png';
import etaj31 from '../assets/plans/3 blok/1-etaj/etaj.png';
//3-block 2-etaj
import b3f2r1 from '../assets/plans/3 blok/2-5- etaj/1.png';
import b3f2r2 from '../assets/plans/3 blok/2-5- etaj/2.png';
import b3f2r3 from '../assets/plans/3 blok/2-5- etaj/3.png';
import b3f2r4 from '../assets/plans/3 blok/2-5- etaj/4.png';
import b3f2r5 from '../assets/plans/3 blok/2-5- etaj/5.png';
import b3f2r6 from '../assets/plans/3 blok/2-5- etaj/6.png';
import b3f2r7 from '../assets/plans/3 blok/2-5- etaj/7.png';
import b3f2r8 from '../assets/plans/3 blok/2-5- etaj/8.png';
import b3f2r9 from '../assets/plans/3 blok/2-5- etaj/9.png';
import b3f2r10 from '../assets/plans/3 blok/2-5- etaj/10.png';
import etaj32 from '../assets/plans/3 blok/2-5- etaj/etaj.png';

import { useParams } from 'react-router-dom';
import '../index.css';
import { usePostRequst } from '../API';
import { Select, Image, Button } from 'antd';
import { useGetAll, useGetById, useUpdate } from '../API/db';
// import { calculateRoomNumber } from './Table';
import random1 from '../assets/Blue bloks/1.png';
import random2 from '../assets/Blue bloks/2.png';
import random3 from '../assets/Blue bloks/3.png';
import random4 from '../assets/Blue bloks/4.png';
import random5 from '../assets/Blue bloks/5.png';
import random6 from '../assets/Blue bloks/6.png';
import { AnimatePresence, motion } from 'motion/react';
export type roomDto = {
  _id: string;
  block: 'block1' | 'block2' | 'block3' | 'block4';
  floor: number;
  room: number;
  status: 'empty' | 'broned' | 'selled';
};
const SelectionOfApartments = () => {
  const { data: allAppartments, refetch } = useGetAll();

  const [selection, setSelection] = useState<{
    block: number | undefined;
    floor: number | undefined;
    room: number | undefined;
  }>({
    block: undefined,
    floor: undefined,
    room: undefined
  });
  const rooms = allAppartments?.filter((apartment: roomDto) => {
    return (
      (selection.block === 1
        ? apartment.block === 'block1'
        : selection.block === 2
        ? apartment.block === 'block2'
        : selection.block === 3
        ? apartment.block === 'block3'
        : apartment.block === 'block4') && apartment.floor === selection.floor
    );
  });

  const { mutate } = usePostRequst();

  const { lang } = useParams();
  const { data: byId, refetch: refetch2 } = useGetById(
    rooms?.find((room: roomDto) => room.room === selection.room)?._id || ''
  );
  const currentRoom =
    byId || rooms?.find((room: roomDto) => room.room === selection.room);
  const { mutate: update } = useUpdate();
  const handleSubmit = (data: {
    block: number | undefined;
    floor: number | undefined;
    room: number | undefined;
    status?: 'empty' | 'broned' | 'selled';
  }) => {
    mutate({
      data: !data.block
        ? '0000'
        : data.floor === undefined
        ? `${data.block}${data.block}${data.block}${data.block}`
        : data.room === undefined
        ? `${
            data.block === 1
              ? 'A'
              : data.block === 2
              ? 'B'
              : data.block === 3
              ? 'C'
              : 'D'
          }${data.floor}`
        : `${
            data.block === 1
              ? 'A'
              : data.block === 2
              ? 'B'
              : data.block === 3
              ? 'C'
              : 'D'
          }${data.floor.toString().slice(1)}${data.room}${
            data.status === 'selled'
              ? '1'
              : data.status === 'broned'
              ? '3'
              : '2'
          }`
    });
  };
  const block1 = {
    floor1: {
      1: b1f1r1,
      2: b1f1r2,
      3: b1f1r3,
      4: b1f1r4,
      5: b1f1r5,
      6: b1f1r6,
      back: etaj11
    },
    floor27: {
      1: b1f2r1,
      2: b1f2r2,
      3: b1f2r3,
      4: b1f2r4,
      5: b1f2r5,
      6: b1f2r6,
      back: etaj12
    }
  };
  const block2 = {
    floor1: {
      1: b2f1r1,
      2: b2f1r2,
      3: b2f1r3,
      4: b2f1r4,
      5: b2f1r5,
      6: b2f1r6,
      7: b2f1r7,
      8: b2f1r8,
      9: b2f1r9,
      10: b2f1r10,
      back: etaj21
    },
    floor27: {
      1: b2f2r1,
      2: b2f2r2,
      3: b2f2r3,
      4: b2f2r4,
      5: b2f2r5,
      6: b2f2r6,
      7: b2f2r7,
      8: b2f2r8,
      9: b2f2r9,
      10: b2f2r10,
      back: etaj22
    }
  };
  const block4 = {
    floor1: {
      1: b4f1r1,
      2: b4f1r2,
      3: b4f1r3,
      4: b4f1r4,
      5: b4f1r5,
      6: b4f1r6,

      back: etaj41
    },
    floor27: {
      1: b4f2r1,
      2: b4f2r2,
      3: b4f2r3,
      4: b4f2r4,
      5: b4f2r5,
      6: b4f2r6,

      back: etaj42
    }
  };
  const block3 = {
    floor1: {
      1: b3f1r1,
      2: b3f1r2,
      3: b3f1r3,
      4: b3f1r4,
      5: b3f1r5,
      6: b3f1r6,
      7: b3f1r7,
      8: b3f1r8,
      9: b3f1r9,
      10: b3f1r10,

      back: etaj31
    },
    floor27: {
      1: b3f2r1,
      2: b3f2r2,
      3: b3f2r3,
      4: b3f2r4,
      5: b3f2r5,
      6: b3f2r6,
      7: b3f2r7,
      8: b3f2r8,
      9: b3f2r9,
      10: b3f2r10,
      back: etaj32
    }
  };
  const getCurrentImage2 = () => {
    if (selection.floor) {
      switch (selection.block) {
        case 1:
          switch (selection.floor) {
            case 1:
              switch (selection.room) {
                case 101:
                  return block1.floor1[1];
                case 102:
                  return block1.floor1[2];
                case 103:
                  return block1.floor1[3];
                case 104:
                  return block1.floor1[4];
                case 105:
                  return block1.floor1[5];
                case 106:
                  return block1.floor1[6];
                default:
                  return block1.floor1.back;
              }
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              switch (selection.room) {
                case 201:
                case 301:
                case 401:
                case 501:
                case 601:
                case 701:
                  return block1.floor27[1];
                case 202:
                case 302:
                case 402:
                case 502:
                case 602:
                case 702:
                  return block1.floor27[2];
                case 203:
                case 303:
                case 403:
                case 503:
                case 603:
                case 703:
                  return block1.floor27[3];
                case 204:
                case 304:
                case 404:
                case 504:
                case 604:
                case 704:
                  return block1.floor27[4];
                case 205:
                case 305:
                case 405:
                case 505:
                case 605:
                case 705:
                  return block1.floor27[5];
                case 206:
                case 306:
                case 406:
                case 506:
                case 606:
                case 706:
                  return block1.floor27[6];
                default:
                  console.error(selection);
                  return block1.floor27.back;
              }
            default:
              return '';
          }
        case 2:
          switch (selection.floor) {
            case 1:
              switch (selection.room) {
                case 101:
                  return block2.floor1[1];
                case 102:
                  return block2.floor1[2];
                case 103:
                  return block2.floor1[3];
                case 104:
                  return block2.floor1[4];
                case 105:
                  return block2.floor1[5];
                case 106:
                  return block2.floor1[6];
                case 107:
                  return block2.floor1[7];
                case 108:
                  return block2.floor1[8];
                case 109:
                  return block2.floor1[9];
                case 110:
                  return block2.floor1[10];

                default:
                  return block2.floor1.back;
              }
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              switch (selection.room) {
                case 201:
                case 301:
                case 401:
                case 501:
                case 601:
                case 701:
                  return block2.floor27[1];
                case 202:
                case 302:
                case 402:
                case 502:
                case 602:
                case 702:
                  return block2.floor27[2];
                case 203:
                case 303:
                case 403:
                case 503:
                case 603:
                case 703:
                  return block2.floor27[3];
                case 204:
                case 304:
                case 404:
                case 504:
                case 604:
                case 704:
                  return block2.floor27[4];
                case 205:
                case 305:
                case 405:
                case 505:
                case 605:
                case 705:
                  return block2.floor27[5];
                case 206:
                case 306:
                case 406:
                case 506:
                case 606:
                case 706:
                  return block2.floor27[6];
                case 207:
                case 307:
                case 407:
                case 507:
                case 607:
                case 707:
                  return block2.floor27[7];
                case 208:
                case 308:
                case 408:
                case 508:
                case 608:
                case 708:
                  return block2.floor27[8];
                case 209:
                case 309:
                case 409:
                case 509:
                case 609:
                case 709:
                  return block2.floor27[9];
                case 210:
                case 310:
                case 410:
                case 510:
                case 610:
                case 710:
                  return block2.floor27[10];
                default:
                  console.error(selection);
                  return block2.floor27.back;
              }
            default:
              return '';
          }
        case 3:
          switch (selection.floor) {
            case 1:
              switch (selection.room) {
                case 101:
                  return block3.floor1[1];
                case 102:
                  return block3.floor1[2];
                case 103:
                  return block3.floor1[3];
                case 104:
                  return block3.floor1[4];
                case 105:
                  return block3.floor1[5];
                case 106:
                  return block3.floor1[6];

                default:
                  return block3.floor1.back;
              }
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              switch (selection.room) {
                case 201:
                case 301:
                case 401:
                case 501:
                case 601:
                case 701:
                  return block3.floor27[1];
                case 202:
                case 302:
                case 402:
                case 502:
                case 602:
                case 702:
                  return block3.floor27[2];
                case 203:
                case 303:
                case 403:
                case 503:
                case 603:
                case 703:
                  return block3.floor27[3];
                case 204:
                case 304:
                case 404:
                case 504:
                case 604:
                case 704:
                  return block3.floor27[4];
                case 205:
                case 305:
                case 405:
                case 505:
                case 605:
                case 705:
                  return block3.floor27[5];
                case 206:
                case 306:
                case 406:
                case 506:
                case 606:
                case 706:
                  return block3.floor27[6];

                default:
                  console.error(selection);
                  return block3.floor27.back;
              }
            default:
              return '';
          }
        case 4:
          switch (selection.floor) {
            case 1:
              switch (selection.room) {
                case 101:
                  return block4.floor1[1];
                case 102:
                  return block4.floor1[2];
                case 103:
                  return block4.floor1[3];
                case 104:
                  return block4.floor1[4];
                case 105:
                  return block4.floor1[5];
                case 106:
                  return block4.floor1[6];

                default:
                  return block4.floor1.back;
              }
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              switch (selection.room) {
                case 201:
                case 301:
                case 401:
                case 501:
                case 601:
                case 701:
                  return block4.floor27[1];
                case 202:
                case 302:
                case 402:
                case 502:
                case 602:
                case 702:
                  return block4.floor27[2];
                case 203:
                case 303:
                case 403:
                case 503:
                case 603:
                case 703:
                  return block4.floor27[3];
                case 204:
                case 304:
                case 404:
                case 504:
                case 604:
                case 704:
                  return block4.floor27[4];
                case 205:
                case 305:
                case 405:
                case 505:
                case 605:
                case 705:
                  return block4.floor27[5];
                case 206:
                case 306:
                case 406:
                case 506:
                case 606:
                case 706:
                  return block4.floor27[6];

                default:
                  console.error(selection);
                  return block4.floor27.back;
              }
            default:
              return '';
          }
        default:
          return background;
      }
    }
  };

  const handleChanges = async (status: 'empty' | 'broned' | 'selled') => {
    const data = currentRoom;

    await update(
      {
        id: currentRoom?._id,
        status
      },
      {
        onSuccess() {
          refetch2();
          refetch();
        }
      }
    );
    await mutate({
      data: !data.block
        ? '0000'
        : data.floor === undefined
        ? `${data.block}${data.block}${data.block}${data.block}`
        : data.room === undefined
        ? `${data.block}${data.floor}`
        : `${data.block}${data.floor}${data.room}${
            status === 'selled' ? '1' : status === 'broned' ? '3' : '2'
          }`
    });
  };
  const [visible, setVisible] = useState(false);
  const [random, setRandom] = useState<number>(0);
  const randomImages = {
    0: '',
    1: random1,
    2: random2,
    3: random3,
    4: random4,
    5: random5,
    6: random6
  };
  const getCurrentImage = () => {
    if (selection.block && random === 0) {
      switch (selection.block) {
        case 1:
          return yellow1;
        case 2:
          return yellow2;
        case 3:
          return yellow3;
        case 4:
          return yellow4;
        default:
          return background;
      }
    }
    if (random !== 0) {
      return (randomImages as any)[random] || background;
    }
  };
  const [randomVisable, setRandomVisable] = useState(false);
  useEffect(() => {
    if (randomVisable) {
      const intervalId = setInterval(() => {
        setRandom((p) =>
          p === 0
            ? 1
            : p == 1
            ? 3
            : p == 2
            ? 6
            : p == 3
            ? 2
            : p == 4
            ? 1
            : p == 5
            ? 5
            : 0
        );
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [randomVisable]);
  useEffect(() => {
    if (selection.block) {
      setRandomVisable(false);
      setRandom(0);
    } else {
      setRandomVisable(true);
      setRandom(1);
    }
  }, [selection]);

  return (
    <div className=" select-none  puff-in-center relative min-w-[1820px] min-h-[1080px] for-max max-w-[1099px]max-h-[686px] w-full h-full ">
      <div
        onClick={() => {
          setSelection({
            block: 1,
            floor: undefined,
            room: undefined
          });
          handleSubmit({
            block: 1,
            floor: undefined,
            room: undefined
          });
        }}
        className="absolute  top-[10vh] right-[35vw] w-[200px] h-[250px] rounded-br-[50%] z-60"
      ></div>
      <div
        onClick={() => {
          setSelection({
            block: 3,
            floor: undefined,
            room: undefined
          });
          handleSubmit({
            block: 3,
            floor: undefined,
            room: undefined
          });
        }}
        className="absolute  top-[40vh] right-[45vw] w-[400px] -skew-10 -skew-y-20 h-[450px]  z-60"
      ></div>
      <div
        onClick={() => {
          setSelection({
            block: 4,
            floor: undefined,
            room: undefined
          });
          handleSubmit({
            block: 4,
            floor: undefined,
            room: undefined
          });
        }}
        className="absolute  top-[20vh] left-[20vw] w-[200px] -skew-10 -skew-y-20 h-[550px]  z-60"
      ></div>
      <div
        onClick={() => {
          setSelection({
            block: 2,
            floor: undefined,
            room: undefined
          });
          handleSubmit({
            block: 2,
            floor: undefined,
            room: undefined
          });
        }}
        className="absolute  top-[20vh] right-[15vw] w-[400px] -skew-10 -skew-y-20 h-[650px]  z-60"
      ></div>
      <div className=" z-[501] gap-[10px] flex flex-col items-center  absolute w-[400px] p-5  g   rounded-xl glass  top-[100px] left-[10px]">
        <div className="w-full  shadow-md gap-[10px] glass  p-2 border  border-zinc-300 px-[25px] rounded-xl flex items-center justify-center      ">
          <div className="w-[25%] puff-in-center text-[14px]">
            {lang === 'rus'
              ? 'Квартира'
              : lang === 'uzb'
              ? 'Kvartira'
              : 'Apartment'}
            :
          </div>
          <div className="w-[75%]">
            <Select
              onChange={(value) => {
                setSelection({
                  block: value,
                  floor: undefined,
                  room: undefined
                });
                handleSubmit({
                  block: value,
                  floor: undefined,
                  room: undefined
                });
              }}
              size="small"
              variant={'borderless'}
              className="w-full"
              value={selection.block === 0 ? undefined : selection.block}
              placeholder={
                lang === 'tr'
                  ? 'Blok seç'
                  : lang === 'rus'
                  ? 'Выберите блок'
                  : lang === 'uzb'
                  ? 'Blokni tanlang'
                  : 'Select block'
              }
              options={[
                {
                  label:
                    lang === 'tr'
                      ? 'Blok 1'
                      : lang === 'rus'
                      ? 'Блок 1'
                      : lang === 'uzb'
                      ? 'Blok 1'
                      : 'Block 1',
                  value: 1
                },
                {
                  label:
                    lang === 'tr'
                      ? 'Blok 2'
                      : lang === 'rus'
                      ? 'Блок 2'
                      : lang === 'uzb'
                      ? 'Blok 2'
                      : 'Block 2',
                  value: 2
                },
                {
                  label:
                    lang === 'tr'
                      ? 'Blok 3'
                      : lang === 'rus'
                      ? 'Блок 3'
                      : lang === 'uzb'
                      ? 'Blok 3'
                      : 'Block 3',
                  value: 3
                },
                {
                  label:
                    lang === 'tr'
                      ? 'Blok 4'
                      : lang === 'rus'
                      ? 'Блок 4'
                      : lang === 'uzb'
                      ? 'Blok 4'
                      : 'Block 4',
                  value: 4
                }
              ]}
            />
          </div>
        </div>
        <div className="w-full  shadow-md gap-[10px] glass  p-2 border  border-zinc-300 px-[25px] rounded-xl flex items-center justify-center      ">
          <div className="w-[25%] puff-in-center text-[14px]">
            {lang === 'uzb' ? 'Qavat' : lang === 'rus' ? 'Этаж' : 'Floor'}:
          </div>
          <div className="w-[75%] ">
            <Select
              onChange={(value) => {
                setSelection((p) => ({
                  ...p,
                  floor: value,
                  room: undefined
                }));
                handleSubmit({
                  block: selection.block,
                  floor: value,
                  room: undefined
                });
              }}
              size="small"
              variant={'borderless'}
              className="w-full"
              value={selection.floor}
              disabled={selection.block === 0}
              placeholder={
                lang === 'uzb'
                  ? 'Qavat tanlang'
                  : lang === 'rus'
                  ? 'Выберите этаж'
                  : 'Select floor'
              }
              options={
                !selection.block
                  ? []
                  : [
                      ...[
                        {
                          label:
                            lang === 'uzb'
                              ? '1-qavat'
                              : lang === 'rus'
                              ? '1-й этаж'
                              : '1st floor',
                          value: 1
                        },
                        {
                          label:
                            lang === 'uzb'
                              ? '2-qavat'
                              : lang === 'rus'
                              ? '2-й этаж'
                              : '2nd floor',
                          value: 2
                        },
                        {
                          label:
                            lang === 'uzb'
                              ? '3-qavat'
                              : lang === 'rus'
                              ? '3-й этаж'
                              : '3rd floor',
                          value: 3
                        },
                        {
                          label:
                            lang === 'uzb'
                              ? '4-qavat'
                              : lang === 'rus'
                              ? '4-й этаж'
                              : '4th floor',
                          value: 4
                        },
                        {
                          label:
                            lang === 'uzb'
                              ? '5-qavat'
                              : lang === 'rus'
                              ? '5-й этаж'
                              : '5th floor',
                          value: 5
                        }
                      ],
                      ...(selection.block !== 3
                        ? [
                            {
                              label:
                                lang === 'uzb'
                                  ? '6-qavat'
                                  : lang === 'rus'
                                  ? '6-й этаж'
                                  : '6th floor',
                              value: 6
                            },
                            {
                              label:
                                lang === 'uzb'
                                  ? '7-qavat'
                                  : lang === 'rus'
                                  ? '7-й этаж'
                                  : '7th floor',
                              value: 7
                            }
                          ]
                        : [])
                    ]
              }
            />
          </div>
        </div>
        <div className="w-full  shadow-md gap-[10px] glass  p-2 border  border-zinc-300 px-[25px] rounded-xl flex items-center justify-center      ">
          <div className="w-[25%] puff-in-center text-[14px]">
            {lang === 'uzb' ? 'Xona' : lang === 'rus' ? 'Комната' : 'Room'}:
          </div>
          <div className="w-[75%]">
            <Select
              allowClear
              onChange={(value) => {
                setSelection((p) => ({ ...p, room: value }));
                handleSubmit({
                  block: selection.block,
                  floor: selection.floor,
                  room: value,
                  status:
                    rooms?.find((room: roomDto) => room.room === value)
                      ?.status || 'empty'
                });
              }}
              size="small"
              variant={'borderless'}
              className="w-full"
              disabled={selection.block === 0 && selection.floor === 0}
              value={selection.room}
              placeholder={
                lang === 'uzb'
                  ? 'Xona tanlang'
                  : lang === 'rus'
                  ? 'Выберите комнату'
                  : 'Select room'
              }
              options={rooms?.map((apartment: roomDto, index) => ({
                label: ` ${
                  index +
                  1 +
                  (apartment.block === 'block1'
                    ? apartment.floor === 1
                      ? 0
                      : (apartment.floor - 1) * 6
                    : apartment.block === 'block2'
                    ? apartment.floor === 1
                      ? 0
                      : (apartment.floor - 1) * 10
                    : apartment.block === 'block3'
                    ? apartment.floor === 1
                      ? 0
                      : (apartment.floor - 1) * 10
                    : apartment.floor === 1
                    ? 0
                    : (apartment.floor - 1) * 6)
                } ${
                  lang === 'uzb' ? 'Xona' : lang === 'rus' ? 'Комната' : 'Room'
                }`,
                value: apartment.room
              }))}
            />
          </div>
        </div>
        <div className="w-full">
          <Button
            type="primary"
            size="large"
            className={' w-full '}
            onClick={() => {
              mutate({ data: '66666' });
              setRandomVisable(true);
              setSelection({
                block: undefined,
                floor: undefined,
                room: undefined
              });
            }}
          >
            {lang === 'eng' ? 'Random' : lang === 'rus' ? 'Случайно' : 'Random'}
          </Button>
        </div>
      </div>
      {currentRoom && selection.room && (
        <div className=" z-[7002] gap-[20px] flex flex-col items-center  absolute w-[300px] p-5  g   rounded-xl glass  top-[100px] right-[10px]">
          <button
            onClick={() => handleChanges('empty')}
            className={` min-w-[250px] rounded-xl transition-all text-center ${
              currentRoom.status === 'empty'
                ? ' text-white bg-[#1eb443]'
                : 'glass shadow-3xl shadow'
            } p-[10px]`}
          >
            {lang === 'uzb'
              ? 'Asl holatga qaytarish'
              : lang === 'rus'
              ? 'Вернуться к изначальному состоянию'
              : 'Reset to Default'}
          </button>
          <button
            onClick={() => handleChanges('broned')}
            className={` min-w-[250px] rounded-xl transition-all text-center ${
              currentRoom.status === 'broned'
                ? ' text-white bg-[#316fff] '
                : 'glass shadow-3xl shadow'
            } p-[10px]`}
          >
            {lang === 'uzb'
              ? 'Rezervatsiya qilish'
              : lang === 'rus'
              ? 'Забронировать'
              : 'Booking'}
          </button>
          <button
            onClick={() => handleChanges('selled')}
            className={` min-w-[250px] rounded-xl transition-all text-center ${
              currentRoom.status === 'selled'
                ? ' text-white bg-[#f01717] '
                : 'glass shadow-3xl shadow'
            } p-[10px]`}
          >
            {lang === 'uzb' ? 'Sotish' : lang === 'rus' ? 'Продать' : 'Selling'}
          </button>
        </div>
      )}
      <img
        src={background}
        alt=""
        className=" select-none w-full h-full min-w-[1820px] min-h-[1080px] for-max max-w-[1099px]max-h-[686px] object-cover absolute z-40 "
      />
      {randomVisable ? null : (
        <img
          src={getCurrentImage()}
          alt=""
          className=" select-none w-full h-full min-w-[1820px] min-h-[1080px] for-max max-w-[1099px]max-h-[686px] object-cover absolute z-40 fade-in-out"
        />
      )}
      <AnimatePresence mode="wait">
        {randomVisable ? (
          <motion.img
            key={random}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1, ease: 'easeInOut' }
            }}
            src={getCurrentImage()}
            alt=""
            className="transition-all duration-1000 select-none w-full h-full min-w-[1820px] min-h-[1080px] for-max max-w-[1099px]max-h-[686px] object-cover absolute z-40 "
          />
        ) : null}{' '}
      </AnimatePresence>
      {selection.floor || selection.room ? (
        <div
          onClick={() =>
            setSelection((p) => ({
              ...p,
              floor: p.room == undefined ? undefined : p.floor,
              room: undefined
            }))
          }
          className={`w-full h-full absolute 
           z-[500] flex items-center justify-center glass2 transition-all duration-500  `}
        >
          {(selection.floor || selection.room) && (
            <img
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
              src={getCurrentImage2()}
              alt=""
              loading="lazy"
              className=" select-none sm:w-[50%] sm:h-[50%] w-[30%] h-[30%] mx-auto for-max max-w-[1099px]max-h-[686px] object-contain absolute z-[500]   "
            />
          )}
        </div>
      ) : null}
      <Image
        width={200}
        style={{ display: 'none' }}
        src={getCurrentImage2()}
        onClick={(e) => {
          e.stopPropagation();
        }}
        preview={{
          visible,
          src: getCurrentImage2(),
          onVisibleChange: (value: boolean) => {
            setVisible(value);
          }
        }}
      />
    </div>
  );
};

export default SelectionOfApartments;
