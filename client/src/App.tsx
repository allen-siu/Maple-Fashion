// import store from "./store/store"
import { useSelector } from "react-redux"
import { getEquipmentCategory } from "./store/storeController"
import { RootState } from "./store/store"
import EquipIcon from "./components/EquipIcon"
import { useDispatch } from "react-redux"
import { changeCategory } from "./store/reducers/closetSlice"
import { Equip } from "./store/storeTypes"

function App() {

  const dispatch= useDispatch();
  const equips: Equip[] = useSelector((state: RootState) => state.closet.equipsDisplayed)

  const displayEquips = async () => {
    const newEquipsToDisplay = await getEquipmentCategory()
    dispatch(changeCategory(newEquipsToDisplay)); 
  }

  return (
    <div>
      <button
        onClick={displayEquips}>
          Click here
      </button>

      {equips.map((equip) => {
        return <EquipIcon key={equip.itemId} {...equip} />;
      })}
    </div>
  )
}

export default App
