import { HomeOutlined } from '@ant-design/icons';
import { ConfigProvider, Drawer, Menu, MenuProps, Select } from 'antd';

import { useEffect, useState } from 'react';
import { BiSolidChess } from 'react-icons/bi';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

import { GiHamburgerMenu } from 'react-icons/gi';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const PageLayout = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useParams();

  const items: MenuItem[] = [
    {
      key: '',
      icon: <HomeOutlined />,
      label: lang === 'eng' ? 'Home Page' : 'Ana sayfa'
    },
    {
      key: 'selling-apartments',
      icon: <BsFillBuildingsFill />,
      label: lang === 'eng' ? 'Selling department' : 'Satış departmanı'
    },
    {
      key: 'table',
      icon: <BiSolidChess />,
      label: lang === 'eng' ? 'Table' : 'Tablo'
    }
  ];
  const navigate = useNavigate();
  useEffect(() => {
    if (lang !== 'eng') {
      if (lang !== 'tr') {
        navigate('/eng');
      }
    }
  }, [lang, navigate]);
  const navValue = window.location.pathname.split('/');

  return (
    <div className="w-screen h-screen bg-[#f5f5f5]  relative">
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
            <div className="dancing-script font-bold w-full  h-[10%] px-[10px] text-[36px] flex items-center justify-between">
              <div className="flex items-center justify-between gap-[10px] w-full px-[10px]">
                <span className="text-[20px]">
                  {lang === 'eng' ? 'Boulvar' : 'Boulevard'}
                </span>
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
                  }}
                  defaultSelectedKeys={[navValue[2]]}
                  activeKey=""
                  style={{ width: '100%' }}
                  items={items}
                />
              </div>{' '}
              <div className="h-[5%]">
                <Select
                  className="w-[50%]  ml-[12px]"
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
                      value: 'tr',
                      label: (
                        <div className="flex items-center justify-start gap-[10px]">
                          <img
                            src="https://flagsapi.com/TR/shiny/32.png"
                            alt=""
                          />
                          Türkçe
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
