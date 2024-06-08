// MarketStrategy.js
import React from 'react';
import styled from 'styled-components';

const StrategyContainer = styled.div`
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: #555;
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;
const Highlight = styled.span`
  font-weight: bold;
  color: #000;
`;

const MarketStrategy = () => {
  return (
    <StrategyContainer>
      <Title>Estrategia de Mercado de BizLink Global</Title>
      <Section>
        <SectionTitle>Lanzamiento y promoción</SectionTitle>
        <SectionDescription>
          Implementaremos una campaña de lanzamiento robusta que incluye
          publicidad en redes sociales, marketing de contenidos y eventos en
          vivo. Utilizaremos estrategias de SEO y SEM para aumentar la
          visibilidad online y atraer a nuestro público objetivo.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Colaboraciones</SectionTitle>
        <SectionDescription>
          {/*  Formaremos alianzas estratégicas con otras empresas del sector para
          ofrecer soluciones integradas. Estas colaboraciones nos permitirán
          acceder a nuevos mercados y aumentar nuestro alcance. */}
          Colaboraciones con cámaras de comercio y asociaciones empresariales
          para atraer usuarios.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Incentivos de referidos</SectionTitle>
        <SectionDescription>
          Ofreceremos programas de incentivos de referidos donde los usuarios
          actuales pueden obtener beneficios al invitar a nuevos usuarios a la
          plataforma. Esto nos ayudará a crecer orgánicamente a través del boca
          a boca.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Proyección de Usuarios</SectionTitle>
        <SectionDescription>
          Realizaremos estudios de mercado y análisis de datos para proyectar el
          crecimiento de nuestra base de usuarios. Estas proyecciones nos
          ayudarán a ajustar nuestras estrategias y asegurar un crecimiento
          sostenible.
          <Highlight>
            Objetivo a corto plazo: 1.000 usuarios en 2 semanas.
          </Highlight>
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Crecimiento continuo</SectionTitle>
        <SectionDescription>
          Implementaremos una estrategia de mejora continua basada en la
          retroalimentación de los usuarios y análisis de rendimiento.
          Innovaremos constantemente para mantener nuestra ventaja competitiva y
          satisfacer las necesidades cambiantes del mercado. Incremento mensual
          de un 20% en la base de usuarios durante el primer año.
        </SectionDescription>
      </Section>
    </StrategyContainer>
  );
};

export default MarketStrategy;
