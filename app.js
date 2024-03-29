import { MenuBtns } from "./src/components/menu-btns";
import { GameSection } from "./src/components/game-section";
import { GameCard } from "./src/components/game-card";
import { CustomModal } from "./src/components/custom-modal";
import { SearchGames } from "./src/components/search-games";
import { FilterForm } from "./src/components/filter-games";
import { SaveData } from "./src/components/save-data";
import { EditGame } from "./src/components/edit-game";
import { PlayGame } from "./src/components/play-game";
import { AddGame } from "./src/components/add-game";

window.customElements.define(`menu-btns`, MenuBtns);
window.customElements.define(`game-section`, GameSection);
window.customElements.define(`game-card`, GameCard);
window.customElements.define(`custom-modal`, CustomModal);
window.customElements.define(`search-games`, SearchGames);
window.customElements.define(`filter-games`, FilterForm);
window.customElements.define(`save-data`, SaveData);
window.customElements.define(`edit-game`, EditGame);
window.customElements.define(`play-game`, PlayGame);
window.customElements.define(`add-game`, AddGame);
