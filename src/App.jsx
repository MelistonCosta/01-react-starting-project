import Header from "./components/Header/Header.jsx";
import { User } from "./components/User/User.jsx";
import AlertPopup from "./components/AlertPopup/AlertPopup.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabExamples from "./components/TabExamples/TabExamples.jsx";
import CardExercise from "./components/CardExercise/CardExercise.jsx";
import DiscountExercise from "./components/DiscountExercise/DiscountExercise.jsx";
import ExerciseButton from "./components/ExerciseButton/ExerciseButton.jsx";

function App() {
  return (
    <>
      <Header />
      <User />
      <main>
        <h2>Time to get started!!!</h2>
        <CoreConcepts />
        <TabExamples />
        <CardExercise />
        <DiscountExercise />
        <AlertPopup />
        <ExerciseButton />
      </main>
    </>
  );
}

export default App;
