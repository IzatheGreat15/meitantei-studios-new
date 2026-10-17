import {
  FaArrowRight, FaBath, FaCalendarAlt, FaCheck, FaChevronDown, FaClock,
  FaFacebookF, FaGoogle, FaHome, FaInstagram, FaLeaf, FaMapMarkerAlt,
  FaPhoneAlt, FaShieldAlt, FaStar, FaTools, FaUsers, FaWater, FaWrench,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import type { IconType } from "react-icons";
import { FaDroplet } from "react-icons/fa6";

const icons: Record<string, IconType> = {
  arrow: FaArrowRight, bath: FaBath, calendar: FaCalendarAlt, check: FaCheck,
  chevron: FaChevronDown, clock: FaClock, droplet: FaDroplet, facebook: FaFacebookF,
  google: FaGoogle, home: FaHome, instagram: FaInstagram, leaf: FaLeaf,
  map: FaMapMarkerAlt, phone: FaPhoneAlt, shield: FaShieldAlt, star: FaStar,
  tool: FaTools, users: FaUsers, water: FaWater, pipes: FaWrench,
  menu: FiMenu, close: FiX,
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
