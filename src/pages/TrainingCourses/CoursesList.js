import Banner from "../../components/Banner/Banner";
import classes from "./CoursesList.module.css";
import TrainingSection from "./CourseSection";
import { useSelector } from "react-redux";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import Actions from "./Actions/Actions";

const CoursesList = () => {
  const courses = useSelector((state) => state.courses.coursesContent);
  const editMode = useSelector((state) => state.ui.editMode);
  return (
    <>
      <Banner id={4} />
      <div className={classes.courses_container}>
        {courses.map((item, index) => (
          <div className="dispay-flex" data-aos={editMode ? "" : "fade-up"}>
            <TrainingSection
              id={item.id}
              key={item.id}
              title={item.title}
              link={item.link}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              sectionImage={item.sectionImage}
              organizer={item.organizer}
              price={item.price}
              index={index}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <Actions id={item.id} />
              </AddOrEdit>
            )}
          </div>
        ))}
      </div>
      {editMode && (
        <AddOrEdit edit={false}>
          <Actions />
        </AddOrEdit>
      )}
    </>
  );
};
export default CoursesList;

// const [trainings, setTrainings] = useState([]);
// const getTrainings = async () => {
//   const response = await fetch("/api/treningi/");
//   const data = await response.json();
//   setTrainings(data);
// };
// useEffect(() => {
//   getTrainings();
// }, []);
// import React, { useState, useEffect } from "react";

// const trainings = [
//   {
//     title: "TRENING INDYWIDUALNY",
//     link: "trening-indywidualny",
//     description: [
//       "Zajęcia przeznaczone dla pojedynczego teamu przewodnik-pies niezależnie od poziomu zaawansowania.",
//       "Miejsce spotkania wyznaczamy indywidualnie, ale generalnie spotykamy się w terenie.",
//       "Program nie jest z góry ustalony - trenujemy to, co jest Wam w tym momencie potrzebne.",
//     ],
//     image: `${piesek}`,
//     organizator: "Tak to się Obi",
//     koszt: "1 spotkanie (ok. 50min.) – 70 zł",
//     koszt2: "Pakiet 6 treningów – 380 zł",
//   },
//   {
//     title: "Posłuszeństwo z el. obedience",
//     link: "posluszenstwo-el-obd",
//     description: [
//       "Zajęcia grupowe.",
//       "Psy muszą być minimum na poziomie kursów podstawowego posłuszeństwa.",
//       "Miejsce spotkań to plac w centrum Szczecina oraz park Kasprowicza.",
//       "Program jest z góry ustalony – 8 spotkań 1x/tydzień.",
//       "Ćwiczenia z zakresu kl. 0 z elementami kl. 1.",
//     ],
//     image: `${posluszenstwo}`,
//     organizator: "Szkoła na 6 Łap",
//     koszt: "8 spotkań – 550 zł",
//   },
//   {
//     title: "Obedience 1",
//     link: "obedience-1",
//     description: [
//       "Zajęcia grupowe.",
//       "Team musi mieć ukończony kurs Posłuszeństwo z elementami obedience.",
//       "Miejsce spotkań to plac w centrum Szczecina oraz park Kasprowicza.",
//       "Program jest z góry ustalony – 8 spotkań 1x/tydzień.",
//       "Ćwiczenia z zakresu kl. 0 i 1.",
//     ],
//     image: `${soon}`,
//     organizator: "Szkoła na 6 Łap",
//     koszt: "8 spotkań – ? zł",
//   },
//   {
//     title: "Sportowy szczeniak",
//     link: "sportowy-szczeniak",
//     description: [
//       "Zajęcia grupowe przeznaczone dla szczeniąt w wieku do 5 miesięcy, z którymi właściciele planują sportowe życie.",
//       "Na zajęciach ćwiczymy podstawowe komendy z dodatkiem elementów przydatnych do trenowania obedience.",
//       "Miejsce spotkań to plac w centrum Szczecina.",
//       "Program jest z góry ustalony – 8 spotkań 1x/tydzień.",
//     ],
//     image: `${szczeniak}`,
//     organizator: "Szkoła na 6 Łap",
//     koszt: "8 spotkań – 550 zł",
//   },
//   {
//     title: "Treningi wspólne",
//     link: "treningi-wspolne",
//     description: [
//       "Zajęcia grupowe, podczas których „każdy sobie rzepkę skrobie” – Wy ćwiczycie ze swoimi psami, ja ze swoimi.",
//       "Miejsce spotkań jest takie, na jakie się umówimy.",
//       "W zimie wynajmujemy halę.",
//       "Częstotliwość spotkań – jaka komu pasuje :)",
//     ],
//     image: `${wsp1}`,
//     organizator: "Tak to się Obi",
//     koszt: "1 spotkanie (1h) - 30zł",
//     koszt2: "6 spotkań – 150 zł",
//     koszt3: "+ zimą koszt wynajęcia hali, którym się dzielimy",
//   },
// ];