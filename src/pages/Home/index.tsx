import React from 'react';
import BreadCrumbTag from '../../components/BreadCrumb/BreadCrumbTag';
import PageDefault from '../../components/PageDefault';
import { FaFilePdf } from 'react-icons/fa';
import {
  HomeCoreDisclaimer,
  HomeCoreDisclaimerTitle,
  HomeSection,
} from './styles';
import CoreLogo from '../../assets/img/CoreLogo';

const Home: React.FC = () => {
  return (
    <>
      <PageDefault
        breadCrumbs={
          <BreadCrumbTag>
            <FaFilePdf size={18} />
            Pesquise no CORE.
          </BreadCrumbTag>
        }
      >
        <HomeSection>
          <HomeCoreDisclaimer>
            <HomeCoreDisclaimerTitle>
              <CoreLogo />
              CORE
            </HomeCoreDisclaimerTitle>
            <p>
              CORE é maior coleção do mundo de artigos públicos de pesquisa.
            </p>

            <p>Faça uma pesquisa e surpreenda-se!</p>
          </HomeCoreDisclaimer>
        </HomeSection>
      </PageDefault>
    </>
  );
};

export default Home;
