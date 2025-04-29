import { HomeOutlined } from '@ant-design/icons';
import { ConfigProvider, Drawer, Menu, MenuProps, Select } from 'antd';

import { useEffect, useState } from 'react';
import { BiSolidChess } from 'react-icons/bi';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import davlatAka from '../assets/logo/tarh.png';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { usePostRequst } from '../API';

type MenuItem = Required<MenuProps>['items'][number];

const PageLayout = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useParams();
  const { mutate } = usePostRequst();
  const items: MenuItem[] = [
    {
      key: '',
      icon: <HomeOutlined />,
      label: {
        eng: 'Home Page',
        uzb: 'Bosh sahifa',
        rus: 'Главная страница'
      }[lang as 'eng']
    },
    {
      key: 'selling-apartments',
      icon: <BsFillBuildingsFill />,
      label: {
        eng: 'Selling department',
        uzb: "Sotuv bo'limi",
        rus: 'Отдел продаж'
      }[lang as 'eng']
    },
    {
      key: 'table',
      icon: <BiSolidChess />,
      label: {
        eng: 'Table',
        uzb: 'Jadval',
        rus: 'Таблица'
      }[lang as 'eng']
    }
  ];
  const navigate = useNavigate();
  useEffect(() => {
    if (lang !== 'eng' && lang !== 'rus' && lang !== 'uzb') {
      navigate('/eng');
    }
  }, [lang, navigate]);
  const navValue = window.location.pathname.split('/');

  return (
    <div className="w-screen h-screen min-w-[1820px] min-h-[1080px] bg-[#f5f5f5]  relative">
      <div className="absolute z-[6000] bottom-10 right-15">
        <img src={davlatAka} width={65} alt="" />
      </div>
      <button className=" bg-white cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center absolute top-[30px] left-[30px] z-50 active:scale-95 transition-all duration-200">
        <div onClick={() => setOpen(true)}>
          <GiHamburgerMenu className="text-[25px] text-black" />
        </div>
      </button>
      <ConfigProvider
        theme={{
          components: {
            Drawer: {
              footerPaddingBlock: 0,
              footerPaddingInline: 0,
              padding: 0,
              marginXS: 0,
              paddingLG: 0,
              paddingXS: 0
            },
            Menu: {
              itemSelectedColor: 'rgb(255,255,255)',
              itemSelectedBg: 'rgb(0,0,0)'
            }
          }
        }}
      >
        <Drawer
          width={'300px'}
          getContainer={false}
          placement={'left'}
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="w-full h-full flex flex-col items-start justify-start py-[10px] ">
            <div className="dancing-script font-bold w-full  h-[5%] px-[10px] text-[36px] flex items-center justify-between">
              <div className="flex items-center justify-between gap-[10px] w-full px-[10px]">
                <span className="text-[20px]">Boulvar</span>
              </div>
              <div className="rounded-full " onClick={() => setOpen(false)}>
                <CgClose className="" />
              </div>
            </div>
            <div className=" w-full h-[95%] flex flex-col justify-between ">
              <div className="  ">
                {' '}
                <Menu
                  mode="inline"
                  onClick={(e) => {
                    setOpen(false);
                    navigate(e.key);
                    mutate({
                      data:
                        e.key === 'selling-apartments'
                          ? '66666'
                          : e.key === 'table'
                          ? '55555'
                          : '66666'
                    });
                  }}
                  defaultSelectedKeys={[navValue[2]]}
                  activeKey=""
                  style={{ width: '100%' }}
                  items={items}
                />
              </div>{' '}
              <div className="h-[5%] w-full  flex items-center justify-center">
                <Select
                  className="w-[90%]  mx-auto"
                  placeholder="language"
                  onChange={(value) => {
                    const [, , ...restOfPath] =
                      window.location.pathname.split('/');

                    navigate(`/${value}/${restOfPath.join('/')}`);
                  }}
                  options={[
                    {
                      value: 'eng',
                      label: (
                        <div className="flex items-center justify-start gap-[10px]">
                          <img
                            src="https://flagsapi.com/US/shiny/32.png"
                            alt=""
                          />
                          English
                        </div>
                      )
                    },
                    {
                      value: 'rus',
                      label: (
                        <div className="flex items-center justify-start gap-[10px]">
                          <img
                            src="https://flagsapi.com/RU/shiny/32.png"
                            alt=""
                          />
                          Русский
                        </div>
                      )
                    },
                    {
                      value: 'uzb',
                      label: (
                        <div className="flex items-center justify-start gap-[10px]">
                          <img
                            src="https://flagsapi.com/UZ/shiny/32.png"
                            alt=""
                          />
                          O'zbekcha
                        </div>
                      )
                    }
                  ]}
                  value={lang}
                />
              </div>
            </div>
          </div>
        </Drawer>
      </ConfigProvider>
      <Outlet />
    </div>
  );
};

export default PageLayout;
