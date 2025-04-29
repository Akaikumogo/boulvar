import { Spin } from 'antd';
import { useGetAll } from '../API/db';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';

export type roomDto = {
  _id: string;
  block: 'block1' | 'block2' | 'block3' | 'block4';
  floor: number;
  room: number;
  status: 'empty' | 'broned' | 'selled';
};
// eslint-disable-next-line react-refresh/only-export-components
export function calculateRoomNumber(apartment: roomDto, arrLength: number) {
  const roomsPerFloor = arrLength === 25 ? 5 : 4;
  const floorOffset = (apartment.floor - 1) * roomsPerFloor;
  return floorOffset + apartment.room;
}
const RoomTable = () => {
  // const { mutate } = usePostRequst();
  const { data: allAppartments, isSuccess } = useGetAll();
  const { lang } = useParams();
  const ablock = allAppartments?.filter(
    (apartment: roomDto) => apartment.block === 'block3'
  );
  const cblock = allAppartments?.filter(
    (apartment: roomDto) => apartment.block === 'block1'
  );
  const bblock = allAppartments?.filter(
    (apartment: roomDto) => apartment.block === 'block4'
  );
  const dblock = allAppartments?.filter(
    (apartment: roomDto) => apartment.block === 'block2'
  );

  // const { mutate: update } = useUpdate();
  const [loaddingroom, setLoaddingroom] = useState<{
    roomid: string;
    isloading: boolean;
    status: 'empty' | 'broned' | 'selled';
  }>({
    roomid: '',
    isloading: false,
    status: 'empty'
  });
  useEffect(() => {
    setLoaddingroom((p) => ({ ...p, isloading: isSuccess }));
  }, [isSuccess]);
  // const handleChanges = (
  //    status: 'empty' | 'broned' | 'selled',
  //    id: string,
  // ) => {
  //    setLoaddingroom({
  //       roomid: id,
  //       isloading: true,
  //       status,
  //    });
  //    update(
  //       {
  //          id,
  //          status,
  //       },
  //       {
  //          onSuccess() {
  //             refetch();
  //             setTimeout(() => {
  //                setLoaddingroom({
  //                   roomid: '',
  //                   isloading: isSuccess,
  //                   status: 'empty',
  //                });
  //             }, 1000);
  //          },
  //       },
  //    );
  // };
  const mapF = (arr: roomDto[]) =>
    arr?.map((apartment: roomDto) => {
      return (
        <div
          className={`w-[85px] shshsh rounded-xl h-[75px] ${
            loaddingroom.isloading && loaddingroom.roomid === apartment._id
              ? ' bg-slate-300'
              : apartment.status === 'empty'
              ? 'bg-green-300 -green-600'
              : apartment.status === 'broned'
              ? ' bg-blue-300 -blue-600'
              : 'bg-red-300 -red-600'
          } `}
          key={apartment._id}
        >
          {loaddingroom.isloading && loaddingroom.roomid === apartment._id ? (
            <div className="w-full h-full flex items-center justify-center">
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
              />
            </div>
          ) : (
            <div className=" flex items-center justify-center w-full h-full">
              <h1 className="text-3xl">
                {/* {lang === 'tr' ? 'Oda' : 'Room'} : */}
                {calculateRoomNumber(apartment, arr.length)}
              </h1>
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="w-full bg-white h-full flex items-center justify-center">
      <div
        className="min-w-[1600px] min-h-[860px] relative  -black
          for-max  overflow-auto flex flex-col gap-10  w-full h-full px-[100px] py-[100px] "
      >
        <div className="w-full flex  gap-1 text-center text-2xl font-bold">
          <h1>Boulvar</h1>|
          <h1 className="font-mono text-[12px] text-green-600">
            {lang === 'uz' ? "Bo'sh" : lang === 'ru' ? 'Свободно' : 'Empty'}:{' '}
            {
              allAppartments?.filter(
                (apartment) => apartment.status === 'empty'
              ).length
            }
            |90|
            {Math.round(
              ((allAppartments?.filter(
                (apartment) => apartment.status === 'empty'
              )?.length || 0) /
                90) *
                100
            )}
            %
          </h1>
          |
          <h1 className="font-mono text-[12px] text-blue-600">
            {lang === 'uz'
              ? 'Bron qilingan'
              : lang === 'ru'
              ? 'Забронировано'
              : 'Broned'}
            :{' '}
            {
              allAppartments?.filter(
                (apartment) => apartment.status === 'broned'
              ).length
            }
            |90|
            {Math.round(
              ((allAppartments?.filter(
                (apartment) => apartment.status === 'broned'
              )?.length || 0) /
                90) *
                100
            )}
            %
          </h1>
          |
          <h1 className="font-mono text-[12px] text-red-600">
            {lang === 'uz' ? 'Sotilgan' : lang === 'ru' ? 'Продано' : 'Sold'}:{' '}
            {
              allAppartments?.filter(
                (apartment) => apartment.status === 'selled'
              ).length
            }
            |90|{' '}
            {Math.round(
              ((allAppartments?.filter(
                (apartment) => apartment.status === 'selled'
              )?.length || 0) /
                90) *
                100
            )}
            %
          </h1>
        </div>
        <div className="   grid  grid-cols-4  gap-[80px] w-[2100px]">
          <div className="w-[500px] ">
            <div className="w-full flex  gap-1 text-center text-2xl font-bold">
              {' '}
              <h1>
                {lang === 'uz' ? 'Blok' : lang === 'ru' ? 'Блок' : 'Block'} A
              </h1>
              |
              <h1 className="font-mono text-[12px] text-green-600">
                {lang === 'uz' ? "Bo'sh" : lang === 'ru' ? 'Свободно' : 'Empty'}
                :{' '}
                {
                  ablock?.filter((apartment) => apartment.status === 'empty')
                    .length
                }
                |25|
                {Math.round(
                  ((ablock?.filter((apartment) => apartment.status === 'empty')
                    ?.length || 0) /
                    25) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-blue-600">
                {lang === 'uz'
                  ? 'Bron qilingan'
                  : lang === 'ru'
                  ? 'Забронировано'
                  : 'Broned'}
                :{' '}
                {
                  ablock?.filter((apartment) => apartment.status === 'broned')
                    .length
                }
                |25|
                {Math.round(
                  ((ablock?.filter((apartment) => apartment.status === 'broned')
                    ?.length || 0) /
                    25) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-red-600">
                {lang === 'uz'
                  ? 'Sotilgan'
                  : lang === 'ru'
                  ? 'Продано'
                  : 'Sold'}
                :{' '}
                {
                  ablock?.filter((apartment) => apartment.status === 'selled')
                    .length
                }
                |25|{' '}
                {Math.round(
                  ((ablock?.filter((apartment) => apartment.status === 'selled')
                    ?.length || 0) /
                    25) *
                    100
                )}
                %
              </h1>
            </div>
            <div className=" w-full grid grid-cols-5 gap-5">
              {mapF(ablock || [])}
            </div>
          </div>
          <div className="w-[500px] ">
            <div className="w-full flex  gap-1 text-center text-2xl font-bold">
              {' '}
              <h1>
                {lang === 'uz' ? 'Blok' : lang === 'ru' ? 'Блок' : 'Block'} B
              </h1>
              |
              <h1 className="font-mono text-[12px] text-green-600">
                {lang === 'uz' ? "Bo'sh" : lang === 'ru' ? 'Свободно' : 'Empty'}
                :{' '}
                {
                  cblock?.filter((apartment) => apartment.status === 'empty')
                    .length
                }
                |20|
                {Math.round(
                  ((cblock?.filter((apartment) => apartment.status === 'empty')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-blue-600">
                {lang === 'uz'
                  ? 'Bron qilingan'
                  : lang === 'ru'
                  ? 'Забронировано'
                  : 'Broned'}
                :{' '}
                {
                  bblock?.filter((apartment) => apartment.status === 'broned')
                    .length
                }
                |20|
                {Math.round(
                  ((bblock?.filter((apartment) => apartment.status === 'broned')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-red-600">
                {lang === 'uz'
                  ? 'Sotilgan'
                  : lang === 'ru'
                  ? 'Продано'
                  : 'Sold'}
                :{' '}
                {
                  bblock?.filter((apartment) => apartment.status === 'selled')
                    .length
                }
                |20|{' '}
                {Math.round(
                  ((bblock?.filter((apartment) => apartment.status === 'selled')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
            </div>
            <div className=" w-full grid grid-cols-5 gap-5">
              {mapF(bblock || [])}
            </div>
          </div>
          <div className="w-[500px] ">
            <div className="w-full flex  gap-1 text-center text-2xl font-bold">
              {' '}
              <h1>
                {lang === 'uz' ? 'Blok' : lang === 'ru' ? 'Блок' : 'Block'} C
              </h1>
              |
              <h1 className="font-mono text-[12px] text-green-600">
                {lang === 'uz' ? "Bo'sh" : lang === 'ru' ? 'Свободно' : 'Empty'}
                :{' '}
                {
                  cblock?.filter((apartment) => apartment.status === 'empty')
                    .length
                }
                |20|
                {Math.round(
                  ((cblock?.filter((apartment) => apartment.status === 'empty')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-blue-600">
                {lang === 'uz'
                  ? 'Bron qilingan'
                  : lang === 'ru'
                  ? 'Забронировано'
                  : 'Broned'}
                :{' '}
                {
                  cblock?.filter((apartment) => apartment.status === 'broned')
                    .length
                }
                |20|
                {Math.round(
                  ((cblock?.filter((apartment) => apartment.status === 'broned')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-red-600">
                {lang === 'uz'
                  ? 'Sotilgan'
                  : lang === 'ru'
                  ? 'Продано'
                  : 'Sold'}
                :{' '}
                {
                  cblock?.filter((apartment) => apartment.status === 'selled')
                    .length
                }
                |20|{' '}
                {Math.round(
                  ((cblock?.filter((apartment) => apartment.status === 'selled')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
            </div>
            <div className=" w-full grid grid-cols-5 gap-5">
              {mapF(cblock || [])}
            </div>
          </div>
          <div className="w-[500px] ">
            <div className="w-full flex  gap-1 text-center text-2xl font-bold">
              {' '}
              <h1>
                {lang === 'uz' ? 'Blok' : lang === 'ru' ? 'Блок' : 'Block'} D
              </h1>
              |
              <h1 className="font-mono text-[12px] text-green-600">
                {lang === 'uz' ? "Bo'sh" : lang === 'ru' ? 'Свободно' : 'Empty'}
                :{' '}
                {
                  dblock?.filter((apartment) => apartment.status === 'empty')
                    .length
                }
                |20|
                {Math.round(
                  ((dblock?.filter((apartment) => apartment.status === 'empty')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-blue-600">
                {lang === 'uz'
                  ? 'Bron qilingan'
                  : lang === 'ru'
                  ? 'Забронировано'
                  : 'Broned'}
                :{' '}
                {
                  dblock?.filter((apartment) => apartment.status === 'broned')
                    .length
                }
                |20|
                {Math.round(
                  ((dblock?.filter((apartment) => apartment.status === 'broned')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
              |
              <h1 className="font-mono text-[12px] text-red-600">
                {lang === 'uz'
                  ? 'Sotilgan'
                  : lang === 'ru'
                  ? 'Продано'
                  : 'Sold'}
                :{' '}
                {
                  dblock?.filter((apartment) => apartment.status === 'selled')
                    .length
                }
                |20|{' '}
                {Math.round(
                  ((dblock?.filter((apartment) => apartment.status === 'selled')
                    ?.length || 0) /
                    20) *
                    100
                )}
                %
              </h1>
            </div>
            <div className=" w-full grid grid-cols-5 gap-5">
              {mapF(dblock || [])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTable;
