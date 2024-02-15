import { Equip } from "../store/storeTypes";


export default function EquipIcon(equip: Equip) {

    return (
        <div>
            <img src={equip.icon} alt="Image" />
            <p>{equip.name}</p>
        </div>
    );
}