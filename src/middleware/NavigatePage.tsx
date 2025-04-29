import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const NavigatePage = () => {
  const navigate = useNavigate();
  const defaultLang = 'uzb';
  const { lang } = useParams();

  useEffect(() => {
    if (!lang) {
      navigate(`/${defaultLang}`);
    }
  }, [navigate, lang]);
  return <Outlet />;
};

export default NavigatePage;
