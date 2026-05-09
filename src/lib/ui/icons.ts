import ElevatorIcon from '@components/icons/ElevatorIcon.astro';
import InteriorExteriorIcon from '@components/icons/InteriorExteriorIcon.astro';
import LadderIcon from '@components/icons/LadderIcon.astro';
import NarrowIcon from '@components/icons/NarrowIcon.astro';
import OpenDoorIcon from '@components/icons/OpenDoorIcon.astro';
import StairsIcon from '@components/icons/StairsIcon.astro';
import {
  Armchair,
  CircleQuestionMark,
  Factory,
  House,
  Leaf,
  PanelsTopLeft,
  Ruler,
  Trees,
  Warehouse,
  Wrench,
} from '@lucide/astro';

export const sectorIcons = {
  metalwork: PanelsTopLeft,
  private_clients: House,
  industry: Factory,
  architecture_and_renovations: Ruler,
  hospitality_and_events: Armchair,
  agriculture: Leaf,
};

export const installationPlaceIcons = {
  indoor: Warehouse,
  outdoor: Trees,
  indoor_outdoor: InteriorExteriorIcon,
  not_sure: CircleQuestionMark,
};

export const accessIcons = {
  street_access: OpenDoorIcon,
  stairs: StairsIcon,
  elevator: ElevatorIcon,
  height_work: LadderIcon,
  narrow_access: NarrowIcon,
  remove_existing_piece: Wrench,
};
