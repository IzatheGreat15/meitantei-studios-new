import {
  FaArrowRight, FaBath, FaCalendarAlt, FaCheck, FaChevronDown, FaClock,
  FaFacebookF, FaGoogle, FaHome, FaInstagram, FaLayerGroup, FaLeaf, FaMapMarkerAlt,
  FaPhoneAlt, FaShieldAlt, FaStar, FaTools, FaUsers, FaWater, FaWrench,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import type { IconType } from "react-icons";
import { FaCircleCheck, FaClipboardList, FaDoorOpen, FaDroplet, FaHammer, FaHeart, FaHouse, FaPaw, FaScissors } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { HiBuildingOffice, HiSparkles } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

const icons: Record<string, IconType> = {
  arrow: FaArrowRight, bath: FaBath, calendar: FaCalendarAlt, check: FaCheck,
  chevron: FaChevronDown, clock: FaClock, droplet: FaDroplet, facebook: FaFacebookF,
  google: FaGoogle, home: FaHome, instagram: FaInstagram, leaf: FaLeaf,
  map: FaMapMarkerAlt, phone: FaPhoneAlt, shield: FaShieldAlt, star: FaStar,
  tool: FaTools, users: FaUsers, water: FaWater, pipes: FaWrench,
  menu: FiMenu, close: FiX, zap: MdElectricBolt, hammer: FaHammer, building: HiBuildingOffice,
  layers: FaLayerGroup, 'door-open': FaDoorOpen, house: FaHouse, 'shield-check': IoShieldCheckmark,
  'message-circle': AiFillMessage, 'clipboard-list': FaClipboardList, 'check-circle': FaCircleCheck,
  heart: FaHeart, paw: FaPaw, scissor: FaScissors, sparkles: HiSparkles
};

export function DemoIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? FaWrench;
  return <Icon aria-hidden="true" className={className} />;
}
