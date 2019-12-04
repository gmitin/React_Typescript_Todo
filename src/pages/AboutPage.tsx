import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, atque?
        Pariatur itaque quas molestias consequatur ea ducimus praesentium quod
        nulla repellat quos unde ab architecto, quibusdam tenetur cumque
        expedita consequuntur.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
