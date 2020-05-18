import { useContext } from 'react';
import LocalizationContext from "./contexts/LocalizationContext";

function Localize(lStrings) {
    const local = useContext(LocalizationContext);
    return lStrings[local];
};

export default Localize;